"use client";

export default function HomePage() {
  const specialities = [
    {
      title: "Pulmonology",
      icon: "/images/icons/pulmonology.svg",
      active: false,
    },
    {
      title: "Obstetrics And Gynecology",
      icon: "/images/icons/obgyn.svg",
      active: true,
    },
    {
      title: "Endocrinology",
      icon: "/images/icons/endo.svg",
      active: false,
    },
    {
      title: "Gastroenterology",
      icon: "/images/icons/gastro.svg",
      active: false,
    },
    {
      title: "Psychiatry",
      icon: "/images/icons/psychiatry.svg",
      active: false,
    },
    {
      title: "Dermatology",
      icon: "/images/icons/darmatology.svg",
      active: false,
    },
    { title: "Orthopedics", icon: "/images/icons/ortho.svg", active: false },
    { title: "Urology", icon: "/images/icons/urology.svg", active: false },
    {
      title: "Stomach & Digestion",
      icon: "/images/icons/digetion.svg",
      active: false,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/bg1.svg')" }}
      />
      <div className="relative z-20 min-h-screen overflow-hidden pt-0">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-0">
          {/* Flex container */}
          <div className="flex flex-col lg:flex-row items-start justify-between h-full">
            {/* Text content */}
            <div className="max-w-4xl lg:max-w-2xl mx-auto lg:mx-0 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-0 leading-tight">
                Meet - Nepals
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] font-normal font-['Raleway'] text-[#34134F] capitalize mb-6 mt-0 leading-tight">
                Health Aggregator
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-8 leading-relaxed">
                Nepal's healthcare landscape has witnessed a remarkable
                transformation with the emergence of the country's foremost
                Health Aggregator.
              </p>
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

            {/* Image container - pushed to right */}
            <div className="w-full lg:w-[50%] xl:w-[55%] flex-shrink-0 self-start mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full">
              <img
                src="/images/hero-main-image.png"
                alt="Health Aggregator Illustration"
                className="w-full h-full object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Heading */}
      <div className="mt-[144px] text-center ">
        <h3 className="font-['Raleway'] text-[#34134F] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[100%] capitalize mb-4">
          Why Choose <b>Health Yaad Ayo?</b>
        </h3>

        <p className="font-['Raleway'] font-normal text-base sm:text-lg md:text-xl leading-[30px] text-center capitalize max-w-2xl mx-auto">
          Nepal's healthcare landscape has witnessed a remarkable transformation
          with the emergence of...
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="relative w-[250px] sm:w-[300px]">
          <img
            src="/images/shape1.svg"
            alt="Shape 1"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-2 black">
            <h3 className="  text-[#4C4C4C] font-['Raleway'] text-[12px]  font-extrabold  leading-[22px]  ml-6  uppercase">
              {" "}
              Instant Check Up
            </h3>
            <p className="text-[#767676] font-['Raleway']   text-[12px] w-40 ml-12 px-3">
              Nepal's Healthcare Landscape Has Witnessed
            </p>
          </div>
        </div>
        <img
          src="/images/shape2.svg"
          alt="Shape 2"
          className="w-[250px] sm:w-[300px] h-auto"
        />
        <div className="relative w-[250px] sm:w-[300px]">
          <img
            src="/images/shape3.svg"
            alt="Shape 3"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-2 black">
            <h3 className="  text-[#4C4C4C] font-['Raleway'] text-[12px]  font-extrabold  leading-[22px]  ml-12  uppercase">
              24 hours lab report{" "}
            </h3>
            <p className="text-[#767676] font-['Raleway']   text-[12px] w-40 ml-12 px-3">
              Nepal's Healthcare Landscape Has Witnessed
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 xl:gap-12 mt-20 md:mt-28 lg:mt-32 xl:mt-40 ml-4 sm:ml-8 md:ml-12 lg:ml-16 px-4 sm:px-6 w-full">
        {/* Overlay Image 2 */}
        <div className="lg:order-1 order-2 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[450px] xl:w-[500px] lg:ml-8 xl:ml-12 lg:-mt-12 xl:-mt-16">
          <img
            src="/images/overlay2.svg"
            alt="overlay2"
            className="w-full h-auto max-h-[600px] sm:max-h-[700px] md:max-h-[800px]"
          />
        </div>

        {/* Content on the right */}
        <div className="lg:order-2 order-1 px-6 sm:px-8 md:px-12 lg:px-16 text-center lg:text-left mb-8 md:mb-12 lg:mb-16 xl:mb-24 w-full max-w-[700px] lg:max-w-[800px]">
          {/* Headings*/}
          <div className="mt-6 lg:mt-0 mb-8 lg:mb-10 xl:mb-12 ml-4 sm:ml-8 md:ml-12 lg:ml-16">
            <h1 className="font-['Raleway'] font-bold text-[36px] xs:text-[40px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] 2xl:text-[74px] leading-[100%] capitalize text-[#8037B6]">
              Physical
            </h1>
            <h2 className="font-['Raleway'] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[56px] 2xl:text-[60px] leading-[100%] capitalize text-black mt-2 lg:mt-3">
              Doctor Booking
            </h2>

            {/* Icon-text section */}
            <div className="flex gap-4 sm:gap-5 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[450px] xl:w-[500px] mx-auto lg:mx-0">
              {/* Icons column */}
              <div className="flex flex-col items-center pt-1 sm:pt-2">
                <img
                  src="/images/icons/icon1.svg"
                  alt="icon1"
                  className="w-12 sm:w-14 md:w-16"
                />
                <img
                  src="/images/icons/icon2.svg"
                  alt="icon2"
                  className="w-12 sm:w-14 md:w-16 mt-4 sm:mt-6"
                />
                <img
                  src="/images/icons/icon3.svg"
                  alt="icon3"
                  className="w-12 sm:w-14 md:w-16 mt-4 sm:mt-6"
                />
                <img
                  src="/images/icons/icon4.svg"
                  alt="icon4"
                  className="w-12 sm:w-14 md:w-16 mt-4 sm:mt-6"
                />
              </div>

              {/* Text container */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1 ">
                <div>
                  <p className="text-[#4C4C4C] font-['Raleway'] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-snug">
                    Physical Doctor Booking
                  </p>
                  <p className="text-[#767676] font-['Raleway'] text-[11px] sm:text-[12px] md:text-[13px] font-normal mt-1 leading-relaxed">
                    Easily schedule appointments with trusted healthcare
                    professionals in just a few clicks.
                  </p>
                </div>

                <div>
                  <p className="text-[#4C4C4C] font-['Raleway'] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-snug">
                    International Doctor Consultation
                  </p>
                  <p className="text-[#767676] font-['Raleway'] text-[11px] sm:text-[12px] md:text-[13px] font-normal mt-1 leading-relaxed">
                    Facilitating consultations with renowned international
                    specialists to address complex healthcare needs.
                  </p>
                </div>

                <div>
                  <p className="text-[#4C4C4C] font-['Raleway'] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-snug">
                    Tele Doctor Consultation
                  </p>
                  <p className="text-[#767676] font-['Raleway'] text-[11px] sm:text-[12px] md:text-[13px] font-normal mt-1 leading-relaxed">
                    Connect with licensed doctors via audio calls, ensuring
                    timely and expert medical advice.
                  </p>
                </div>

                <div>
                  <p className="text-[#4C4C4C] font-['Raleway'] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-snug">
                    Virtual Doctor Consultation
                  </p>
                  <p className="text-[#767676] font-['Raleway'] text-[11px] sm:text-[12px] md:text-[13px] font-normal mt-1 leading-relaxed">
                    Access specialized medical expertise from the comfort of
                    your home, Connect with licensed doctors via video calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-24 mb-0 sm:mt-28 lg:mt-40 px-4 sm:px-6 w-full">
        {" "}
        {/* Text Column */}
        <div className="w-full max-w-[600px] text-center lg:text-left lg:ml-12 lg:pt-2">
          {" "}
          <div className="-mt-6 mb-0 lg:-mt-2 lg:mb-6">
            {" "}
            <h1 className="font-['Raleway'] font-bold text-[48px] xs:text-[52px] sm:text-[60px] md:text-[68px] lg:text-[74px] leading-[95%] tracking-tight text-[#8037B6]">
              Virtual
            </h1>
            <h2 className="font-['Raleway'] text-[36px] xs:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[95%] tracking-tight text-black mt-2 lg:mt-3">
              Doctors Booking
            </h2>
          </div>
          <div className="space-y-5 text-[#4C4C4C] font-['Raleway'] text-[16px] sm:text-[18px] leading-relaxed">
            <p>
              Welcome to our cutting-edge online platform designed to streamline
              your healthcare experience! With our user-friendly interface,
              booking a doctor's appointment has never been easier.
            </p>
            <p>
              Our platform features a simple and intuitive interface that caters
              to users of all ages and technological backgrounds. Whether you're
              tech-savvy or new to online booking, you'll find the process
              effortless.
            </p>
          </div>
          <button
            className=" mt-8 px-4 py-2 w-50 rounded-full bg-[#7131A3] 
  text-white font-medium text-sm
  hover:bg-[#5a2580] transition-colors duration-300
  focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50
  active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer"
          >
            Book a demo today
          </button>
        </div>
        {/* Image Column */}
        <div className="w-full max-w-[800px] lg:w-[700px] lg:ml-8">
          <img
            src="/images/overlay3.svg"
            className="w-full h-auto max-h-[1000px] object-contain lg:scale-110 "
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-24 px-4 sm:px-8 w-full">
        {/* Text Content */}
        <div className="lg:order-2 order-1  max-w-[800px] text-center lg:text-left">
          {/* Headings */}
          <div className="mb-10 px-8 max-w-7xl mx-auto ml-16">
            <h1 className="font-['Raleway'] font-bold text-[48px] sm:text-[60px] md:text-[68px] lg:text-[74px] leading-[1] capitalize text-[#8037B6]">
              Medicine
            </h1>
            <h2 className="font-['Raleway'] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1] capitalize text-black mt-2 mb-6">
              Delivery At Home
            </h2>

            {/* Description & Features */}
            <div className="space-y-6">
              {/* Paragraph */}
              <p className="text-[#4C4C4C] font-['Raleway'] text-[14px] sm:text-[18px] leading-relaxed">
                Introducing our revolutionary online platform designed to
                simplify the process of ordering and receiving your medications.
                With just a few clicks, you can now have your prescriptions
                delivered straight to your doorstep.
              </p>

              {/* Section Title */}
              <p className="text-[#4C4C4C] font-['Raleway'] font-bold text-xs sm:text-sm tracking-wider uppercase">
                Know Your Right Medicines
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 pt-2">
                {/* Left Features */}
                <ul className="space-y-3">
                  {[
                    "Seamless Ordering Process",
                    "Fast And Reliable Delivery",
                    "Convenient Delivery Options",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-4 h-4 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 font-['Raleway'] text-sm sm:text-base leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Right Features */}
                <ul className="space-y-3">
                  {[
                    "Automatic Refill Reminders",
                    "24/7 Customer Support",
                    "Secure Payment Options",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-4 h-4 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 font-['Raleway'] text-sm sm:text-base leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className=" mt-6 px-4 py-2 w-50 rounded-full bg-[#7131A3]  text-white font-medium text-smhover:bg-[#5a2580] transition-colors duration-300focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                  Book a demo today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image on the Left */}
        <div className="lg:order-1 order-2 w-full max-w-[500px] lg:w-[500px] mt-10 lg:mt-0 lg:ml-12">
          <img
            src="/images/overlay4.svg"
            alt="overlay4"
            className="w-full h-auto max-h-[800px] object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-32 ml-16  lg:mt-40 px-4 sm:px-6 w-full">
        <div className="w-full max-w-[550px] lg:w-[600px] lg:ml-32">
          <img
            src="/images/overlay5.svg"
            alt="International Doctor Illustration"
            className="w-[450px] h-auto"
          />
        </div>
        {/* Text Column */}
        <div className="w-full max-w-[600px] text-center lg:text-left lg:ml-10 lg:pt-4">
          <div className="mb-6 lg:mb-8">
            <h1 className="font-['Raleway'] font-bold text-[40px] xs:text-[44px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[1.05] text-[#8037B6]">
              Consultation
            </h1>
            <h2 className="font-['Raleway'] text-[32px] xs:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-[1.05] text-black mt-2 lg:mt-3">
              International Doctor
            </h2>
          </div>

          <div className="space-y-6 text-[#4C4C4C] font-['Raleway'] text-[15px] sm:text-[17px] leading-relaxed">
            <p>
              Welcome to our innovative platform connecting you with a world of
              healthcare expertise. With our online consultation service, you
              can now access top-tier medical advice.
            </p>
            <div className="max-w-1xl my-2">
              {/* Country Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                {[
                  {
                    name: "India",
                    flag: "/images/india.svg",
                  },
                  {
                    name: "Nepal",
                    flag: "/images/india.svg",
                  },
                  {
                    name: "USA",
                    flag: "/images/india.svg",
                  },
                  {
                    name: "UK",
                    flag: "/images/india.svg",
                  },
                ].map((country, index) => (
                  <div key={index} className="flex items-start gap-4 p-1">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-6 h-6 object-contain"
                    />
                    <div>
                      <h4 className="text-gray-800 font-['Raleway'] text-base sm:text-lg">
                        {country.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-8  text-2xl">
                <button className="px-4 py-3 rounded-full bg-[#7131A3] text-white font-medium text-base hover:bg-[#5a2580] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                  Book a demo today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 mt-12 md:mt-24 px-4 sm:px-6 md:px-8 w-full">
        {/* Image on the Left */}
        <div className="lg:order-1 order-2 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[450px] xl:w-[500px] mt-6 md:mt-10 lg:mt-0 lg:ml-10 xl:ml-20">
          <img
            src="/images/report.jpg"
            alt="report"
            className="w-full h-auto max-h-[600px] sm:max-h-[700px] md:max-h-[800px] object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="lg:order-2 order-1 w-full max-w-[500px] md:max-w-[600px] text-center lg:text-left lg:ml-12 xl:ml-24">
          {/* Headings */}
          <div className="mb-6 md:mb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <h1 className="font-['Raleway'] font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] xl:text-[74px] leading-[1] capitalize text-[#8037B6]">
              Lab Report
            </h1>
            <h2 className="font-['Raleway'] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1] capitalize text-black mt-2 mb-4 md:mb-6">
              24 Hours With
            </h2>

            {/* Description & Features */}
            <div className="space-y-4 md:space-y-6">
              {/* Paragraph */}
              <p className="text-[#4C4C4C] font-['Raleway'] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                Nepal's healthcare landscape has witnessed a remarkable
                transformation with the emergence of the country's foremost
                Health Aggregator.Nepal's healthcare landscape Nepal's
                healthcare landscape has witnessed a remarkable
              </p>
              <div className="img">
                <img
                  src="/images/icons/icons5.svg"
                  className="w-full max-w-[300px] md:max-w-none mx-auto lg:mx-0"
                  alt="features"
                />
              </div>
            </div>
          </div>
          <button className=" mt-6 px-4 py-2 w-50 rounded-full bg-[#7131A3]  text-white font-medium text-smhover:bg-[#5a2580] transition-colors duration-300focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
            Book a demo today
          </button>
        </div>
      </div>

      <div className="relative mt-24">
        <img
          src="/images/bg-mid.svg"
          className="w-full h-auto object-cover absolute inset-0 z-0"
        />

        {/* Content on top (z-10) */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 px-4 sm:px-6 md:px-8 w-full pt-12 md:pt-24 pb-12">
            {/* Image on the Left */}
            <div className="lg:order-1 order-2 w-full max-w-[500px] lg:w-[450px] xl:w-[500px] mt-6 md:mt-10 lg:mt-0 lg:ml-10 xl:ml-20">
              <img
                src="/images/consult.png"
                alt="report"
                className="w-full max-w-[800px] h-auto max-h-[800px] object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="lg:order-2 order-1 w-full max-w-[600px] text-center lg:text-left lg:ml-12 xl:ml-24">
              <div className="mb-6 md:mb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
                <h1 className="font-['Raleway'] font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] xl:text-[74px] leading-[1] capitalize text-[#8037B6]">
                  Consultation{" "}
                </h1>
                <h2 className="font-['Raleway'] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1] capitalize text-black mt-2 mb-4 md:mb-6">
                  Waiting Room
                </h2>
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 pt-2 ">
                {/* Left Features */}
                <ul className="space-y-3">
                  {[
                    "100 % private and confidential",
                    "Our fee stasrting at Rs 500-800",
                    "Verified doctors ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-4 h-4 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 font-['Raleway'] text-sm sm:text-base leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 px-4 py-2 w-50 rounded-full bg-[#7131A3] text-white font-medium text-sm hover:bg-[#5a2580] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                Book a demo today
              </button>
            </div>
          </div>
          <div className="mt-24 text-center px-4 sm:px-6 md:px-8 z-0">
            <h3 className="font-['Raleway'] text-[#34134F] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight capitalize mb-4">
              Consult with top doctors across specialities
            </h3>

            <p className="font-['Raleway'] font-normal text-base sm:text-lg md:text-xl leading-relaxed text-center capitalize max-w-3xl mx-auto">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost health
              aggregator.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0  sm:gap-6 md:gap-8 mt-12 px-4 sm:px-6 md:px-8">
            {specialities.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2 py-0 mt-2  rounded-2xl transition-all duration-300 
        `}
              >
                <div className="w-[120px] h-[120px] flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-base font-semibold font-['Raleway'] mb-1">
                  {item.title}
                </h4>
                <p className="text-l  font-['Raleway'] mb-1 leading-normal">
                  Nepal's Healthcare Landscape Has Witnessed A Remarkable
                  Transformation
                </p>
                <a
                  href="#"
                  className={`text-xs font-medium mt-1 ${
                    item.active ? "text-white" : "text-[#7131A3]"
                  }`}
                >
                  Consult Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
