import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample vendor data
const vendorsData = [
  {
    id: 1,
    name: "Sarah's Photography",
    city: "Karachi",
    category: "Photographer",
    rating: 4.8,
    price: 25000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 2,
    name: "Elegant Decor",
    city: "Lahore",
    category: "Decorator",
    rating: 4.9,
    price: 45000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 3,
    name: "Glamour Makeup Studio",
    city: "Islamabad",
    category: "Makeup Artist",
    rating: 4.7,
    price: 35000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 4,
    name: "Royal Catering",
    city: "Karachi",
    category: "Caterer",
    rating: 4.9,
    price: 75000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 5,
    name: "Dream Lens",
    city: "Lahore",
    category: "Photographer",
    rating: 4.8,
    price: 55000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 6,
    name: "Wedding Bliss",
    city: "Islamabad",
    category: "Decorator",
    rating: 4.7,
    price: 65000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 7,
    name: "Beauty by Aisha",
    city: "Karachi",
    category: "Makeup Artist",
    rating: 4.9,
    price: 40000,
    image: "https://placehold.co/400x300"
  },
  {
    id: 8,
    name: "Delicious Delights",
    city: "Lahore",
    category: "Caterer",
    rating: 4.8,
    price: 85000,
    image: "https://placehold.co/400x300"
  }
];

const categories = ["Photographer", "Decorator", "Makeup Artist", "Caterer"];
const cities = ["Karachi", "Lahore", "Islamabad"];
const budgetRanges = [
  { label: "10k-30k", min: 10000, max: 30000 },
  { label: "30k-60k", min: 30000, max: 60000 },
  { label: "60k+", min: 60000, max: Infinity }
];

const FeaturedVendorsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const filteredVendors = vendorsData.filter(vendor => {
    const categoryMatch = !selectedCategory || vendor.category === selectedCategory;
    const cityMatch = !selectedCity || vendor.city === selectedCity;
    const budgetMatch = !selectedBudget || 
      (vendor.price >= budgetRanges.find(range => range.label === selectedBudget)?.min! &&
       vendor.price <= budgetRanges.find(range => range.label === selectedBudget)?.max!);
    
    return categoryMatch && cityMatch && budgetMatch;
  });

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: 'var(--color-sage-light)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-slategray-dark)' }}
        >
          Top Wedding Vendors
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--color-gold)' : 'var(--color-beige)',
                  color: selectedCategory === category ? 'var(--color-slategray-dark)' : 'var(--color-slategray)',
                  border: `1.5px solid var(--color-beige-dark)`
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--color-beige-dark)', color: 'var(--color-slategray)', backgroundColor: 'var(--color-ivory)' }}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--color-beige-dark)', color: 'var(--color-slategray)', backgroundColor: 'var(--color-ivory)' }}
          >
            <option value="">All Budgets</option>
            {budgetRanges.map(range => (
              <option key={range.label} value={range.label}>{range.label}</option>
            ))}
          </select>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredVendors.map(vendor => (
              <motion.div
                key={vendor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                className="rounded-xl overflow-hidden shadow-md"
                style={{ backgroundColor: 'white', border: '1.5px solid var(--color-beige-dark)' }}
              >
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-48 object-cover"
                  style={{ borderBottom: '1.5px solid var(--color-beige-dark)' }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-slategray-dark)' }}>{vendor.name}</h3>
                  <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--color-slategray)' }}>
                    <span>{vendor.city}</span>
                    <span>•</span>
                    <span>{vendor.category}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <span style={{ color: 'var(--color-gold)' }}>⭐</span>
                    <span style={{ color: 'var(--color-slategray)' }}>{vendor.rating}</span>
                  </div>
                  <p className="mb-4" style={{ color: 'var(--color-slategray)' }}>
                    Starting from PKR {vendor.price.toLocaleString()}
                  </p>
                  <button
                    className="w-full py-2 rounded-md font-semibold transition-colors"
                    style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-slategray-dark)' }}
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendorsSection; 