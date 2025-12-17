const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800&fit=crop",
      alt: "Coffee shop interior"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=800&fit=crop",
      alt: "Coffee preparation"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=800&fit=crop",
      alt: "Coffee cup"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=800&fit=crop",
      alt: "Latte art"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=800&fit=crop",
      alt: "Cappuccino"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=800&fit=crop",
      alt: "Pastries display"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&h=800&fit=crop",
      alt: "Fresh muffins"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1626087925301-0c9e5e0b0c8e?w=600&h=800&fit=crop",
      alt: "Cinnamon rolls"
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream via-cream to-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm sm:text-base text-gold font-semibold tracking-widest uppercase mb-4">
            Visual Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso mb-6">
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-24 h-0.5 bg-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
            A glimpse into our cozy atmosphere and artisanal creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 border border-espresso/5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-semibold text-sm uppercase tracking-wide">
                    {image.alt}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

