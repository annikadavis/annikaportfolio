import Slider from "react-animated-slider";
import Collapsible from "react-collapsible";
import Marquee from "react-fast-marquee";
import artSceneOne from "./images/artscene-1.png";
import artSceneTwo from "./images/artscene-2.png";
import artSceneThree from "./images/artscene-3.png";
import artSceneFour from "./images/artscene-4.png";
import inuTwo from "./images/inu-collage-2.jpg";
import inuOne from "./images/inu-collage.jpg";
import Lex from "./images/Lex.jpg";
import TAFive from "./images/ta-five.png";
import TAFour from "./images/ta-four.png";
import TAOne from "./images/ta-one.png";
import TASix from "./images/ta-six.png";
import TAThree from "./images/ta-three.png";
import TATwo from "./images/ta-two.gif";
import weddingFour from "./images/wedding-four.png";
import weddingFive from "./images/wedding-gif.gif";
import weddingSix from "./images/wedding-six.gif";
import weddingThree from "./images/wedding-three.png";
import weddingTwo from "./images/wedding-two.png";
import "./Work.css";

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

  function ReEau() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Website: Re-Eau</h4>
          <h4 className="Date-mobile">current</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Design + development in Shopify.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Design + development in Shopify.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">current</h4>
      </div>
    );
  }

  function WeddingSite() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Website: Annika + João</h4>
          <h4 className="Date-mobile">2022</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Custom platform, with João Cunha.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Custom platform, with João Cunha.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2022</h4>
      </div>
    );
  }

  function TASite() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Website: Tomi-Ann Roberts</h4>
          <h4 className="Date-mobile">2023</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Design + development in Squarespace.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Design + development in Squarespace.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2023</h4>
      </div>
    );
  }

  function LexApp() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>App: Lex</h4>
          <h4 className="Date-mobile">2021-2022</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Custom platform, mobile app.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Custom platform, mobile app.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2021-2022</h4>
      </div>
    );
  }

  function InuHealth() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>App: Inu Health</h4>
          <h4 className="Date-mobile">2021</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Custom platform, web and mobile app.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Custom platform, web and mobile app.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2021</h4>
      </div>
    );
  }

  function ArtScene() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Website: Art Scene</h4>
          <h4 className="Date-mobile">2020</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline" style={{ width: "360px" }}>
            <h4>Custom platform, design + development.</h4>
          </div>
          <Marquee
            gradient={false}
            play={false}
            className={"Marquee"}
            style={{ width: "360px" }}
          >
            <h4>Custom platform, design + development.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2020</h4>
      </div>
    );
  }

  function BirthofJakuchu() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Exhibition: Birth of Jakuchu</h4>
          <h4 className="Date-mobile">2020</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Art writing + translation from Japanese.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Art writing + translation from Japanese.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2020</h4>
      </div>
    );
  }

  function IllStarredPainters() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Exhibition: Ill-Starred Painters</h4>
          <h4 className="Date-mobile">2020-2021</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Art writing + translation from Japanese.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Art writing + translation from Japanese.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2020-2021</h4>
      </div>
    );
  }

  function AnimalsUnite() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Exhibition: Animals Unite</h4>
          <h4 className="Date-mobile">2020</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Art writing + translation from Japanese.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Art writing + translation from Japanese.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2020</h4>
      </div>
    );
  }

  function EmiBrener() {
    return (
      <div class="Work-grid">
        <div className="Container-mobile">
          <h4>Exhibition: Under The Skin</h4>
          <h4 className="Date-mobile">2020</h4>
        </div>
        <div className="Headline-wrapper">
          <div className="Work-headline">
            <h4>Writing, marketing, curation assisting.</h4>
          </div>
          <Marquee gradient={false} play={false} className={"Marquee"}>
            <h4>Writing, marketing, curation assisting.</h4>
          </Marquee>
        </div>
        <h4 className="Date-desktop">2020</h4>
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
      <div>
        <div className="Work-intro">
          <h2 style={{ textAlign: "center" }}>☺ WEB DEVELOPER + DESIGNER ☺</h2>
          <h2 style={{ textAlign: "center" }}>✿ ART PROFESSIONAL ✿</h2>
        </div>
        <Collapsible
          trigger={<ReEau />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Custom e-commerce site done in Shopify. Currently in development.
          </p>
        </Collapsible>
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
              className="Lex-app-screenshots"
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
        <Collapsible
          trigger={<EmiBrener />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            <a href="https://somos-arts.org/emi-brener-under-the-skin/">
              Under The Skin
            </a>{" "}
            was an exhibition of mixed media oil paintings by multidisciplinary
            Uruguayan artist Emi Brener, created and curated while she was a
            resident at SomoS Art House in Berlin. I worked at SomoS in 2020,
            and assisted with the curation, art writing, and marketing of the
            exhibition.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<IllStarredPainters />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Ill-Starred Painters was an exhibiton of Japanese painters of the
            Pre-Modern and Modern periods who overcame hardship to find success
            as artists. It was exhibited jointly at the Fukuda Art Museum and
            Saga Arashiyama Museum of Art and Culture in Kyoto. I wrote and
            translated exhibition texts from Japanese.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<BirthofJakuchu />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Birth of Jakuchu: Beyond Conflict was an exhibiton of Japanese
            painter Ito Jakuchu{"(1716-1800)"} at the Fukuda Art Museum in
            Kyoto, Japan. I wrote and translated exhibition texts from Japanese.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<AnimalsUnite />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p>
            Animals Unite was an exhibition at the Saga Arashiyama Museum of Art
            and Culture in Kyoto, presenting Japanese Edo-era paintings of the
            12 amimals of the zodiac. I wrote and translated exhibition texts
            from Japanese.
          </p>
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
