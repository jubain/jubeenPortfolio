import React, { useState } from "react";
import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import '../../global.css'
import emailjs from '@emailjs/browser'

function Contact(props) {
  const [message, setmessage] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  })

  const handleInput = (e) => {
    e.preventDefault()
    setInputs(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
    console.log(e.target)
    emailjs.sendForm('service_y83kjeu', 'template_jkeq03h', e.target, 'f-f8LARP78FLqmDRC')
      .then(res => {
        console.log(res)
        setTimeout(() => {
          setmessage(false);
        }, 2000);
      }).catch(err => {
        console.log(err)
      })
  };


  return (
    <div id="contact" className="contact">
      <h1 className="heading">CONTACT</h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="Email">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              required
              // value={inputs.email}
              name="name"
            //onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label for="Email">EMAIL</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              // value={inputs.email}
              name="email"
            //onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label for="Message">MESSAGE</label>
            <textarea
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              //value={inputs.message}
              name="message"
            //onChange={handleInput}
            ></textarea>
          </div>
          <button type="submit" className="btn">
            SEND
          </button>
          {message && <span>Thanks, I'll reply</span>}
        </form>
      </div>
      <div className="social">
        <h4>STAY CONNECTED</h4>
        <div className="icons">
          <div onClick={() => window.open('https://github.com/jubain', "_blank")}>
            <GitHubIcon className="icon" />
          </div>
          <div onClick={() => window.open('https://www.linkedin.com/in/jubeen-amatya-76756a1b7/', "_blank")}>
            <LinkedInIcon className="icon" />
          </div>
          <div onClick={() => window.open('https://www.instagram.com/jubeen_amatya/', "_blank")}>
            <InstagramIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
