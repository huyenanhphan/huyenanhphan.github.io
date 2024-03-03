import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
  return (
    <section id="contact" className="contact">
    <PageHeaderContent 
    headerText = "Contact"
    icon={<BsInfoCircleFill size={40} />}
    />

    <div className="contact__content">
      <Animate play duration={1} delay={0} start={{
        transform:'translate(100px,100px)',
      }}
      end={{
        transform:'translate(0,0)'

      }}
      >
        <h3 className="contact__content__header-text">Feel free to contact me!</h3>

      </Animate>

      <Animate play duration={1} delay={0} start={{
        transform:'translate(100px,100px)',
      }}
      end={{
        transform:'translate(0,0)'

      }}
      >
        <div className="contact__content__form">
          <div className="contact__content__form__controlswrapper">
            <div >
              <input  required name="name" className="inputName" type="text"/>
              <label  htmlFor="name" className="nameLabel">Name</label>
            </div>
            <div>
            <input required name="email" className="inputEmail" type="text"/>
              <label  htmlFor="email" className="emailLabel">Email</label>
            </div>
            
            <div>
            <input  required name="description" className="inputDescription" type="text"/>
              <label  htmlFor="description" className="descriptionLabel">Description</label>
            </div>


          </div>

        </div>
        <button>SUBMIT</button>

      </Animate>

    </div>

    </section>  
  );
}

export default Contact;