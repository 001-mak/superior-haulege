import "./styled.hero.css";
function HeroSection() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center z-10">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="relative z-10 text-white px-6"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration = "600"
          data-aos-easing = "ease-in-sine"
          data-aos-delay = "300"
        >
          <h1 className="text-4xl md:text-4xl font-bold font-extended">
            YOUR INDUSTRY LEADER FOR HAULING SERVICES
          </h1>
          <p className="mt-4 text-lg">ASPHALT | AGGREGATES | EXCAVATION</p>
          {/* <div className="mt-6 space-x-4">
            <button className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Get a Quote
            </button>
        
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
