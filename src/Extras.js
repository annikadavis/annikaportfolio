import "./Extras.css";
import print from "./images/print.jpeg";
import megalith from "./images/dolmen.jpg";
import onchi from "./images/onchi.png";

function Extras() {
  return (
    <div className="Extras-container">
      <div class="Extras-item">
        <iframe
          width="100%"
          height="400"
          src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Flisteningtoshapes%2F"
          frameborder="0"
        ></iframe>
      </div>
      <div class="Extras-item">
        <h3>
          <a href="https://www.mixcloud.com/listeningtoshapes/" target="_blank">
            radio shows
          </a>
        </h3>
      </div>
      <div class="Extras-item">
        <h3>
          <a href="https://www.instagram.com/japanesehanga" target="_blank">
            Japanese prints
          </a>
        </h3>
      </div>
      <div class="Extras-item">
        <img src={print} style={{ width: "100%" }} />
      </div>
      <div class="Extras-item">
        <img src={megalith} style={{ width: "100%" }} />
      </div>
      <div class="Extras-item">
        <h3>
          <a
            href="https://www.megalithic.co.uk/user.php?op=userinfo&uname=annikacunha"
            target="_blank"
          >
            stones
          </a>
        </h3>
      </div>
      <div class="Extras-item">
        <h3>
          <a href="https://medium.com/@annikakarin" target="_blank">
            writing
          </a>
        </h3>
      </div>
      <div class="Extras-item">
        <img src={onchi} style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Extras;
