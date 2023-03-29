import "./Work.css";
import weddingTwo from "./images/wedding-two.png";
import weddingThree from "./images/wedding-three.png";
import weddingFour from "./images/wedding-four.png";
import weddingFive from "./images/wedding-gif.gif";
import weddingSix from "./images/wedding-six.gif";
import inuOne from "./images/inu-collage.jpg";
import inuTwo from "./images/inu-collage-2.jpg";
import TATwo from "./images/ta-two.gif";
import TAThree from "./images/ta-three.png";
import TAFour from "./images/ta-four.png";
import TAFive from "./images/ta-five.png";
import TASix from "./images/ta-six.png";
import TAOne from "./images/ta-one.png";
import Lex from "./images/Lex.jpg";
import artSceneOne from "./images/artscene-1.png";
import artSceneTwo from "./images/artscene-2.png";
import artSceneThree from "./images/artscene-3.png";
import artSceneFour from "./images/artscene-4.png";
import Marquee from "react-fast-marquee";
import Collapsible from "react-collapsible";
import Slider from "react-animated-slider";

function Work() {
  const weddingImages = [
    weddingTwo,
    weddingFive,
    weddingSix,
    weddingThree,
    weddingFour,
  ];
  const TAImages = [TAOne, TATwo, TAThree, TAFour, TAFive, TASix];
  const inuHealthImages = [inuOne, inuTwo];
  const artSceneImages = [
    artSceneOne,
    artSceneTwo,
    artSceneThree,
    artSceneFour,
  ];

  function WeddingSite() {
    return (
      <div class="Work-grid">
        <h4>Annika + João</h4>
        <h4>
          <div className="Headline-wrapper">
            <div className="Work-headline">
              Custom platform, with João Cunha.
            </div>
            <Marquee gradient={false} play={false} className={"Marquee"}>
              Custom platform, with João Cunha.
            </Marquee>
          </div>
        </h4>
        <h4 style={{ textAlign: "right" }}>2022</h4>
      </div>
    );
  }

  function TASite() {
    return (
      <div class="Work-grid">
        <h4>Tomi-Ann Roberts</h4>
        <h4>
          <div className="Headline-wrapper">
            <div className="Work-headline">
              Design + development in Squarespace.
            </div>
            <Marquee gradient={false} play={false} className={"Marquee"}>
              Design + development in Squarespace.
            </Marquee>
          </div>
        </h4>
        <h4 style={{ textAlign: "right" }}>2023</h4>
      </div>
    );
  }

  function LexApp() {
    return (
      <div class="Work-grid">
        <h4>Lex</h4>
        <h4>
          <div className="Headline-wrapper">
            <div className="Work-headline">Custom platform, mobile app.</div>
            <Marquee gradient={false} play={false} className={"Marquee"}>
              Custom platform, mobile app.
            </Marquee>
          </div>
        </h4>
        <h4 style={{ textAlign: "right" }}>2021-2022</h4>
      </div>
    );
  }

  function InuHealth() {
    return (
      <div class="Work-grid">
        <h4>Inu Health</h4>
        <h4>
          <div className="Headline-wrapper">
            <div className="Work-headline">
              Custom platform, web and mobile app.
            </div>
            <Marquee gradient={false} play={false} className={"Marquee"}>
              Custom platform, web and mobile app.
            </Marquee>
          </div>
        </h4>
        <h4 style={{ textAlign: "right" }}>2021</h4>
      </div>
    );
  }

  function ArtScene() {
    return (
      <div class="Work-grid">
        <h4>Art Scene</h4>
        <h4>
          <div className="Headline-wrapper">
            <div className="Work-headline" style={{ width: "360px" }}>
              Custom platform, design + development.
            </div>
            <Marquee
              gradient={false}
              play={false}
              className={"Marquee"}
              style={{ width: "360px" }}
            >
              Custom platform, design + development.
            </Marquee>
          </div>
        </h4>
        <h4 style={{ textAlign: "right" }}>2020</h4>
      </div>
    );
  }

  function ImageCarousel({ images, alt }) {
    const items = images;
    return (
      <Slider previousButton={"<"} nextButton={">"}>
        {items.map((item) => (
          <div
            alt={alt}
            className="slider-content"
            style={{
              background: `url('${item}') no-repeat center center`,
              backgroundSize: "contain",
            }}
          ></div>
        ))}
      </Slider>
    );
  }

  return (
    <div className="Work">
      <div style={{ paddingTop: "20vh", paddingBottom: "10vh" }}>
        <Collapsible
          trigger={<TASite />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            This custom Squarespace template was made for psychologist Dr.
            Tomi-Ann Roberts, to showcase her work and services. Check out the
            live site{" "}
            <a href={"https://www.tomi-annroberts.com/"} target="_blank">
              here.
            </a>
          </p>
          <div className="Work-image-group">
            <ImageCarousel
              images={TAImages}
              alt={"Tomi-Ann Roberts website screenshots"}
            />
          </div>
        </Collapsible>
        <Collapsible
          trigger={<WeddingSite />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            This is the website for my own wedding, designed in collaboration
            with my partner, architect and graphic designer João Cunha. I
            created the site using React. Check out the live site{" "}
            <a href={"https://annikaandjoao.com/"} target="_blank">
              here.
            </a>
          </p>
          <div className="Work-image-group">
            <ImageCarousel
              images={weddingImages}
              alt={"Annika and João wedding website screenshots"}
            />
          </div>
        </Collapsible>
        <Collapsible
          trigger={<LexApp />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Lex is a dating and social media app for the LGBTQ+ community. I
            worked at Lex as a front end engineer, using React Native.
          </p>
          <div className="Work-image-group">
            <img
              src={Lex}
              alt={"Lex mobile app screenshots"}
              className="Work-image"
            />
          </div>
        </Collapsible>
        <Collapsible
          trigger={<InuHealth />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Inu Health is a period tracking and wellness app for people with
            endometriosis. I helped develop the website using React, and the
            mobile app using React Native.
          </p>
          <div className="Work-image-group">
            <ImageCarousel
              images={inuHealthImages}
              alt={"Inu Health app screenshots"}
            />
          </div>
        </Collapsible>
        <Collapsible
          trigger={<ArtScene />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Art Scene is a web app for finding art exhibitions in Berlin,
            developed using React.
          </p>
          <div className="Work-image-group">
            <ImageCarousel
              images={artSceneImages}
              alt={"Art Scene screenshots"}
              style={{ overflow: "auto" }}
            />
          </div>
        </Collapsible>
        <div
          style={{
            borderBottom: "1px solid",
            marginBottom: "20px",
            overflow: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Work;
