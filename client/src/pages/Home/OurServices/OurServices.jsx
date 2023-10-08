import {
  FaHouseUser,
  FaShoppingBag,
  FaShippingFast,
  FaHandsHelping,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Best Prices",
      description: "Affordable",
      icon: <FaHouseUser />,
    },
    {
      id: 2,
      title: "Fast Shippment",
      description: "Express",
      icon: <FaShippingFast />,
    },
    {
      id: 3,
      title: "Buyers Protection",
      description: "Guarantee",
      icon: <FaShoppingBag />,
    },
    {
      id: 4,
      title: "Live Support",
      description: "Online",
      icon: <FaHandsHelping />,
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-12 my-20">
        <div className="container mx-auto">
          <h2
            data-aos="zoom-in-up"
            className="text-4xl text-[#FFC107] text-center font-bold my-10"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8">
            {services.map((service) => (
              <div
                data-aos="zoom-in"
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex  justify-center gap-3">
                  <div>
                    <span className="text-5xl text-[#FFC107]">
                      {service.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className=" text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
