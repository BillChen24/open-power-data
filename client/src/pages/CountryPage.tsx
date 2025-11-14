import { useRoute } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { mockCountries } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DatasetCard from "@/components/DatasetCard";
import { Badge } from "@/components/ui/badge";

export default function CountryPage() {
  const [, params] = useRoute("/country/:countryId");
  const country = mockCountries.find((c) => c.id === params?.countryId);

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Country Not Found</h1>
            <p className="text-muted-foreground">
              The country you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Country introductions
  const countryIntros: Record<string, string> = {
    china:
      "China is the world's largest electricity consumer and producer, with a rapidly expanding renewable energy sector. The country's power system is characterized by significant regional disparities and extensive inter-provincial transmission infrastructure.",
    india:
      "India has one of the fastest-growing power sectors globally, with ambitious renewable energy targets. The country's electricity demand is driven by economic growth, urbanization, and improving access to electricity across rural areas.",
    indonesia:
      "Indonesia's electricity system is dominated by the Java-Bali grid, which serves the majority of the country's power demand. The archipelagic nature poses unique challenges for grid interconnection and renewable energy integration.",
    vietnam:
      "Vietnam has experienced rapid growth in electricity demand over the past decade, driven by industrial development and rising living standards. The country is transitioning from hydropower dependence to a more diversified generation mix.",
    asean:
      "The ASEAN Power Grid initiative aims to integrate the electricity systems of Southeast Asian nations through cross-border interconnections. This region represents diverse power systems with varying levels of development and renewable energy potential.",
  };

  const allDatasets = country.categories.flatMap((cat) => cat.datasets);
  const featuredDatasets = allDatasets.slice(0, 3);
  const featuredIds = new Set(featuredDatasets.map((d) => d.id));
  const nonFeaturedDatasets = allDatasets.filter((d) => !featuredIds.has(d.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          {/* Country Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1
                  className="text-4xl font-bold"
                  data-testid="text-country-name"
                >
                  {country.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" data-testid="badge-dataset-count">
                    {country.datasetCount} Datasets
                  </Badge>
                  <Badge variant="outline" data-testid="badge-category-count">
                    {country.categories.length} Categories
                  </Badge>
                </div>
              </div>
            </div>
            <p
              className="text-lg text-muted-foreground max-w-4xl"
              data-testid="text-country-intro"
            >
              {countryIntros[country.id] ||
                "Explore comprehensive power sector data for this region."}
            </p>
          </div>

          {/* Featured Datasets Section */}
          {featuredDatasets.length > 0 && (
            <div className="mb-12">
              <h2
                className="text-2xl font-bold mb-6"
                data-testid="heading-featured-datasets"
              >
                Featured Datasets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredDatasets.map((dataset) => (
                  <DatasetCard key={dataset.id} dataset={dataset} />
                ))}
              </div>
            </div>
          )}

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList
              className="mb-8 flex-wrap h-auto gap-2"
              data-testid="tabs-categories"
            >
              <TabsTrigger value="all" data-testid="tab-all">
                All ({nonFeaturedDatasets.length})
              </TabsTrigger>
              {country.categories.map((category) => {
                const nonFeaturedCount = category.datasets.filter(
                  (d) => !featuredIds.has(d.id)
                ).length;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    data-testid={`tab-${category.id}`}
                  >
                    {category.name} ({nonFeaturedCount})
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value="all" data-testid="content-all">
              {nonFeaturedDatasets.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No additional datasets available.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nonFeaturedDatasets.map((dataset) => (
                    <DatasetCard key={dataset.id} dataset={dataset} />
                  ))}
                </div>
              )}
            </TabsContent>

            {country.categories.map((category) => {
              const nonFeaturedCategoryDatasets = category.datasets.filter(
                (d) => !featuredIds.has(d.id)
              );
              return (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  data-testid={`content-${category.id}`}
                >
                  {nonFeaturedCategoryDatasets.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        No additional {category.name.toLowerCase()} datasets
                        available.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {nonFeaturedCategoryDatasets.map((dataset) => (
                        <DatasetCard key={dataset.id} dataset={dataset} />
                      ))}
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
