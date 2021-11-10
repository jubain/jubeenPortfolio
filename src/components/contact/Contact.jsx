import React, { useState } from "react";
import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact(props) {
  const [message, setmessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
  };


  return (
    <div id="contact" className="contact">
      <h1>CONTACT</h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="Email">EMAIL</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="Message">MESSAGE</label>
            <textarea
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn">
            SEND
          </button>
          {message && <span>Thanks, I'll reply</span>}
        </form>
      </div>
      <div className="social">
        <h4>STAY CONNECTED</h4>
        <div className="icons">
          <div onClick={()=>window.open('https://github.com/jubain',"_blank")}>
            <GitHubIcon className="icon" />
          </div>
          <div onClick={()=>window.open('https://www.linkedin.com/in/jubeen-amatya-76756a1b7/',"_blank")}>
            <LinkedInIcon className="icon" />
          </div>
          <div onClick={()=>window.open('https://www.instagram.com/jubeen_amatya/',"_blank")}>
            <InstagramIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
