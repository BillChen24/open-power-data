import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Download,
  Calendar,
  ArrowRight,
  BarChart3,
  Zap,
  Network,
  Sun,
  SlidersHorizontal,
} from "lucide-react";
import type { Dataset } from "@shared/schema";

interface DatasetCardProps {
  dataset: Dataset;
}

const categoryConfig: Record<string, { icon: typeof Zap; color: string }> = {
  Demand: { icon: BarChart3, color: "text-blue-500" },
  Supply: { icon: Zap, color: "text-amber-500" },
  Transmission: { icon: Network, color: "text-emerald-500" },
  "RE Resource Potential": { icon: Sun, color: "text-orange-500" },
  Parameters: { icon: SlidersHorizontal, color: "text-violet-500" },
};

export default function DatasetCard({ dataset }: DatasetCardProps) {
  const config = categoryConfig[dataset.category] ?? {
    icon: Zap,
    color: "text-primary",
  };
  const CategoryIcon = config.icon;
  return (
    <Link
      href={`/dataset/${dataset.id}`}
      data-testid={`link-dataset-${dataset.id}`}
    >
      {/* <Card className="p-6 h-full hover-elevate cursor-pointer" data-testid={`card-dataset-${dataset.id}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-32 bg-primary/10 rounded-lg mb-4">
            <Database className="h-16 w-16 text-primary" />
          </div>

          <h4 className="text-lg font-medium mb-2 line-clamp-2" data-testid={`text-dataset-name-${dataset.id}`}>
            {dataset.name}
          </h4>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {dataset.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {dataset.format.split(',')[0].trim()}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {dataset.size}
            </Badge>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            Updated {dataset.updated}
          </div>
        </div>
      </Card> */}

      <Card
        className="p-4 h-full hover-elevate cursor-pointer group"
        data-testid={`card-dataset-${dataset.id}`}
      >
        <div className="flex gap-3 h-full">
          <div className={`flex-shrink-0 mt-0.5 ${config.color}`}>
            <CategoryIcon className="h-5 w-5" />
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4
                className="text-sm font-medium line-clamp-2"
                data-testid={`text-dataset-name-${dataset.id}`}
              >
                {dataset.name}
              </h4>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>

            <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-grow">
              {dataset.about.split(".")[0]}.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="outline" className="text-xs px-1.5 py-0">
                {dataset.format.split(",")[0].trim()}
              </Badge>
              <span>{dataset.size}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
