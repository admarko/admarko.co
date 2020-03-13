import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import Face from "../images/Face.png";

import "./__styles__/About.scss";

export default function About() {
  const info =
    "Hello! My name is Alex. I am a software engineer currently working at Managed by Q. I consider myself a full-stack developer and enjoy building user-focused products end-to-end from the database layer to frontend compoents. I am a recent graduate of the University of Chicago where I studied Computer Science. Please don't hesitate to reach out";
  return (
    <div>
      <Header />
      <div className="aboutTitle">
        <h1>About me </h1>
      </div>
      <div className="mainContent">
        {/* <div> */}
        <img src={Face} className="face"></img>
        {/* </div> */}
        <div className="aboutInfo">{info}</div>
      </div>
      <div className="technologies">
        Technologies I use quite often:
        <div className="devicons">
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-django-line colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-github-plain colored"></i>
        </div>
        Others I've used professionally:
        <div className="devicons">
          <i className="devicon-docker-plain colored"></i>
          <i className="devicon-amazonwebservices-original colored"></i>
          <i className="devicon-backbonejs-plain colored"></i>
          <i className="devicon-jquery-plain colored"></i>
          <i className="devicon-less-plain-wordmark colored"></i>
          {/* Find Icons: Azure, CircleCI, Selenium, octopus deploy */}
        </div>
        Others I've used academically:
        <div className="devicons">
          <i className="devicon-c-line colored"></i>
          <i className="devicon-java-plain colored"></i>
          <i className="devicon-ruby-plain colored"></i>
          <i className="devicon-rails-plain colored"></i>
          <i className="devicon-d3js-plain colored"></i>
          <i className="devicon-gitlab-plain colored"></i>
          {/* Find Icons: Elm, Racket */}
        </div>{" "}
        {/* Ones I want to learn: Dart, Sqift, MongoDB, raspberryPi */}
      </div>
      <Footer />
    </div>
  );
}
