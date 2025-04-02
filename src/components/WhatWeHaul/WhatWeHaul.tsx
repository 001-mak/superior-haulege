// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   FaTruck,
//   FaCubes,
//   FaMountain,
//   FaTree,
//   FaRoad,
//   FaDumpster,
// } from "react-icons/fa";

// const items = [
//   { name: "Asphalt", icon: FaRoad },
//   { name: "Aggregates", icon: FaCubes },
//   { name: "Sand & Gravel", icon: FaMountain },
//   { name: "Salt", icon: FaDumpster },
//   { name: "Soil", icon: FaTree },
//   { name: "Bricks", icon: FaTruck },
//   { name: "Concrete", icon: FaTruck },
// ];

// const WhatWeHaul = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("haul-section");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.75) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div id="haul-section" className="relative bg-[#F8F9FA] py-12 overflow-hidden rounded-t-[50px] mt-[-50px] z-10">

//       {/* Section Title */}
//       <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-black mb-4">What We Haul</h2>
//           <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
//         </div>

//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 relative">
//         {/* Left Column: Animated Items List */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10 lg:ms-10 lg:px-10 before:absolute before:inset-0 before:bg-blue-500 before:blur-3xl before:opacity-20 before:-z-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {items.map((item, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="flex items-center bg-white shadow-md rounded-lg p-4"
//               >
//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-400 text-white text-2xl mr-4">
//                 <item.icon />
//               </div>

//               {/* Item Name */}
//               <p className="text-lg font-semibold text-black">{item.name}</p>

//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Right Column: Truck Image */}
//         <motion.img
//           src="/whatwehaul.jpg"
//           alt="Dump Truck"
//           className="max-w-full rounded-2xl relative z-10"
//           initial={{ opacity: 0, x: 50 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default WhatWeHaul;

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
      <div id="haul-section" className="bg-white py-10">
        {/* Section Title */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="text-4xl font-bold text-black mb-4">What We Haul</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[150px]">
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
    </>
  );
};

export default WhatWeHaul;
