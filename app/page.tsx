"use client";
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

export default function HomePage() {
  return (
    <>
      <div
        className="flex items-center justify-center overflow-auto bg-no-repeat bg-right z-0"
        style={{
          backgroundImage:
            "url('/images/bg1.svg'),url('/images/BG-CIRCLE.png')",
          backgroundPosition: "left top, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="w-[1200px]">
          <div className="absolute z-0 w-[620px] h-[900px] float-left pt-[150px]">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[84px] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-2 leading-tight">
              Meet - Nepals
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
              Health Aggragtor
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator.
            </p>
            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>

          <div className="float-right pt-[120px] relative">
            <img
              src="/images/HERO-GIRL.png"
              className="object-contain"
              alt="Hero Girl"
            />
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US - Responsive */}
      <div className="flex items-center justify-center overflow-auto bg-no-repeat bg-right py-8 sm:py-10">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
          <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 sm:mb-6 leading-tight">
            WHY CHOOSE <b className="font-semibold">HEALTH YAAD AYO</b>
          </h2>

          <p className="mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-center font-normal font-['Raleway'] text-black mb-6 sm:mb-8 leading-relaxed w-full md:w-[600px]">
            Nepal's healthcare landscape has witnessed a remarkable
            transformation with the emergence of
          </p>

          <div className="overflow-hidden relative px-2">
            <ul className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 animate-scroll whitespace-nowrap">
              {[...[1, 2, 3], ...[1, 2, 3]].map((item, index) => (
                <li
                  key={index < 3 ? item : `copy-${item}`}
                  className="relative flex-shrink-0 w-[120px] xs:w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px]"
                >
                  <img
                    src={`/images/shape${item}.svg`}
                    alt={`Shape ${item}`}
                    className="w-full h-auto"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-2 text-center font-bold ${
                      index >= 3 ? "text-white" : "text-black"
                    }`}
                  >
                    <span
                      className={
                        index >= 3
                          ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                          : ""
                      }
                    >
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Physical Section */}
      <div className="flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16">
            {" "}
            {/* Added responsive gap */}
            {/* Image Column */}
            <div className="w-full md:w-[50%] pt-[50px] md:pt-[120px] relative">
              <img
                src="/images/overlay2.svg"
                className="w-full max-w-[500px] mx-auto md:max-w-none object-contain"
                alt="Physical Doctor Booking"
              />
            </div>
            {/* Text Column */}
            <div className="w-full md:w-[50%] pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
              <h1 className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-tight text-[#8037B6]">
                Physical
              </h1>
              <h2 className="font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
                Doctor Booking
              </h2>

              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mt-4 sm:mt-6">
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
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 list-none"
                  >
                    <div className="flex-shrink-0 pt-0 sm:pt-1">
                      <img
                        src={`/images/icons/icon${item.icon}.svg`}
                        alt={`icon${item.icon}`}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#4C4C4C] font-['Raleway'] text-sm xs:text-base sm:text-lg md:text-xl leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[#767676] font-['Raleway'] text-xs xs:text-sm sm:text-base md:text-lg font-normal mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                Book A Demo Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-auto">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] h-auto mx-auto">
          {/* Text Content*/}
          <div className="w-full md:w-[50%] float-none md:float-left relative z-0 pt-[50px] md:pt-[120px]">
            <h1 className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.25rem] lg:text-[2.75rem] xl:text-[74px] leading-tight text-[#8037B6]">
              Virtual
            </h1>
            <h2 className="font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
              Doctor Booking
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Welcome to our cutting-edge online platform designed to streamline
              your healthcare experience! With our user-friendly interface,
              booking a doctor's appointment has never been easier.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-6 sm:mb-8 leading-relaxed">
              Our platform features a simple and intuitive interface that caters
              to users of all ages and technological backgrounds. Whether you're
              tech-savvy or new to online booking, you'll find the process
              effortless.
            </p>
            <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-[50%] float-none md:float-right pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
            <img
              src="/images/overlay3.svg"
              className="w-full max-w-[500px] mx-auto md:max-w-none object-contain max-h-[500px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[550px]"
              alt="Virtual Doctor Booking"
            />
          </div>
        </div>
      </div>

      {/* Medicine Delivery at Home */}
      <div className="flex items-center justify-center h-auto">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            {" "}
            {/* Added gap utilities here */}
            <div className="w-full md:w-[50%] pt-[50px] md:pt-[120px] relative">
              {" "}
              {/* Removed float classes */}
              <img
                src="/images/overlay4.svg"
                className="w-full max-w-[500px] mx-auto md:max-w-none object-contain"
                alt="Medicine Delivery"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-[50%] pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
              {" "}
              {/* Removed float classes */}
              <h1 className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[74px] leading-tight text-[#8037B6]">
                Medicine
              </h1>
              <h2 className="-mb-4 sm:-mb-6 font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
                Delivery At Home
              </h2>
              <p className="pt-4 sm:pt-6 md:pt-8 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Introducing our revolutionary online platform designed to
                simplify the process of ordering and receiving your medications.
                With just a few clicks, you can now have your prescriptions
                delivered straight to your doorstep.
              </p>
              <p className="text-[#4C4C4C] font-['Raleway'] font-bold text-xs xs:text-sm sm:text-base tracking-wider uppercase">
                Know Your Right Medicines
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 pt-2 sm:pt-3">
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Seamless Ordering",
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
                <ul className="space-y-4 sm:space-y-4">
                  {[
                    "Refill Reminders",
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
                </ul>{" "}
              </div>
              <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
                Book A Demo Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* International Doctor Section */}
      <div className="flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
          {/* Image */}
          <div className="w-full md:w-[50%] float-none md:float-right pt-[50px] md:pt-[120px] relative">
            <img
              src="/images/overlay5.svg"
              className="w-full max-w-[500px] mx-auto md:max-w-none object-contain max-h-[500px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[600px]"
              alt="Medicine Delivery"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[50%] float-none md:float-left pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
            <h1 className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[74px] leading-tight text-[#8037B6]">
              Consultation
            </h1>
            <h2 className="-mb-4 sm:-mb-6 font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
              International Doctor
            </h2>

            <p className="pt-4 sm:pt-6 md:pt-8 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Welcome to our innovative platform connecting you with a world of
              healthcare expertise. With our online consultation service, you
              can now access top-tier medical advice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-1 lg:gap-2">
              {[
                { name: "India", flag: "/images/india.svg" },
                { name: "Nepal", flag: "/images/india.svg" },
                { name: "USA", flag: "/images/india.svg" },
                { name: "UK", flag: "/images/india.svg" },
              ].map((country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4"
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                  />
                  <h4 className="text-gray-800 font-['Raleway'] text-sm sm:text-base md:text-lg">
                    {country.name}
                  </h4>
                </div>
              ))}
            </div>

            <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      {/* Lab Report Section  */}
      <div className="flex items-center justify-center h-auto">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto">
          {/* Image Column */}
          <div className="w-full md:w-[50%] float-none md:float-left pt-[50px] md:pt-[120px] relative flex justify-center">
            <img
              src="/images/report.jpg"
              className="w-full max-w-[500px] md:w-[550px] object-contain"
              alt="Lab Report Service"
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-[50%] float-none md:float-right pt-[30px] sm:pt-[50px] md:pt-[120px] relative">
            <h1 className="-mb-4 sm:-mb-6 font-['Raleway'] font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[74px] leading-tight text-[#8037B6]">
              Lab Report
            </h1>
            <h2 className="-mb-4 sm:-mb-6 font-['Raleway'] text-xl xs:text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-[61px] leading-tight text-black mt-1 sm:mt-2 md:mt-3">
              24 hours with
            </h2>

            <p className="pt-4 sm:pt-6 md:pt-8 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator, delivering accurate lab reports within 24 hours.
            </p>

            <img
              src="/images/icons/icons5.svg"
              className="w-full max-w-[300px] sm:max-w-sm mx-auto md:mx-0"
              alt="Lab Report Features"
            />

            <button className="relative z-0 mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#7131A3] text-white font-medium text-xs xs:text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center  justify-center overflow-auto bg-no-repeat bg-right">
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] relative">
          <h2 className="-mb-4 sm:-mb-6 text-center text-xl xs:text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] mt-8 sm:mt-10 md:mt-12 font-normal font-['Raleway'] text-[#34134F] capitalize md:mb-6 leading-tight">
            Consult with top doctors across specialities
          </h2>
          <p className="mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-center font-normal font-['Raleway'] text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed w-full md:w-[600px]">
            Nepal's healthcare landscape has witnessed a remarkable
            transformation with the emergence of
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-2 sm:px-4 md:px-6 w-full max-w-6xl mx-auto">
            {specialities.map((item, index) => (
              <li
                key={index}
                className={`flex flex-col items-center text-center p-2 sm:p-3 md:p-4 rounded-xl transition-all duration-300 
            ${item.active ? "bg-[#7131A3]" : "bg-white"}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4
                  className={`text-xs sm:text-sm md:text-base font-semibold font-['Raleway'] mb-1 ${
                    item.active ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-['Raleway'] mb-1 leading-normal ${
                    item.active ? "text-white" : "text-gray-600"
                  }`}
                >
                  Nepal's Healthcare Landscape Has Witnessed A Remarkable
                  Transformation
                </p>
                <a
                  href="#"
                  className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-medium mt-1 ${
                    item.active ? "text-white" : "text-[#7131A3]"
                  }`}
                >
                  Consult Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Medicine Section */}
      <div className="flex items-center justify-center">
        <div className="w-[1200px] flex flex-col md:block">
          {/* Image */}
          <div className="w-full md:float-right md:w-[430px] pt-[60px] md:pt-[120px] relative order-1 md:order-none">
            <img
              src="/images/medical-supply.png"
              className="w-full h-auto"
              alt="Hero Girl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:float-left md:w-[760px] pt-[60px] md:pt-[120px] relative order-2 md:order-none">
            <h1 className="-mb-4 font-['Raleway'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-[#8037B6]">
              Medicine
            </h1>
            <h2 className="-mb-4 font-['Raleway'] text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[3rem] leading-tight text-black sm:mt-3">
              Reliable On Home Delivery
            </h2>

            <p className="pt-6 text-sm xs:text-base sm:text-lg md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Our yaad aayo pharmacists ensure your medicines reach you when you
              need them
            </p>

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      {/* Global Doctor Consult Section - Responsive */}
      <div className="flex flex-col items-center justify-center">
        {/* Worldwide Doctors Section */}
        <div className="w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto py-8 sm:py-12">
          <h1 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-['Raleway'] text-[#34134F] capitalize mb-6 md:mb-8 leading-tight">
            Global Doctor Consult Connecting You Worldwide
          </h1>

          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-[900px] mx-auto">
            {[
              { name: "India", flag: "/images/india.svg" },
              { name: "Nepal", flag: "/images/india.svg" },
              { name: "USA", flag: "/images/india.svg" },
              { name: "UK", flag: "/images/india.svg" },
            ].map((country, index) => (
              <li
                key={index}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 list-noneshadow-sm"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span className="text-gray-800 font-['Raleway'] text-sm sm:text-base md:text-lg">
                  {country.name}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-center font-normal font-['Raleway'] text-black mt-6 md:mt-8 leading-relaxed w-full md:w-[600px]">
            We take customer satisfaction very seriously
          </p>
        </div>

        {/* Map Background Section */}
        <div className="relative w-full">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/map-world.png')" }}
          ></div>

          <div className="relative z-10 w-full px-4 sm:px-6 md:w-[95%] lg:w-[90%] xl:w-[1200px] mx-auto py-8 sm:py-12">
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {countries.map((item, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-lg" 
                   
                   `}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-3 sm:mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h4
                    className={`text-base sm:text-lg md:text-xl font-semibold font-['Raleway'] mb-2 sm:mb-3`}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`text-xs sm:text-sm md:text-base font-['Raleway'] mb-3 sm:mb-4 leading-normal`}
                  >
                    Nepal's Healthcare Landscape Has Witnessed A Remarkable
                    Transformation
                  </p>

                  <a
                    href="#"
                    className={`text-sm sm:text-base font-medium px-4 py-2 rounded-full ${
                      item.active
                        ? "text-white bg-purple-800 hover:bg-purple-700"
                        : "text-[#7131A3] bg-purple-50 hover:bg-purple-100"
                    } transition-colors duration-300`}
                  >
                    Consult Now
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-auto ">
        <div className="w-[1200px] relative ">
          <h1 className="text-center font-[48px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] mt-12  font-['Raleway'] text-[#34134F]  md:mb-6 leading-tight capitalize">
            still cant decide let us help you
          </h1>
          <img
            src="/images/endlogo.svg"
            alt="Health Yaad Ayo Logo"
            className="w-auto h-20 sm:h-20 md:h-24 lg:h-45  border-0 rounded-full mx-auto block"
          />
          <h3 className=" text-center font-['Raleway'] font-bold text-[#34134F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight capitalize mb-1 sm:mb-2">
            Health Care Assistant
          </h3>
          <h6 className="text-center font-['Raleway'] text-blue-500 text-xs sm:text-sm md:text-base lg:text-lg leading-tight capitalize">
            CALL US NOW ON: +977-5546140
          </h6>

          <button className="block mx-auto relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
            {" "}
            Book A Demo Today
          </button>
        </div>
      </div>
    </>
  );
}
