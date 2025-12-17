const SectionDivider = ({ variant = 'default' }) => {
  if (variant === 'wave') {
    return (
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
            className="text-cream"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full py-8 sm:py-12">
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-gold"></div>
        <div className="w-2 h-2 bg-gold rounded-full"></div>
        <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-l from-transparent via-gold/50 to-gold"></div>
      </div>
    </div>
  );
};

export default SectionDivider;

