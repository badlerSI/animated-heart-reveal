import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sema = () => {
  useEffect(() => {
    document.title = "SEMA - Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SEMA - Connecting builders, investors, and end customers through Soul Interface technology"
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          SEMA
        </h1>

        {/* Builders Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">For Builders</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-muted-foreground">
              Placeholder content for builders section. This will showcase tools,
              resources, and opportunities for developers and creators.
            </p>
          </div>
        </section>

        {/* Investors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">For Investors</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-muted-foreground">
              Placeholder content for investors section. This will highlight
              investment opportunities, metrics, and strategic advantages.
            </p>
          </div>
        </section>

        {/* End Customers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">For End Customers</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-muted-foreground">
              Placeholder content for end customers section. This will demonstrate
              benefits, use cases, and value propositions.
            </p>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
          <Link to="/builders">
            <Button size="lg" className="w-48">
              For Builders
            </Button>
          </Link>
          <Link to="/investors">
            <Button size="lg" className="w-48">
              For Investors
            </Button>
          </Link>
          <Link to="/news">
            <Button size="lg" className="w-48">
              For Fans
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Sema;
