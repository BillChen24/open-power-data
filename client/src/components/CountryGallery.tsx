import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database } from "lucide-react";
import { Countries } from "@/lib/powerData";
import CountryIcon from "./CountryIcon";

export default function CountryGallery() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Explore by Country</h2>
          <p className="text-lg text-muted-foreground">
            Browse datasets organized by country and region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Countries.map((country) => (
            <Card
              key={country.id}
              className="p-0 overflow-hidden hover-elevate cursor-pointer"
              data-testid={`card-country-${country.id}`}
            >
              <Link
                href={`/country/${country.id}`}
                data-testid={`link-country-gallery-${country.id}`}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <CountryIcon
                    countryId={country.id}
                    countryName={country.name}
                    size="xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-2xl font-semibold"
                      data-testid={`text-country-name-${country.id}`}
                    >
                      {country.name}
                    </h3>
                    <Badge variant="secondary">
                      <Database className="h-3 w-3 mr-1" />
                      {country.datasetCount}
                    </Badge>
                  </div>
                  <div className="flex items-center text-primary font-medium">
                    <span>Explore Datasets</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/explore" data-testid="link-view-all-countries">
            <Button
              size="lg"
              variant="outline"
              data-testid="button-view-all-countries"
            >
              View All Countries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
