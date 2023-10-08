import { useEffect } from "react";
import gallery1 from "../../../assets/gallery1.jpg";
import gallery2 from "../../../assets/gallery2.jpg";
import gallery3 from "../../../assets/gallery3.jpg";
import gallery4 from "../../../assets/gallery4.jpg";
import gallery5 from "../../../assets/gallery5.jpg";
import gallery6 from "../../../assets/gallery6.jpg";
import gallery7 from "../../../assets/gallery7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallary = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-4xl text-[#FFC107]  font-bold my-10">
            Gallery Section
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {/* Add your gallery items here */}

          <div data-aos="fade-right" className="md:row-span-2 md:col-span-2">
            <img
              src={gallery1}
              alt=""
              className="w-full h-full object-cover rounded-xl  "
            />
          </div>
          <div data-aos="fade-left">
            <img
              src={gallery7}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div data-aos="fade-left">
            <img
              src={gallery2}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div data-aos="flip-left" className="hidden md:flex ">
            <img
              src={gallery3}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div data-aos="fade-down-left">
            <img
              src={gallery4}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div data-aos="flip-left" className="md:hidden">
            <img
              src={gallery5}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div data-aos="flip-right" className="md:hidden">
            <img
              src={gallery6}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
