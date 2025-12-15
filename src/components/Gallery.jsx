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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-card shadow-card group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

