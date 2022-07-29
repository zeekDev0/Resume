
import React from 'react'
import"./project.css"
import title from "../../data"



const Project = ({img,link}) => {
  
  return (  
    <div className= "p">
      <div className='p-browser'>
       
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
          
      </div>
      <div className='p-bg'>
       
        <a href={link}>
          <img src={img} alt="" className="p-img" />
  </a>
        </div>
        
        
    
    </div>
    
  )
}

export default Project