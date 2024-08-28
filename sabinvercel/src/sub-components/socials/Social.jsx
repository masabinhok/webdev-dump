import "./social.css";

export default function Social({social}) {
  return <img className="socialIcon" src={`assets/${social}.png`} alt="" />;
}
