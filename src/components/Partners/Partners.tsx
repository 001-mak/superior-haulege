import { motion } from "framer-motion";

const partners = [
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5LN9abtCdpmvuqanSzsk61rHE65H_Y35HA&s" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEijZPyjn9D4oWgKUTdnERBawhTVZ30iDFeg&s" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8M2EnCkVC7-vMvNKN3yDh7lvizOzVfUz1CA&s" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFenm0KT9T9Hs60ZOUCKFkq3TU-c7kGka_yw&s" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxpaRo6HFUIye_Bn__IyLPn9ViuSAwAi8Tw&s" },
];

const Partners = () => {
  return (
    <div className="bg-blue-600 py-12">
      <div className="container mx-auto px-2">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Our Trusted Partners
        </h2>
        <div className="flex justify-center gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={partner.logo}
                alt={`Partner ${index + 1}`}
                className="h-30 w-auto "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
