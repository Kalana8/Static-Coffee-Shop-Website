import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-4 sm:mb-6">
          Brew & Bean
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream/90 mb-8 sm:mb-12 font-light">
          Brewed Fresh Daily
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-espresso font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
        >
          Order Now
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

