import { useState, useEffect, useRef } from "react";
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
  Image,
  Clock,
  Send,
  ExternalLink,
  BookOpen,
  Cpu,
  FileText,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { powerDatasets } from "@/lib/powerData";

export default function DatasetPage() {
  const [, params] = useRoute("/dataset/:id");
  const [citationOpen, setCitationOpen] = useState(false);
  const dataset = powerDatasets.find((d) => d.id === params?.id);
  const requestFormRef = useRef<HTMLDivElement>(null);
  const getDatasetPageUrl = (id: string) =>
    `https://open-power-data.onrender.com/dataset/${id}`;
  const citationText = dataset
    ? (dataset.citation?.replace("[URL]", getDatasetPageUrl(dataset.id)) ?? "")
    : "";
  const scrollToRequestForm = () => {
    requestFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  if (dataset.inPreparation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <div className="bg-gradient-to-b from-primary/5 to-background py-12 border-b">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" data-testid="link-breadcrumb-home">
                  <span className="hover:text-primary cursor-pointer">
                    Home
                  </span>
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/explore" data-testid="link-breadcrumb-explore">
                  <span className="hover:text-primary cursor-pointer">
                    Explore
                  </span>
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link
                  href={`/country/${dataset.country.toLowerCase()}`}
                  data-testid="link-breadcrumb-country"
                >
                  <span className="hover:text-primary cursor-pointer">
                    {dataset.country}
                  </span>
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{dataset.category}</span>
              </div>

              <h1
                className="text-4xl font-bold mb-4"
                data-testid="text-dataset-name"
              >
                {dataset.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{dataset.country}</Badge>
                <Badge variant="secondary">{dataset.category}</Badge>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
            <Card
              className="p-12 text-center"
              data-testid="card-in-preparation"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2
                className="text-2xl font-semibold mb-4"
                data-testid="text-preparation-title"
              >
                Dataset in Preparation
              </h2>
              <p
                className="text-muted-foreground max-w-md mx-auto mb-8"
                data-testid="text-preparation-message"
              >
                This dataset is currently being prepared and will be available
                soon. Please check back later or contact us for more
                information.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/explore"
                  data-testid="link-back-explore-preparation"
                >
                  <Button
                    variant="outline"
                    data-testid="button-back-explore-preparation"
                  >
                    Back to Explore
                  </Button>
                </Link>
                <Link href="/contact" data-testid="link-contact-preparation">
                  <Button data-testid="button-contact-preparation">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>
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
              <Link
                href={`/country/${dataset.country.toLowerCase()}`}
                data-testid="link-breadcrumb-country"
              >
                <span className="hover:text-primary cursor-pointer">
                  {dataset.country}
                </span>
              </Link>
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

              {dataset.downloadable !== false ? (
                dataset.downloadUrl ? (
                  <Button
                    asChild
                    size="lg"
                    className="whitespace-nowrap"
                    data-testid="button-download"
                  >
                    <a href={dataset.downloadUrl} download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Dataset
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="whitespace-nowrap"
                    data-testid="button-download"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Dataset
                  </Button>
                )
              ) : (
                <Button
                  size="lg"
                  className="whitespace-nowrap"
                  onClick={scrollToRequestForm}
                  data-testid="button-request-access"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Request Access
                </Button>
              )}
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

              {dataset.figureLink && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    {/* <Image className="h-5 w-5" /> */}
                    Data Visualization
                  </h2>
                  <Card className="overflow-hidden">
                    <img
                      src={dataset.figureLink}
                      alt={`Visualization for ${dataset.name}`}
                      className="w-full h-auto"
                      data-testid="img-data-visualization"
                    />
                  </Card>
                </div>
              )}

              {/* <Accordion type="single" collapsible defaultValue="methodology">
                <AccordionItem value="methodology">
                  <AccordionTrigger className="ext-2xl font-semibold mb-4">
                    Methodology
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                      <ReactMarkdown>{dataset.methodology}</ReactMarkdown>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}

              {/* <div>
                <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {dataset.methodology}
                  </ReactMarkdown>
                </div>
              </div> */}
              {dataset.methodologyUrl && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
                  <Card
                    className="p-4 hover-elevate"
                    data-testid="card-methodology"
                  >
                    <a
                      href={dataset.methodologyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            Full Methodology Document
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Opens as PDF in a new tab
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-primary whitespace-nowrap">
                        View PDF
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </a>
                  </Card>
                </div>
              )}

              {dataset.modelImplementations?.length ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    Model Implementations
                  </h2>
                  <ul
                    className="list-none space-y-3 text-sm"
                    data-testid="section-model-implementations"
                  >
                    {dataset.modelImplementations.map((model, idx) => (
                      <li
                        key={idx}
                        className="leading-snug flex items-start gap-2"
                        data-testid={`model-item-${idx}`}
                      >
                        <span className="text-lg leading-none text-muted-foreground select-none">
                          •
                        </span>
                        <div className="space-y-1">
                          <a
                            href={model.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span className="font-medium">{model.name}</span>
                          </a>
                          {model.description && (
                            <div className="text-muted-foreground text-xs">
                              {model.description}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {dataset.relevantReports?.length ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    Relevant Reports
                  </h2>
                  <ul
                    className="list-none space-y-3 text-sm"
                    data-testid="section-relevant-reports"
                  >
                    {dataset.relevantReports.map((report, idx) => (
                      <li
                        key={idx}
                        className="leading-snug flex items-start gap-2"
                        data-testid={`report-item-${idx}`}
                      >
                        <span className="text-lg leading-none text-muted-foreground select-none">
                          •
                        </span>
                        <div className="space-y-1">
                          <a
                            href={report.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span className="font-medium">{report.title}</span>
                          </a>
                          {report.description && (
                            <div className="text-muted-foreground text-xs">
                              {report.description}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
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
                      Region Level
                    </div>
                    <div className="font-medium">{dataset.regionLevel}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Frequency
                    </div>
                    <div className="font-medium">{dataset.frequency}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Data Period
                    </div>
                    <div className="font-medium">
                      {dataset.dataCoverage || "Not specified"}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {dataset.downloadable === false && (
            <div ref={requestFormRef}>
              <Card className="p-8 bg-muted/30" data-testid="card-request-form">
                <DataRequestForm
                  datasetId={dataset.id}
                  datasetName={dataset.name}
                />
              </Card>
            </div>
          )}
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
              {/* {dataset?.citation ||
                `Open Power Data Initiative. "${
                  dataset?.name
                }". Open Power Data, ${new Date().getFullYear()}. Available at: https://openpowerdata.org/dataset/${
                  dataset?.id
                }`} */}
              {citationText}
            </div>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => {
                navigator.clipboard.writeText(
                  // dataset?.citation ||
                  //   `Open Power Data Initiative. "${
                  //     dataset?.name
                  //   }". Open Power Data, ${new Date().getFullYear()}. Available at: https://openpowerdata.org/dataset/${
                  //     dataset?.id
                  //   }`,
                  citationText,
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
