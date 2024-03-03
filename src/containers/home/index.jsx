import React from "react";
import './styles.scss';
import {Animate} from 'react-simple-animate'
import {useNavigate} from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  console.log(navigate);
  
  const handleNavToContactMePage =() =>{
    navigate('/contact'); 

  }

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
      <h1><h2>Welcome to my portfolio!</h2>
        <br/>Hi, my name is Huyen Anh, you can call me Anne.
        <br/>A graduate student in Software Engineering Technology - AI.
        <br/>I want to be a full-stack developer and a data scientist ^v^.
      </h1>
      </div>


      <Animate play duration={3} delay={0} start={{
        transform: 'translateY(550px)'
      }}
      end = {{
        transform: 'translateX(0px)'

      }}
      
      >
      <div className="home__contact-me">
        <button onClick={handleNavToContactMePage}>Hire Me</button>
      </div>
      </Animate>
    </section>
  );
}

export default Home;