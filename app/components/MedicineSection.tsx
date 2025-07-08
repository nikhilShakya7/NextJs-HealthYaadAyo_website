import React from "react";
import Button from "./Button"; // Import your Button component

interface MedicineDeliveryProps {
  title?: string;
  subtitle?: string;
  description?: string;
  featureLists?: string[][];
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  titleColor?: string;
  sectionTitle?: string;
}

const MedicineDelivery: React.FC<MedicineDeliveryProps> = ({
  title = "Medicine",
  subtitle = "Delivery At Home",
  description = "Introducing our revolutionary online platform designed to simplify the process of ordering and receiving your medications. With just a few clicks, you can now have your prescriptions delivered straight to your doorstep.",
  featureLists = [
    [
      "Seamless Ordering",
      "Fast And Reliable Delivery",
      "Convenient Delivery Options",
    ],
    ["Refill Reminders", "24/7 Customer Support", "Secure Payment Options"],
  ],
  buttonText = "Book a demo today",
  imageSrc = "/images/overlay4.svg",
  imageAlt = "Medicine Delivery",
  titleColor = "#8037B6",
  sectionTitle = "Know Your Right Medicines",
}) => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full md:w-[50%] pt-[50px] md:pt-[120px] relative">
            <img
              src={imageSrc}
              className="w-full max-w-[500px] mx-auto md:max-w-none object-contain"
              alt={imageAlt}
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[50%] pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
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

            {sectionTitle && (
              <p className="text-[#4C4C4C] font-['Raleway'] font-bold text-xs xs:text-sm sm:text-base tracking-wider uppercase">
                {sectionTitle}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 pt-2 sm:pt-3">
              {featureLists.map((list, listIndex) => (
                <ul key={listIndex} className="space-y-3 sm:space-y-4">
                  {list.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 font-['Raleway'] text-sm sm:text-base md:text-lg leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <Button label={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDelivery;
