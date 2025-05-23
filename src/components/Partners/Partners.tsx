const partners = [
  { logo: "/p1.jpg" },
  { logo: "/p2.jpg" },
  { logo: "/p3.jpg" },
];

const Partners = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-2" data-aos="fade-up">
        <h2 className="text-center text-3xl font-bold text-black mb-8">
          Our Trusted Partners
        </h2>
        <div className="flex justify-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`Partner ${index + 1}`}
                className="h-30 w-auto lg:mx-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
