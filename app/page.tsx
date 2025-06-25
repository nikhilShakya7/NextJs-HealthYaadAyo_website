"use client";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg1.svg')" }}
    >
      <div className="relative min-h-screen overflow-hidden pt-30">
        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-10 lg:px-20 xl:px-32 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Heading Line 1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Raleway'] text-[#7131A3] capitalize mb-1  sm:mb-1">
              Meet - Nepals
            </h1>

            {/* Heading Line 2 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Raleway'] text-[#34134F] capitalize mb-6 sm:mb-3">
              Health Aggregator
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-8 sm:mb-12 max-w-2xl leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator.
            </p>

            {/* CTA Button */}
            <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#7131A3] 
              text-white font-semibold text-base sm:text-lg
              hover:bg-[#5a2580] transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50
              active:bg-[#4a1d6a] shadow-md hover:shadow-lg cursor-pointer"
              type="submit"
            >
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
