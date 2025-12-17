import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowRight, Coffee } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed overflow-hidden"
    >
      {/* Main hero background - Clear high-quality coffee beans image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop&auto=format&q=95')",
          backgroundColor: '#2C1810'
        }}
      ></div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-espresso/40 to-espresso/20"></div>
      
      {/* Additional depth with subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, transparent 0%, rgba(44, 24, 16, 0.2) 100%)'
        }}
      ></div>

      {/* Content - Left aligned */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:px-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-2xl">
          {/* Main heading - large white serif font, left-aligned */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 sm:mb-8 leading-tight text-left ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
            <span className="text-cream drop-shadow-2xl">
              Enjoy your happy moment
            </span>
            <br />
            <span className="text-cream drop-shadow-2xl">
              with <span className="text-gold">koffee</span>
            </span>
          </h1>

          {/* Description text - smaller white sans-serif, left-aligned */}
          <p className={`text-sm sm:text-base md:text-lg text-cream/90 mb-8 sm:mb-10 font-sans leading-relaxed text-left max-w-xl ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
            Quisque ut morbi platea dignissim elementum ipsum. Ultricies at hac orci, nulla sit. Ut lectus nunc accumsan egestas non. Ultrices nec mauris sit eget volutpat at vitae sem.
          </p>

          {/* CTA Button - dark brown background, rounded corners, white text */}
          <div className={`text-left ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-block bg-espresso hover:bg-espresso/90 text-cream font-semibold px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

