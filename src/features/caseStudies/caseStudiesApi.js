const mockCaseStudies = [
  {
    id: "cs-01",
    title: "E-Commerce Replatform",
    category: "Web",
    summary: "Migrated a legacy storefront to a modern React stack with faster checkout.",
    year: 2024,
  },
  {
    id: "cs-02",
    title: "Fintech Mobile Wallet",
    category: "Mobile",
    summary: "Built a secure wallet app with biometric login and instant transfers.",
    year: 2023,
  },
  {
    id: "cs-03",
    title: "Customer Support Copilot",
    category: "AI",
    summary: "AI assistant that drafts replies and searches knowledge base in seconds.",
    year: 2025,
  },
  {
    id: "cs-04",
    title: "Supply Chain Dashboard",
    category: "Web",
    summary: "Real-time analytics dashboard with alerts and role-based access controls.",
    year: 2022,
  },
  {
    id: "cs-05",
    title: "Fitness Coaching App",
    category: "Mobile",
    summary: "Personalized training plans, progress tracking, and push notifications.",
    year: 2021,
  },
  {
    id: "cs-06",
    title: "Smart Contract Audit Toolkit",
    category: "Blockchain",
    summary: "Automated checks and reporting for common Solidity vulnerabilities.",
    year: 2024,
  },
  {
    id: "cs-07",
    title: "Fraud Risk Scoring",
    category: "AI",
    summary: "Risk scoring model pipeline with monitoring, drift alerts, and reporting.",
    year: 2023,
  },
  {
    id: "cs-08",
    title: "NFT Marketplace MVP",
    category: "Blockchain",
    summary: "Minting, listings, and on-chain transactions with a clean user experience.",
    year: 2022,
  },
];

export const fetchCaseStudies = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.15;
      if (shouldFail) {
        reject(new Error("Network failed"));
        return;
      }

      resolve(mockCaseStudies);
    }, 800);
  });

