import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form"
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect } from "react";

  const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors }} = useForm();

  const serviceID = "service_wc8r197"
  const templateID = "template_0o894hc"
  const userID = "user_e6BIdz6WfGbHVAzBfof7h"

  function onSubmit(data, r) {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        Subject: data.Subject,
        message: data.message
      },
      userID
    )
    r.target.reset()

  }

  function sendEmail(serviceID, templateID, variables, userID) {


    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully!");
      }).catch(err => console.error(`Something when wrong ${err}`));

  }

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1> Contact Me</h1>
        <p>Please provide your details below</p>
        <span className="success-message">{successMessage}</span>
      </div>
    
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col xs-12">
         
               {/* Name Input */}
              <div className="text-center">
                <input data-aos="fade-left" type="text"
                color="transparent"
                className="form-control" 
                placeholder="Name" 
                {...register("name", { required: "Please enter your name" ,pattern:/^[a-zA-Z ]{3,30}$/ , minlenght: 3 , maxLength: 50  })} />

                <div className="line"></div>
              </div>
              <span className="error-messages">
                {errors.name && errors.name.message}
             </span>

              <div className="text-center">

          
                {/* Email Input */}
                <input data-aos="fade-left" type="text"
                className="form-control"
                placeholder="Email"
                {...register("email", { required: "Please enter valid Email ID", pattern: /^\S+@\S+$/i })} />
                <div className="line"></div>
              </div>
              <span className = "error-messages">
                 {errors.email && errors.email.message}
                                    </span>

          
              {/* Phone Input */}

              <div className="text-center">
              
                <input data-aos="fade-left" type="tel" 
                className="form-control" 
                placeholder="Mobile number" 
                {...register("phone", { required: "Please enter valid Mobile no.",pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, minLength: 10, maxLength: 12 })} />
                <div className="line"></div>
              </div>
              <span className="error-messages">
                {errors.phone && errors.phone.message}
             </span>
             
              {/* Subject Input */}
              <div className="text-center">

                <input data-aos="fade-left" type="text" 
                className="form-control" 
                placeholder="Subject " 
                {...register("Subject", { required: true })} 
                />
                <div className="line"></div>
              </div>
              <span className="error-messages">
                {errors.Subject && errors.Subject.message}
            </span>
          </div>
        
        
          {/* Message Input */}
          <div className="col-md-6 col-xs-12">
            <div className="text-center">

                <textarea
                  data-aos="fade-up"
                type="text"
                 className="form-control" 
                 placeholder="message " 
                 {...register("message", {required: true })} 

              >
              </textarea>
              <div className="line"></div>
            </div>
            <span className="error-messages">
              {errors.message && errors.message.message}
            </span>
            <button data-aos="fade-up" className="btn btn-primary" type="submit"> Send </button>
          </div>
      </div>
    </form>

      </div >
    </div >
  )

}

export default Contact;




