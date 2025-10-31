import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'LEADS_TO',
];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);

let transporter;

function getTransporter() {
  if (missingEnv.length > 0) {
    throw new Error(`Missing SMTP configuration: ${missingEnv.join(', ')}`);
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, whatsapp, visaType, message } = body;

    const errors = [];
    if (!fullName || typeof fullName !== 'string') errors.push('Full name is required.');
    if (!email || typeof email !== 'string') errors.push('Valid email is required.');
    if (!whatsapp || typeof whatsapp !== 'string') errors.push('WhatsApp number is required.');
    if (!visaType || typeof visaType !== 'string') errors.push('Visa type is required.');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    if (missingEnv.length > 0) {
      return NextResponse.json(
        {
          error: 'Form temporarily unavailable. SMTP configuration is missing.',
        },
        { status: 503 },
      );
    }

    const mailTransporter = getTransporter();

    const subject = `New ${visaType} visa enquiry from ${fullName}`;
    const content = `New visa enquiry submitted via getmyvisatoday.com

Visa Type: ${visaType}
Name: ${fullName}
Email: ${email}
WhatsApp: ${whatsapp}

Message:
${message || 'N/A'}
`;

    await mailTransporter.sendMail({
      from: `Cipher Global LLC <${process.env.SMTP_USER}>`,
      to: process.env.LEADS_TO,
      replyTo: email,
      subject,
      text: content,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead submission failed:', error);
    return NextResponse.json(
      {
        error: 'Unable to submit your request at the moment. Please try again later.',
      },
      { status: 500 },
    );
  }
}

