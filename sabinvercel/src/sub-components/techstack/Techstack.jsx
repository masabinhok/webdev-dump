import './techstack.css';

export default function Techstack({ name }) {
  return <img className="techskills" src={`assets/${name}.png`} />;
}
