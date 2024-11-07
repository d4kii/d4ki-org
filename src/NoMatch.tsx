import { Link } from "react-router-dom";

import "./styles/NoMatch.css";

import FlavorText from "./assets/FlavorText.json";

function NoMatch() {
  return (
    <div id="NoMatch">
      <h1>What are you doing here?!?</h1>
      <em>{FlavorText[Math.floor(Math.random() * FlavorText.length)]}</em>
      <p>
        <Link to="/">
          <button>Go to the home page!!!!</button>
        </Link>
      </p>
    </div>
  );
}

export default NoMatch;
