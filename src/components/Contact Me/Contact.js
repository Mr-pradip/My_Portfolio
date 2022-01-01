import React from "react";
import "./Contact.css";
import contactimg from "../Images/W.jpeg";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="contact1">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="contact__box">
                <div className="contact__meta">
                  <h1 className="hire__text">
                    <b>Hire Me.</b>
                  </h1>
                  <p className="hire__text">
                    I am avilable for freelance work via phone:
                  </p>
                  <p className="hire__text">
                    <strong>+91 7978297853</strong> or email me on{" "}
                    <strong>pradipkupradhan1397@gmail.com</strong>
                  </p>
                </div>
                <div className="input__box">
                  <input
                    type="text"
                    className="contact name"
                    placeholder="Your Name *"
                    required
                  ></input>
                  <input
                    type="text"
                    className="contact email"
                    placeholder="Your Email *"
                    required
                  ></input>
                  <input
                    type="text"
                    className="contact subject"
                    placeholder="Write a Subject"
                    required
                  ></input>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write Your Message"
                    required
                  ></textarea>
                  <button className="sub" type="submit">
                    {" "}
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img className="contact__img" src={contactimg} alt=""></img>
            </div>
          </div>
        </div>
      </div>






      <div className="contact2">
        <div className="container">
          <div className="row">
            <img className="contact__img" src={contactimg} alt=""></img>
          </div>
          <div className="row">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">
                  <b>Hire Me.</b>
                </h1>
                <p className="hire__text">
                  I am avilable for freelance work via phone:
                </p>
                <p className="hire__text">
                  <strong>+91 7978297853</strong> or email me on{" "}
                  <strong>pradipkupradhan1397@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your Name *"
                  required
                ></input>
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                  required
                ></input>
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  required
                ></input>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message"
                  required
                ></textarea>
                <button className="sub" type="submit">
                  {" "}
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
