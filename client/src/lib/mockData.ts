import type { Country, DataCategory, Dataset } from "@shared/schema";

//todo: remove mock functionality
export const mockDatasets: Dataset[] = [
  {
    id: "china-demand-2024",
    country: "China",
    category: "Demand",
    name: "Electricity Demand Time Series 2020-2024",
    description: "Hourly electricity demand data across major regions",
    format: "CSV, JSON",
    size: "15.2 MB",
    updated: "2024-10-15",
    license: "CC BY 4.0",
    downloadUrl: "#",
    methodology: "Data collected from regional grid operators and aggregated to hourly intervals. Quality control includes outlier detection and missing value imputation using linear interpolation for gaps less than 3 hours.",
    about: "This dataset provides comprehensive hourly electricity demand measurements across China's major grid regions from 2020 to 2024. The data includes seasonal variations, peak demand periods, and regional consumption patterns.",
    preview: [
      { timestamp: "2024-01-01 00:00", region: "East China", demand_MW: 145230, temperature_C: 2.5 },
      { timestamp: "2024-01-01 01:00", region: "East China", demand_MW: 138450, temperature_C: 2.1 },
      { timestamp: "2024-01-01 02:00", region: "East China", demand_MW: 132890, temperature_C: 1.8 },
    ],
  },
  {
    id: "usa-generation-2024",
    country: "USA",
    category: "Generation",
    name: "Power Generation by Source 2023-2024",
    description: "Monthly generation capacity by energy source",
    format: "CSV, Excel",
    size: "8.7 MB",
    updated: "2024-09-30",
    license: "Public Domain",
    downloadUrl: "#",
    methodology: "Monthly aggregation of generation data from EIA-923 forms. Renewable sources include solar, wind, hydro, and geothermal. Fossil includes coal, natural gas, and petroleum.",
    about: "Detailed monthly power generation statistics broken down by energy source across all US grid regions. Includes renewable and conventional generation sources.",
    preview: [
      { month: "2024-01", source: "Natural Gas", generation_GWh: 125400, capacity_factor: 0.58 },
      { month: "2024-01", source: "Coal", generation_GWh: 68200, capacity_factor: 0.52 },
      { month: "2024-01", source: "Wind", generation_GWh: 42300, capacity_factor: 0.35 },
    ],
  },
  {
    id: "india-capacity-2024",
    country: "India",
    category: "Capacity",
    name: "Installed Generation Capacity 2024",
    description: "State-wise installed capacity by technology",
    format: "CSV, JSON",
    size: "2.1 MB",
    updated: "2024-08-20",
    license: "Open Data",
    downloadUrl: "#",
    methodology: "Annual capacity survey data from Central Electricity Authority. Includes commissioned capacity as of March 2024. Small-scale rooftop solar estimated from state nodal agencies.",
    about: "State-level breakdown of installed electricity generation capacity by technology type. Covers thermal, hydro, nuclear, and renewable energy sources across all Indian states.",
    preview: [
      { state: "Maharashtra", technology: "Coal", capacity_MW: 23450, commissioned_year: 2020 },
      { state: "Maharashtra", technology: "Solar", capacity_MW: 8920, commissioned_year: 2023 },
      { state: "Tamil Nadu", technology: "Wind", capacity_MW: 10250, commissioned_year: 2022 },
    ],
  },
];

//todo: remove mock functionality
export const mockCountries: Country[] = [
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    datasetCount: 12,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: [mockDatasets[0]],
      },
      {
        id: "generation",
        name: "Generation",
        icon: "Zap",
        datasets: [],
      },
    ],
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    datasetCount: 15,
    categories: [
      {
        id: "generation",
        name: "Generation",
        icon: "Zap",
        datasets: [mockDatasets[1]],
      },
      {
        id: "capacity",
        name: "Capacity",
        icon: "Battery",
        datasets: [],
      },
    ],
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    datasetCount: 8,
    categories: [
      {
        id: "capacity",
        name: "Capacity",
        icon: "Battery",
        datasets: [mockDatasets[2]],
      },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    datasetCount: 10,
    categories: [],
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    datasetCount: 6,
    categories: [],
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    datasetCount: 9,
    categories: [],
  },
];
