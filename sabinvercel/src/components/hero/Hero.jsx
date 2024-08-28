import Techstack from "../../sub-components/techstack/Techstack";
import "./hero.css";
import Button from "../../sub-components/button/Button";
import Social from "../../sub-components/socials/Social";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="heroPage">
      <div className="heroLeft">
        <span className="heroHeading">Hi, I am Sabin Shrestha</span>
        <p className="heroIntro">
          I am a 19-year-old Computer Engineering student at Pulchowk,
          specializing in frontend development with a focus on creating dynamic,
          user-centric applications using React.
        </p>
        <div className="socialButtons">
          <Social social="linkedin" />
          <Social social="twitter" />
          <Social social="github" />
        </div>
        <Link to='/contact'>
        <Button name="Connect with me" color="green" /></Link>
      </div>

      <div className="heroCenter">
        <div className="location">
          <Social social="location (1)" />
          <span className="centerText">Kathmandu, Nepal</span>
        </div>
      </div>
      <div className="heroRight">
        <Techstack name="html" />
        <Techstack name="css" />
        <Techstack name="js" />
        <Techstack name="react" />
        <Techstack name="github" />
        <Techstack name="python" />
        <Techstack name="c" />
        <Techstack name="c-" />
      </div>
    </div>
  );
}
