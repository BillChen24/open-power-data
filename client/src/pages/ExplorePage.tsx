import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DatasetCard from "@/components/DatasetCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Battery } from "lucide-react";
import { mockCountries } from "@/lib/mockData";

const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  Battery,
};

export default function ExplorePage() {
  const [location] = useLocation();
  const [defaultOpen, setDefaultOpen] = useState<string | undefined>();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setDefaultOpen(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <h1 className="text-5xl font-bold mb-4">Data Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore datasets organized by country and category
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <Accordion type="single" collapsible defaultValue={defaultOpen}>
            {mockCountries.map((country) => (
              <AccordionItem key={country.id} value={country.id} id={country.id}>
                <AccordionTrigger
                  className="py-6 px-8 hover:bg-muted/50 rounded-lg data-[state=open]:bg-muted/50"
                  data-testid={`accordion-country-${country.id}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-4xl">{country.flag}</span>
                    <div className="flex-1 text-left">
                      <h2 className="text-2xl font-semibold" data-testid={`text-country-${country.id}`}>
                        {country.name}
                      </h2>
                    </div>
                    <Badge variant="secondary" className="ml-auto mr-4">
                      {country.datasetCount} datasets
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6">
                  {country.categories.length > 0 ? (
                    <div className="space-y-8">
                      {country.categories.map((category) => {
                        const Icon = iconMap[category.icon] || TrendingUp;
                        return (
                          <div key={category.id}>
                            <div className="flex items-center gap-2 mb-4">
                              <Icon className="h-5 w-5 text-primary" />
                              <h3 className="text-xl font-semibold">{category.name}</h3>
                              <Badge variant="outline" className="ml-2">
                                {category.datasets.length}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {category.datasets.map((dataset) => (
                                <DatasetCard key={dataset.id} dataset={dataset} />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
