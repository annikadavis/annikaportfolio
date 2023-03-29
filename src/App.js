import "./App.css";
import { useState } from "react";
import About from "./About.js";
import Work from "./Work.js";
import githubLogo from "./images/github-48.png";
import instagramLogo from "./images/instagram-48.png";
import linkedinLogo from "./images/linkedin-48.png";
import sakura from "./images/sakura.JPG";
import sandDunes from "./images/sand-dunes.jpg";
import tokyo from "./images/tokyo.JPG";
import dog from "./images/dog.JPG";
import beach from "./images/beach.JPG";

// import { fairyDustCursor } from "cursor-effects";

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showWork, setShowWork] = useState(false);
  // const [showCustomize, setShowCustomize] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [selectedBackground, setSelectedBackground] = useState("");
  // const [showSparkles, setShowSparkles] = useState(false);
  // const [sparkleColor, setSparkleColor] = useState("pink");

  const handleAboutClick = () => {
    setShowWork(false);
    setShowAbout(true);
  };

  const handleWorkClick = () => {
    setShowAbout(false);
    setShowWork(true);
  };

  // const checkHandler = () => {
  //   setShowSparkles(!showSparkles);
  //   showSparkles &&
  //     new fairyDustCursor({
  //       colors: [sparkleColor],
  //     });
  // };

  // const handleCustomizeClick = () => {
  //   setShowCustomize(true);
  // };

  function BackgroundPicker() {
    return (
      <select
        value={selectedBackground}
        onChange={(e) => setSelectedBackground(e.target.value)}
        name="selectedBackground"
        defaultValue="none"
      >
        <option value="none">None</option>
        <option value={sakura}>Cherry Blossom</option>
        <option value={beach}>Beach</option>
        <option value={tokyo}>Tokyo</option>
        <option value={dog}>Dog</option>
        <option value={sandDunes}>Sand Dunes</option>
      </select>
    );
  }

  return (
    <div
      className="App"
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        height: "100vh",
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="App-header">
        <div className="Header-top">
          <h1 onClick={handleAboutClick} style={{ cursor: "pointer" }}>
            ANNIKA DAVIS <br />
            DA CUNHA
          </h1>
        </div>
        <div className="Header-left">
          <ul class="no-bullets">
            <li onClick={handleWorkClick} className="Sidebar-link">
              Work
            </li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div className="Customize-container">
            <form className="Customize-form">
              <p>.Text {"{"} </p>
              <label>color: </label>
              <input
                style={{ backgroundColor: backgroundColor, color: textColor }}
                name="newTextColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              ></input>
              <p>{"}"}</p>
              <p>.Body {"{"} </p>
              <label>background-color: </label>
              <input
                style={{ backgroundColor: backgroundColor, color: textColor }}
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              ></input>
              <p>{"}"}</p>
              <BackgroundPicker />
              {/* <label style={{ display: "flex", alignItems: "center" }}>
                add sparkles?
                <input
                  style={{ width: "20px", paddingTop: "20px" }}
                  type="checkbox"
                  checked={showSparkles}
                  onChange={checkHandler}
                />
              </label> */}
              <button>done</button>
            </form>
          </div>
          {/* <p className="Header-customize">Customize</p> */}
        </div>
      </header>
      {showAbout && <About />}
      {showWork && <Work />}
      <div className="Header-social-logo-group">
        <img src={githubLogo} alt="github logo" class="Header-social-logo" />
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
  );
}

export default App;
