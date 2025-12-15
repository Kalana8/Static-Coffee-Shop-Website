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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-latte"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-card shadow-card p-6 sm:p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-full mb-4 sm:mb-6">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-espresso mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-espresso/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

