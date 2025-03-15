import React from "react";
import Marquee from "react-fast-marquee";

const clientLogos = [
  { image: "assets/brandlogos/amara.jpeg" },
  { image: "assets/brandlogos/arc.jpg" },
  { image: "assets/brandlogos/foxhub.jpeg" },
  { image: "assets/brandlogos/aven.jpeg" },
  { image: "assets/brandlogos/hexa.jpeg" },
  { image: "assets/brandlogos/aven.jpeg" },
];

const OurClients = () => {
  return (
    <div className="">
      <div className="text-center font-bold mt-7">
        <h2 className=" text-xl font-MontSemiBold text-[#9d6a37]">
          Trusted by Leading Home & Interior Brands
        </h2>
        <h1 className=" text-base font-MontMedium">
          Renowned brands trust us for home aesthetics.
        </h1>
      </div>
      <Marquee pauseOnHover={true} speed={45}>
        <div className="cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4 gap-6 overflow-hidden">
          {clientLogos.map((client, index) => (
            <div className="text-[0.9rem]">
              <a
                key={index}
                href="#"
                className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold"
              >
                <img
                  className="object-fill w-[15rem] h-[10rem] border-solid "
                  src={client.image}
                  alt={client.image}
                  loading="lazy" // explore what is this new attribute 
                />
              </a>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default OurClients;
