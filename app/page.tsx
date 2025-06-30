"use client";
import Image from "next/image";

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
        <div className="w-[1200px]  border-2 ">
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
        <div className="w-[1200px]  border-2 pt-10">
          <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-normal font-['Raleway'] text-[#34134F] capitalize mb-4 md:mb-6 leading-tight">
            WHY CHOOSE <b>HEALTH YAAD AYO</b>
          </h2>
          <p className="mx-auto text-sm xs:text-base sm:text-lg text-[71px] text-center md:text-xl font-normal font-['Raleway'] text-black mb-6 md:mb-8 leading-relaxed w-[600px]">
            Nepals healthcare landscape has witnessed a remarkable
            transformation with the emergence of
          </p>
        </div>
      </div>

      {/*Physical Section */}
      <div className="flex items-center justify-center overflow-auto bg-no-repeat bg-right z-0">
        {/*Image*/}
        <div className="w-[1200px]  ">
          <div className="float-left pt-[120px] relative">
            <img
              src="/images/overlay2.svg"
              className="objectfit-contain"
              alt="Hero Girl"
            />
          </div>
          {/*Text*/}
          <div className="right-0 pt-[120px] relative">
            <h1 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-[#8037B6]">
              Physical
            </h1>
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-tight text-black mt-2 sm:mt-3">
              Doctor Booking
            </h2>
            <ul className="space-y-4 sm:space-y-5 md:space-y-6">
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
                    <p className="text-[#4C4C4C] font-['Raleway'] text-base sm:text-lg md:text-xl leading-snug">
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
    </>
  );
}
