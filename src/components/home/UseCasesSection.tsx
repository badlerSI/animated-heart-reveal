import { Link } from "react-router-dom";
import "../home/narrativeLink.css";

const UseCasesSection = () => {
  return (
    <section className="reveal py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        One Platform. Endless Possibilities.
      </h2>
      
      <div className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
        <p>
          Whether you're navigating rush hour{" "}
          <Link to="/landvehicles" className="narrative-link">
            on the move
          </Link>
          , helping your kids learn safely{" "}
          <Link to="/education" className="narrative-link">
            in the classroom
          </Link>
          , or handling sensitive data in environments where transmission simply isn't allowed{" "}
          <Link to="/work" className="narrative-link">
            at work
          </Link>
          —Soul Interface adapts to your world.
        </p>
        
        <p>
          And for those who think ahead, who prepare for when infrastructure fails and the grid goes dark,
          there's a version built{" "}
          <Link to="/survival" className="narrative-link">
            just in case
          </Link>
          . Complete with its own AI weather station.
        </p>
      </div>
    </section>
  );
};

export default UseCasesSection;
