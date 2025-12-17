import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <section
      id="menu"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm sm:text-base text-gold font-semibold tracking-widest uppercase mb-4">
            What We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso mb-6">
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-24 h-0.5 bg-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffees and freshly baked pastries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

