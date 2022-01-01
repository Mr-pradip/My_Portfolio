import React from "react";
import "./Home.css";
import logo from "../Images/logo.jpeg";

function Home() {
  //fix header
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0)
  });

  //toogle menu


  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" width={80}></img>
          </div>
          <div className="navigation">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* toogle menu */}
          <div className="toogle__menu" style={{"color":"white"}}>
          <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">
                WELCOME TO MY WORLD
              </h1>
              <h2 className="home__text pz__10">
                Hi, I'm Pradip Kumar<br></br> Pradhan
              </h2>
              <h3 className="home__text pz__10 sweet">
                Front-End<br></br> Developer.
              </h3>
              <h4 className="home__text pz__10">
                currently in<br></br> BANGALORE.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
