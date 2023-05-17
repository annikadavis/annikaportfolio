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
      <div style={{ paddingTop: "20vh", paddingBottom: "10vh" }}>
        <h2>What can I do for you?</h2>
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
          <div class="Services-sections">
            <p className="Services-title" class="grid-item">
              Skills
            </p>
            <p className="Services-info" class="grid-item">
              I can design and code custom sites using JavaScript, CSS, HTML,
              and React. I can also work with Squarespace, Webflow, and Shopify.
            </p>
            <p className="Services-title" class="grid-item">
              Included
            </p>
            <ul className="Services-list" class="grid-item">
              <li className="Services-list-item">Discovery and research</li>
              <li className="Services-list-item">Custom design</li>
              <li className="Services-list-item">Development</li>
              <li className="Services-list-item">
                Desktop and mobile-friendly
              </li>
              <li className="Services-list-item">At least 1 round of edits</li>
              <li className="Services-list-item">Basic SEO</li>
              <li className="Services-list-item">CMS training</li>
              <li className="Services-list-item">
                At least 1 month of maintenance
              </li>
            </ul>
            <p className="Services-title" class="grid-item">
              Extras
            </p>
            <ul className="Services-list" class="grid-item">
              <li className="Services-list-item">
                Content organization/curation
              </li>
              <li className="Services-list-item">Writing and editing</li>
              <li className="Services-list-item">
                Newsletter and social media templates
              </li>
              <li className="Services-list-item">Newsletter setup</li>
              <li className="Services-list-item">Extended maintenance time</li>
            </ul>
          </div>
        </Collapsible>
        <Collapsible
          trigger={<ArtServices />}
          transitionTime="200"
          style={{ overflow: "auto" }}
        >
          <div className="Services-sections">
            <p className="About-title" class="grid-item">
              Experience
            </p>
            <p className="About-title" class="grid-item">
              I hold an MA in Art History with a focus in modern Japanese art,
              and I've worked at museums, galleries, and artist residencies in
              New York City, Kyoto, Tokyo, and Berlin.
            </p>
            <p className="About-title" class="grid-item">
              Services
            </p>
            <ul className="Services-list" class="grid-item">
              <li className="Services-list-item">Curation</li>
              <li className="Services-list-item">
                Consultation for art acquisition and curation
              </li>
              <li className="Services-list-item">
                Translation - Japanese to English
              </li>
              <li className="Services-list-item">Art writing</li>
            </ul>
          </div>
        </Collapsible>
        <div style={{ borderBottom: "1px solid" }} />
      </div>
    </div>
  );
}

export default Services;
