import HomeSwitcher from '@/components/home/HomeSwitcher';
import {
  complianceDisclaimer,
  investorAdvantages,
  investorFaq,
  investorPreApprovalAdvantages,
  investorPreApprovalChecklist,
  investorRequirements,
  investorSuggestedCopy,
  investorTimeline,
  socialProofCards,
  touristDurations,
  touristFaq,
  touristRequirements,
  touristTimeline,
  trustBadges,
} from '@/lib/content';

export const metadata = {
  title: 'Dubai Investor & Tourist Visa Consultants',
  description:
    'Cipher Global LLC helps investors and travelers secure Dubai visas fast. Toggle between investor and tourist paths for tailored steps, requirements, and FAQs.',
};

const options = [
  {
    id: 'investor',
    badge: 'Residency + Business',
    title: 'Investor Visa',
    description: 'Launch your company, secure Emirates ID, and sponsor your family with a long-term UAE investor visa.',
    points: [
      'Business setup and residency bundled',
      'Full document prep and pre-approval guidance',
    ],
  },
  {
    id: 'tourist',
    badge: 'Fast Stays',
    title: 'Tourist Visa',
    description: 'Need 14, 30, 60, or 90 days? Get a reliable UAE tourist visa with quick turnaround and airline-ready paperwork.',
    points: [
      'Approvals in as little as 24 hours',
      'Families and solo travelers welcome',
    ],
  },
];

const investorContent = {
  advantages: investorAdvantages,
  preApprovalAdvantages: investorPreApprovalAdvantages,
  preApprovalChecklist: investorPreApprovalChecklist,
  requirements: investorRequirements,
  timeline: investorTimeline,
  suggestedCopy: investorSuggestedCopy,
  faq: investorFaq,
};

const touristContent = {
  durations: touristDurations,
  requirements: touristRequirements,
  timeline: touristTimeline,
  faq: touristFaq,
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...investorFaq, ...touristFaq].map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
      />
      <HomeSwitcher
        options={options}
        trustBadges={trustBadges}
        investorContent={investorContent}
        touristContent={touristContent}
        socialProofCards={socialProofCards}
        complianceDisclaimer={complianceDisclaimer}
      />
    </>
  );
}
