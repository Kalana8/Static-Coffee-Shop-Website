const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
              alt="Coffee shop interior"
              className="w-full h-auto rounded-card shadow-card object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-espresso">
              A Cozy Corner for Coffee Lovers
            </h3>
            <p className="text-lg text-espresso/80 leading-relaxed">
              Welcome to Brew & Bean, where every cup tells a story. Since opening our doors,
              we've been dedicated to serving the finest coffee and creating a warm, inviting
              atmosphere for our community.
            </p>
            <p className="text-lg text-espresso/80 leading-relaxed">
              Our passion for coffee is matched only by our commitment to quality. We source
              our beans from sustainable farms and roast them to perfection, ensuring every
              sip delivers the rich, complex flavors our customers love.
            </p>
            <p className="text-lg text-espresso/80 leading-relaxed">
              What makes us special? It's not just our coffee—it's the experience. From the
              moment you walk in, you'll feel the warmth of our space, the aroma of freshly
              brewed coffee, and the friendly smiles of our team. We're more than a coffee
              shop; we're a gathering place for friends, a workspace for dreamers, and a
              haven for anyone seeking a perfect cup of coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

