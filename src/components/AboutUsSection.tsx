import { motion } from 'framer-motion';
import img from '../assets/images/aboutweddingimg.jpg'
const benefits = [
  {
    icon: '✅', // Replace with Heroicon if desired
    title: 'Verified & Reviewed Vendors',
    desc: 'All vendors are carefully vetted and reviewed by real couples, so you can book with confidence.'
  },
  {
    icon: '📋',
    title: 'Plan Everything in One Place',
    desc: 'Manage bookings, payments, and your checklist in a single, easy dashboard.'
  },
  {
    icon: '🔒',
    title: 'Secure Payments & Friendly Support',
    desc: 'Book and pay securely, with a support team that cares about your big day.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const AboutUsSection = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: 'var(--color-ivory)' }}>
    <div className="max-w-6xl mx-auto">
      {/* Title & Subheading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="text-center mb-14"
      >
        <motion.h2
          variants={fadeDown}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--color-slategray-dark)' }}
        >
          Why Choose WeddingWork?
        </motion.h2>
        <motion.p
          variants={fadeDown}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-slategray)' }}
        >
          We make wedding planning simple and joyful — from finding trusted vendors to managing your entire event from one dashboard.
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeScale}
          className="w-full flex justify-center"
        >
          <img
            src={img}
            alt="Wedding planning flat vector pastel illustration"
            className="rounded-xl shadow-lg w-full max-w-md"
            style={{ border: '4px solid var(--color-beige-dark)' }}
          />
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-xl shadow-md p-6"
              style={{ backgroundColor: 'white', border: '1.5px solid var(--color-beige-dark)' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm"
                style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-sage-dark)' }}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--color-slategray-dark)' }}>{benefit.title}</h3>
                <p className="text-base" style={{ color: 'var(--color-slategray)' }}>{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUsSection; 