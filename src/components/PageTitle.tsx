import React from "react";

type props = {
  title: string;
};

export default function Work(props: props) {
  const { title } = props;
  return <div className="title">{title}</div>;
}
