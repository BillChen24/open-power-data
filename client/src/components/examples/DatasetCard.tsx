import DatasetCard from '../DatasetCard';
import type { Dataset } from "@shared/schema";

const mockDataset: Dataset = {
  id: "china-demand-2024",
  country: "China",
  category: "Demand",
  name: "Electricity Demand Time Series 2020-2024",
  format: "CSV, JSON",
  size: "15.2 MB",
  updated: "2024-10-15",
  license: "CC BY 4.0",
  downloadUrl: "#",
  methodology: "Data collected from regional grid operators",
  about: "Comprehensive hourly electricity demand measurements",
  featured: false,
  downloadable: false,
};

export default function DatasetCardExample() {
  return <DatasetCard dataset={mockDataset} />;
}
