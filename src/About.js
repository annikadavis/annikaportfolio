import "./About.css";
import annika from "./images/annika.jpeg";

function About() {
  return (
    <div className="About">
      <div className="About-intro">
        <img src={annika} style={{ height: "75vh" }} />

        <header className="About-header">
          <h1 style={{ fontSize: "2.5vw" }}>ART + TECH</h1>
          <p className="About-text">
            I'm Annika, and I'm specialized in art and development. On the tech
            side, I have 3 years of experience in front end development making
            websites and mobile apps. On the art side, I hold an MA in Art
            History, and have worked in galleries in New York, Kyoto, Tokyo,
            Vancouver, and Berlin. Whether I'm coding or curating, I love to be
            creative and collaborate with other creatives.
            <br /> <br />
            When I'm not working I love baking, knitting, photography, paganism,
            hiking, writing, painting, and spending time with my greyhound.
          </p>
        </header>
      </div>
    </div>
  );
}

export default About;
