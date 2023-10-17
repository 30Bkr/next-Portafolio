'use client'
import { secureHeapUsed } from 'crypto'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './tab-button'

export default function AboutSection()  {
  const [tab,setTab] = useState('skills');
  const [ispending ,startTransition ] = useTransition();

  const handleTabChange = (id : string) => {
    startTransition(()=>{
      setTab(id)
    })
  }
  const TAB_DATA = [
    {
      title: 'Skills',
      id: 'skills',
      content : (
        <ul className='list-disc pl-2 h-full'>
          <li>HTML</li>
          <li>Css</li>
          <li>Javascript</li>
          <li>Next.Js</li>
          <li>React.Js</li>
          <li>Node.js</li>
          <li>Tailwind</li>
          <li>TypeScript</li>
          <li>PostgreSQL</li>
        </ul>
      )
    },
    {
      title: 'Education',
      id: 'education',
      content : (
        <section className='h-full'> 
          <div className='mb-1'>
            <h2 className='font-bold'>- U.E.N "Antionio Arraiz"</h2>
            <h3>Graduado En Ciencias</h3>
            <p className='font-extralight text-slate-500'>2012-2017</p>
          </div>
          <div className='mb-1'>
            <h2 className='font-bold'>- U.P.T.E.C "Mariscal Sucre"</h2>
            <h3>Ingenieria Mecanica</h3>
            <p className='font-extralight text-slate-500'>2018-2023</p>
          </div>
          <div className='mb-1'>
            <h2 className='font-bold'>- U.P.T.E.C "Mariscal Sucre"</h2>
            <h3 >Ingenieria de Sistemas</h3>
            <p className='font-extralight text-slate-500'>2023-acutalidad</p>
          </div>
        </section>
      )
    },
    {
      title: 'Courses',
      id: 'courses',
      content : (
        <section>
          <div className='mb-1'>
            <h2 className='font-bold'>- Platzi</h2>
            <h3>Curso Profesional NextJs</h3>
            <p className='font-extralight text-slate-500'>2022-acutalidad</p>
          </div>
          <div className='mb-1'>
            <h2 className='font-bold'>- Platzi</h2>
            <h3>Curso Javascript</h3>
            <p className='font-extralight text-slate-500'>2022-acutalidad</p>
          </div>
          <div className='mb-1'>
            <h2 className='font-bold'>- Platzi</h2>
            <h3 >Curso CSS</h3>
            <p className='font-extralight text-slate-500'>2022-acutalidad</p>
          </div>
        </section>
      )
    },

  ]
  return (
    <section className='text-white h-screen relative ' id='about'>
      <div className='sm:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -right-4 transform translate-x-1/2 translate-1/2'></div>

        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10'>
          <Image alt='Foto replicada' src="/ejemplo.webp" width={200} height={200}/>
          <div className='mt-4 md:mt-0 text-left flex flex-col  w-full h-[642px]'>
            <h2 className='text-4xl font-bold text-white mb-4'>Acerca de mi</h2>
            <p className='text-base lg:text-lg w-auto z-10'>
              Soy una persona comprometida con el trabajo, sociable, pro-activo, deportista y responsable. 
              Apasionado por el deporte, la programacion y el conocimiento. Me gusta aprender cosas nuevas y los retos.
            </p>
            <div className='flex flex-row mt-8 z-10'>
              <TabButton 
              selectTab={() => handleTabChange("skills")} 
              actives={tab==="skills"}>
                Skills 
              </TabButton>
              <TabButton 
              selectTab={() => handleTabChange("education")} 
              actives={tab==="education"}>
                Education 
              </TabButton>
              <TabButton 
              selectTab={() => handleTabChange("courses")} 
              actives={tab==="courses"}> 
                Courses 
              </TabButton>
            </div>
            <div className='mt-8 z-10'>
              {TAB_DATA.find((t)=> t.id ===tab)?.content}
            </div>
          </div>

        </div>
    </section>
  )
}
