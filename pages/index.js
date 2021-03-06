import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import LPodcasts from "../components/LatestPodcast";
import Member from "../components/Members";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-black text-white overflow-x-hidden"
      style={{ backgroundImage: "linear-gradient(#0B0B0B, #0b0b0b)" }}
    >
      <Navbar />
      <Welcome />
      <LPodcasts />
      <Member />
      <Footer />
    </div>
  );
};

export default App;
