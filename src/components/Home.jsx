import React from 'react'
import PDF from '../PDF/MyResume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
import { useEffect , useRef } from 'react'

const Home = () => {
    const typedRef =useRef(null);
    useEffect(()=>{

        const options ={
            strings : ["Welcome to My Profile...","My Name Is Abhiraj Yadav","I'm React Developer"],
            typeSpeed:40,
            backSpeed:40,
            loop:true
        }

        const typed = new Typed(typedRef.current,options);

        return () => {
            typed.destroy();
        };
    },[])
  return (
   <>
   <div className="container home" id='Home'>
    <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a href={PDF} download="MyResume.pdf" className="btn btn-outline-warning my-3" style={{cursor:"pointer"}}>Download Resume</a>
    </div>
    <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
        <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero"  />
        </div>
    </div>
   </div>
   </>
  )
}

export default Home;
