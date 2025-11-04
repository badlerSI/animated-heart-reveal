import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Investors = () => {
  useEffect(() => {
    document.title = "For Investors - Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Investment opportunities and strategic advantages in the Soul Interface ecosystem"
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link to="/sema">
          <Button variant="ghost" className="mb-8">
            ← Back to SEMA
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          For Investors
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-muted-foreground text-lg">
              Placeholder content for investors. This page will highlight investment
              opportunities, metrics, market analysis, and strategic advantages of
              the Soul Interface platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
