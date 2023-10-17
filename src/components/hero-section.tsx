'use client'
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='h-screen'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 w-full place-self-center text-center sm:text-left">
          <h1 className=" text-white  justify-start mb-4 sm:text-3xl lg:text-5xl lg:leading-normal font-bold flex flex-col">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-3xl sm:text-5xl lg:text-8xl'>
              Hola, Soy{" "}
            </span>
            <TypeAnimation 
              sequence={[
                'Briant Carrillo',
                1000,
                "Desarrollador Mobil",
                1000,
                "Desarrollador Web",
                1000,
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white border-b-2 w-[424px] text-lg lg:text-2xl mb-6 lg:mb-20">Me gustaria formar parte de tu empresa</p>
          <div>
            <a href='https://api.whatsapp.com/send?phone=+04149105229' className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-pulple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Contratame
            </a>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 mb-4'>
              <a download='Briant Carrillo' href='/images/briant.pdf' className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Descargar CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
            src="/ejemplo.webp" 
            alt="Imagen del autor" 
            width={150} height={170}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
