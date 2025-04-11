const EquipmentSection = () => {
  const equipmentList = [
    {
      name: "Pony Pups",
      description:
        "Versatile and efficient hauling solution for various materials and job sites.",
      image: "/ponypups.jpg",
    },
    {
      name: "Live Bottoms",
      description:
        "Specialized equipment for controlled material discharge, ideal for asphalt and aggregate delivery.",
      image: "/livebottom.jpg",
    },
    {
      name: "Tri-Axle Dump Trucks",
      description:
        "Heavy-duty trucks designed for maximum payload capacity and stability.",
      image: "/dumptruck.jpg",
    },
    {
      name: "Float Services",
      description:
        "Transportation solutions for heavy equipment and machinery between job sites.",
      image: "/whatwehaul.jpg",
    },
  ];

  return (
    <section className="py-12 bg-[#F8F9FA] ">
      <div className="max-w-full mx-auto px-4 lg:px-20" data-aos="zoom-in-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Equipment</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional-grade equipment for all your hauling needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentList.map((equipment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {equipment.name}
                  </h3>
                <p className="text-gray-600">{equipment.description}</p>
                {/* <div className="mt-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
