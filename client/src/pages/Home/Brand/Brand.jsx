import Marquee from "react-fast-marquee";
import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.svg";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.jpg";
import brand6 from "../../../assets/brand6.png";
import brand7 from "../../../assets/brand7.jpg";
import brand8 from "../../../assets/brand8.jpg";
import brand9 from "../../../assets/brand9.png";
import brand10 from "../../../assets/brand10.jpg";
import brand11 from "../../../assets/brand11.jpg";
import brand12 from "../../../assets/brand12.png";
import brand13 from "../../../assets/brand13.jpg";
import brand14 from "../../../assets/brand14.jpg";
import brand15 from "../../../assets/brand15.jpg";
import brand16 from "../../../assets/brand16.jpg";
import brand17 from "../../../assets/brand17.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const images = [
  { id: 1, src: brand1, alt: "Image 1" },
  { id: 2, src: brand2, alt: "Image 2" },
  { id: 3, src: brand3, alt: "Image 3" },
  { id: 4, src: brand4, alt: "Image 4" },
  { id: 5, src: brand5, alt: "Image 5" },
  { id: 6, src: brand6, alt: "Image 6" },
  { id: 7, src: brand7, alt: "Image 7" },
  { id: 8, src: brand8, alt: "Image 8" },
  { id: 9, src: brand9, alt: "Image 9" },
  { id: 10, src: brand10, alt: "Image 10" },
  { id: 11, src: brand11, alt: "Image 11" },
  { id: 12, src: brand12, alt: "Image 12" },
  { id: 13, src: brand13, alt: "Image 13" },
  { id: 14, src: brand14, alt: "Image 14" },
  { id: 15, src: brand15, alt: "Image 15" },
  { id: 16, src: brand16, alt: "Image 16" },
  { id: 17, src: brand17, alt: "Image 17" },
];

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div data-aos="zoom-in-up" className="text-center">
        <h2 className="text-4xl text-[#FFC107]  font-bold my-10">
          Our Brand Partners
        </h2>
      </div>

      <Marquee
        speed={50}
        gradient={true}
        gradientWidth={20}
        gradientColor={[248, 251, 253]}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className=" w-48 h-32 object-contain mr-10"
          />
        ))}
      </Marquee>
    </>
  );
};

export default Brand;
