const About = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-950 py-15 px-25">
          <h1
            className="text-white font-bold text-4xl"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
          >
            About Us
          </h1>
          <p
            className="text-lg/9 text-white mt-5"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            Superior Haulage Limited is a trusted industry leader specializing
            in providing top-quality hauling services in the Greater Toronto
            Area. With many years of experience, we understand the importance of
            safe, timely, and cost-effective trucking services. Our fleet of
            new, well-maintained trucks ensures that your next load is delivered
            safely and on time. With our team of skilled drivers, dispatchers,
            and support staff, we guarantee to provide superior services while
            maintaining the highest standards of safety and professionalism.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <img
            src="/whatwehaul.jpg"
            alt="Dump Truck"
            className="max-w-full"
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
