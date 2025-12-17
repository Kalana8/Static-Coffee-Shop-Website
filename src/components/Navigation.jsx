import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'menu', label: 'Shop' },
    { to: 'menu', label: 'Menu' },
    { to: 'gallery', label: 'Blog' },
    { to: 'about', label: 'About Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with coffee cup icon */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cream rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-espresso" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 21h20v-2H2v2zm1-1h18c.55 0 1-.45 1-1v-1H2v1c0 .55.45 1 1 1zm1.22-3c.55-.61 1.33-1 2.22-1s1.67.39 2.22 1H4.22zM9 16c-.67 0-1.35.09-2 .26V8c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8.26c-.65-.17-1.33-.26-2-.26-2.21 0-4.21.9-5.66 2.34L9 16zm6-6V8H9v2h6z"/>
                  </svg>
                </div>
                {/* Latte art decoration */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full opacity-80"></div>
              </div>
              <span className="text-2xl md:text-3xl font-sans font-bold text-cream group-hover:text-gold transition-colors duration-300">
                Koffee
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={`${link.to}-${link.label}`}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-cream hover:text-gold text-sm font-medium transition-colors duration-200 cursor-pointer"
                  activeClass="text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-espresso/50 border border-gold/30 rounded-lg px-4 py-2 text-cream placeholder-cream/50 text-sm focus:outline-none focus:border-gold w-48"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-cream hover:text-gold transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-cream hover:text-gold transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              )}
            </div>
            {/* Shopping Cart */}
            <button className="text-cream hover:text-gold transition-colors relative" aria-label="Shopping cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-xs text-espresso font-bold">0</span>
            </button>
            {/* User Profile */}
            <button className="text-cream hover:text-gold transition-colors" aria-label="User profile">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-cream hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-espresso border-t border-gold/20">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.to}-${link.label}-${index}`}
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
            {/* Mobile icons */}
            <div className="flex items-center gap-4 px-3 py-2 border-t border-gold/20 mt-2">
              <button className="text-cream hover:text-gold transition-colors" aria-label="Shopping cart">
                <ShoppingCart size={20} />
              </button>
              <button className="text-cream hover:text-gold transition-colors" aria-label="User profile">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

