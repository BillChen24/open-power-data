import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DataRequestForm from "@/components/DataRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  Calendar,
  FileType,
  HardDrive,
  Quote,
  ChevronRight,
} from "lucide-react";
import { powerDatasets } from "@/lib/powerData";

export default function DatasetPage() {
  const [, params] = useRoute("/dataset/:id");
  const [citationOpen, setCitationOpen] = useState(false);
  const dataset = powerDatasets.find((d) => d.id === params?.id);

  // Ensure we scroll to top when navigating to a dataset page (or when id changes)
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (e) {
      // window may be undefined in some SSR contexts; swallow errors safely
    }
  }, [params?.id]);

  if (!dataset) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Dataset Not Found</h1>
            <Link href="/explore" data-testid="link-back-explore">
              <Button data-testid="button-back-explore">Back to Explore</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-12 border-b">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" data-testid="link-breadcrumb-home">
                <span className="hover:text-primary cursor-pointer">Home</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/explore" data-testid="link-breadcrumb-explore">
                <span className="hover:text-primary cursor-pointer">
                  Explore
                </span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{dataset.country}</span>
              <ChevronRight className="h-4 w-4" />
              <span>{dataset.category}</span>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h1
                  className="text-4xl font-bold mb-4"
                  data-testid="text-dataset-name"
                >
                  {dataset.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {dataset.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{dataset.country}</Badge>
                  <Badge variant="secondary">{dataset.category}</Badge>
                  <Link href="/licence" data-testid="link-license-badge">
                    <Badge variant="outline" className="cursor-pointer">
                      {dataset.license}
                    </Badge>
                  </Link>
                </div>
              </div>

              <Button
                size="lg"
                className="whitespace-nowrap"
                data-testid="button-download"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Dataset
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Updated</span>
              </div>
              <div className="text-xl font-semibold" data-testid="text-updated">
                {dataset.updated}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <FileType className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Format</span>
              </div>
              <div className="text-xl font-semibold" data-testid="text-format">
                {dataset.format}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <HardDrive className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">Size</span>
              </div>
              <div className="text-xl font-semibold" data-testid="text-size">
                {dataset.size}
              </div>
            </Card>

            <Card
              className="p-6 cursor-pointer hover-elevate"
              onClick={() => setCitationOpen(true)}
              data-testid="card-citation"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Quote className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wide">
                  Citation
                </span>
              </div>
              <div
                className="text-xl font-semibold"
                data-testid="text-citation"
              >
                Click to view
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Preview</h2>
                <Card className="overflow-hidden">
                  <div className="overflow-x-auto max-h-96">
                    <table className="w-full">
                      <thead className="sticky top-0 bg-muted">
                        <tr>
                          {dataset.preview &&
                            dataset.preview[0] &&
                            Object.keys(dataset.preview[0]).map((key) => (
                              <th
                                key={key}
                                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                              >
                                {key.replace(/_/g, " ")}
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataset.preview?.map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-b last:border-b-0 hover:bg-muted/50"
                          >
                            {Object.values(row).map((value, colIdx) => (
                              <td
                                key={colIdx}
                                className="px-4 py-3 font-mono text-sm"
                              >
                                {String(value)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              <Accordion type="single" collapsible defaultValue="methodology">
                <AccordionItem value="methodology">
                  <AccordionTrigger className="text-xl font-semibold">
                    Methodology
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {dataset.methodology}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">
                  About This Dataset
                </h3>
                <div className="text-muted-foreground leading-relaxed mb-6">
                  {dataset.about}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Country
                    </div>
                    <div className="font-medium">{dataset.country}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Category
                    </div>
                    <div className="font-medium">{dataset.category}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Data Period
                    </div>
                    <div className="font-medium">
                      {dataset.startDate && dataset.endDate
                        ? `${dataset.startDate} - ${dataset.endDate}`
                        : dataset.startDate ||
                          dataset.endDate ||
                          "Not specified"}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-muted/30">
            <DataRequestForm
              datasetId={dataset.id}
              datasetName={dataset.name}
            />
          </Card>
        </div>
      </main>
      <Footer />

      <Dialog open={citationOpen} onOpenChange={setCitationOpen}>
        <DialogContent data-testid="dialog-citation">
          <DialogHeader>
            <DialogTitle>How to Cite This Dataset</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Please use the following citation when referencing this dataset:
            </p>
            <div
              className="bg-muted p-4 rounded-lg font-mono text-sm"
              data-testid="text-citation-content"
            >
              {dataset?.citation ||
                `Open Power Data Initiative. "${
                  dataset?.name
                }". Open Power Data, ${new Date().getFullYear()}. Available at: https://openpowerdata.org/dataset/${
                  dataset?.id
                }`}
            </div>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => {
                navigator.clipboard.writeText(
                  dataset?.citation ||
                    `Open Power Data Initiative. "${
                      dataset?.name
                    }". Open Power Data, ${new Date().getFullYear()}. Available at: https://openpowerdata.org/dataset/${
                      dataset?.id
                    }`
                );
              }}
              data-testid="button-copy-citation"
            >
              Copy Citation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
