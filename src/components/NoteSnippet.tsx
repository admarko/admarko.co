import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

type author = {
  first_name: string;
  last_name: string;
};

type props = {
  author: author;
  title: string;
  summary: string;
  published: string;
  slug: string;
};

export default function NoteSnippet(props: props) {
  const { title, summary, published, slug } = props;
  return (
    <div>
      <h3>
        <Link to={{ pathname: `notes/${slug}`, state: props }}> {title}</Link>
      </h3>
      <p>{summary}</p>
      <div>
        <div>
          By {props.author.first_name} {props.author.last_name}
        </div>
        <span>Published on {moment(published).format("YYYY-MM-DD")}</span>
      </div>
    </div>
  );
}
