import React from 'react'
import"./projectList.css"
import Project from "../projects/Project"
import projectD from "../../data"
const ProjectList = (project) => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Design Create & Build !!! </h1>
            <p className='pl-desc'>List of projects that i've built & Currently working on.</p>
            
        </div>



 <div className='pl-list'>
          
    {projectD.map((item) => (
      <Project key={item.id} img={item.img} link={item.link}/>
        
    ))}
 </div>


      </div>
  )
}

export default ProjectList