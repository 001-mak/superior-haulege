import './style.service.css';

const Services = () => {
  const ServiceArr = [
    { name: "Asphalt Paving", image: "/asphalt.jpg" },
    { name: "Asphalt Milling", image: "/milling.jpg" },
    { name: "Roadwork", image: "/roadwork.jpg" },
    { name: "Demolition", image: "/demolition.jpg" },
    { name: "Excavation", image: "/excavation.jpg" },
    { name: "Dump Sites Available", image: "/dumpsite.jpg" },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional trucking and dumping services tailored to meet your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceArr.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.name} 
                className="service-image"
              />
              
              {/* Darkened Overlay */}
              <div className="service-overlay"></div>
              
              {/* Service Name */}
              <div className="service-title">
                <h3 className="text-xl text-white font-bold">{service.name}</h3>
              </div>
              
              {/* Glowing Border Effect on Hover */}
              <div className="service-border">
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;