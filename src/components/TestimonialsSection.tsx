import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ayesha Khan',
    city: 'Karachi',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    feedback:
      'WeddingWork made planning our big day so easy! Every vendor was professional and the dashboard kept us organized.'
  },
  {
    name: 'Ali Raza',
    city: 'Lahore',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.5,
    feedback:
      'We found our decorator and photographer in minutes. The secure payments and reviews gave us peace of mind.'
  },
  {
    name: 'Sara Imran',
    city: 'Islamabad',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    feedback:
      'Absolutely loved the experience! The team was so helpful and every detail was taken care of.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.18, duration: 0.7 }
  })
};

const TestimonialsSection = () => (
  <section
    className="py-20 px-4 md:px-8 lg:px-16"
    style={{ backgroundColor: 'var(--color-sage-light)' }}
  >
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-14"
        style={{ color: 'var(--color-slategray-dark)' }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            whileHover={{ scale: 1.035, boxShadow: '0 8px 32px 0 rgba(230,200,124,0.10)' }}
            className="rounded-xl shadow-md border p-8 flex flex-col items-center text-center transition-all duration-300 bg-white"
            style={{ border: '1.5px solid var(--color-gold-light)' }}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border"
              style={{ border: '2.5px solid var(--color-gold-light)' }}
            />
            <div className="font-semibold text-lg mb-1" style={{ color: 'var(--color-slategray-dark)' }}>{t.name}</div>
            <div className="text-sm mb-2" style={{ color: 'var(--color-slategray)' }}>{t.city}</div>
            <div className="flex items-center justify-center mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    color: idx < Math.floor(t.rating) ? 'var(--color-gold)' : 'var(--color-gold-light)',
                    fontSize: 20,
                    marginRight: 2
                  }}
                >
                  ★
                </span>
              ))}
              {t.rating % 1 !== 0 && (
                <span style={{ color: 'var(--color-gold)', fontSize: 20, marginLeft: -2 }}>&#189;</span>
              )}
            </div>
            <div className="italic text-base" style={{ color: 'var(--color-slategray)' }}>
              “{t.feedback}”
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 