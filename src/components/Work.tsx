import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Job from "./Job";

import "./__styles__/Work.scss";

export default function Work() {
  const managedByQ = {
    company: "Managed by Q",
    title: "Software Engineer",
    dates: "Aug 2019 - Mar 2020",
    location: "New York, NY",
    description: ["bullet_1", "bullet_2", "bullet_3"],
  };

  const workday = {
    company: "Workday",
    title: "Software Development Application Engineer",
    dates: "Jun 2018 - Sep 2018",
    location: "Pleasanton, CA",
    description: ["bullet_4", "bullet_5", "bullet_6"],
  };

  const jobs = [managedByQ, workday];

  return (
    <div>
      <Header />
      <div className="work-title">
        <h1>Work</h1>
      </div>
      {jobs.map(job => (
        <Job
          company={job.company}
          title={job.title}
          dates={job.dates}
          location={job.location}
          description={job.description}
        />
      ))}
      <Footer />
    </div>
  );
}
