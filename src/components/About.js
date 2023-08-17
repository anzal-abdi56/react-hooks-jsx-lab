import React from "react";
import { image } from "../data/data";

function About() {
  const image = "https://i.imgur.com/mV8PQxj.gif";
  return <div id="about">
      <h2>About Me</h2>
      <p>Write something about yourself here.</p>
      <img src={`${image}`} alt="I made this" />

  </div>;
}

export default About;
