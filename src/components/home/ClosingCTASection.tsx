import { Link } from "react-router-dom";
import "../home/narrativeLink.css";
import DualWaveButton from "../DualWaveButton";

const ClosingCTASection = () => {
  return (
    <section className="reveal py-20 md:py-28 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Own Your AI?
      </h2>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Whether you're equipping a{" "}
        <Link to="/schools" className="narrative-link">classroom</Link>,
        running a{" "}
        <Link to="/work" className="narrative-link">private workplace</Link>,
        choosing a{" "}
        <Link to="/towers" className="narrative-link">tower for your space</Link>,
        or{" "}
        <Link to="/extreme" className="narrative-link">getting prepared for anything</Link>,
        Soul Interface is Powerful, Offline, Sovereign AI.
      </p>

      <DualWaveButton accentColor="#1bbdc5" />
    </section>
  );
};

export default ClosingCTASection;
