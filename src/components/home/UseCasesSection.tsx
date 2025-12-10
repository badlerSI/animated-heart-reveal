import { Link } from "react-router-dom";
import "../home/narrativeLink.css";

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="reveal py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        One Platform. Endless Possibilities.
      </h2>
      
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
        Whether you're{" "}
        <Link to="/landvehicles" className="narrative-link">
          on the move
        </Link>
        , helping your{" "}
        <Link to="/education" className="narrative-link">
          kids learn safely
        </Link>
        ,{" "}
        <Link to="/work" className="narrative-link">
          at work
        </Link>
        , riding{" "}
        <Link to="/robotaxi" className="narrative-link">
          in a robotaxi
        </Link>
        , or{" "}
        <Link to="/survival" className="narrative-link">
          being prepared for anything
        </Link>
        , Soul Interface is Powerful, Offline, Sovereign AI.
      </p>
    </section>
  );
};

export default UseCasesSection;
