import {
  FaCubes,
  FaMountain,
  FaTree,
  FaRoad,
  FaDumpster,
} from "react-icons/fa";

const items = [
  { name: "Asphalt", icon: FaRoad },
  { name: "Aggregates", icon: FaCubes },
  { name: "Sand & Gravel", icon: FaMountain },
  { name: "Salt", icon: FaDumpster },
  { name: "Soil", icon: FaTree },
  { name: "Bricks", icon: FaCubes },
  { name: "Concrete", icon: FaCubes },
];

const WhatWeHaul = () => {
  return (
    <>
      <div id="haul-section" className="bg-white py-8 md:py-10">
        {/* Section Title */}
        <div
          className="text-center mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">What We Haul</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                data-aos="flip-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="flex flex-col bg-[#F8F9FA] px-4 py-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl mr-4">
                  <item.icon />
                </div>

                {/* Item Name */}
                <p className="text-xl font-semibold text-black mt-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeHaul;