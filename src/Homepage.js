import "./Homepage.css";
import MobileMenu from "./MobileMenu";
import NavbarBlue from "./Navbar";

export default function Homepage() {
  return (
    <div className="Homepage">
      <NavbarBlue />
      <MobileMenu />
      <div className="HomepageDesc">
        Hi, I’m Annika. I’m a junior front end web developer based in Berlin,
        and I love art and technology.
      </div>
    </div>
  );
}
