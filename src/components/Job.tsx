import React from "react";

import "./__styles__/Job.scss";

type props = {
  company: string;
  link: string;
  title: string;
  dates: string;
  location: string;
  description: string[];
};

export default function Job(props: props) {
  const { company, link, title, dates, location, description } = props;
  return (
    <div className="job">
      <div className="info">
        <div className="company">
          <a href={link}>{company}</a>
        </div>
        <div className="title"> {title}</div>
        <div className="dates"> {dates}</div>
        <div className="location"> {location}</div>
      </div>
      <div className="description">
        {description.map((bullet, i) => (
          <ul key={i}>{bullet}</ul>
        ))}
      </div>
    </div>
  );
}
