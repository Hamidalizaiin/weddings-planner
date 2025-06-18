import { motion } from 'framer-motion';

const steps = [
  {
    icon: "🔍",
    title: "Browse Vendors",
    description: "Explore our curated list of trusted wedding vendors, from photographers to caterers, all in one place."
  },
  {
    icon: "📋",
    title: "Select & Shortlist",
    description: "Compare vendors, read reviews, and create your shortlist of favorites for each service category."
  },
  {
    icon: "💳",
    title: "Confirm & Pay Advance",
    description: "Book your chosen vendors with secure payments and manage all deposits in one dashboard."
  },
  {
    icon: "✨",
    title: "Finalize Plan",
    description: "Work with your vendors to finalize all details and get ready for your perfect wedding day."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const HowItWorksSection = () => {
  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: 'var(--color-sage-light)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-slategray-dark)' }}
          >
            Plan Your Dream Wedding in 4 Simple Steps
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-slategray)' }}
          >
            Everything you need — vendors, budget, and confirmations — managed in one platform.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 p-8"
              style={{ backgroundColor: 'white', border: '1.5px solid var(--color-beige-dark)' }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl group-hover:shadow"
                style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-sage-dark)' }}
              >
                {step.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-center group-hover:underline transition-colors duration-300"
                style={{ color: 'var(--color-slategray-dark)' }}
              >
                {step.title}
              </h3>
              <p className="text-center" style={{ color: 'var(--color-slategray)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 