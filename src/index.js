import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
        I am Adam, A beginner fullstack automation engineer. I am now studying
        to become a full stack we front end engineer. Come on a journey with me!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <span className="skill-list">
      <Skill name="JavaScript 🏋️‍♀️" backgroundColor="blue" />
      <Skill name="Docker 🐳" backgroundColor="pink" />
      <Skill name="CSS + HTML 🐝" backgroundColor="orange" />
      <Skill name="Git + Github 🐝" backgroundColor="red" />
      <Skill name="React 🕸️" backgroundColor="lightblue" />
    </span>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name}
    </div>
  );
}
