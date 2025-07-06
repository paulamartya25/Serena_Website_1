export default function FAQ() {
  return (
    <section className="min-h-screen w-full bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqList.map((faq, index) => (
            <details
              key={index}
              className="group p-6 border border-purple-300 rounded-lg bg-purple-50 transition duration-300 hover:bg-purple-100 cursor-pointer"
            >
              <summary className="font-semibold text-lg group-open:mb-3 transition-all duration-300">
                {faq.question}
              </summary>
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ FAQ content list
const faqList = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions are done via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'A 24-hour notice is required for cancellations.',
  },
  {
    question: 'What types of therapy do you offer?',
    answer: 'I offer CBT, mindfulness-based, and trauma-informed therapy.',
  },
  {
    question: 'How long is each session?',
    answer: 'Each session typically lasts around 50 minutes.',
  },
  {
    question: 'Can I schedule a free consultation?',
    answer: 'Absolutely! You can schedule a free 15-minute consult through the contact page.',
  },
  {
    question: 'Is therapy confidential?',
    answer: 'Yes. All sessions are fully confidential according to HIPAA regulations.',
  },
];
