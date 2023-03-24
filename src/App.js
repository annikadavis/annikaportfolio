import "./App.css";
import About from "./About.js";
import Work from "./Work.js";
import githubLogo from "./images/github-48.png";
import instagramLogo from "./images/instagram-48.png";
import linkedinLogo from "./images/linkedin-48.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-top">
          <h1>
            ANNIKA DAVIS <br />
            DA CUNHA
          </h1>
          <div className="Header-social-logo-group">
            <img
              src={githubLogo}
              alt="github logo"
              class="Header-social-logo"
            />
            <img
              src={instagramLogo}
              alt="instagram logo"
              class="Header-social-logo"
            />
            <img
              src={linkedinLogo}
              alt="linkedin logo"
              class="Header-social-logo"
            />
          </div>
        </div>
        <div className="Header-left">
          <ul class="no-bullets">
            <li>Work</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <p>Edit CSS</p>
        </div>
      </header>
      {/* <About /> */}
      <Work />
    </div>
  );
}

export default App;
