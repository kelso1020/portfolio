import React from "react";

function About() {
  return (
    <div>
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="portrait"/>
      <p className="content is-italic mt-4">
        I'm Jess, a Michigan native, studying to be a full-stack web developer.
      </p>
      <p className="content">
        After a decade of working as hairdresser, I decided to take on the challenge of learning a new skill:
        front-end and back-end coding to develop websites and apps. Here are a few projects that I've worked on
        implementing my new knowledge of HTML, CSS, JavaScript, Node.js, Express.js, SQL, React, and more:
      </p>
    </div>
  );
}

export default About;