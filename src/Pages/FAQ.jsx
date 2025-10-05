import React from 'react';
import { Shield, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is GovAssist?',
    answer: 'GovAssist is a platform designed to simplify the process of accessing Indian government services. We provide clear, step-by-step guides in multiple languages to help you navigate complex application procedures.',
  },
  {
    question: 'Is GovAssist a government website?',
    answer: 'No, GovAssist is not an official government website. We are a third-party service that provides information and guidance. We always link to official government sources for applications and payments.',
  },
  {
    question: 'Is my data safe on this platform?',
    answer: 'Yes, your privacy is our priority. We do not save any of your personal information on our servers. All progress tracking and recently viewed services are stored locally on your device using your browser\'s local storage.',
  },
  {
    question: 'What is DigiLocker?',
    answer: 'DigiLocker is a flagship initiative of the Ministry of Electronics & IT (MeitY) under the Digital India program. It provides a secure cloud-based platform for the storage, sharing, and verification of documents and certificates.',
  },
  {
    question: 'How do I update my Aadhaar card details?',
    answer: 'You can update your name, address, date of birth, and gender on your Aadhaar card through the official UIDAI website. Our Aadhaar Services guide provides a step-by-step walkthrough of the process.',
  },
  {
    question: 'What documents are required for a new passport?',
    answer: 'The required documents for a new passport typically include proof of address, proof of date of birth, and identity proof. Our Passport Application guide provides a detailed checklist of accepted documents.',
  },
  {
    question: 'How can I apply for a PAN card?',
    answer: 'You can apply for a PAN card online through the NSDL or UTIITSL websites. Our PAN Card Application guide will walk you through the entire process, from filling out the form to uploading your documents.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="mx-auto h-12 w-12 text-orange-500" />
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-gray-100">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Find answers to common questions about our platform and the services we cover.</p>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{faq.question}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <Shield className="mx-auto h-10 w-10 text-blue-500" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Still have questions?</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">While we don\'t offer direct support, we recommend visiting the official government websites for the most accurate and up-to-date information.</p>
      </div>
    </div>
  );
}
