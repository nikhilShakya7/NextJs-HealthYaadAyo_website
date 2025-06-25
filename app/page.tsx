"use client";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg1.svg')" }}
      />

      <div
        className="absolute z-10 
          w-[200px] h-[200px] 
          sm:w-[350px] sm:h-[290px]
          md:w-[420px] md:h-[350px]
          lg:w-[480px] lg:h-[400px]
          xl:w-[495px] xl:h-[418px]

          top-[25%] sm:top-[32%] md:top-[36%] lg:top-[40%]
          left-1/2 transform -translate-x-1/2 lg:left-[52%] lg:translate-x-0 xl:left-[55%] 2xl:left-[612px]"
      />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* Heading 1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-2 leading-tight">
              Meet - Nepal's
            </h1>

            {/* Heading 2 */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] font-normal font-['Raleway'] text-[#34134F] capitalize mb-6 leading-tight">
              Health Aggregator
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-8 max-w-2xl leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator.
            </p>

            {/* CTA Button */}
            <button
              className="px-6 py-3 sm:px-8 sm:py-3 md:py-4 rounded-full bg-[#7131A3] 
              text-white font-semibold text-base sm:text-lg
              hover:bg-[#5a2580] transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50
              active:bg-[#4a1d6a] shadow-md hover:shadow-lg cursor-pointer"
              type="submit"
            >
              Book A Demo Today
            </button>
          </div>

          {/* Section Heading */}
          <div className="mt-20 text-center">
            <h3 className="font-['Raleway'] text-[#34134F] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[100%] capitalize mb-4">
              Why Choose <b>Health Yaad Ayo?</b>
            </h3>

            <p className="font-['Raleway'] font-normal text-base sm:text-lg md:text-xl leading-[30px] text-center capitalize max-w-2xl mx-auto">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
