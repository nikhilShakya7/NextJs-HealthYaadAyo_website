"use client";
import Image from "next/image";
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
        className="flex items-center justify-center overflow-auto bg-no-repeat bg-right z-0

      "
        style={{
          backgroundImage:
            "url('/images/bg1.svg'),url('/images/BG-CIRCLE.png')",

          backgroundPosition: "left top, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="w-[1200px] ">
          <div className="absolute z-0 w-[620px] h-[900px] float-left pt-[150px]  ">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[84px] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-2 leading-tight ">
              Meet - Nepals
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
              Health Aggragtor
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
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
              className="objectfit-contain"
              alt="Hero Girl"
            />
          </div>
        </div>
      </div>

      {/*WHY CHOOSE US  */}
      <div className="flex items-center justify-center overflow-auto bg-no-repeat bg-right">
        <div className="w-[1200px]  pt-10">
          <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
            WHY CHOOSE <b>HEALTH YAAD AYO</b>
          </h2>
          <p className="mx-auto text-sm xs:text-base sm:text-lg text-[71px] text-center md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed w-[600px]">
            Nepals healthcare landscape has witnessed a remarkable
            transformation with the emergence of
          </p>
          <div className="overflow-hidden relative">
            <ul className="flex gap-4 p-4 animate-scroll whitespace-nowrap">
              {[1, 2, 3].map((item) => (
                <li
                  key={item}
                  className="flex-shrink-0 w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px]"
                >
                  <img
                    src={`/images/shape${item}.svg`}
                    alt={`Shape ${item}`}
                    className="w-full h-auto"
                  />
                </li>
              ))}
              {/* Duplicate items for seamless looping */}
              {[1, 2, 3].map((item) => (
                <li
                  key={`copy-${item}`}
                  className="flex-shrink-0 w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px]"
                >
                  <img
                    src={`/images/shape${item}.svg`}
                    alt={`Shape ${item}`}
                    className="w-full h-auto"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/*<style jsx>{`
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
          `}</style>*/}
        </div>
      </div>

      {/*Physical Section */}
      <div className="flex items-center justify-center">
        {/*Image*/}
        <div className="w-[1200px]  ">
          <div className="w-[595px] float-left pt-[120px] relative">
            <img
              src="/images/overlay2.svg"
              className="objectfit-contain "
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="right-0 pt-[120px] relative">
            <h1 className="-mb-6 font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Physical
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Doctor Booking
            </h2>
            <ul className="space-y-4 sm:space-y-5 md:space-y-6 ">
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
                  className="flex items-start gap-4 sm:gap-6 list-none"
                >
                  <div className="flex-shrink-0 pt-1">
                    <img
                      src={`/images/icons/icon${item.icon}.svg`}
                      alt={`icon${item.icon}`}
                      className="w-10 sm:w-12 md:w-14"
                    />
                  </div>
                  <div>
                    <p className=" font-bold text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl leading-snug  -mb-2">
                      {item.title}
                    </p>
                    <p className="text-[#767676] font-['Raleway'] text-sm sm:text-base md:text-lg font-normal mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-auto">
        <div className="w-[1200px]  h-auto ">
          <div className="absolute z-0 w-[600px] h-auto float-left ">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[84px] font-bold font-['Raleway'] text-[#7131A3] capitalize -mb-6 leading-tight ">
              Virtual
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
              Doctor Booking
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Welcome to our cutting-edge online platform designed to streamline
              your healthcare experience! With our user-friendly interface,
              booking a doctor's appointment has never been easier.
            </p>
            <p className="text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Our platform features a simple and intuitive interface that caters
              to users of all ages and technological backgrounds. Whether you're
              tech-savvy or new to online booking, you'll find the process
              effortless.
            </p>
            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>

          <div className="float-right w-[600px] h-auto pt-[120px] relative">
            <img
              src="/images/overlay4.svg"
              className="w-full h-full "
              alt="Hero Girl"
            />
          </div>
        </div>
      </div>

      {/*Medicine Delivery at homw*/}
      <div className="flex items-center justify-center h-auto">
        {/*Image*/}
        <div className="w-[1200px]  ">
          <div className="[w-595px] float-left pt-[120px] relative">
            <img
              src="/images/overlay4.svg"
              className="object-contain"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="float-right pt-[120px] relative w-[600px]">
            <h1 className="-mb-6 font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Medicine
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Delivery At Home
            </h2>
            <p className="pt-8 text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
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

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      {/*International doctor Section */}
      <div className="flex items-center justify-center">
        {/*Image*/}
        <div className="w-[1200px] ">
          <div className="float-right w-[595px] pt-[120px] relative">
            <img
              src="/images/overlay5.svg"
              className="object-contain"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="float-left w-[600px] pt-[120px] relative">
            <h1 className="-mb-6 font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Consultation
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              International Doctor
            </h2>
            <p className="pt-8 text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Welcome to our innovative platform connecting you with a world of
              healthcare expertise. With our online consultation service, you
              can now access top-tier medical advice.
            </p>

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

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      {/*Lab report*/}
      <div className="flex items-center justify-center h-auto">
        {/*Image*/}
        <div className="w-[1200px]  ">
          <div className="flex items-center justify-center [w-595px] float-left pt-[120px] relative ">
            <img
              src="/images/report.jpg"
              className="w-[550px]"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="float-right pt-[120px] relative w-[600px]">
            <h1 className="-mb-6 font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Lab Report
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              24 hours with
            </h2>
            <p className="pt-8 text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Nepal's healthcare landscape has witnessed a remarkable
              transformation with the emergence of the country's foremost Health
              Aggregator, delivering accurate lab reports within 24 hours.
            </p>
            <img
              src="/images/icons/icons5.svg"
              className="w-full max-w-sm mx-auto lg:mx-0"
              alt="features"
            />

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full  absolute bg-no-repeat z-0 bg-cover"
        style={{
          backgroundImage: "url('/images/bg-mid.svg')",
        }}
      ></div>

      {/*Lab report*/}
      <div className="flex items-center justify-center h-auto">
        {/*Image*/}
        <div className="w-[1200px]  ">
          <div className="[w-595px] float-left pt-[120px] relative">
            <img
              src="/images/consult.png"
              className="w-[595px]"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="float-right pt-[120px] relative w-[600px]">
            <h1 className="font-['Raleway'] font-bold sm:text-4xl md:text-5xl lg:text-[2rem] xl:text-[3rem] leading-tight text-[#067EF8] -mb-6">
              Consultation{" "}
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[2rem] leading-tight text-black mb-6 sm:mt-3">
              Waiting Room{" "}
            </h2>
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

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center overflow-auto bg-no-repeat bg-right">
        <div className="w-[1200px] relative ">
          <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[1rem] mt-12 xl:text-[2rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
            Consult with top doctors across specialities
          </h2>
          <p className="mx-auto text-sm xs:text-base sm:text-lg text-[64px] text-center md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed w-[600px]">
            Nepal's healthcare landscape has witnessed a remarkable
            transformation with the emergence of
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 max-w-6xl mx-auto">
            {specialities.map((item, index) => (
              <li
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
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*International doctor Section */}
      <div className="flex items-center justify-center">
        {/*Image*/}
        <div className="w-[1200px] ">
          <div className="float-right w-[430px] pt-[120px] relative">
            <img
              src="/images/medical-supply.png"
              className=" full"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="float-left w-[760px] pt-[120px] relative">
            <h1 className="-mb-6 font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Medicine
            </h1>
            <h2 className="-mb-6 font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black sm:mt-3">
              Reliable On Home Delivery
            </h2>

            <p className="pt-8 text-sm xs:text-base sm:text-lg text-[71px] md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed">
              Our yaad aayo pharmacists ensure your medicines reach you when you
              need them
            </p>

            <button className="relative z-0 mt-4 sm:mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-sm sm:text-base hover:bg-purple-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer">
              Book A Demo Today
            </button>
          </div>
        </div>
      </div>

      {/*Global Doctor Consult Connecting You Worldwide*/}
      <div className="flex items-center justify-center overflow-auto ">
        <div className="w-[1200px] relative ">
          <h1 className="text-center font-[48px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] mt-12  font-['Raleway'] text-[#34134F] capitalize md:mb-6 leading-tight">
            Global Doctor Consult Connecting You Worldwide{" "}
          </h1>
          <ul className="-mb-1 flex flex-wrap gap-4 sm:gap-6 justify-center max-w-[900px] mx-auto text-sm sm:text-base">
            {[
              { name: "India", flag: "/images/india.svg" },
              { name: "Nepal", flag: "/images/india.svg" },
              { name: "USA", flag: "/images/india.svg" },
              { name: "UK", flag: "/images/india.svg" },
            ].map((country, index) => (
              <li
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 list-none"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-4 h-4 sm:w-4 sm:h-4 object-contain"
                />
                <span className="text-gray-800 font-['Raleway'] text-base sm:text-lg md:text-xl">
                  {country.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-auto text-sm xs:text-base sm:text-lg text-[64px] text-center md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed w-[600px]">
            We take customer satisfaction Very seriously
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center overflow-auto">
        {/* Background Image */}
        <div
          className="flex items-center justify-center overflow-auto bg-no-repeat bg-right z-0"
          style={{
            backgroundImage: "url('/images/map-world.png')",
          }}
        >
          {/* Content */}
          <div className="w-[1200px] relative z-10">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 max-w-6xl mx-auto list-none">
              {countries.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center p-4 sm:p-6"
                >
                  {/* Icon */}
                  <div className="sm:w-28 sm:h-28 flex items-center justify-center mb-3 sm:mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-base sm:text-lg md:text-xl font-semibold font-['Raleway'] mb-2 sm:mb-3 ${
                      item.active ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base font-['Raleway'] mb-2 sm:mb-3 leading-normal">
                    Nepal's Healthcare Landscape Has Witnessed A Remarkable
                    Transformation
                  </p>

                  {/* Button */}
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
