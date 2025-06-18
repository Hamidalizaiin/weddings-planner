import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'How It Works', href: '#how' },
  { name: 'Vendors', href: '#vendors' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 shadow transition-shadow"
      style={{ backgroundColor: 'var(--color-ivory)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tight" style={{ color: 'var(--color-gold-dark)' }}>WeddingWork</div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:underline transition-colors duration-200 px-2 py-1 rounded"
              style={{ color: 'var(--color-slategray)', backgroundColor: 'transparent' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#login"
            className="px-4 py-2 border rounded-lg font-medium transition-all duration-200"
            style={{ color: 'var(--color-sage)', borderColor: 'var(--color-sage)', backgroundColor: 'transparent' }}
          >
            Login
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#vendors"
            className="px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-slategray-dark)' }}
          >
            For Vendors
          </motion.a>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition"
          style={{ backgroundColor: 'var(--color-beige)' }}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-50 backdrop-blur flex flex-col lg:hidden"
            style={{ backgroundColor: 'rgba(255, 248, 240, 0.97)' }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--color-beige-dark)' }}>
              <span className="font-bold text-2xl" style={{ color: 'var(--color-gold-dark)' }}>WeddingWork</span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded transition"
                style={{ backgroundColor: 'var(--color-beige)' }}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 mt-10 px-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200"
                  style={{ color: 'var(--color-slategray)', backgroundColor: 'var(--color-beige)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-8 px-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#login"
                className="px-4 py-3 border rounded-lg font-medium transition-all duration-200 text-center"
                style={{ color: 'var(--color-sage)', borderColor: 'var(--color-sage)', backgroundColor: 'transparent' }}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#vendors"
                className="px-4 py-3 rounded-lg font-semibold shadow transition-all duration-200 text-center"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-slategray-dark)' }}
                onClick={() => setMenuOpen(false)}
              >
                For  Vendors
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
