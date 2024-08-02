import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_item">PORTFOLIO</div>
        <div className="right">
            <a href="#Home" className="nav_item">Home</a>
            <a href="#Skills" className="nav_item">Skills</a>
            <a href="#Projects" className="nav_item">Projects</a>
            <a href="#Contacts" className="nav_item">Contacts</a>
        </div>
        
      </div>
      {/* <hr style={{border:"2px solid yellow"}}/> */}

    </>
  )
}

export default Navbar;
