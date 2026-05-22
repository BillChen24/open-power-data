import { BarChart3, Zap, Network, Sun, SlidersHorizontal } from "lucide-react";

const categories = [
  {
    id: "demand",
    label: "Demand",
    description:
      "Electricity consumption by region, sector, and time resolution",
    icon: BarChart3,
    color: "bg-blue-500",
    shadowColor: "shadow-blue-200 dark:shadow-blue-900",
    textColor: "text-blue-500",
    filterParam: "Demand",
  },
  {
    id: "supply",
    label: "Supply",
    description: "Generation capacity, output by technology and fuel type",
    icon: Zap,
    color: "bg-amber-500",
    shadowColor: "shadow-amber-200 dark:shadow-amber-900",
    textColor: "text-amber-500",
    filterParam: "Supply",
  },
  {
    id: "transmission",
    label: "Transmission",
    description: "Grid networks, cross-border flows, and infrastructure data",
    icon: Network,
    color: "bg-emerald-500",
    shadowColor: "shadow-emerald-200 dark:shadow-emerald-900",
    textColor: "text-emerald-500",
    filterParam: "Transmission",
  },
  {
    id: "re-resource",
    label: "RE Resource",
    description: "Wind and solar potential profiles by location and season",
    icon: Sun,
    color: "bg-orange-500",
    shadowColor: "shadow-orange-200 dark:shadow-orange-900",
    textColor: "text-orange-500",
    filterParam: "RE Resource Potential",
  },
  {
    id: "parameters",
    label: "Parameters",
    description:
      "Fuel prices, emission factors, and techno-economic assumptions",
    icon: SlidersHorizontal,
    color: "bg-violet-500",
    shadowColor: "shadow-violet-200 dark:shadow-violet-900",
    textColor: "text-violet-500",
    filterParam: "Parameters",
  },
];

function Hexagon({
  category,
  offset,
}: {
  category: (typeof categories)[number];
  offset: boolean;
}) {
  const Icon = category.icon;
  return (
    <div
      className={`flex flex-col items-center gap-4 ${offset ? "mt-16" : ""}`}
      data-testid={`category-${category.id}`}
    >
      <div className="relative">
        <div
          className={`w-36 h-36 ${category.color} flex flex-col items-center justify-center`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <Icon className="h-10 w-10 text-white mb-1" strokeWidth={1.5} />
          <span className="text-white text-sm font-semibold tracking-wide">
            {category.label}
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-[130px] leading-relaxed">
        {category.description}
      </p>
    </div>
  );
}

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Data Categories
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            What Data Do We Offer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our repository spans five core categories of power system data,
            covering every layer of the electricity value chain.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 pb-8">
          {categories.map((cat, i) => (
            <Hexagon key={cat.id} category={cat} offset={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
