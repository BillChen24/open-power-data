import DatasetCard from '../DatasetCard';

const mockDataset = {
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
  methodology: "Data collected from regional grid operators",
  about: "Comprehensive hourly electricity demand measurements",
};

export default function DatasetCardExample() {
  return <DatasetCard dataset={mockDataset} />;
}
