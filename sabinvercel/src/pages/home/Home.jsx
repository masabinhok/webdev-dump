import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Hero from "../../components/hero/Hero";

export default function Home() {
  return (
    <div className="homeContainer">
      <img className="backgroundSabin" src="assets/sabin.png" alt="" />
      <Topbar className="topbar"/>
      <Hero />
    </div>
  );
}
