import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import Face from "../images/Face.png";

import "./__styles__/About.scss";

export default function About() {
  const infoHeader = "Hello! My name is Alex 👋 ";
  const info =
    "I am a software engineer based in New York City. As a full-stack developer, I enjoy building user-focused products end-to-end, from the database layer to the frontend components. I'm a recent graduate of the University of Chicago where I studied Computer Science. I currently work at Managed by Q. Feel free to reach out anytime!";
  return (
    <div>
      <Header />
      <div className="about-title">
        <h1>About me </h1>
      </div>
      <div className="main-content">
        {/* <div> */}
        <img src={Face} className="face" alt="" />
        {/* </div> */}
        <div>
          <h2 className="about-hello">{infoHeader}</h2>
          <div className="about-info">{info}</div>
        </div>
      </div>
      <div className="about-technologies">
        <div className="terminal-header">
          <span className="name">Alex</span> in{" "}
          <span className="path">~/Desktop/Projects/admarko.co</span> on{" "}
          <span className="branch">dev*</span>
        </div>
        &gt; Technologies.filter(is_favorite=True)
        <div className="devicons">
          <i className="devicon-python-plain colored" />
          <i className="devicon-django-plain" />
          <i className="devicon-javascript-plain colored" />
          <i className="devicon-typescript-plain colored" />
          <i className="devicon-react-original colored" />
          <i className="devicon-html5-plain colored" />
          <i className="devicon-css3-plain colored" />
          <i className="devicon-sass-original colored" />
          <i className="devicon-github-plain" />
        </div>
        &gt; Technologies.filter(location=&quot;work&quot;)
        <div className="devicons">
          <i className="devicon-docker-plain colored" />
          <i className="devicon-amazonwebservices-original colored" />
          <i className="devicon-backbonejs-plain" />
          <i className="devicon-jquery-plain colored" />
          <i className="devicon-less-plain-wordmark" />
          {/* Find Icons: Azure, CircleCI, Selenium, octopus deploy */}
        </div>
        &gt; Technologies.filter(location=&quot;school&quot;)
        <div className="devicons">
          <i className="devicon-c-line" />
          <i className="devicon-java-plain colored" />
          <i className="devicon-ruby-plain colored" />
          <i className="devicon-rails-plain colored" />
          <i className="devicon-d3js-plain colored" />
          <i className="devicon-gitlab-plain colored" />
          {/* Find Icons: Elm, Racket */}
        </div>
        &gt; Technologies.filter(has_icon=False)
        <div className="devicons">
          <div>Elm</div>
          <div>Racket</div>
          <div>Azure</div>
          <div>CircleCI</div>
          <div>Selenium</div>
          <div>OctopusDeploy</div>
          <div>Dart</div>
        </div>
        {/* Ones I want to learn: Dart, Sqift, MongoDB, raspberryPi */}
      </div>
      <Footer />
    </div>
  );
}
