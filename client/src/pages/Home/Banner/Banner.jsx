
import buzz from '../../../assets/buzzlighter.jpg'
import superHero from '../../../assets/superheros.jpg'
import demon from '../../../assets/demonslayer.jpg'
import spidy from '../../../assets/spidy.jpg'
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {

  useEffect(() => {
    AOS.init({
        duration : 2000
    });
    }, [])
  return (
    <>
     <div className="carousel w-full h-96 mb-10">
  <div   id="slide1" className="carousel-item relative w-full">
    <img src={superHero} className="w-full" />
    <div className="absolute  flex md:items-center  h-full ">

      <div data-aos="zoom-in-down" className=' text-white font-bold text-4xl md:text-7xl space-y-2  pt-10 md:pt-0 pl-5 md:pl-32  '>

      <TypeAnimation
  sequence={['Welcome to ToyHero Universe', 500, 'Discover the World of action figure toys', 500, 'Find your dream toy from Us', 500,'Dive into the World of Action Figures', 500]}
  // style={{ fontSize: '20em' }}
  repeat={Infinity}
/>
      </div>
      
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={demon} className="w-full" />

    <div className="absolute  flex md:items-center  h-full ">

<div  className='  font-bold text-4xl md:text-7xl space-y-2  pt-10 md:pt-0 pl-5 md:pl-32 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>

<TypeAnimation
sequence={['Welcome to ToyHero Universe', 500, 'Unleash Your Inner Hero', 500, 'Enter a World of Legends', 500]}
// style={{ fontSize: '20em' }}
repeat={Infinity}
/>
</div>

</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={spidy} className="w-full" />


    <div className="absolute  flex md:items-center  h-full ">

      <div className='  font-bold text-4xl md:text-7xl space-y-2  pt-10 md:pt-0 pl-5 md:pl-32 bg-gradient-to-r from-green-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text '>

      <TypeAnimation
  sequence={['Welcome to ToyHero Universe', 500, 'Where Imagination Comes to Life', 500, 'Embark on Epic Toy Quests', 500]}
  // style={{ fontSize: '20em' }}
  repeat={Infinity}
/>
      </div>
      
    </div>




    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={buzz} className="w-full" />



    <div className="absolute  flex md:items-center  h-full ">

<div className='  font-bold text-4xl md:text-7xl space-y-2  pt-10 md:pt-0 pl-5 md:pl-32 bg-gradient-to-r from-blue-500 via-black via-30% to-emerald-500   inline-block text-transparent bg-clip-text '>

<TypeAnimation
sequence={['Welcome to ToyHero Universe', 500, 'Collect, Play, Conquer', 500, 'Assemble Your Ultimate Collection', 500]}
// style={{ fontSize: '20em' }}
repeat={Infinity}
/>
</div>

</div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div>
</div>
    </>
  );
};

export default Banner;
