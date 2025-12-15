const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-espresso">
            {item.name}
          </h3>
          <span className="text-lg sm:text-xl font-bold text-gold ml-2">
            {item.price}
          </span>
        </div>
        <p className="text-sm sm:text-base text-espresso/70 leading-relaxed">
          {item.description}
        </p>
        <span className="inline-block mt-3 px-3 py-1 bg-latte text-espresso text-xs sm:text-sm rounded-full">
          {item.category}
        </span>
      </div>
    </div>
  );
};

export default MenuCard;

