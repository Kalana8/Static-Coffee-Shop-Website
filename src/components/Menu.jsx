import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <section
      id="menu"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffees and freshly baked pastries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

