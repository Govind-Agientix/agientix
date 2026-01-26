import { PageLayout } from "@/components/layout/PageLayout";
import { useParams } from "react-router-dom";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 1, 2026",
    content: `
## Introduction

Agientix AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

## Information We Collect

### Information You Provide
- Contact information (name, email, phone number)
- Company information
- Account credentials
- Communication preferences
- Any other information you choose to provide

### Information Collected Automatically
- Device and browser information
- IP address and location data
- Usage data and analytics
- Cookies and similar technologies

## How We Use Your Information

We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send promotional communications (with your consent)
- Respond to your comments, questions, and requests
- Monitor and analyze usage and trends
- Detect, prevent, and address technical issues

## Data Sharing

We do not sell your personal information. We may share your information with:
- Service providers who assist in our operations
- Professional advisors (lawyers, accountants, etc.)
- Law enforcement when required by law
- Business partners with your consent

## Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Opt-out of marketing communications
- Data portability

## Contact Us

If you have questions about this Privacy Policy, please contact us at privacy@agientix.ai.
    `,
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 1, 2026",
    content: `
## Agreement to Terms

By accessing or using Agientix AI services, you agree to be bound by these Terms of Service and all applicable laws and regulations.

## Use License

Permission is granted to temporarily access and use our services for personal or business purposes, subject to the restrictions outlined in these terms.

## Restrictions

You may not:
- Use the services for any unlawful purpose
- Attempt to gain unauthorized access to our systems
- Interfere with or disrupt the services
- Reverse engineer or decompile any software
- Use automated systems to access the services without permission

## Service Availability

We strive to provide reliable services but do not guarantee uninterrupted access. We may modify or discontinue services at any time.

## Intellectual Property

All content, features, and functionality are owned by Agientix AI and are protected by intellectual property laws.

## Limitation of Liability

Agientix AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the services.

## Indemnification

You agree to indemnify and hold harmless Agientix AI from any claims arising from your use of the services or violation of these terms.

## Governing Law

These terms shall be governed by the laws of the State of California without regard to conflict of law provisions.

## Changes to Terms

We reserve the right to modify these terms at any time. Continued use of the services constitutes acceptance of modified terms.

## Contact

For questions about these Terms, contact legal@agientix.ai.
    `,
  },
  cookies: {
    title: "Cookie Policy",
    lastUpdated: "January 1, 2026",
    content: `
## What Are Cookies

Cookies are small text files stored on your device when you visit websites. They help websites function properly and provide information to site owners.

## How We Use Cookies

### Essential Cookies
Required for the website to function. Cannot be disabled.

### Analytics Cookies
Help us understand how visitors interact with our website.

### Marketing Cookies
Used to deliver relevant advertisements and track campaign performance.

## Managing Cookies

You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.

## Third-Party Cookies

Some cookies are placed by third-party services that appear on our pages, such as analytics and advertising partners.

## Updates to This Policy

We may update this Cookie Policy from time to time. Please review it periodically.

## Contact

For questions about our use of cookies, contact privacy@agientix.ai.
    `,
  },
};

export default function Legal() {
  const { type } = useParams<{ type?: string }>();
  
  const page = type && type in legalContent 
    ? legalContent[type as keyof typeof legalContent] 
    : legalContent.privacy;

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold mb-4">{page.title}</h1>
            <p className="text-muted-foreground mb-8">Last updated: {page.lastUpdated}</p>
            <div className="prose prose-slate max-w-none">
              {page.content.split('\n').map((line, index) => {
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="font-display text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="font-semibold text-lg mt-6 mb-2">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('- ')) {
                  return <li key={index} className="text-muted-foreground ml-4">{line.replace('- ', '')}</li>;
                }
                if (line.trim()) {
                  return <p key={index} className="text-muted-foreground mb-4">{line}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
