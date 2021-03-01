import "./Work.css";
import "./App.css";
import NavbarPink from "./NavbarPink.js";
import { Link, BrowserRouter } from "react-router-dom";
import wavy from "./images/path.png";
import mockupartscene from "./images/mockup-artscene.png";
import artscene1 from "./images/artscene-1.png";
import artscene2 from "./images/artscene-2.png";
import artscene3 from "./images/artscene-3.png";
import artscene4 from "./images/artscene-4.png";
import mockuptalariapp from "./images/mockup-talariapp.png";
import talariapp1 from "./images/talariapp-1.png";
import talariapp2 from "./images/talariapp-2.png";
import talariapp3 from "./images/talariapp-3.png";
import mockupfinder from "./images/mockup-finder.png";
import finder1 from "./images/finder-1.png";
import finder2 from "./images/finder-2.png";
import finder3 from "./images/finder-3.png";
import finder4 from "./images/finder-4.png";
import inumockup1 from "./images/inu-mockup-1.png";
import inumockup2 from "./images/inu-mockup-2.png";
import inumockup3 from "./images/inu-mockup-3.png";
import inumockup4 from "./images/inu-mockup-4.png";
import inumockup5 from "./images/inu-mockup-5.png";
import inumockup6 from "./images/inu-mockup-6.png";
import ImageSlider from "ac-react-simple-image-slider";
import MobileMenu from "./MobileMenu";

export default function About() {
  const images = [
    { src: mockupartscene },
    { src: artscene1 },
    { src: artscene2 },
    { src: artscene3 },
    { src: artscene4 },
  ];

  const imagesTalariapp = [
    { src: mockuptalariapp },
    { src: talariapp1 },
    { src: talariapp2 },
    { src: talariapp3 },
  ];

  const imagesFinder = [
    { src: mockupfinder },
    { src: finder1 },
    { src: finder2 },
    { src: finder3 },
    { src: finder4 },
  ];

  const imagesInu = [
    { src: inumockup1 },
    { src: inumockup2 },
    { src: inumockup3 },
    { src: inumockup4 },
    { src: inumockup5 },
    { src: inumockup6 },
  ];

  return (
    <div className="Work">
      <NavbarPink />
      <MobileMenu />

      <div className="inutext">
        <p>
          <Link
            to={{ pathname: "https://github.com/silberov/INU" }}
            target="_blank"
          >
            Inu Health
          </Link>{" "}
          is a responsive web app that allows women with endometriosis to track
          their menstrual cycle, and access audio therapies and daily
          suggestions. It was developed for the beta testing phase of the
          product development.
          <br /> <br />
          Along with my team, I used React to develop the frontend based on the
          prototypes, and the backend using Prisma and mySQL. I was primarily
          responsible for the period tracking and calendar components, which
          allow a user to input their last menstrual cycle date and length, and
          use that information to predict their next cycles.
        </p>
      </div>
      <div className="ImageSlider">
        <ImageSlider data={imagesInu} autoPlay={false} width="50%" />
      </div>
      <div>
        <img src={wavy} className="wavy" alt="wavy lines" />
      </div>
      <div className="artscenetext">
        <p>
          Art Scene is a responsive web app created with React that allows
          people to find art exhibitions based on several criteria: distance
          from them, genre, and cost. The app then displays the matching
          exhibitions on a Google map with links to get more info and purchase
          tickets.
          <br />
          <br />I was responsible for creating the design and wireframes using
          Figma, and implementing the CSS. I also fetched the exhibition data
          from the berlin.de API, and created the logic to sort through the
          results based on a user's preferences.
        </p>
      </div>
      <div className="ImageSlider">
        <ImageSlider width="80%" data={images} autoPlay={false} />
      </div>
      <div>
        <img src={wavy} className="wavy" alt="wavy lines" />
      </div>
      <div className="talariapptext">
        <p>
          <Link
            to={{ pathname: "https://github.com/Cryptogirlx/Talariapp" }}
            target="_blank"
          >
            TalariApp
          </Link>{" "}
          is a web app created with React for a 2 day Hackathon. The Hackathon
          theme was to create an app that would be useful for people in a
          previous era, so we created an app for ancient Greeks to find and
          contact gods and goddesses to make requests.
          <br />
          <br />
          View the app{" "}
          <Link
            to={{ pathname: "http://talari-app.herokuapp.com/" }}
            target="_blank"
          >
            here.
          </Link>
        </p>
      </div>

      <div className="ImageSlider">
        <ImageSlider width="80%" data={imagesTalariapp} autoPlay={false} />
      </div>

      <div>
        <img src={wavy} className="wavy" alt="wavy lines" />
      </div>
      <div className="findertext">
        <p>
          <Link
            to={{
              pathname:
                "https://github.com/annikadavis/serviceplan-employee-finder",
            }}
            target="_blank"
          >
            The Serviceplan Employee Finder
          </Link>{" "}
          is a web app with front and back end, developed using React for the
          marketing agency Serviceplan. The app allows employees to search
          through a database of other employees, including their skills and
          experience.
          <br />
          <br />
          The database is viewable by everyone, but editable only by HR with
          login and password information. I created the design, which was
          inspired by a Picasso painting that appears on the Serviceplan
          website, and the extensive Serviceplan art collection.
        </p>
      </div>
      <div className="ImageSlider">
        <ImageSlider width="80%" data={imagesFinder} autoPlay={false} />
      </div>
    </div>
  );
}
