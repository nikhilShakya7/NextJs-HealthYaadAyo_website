import React from "react";
import Button from "./Button";

interface VirtualBookingSectionProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  titleColor?: string;
}

const VirtualBookingSection: React.FC<VirtualBookingSectionProps> = ({
  title = "Virtual",
  subtitle = "Doctor Booking",
  description1 = "Welcome to our cutting-edge online platform designed to streamline your healthcare experience! With our user-friendly interface, booking a doctor's appointment has never been easier.",
  description2 = "Our platform features a simple and intuitive interface that caters to users of all ages and technological backgrounds. Whether you're tech-savvy or new to online booking, you'll find the process effortless.",
  buttonText = "Book a demo today",
  imageSrc = "/images/overlay3.svg",
  imageAlt = "Virtual Doctor Booking",
  titleColor = "#8037B6",
}) => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] h-auto mx-auto">
        {/* Text Content*/}
        <div className="w-full md:w-[50%] float-none md:float-left relative z-0 pt-[50px] md:pt-[120px]">
          <h1
            className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.25rem] lg:text-[2.75rem] xl:text-[74px] leading-tight"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <h2 className="font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
            {subtitle}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            {description1}
          </p>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-6 sm:mb-8 leading-relaxed">
            {description2}
          </p>
          <Button label={buttonText} />
        </div>

        {/* Image */}
        <div className="w-full md:w-[50%] float-none md:float-right pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
          <img
            src={imageSrc}
            className="w-full max-w-[500px] mx-auto md:max-w-none object-contain max-h-[500px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[550px]"
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualBookingSection;
