import "./App.css";
import { useState } from "react";
import About from "./About.js";
import Work from "./Work.js";
import Services from "./Services";
import Extras from "./Extras";
import ContactMobile from "./ContactMobile";
import sakura from "./images/sakura.JPG";
import sandDunes from "./images/sand-dunes.jpg";
import tokyo from "./images/tokyo.JPG";
import dog from "./images/dog.JPG";
import beach from "./images/beach.JPG";
import sparkle from "./images/sparkle-multi.png";
import Collapsible from "react-collapsible";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  const [showCustomizeMobile, setShowCustomizeMobile] = useState(false);
  const [showContactMobile, setShowContactMobile] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [selectedBackground, setSelectedBackground] = useState("");

  const handleAboutClick = () => {
    setShowWork(false);
    setShowServices(false);
    setShowExtras(false);
    setShowContactMobile(false);
    setShowAbout(true);
  };

  const handleWorkClick = () => {
    setShowAbout(false);
    setShowServices(false);
    setShowExtras(false);
    setShowContactMobile(false);
    setShowWork(true);
  };

  const handleServicesClick = () => {
    setShowAbout(false);
    setShowWork(false);
    setShowExtras(false);
    setShowContactMobile(false);
    setShowServices(true);
  };

  const handleExtrasClick = () => {
    setShowAbout(false);
    setShowWork(false);
    setShowServices(false);
    setShowContactMobile(false);
    setShowExtras(true);
  };

  const handleContactMobileClick = () => {
    setShowAbout(false);
    setShowWork(false);
    setShowServices(false);
    setShowExtras(false);
    setShowContactMobile(true);
  };

  const handleCustomizeClick = () => {
    showCustomize ? setShowCustomize(false) : setShowCustomize(true);
  };

  const handleCustomizeMobileClick = () => {
    showCustomizeMobile
      ? setShowCustomizeMobile(false)
      : setShowCustomizeMobile(true);
  };

  document.body.style.backgroundColor = backgroundColor;

  function BackgroundPicker() {
    return (
      <select
        className="Background-picker"
        value={selectedBackground}
        onChange={(e) => setSelectedBackground(e.target.value)}
        name="selectedBackground"
        defaultValue="none"
      >
        <option value="none">none</option>
        <option value={sakura}>sakura</option>
        <option value={beach}>beach</option>
        <option value={tokyo}>tokyo</option>
        <option value={dog}>dog</option>
        <option value={sandDunes}>sand</option>
      </select>
    );
  }

  return (
    <div
      className="App"
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="App-header">
        <div
          className="Header-container-mobile"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="Header-top-mobile">
            <title>Annika Davis da Cunha</title>
            <h1 onClick={handleWorkClick}>ANNIKA DAVIS DA CUNHA</h1>
          </div>
          <div className="Nav-mobile">
            <h3 onClick={handleAboutClick} className="Sidebar-link-mobile">
              About
            </h3>
            <h3 onClick={handleServicesClick} className="Sidebar-link-mobile">
              Services
            </h3>
            <h3 onClick={handleExtrasClick} className="Sidebar-link-mobile">
              Extras
            </h3>
            <h3
              onClick={handleContactMobileClick}
              className="Sidebar-link-mobile"
            >
              Contact
            </h3>
          </div>
        </div>
        <div className="Header-top">
          <title>Annika Davis da Cunha</title>
          <h1 onClick={handleWorkClick} style={{ cursor: "pointer" }}>
            ANNIKA DAVIS <br />
            DA CUNHA
          </h1>
        </div>
        <h3 onClick={handleAboutClick} className="Sidebar-link">
          About
        </h3>
        <h3 onClick={handleServicesClick} className="Sidebar-link">
          Services
        </h3>
        <h3 onClick={handleExtrasClick} className="Sidebar-link">
          Extras
        </h3>
        <Collapsible
          trigger={
            <h3 className="Sidebar-link" style={{ display: "inline-block" }}>
              Contact
            </h3>
          }
          transitionTime="200"
        >
          <div className="Social-links-group-dropdown">
            <a
              href="mailto:hello@annikadavisdacunha.com"
              className="About-link"
            >
              email
            </a>
            <br />
            <a
              href={"https://github.com/annikadavis"}
              target="_blank"
              className="About-link"
            >
              github
            </a>
            <br />
            <a
              href={"https://www.instagram.com/annika__karin"}
              target="_blank"
              className="About-link"
            >
              instagram
            </a>
            <br />
            <a
              href={"https://www.linkedin.com/in/annikadavis"}
              target="_blank"
              className="About-link"
            >
              linkedin
            </a>
          </div>
        </Collapsible>
        {!showCustomize && (
          <div className="Header-customize">
            <button onClick={handleCustomizeClick} className="Customize-button">
              customize
            </button>
            <img src={sparkle} className="Customizer-button-sparkle" />
          </div>
        )}
        {showCustomize && (
          <div className="Customize-container">
            <form className="Customize-form">
              <div className="Customizer-done-container">
                <p style={{ margin: 0, fontSize: "11px" }}>
                  hint: try typing a color name, <br />
                  or using a{" "}
                  <a href="https://www.color-hex.com/" target={"_blank"}>
                    hex code
                  </a>
                </p>
                <p onClick={handleCustomizeClick} className="Customizer-done">
                  x
                </p>
              </div>
              <p>text {"{"} </p>
              <label>color: </label>
              <input
                name="newTextColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              ></input>
              <p>{"}"}</p>
              <p>body {"{"} </p>
              <label>background-color: </label>
              <input
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              ></input>
              <p>
                background-image: <BackgroundPicker />
              </p>
              <p>{"}"}</p>
            </form>
          </div>
        )}
      </header>
      <div>
        {showCustomizeMobile && (
          <div className="Customize-mobile">
            <form className="Customize-form">
              <p style={{ marginBottom: "10px" }}>
                hint: try typing a color name, or using a{" "}
                <a href="https://www.color-hex.com/" target={"_blank"}>
                  hex code
                </a>
              </p>
              <div style={{ marginLeft: "10px" }}>
                <p>text {"{"} </p>
                <label style={{ marginLeft: "10px" }}>color: </label>
                <input
                  name="newTextColor"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                ></input>
                <p>{"}"}</p>
                <p>body {"{"} </p>
                <p>
                  <label style={{ marginLeft: "10px" }}>
                    background-color:{" "}
                  </label>
                  <input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                  ></input>
                </p>
                <p>{"}"}</p>
              </div>
              <p
                className="Customizer-done"
                onClick={handleCustomizeMobileClick}
              >
                DONE
              </p>
            </form>
          </div>
        )}
      </div>
      <div className="App-content">
        <div className={showAbout ? "Show-div" : "Hide-div"}>
          {showAbout && <About />}
        </div>
        <div className={showWork ? "Show-div" : "Hide-div"}>
          {showWork && <Work />}
        </div>
        <div className={showServices ? "Show-div" : "Hide-div"}>
          {showServices && <Services />}
        </div>
        <div className={showExtras ? "Show-div" : "Hide-div"}>
          {showExtras && <Extras />}
        </div>
        <div className={showContactMobile ? "Show-div" : "Hide-div"}>
          {showContactMobile && <ContactMobile />}
        </div>
        <button
          onClick={handleCustomizeMobileClick}
          className="Customize-button-mobile"
        >
          Customize
        </button>
      </div>
    </div>
  );
}

export default App;
