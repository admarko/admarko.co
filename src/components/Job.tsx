import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import "./__styles__/Job.scss";

type props = {
  company: string;
  link: string;
  title: string;
  dates: string;
  location: string;
  description: string[];
  technologies: string;
};

export default function Job(props: props) {
  const {
    company,
    link,
    title,
    dates,
    location,
    description,
    technologies,
  } = props;
  return (
    <div className="job">
      <div className="job-info">
        <div className="company">
          <a href={link}>{company}</a>
        </div>
        <div className="title"> {title}</div>
        <div className="dates-location">
          <div className="location">
            {location} <FontAwesomeIcon icon={Solid.faMapMarkerAlt} />
          </div>
          <div className="dates"> {dates}</div>
        </div>
      </div>
      <div className="description">
        <ul>
          {description.map(bullet => (
            <li className="bullet" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="job-technologies">
        <em>{technologies}</em>
      </div>
    </div>
  );
}
