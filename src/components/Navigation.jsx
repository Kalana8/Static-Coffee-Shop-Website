import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'menu', label: 'Menu' },
    { to: 'services', label: 'Services' },
    { to: 'gallery', label: 'Gallery' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl md:text-3xl font-display font-bold text-cream cursor-pointer"
            >
              Brew & Bean
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-cream hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                  activeClass="text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cream hover:text-gold focus:outline-none focus:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-espresso border-t border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-cream hover:text-gold hover:bg-espresso block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                activeClass="text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

