import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Password Generator",
    languages: "html, css, js",
    image: "/img/password-generator.png",
    description: "Uses JavaScript to prompt users for their preferred password criteria, then generates a password based on the criteria given.",
    repo: "https://github.com/kelso1020/password-generator",
    live: "https://kelso1020.github.io/password-generator/",
  },
  {
    id: 1,
    title: "JavaScript Quiz",
    languages: "html, css, js",
    image: "/img/javascript.png",
    description: "Uses JavaScript to present a timed quiz about JavaScript.",
    repo: "https://github.com/kelso1020/javascript-quiz/",
    live: "https://kelso1020.github.io/javascript-quiz/",
  },
  {
    id: 2,
    title: "Scheduler App",
    languages: "html, css, js",
    image: "/img/scheduler.png",
    description: "Schedule hourly activites for the current day!",
    repo: "https://github.com/kelso1020/scheduler",
    live: "https://kelso1020.github.io/scheduler/",
  },
  {
    id: 3,
    title: "Weather App",
    languages: "html, css, js",
    image: "/img/weather-app.png",
    description: "Weather API allows users to search for a 5-day weather forecast in any city.",
    repo: "https://github.com/kelso1020/weather-app",
    live: "https://kelso1020.github.io/weather-app/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;