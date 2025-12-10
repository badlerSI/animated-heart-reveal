import { Link } from "react-router-dom";
import "../home/narrativeLink.css";

const ClosingCTASection = () => {
  return (
    <section className="reveal py-20 md:py-28 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Own Your AI?
      </h2>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Whether you're commuting{" "}
        <Link to="/landvehicles" className="narrative-link">on the move</Link>,
        teaching{" "}
        <Link to="/education" className="narrative-link">in the classroom</Link>,
        securing data{" "}
        <Link to="/work" className="narrative-link">at work</Link>,
        or preparing for the unexpected{" "}
        <Link to="/survival" className="narrative-link">just in case</Link>
        —Soul Interface is built for you.
      </p>

    </section>
  );
};

export default ClosingCTASection;
