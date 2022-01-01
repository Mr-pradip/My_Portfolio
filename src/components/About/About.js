import React from "react";
import "./About.css";
import aboutimg from "../Images/w3.jpeg";
import Pradip_Resume from "../Images/PRADIP Resume.pdf";

function About() {
  // up to top btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector(".up__to__top__btn");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space" id="About">
      <div className="about1">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="about__heading pz__10">About Me</h1>
              <div className="about__meta">
                <p className="about__text p__color">
                Hi, i'm pradip Kumar Pradhan. From Puri, Odisha. Currently I am in Bangalore preparing for MERN stark development.
                </p>
                <p className="about__text p__color">
                I have completed my b.tech in computer science engineering from Einstein academy of technology and management, Bhubaneswar  with an aggregate of 8.03 CGPA.
                I have completed my 10th and 12th from Ghanashyam hemalata Vidyamandir, Puri with aggregate of 9.0CGPA and 74.8% respectively.
                </p>
                <p className="about__text p__color">
                I have hobbies in playing cricket, chess, listening music, riding bikes and other than that in my free time I like to try some aptitude questions and decoding the programmings.
                </p>
                <p className="about__text p__color">
                Currently looking forward towards to be front-end developer.
                </p>
                <div className="about__button d__flex align__items__center">
                  <a href={Pradip_Resume} download={Pradip_Resume}>
                    <button className="about btn pointer">Download CV</button>
                  </a>
                  <a href="#Contact">
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={aboutimg} alt="" className="about__img"></img>
            </div>
          </div>
        </div>
      </div>
    



      <div className="about2">
        <div className="container">
          <div className="row">
            <img src={aboutimg} alt="" className="about__img"></img>
          </div>
          <div className="row">
            <h1 className="about__heading pz__10">About Me</h1>
            <div className="about__meta">
            <p className="about__text p__color">
                Hi, i'm pradip Kumar Pradhan. From Puri, Odisha. Currently I am in Bangalore preparing for MERN stark development.
                </p>
                <p className="about__text p__color">
                I have completed my b.tech in computer science engineering from Einstein academy of technology and management, Bhubaneswar  with an aggregate of 8.03 CGPA.
                I have completed my 10th and 12th from Ghanashyam hemalata Vidyamandir, Puri with aggregate of 9.0CGPA and 74.8% respectively.
                </p>
                <p className="about__text p__color">
                I have hobbies in playing cricket, chess, listening music, riding bikes and other than that in my free time I like to try some aptitude questions and decoding the programmings.
                </p>
                <p className="about__text p__color">
                Currently looking forward towards to be front-end developer.
                </p>
              <div className="about__button d__flex align__items__center">
                <a href={Pradip_Resume} download={Pradip_Resume}>
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top" style={{ color: "white" }}>
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
