'use client'
import React, { useState } from 'react'
import ProjectCard from './porject-card'
import ProjectTag from './project-tag'



const projectsData = [
  {
    id:1,
    title: "Dashboard",
    description: "Project copy",
    image: '/images/Dashboard.png',
    tag:['All', 'Web', "Mobile"],
    gitUrl: 'https://dashbroard1-jvaoegj68-30bkr.vercel.app/',
    previewURL: '/',
  },
  {
    id:2,
    title: "LandingPage",
    description: "Project copy",
    image: "/images/LandingPage.png",
    tag:['All', 'Web'],
    gitUrl: 'https://30bkr.github.io/landingpage/',
    previewURL: '/',
  },
  {
    id:3,
    title: "Proyecto",
    description: "Project",
    image: '/images/Proyecto.png',
    tag:['All', 'Web', "Mobile"],
    gitUrl: 'https://proyecto-vert-one.vercel.app/',
    previewURL: '/',
  },
]

const ProjectSection = () => {
  const [tag, setTag] = useState('All')

  const handleTagChange = (newTag : string) => {
    setTag(newTag)
  }
  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <section id='projects' className='h-fit pt-24 relative'>
      <div className='sm:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <h2>My Projects</h2>

      <div className=' flex flex-row justify-center items-center gap-2 text-white py-6 z-10'>
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Mobile" 
        isSelected={tag === "Mobile"}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12 z-10'>
        {filteredProjects.map((project) => (
        <ProjectCard 
        key={project.id} 
        title={project.title}
        description={project.description} 
        imgURL={project.image} 
        tags={project}
        gitUrl={project.gitUrl} 
        previewUrl={project.previewURL} 

        />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection