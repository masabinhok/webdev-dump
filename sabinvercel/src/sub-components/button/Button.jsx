import "./button.css";

export default function Button({ name, color}) {
  return <button
  style={{
    filter: color === 'red'
      ? 'hue-rotate(0deg)'
      : 'hue-rotate(180deg)',
  }}
  className="sparkle-button">{name}</button>;
}
