import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I find and book vendors on WeddingWork?',
    answer:
      'Browse trusted vendors, build your wedding list, and manage everything from planning to payments in one place..'
  },
  {
    question: 'Is there a fee to use the platform?',
    answer:
      'WeddingWork is free for couples to use. Vendors may pay a small commission or listing fee.'
  },
  {
    question: 'Are all vendors verified?',
    answer:
      'Yes! Every vendor is carefully vetted and reviewed by real couples to ensure quality and trust.'
  },
  {
    question: 'Can I manage my bookings and payments in one place?',
    answer:
      'Absolutely. Your dashboard lets you track bookings, payments, and planning tasks all in one spot.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: 'var(--color-ivory-dark)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-slategray-dark)' }}
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl overflow-hidden shadow-sm"
                style={{
                  border: `1.5px solid ${isOpen ? 'var(--color-gold-dark)' : 'var(--color-sage-dark)'}`,
                  background: 'white',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg focus:outline-none"
                  style={{
                    color: isOpen ? 'var(--color-gold-dark)' : 'var(--color-slategray-dark)',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.color = isOpen ? 'var(--color-gold-dark)' : 'var(--color-slategray-dark)')}
                >
                  {faq.question}
                  <span style={{ transition: 'transform 0.2s', color: 'inherit' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-base"
                      style={{ color: 'var(--color-slategray)' }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 