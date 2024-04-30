import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./skills.js";
import "./styles.css";
import { skills } from "./skills.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList className="skill-list" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  return <img className="avatar" src="cat.jpeg" alt="Adam Bethlehem" />;
}

function Intro() {
  return (
    <div>
      <h1>Adam Bethlehem</h1>
      <p>
        I am Adam, an experienced fullstack automation engineer. I am now
        studying to become a full stack web front end engineer. Come on a
        journey with me!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <>
      {skills.length === 0 ? (
        <p> I am still working on my skills</p>
      ) : (
        <span className="skill-list">
          {skills.map((skillObject) => (
            <Skill
              key={skillObject.skill}
              name={skillObject.skill}
              level={skillObject.level}
              backgroundColor={skillObject.color}
            />
          ))}
        </span>
      )}
    </>
  );
}

function Skill({ name, backgroundColor, level }) {
  return (
    <div className="skill" style={{ backgroundColor: backgroundColor }}>
      {`${name} ${
        level === "beginner" ? "🐣" : level === "intermediate" ? "👍" : "💪"
      }`}
    </div>
  );
}
