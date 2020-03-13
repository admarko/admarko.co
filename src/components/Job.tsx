import React from "react";

import "./__styles__/Job.scss";

type props = {
  company: string;
  dates: string;
  location: string;
  title: string;
  description: string[];
};

export default function Job(props: props) {
  const { company, dates, location, description, title } = props;
  return (
    <div className="job">
      <div className="company"> {company}</div>
      <div className="title"> {title}</div>
      <div className="dates"> {dates}</div>
      <div className="location"> {location}</div>
      <div className="description">
        {" "}
        {description.map(bullet => {
          return <ul>bullet</ul>;
        })}
      </div>
    </div>
  );
}
