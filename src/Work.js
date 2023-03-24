import "./Work.css";
import weddingOne from "./images/wedding-one.png";
import weddingTwo from "./images/wedding-two.png";
import weddingThree from "./images/wedding-three.png";
import weddingFour from "./images/wedding-four.png";
import TAOne from "./images/ta-one.png";
import Marquee from "react-fast-marquee";
import Collapsible from "react-collapsible";
import {
  InfiniteScrollLoop,
  ContentWrapper,
} from "reactjs-infinite-scroll-loop";

function Work() {
  function WeddingSite() {
    return (
      <div class="Work-grid">
        <p style={{ textAlign: "left" }}>Annika + João Wedding</p>
        <p>
          <Marquee gradientWidth={10} pauseOnHover={true}>
            Custom platform, with João Cunha...Custom platform, with João
            Cunha...
          </Marquee>
        </p>
        <p style={{ textAlign: "right" }}>2022</p>
      </div>
    );
  }

  function TASite() {
    return (
      <div class="Work-grid">
        <p style={{ textAlign: "left" }}>Tomi-Ann Roberts</p>
        <p>
          <Marquee gradientWidth={10} pauseOnHover={true}>
            Design + development in Squarespace...Design + development in
            Squarespace...
          </Marquee>
        </p>
        <p style={{ textAlign: "right" }}>2023</p>
      </div>
    );
  }

  function InfiniteScroll() {
    return (
      <div className="Infinite-scroll" style={{ height: "380px" }}>
        <InfiniteScrollLoop>
          <ContentWrapper>
            <img
              src={weddingFour}
              className="Work-image-thumb"
              alt="Annika and João wedding website screenshot"
            />
          </ContentWrapper>
          <ContentWrapper>
            <img
              src={weddingTwo}
              className="Work-image-thumb"
              alt="Annika and João wedding website screenshot"
            />
          </ContentWrapper>
          <ContentWrapper>
            <img
              src={weddingThree}
              className="Work-image-thumb"
              alt="Annika and João wedding website screenshot"
            />
          </ContentWrapper>
        </InfiniteScrollLoop>
      </div>
    );
  }

  return (
    <div className="Work">
      <Collapsible trigger={<WeddingSite />} transitionTime="200">
        <p>
          This is the website for my own wedding, designed in collaboration with
          my partner, architect and graphic designer João Cunha. I created the
          site using React. Check out the live site{" "}
          <a href={"https://annikaandjoao.com/"} target="_blank">
            here.
          </a>
        </p>
        <div className="Work-image-group">
          <img
            src={weddingTwo}
            className="Work-image"
            alt="Annika and João wedding website screenshot"
          />
          <InfiniteScroll />
        </div>
      </Collapsible>
      <Collapsible trigger={<TASite />} transitionTime="200">
        <img
          src={TAOne}
          className="Work-image"
          alt="Tomi-Ann Roberts website screenshot"
        />
      </Collapsible>
    </div>
  );
}

export default Work;
