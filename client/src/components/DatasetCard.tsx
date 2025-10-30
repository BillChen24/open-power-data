import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Download, Calendar } from "lucide-react";
import type { Dataset } from "@shared/schema";

interface DatasetCardProps {
  dataset: Dataset;
}

export default function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <Link href={`/dataset/${dataset.id}`} data-testid={`link-dataset-${dataset.id}`}>
      <Card className="p-6 h-full hover-elevate cursor-pointer" data-testid={`card-dataset-${dataset.id}`}>
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
      </Card>
    </Link>
  );
}
