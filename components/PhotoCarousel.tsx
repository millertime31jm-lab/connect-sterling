export default function PhotoCarousel() {
  // Temporary high-quality placeholders: Community, Outdoors, Education, Lifestyle
  const photos = [
    "https://images.unsplash.com/photo-1596622723231-b20320c7346b?q=80&w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=800&h=600&fit=crop",
  ];

  return (
    <section className="w-full bg-slate-50 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Life in <span className="text-blue-700">Sterling</span>
        </h2>
      </div>
      
      {/* The Horizontal Scroll Container with native CSS scroll-snap and hidden scrollbars */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {photos.map((src, index) => (
          <div 
            key={index} 
            className="shrink-0 w-80 md:w-96 aspect-[4/3] snap-center overflow-hidden rounded-2xl shadow-sm border border-slate-200"
          >
            <img 
              src={src} 
              alt={`Sterling Lifestyle ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}