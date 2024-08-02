import React from 'react'
import project from './data/projects.json'

const Projects = () => {
  return (
    <>
      <div classNameName="container projects my-3" id="Projects">
        <h1 >PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {
            project.map((data) => (
              <>
                <div key={data.key} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-3' data-aos="flip-right" data-aos-duration="1000">
                  <div class="card bg-dark text-light" style={{ width: "18rem" ,border:"2px solid yellow",boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)'}} >
                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={data.imageSrc} class="card-img-top" alt="..." style={{height:"200px" ,width:"250px",border:"2px solid yellow"}}/>
                    </div>
                    <div class="card-body text-center">
                      <h5 class="card-title">{data.title}</h5>
                      <p class="card-text">{data.description}</p>
                      <a href={data.demo} class="btn btn-primary mx-3">Demo</a>
                      <a href={data.source} class="btn btn-warning">Demo</a>
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects;
