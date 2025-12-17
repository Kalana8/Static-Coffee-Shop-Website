const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - centered, simple */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso mb-4">
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image on left - coffee cup with latte art */}
          <div className="relative">
            {/* Circular graphic element overlapping top-left */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-espresso/10 rounded-full blur-xl z-0"></div>

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop"
                alt="Coffee cup with latte art on wooden surface"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Text Content on right */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed font-sans">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed font-sans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

