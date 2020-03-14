import React from "react";

import "./__styles__/Job.scss";

type props = {
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string[];
};

export default function Job(props: props) {
  const { company, title, dates, location, description } = props;
  return (
    <div className="job">
      <div className="company"> {company}</div>
      {/* make this^ a link */}
      <div className="title"> {title}</div>
      <div className="dates"> {dates}</div>
      <div className="location"> {location}</div>
      <div className="description">
        {description.map(bullet => (
          <ul>{bullet}</ul>
        ))}
      </div>
    </div>
  );
}
