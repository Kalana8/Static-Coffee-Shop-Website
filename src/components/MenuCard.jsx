const MenuCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-espresso/5">
      {/* Image container with overlay */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-3 py-1 bg-gold/95 backdrop-blur-sm text-espresso text-xs font-bold rounded-full shadow-lg">
            {item.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-espresso group-hover:text-gold transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent ml-2 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-sm sm:text-base text-espresso/70 leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        
        {/* Decorative line */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mb-3 group-hover:w-full transition-all duration-500"></div>
        
        {/* Hover indicator */}
        <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-semibold uppercase tracking-wider">View Details</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

