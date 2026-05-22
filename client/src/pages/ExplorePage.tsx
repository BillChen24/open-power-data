import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Zap,
  Battery,
  Network,
  Sun,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Countries } from "@/lib/powerData";
import CountryIcon from "@/components/CountryIcon";

const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  Battery,
  Network,
  Sun,
  DollarSign,
};

export default function ExplorePage() {
  const [location] = useLocation();
  const [openCountry, setOpenCountry] = useState<string | undefined>();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenCountry(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h1 className="text-5xl font-bold mb-4">Dataset Catalog</h1>
            <p className="text-xl text-muted-foreground">
              Browse and download power system datasets organized by country and
              category
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <Accordion
            type="single"
            collapsible
            value={openCountry}
            onValueChange={setOpenCountry}
          >
            {Countries.map((country) => (
              <AccordionItem
                key={country.id}
                value={country.id}
                id={country.id}
              >
                <AccordionTrigger
                  className="py-6 px-8 hover:bg-muted/50 rounded-lg data-[state=open]:bg-muted/50"
                  data-testid={`accordion-country-${country.id}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <CountryIcon
                      countryId={country.id}
                      countryName={country.name}
                      size="lg"
                    />
                    <div className="flex-1 text-left">
                      <h2
                        className="text-2xl font-semibold"
                        data-testid={`text-country-${country.id}`}
                      >
                        {country.name}
                      </h2>
                    </div>
                    <Badge variant="secondary" className="ml-auto mr-4">
                      {country.datasetCount} datasets
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6">
                  <div className="mb-6">
                    <Button
                      variant="outline"
                      asChild
                      data-testid={`button-country-page-${country.id}`}
                    >
                      <Link
                        href={`/country/${country.id}`}
                        data-testid={`link-country-page-${country.id}`}
                      >
                        View {country.name} Country Page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  {country.categories.length > 0 ? (
                    <Accordion type="multiple" className="space-y-4">
                      {country.categories.map((category) => {
                        const Icon = iconMap[category.icon] || TrendingUp;
                        return (
                          <AccordionItem
                            key={category.id}
                            value={category.id}
                            className="border rounded-lg"
                          >
                            <AccordionTrigger
                              className="px-6 py-4 hover:bg-muted/30 rounded-lg"
                              data-testid={`accordion-category-${category.id}`}
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary" />
                                <h3 className="text-xl font-semibold">
                                  {category.name}
                                </h3>
                                <Badge variant="outline" className="ml-2">
                                  {category.datasets.length}
                                </Badge>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-2">
                              <div className="mb-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  asChild
                                  data-testid={`button-country-category-${country.id}-${category.id}`}
                                >
                                  <Link
                                    href={`/country/${country.id}?category=${category.id}`}
                                    data-testid={`link-country-category-${country.id}-${category.id}`}
                                  >
                                    View {category.name} Category
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                              <ul className="space-y-1">
                                {category.datasets.map((dataset) => (
                                  <li key={dataset.id}>
                                    <Link
                                      href={`/dataset/${dataset.id}`}
                                      data-testid={`link-dataset-${dataset.id}`}
                                    >
                                      <div
                                        className="px-3 py-2 rounded hover-elevate active-elevate-2 cursor-pointer"
                                        data-testid={`menu-item-dataset-${dataset.id}`}
                                      >
                                        <span
                                          className="text-sm"
                                          data-testid={`text-dataset-name-${dataset.id}`}
                                        >
                                          {dataset.name}
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Datasets coming soon for {country.name}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
