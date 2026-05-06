import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database } from "lucide-react";
import heroImage from "@assets/generated_images/Power_grid_data_visualization_hero_7c982042.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Power grid data visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-5 w-5 text-primary" />
            <span className="text-sm uppercase tracking-wide font-medium text-primary">
              Regional Open Power Systems Dataset Repository
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Powering Research and impact with
            <span className="text-primary"> Open Power Data</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Access ground-up validated power sector datasets in key regions:
            demand, generation, networks and renewable resources.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/explore" data-testid="link-explore-data">
              <Button
                size="lg"
                className="text-lg font-semibold"
                data-testid="button-explore-data"
              >
                Explore Datasets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about" data-testid="link-learn-more">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold backdrop-blur-md bg-background/20"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Countries
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground mt-1">Datasets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5M+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Data Points
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
