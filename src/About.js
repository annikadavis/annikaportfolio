import "./About.css";
import NavbarPink from "./NavbarPink";
import annika from "./images/annika.jpg";
import MobileMenu, { MobileIconsPink } from "./MobileMenu";

export default function About() {
  return (
    <div className="About">
      <NavbarPink />
      <div>
        <MobileMenu />
        <div>
          <img className="annika" src={annika} alt="annika" />
        </div>
        <MobileIconsPink />
        <p>
          <b>Hi, I’m Annika!</b>
          <br />
          <br />
          I’m a junior full stack web developer based in Berlin, with a passion
          for art and technology. I believe in technology as a tool for
          collaboration, self expression, democracy, and accessibility.
          <br />
          <br />I hold a certificate in Full Stack Web Development from Wild
          Code School Berlin, and a Master’s Degree in Art History from the
          University of British Columbia. <br />
          <br />I have over 7 years of experience working in the creative field,
          and am proficient in{" "}
          <b>
            HTML, CSS, JavaScript, React, the Adobe Creative Suite, and Figma.
          </b>{" "}
          On the back end, I have experience with{" "}
          <b>Express, Node.js, MySQL, and PostgreSQL.</b>
          <br />
          <br />I have lived and worked in several cities around the world,
          including New York City, Tokyo, Vancouver, and now Berlin. My native
          language is English, but I am also proficient in Japanese, and
          currently studying German.
          <br />
          Please{" "}
          <a
            href="https://drive.google.com/file/d/1mLaxH1553wOuCo0Rdks-YtBzAbdK4N1-/view?usp=sharing"
            target="_blank"
          >
            download
          </a>{" "}
          my CV for more information.
          <br />
          <br />I can’t wait to work with you!
        </p>
      </div>
    </div>
  );
}
