import "../styles/header.css";

import SadZeppelins from "../imageComponents/SadZeppelins";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerLogo">
          <SadZeppelins />
          <button>hire me</button>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">portfolio</a>
            </li>
            <li>
              <a href="">blog</a>
            </li>
            <li>
              <a href="">cv</a>
            </li>
            <li>
              <a href="">store</a>
            </li>
            <li>
              <a href="">freelance</a>
            </li>
            <li>
              <a href="">about me</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
