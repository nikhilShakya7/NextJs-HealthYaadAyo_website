import React from "react";

interface Country {
  name: string;
  flag: string;
}

interface InternationalDoctorProps {
  title?: string;
  subtitle?: string;
  description?: string;
  countries?: Country[];
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  titleColor?: string;
}

const InternationalDoctor: React.FC<InternationalDoctorProps> = ({
  title = "Consultation",
  subtitle = "International Doctor",
  description = "Welcome to our innovative platform connecting you with a world of healthcare expertise. With our online consultation service, you can now access top-tier medical advice.",
  countries = [
    { name: "India", flag: "/images/india.svg" },
    { name: "Nepal", flag: "/images/india.svg" },
    { name: "USA", flag: "/images/india.svg" },
    { name: "UK", flag: "/images/india.svg" },
  ],
  buttonText = "Book A Demo Today",
  imageSrc = "/images/overlay5.svg",
  imageAlt = "International Doctor Consultation",
  titleColor = "#8037B6",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
        {/* Image */}
        <div className="w-full md:w-[50%] float-none md:float-right pt-[50px] md:pt-[120px] relative">
          <img
            src={imageSrc}
            className="w-full max-w-[500px] mx-auto md:max-w-none object-contain max-h-[500px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[600px]"
            alt={imageAlt}
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[50%] float-none md:float-left pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
          <h1
            className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[74px] leading-tight"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <h2 className="-mb-4 sm:-mb-6 font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
            {subtitle}
          </h2>

          <p className="pt-4 sm:pt-6 md:pt-8 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            {description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {countries.map((country, index) => (
              <li key={index} className="flex items-center gap-2 p-1">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5 object-contain"
                />
                <h4 className="text-gray-800 font-['Raleway'] text-sm">
                  {country.name}
                </h4>
              </li>
            ))}
          </ul>

          <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternationalDoctor;
