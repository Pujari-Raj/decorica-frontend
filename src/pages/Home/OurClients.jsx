import Marquee from "react-fast-marquee";
import { clientLogos } from "../../utils/constants/globalConstants";

const OurClients = () => {
  return (
    <div className="w-full py-8">
      <div className="text-center font-bold mt-7 px-4 md:px-0">
        <h2 className=" text-[2rem] leading-[2.5rem]  md:text-4xl lg:text-5xl font-MontSemiBold text-[#9d6a37] ">
          Trusted by Leading Home & Interior Brands
        </h2>
        <h1 className=" text-[1.2rem] leading-[1.8rem] md:text-2xl lg:text-[1.5rem] lg:leading-[2.5rem] font-MontSemiBold">
          Renowned brands trust us for home aesthetics.
        </h1>
      </div>
      <Marquee pauseOnHover={true} speed={45}>
        <div className="flex items-center gap-6 mt-4">
          {clientLogos.map((client, index) => (
            <div className="text-[0.9rem]" key={index}>
              <a
                href="#"
                className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold"
              >
                <img
                  className="object-fill w-40 h-24 md:w-48 md:h-28 lg:w-60 lg:h-40 border-solid"
                  src={client.image || "/placeholder.svg"}
                  alt={client.image}
                  loading="lazy"
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
 