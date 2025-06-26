"use client";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat  z-0 "
        style={{ backgroundImage: "url('/images/bg1.svg') " }}
      />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto mt-12 lg:mx-0">
            {/* Heading 1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold font-['Raleway'] text-[#7131A3] capitalize mb-0 leading-tight">
              Meet - Nepals
            </h1>

            {/* Heading 2 */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] font-normal font-['Raleway'] text-[#34134F] capitalize mb-6  mt-0 leading-tight">
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

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-24 px-4 sm:px-8 w-full">
            {/* Overlay Image 2 */}
            <div className="lg:order-1 order-2 w-full max-w-[500px] lg:w-[500px] lg:ml-12 lg:-mt-16">
              <img
                src="/images/overlay2.svg"
                alt="overlay2"
                className="w-full h-auto max-h-[800px]"
              />
            </div>

            {/* Content on the right */}
            <div className="lg:order-2 order-1 text-center lg:text-left mb-12 lg:mb-24 w-full max-w-[600px]">
              {/* Headings*/}
              <div className="mt-8 lg:mt-0 mb-10 lg:mb-12">
                <h1 className="font-['Raleway'] font-bold text-[48px] xs:text-[52px] sm:text-[60px] md:text-[68px] lg:text-[74px] leading-[100%] capitalize text-[#8037B6]">
                  Physical
                </h1>
                <h2 className="font-['Raleway'] text-[36px] xs:text-[42px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[100%] capitalize text-black mt-2 lg:mt-3">
                  Doctor Booking
                </h2>
              </div>

              {/* Icon-text section */}
              <div className="flex gap-5 w-full max-w-[500px] lg:w-[500px] mx-auto lg:mx-0">
                {/* Icons column */}
                <div className="flex flex-col items-center pt-2">
                  <img
                    src="/images/icon1.svg"
                    alt="icon1"
                    className="w-14 sm:w-16"
                  />
                  <img
                    src="/images/icon2.svg"
                    alt="icon2"
                    className="w-14 sm:w-16 mt-6"
                  />
                  <img
                    src="/images/icon3.svg"
                    alt="icon3"
                    className="w-14 sm:w-16 mt-6"
                  />
                  <img
                    src="/images/icon4.svg"
                    alt="icon4"
                    className="w-14 sm:w-16 mt-6"
                  />
                </div>

                {/* Text container */}
                <div className="flex flex-col gap-5 flex-1">
                  <div>
                    <p className="text-[#4C4C4C] font-['Raleway'] text-[18px] sm:text-[20px] leading-snug">
                      Physical Doctor Booking
                    </p>
                    <p className="text-[#767676] font-['Raleway'] text-[12px] sm:text-[13px] font-normal mt-1 leading-relaxed">
                      Easily schedule appointments with trusted healthcare
                      professionals in just a few clicks.
                    </p>
                  </div>

                  <div>
                    <p className="text-[#4C4C4C] font-['Raleway'] text-[18px] sm:text-[20px] leading-snug">
                      International Doctor Consultation{" "}
                    </p>
                    <p className="text-[#767676] font-['Raleway'] text-[12px] sm:text-[13px] font-normal mt-1 leading-relaxed">
                      Facilitating consultations with renowned international
                      specialists to address complex healthcare needs.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#4C4C4C] font-['Raleway'] text-[18px] sm:text-[20px] leading-snug">
                      Tele Doctor Consultation
                    </p>
                    <p className="text-[#767676] font-['Raleway'] text-[12px] sm:text-[13px] font-normal mt-1 leading-relaxed">
                      Connect with licensed doctors via audio calls, ensuring
                      timely and expert medical advice.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#4C4C4C] font-['Raleway'] text-[18px] sm:text-[20px] leading-snug">
                      Virtual Doctor Consultation{" "}
                    </p>
                    <p className="text-[#767676] font-['Raleway'] text-[12px] sm:text-[13px] font-normal mt-1 leading-relaxed">
                      Access specialized medical expertise from the comfort of
                      your home, Connect with licensed doctors via video calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mt-8 lg:mt-12 px-4 sm:px-8 w-full">
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
                  Welcome to our cutting-edge online platform designed to
                  streamline your healthcare experience! With our user-friendly
                  interface, booking a doctor's appointment has never been
                  easier.
                </p>
                <p>
                  Our platform features a simple and intuitive interface that
                  caters to users of all ages and technological backgrounds.
                  Whether you're tech-savvy or new to online booking, you'll
                  find the process effortless.
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
            <div className="lg:order-2 order-1 w-full max-w-[600px] text-center lg:text-left">
              {/* Headings */}
              <div className="mb-10">
                <h1 className="font-['Raleway'] font-bold text-[48px] sm:text-[60px] md:text-[68px] lg:text-[74px] leading-[1] capitalize text-[#8037B6]">
                  Medicine
                </h1>
                <h2 className="font-['Raleway'] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1] capitalize text-black mt-2 mb-6">
                  Delivery At Home
                </h2>
              </div>

              {/* Description & Features */}
              <div className="space-y-6">
                {/* Paragraph */}
                <p className="text-[#4C4C4C] font-['Raleway'] text-[14px] sm:text-[18px] leading-relaxed">
                  Introducing our revolutionary online platform designed to
                  simplify the process of ordering and receiving your
                  medications. With just a few clicks, you can now have your
                  prescriptions delivered straight to your doorstep.
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
                  <button
                    className=" mt-6 px-4 py-2 w-50 rounded-full bg-[#7131A3] 
  text-white font-medium text-sm
  hover:bg-[#5a2580] transition-colors duration-300
  focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50
  active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Book a demo today
                  </button>
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

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-32 lg:mt-40 px-4 sm:px-6 w-full">
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
                  Welcome to our innovative platform connecting you with a world
                  of healthcare expertise. With our online consultation service,
                  you can now access top-tier medical advice.
                </p>

                <button className="mt-6 px-6 py-3 rounded-full bg-[#7131A3] text-white font-medium text-base hover:bg-[#5a2580] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7131A3] focus:ring-opacity-50 active:bg-[#4a1d6a] shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto">
                  Book a demo today
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full max-w-[550px] lg:w-[550px] lg:ml-8">
              <img
                src="/images/overlay5.svg"
                alt="International Doctor Illustration"
                className="w-[450px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
