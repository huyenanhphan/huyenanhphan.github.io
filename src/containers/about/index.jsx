import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';


const personalInfo = [{
  label: "Name",
  value: "Huyen Anh Phan"
},

// {
//   label: "D.O.B",
//   value: "08/18/2003"
// },
{
  label: "Education",
  value: "Ungraduate student at Centennial College"
},
{
  label: "Phone Number",
  value: "(+1) 647-878-0772"
},
{
  label: "Email",
  value: "molyhuyenanh03@gmail.com"
}];

const IntroSummary = 'Hello, I am Anne Phan, currently pursuing a degree in Software Engineering Technology - AI at Centennial College. With a passion for technology and an ability for quick learning, I aspire to become either a full-stack developer or a data scientist. I bring dedication, strong multitasking skills, and a genuine enthusiasm for problem-solving to projects I undertake. Although I dont have much real experience in the field yet, my academic background and personal projects have equipped me with a solid understanding of software development principles and data analysis techniques. I am eager to leverage this foundation in a professional setting, where I can grow my skills further and make a tangible impact.';


const About = () => {
  return (

    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />


      <div className="about__content">
        <div className="about__content__personalWrapper">

          <Animate play duration={3} delay={0} start={{
            transform: 'translateX(-850px)'
          }}
            end={{
              transform: 'translateX(0px)'

            }}

          >

            <h3>Undergraduate Student in Software Engineering Technology - AI</h3>
            <p>{IntroSummary}</p>
          </Animate>

          <Animate play duration={3} delay={0} start={{
            transform: 'translateX(650px)',
          }}
            end={{
              transform: 'translateX(0px)'

            }}

          >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {
                personalInfo.map((item, i) => (
                  <li key={i}>
                    <span className="Title">{item.label}</span>
                    <span className="Value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <div className="about__content__serviceWrapper__innerContent">
            <div>
            <Animate play duration={3} delay={0} start={{
            transform: 'translateX(650px)'
          }}
            end={{
              transform: 'translateX(0px)'

            }}

          >
              <img className="image-small" src="/ava.jpg" alt="Avatar" style={{ width: '310px', height: '400px', borderRadius: '5%', display:'flex'}}  />
              </Animate>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}


export default About;