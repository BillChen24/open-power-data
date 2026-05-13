import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Calendar } from "lucide-react";
import { powerDatasets } from "@/lib/powerData";

export default function LatestDataSection() {
  const latestDatasets = powerDatasets.slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Latest Datasets</h2>
            <p className="text-lg text-muted-foreground">
              Recently updated regional power system datasets
            </p>
          </div>
        </div>

        {/* <div className="flex gap-6 overflow-x-auto pb-2 mx-3 px-2"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {latestDatasets.map((dataset) => (
            <Card
              key={dataset.id}
              className="p-4 hover-elevate w-full max-w-xs items-center space-y-3"
              data-testid={`card-dataset-${dataset.id}`}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="text-xs">
                  {dataset.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {dataset.updated}
                </div>
              </div>

              <h3
                className="text-lg font-medium mb-1 line-clamp-2"
                data-testid={`text-dataset-name-${dataset.id}`}
              >
                {dataset.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {dataset.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
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

        <div className="mt-12 flex justify-center gap-4">
          <Link href="/explore" data-testid="link-view-all" className="hidden md:inline-flex">
            <Button
              variant="outline"
              className="justify-between"
              data-testid="button-view-all"
            >
              View All Datasets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/explore" data-testid="link-view-all-mobile" className="md:hidden inline-flex">
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
