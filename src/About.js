import "./About.css";

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <h2>ART + TECH</h2>
      </header>
      <p className="About-text">
        I'm Annika, and I'm specialized in art and development. On the tech
        side, I have almost 3 years of experience in front end development
        making websites and mobile apps. On the art side, I hold an MA in art
        history, and have worked in galleries in New York, Tokyo, and Berlin.
        Whether I'm coding or curating, I love to be creative and collaborate
        with other creatives.
      </p>
      <div class="About-sections">
        <p className="About-title" class="grid-item">
          Front end development
        </p>
        <ul className="About-list" class="grid-item">
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
        <p className="About-title" class="grid-item">
          Design + development
        </p>
        <ul className="About-list" class="grid-item">
          <li>Squarespace</li>
          <li>Shopify</li>
          <li>Webflow</li>
        </ul>
        <p className="About-title" class="grid-item">
          Art services
        </p>
        <ul className="About-list" class="grid-item">
          <li>Curation</li>
          <li>Art writing</li>
          <li>Art acquisition consulting</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
