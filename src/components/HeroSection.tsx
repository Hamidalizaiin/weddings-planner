  import { motion } from 'framer-motion';
  import bgimg from '../assets/images/herobg.jpg'
  const bgImage = bgimg // Replace with your own or a better fit

  const overlayColor = 'rgba(255, 248, 240, 0.56)'; // var(--color-ivory) with opacity

  const HeroSection = () => {
    return (
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Background Image with slow zoom-in */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.07 }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{ background: overlayColor }}
        />
        {/* Foreground Content */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-6 px-4 py-2 rounded-full font-semibold text-sm shadow"
            style={{ background: 'var(--color-sage-light)', color: 'var(--color-sage-dark)' }}
          >
            Modern Wedding Planning
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold mb-6 max-w-2xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: 'var(--color-slategray-dark)', lineHeight: 1.15 }}
          >
            Book Trusted Vendors for Your Dream Wedding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-10 max-w-xl mx-auto text-base md:text-lg font-bold"
            style={{ color: 'white' }}
          >
            Browse photographers, decorators, and makeup artists — all in one platform built for modern couples.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.7 },
              },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#start"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.07, boxShadow: '0 0 0 4px var(--color-gold-light)' }}
              className="z-10 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 text-base"
              style={{
                background: 'var(--color-gold)',
                color: 'white',
                boxShadow: '0 4px 24px 0 rgba(230, 200, 124, 0.18)',
              }}
            >
              Start Planning
            </motion.a>
            <motion.a
              href="#how"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.07, background: 'var(--color-sage-light)' }}
              className="px-6 py-3 rounded-full font-semibold border transition-all duration-300 text-base"
              style={{
                border: '2px solid var(--color-sage)',
                color: 'var(--color-sage)',
                background: 'var(--color-sage-light)',
              }}
            >
              View How It Works
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HeroSection; 