import "./ContactMobile.css";

function ContactMobile() {
  return (
    <div className="Contact-mobile-container">
      <div className="Contact-mobile">
        <h2>✉ e-mail ✉</h2>
        <a href="mailto:hello@annikadavisdacunha.com">
          hello@annikadavisdacunha.com
        </a>
        <br />
        <h2>❋ social media ❋</h2>
        <a
          href={"https://github.com/annikadavis"}
          target="_blank"
          className="About-link"
        >
          Github
        </a>
        <a
          href={"https://www.instagram.com/annika__karin"}
          target="_blank"
          className="About-link"
        >
          Instagram
        </a>
        <a
          href={"https://www.linkedin.com/in/annikadavis"}
          target="_blank"
          className="About-link"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default ContactMobile;
