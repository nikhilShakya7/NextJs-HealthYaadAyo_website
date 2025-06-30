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
  const countries = [
    {
      title: "India",
      icon: "/images/icons/99.svg",
      active: false,
    },
    {
      title: "Singapour",
      icon: "/images/icons/80.svg",
      active: false,
    },
    {
      title: "Malaysia",
      icon: "/images/icons/70.svg",
      active: false,
    },
  ];

  return (
    <>
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat "
        style={{ backgroundImage: "url('/images/.svg')" }}
      />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen overflow-hidden pt-16 md:pt-0 w-full border-2 border-green-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] w-full border-2 border-green-500">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            {/* Text content */}
            <div className="w-full lg:w-1/2 max-w-2xl mt-12 lg:mt-0 mx-auto lg:mx-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-2 leading-tight">
                Meet - Nepals
              </h1>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
                Health Aggregator
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
                Nepal's healthcare landscape has witnessed a remarkable
                transformation with the emergence of the country's foremost
                Health Aggregator.
              </p>
              <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                Book A Demo Today
              </button>
            </div>

            {/* Image container */}
            <div className="w-full lg:w-1/2 flex-shrink-0 mt-8 lg:mt-0 lg:relative">
              <img
                src="/images/bg.svg"
                alt="Health Aggregator Illustration"
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] lg:max-h-[90vh] xl:max-h-[100vh] object-contain object-center lg:object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 text-center">
        <h3 className="font-['Raleway'] text-[#34134F] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight capitalize mb-4">
          Why Choose <b>Health Yaad Ayo?</b>
        </h3>

        <p className="font-['Raleway'] font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center capitalize max-w-2xl mx-auto">
          Nepal's healthcare landscape has witnessed a remarkable transformation
          with the emergence of...
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px]"
            >
              <img
                src={`/images/shape${item}.svg`}
                alt={`Shape ${item}`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-2 black">
                <h3 className="text-[#4C4C4C] font-['Raleway'] text-xs sm:text-sm md:text-base font-extrabold leading-snug uppercase">
                  {item === 1
                    ? "Instant Check Up"
                    : item === 2
                    ? "24 hours lab report"
                    : "Another Feature"}
                </h3>
                <p className="text-[#767676] font-['Raleway'] text-[10px] xs:text-xs sm:text-sm w-28 xs:w-32 sm:w-40 md:w-48">
                  Nepal's Healthcare Landscape Has Witnessed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Physical Doctor Booking Section - Enhanced */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 w-full max-w-[1800px] mx-auto">
        {/* Image - Adjusted */}
        <div className="lg:order-1 order-2 w-full lg:w-[45%] xl:w-[40%] max-w-2xl lg:max-w-none lg:ml-0 xl:ml-0">
          <img
            src="/images/overlay2.svg"
            alt="Physical Doctor Booking"
            className="w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] object-contain"
          />
        </div>

        {/* Content - Enhanced */}
        <div className="lg:order-2 order-1 w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left px-0 sm:px-0 lg:pl-10">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Physical
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Doctor Booking
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {[
              {
                icon: 1,
                title: "Physical Doctor Booking",
                desc: "Easily schedule appointments with trusted healthcare professionals in just a few clicks.",
              },
              {
                icon: 2,
                title: "International Doctor Consultation",
                desc: "Facilitating consultations with renowned international specialists to address complex healthcare needs.",
              },
              {
                icon: 3,
                title: "Tele Doctor Consultation",
                desc: "Connect with licensed doctors via audio calls, ensuring timely and expert medical advice.",
              },
              {
                icon: 4,
                title: "Virtual Doctor Consultation",
                desc: "Access specialized medical expertise from the comfort of your home, Connect with licensed doctors via video calls.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 pt-1">
                  <img
                    src={`/images/icons/icon${item.icon}.svg`}
                    alt={`icon${item.icon}`}
                    className="w-10 sm:w-12 md:w-14"
                  />
                </div>
                <div>
                  <p className="text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[#767676] font-['Raleway'] text-sm sm:text-base md:text-lg font-normal mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 sm:mt-10 px-8 py-4 rounded-full bg-[#7131A3] text-white font-medium text-base sm:text-lg hover:bg-purple-900 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Book a demo today
          </button>
        </div>
      </div>

      {/* Virtual Doctors Booking Section - Enhanced */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 w-full max-w-[1800px] mx-auto">
        {/* Text Column -*/}
        <div className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left lg:pl-10 xl:pl-16">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Virtual
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Doctors Booking
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed">
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
          <button className="relative z-0 mt-8 sm:mt-10 px-8 py-4 rounded-full bg-[#7131A3] text-white font-medium text-base sm:text-lg hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-md hover:shadow-lg cursor-pointer">
            Book a demo today
          </button>
        </div>

        {/* Image Column  */}
        {/* Image Column - Enhanced */}
        <div className="w-full lg:w-[45%] xl:w-[40%] mt-8 sm:mt-10 lg:mt-0">
          <img
            src="/images/overlay3.svg"
            alt="Virtual Doctors Booking"
            className="w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] object-contain lg:scale-[1.05]"
          />
        </div>
      </div>

      {/* Medicine Delivery Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 w-full max-w-[1800px] mx-auto">
        {/* Text Column */}
        <div className="lg:order-2 order-1 w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left px-0 sm:px-0 lg:pr-10">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Medicine
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Delivery At Home
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed">
              Introducing our revolutionary online platform designed to simplify
              the process of ordering and receiving your medications. With just
              a few clicks, you can now have your prescriptions delivered
              straight to your doorstep.
            </p>

            <p className="text-[#4C4C4C] font-['Raleway'] font-bold text-sm sm:text-base tracking-wider uppercase">
              Know Your Right Medicines
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 pt-2 sm:pt-3">
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Seamless Ordering Process",
                  "Fast And Reliable Delivery",
                  "Convenient Delivery Options",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
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

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Automatic Refill Reminders",
                  "24/7 Customer Support",
                  "Secure Payment Options",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
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
            </div>
            <button className="relative z-0 mt-8 sm:mt-10 px-8 py-4 rounded-full bg-[#7131A3] text-white font-medium text-base sm:text-lg hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-md hover:shadow-lg cursor-pointer">
              Book a demo today
            </button>
          </div>
        </div>

        {/* Image Column - Adjusted */}
        <div className="lg:order-1 order-2 w-full lg:w-[45%] xl:w-[40%] mt-8 sm:mt-10 lg:mt-0">
          <img
            src="/images/overlay4.svg"
            alt="Medicine Delivery"
            className="w-full h-auto max-h-[450px] sm:max-h-[550px] md:max-h-[650px] object-contain"
          />
        </div>
      </div>

      {/* International Doctor Section - Enhanced */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 w-full max-w-[1800px] mx-auto">
        {/* Text Column - Enhanced */}
        <div className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left px-0 sm:px-0 lg:pr-10">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Consultation
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              International Doctor
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed">
            <p>
              Welcome to our innovative platform connecting you with a world of
              healthcare expertise. With our online consultation service, you
              can now access top-tier medical advice.
            </p>

            <div className="max-w-2xl my-4 sm:my-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { name: "India", flag: "/images/india.svg" },
                  { name: "Nepal", flag: "/images/india.svg" },
                  { name: "USA", flag: "/images/india.svg" },
                  { name: "UK", flag: "/images/india.svg" },
                ].map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                    <div>
                      <h4 className="text-gray-800 font-['Raleway'] text-base sm:text-lg md:text-xl">
                        {country.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <button className="relative z-0 px-8 py-4 rounded-full bg-[#7131A3] text-white font-medium text-base sm:text-lg hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-md hover:shadow-lg cursor-pointer">
                  Book a demo today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column - Adjusted */}
        <div className="w-full lg:w-[45%] xl:w-[40%] mt-8 sm:mt-10 lg:mt-0">
          <img
            src="/images/overlay5.svg"
            alt="International Doctor"
            className="w-full h-auto max-h-[450px] sm:max-h-[550px] md:max-h-[650px] object-contain mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Lab Report Section*/}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 w-full max-w-[1800px] mx-auto">
        {/* Image - Enhanced */}
        <div className="w-full lg:w-[45%] xl:w-[40%]">
          <img
            src="/images/report.jpg"
            alt="Lab Report"
            className="w-full h-auto max-h-[450px] sm:max-h-[550px] md:max-h-[650px] lg:max-h-[750px] object-contain mx-auto lg:mx-0 "
          />
        </div>

        {/* Text Content - Enhanced */}
        <div className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left px-0 sm:px-0 lg:pl-10">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Lab Report
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              24 Hours With
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator, delivering accurate lab reports within 24 hours.
            </p>
            <div>
              <img
                src="/images/icons/icons5.svg"
                className="w-full max-w-sm mx-auto lg:mx-0"
                alt="features"
              />
            </div>
          </div>
          <button className="mt-8 sm:mt-10 px-8 py-4 rounded-full bg-[#7131A3] text-white font-medium text-base sm:text-lg hover:bg-purple-900 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Book a demo today
          </button>
        </div>
      </div>
      {/* Consultation Waiting Room Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <img
          src="/images/bg-mid.svg"
          className="w-full h-full object-cover absolute inset-0 z-0"
          alt="background"
        />
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-4 sm:px-6 w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/images/consult.png"
                alt="Consultation Waiting Room"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain mx-auto lg:mx-0"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="font-['Raleway'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#8037B6]">
                  Consultation
                </h1>
                <h2 className="font-['Raleway'] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-black mt-1 sm:mt-2">
                  Waiting Room
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 pt-1 sm:pt-2">
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "100 % private and confidential",
                    "Our fee stasrting at Rs 500-800",
                    "Verified doctors",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <img
                        src="/images/check.svg"
                        alt="check"
                        className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 font-['Raleway'] text-xs sm:text-sm md:text-base leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                Book a demo today
              </button>
            </div>
          </div>

          {/* Specialities Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 text-center">
            <h3 className="font-['Raleway'] text-[#34134F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight capitalize mb-3 sm:mb-4">
              Consult with top doctors across specialities
            </h3>

            <p className="font-['Raleway'] font-normal text-xs sm:text-sm md:text-base leading-relaxed text-center capitalize max-w-3xl mx-auto">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost health
              aggregator.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 max-w-6xl mx-auto">
            {specialities.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-300 
                  ${item.active ? "bg-[#7131A3]" : "bg-white"}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-2 sm:mb-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4
                  className={`text-xs sm:text-sm md:text-base font-semibold font-['Raleway'] mb-1 sm:mb-2 ${
                    item.active ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-[10px] xs:text-xs sm:text-sm font-['Raleway'] mb-1 sm:mb-2 leading-normal ${
                    item.active ? "text-white" : "text-gray-600"
                  }`}
                >
                  Nepal's Healthcare Landscape Has Witnessed A Remarkable
                  Transformation
                </p>
                <a
                  href="#"
                  className={`text-[10px] xs:text-xs sm:text-sm font-medium ${
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

      {/* Medicines Delivery Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="font-['Raleway'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#8037B6]">
              Medicines
            </h1>
            <h2 className="font-['Raleway'] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-black mt-1 sm:mt-2">
              Reliable on Home Delivery
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4 text-[#4C4C4C] font-['Raleway'] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            <p>
              Our yaad aayo pharmacists ensure your medicines reach you when you
              need them
            </p>
          </div>
          <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
            Book a demo today
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0">
          <img
            src="/images/medical-supply.png"
            alt="Medicines Delivery"
            className="w-full h-auto max-w-xs sm:max-w-sm mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Global Doctor Section */}
      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 text-center">
        <div className="max-w-[1800px] mx-auto">
          <h3 className="font-['Raleway'] text-[#34134F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight capitalize mb-4 sm:mb-6">
            Global Doctor Consult Connecting You Worldwide
          </h3>
          <p className="font-['Raleway'] text-sm sm:text-base md:text-lg leading-relaxed text-center capitalize max-w-3xl mx-auto">
            We take customer satisfaction very seriously
          </p>
          <div className="relative mt-10 sm:mt-12 md:mt-16">
            {/* Content above the map */}
            <div className="relative z-10 mb-8 sm:mb-10 md:mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 max-w-6xl mx-auto">
                {countries.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center p-4 sm:p-6 
                   
                    `}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4
                      className={`text-base sm:text-lg md:text-xl font-semibold font-['Raleway'] mb-2 sm:mb-3 ${
                        item.active ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm md:text-base font-['Raleway'] mb-2 sm:mb-3 leading-normal 
                      
                      `}
                    >
                      Nepal's Healthcare Landscape Has Witnessed A Remarkable
                      Transformation
                    </p>
                    <a
                      href="#"
                      className={`text-sm sm:text-base font-medium px-4 py-2 rounded-full ${
                        item.active
                          ? "text-white bg-purple-800 hover:bg-purple-900"
                          : "text-[#7131A3] bg-purple-50 hover:bg-purple-100"
                      } transition-colors duration-300`}
                    >
                      Consult Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Background map image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/map-world.png"
                alt="World Map"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 text-center">
        <div className="text-center px-4 sm:px-6">
          <h3 className="font-['Raleway'] text-[#34134F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight capitalize mb-4 sm:mb-6">
            Still Can't Decide? Let Us Help You
          </h3>
          <div className="flex justify-center">
            <img
              src="/images/endlogo.svg"
              alt="Health Yaad Ayo Logo"
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 border-purple-500 border-1 rounded-full"
            />
          </div>
          <div className="text-center px-4 sm:px-6 mt-4 sm:mt-6">
            <h3 className="font-['Raleway'] font-bold text-[#34134F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight capitalize mb-1 sm:mb-2">
              Health Care Assistant
            </h3>
            <h6 className="font-['Raleway'] text-blue-500 text-xs sm:text-sm md:text-base lg:text-lg leading-tight capitalize">
              CALL US NOW ON: +977-5546140
            </h6>
          </div>
          <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
            Book a demo today
          </button>
        </div>
      </div>
    </>
  );
}
