import './styled.hero.css'
function HeroSection() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center z-10">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-6 hero-animate-fade-in-scale">
          <h1 className="text-4xl md:text-6xl font-bold">
            Reliable Dumping Services
          </h1>
          <p className="mt-4 text-lg">
            Fast, Reliable, and Cost-Effective Dump Truck Solutions
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Get a Quote
            </button>
        
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
