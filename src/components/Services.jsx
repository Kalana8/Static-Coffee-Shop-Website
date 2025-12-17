import { Coffee, ShoppingBag, Wifi, BookOpen, Music } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Dine-In',
      description: 'Enjoy your coffee in our cozy, welcoming atmosphere',
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway',
      description: 'Grab your favorite brew on the go',
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'Stay connected while you work or relax',
    },
    {
      icon: BookOpen,
      title: 'Work/Study Space',
      description: 'Comfortable seating perfect for productivity',
    },
    {
      icon: Music,
      title: 'Live Music',
      description: 'Enjoy local artists on weekends',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-latte via-latte/95 to-cream overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm sm:text-base text-gold font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso mb-6">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-24 h-0.5 bg-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
            Everything you need for the perfect coffee experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition-all duration-500 transform hover:-translate-y-2 border border-espresso/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-gold/30 group-hover:to-gold/20 group-hover:rotate-3">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-espresso mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-espresso/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

