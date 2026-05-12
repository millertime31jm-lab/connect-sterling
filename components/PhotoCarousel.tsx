import Image from "next/image";

export default function PhotoCarousel() {
  // Now pulling directly from your local public/photos folder
  const photos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
  ];

  return (
    <section className="w-full bg-slate-50 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Life in <span className="text-blue-700">Sterling</span>
        </h2>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {photos.map((src, index) => (
          <div 
            key={index} 
            className="relative shrink-0 w-80 md:w-96 aspect-[4/3] snap-center overflow-hidden rounded-2xl shadow-sm border border-slate-200"
          >
            <Image
              src={src} 
              alt={`Sterling Lifestyle ${index + 1}`} 
              fill
              sizes="(min-width: 768px) 24rem, 20rem"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
