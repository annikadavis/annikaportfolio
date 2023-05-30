import "./Services.css";
import Collapsible from "react-collapsible";

function Services() {
  function TechServices() {
    return (
      <div class="Services-headline-grid">
        <h3>☺ Tech</h3>
        <h4>
          <div className="Services-headline">
            Design + development: Squarespace, Webflow, custom, e-commerce
          </div>
        </h4>
      </div>
    );
  }

  function ArtServices() {
    return (
      <div class="Services-headline-grid">
        <h3>✿ Art</h3>
        <h4>
          <div className="Services-headline">
            Curation, consultation, translation, writing
          </div>
        </h4>
      </div>
    );
  }

  return (
    <div className="Services">
      <div>
        <h2>WHAT CAN I DO FOR YOU?</h2>
        <p className="Services-text">
          I offer services as a developer, designer, and art professional. On
          the tech side I can help with a range of things, from helping you
          customize an existing website template to creating a template or
          entire site from scratch. On the art side, I can offer curatorial
          services and consulting, art acquisition consulting, art writing, and
          more. My favorite thing, though, is to do projects that combine all of
          my skills! I can create websites and portfolios for creatives, gallery
          spaces, or other arts institutions by curating the work to be
          showcased, writing bios and other information, designing the UI, and
          developing the site. No matter what your project is, with my combined
          skills in developing, designing, curating, and writing, I'm sure I can
          make it amazing.
        </p>
        <Collapsible
          trigger={<TechServices />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p className="Services-info">
            I first taught myself CSS and HTML as a teenager customizing my
            MySpace and Tumblr pages, and have always enjoyed coding as a
            creative medium. In 2020 I studied JavaScript, React, and React
            Native, earning a certificate in front end development.
            <br />I am currently freelance, and enjoy working with fellow
            dreamers and creatives to make their ideas come to digital life.
            Depending on the project, I can design and create custom sites using
            JavaScript, CSS, HTML, and React, or platforms like Squarespace,
            Webflow, and Shopify. I can also design and set up newsletters,
            curate site content, and edit copy.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<ArtServices />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <p className="About-title" class="grid-item">
            I hold an MA in Art History with a focus in modern Japanese art, and
            I've worked at museums, galleries, and artist residencies in New
            York City, Kyoto, Tokyo, and Berlin. I can do curation, art writing,
            Japanese to English translation, and provide consultation for art
            acquisition and curation.
          </p>
        </Collapsible>
        <div style={{ borderBottom: "1px solid" }} />
      </div>
    </div>
  );
}

export default Services;
