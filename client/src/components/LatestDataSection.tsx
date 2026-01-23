import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Calendar } from "lucide-react";
import { powerDatasets } from "@/lib/powerData";

export default function LatestDataSection() {
  const latestDatasets = powerDatasets.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Latest Datasets</h2>
            <p className="text-lg text-muted-foreground">
              Recently updated power and energy data from around the world
            </p>
          </div>
          <Link href="/explore" data-testid="link-view-all">
            <Button
              variant="outline"
              className="hidden md:flex"
              data-testid="button-view-all"
            >
              View All Datasets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-2 -mx-2 px-2">
          {latestDatasets.map((dataset) => (
            <Card
              key={dataset.id}
              className="p-6 hover-elevate w-80 flex-shrink-0"
              data-testid={`card-dataset-${dataset.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs">
                  {dataset.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {dataset.updated}
                </div>
              </div>

              <h3
                className="text-xl font-medium mb-2 line-clamp-2"
                data-testid={`text-dataset-name-${dataset.id}`}
              >
                {dataset.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {dataset.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs">
                  {dataset.format.split(",")[0].trim()}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {dataset.size}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {dataset.country}
                </Badge>
              </div>

              <Link
                href={`/dataset/${dataset.id}`}
                data-testid={`link-view-dataset-${dataset.id}`}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  data-testid={`button-view-dataset-${dataset.id}`}
                >
                  <span>View Dataset</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/explore" data-testid="link-view-all-mobile">
            <Button variant="outline" data-testid="button-view-all-mobile">
              View All Datasets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
