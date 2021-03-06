import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";
import Header from "./Header";
import Job from "./Job";

import "./__styles__/Work.scss";

export default function Work() {
  const managedByQ = {
    company: "Managed by Q",
    link: "managedbyq.com",
    title: "Software Engineer",
    dates: "Aug 19 - Mar 20",
    location: "New York, NY",
    description: [
      "Led technical design and owned end to end implementation of Django backend, external API integrations, and React components for new application homepage",
      "Owned end to end development of new reporting features, designing API endpoints, GraphQL schema, and interactive React components",
      "Contributed to the re-architecture of the notifications system, consolidating all notifications into a robust, type-safe Django service",
      "Wrote internal documentation for notifications system architecture and engineering onboarding",
    ],
    technologies:
      "Python, Django, JavaScript, TypeScript, React, GraphQL, Apollo, Docker, Selenium, CircleCI",
  };

  const workday = {
    company: "Workday",
    link: "workday.com",
    title: "Software Development Application Engineer",
    dates: "Jun 18 - Sep 18",
    location: "Pleasanton, CA",
    description: [
      "Designed and implemented position name enhancements to improve the way employees and managers enter and approve time on Workday’s Time Tracking product",
      "Impacted all core functionality by developing code for 30+ tasks to handle time management",
      "Learned to develop software in a proprietary language, XpressO, and built all automation (unit and system tests) through related proprietary toolset",
    ],
    technologies: "XpressO and related tools",
  };

  const nowpow = {
    company: "NowPow",
    link: "nowpow.com",
    title: "Software Engineering Intern",
    dates: "Jan 18 - Jun 18",
    location: "Hyde Park, IL",
    description: [
      "Researched, designed and implemented plan to reconfigure entire deployment process to a Blue-Green deployment system with zero downtime",
      "Wrote PowerShell scripts to create slots, add hostnames with SSL bindings, deploy web apps and swap slots using Octopus Deploy and Azure Resource Manager",
      "Assisted in regression tests to ensure latest code deployments perform as expected",
    ],
    technologies:
      "PowerShell, Octopus Deploy, Microsoft Azure Resource Manager",
  };

  const tradingTechnologies = {
    company: "Trading Technologies",
    link: "tradingtechnologies.com",
    title: "Software Engineering Intern",
    dates: "Jan 18 - Jun 18",
    location: "Chicago, IL",
    description: [
      "Developed client-side code for comprehensive high-speed, web-based futures trading platform built in Javascript",
      "Identified and fixed client-reported bugs to improve UX in HTML5, CSS3, LESS, jQuery, Underscore.js and Backbone.js",
      "Devised and implemented system to generate additional business event analytics for Domo through AWS Kinesis and Redshift",
      "Placed 1st in internal futures trading competition among interns on TT trading platform",
    ],
    technologies: "JavaScript, Backbone.js, HTML5/CSS3, LESS, Underscore.js",
  };

  const jobs = [managedByQ, workday, nowpow, tradingTechnologies];

  return (
    <div>
      <Header />
      <div className="work-title">
        <h1>Work</h1>
      </div>
      {jobs.map(job => (
        <Job
          company={job.company}
          link={job.link}
          title={job.title}
          dates={job.dates}
          location={job.location}
          description={job.description}
          technologies={job.technologies}
        />
      ))}
      <div className="resume">
        <a
          href={`${process.env.PUBLIC_URL}/AlexMarkowitz_Resume.pdf`}
          download={`${process.env.PUBLIC_URL}/AlexMarkowitz_Resume.pdf`}
        >
          <strong>Resume</strong> <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
      <Footer />
    </div>
  );
}
