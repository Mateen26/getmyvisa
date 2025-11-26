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
    title: 'Investor Pathway Support',
    description: 'Launch your business in the UAE and understand the residency options available through company formation and investment.',
    points: [
      'Business setup insights and structured support',
      'Document guidance and preparation assistance',
    ],
  },
  {
    id: 'tourist',
    badge: 'Fast Stays',
    title: 'Travel & Entry Support',
    description: 'Get clear guidance on UAE entry requirements with fast coordination, checklists, and document review for your travel plans.',
    points: [
      'Quick turnaround guidance',
      'Support for families and solo travelers',
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
