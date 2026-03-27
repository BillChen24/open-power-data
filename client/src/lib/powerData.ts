import type { Country, DataCategory, Dataset } from "@shared/schema";

//todo: remove mock functionality - China datasets
const chinaDemandDatasets: Dataset[] = [
  {
    id: "china-demand-provincial-yearly",
    country: "China",
    category: "Demand",
    name: "China Provincial Yearly Power Consumption",
    featured: false,
    downloadable: true,
    updated: "2025-06-30",
    format: "CSV",
    size: "22 KB",
    license: "CC BY 4.0",
    citation: "Data Source: National Bureau of Statistics of China; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial annual electricity consumption data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1995-2024",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from the National Bureau of Statistics of China (NBS). The NBS is the primary source of national and selected provincial official statistical data in China. According to the NBS, provincial annual electricity consumption data is sourced from the China Electricity Council (CEC).

**Source link:** https://data.stats.gov.cn/easyquery.htm?cn=E0103

## Limitations

Users should be aware that the NBS may periodically revise historical data to improve accuracy. As a result, values may differ from those reported in earlier releases.
`,
    preview: [
      { province: "Anhui", year: 2024, demand_gWh: 359800 },
      { province: "Beijing", year: 2024, demand_gWh: 138940 },
      { province: "Chongqing", year: 2024, demand_gWh: 161260 },
    ],
    modelImplementations: [
      { name: "Provincial Demand Forecasting Model", url: "https://github.com/oreo-lab/demand-forecast", description: "A time-series model for forecasting provincial electricity demand using historical data and socioeconomic indicators." },
      { name: "Load Disaggregation Toolkit", url: "https://github.com/oreo-lab/load-disaggregation", description: "Tools for disaggregating aggregate demand data into sectoral components (residential, commercial, industrial)." },
    ],
    relevantReports: [
      { title: "China Provincial Electricity Consumption Trends 2010-2023", url: "https://example.org/reports/china-consumption-trends", description: "Analysis of long-term demand growth patterns across Chinese provinces." },
      { title: "Regional Demand Drivers in East China", url: "https://example.org/reports/east-china-demand", description: "Explores the key economic and demographic factors driving electricity demand in eastern provinces." },
    ],
    figureLink: "/dataset_charts/cn_prov_annual_consumption.svg"
  },
  {
    id: "china-demand-provincial-monthly",
    country: "China",
    category: "Demand",
    name: "China Provincial Monthly Electricity Consumption",
    featured: false,
    downloadable: false,
    updated: "2025-9-30",
    format: "CSV",
    size: "37 KB",
    license: "CC BY 4.0",
    citation: "Data Source: State Grid of China; Reposted by: Dianchacha; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial monthly electricity consumption data. The data is collected from Dianchacha. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2020/02-2025/06",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from Dianchacha, a platform that provides electricity-related data for China, including installed capacity, electricity generation, consumption, and transmission. Publicly available data on Dianchacha is primarily reported at annual and monthly frequencies. According to the platform, electricity consumption data is mainly sourced from the State Grid of China.

**Source link:** https://www.dianchacha.cn/data

## Limitations

Users should be aware that electricity consumption data on Dianchacha is reportedly sourced from the State Grid of China and republished by the platform. As a result, there may be risks of data errors, omissions, or delays introduced during the reposting process. For research or analytical use, it is recommended to cross-validate the data with official or independent sources.
`,
    preview: [
      { province: "Anhui", year: 2025, month: 6, demand_gWh: 30467 },
      { province: "Beijing", year: 2025, month: 6, demand_gWh: 12132 },
      { province: "Chongqing", year: 2025, month: 6, demand_gWh: 14283 },
    ],
    figureLink: "/dataset_charts/cn_prov_monthly_consumption.svg"
  },
  {
    id: "china-demand-provincial-hourly-simulated",
    country: "China",
    category: "Demand",
    name: "China Provincial Simulated Hourly Electricity Load Profiles",
    featured: true,
    downloadable: false,
    updated: "2023-06-30",
    format: "CSV",
    size: "10.7 MB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: demand_provincial_hourly_2022 (CC BY 4.0).",
    about: "This dataset contains China provincial simulated hourly electricity load profiles in 2022. The data is generated based on China provincial monthly electricity consumption data, combined with typical load curves of each provincial power grid.",
    regionLevel: "Provincial",
    frequency: "Hourly",
    dataCoverage: "2022",
    downloadUrl: "#",
    methodology: `We developed a script to generate a simulated hourly electricity load profile (24 hours * days in month) for one or more Chinese provinces, given:

- A target monthly total electricity consumption (province-level, per month)
- A province's typical workday (工作日 / *gongzuori*) 24-hour load shape
- Daily maximum/minimum constraints derived from historical “全年日 / *quannianri*” data (scaled to the target year)
- Calendar handling (month length and Lunar New Year shifting for Jan/Feb)

The core step is a quadratic optimization (Gurobi) that finds hourly loads that:

- Match the daily shape as closely as possible
- Respect daily max/min bounds
- Match the monthly total

If you'd like to require a complete methodology for this dataset, please specify it in the request form.
`,
    preview: [
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 1, load_mw: 32973.3918 },
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 2, load_mw: 31288.18473 },
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 3, load_mw: 30282.50421 },
    ],
    figureLink: "/dataset_charts/cn_prov_simulated_hourly_load_profiles.svg"
  },
];

const chinaSupplyDatasets: Dataset[] = [
  {
    id: "china-generator-tech",
    country: "China",
    category: "Supply",
    name: "China Power Generators by Technology",
    featured: false,
    downloadable: false,
    updated: "2025-09-30",
    format: "CSV",
    size: "4.6 MB",
    license: "CC BY 4.0",
    citation: "Data Source: Global Energy Monitor; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains data on China’s coal, gas, hydro, nuclear, solar and wind power generators. The data is collected from Global Energy Monitor (GEM). The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1941-2025",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from Global Energy Monitor (GEM). GEM develops and analyzes data on energy infrastructure, resources, and energy use, and provides open access to information that supports efforts toward a sustainable energy future.

**Source link:** https://globalenergymonitor.org/projects/global-integrated-power-tracker/

## Limitations

Users should be aware that data collected by GEM on various types of generators in China may be incomplete. For research or analytical purposes, it is recommended that this dataset be supplemented with information from additional sources.
`,
    preview: [
      { type: "coal", province: "Anhui", plant_name: "Anhui Bengbu power station", unit_name: "Phase II Unit 3", capacity_mw: 660, status: "operating", start_year: 2018, technology: "ultra-supercritical", fuel: "bituminous", captive: null, chp: null, capacity_factor: 0.55, heat_rate_btu_per_kwh: 8272, emission_factor_kg_co2_per_tj: 94600 },
      { type: "coal", province: "Anhui", plant_name: "Anhui Bengbu power station", unit_name: "Phase II Unit 4", capacity_mw: 660, status: "operating", start_year: 2018, technology: "ultra-supercritical", fuel: "bituminous", captive: null, chp: null, capacity_factor: 0.55, heat_rate_btu_per_kwh: 8272, emission_factor_kg_co2_per_tj: 94600 },
      { type: "coal", province: "Anhui", plant_name: "Anhui Bengbu power station", unit_name: "Phase I Unit 1", capacity_mw: 630, status: "operating", start_year: 2008, technology: "supercritical", fuel: "bituminous", captive: null, chp: null, capacity_factor: 0.55, heat_rate_btu_per_kwh: 9249.9, emission_factor_kg_co2_per_tj: 94600 },
    ],
    figureLink: "/dataset_charts/cn_generators_by_tech.svg"
  },
  {
    id: "china-prov-annual-generator-tech",
    country: "China",
    category: "Supply",
    name: "China Provincial Annual Electricity Generation by Technology",
    featured: false,
    downloadable: true,
    updated: "2025-06-30",
    format: "CSV",
    size: "85 KB",
    license: "CC BY 4.0",
    citation: "Data Source: National Bureau of Statistics of China; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial annual electricity generation data, including total, thermal and hydro data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1991-2024",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from the National Bureau of Statistics of China (NBS). The NBS is the primary source of national and selected provincial official statistical data in China.

**Source link:** https://data.stats.gov.cn/easyquery.htm?cn=E0103

## Limitations

Users should be aware that the NBS may periodically revise historical data to improve accuracy. As a result, values may differ from those reported in earlier releases.
`,
    preview: [
      { technology: "hydro", province: "Anhui", year: 2024, generation_gWh: 9452 },
      { technology: "hydro", province: "Beijing", year: 2024, generation_gWh: 944 },
      { technology: "hydro", province: "Chongqing", year: 2024, generation_gWh: 21840 },
    ],
    figureLink: "/dataset_charts/cn_prov_annual_generation_by_tech.svg"
  },
  {
    id: "china-prov-monthly-generator-tech",
    country: "China",
    category: "Supply",
    name: "China Provincial Monthly Electricity Generation by Technology",
    featured: false,
    downloadable: true,
    updated: "2025-09-30",
    format: "CSV",
    size: "694 KB",
    license: "CC BY 4.0",
    citation: "Data Source: National Bureau of Statistics of China; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial monthly electricity generation data, including total, thermal, hydro, nuclear, solar and wind data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "1993/02-2025/08",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from the National Bureau of Statistics of China (NBS). The NBS is the primary source of national and selected provincial official statistical data in China.

**Source link:** https://data.stats.gov.cn/easyquery.htm?cn=E0101

## Limitations

Users should be aware that the NBS may periodically revise historical data to improve accuracy. As a result, values may differ from those reported in earlier releases.
`,
    preview: [
      { technology: "hydro", province: "Anhui", year: 2025, month: 8, generation_gwh: 730},
      { technology: "hydro", province: "Beijing", year: 2025, month: 8, generation_gwh: 110},
      { technology: "hydro", province: "Chongqing", year: 2025, month: 8, generation_gwh: 1960},
    ],
    figureLink: "/dataset_charts/cn_prov_monthly_generation_by_tech.svg"
  },
  {
    id: "china-prov-annual-capacity-tech",
    country: "China",
    category: "Supply",
    name: "China Provincial Annual Installed Capacity by Technology",
    featured: false,
    downloadable: false,
    updated: "2025-06-30",
    format: "CSV",
    size: "46 KB",
    license: "CC BY 4.0",
    citation: "Data Source: China Electricity Council; Reposted by: Dianchacha; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial annual installed capacity data in the power industry, including thermal, hydro, nuclear, solar and wind data. The data is collected from Dianchacha. The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1991-2024",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from Dianchacha, a platform that provides electricity-related data for China, including installed capacity, electricity generation, consumption, and transmission. Publicly available data on Dianchacha is primarily reported at annual and monthly frequencies. According to the platform, installed capacity data is mainly sourced from the China Electricity Council (CEC).

**Source link:** https://www.dianchacha.cn/data

## Limitations

Users should be aware that installed capacity data on Dianchacha is reportedly sourced from the China Electricity Council and republished by the platform. As a result, there may be risks of data errors, omissions, or delays introduced during the reposting process. For research or analytical use, it is recommended to cross-validate the data with official or independent sources.
`,
    preview: [
      { technology: "hydro", province: "Anhui", year: 2024, cumulative_capacity_gw: 6.19 },
      { technology: "hydro", province: "Beijing", year: 2024, cumulative_capacity_gw: 1.01 },
      { technology: "hydro", province: "Chongqing", year: 2024, cumulative_capacity_gw: 9.18 }
    ],
    figureLink: "/dataset_charts/cn_prov_annual_capacity_by_tech.svg"
  },
  {
    id: "china-prov-annual-solar-capacity-by-type",
    country: "China",
    category: "Supply",
    name: "China Provincial Annual Solar PV Installed Capacity by Type",
    featured: true,
    downloadable: true,
    updated: "2025-06-30",
    format: "CSV",
    size: "94 KB",
    license: "CC BY 4.0",
    citation: "Data Source: National Energy Administration of China; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial annual installed capacity data by solar PV type, including new and cumulative, distributed and centralized, and residential and non-residential solar PV data. The data is collected from the National Energy Administration of China (NEA). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2018-2024",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from the National Energy Administration of China (NEA). The NEA is China’s primary energy regulator, responsible for overseeing the national energy supply system. It compiles and publishes authoritative national statistics on energy production, consumption, and installed capacity. The detailed solar PV installed capacity data released by the NEA is sourced from the National Renewable Energy Center and the China Electricity Council.

**Source link:** https://www.nea.gov.cn/xwfb/index.htm

## Limitations

Users should be aware that the solar PV installed capacity data released by the NEA is sourced from the National Renewable Energy Center and the China Electricity Council. For research or analytical purposes, it is recommended to cross-validate this information with additional sources.
`,
    preview: [
      { province: "Anhui", year: 2024, pv_type: "New Residential PV", capacity_gw: 4.188 },
      { province: "Anhui", year: 2024, pv_type: "New Non-Residential PV", capacity_gw: 5.134 },
      { province: "Anhui", year: 2024, pv_type: "New Installed Capacity", capacity_gw: 10.882 }
    ],
    figureLink: "/dataset_charts/cn_prov_annual_solar_pv_capacity_by_type.svg"
  },
  {
    id: "china-prov-monthly-solar-capacity",
    country: "China",
    category: "Supply",
    name: "China Provincial Monthly Solar PV Installed Capacity",
    featured: false,
    downloadable: false,
    updated: "2025-09-30",
    format: "CSV",
    size: "23 KB",
    license: "CC BY 4.0",
    citation: "Data Source: China Electricity Council; Reposted by: PK Thinker; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial monthly solar PV installed capacity data. The data is collected from PK Thinker. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2022/05-2025/07",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from PK Thinker, a platform that provides electricity-related data for China, including installed capacity, electricity generation, consumption, and transmission. Publicly available data on PK Thinker is primarily reported at a monthly frequency, and the main data source is the China Electricity Council (CEC).

**Source link:** http://nit.pkthinker.com/third/#/data  
*Note: This website is not reliably accessible.*

## Limitations

Users should be aware that installed capacity data on PK Thinker is reportedly sourced from the China Electricity Council and republished by the platform. As a result, there may be risks of data errors, omissions, or delays introduced during the reposting process. For research or analytical use, it is recommended to cross-validate the data with official or independent sources.
`,
    preview: [
      { province: "Anhui", year: 2025, month: 7, cumulative_capacity_gw: 53.96 },
      { province: "Beijing", year: 2025, month: 7, cumulative_capacity_gw: 1.86 },
      { province: "Chongqing", year: 2025, month: 7, cumulative_capacity_gw: 5.14 },
    ],
    figureLink: "/dataset_charts/cn_prov_monthly_solar_pv_capacity.svg"
  },
  {
    id: "china-prov-monthly-wind-capacity",
    country: "China",
    category: "Supply",
    name: "China Provincial Monthly Wind Power Installed Capacity",
    featured: false,
    downloadable: false,
    updated: "2025-09-30",
    format: "CSV",
    size: "23 KB",
    license: "CC BY 4.0",
    citation: "Data Source: China Electricity Council; Reposted by: PK Thinker; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains China provincial monthly wind power installed capacity data. The data is collected from PK Thinker. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2022/05-2025/07",
    downloadUrl: "#",
    methodology: `## Data Sources

The data is collected from PK Thinker, a platform that provides electricity-related data for China, including installed capacity, electricity generation, consumption, and transmission. Publicly available data on PK Thinker is primarily reported at a monthly frequency, and the main data source is the China Electricity Council (CEC).

**Source link:** http://nit.pkthinker.com/third/#/data  
*Note: This website is not reliably accessible.*

## Limitations

Users should be aware that installed capacity data on PK Thinker is reportedly sourced from the China Electricity Council and republished by the platform. As a result, there may be risks of data errors, omissions, or delays introduced during the reposting process. For research or analytical use, it is recommended to cross-validate the data with official or independent sources.
`,
    preview: [
      { province: "Anhui", year: 2025, month: 7, cumulative_capacity_gw: 10.39 },
      { province: "Beijing", year: 2025, month: 7, cumulative_capacity_gw: 0.23 },
      { province: "Chongqing", year: 2025, month: 7, cumulative_capacity_gw: 2.87 }
    ],
    figureLink: "/dataset_charts/cn_prov_monthly_wind_capacity.svg"
  },
];

const chinaTransmissionDatasets: Dataset[] = [
  {
    id: "china-ehv-uhv-transmission-lines",
    country: "China",
    category: "Transmission",
    name: "China Mainland EHV and UHV Transmission Lines",
    featured: true,
    downloadable: true,
    updated: "2025-11-30",
    format: "CSV",
    size: "16 KB",
    license: "CC BY 4.0",
    citation: "AuthAuthor: Power Transformation Lab; Title: cn_ehv_uhv_dc_uhv_ac_lines (CC BY 4.0).",
    about: "This dataset presents a comprehensive, systematically curated record of China’s operational extra-high voltage (EHV) and ultra-high voltage (UHV) transmission network, covering both AC and DC technologies. All information is derived exclusively from open-source materials and has been manually cross-validated across multiple independent sources.",
    regionLevel: "Interprovincial and Intraprovincial",
    frequency: "Annual",
    dataCoverage: "1990-2025",
    downloadUrl: "#",
    methodology: `## Data Sources

The dataset is compiled exclusively from open and publicly accessible sources, including but not limited to:

- **OpenStreetMap (OSM):** Geographic information system (GIS) data
- **Google satellite imagery:** Cross-checking and visual verification
- **Official statistical publications**
- **Official government and grid company websites**
- **Public power-industry information platforms and professional media**

## Limitations

This dataset is the result of multi-source data integration and manual verification. Despite careful validation, minor discrepancies may remain due to inconsistent reporting or differing update cycles across sources.

If you'd like to require a complete methodology for this dataset, please specify it in the request form.
`,
    preview: [
      { line_type: "DC", voltage: "±1100 kV", name: "Ji-Quan HVDC", name_local: "吉泉直流", name_full: "Zhundong - Southern Anhui ±1100 kV UHVDC", name_full_local: "准东-皖南±1100千伏特高压直流输电工程", commissioning_date: "2019-07-01", rated_capacity_mw: 12000, rated_capacity_source: "Reported", length_km: 3324, province_a: "Xinjiang", province_b: "Anhui" },
      { line_type: "DC", voltage: "±800 kV (multi terminal)", name: "Lu-Gao-Zhao HVDC (Gao-Zhao Section)", name_local: "禄高肇直流（高肇段）", name_full: "Luquan (Yunnan) - Gaopo (Guizhou) - Zhaoqing (Guangdong) Three-terminal HVDC (Gao-Zhao Section)", name_full_local: "云南禄劝换流站-贵州高坡换流站-广东肇庆换流站三端直流（高肇段）", commissioning_date: "2004-09-24", rated_capacity_mw: 3000, rated_capacity_source: "Reported", length_km: 1277, province_a: "Guizhou", province_b: "Guangdong" },
      { line_type: "DC", voltage: "±800 kV (multi terminal)", name: "Lu-Gao-Zhao HVDC (Lu-Gao Section)", name_local: "禄高肇直流（禄高段）", name_full: "Luquan (Yunnan) - Gaopo (Guizhou) - Zhaoqing (Guangdong) Three-terminal HVDC (Lu-Gao Section)", name_full_local: "云南禄劝换流站-贵州高坡换流站-广东肇庆换流站三端直流（禄高段）", commissioning_date: "2020-06-11", rated_capacity_mw: 3000, rated_capacity_source: "Reported", length_km: 389, province_a: "Yunnan", province_b: "Guizhou" }
    ],
    figureLink: "/dataset_charts/cn_ehv_uhv_dc_uhv_ac_lines.svg"
  },
  {
    id: "china-interprovincial-500kv-750kv-network",
    country: "China",
    category: "Transmission",
    name: "China Mainland Interprovincial 500 kV and 750 kV Network",
    featured: true,
    downloadable: false,
    updated: "2025-11-30",
    format: "CSV",
    size: "1 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: cn_interprovincial_500kv_750kv_network (CC BY 4.0).",
    about: "This dataset describes interprovincial 500 kV and 750 kV transmission network in Mainland China. All lines included are in operation or under construction. The dataset is intended for academic research, policy analysis, and industry studies, such as power flow analysis and grid structure assessment.",
    regionLevel: "Interprovincial",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## Data Sources

Data is compiled from publicly available sources, including official grid information, power-sector reports, OpenStreetMap, Google Satellite Imagery, and statistical publications. Manual cross-checking is performed to improve consistency and accuracy.

## Limitations

Capacity values are estimated and may differ from real-time operational limits. In this dataset, maximum transmission capacities are assumed to be 1,200 MW for 500 kV lines and 3,000 MW for 750 kV lines.`,
    preview: [
      {
        province_a: "Beijing",
        province_b: "Tianjin",
        voltage: "500 kV",
        capacity_mw: 3600,
        circuits: 3
      },
      {
        province_a: "Beijing",
        province_b: "Hebei",
        voltage: "500 kV",
        capacity_mw: 25200,
        circuits: 21
      },
      {
        province_a: "Tianjin",
        province_b: "Hebei",
        voltage: "500 kV",
        capacity_mw: 6000,
        circuits: 5
      },
    ],
    figureLink: "/dataset_charts/cn_interprovincial_500kv_750kv_network.svg"
  },
  {
    id: "china-interprovincial-capacity-500kv-above",
    country: "China",
    category: "Transmission",
    name: "China Mainland Interprovincial Capacity (500 kV and Above)",
    featured: true,
    downloadable: true,
    updated: "2025-11-30",
    format: "CSV",
    size: "3 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: cn_interprovincial_capacity_500kv_above (CC BY 4.0).",
    about: "This dataset describes interprovincial transmission capacity in mainland China for high-voltage DC lines (EHV/UHV) and AC lines rated 500 kV and above. The dataset is intended for academic research, policy analysis, and industry studies, such as power flow analysis and grid structure assessment.",
    regionLevel: "Interprovincial",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## Data Sources

Data is compiled from publicly available sources, including official grid information, power-sector reports, OpenStreetMap, Google Satellite Imagery, and statistical publications. Manual cross-checking is performed to improve consistency and accuracy.

## Limitations

Capacity values are estimated and may differ from real-time operational limits. For AC transmission lines, maximum capacities are assumed to be 1,200 MW for 500 kV lines, 3,000 MW for 750 kV lines, and 5,000 MW for 1,000 kV lines. For DC transmission lines, capacities are based on reported values.
`,
    preview: [
      { province_a: "Anhui", province_b: "Jiangsu", voltage: "500 kV and above", capacity_mw: 14800 },
      { province_a: "Anhui", province_b: "Xinjiang", voltage: "500 kV and above", capacity_mw: 12000 },
      { province_a: "Anhui", province_b: "Zhejiang", voltage: "500 kV and above", capacity_mw: 13600 }
    ],
    figureLink: "/dataset_charts/cn_interprovincial_capacity_500kv_above.svg"
  },
  {
    id: "china-guangdong-interprefecture-500kv-network",
    country: "China",
    category: "Transmission",
    name: "China Guangdong Inter-prefecture 500 kV Network",
    featured: false,
    downloadable: false,
    updated: "2025-11-30",
    format: "CSV",
    size: "2 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: cn_gd_inter_perfecture_500kv_network (CC BY 4.0).",
    about: "This dataset describes 500 kV AC transmission lines within Guangdong Province that connect 21 different prefecture-level cities. All lines included are in operation or under construction and form part of Guangdong’s internal high-voltage transmission network. The dataset is intended for academic research, policy analysis, and industry studies, such as regional power flow analysis and grid structure assessment.",
    regionLevel: "Inter-prefecture",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## Data Sources

Data is compiled from publicly available sources, including official grid information, power-sector reports, OpenStreetMap, Google Satellite Imagery, and statistical publications. Manual cross-checking is performed to improve consistency and accuracy.

## Limitations

Capacity values are estimated and may differ from real-time operational limits. In this dataset, maximum transmission capacity is assumed to be 1,200 MW for 500 kV lines.

If you'd like to require a complete methodology for this dataset, please specify it in the request form.
`,
    preview: [
      { province: "Guangdong", prefecture_a: "Chaozhou", prefecture_b: "Shantou", voltage: "500 kV", capacity_mw: 7200, circuits: 6 },
      { province: "Guangdong", prefecture_a: "Dongguan", prefecture_b: "Guangzhou", voltage: "500 kV", capacity_mw: 7200, circuits: 6 },
      { province: "Guangdong", prefecture_a: "Dongguan", prefecture_b: "Huizhou", voltage: "500 kV", capacity_mw: 12000, circuits: 10 }
    ],
    figureLink: "/dataset_charts/cn_gd_inter_prefecture_500kv_network.svg"
  },
  {
    id: "china-east-grid-simulated-hourly-electricity-flow-profiles",
    country: "China",
    category: "Transmission",
    name: "China East Grid Simulated Hourly Electricity Flow Profiles",
    featured: true,
    downloadable: false,
    updated: "2023-06-30",
    format: "CSV",
    size: "6.8 MB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: transmission_flow_hourly_east_china_2022 (CC BY 4.0).",
    about: "This dataset contains inter-provincial simulated hourly electricity flow profiles in East China Power Grid in 2022. The data is generated using TOU schedules, monthly export totals, load shapes, and network constraints.",
    regionLevel: "Inter-provincial",
    frequency: "Hourly",
    dataCoverage: "2022",
    downloadUrl: "",
    methodology: `We developed a toolkit for constructing hourly electricity flow profiles between Chinese provinces using time-of-use (TOU) schedules, monthly export totals, load shapes, and network constraints.

This toolkit computes an hourly time series of interprovincial electricity transmission based on:

- The receiving province's simulated hourly electricity load profile  
- Peak and valley TOU schedules  
- Monthly provincial export totals  
- Transmission line capacity constraints  
- Special routing rules for the East China Power Grid  

You may use this toolkit to:

- Redistribute annual or monthly interprovincial electricity transfers into hourly profiles  
- Simulate TOU-driven transmission patterns  
- Enforce transmission line congestion limits under realistic hourly loading  
- Test the effects of new transmission buildout  
- Replicate or extend East China Power Grid scheduling logic  

If you'd like to require a complete methodology for this dataset, please specify it in the request form.
`,
    preview: [
      {
        from_province: "Anhui",
        to_province: "Jiangsu",
        flow_mwh: 0,
        year: 2022,
        month: 1,
        day: 1,
        hour: 1
      },
      {
        from_province: "Anhui",
        to_province: "Jiangsu",
        flow_mwh: 0,
        year: 2022,
        month: 1,
        day: 1,
        hour: 2
      },
      {
        from_province: "Anhui",
        to_province: "Jiangsu",
        flow_mwh: 0,
        year: 2022,
        month: 1,
        day: 1,
        hour: 3
      },
    ],
    figureLink: "/dataset_charts/cn_east_grid_simulated_hourly_flow_profiles.svg"
  },
];

const chinaREResourceDatasets: Dataset[] = [
  {
    id: "china-wind-monthly-profile",
    country: "China",
    category: "RE Resource Protential",
    name: "China Wind Monthly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
  {
    id: "china-wind-hourly-profile",
    country: "China",
    category: "RE Resource Potential",
    name: "China Wind Hourly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
  {
    id: "china-solar-monthly-profile",
    country: "China",
    category: "RE Resource Potential",
    name: "China Solar Monthly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
  {
    id: "china-solar-hourly-profile",
    country: "China",
    category: "RE Resource Potential",
    name: "China Solar Hourly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const chinaParametersDatasets: Dataset[] = [
  {
    id: "china-coal-price-index",
    country: "China",
    category: "Parameters",
    name: "China Coal Price Indices",
    featured: false,
    downloadable: false,
    updated: "2024-06-30",
    format: "CSV",
    size: "293 KB",
    license: "CC BY 4.0",
    citation: "Data Source: China Coal Transport and Distribution Association, China Coal Economic Research Association; Compiled and Licensed by: Power Transformation Lab (CC BY 4.0).",
    about: "This dataset contains data on several key coal price indices in China, such as BSPI, CCI, and CCTD. The data was collected from multiple data sources, including the China Coal Transport and Distribution Association and the China Coal Economic Research Association. The data is updated every six months, typically in March and September each year.",
    regionLevel: "National",
    frequency: "Weekly",
    dataCoverage: "2007/11-2024/05",
    downloadUrl: "",
    methodology: `## Data Sources

The data is collected from publicly available sources, including the China Coal Transport and Distribution Association (CCTD) and the China Coal Economic Research Association (CCERA).

CCTD is an industry association voluntarily joined by coal producers and distributors nationwide. It regularly publishes coal price indices, including the BSPI (Bohai-Rim Steam Coal Price Index).  
**CCTD:** https://www.cctd.com.cn/

CCERA is a comprehensive social organization in the economic field of China’s coal industry. It regularly compiles and releases coal price indices, including the CCI (China Coal Index).  
**CCERA:** https://ccera.com.cn/web/172/list.html

## Limitations

Users should be aware that the coal price indices currently available do not reach the provincial level. If research requires provincial-level coal price estimates, additional assumptions are needed, including the geographic distribution of coal sources, transportation costs from production areas to ports, and onward delivery to each province.
`,
    preview: [
      {
        fuel_type: "coal",
        index_name: "BSPI | Thermal Coal | Bohai Rim Composite Average Price",
        calorific_grade: "5500K",
        price_rmb_per_ton: 711,
        year: 2024,
        month: 5,
        day: 8
      },
      {
        fuel_type: "coal",
        index_name: "BSPI | Thermal Coal | Bohai Rim Composite Average Price",
        calorific_grade: "5500K",
        price_rmb_per_ton: 712,
        year: 2024,
        month: 4,
        day: 24
      },
      {
        fuel_type: "coal",
        index_name: "BSPI | Thermal Coal | Bohai Rim Composite Average Price",
        calorific_grade: "5500K",
        price_rmb_per_ton: 712,
        year: 2024,
        month: 4,
        day: 17
      },
    ],
    figureLink: "/dataset_charts/cn_coal_price_indices.svg"
  },
  {
    id: "china-gas-price-index",
    country: "China",
    category: "Parameters",
    name: "China Gas Price Indices",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

// India datasets
const indiaDemandDatasets: Dataset[] = [
  {
    id: "india-demand-state-yearly",
    country: "India",
    category: "Demand",
    name: "India State Yearly Power Consumption",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const indiaSupplyDatasets: Dataset[] = [
  {
    id: "india-generator-coal",
    country: "India",
    category: "Supply",
    name: "India Coal Power Generators",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
  {
    id: "india-generation-state-yearly",
    country: "India",
    category: "Supply",
    name: "India State Yearly Electricity Generation",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const indiaTransmissionDatasets: Dataset[] = [
  {
    id: "india-network-765kv",
    country: "India",
    category: "Transmission",
    name: "India 765 kV Power Network",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const indiaREResourceDatasets: Dataset[] = [
  {
    id: "india-solar-state-monthly",
    country: "India",
    category: "RE Resource Potential",
    name: "India Solar State Monthly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const indiaParametersDatasets: Dataset[] = [
  {
    id: "india-coal-price",
    country: "India",
    category: "Parameters",
    name: "India Coal Price",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

// Indonesia datasets
const indonesiaDemandDatasets: Dataset[] = [
  {
    id: "id_prov_historical_consumption",
    country: "Indonesia",
    category: "Demand",
    name: "Indonesia Provincial Historical Electricity Consumption",
    featured: false,
    downloadable: true,
    updated: "2026-03-17",
    format: "CSV",
    size: "7 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_prov_historical_consumption (CC BY 4.0).",
    about: "This dataset contains historical provincial electricity consumption in Indonesia by year, expressed in GWh.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2015-2024",
    downloadUrl: "#",
    methodology: "",
    preview: [
      { province: "Aceh", year: 2015, demand_gwh: 2119 },
      { province: "Aceh", year: 2016, demand_gwh: 2330 },
      { province: "Aceh", year: 2017, demand_gwh: 2409 }
    ],
    figureLink: "/dataset_charts/id_prov_historical_consumption.svg"
  },
  {
    id: "id_prov_projected_demand",
    country: "Indonesia",
    category: "Demand",
    name: "Indonesia Provincial Projected Electricity Demand",
    featured: false,
    downloadable: false,
    updated: "2026-03-17",
    format: "CSV",
    size: "8 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_prov_projected_demand (CC BY 4.0).",
    about: "This dataset contains projected provincial electricity demand in Indonesia by year, expressed in GWh.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2025-2034",
    downloadUrl: "",
    methodology: "",
    preview: [
      { province: "Aceh", year: 2025, demand_gwh: 3844 },
      { province: "Aceh", year: 2026, demand_gwh: 3964 },
      { province: "Aceh", year: 2027, demand_gwh: 4110 }
    ],
    figureLink: "/dataset_charts/id_prov_projected_demand.svg"
  }
];

const indonesiaSupplyDatasets: Dataset[] = [
  {
    id: "id_generators_by_tech",
    country: "Indonesia",
    category: "Supply",
    name: "Indonesia Power Generators by Technology",
    featured: false,
    downloadable: false,
    updated: "2026-03-17",
    format: "CSV",
    size: "60 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_generators_by_tech (CC BY 4.0).",
    about: "This dataset contains power plant records by province, with plant names, installed capacity, operational status, start year, generation technology, and fuel type.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "",
    methodology: "",
    preview: [
      { province: "Jakarta", plant_name: "pltgu_muara_karang_blok_1__2_", capacity_mw: 1074, status: "operating", start_year: null, technology: "ccgt", fuel: "gas" },
      { province: "Jakarta", plant_name: "pltu_muara_karan_4_5_", capacity_mw: 324, status: "operating", start_year: null, technology: "coal", fuel: "coal" },
      { province: "Jakarta", plant_name: "pltgu_muara_karang_blok_3_gt", capacity_mw: 300, status: "operating", start_year: null, technology: "ccgt", fuel: "gas" }
    ],
    figureLink: "/dataset_charts/id_generators_by_tech.svg"
  },
];

const indonesiaTransmissionDatasets: Dataset[] = [
  {
    id: "id_JawaBali_network",
    country: "Indonesia",
    category: "Transmission",
    name: "Indonesia JawaBali Power Network",
    featured: true,
    downloadable: true,
    updated: "2026-03-06",
    format: "CSV",
    size: "476 bytes",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_JawaBali_network (CC BY 4.0).",
    about: "This dataset contains inter-provincial transmission links in the Jawa-Bali power system, including connected province pairs, line voltage levels, and transfer capacity in MW.",
    regionLevel: "Intra-island",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: "",
    preview: [
      { province_a: "Jakarta", province_b: "Banten", voltage: "150 kV", capacity_mw: 3359.41 },
      { province_a: "Jakarta", province_b: "West Java", voltage: "150 kV", capacity_mw: 832.51 },
      { province_a: "Jakarta", province_b: "West Java", voltage: "500 kV", capacity_mw: 6166.77 }
    ],
    figureLink: "/dataset_charts/id_JawaBali_network.svg"
  },
  {
    id: "id_Kalimantan_network",
    country: "Indonesia",
    category: "Transmission",
    name: "Indonesia Kalimantan Power Network",
    featured: true,
    downloadable: true,
    updated: "2026-03-06",
    format: "CSV",
    size: "331 bytes",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_Kalimantan_network (CC BY 4.0).",
    about: "This dataset contains inter-provincial transmission links in the Kalimantan power system, with province-to-province connections, voltage classes, and line capacity values.",
    regionLevel: "Intra-island",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: "",
    preview: [
      { province_a: "West Kalimantan", province_b: "Central Kalimantan", voltage: "150 kV", capacity_mw: 105.29 },
      { province_a: "South Kalimantan", province_b: "Central Kalimantan", voltage: "150 kV", capacity_mw: 342.39 },
      { province_a: "South Kalimantan", province_b: "East Kalimantan", voltage: "150 kV", capacity_mw: 249.14 }
    ],
    figureLink: "/dataset_charts/id_Kalimantan_network.svg"
  },
  {
    id: "id_Sulawesi_network",
    country: "Indonesia",
    category: "Transmission",
    name: "Indonesia Sulawesi Power Network",
    featured: true,
    downloadable: true,
    updated: "2026-03-06",
    format: "CSV",
    size: "353 bytes",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_Sulawesi_network (CC BY 4.0).",
    about: "This dataset contains inter-provincial transmission links in the Sulawesi power system, reporting endpoint provinces, voltage levels, and transmission capacity in MW.",
    regionLevel: "Intra-island",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: "",
    preview: [
      { province_a: "North Sulawesi", province_b: "Gorontalo", voltage: "150 kV", capacity_mw: 301.46 },
      { province_a: "Gorontalo", province_b: "Central Sulawesi", voltage: "150 kV", capacity_mw: 203.04 },
      { province_a: "Central Sulawesi", province_b: "South Sulawesi", voltage: "275 kV", capacity_mw: 879.06 }
    ],
    figureLink: "/dataset_charts/id_Sulawesi_network.svg"
  },
  {
    id: "id_Sumatera_network",
    country: "Indonesia",
    category: "Transmission",
    name: "Indonesia Sumatera Power Network",
    featured: true,
    downloadable: true,
    updated: "2026-03-06",
    format: "CSV",
    size: "666 bytes",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: id_Sumatera_network (CC BY 4.0).",
    about: "This dataset contains inter-provincial transmission links in the Sumatera power system, including connected provinces, line voltages, and capacity for each network segment.",
    regionLevel: "Intra-island",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: "",
    preview: [
      { province_a: "Aceh", province_b: "North Sumatra", voltage: "275 kV", capacity_mw: 322.83 },
      { province_a: "Aceh", province_b: "North Sumatra", voltage: "150 kV", capacity_mw: 288.15 },
      { province_a: "North Sumatra", province_b: "Riau", voltage: "500 kV", capacity_mw: 994.48 }
    ],
    figureLink: "/dataset_charts/id_Sumatera_network.svg"
  },
];

const indonesiaREResourceDatasets: Dataset[] = [
  {
    id: "indonesia-solar-regional-monthly",
    country: "Indonesia",
    category: "RE Resource Potential",
    name: "Indonesia Solar Regional Monthly Profile",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const indonesiaParametersDatasets: Dataset[] = [
  {
    id: "indonesia-coal-price",
    country: "Indonesia",
    category: "Parameters",
    name: "Indonesia Coal Price",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

// Vietnam datasets
const vietnamDemandDatasets: Dataset[] = [
  {
    id: "vietnam-demand-regional-yearly",
    country: "Vietnam",
    category: "Demand",
    name: "Vietnam Regional Annual Electricity Consumption",
    featured: false,
    downloadable: true,
    updated: "2026-02-15",
    format: "CSV",
    size: "1 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_regional_annual_consumption (CC BY 4.0).",
    about: "This dataset contains Vietnam zonal annual electricity demand projections derived from regional load profiles, sourced from Vietnam's Eighth Power Development Plan (PDP8).",
    regionLevel: "Zonal",
    frequency: "Annual",
    dataCoverage: "2030-2050",
    downloadUrl: "#",
    methodology: `## 1. Vietnam Regional Annual Electricity Consumption

### Source

Vietnam's Eighth Power Development Plan (PDP8, Decision No. 500/QD-TTg, May 2023; revised Decision 768/QD-TTg, April 2025), with demand projections derived from regional load profiles.

### Methodology

- Hourly demand profiles for 6 zones constructed from PDP8 load growth projections  
- The model uses **36 representative days** (3 per month: 1 weekday, 1 weekend, 1 peak) Ã— 24 hours \= 864 model hours  
- Each representative day carries a **sample weight** reflecting how many real hours it represents (sum \= 8,760 hours/year)  
- Projections cover 5-year intervals: 2030, 2035, 2040, 2045, 2050

### Demand Summary

| Year | Total (TWh) |
| :---- | :---- |
| 2030 | 550.9 |
| 2035 | 726.9 |
| 2040 | 864.0 |
| 2045 | 975.8 |
| 2050 | 1,092.5 |

### Zone Definitions

| Zone | Code | Region | Provinces |
| :---- | :---- | :---- | :---- |
| 1 | BB | North (Bắc Bộ) | Ha Noi, Hai Phong, Quang Ninh, Hai Duong, Thai Binh, Nam Dinh, Ninh Binh, Hung Yen, Bac Ninh, Ha Nam, Bac Giang, Thai Nguyen, Lang Son, Cao Bang, Bac Kan, Tuyen Quang, Ha Giang, Phu Tho, Vinh Phuc, Lao Cai, Yen Bai, Son La, Lai Chau, Dien Bien, Hoa Binh (25 provinces) |
| 2 | BTB | North Central (Bắc Trung Bộ) | Thanh Hoa, Nghe An, Ha Tinh, Quang Binh |
| 3 | TTB | Central (Trung Trung Bộ) | Quang Tri, Thua Thien Hue, Da Nang, Quang Nam, Quang Ngai |
| 4 | TN | Central Highlands (Tây Nguyên) | Kon Tum, Gia Lai, Dak Lak, Dak Nong |
| 5 | NTB | South Central (Nam Trung Bộ) | Binh Dinh, Phu Yen, Khanh Hoa, Lam Dong, Ninh Thuan, Binh Thuan |
| 6 | NB | South (Nam Bộ) | TP HCM, Dong Nai, Ba Ria-Vung Tau, Binh Duong, Binh Phuoc, Tay Ninh, Long An, Tien Giang, Ben Tre, Dong Thap, An Giang, Vinh Long, Tra Vinh, Can Tho, Hau Giang, Soc Trang, Kien Giang, Bac Lieu, Ca Mau (19 provinces) |

### Regional Structure

PDP8 defines three planning regions with the following demand shares (2030):

| PDP8 Region | Share | Demand (TWh) | Constituent Zones |
| :---- | :---- | :---- | :---- |
| North | 43.7% | 241.0 | BB \\+ BTB (Zones 1-2) |
| Central | 10.4% | 57.0 | TTB \\+ TN (Zones 3-4) |
| South | 45.9% | 252.9 | NTB \\+ NB (Zones 5-6) |

We decompose these 3 PDP8 regions into **6 model zones** per PDP8's subregional planning structure. The northern region splits into BB (northern core) and BTB (north-central coast), the central region separates TTB (coastal) from TN (highlands), and the southern region divides into NTB (south-central coast) and NB (southeast \\+ Mekong Delta). Provincial demand within each PDP8 region is allocated proportionally across its constituent zones.

### Notes

- Peak system demand (2030): 83.4 GW`,
    preview: [
      { zone: "BB", zone_number: 1, zone_en: "North", zone_vn: "Bắc Bộ", year: 2030, demand_gwh: 207137.2 },
      { zone: "BTB", zone_number: 2, zone_en: "North Central", zone_vn: "Bắc Trung Bộ", year: 2030, demand_gwh: 33858.2 },
      { zone: "TTB", zone_number: 3, zone_en: "Central", zone_vn: "Trung Trung Bộ", year: 2030, demand_gwh: 36222 }
    ],
    figureLink: "/dataset_charts/vn_regional_annual_consumption.svg"
  },
];

const vietnamSupplyDatasets: Dataset[] = [
  {
    id: "vietnam-generator-coal",
    country: "Vietnam",
    category: "Supply",
    name: "Vietnam Coal Power Generators",
    featured: false,
    downloadable: false,
    updated: "2026-02-17",
    format: "CSV",
    size: "3 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_coal_power_generators (CC BY 4.0).",
    about: "This dataset contains Vietnam coal power plant data, sourced from Global Energy Monitor (GEM) .",
    regionLevel: "Zonal",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## 2. Vietnam Coal Power Generators

### Source

Global Energy Monitor (GEM) Global Coal Plant Tracker, January 2024 snapshot, filtered to Vietnam.

### Methodology

1. Raw plant-level data from GEM coal plant tracker (74 individual units)  
2. Units filtered to operating \\+ under-construction status; units with GEM status "risky" or "retired" excluded  
3. Units aggregated to plant level (one entry per plant), preserving total capacity  
4. Technology classifications: subcritical, supercritical, ultra-supercritical, CFB (circulating fluidized bed)  
5. Fuel types: anthracite (domestic, northern Vietnam), bituminous (imported, southern Vietnam), lignite

### Capacity Summary

- **Total: 30.0 GW** (74 individual units → 33 plant entries)  
- Plants with multiple combustion technologies are listed as separate entries

### Data Fields

- \`plant_name\`: Power plant name  
- \`capacity_mw\`: Total installed capacity of the plant  
- \`units\`: Number of individual generating units  
- \`unit_capacity_mw\`: Average unit capacity  
- \`status\`: "operating" = committed/existing  
- \`technology\`: Combustion technology classification  
- \`fuel\`: Primary fuel type

### Reference

- Global Energy Monitor, "Global Coal Plant Tracker", January 2024  
- GEM methodology: https://globalenergymonitor.org/projects/global-coal-plant-tracker/`,
    preview: [
      { type: "coal", zone_en: "North", plant_name: "Mong Duong power station", capacity_mw: 2320, status: "operating", technology: "subcritical", fuel: "anthracite", units: 4, unit_capacity_mw: 580 },
      { type: "coal", zone_en: "North", plant_name: "Hai Duong Thermal Power Plant", capacity_mw: 1200, status: "operating", technology: "unknown", fuel: "anthracite", units: 2, unit_capacity_mw: 600 },
      { type: "coal", zone_en: "North", plant_name: "Hai Phong Thermal Power Station", capacity_mw: 1200, status: "operating", technology: "subcritical", fuel: "anthracite", units: 4, unit_capacity_mw: 300 },
    ],
    figureLink: "/dataset_charts/vn_coal_power_generators.svg"
  },
];

const vietnamTransmissionDatasets: Dataset[] = [
  {
    id: "vietnam-network-500kv",
    country: "Vietnam",
    category: "Transmission",
    name: "Vietnam 500 kV Power Network",
    featured: true,
    downloadable: true,
    updated: "2026-02-17",
    format: "CSV",
    size: "3 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_500kv_power_network (CC BY 4.0).",
    about: "This dataset contains Vietnam 500 kV power network lines (existing, operational by 2025), sourced from PDP8 Draft Table 4.",
    regionLevel: "Interzonal and Intrazonal",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## 4. Vietnam 500 kV Power Network

### Source

PDP8 Draft Table 4, validated transmission line dataset.

### Methodology

- 47 validated 500 kV transmission line segments (operational by 2025)  
- Filtered by voltage (500 kV) and status (Existing_2025) from a larger dataset containing 355 500 kV lines and 1,308 additional 220 kV lines  
- 15 interzone lines crossing zone boundaries

### Interzone Connections

| Zone Pair | Lines |
| :---- | ----: |
| 1 ↔ 2 | 3 |
| 2 ↔ 3 | 3 |
| 3 ↔ 4 | 3 |
| 4 ↔ 5 | 2 |
| 4 ↔ 6 | 2 |
| 5 ↔ 6 | 2 |

### Data Fields

- \`line_id\`: Unique line segment identifier  
- \`substation_a/b\`: Endpoint substations`,
    preview: [
      { line_id: "T_500_01039", substation_a: "Hòa Bình", substation_b: "Nho Quan", province_a: "Hoa Binh", province_b: "Ninh Binh", voltage: "500 kV", count: 1 },
      { line_id: "T_500_01040", substation_a: "Nho Quan", substation_b: "Nghi Sơn", province_a: "Ninh Binh", province_b: "Thanh Hoa", voltage: "500 kV", count: 1 },
      { line_id: "T_500_01041", substation_a: "Nghi Sơn", substation_b: "Hà Tĩnh", province_a: "Thanh Hoa", province_b: "Ha Tinh", voltage: "500 kV", count: 1 }
    ],
    figureLink: "/dataset_charts/vn_500kv_power_network.svg"
  },
  {
    id: "vietnam-500kv-substations",
    country: "Vietnam",
    category: "Transmission",
    name: "Vietnam 500 kV Substations",
    featured: true,
    downloadable: true,
    updated: "2026-02-17",
    format: "CSV",
    size: "4 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_500kv_substations (CC BY 4.0).",
    about: "This dataset contains Vietnam 500 kV substations (existing, operational by 2025), sourced from the PDP8 transmission annex.",
    regionLevel: "Zonal",
    frequency: "Annual",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## 3. Vietnam 500 kV Substations

### Source

PDP8 transmission planning annex.

### Methodology

- 52 existing 500 kV substations extracted from the validated substation profile dataset  
- Substations filtered by voltage rating (500 kV) and operational status (existing by 2025)  
- Each substation includes province location and zone assignment

### Zone Distribution

| Zone | Substations |
| :---- | :---- |
| 1 (North) | 13 |
| 2 (North Central) | 5 |
| 3 (Central) | 4 |
| 4 (Central Highlands) | 8 |
| 5 (South Central) | 4 |
| 6 (South) | 18 |
| **Total** | **52** |

### Data Fields

- \`sub_id\`: Unique substation identifier  
- \`name\`: Short substation name (Vietnamese)  
- \`name_full\`: Full official name  
- \`province\`: Province location  
- \`zone\`: Model zone (1-6)  
- \`voltage_kv\`: Voltage rating (all 500 kV)  
- \`status\`: "existing" (operational)

### Network-Referenced Substations

The 500 kV power network (Section 4) references 10 additional substations as transmission line endpoints that are not included in the substations dataset: NĐ Nam Định (Nam Dinh), Bắc Ninh 2 (Bac Ninh), Cần Thơ (Can Tho), Củ Chi (TP HCM), Lào Cai (Lao Cai), Mỹ Phước (Binh Duong), Quỳnh Lưu (Nghe An), Sóc Trăng (Soc Trang), Thái Nguyên (Thai Nguyen), and Vĩnh Yên (Vinh Phuc).`,
    preview: [
      { sub_id: 1684, name: "Quảng Ninh", name_full: "Trạm biến áp 500kV Quảng Ninh", province: "Quang Ninh", zone_number: 1, voltage: "500 kV", status: "existing", count: 1 },
      { sub_id: 1685, name: "NĐ Vũng Áng", name_full: "Trạm biến áp 500kV NĐ Vũng Áng", province: "Ha Tinh", zone_number: 2, voltage: "500 kV", status: "existing", count: 1 },
      { sub_id: 1686, name: "Ia Blứ", name_full: "Trạm biến áp 500kV Ia Blứ", province: "Gia Lai", zone_number: 4, voltage: "500 kV", status: "existing", count: 1 }
    ],
    figureLink: "/dataset_charts/vn_500kv_substations.svg"
  },
];

const vietnamREResourceDatasets: Dataset[] = [
  {
    id: "vietnam-wind-regional-monthly",
    country: "Vietnam",
    category: "RE Resource Potential",
    name: "Vietnam Wind Regional Monthly Profile",
    featured: true,
    downloadable: false,
    updated: "2026-02-17",
    format: "CSV",
    size: "3 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_wind_regional_monthly_profile (CC BY 4.0).",
    about: "This dataset contains Vietnam onshore wind capacity factors from Renewables.ninja, aggregated to model zones by capacity-weighted averaging.",
    regionLevel: "Zonal",
    frequency: "Monthly",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodology: `## 5. Vietnam Wind Regional Monthly Profile

### Source

Onshore wind capacity factors from Renewables.ninja, aggregated to model zones by capacity-weighted averaging.

### Methodology

1. Hourly CFs downloaded from Renewables.ninja for 71 existing/planned onshore wind farm locations  
2. For each zone, CFs aggregated using capacity-weighted averages across all plants in that zone  
3. Monthly averages computed from all hours in each calendar month

### Zone Wind Resource Summary

| Zone | Annual CF |
| :---- | :---- |
| BB | 20.4% |
| BTB | 22.7% |
| TTB | 19.5% |
| TN | 15.8% |
| NTB | 28.9% |
| NB | 34.4% |

### References

- Renewables.ninja (ERA5 reanalysis)  
- Build-out locations: GEM Global Wind Power Tracker, June 2024`,
    preview: [
      { zone: "BB", zone_en: "North", zone_vn: "Bắc Bộ", month: 1, wind_type: "onshore", capacity_factor: 0.2111 },
      { zone: "BB", zone_en: "North", zone_vn: "Bắc Bộ", month: 2, wind_type: "onshore", capacity_factor: 0.2026 },
      { zone: "BB", zone_en: "North", zone_vn: "Bắc Bộ", month: 3, wind_type: "onshore", capacity_factor: 0.1173 }
    ],
    figureLink: "/dataset_charts/vn_wind_regional_monthly_profile.svg"
  },
];

const vietnamParametersDatasets: Dataset[] = [
  {
    id: "vietnam-coal-import-price",
    country: "Vietnam",
    category: "Parameters",
    name: "Vietnam Coal Import Price",
    featured: false,
    downloadable: true,
    updated: "2026-02-15",
    format: "CSV",
    size: "6 KB",
    license: "CC BY 4.0",
    citation: "Author: Power Transformation Lab; Title: vn_coal_import_price (CC BY 4.0).",
    about: "This dataset contains Newcastle FOB thermal coal benchmark, sourced from World Bank Commodity Price Data (Pink Sheet), via IndexMundi.",
    regionLevel: "National",
    frequency: "Monthly",
    dataCoverage: "2019/01-2025/02",
    downloadUrl: "#",
    methodology: `## 6. Vietnam Coal Import Price

### Source

World Bank Commodity Price Data (Pink Sheet), via IndexMundi.

### Methodology

- Newcastle FOB thermal coal benchmark (Australia), 6,000 kcal/kg specification  
- Monthly prices in USD/metric ton, 2019-2025  
- Newcastle FOB is the standard Asia-Pacific benchmark for seaborne thermal coal  
- Vietnam imports coal primarily from Australia (~50%) and Indonesia (~35%) for power generation

### Notes

- This is a **benchmark proxy**, not Vietnam-specific import prices  
- Vietnam's actual CIF import prices are typically 5-15% higher than Newcastle FOB (includes freight/insurance)  
- Indonesia HBA (Harga Batubara Acuan, 6,322 kcal/kg) is an alternative regional benchmark  
- The model uses a fuel cost of $3.73/MMBTU (~$89/ton at 6,000 kcal/kg), consistent with the IEA 2017-2019 Newcastle FOB baseline

### Reference

- World Bank, "Commodity Markets Outlook" (Pink Sheet)  
- IndexMundi: https://www.indexmundi.com/commodities/?commodity=coal-australian  
- FRED: Global Price of Coal, Australia (PCOALAUUSDM)  
- IEA, "Coal 2025 â€” Prices and Costs"`,
    preview: [
      { fuel_type: "coal", index_name: "Newcastle FOB | Thermal Coal | Australian Export Benchmark", calorific_grade: "6000K", price_usd_per_ton: 98.56, year: 2019, month: 1 },
      { fuel_type: "coal", index_name: "Newcastle FOB | Thermal Coal | Australian Export Benchmark", calorific_grade: "6000K", price_usd_per_ton: 95.42, year: 2019, month: 2 },
      { fuel_type: "coal", index_name: "Newcastle FOB | Thermal Coal | Australian Export Benchmark", calorific_grade: "6000K", price_usd_per_ton: 93.12, year: 2019, month: 3 }
    ],
    figureLink: "/dataset_charts/vn_coal_import_price.svg"
  },
];

// Other Country datasets
const otherCountryDemandDatasets: Dataset[] = [
  {
    id: "other-countries-demand-yearly",
    country: "Other Countries",
    category: "Demand",
    name: "Other Countries Yearly Power Consumption",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const otherCountrySupplyDatasets: Dataset[] = [
  {
    id: "other-countries-capacity-yearly",
    country: "Other Countries",
    category: "Supply",
    name: "Other Country Yearly Installed Capacity",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const otherCountryTransmissionDatasets: Dataset[] = [
  {
    id: "other-countries-interconnection",
    country: "Other Countries",
    category: "Transmission",
    name: "Other Country Interconnection Network",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const otherCountryREResourceDatasets: Dataset[] = [
  {
    id: "other-countries-solar-country-potential",
    country: "Other Countries",
    category: "RE Resource Potential",
    name: "Other Countries Solar Potential",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

const otherCountryParametersDatasets: Dataset[] = [
  {
    id: "other-countries-lng-price",
    country: "Other Countries",
    category: "Parameters",
    name: "Other Country LNG Price",
    featured: false,
    downloadable: false,
    updated: "",
    format: "CSV",
    size: "",
    license: "CC BY 4.0",
    citation: "",
    about: "",
    regionLevel: "",
    frequency: "",
    dataCoverage: "",
    downloadUrl: "",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      {},
      {},
      {}
    ],
    figureLink: "",
    inPreparation: true,
  },
];

//todo: remove mock functionality
export const Countries: Country[] = [
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    datasetCount: 21,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: chinaDemandDatasets,
      },
      {
        id: "supply",
        name: "Supply",
        icon: "Zap",
        datasets: chinaSupplyDatasets,
      },
      {
        id: "transmission",
        name: "Transmission",
        icon: "Network",
        datasets: chinaTransmissionDatasets,
      },
      {
        id: "re-resource",
        name: "RE Resource Potential",
        icon: "Sun",
        datasets: chinaREResourceDatasets,
      },
      {
        id: "parameters",
        name: "Parameters",
        icon: "DollarSign",
        datasets: chinaParametersDatasets,
      },
    ],
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    datasetCount: 6,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: indiaDemandDatasets,
      },
      {
        id: "supply",
        name: "Supply",
        icon: "Zap",
        datasets: indiaSupplyDatasets,
      },
      {
        id: "transmission",
        name: "Transmission",
        icon: "Network",
        datasets: indiaTransmissionDatasets,
      },
      {
        id: "re-resource",
        name: "RE Resource Potential",
        icon: "Sun",
        datasets: indiaREResourceDatasets,
      },
      {
        id: "parameters",
        name: "Parameters",
        icon: "DollarSign",
        datasets: indiaParametersDatasets,
      },
    ],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    datasetCount: 9,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: indonesiaDemandDatasets,
      },
      {
        id: "supply",
        name: "Supply",
        icon: "Zap",
        datasets: indonesiaSupplyDatasets,
      },
      {
        id: "transmission",
        name: "Transmission",
        icon: "Network",
        datasets: indonesiaTransmissionDatasets,
      },
      {
        id: "re-resource",
        name: "RE Resource Potential",
        icon: "Sun",
        datasets: indonesiaREResourceDatasets,
      },
      {
        id: "parameters",
        name: "Parameters",
        icon: "DollarSign",
        datasets: indonesiaParametersDatasets,
      },
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    datasetCount: 6,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: vietnamDemandDatasets,
      },
      {
        id: "supply",
        name: "Supply",
        icon: "Zap",
        datasets: vietnamSupplyDatasets,
      },
      {
        id: "transmission",
        name: "Transmission",
        icon: "Network",
        datasets: vietnamTransmissionDatasets,
      },
      {
        id: "re-resource",
        name: "RE Resource Potential",
        icon: "Sun",
        datasets: vietnamREResourceDatasets,
      },
      {
        id: "parameters",
        name: "Parameters",
        icon: "DollarSign",
        datasets: vietnamParametersDatasets,
      },
    ],
  },
  {
    id: "other",
    name: "Other Countries",
    flag: "🌏",
    datasetCount: 5,
    categories: [
      {
        id: "demand",
        name: "Demand",
        icon: "TrendingUp",
        datasets: otherCountryDemandDatasets,
      },
      {
        id: "supply",
        name: "Supply",
        icon: "Zap",
        datasets: otherCountrySupplyDatasets,
      },
      {
        id: "transmission",
        name: "Transmission",
        icon: "Network",
        datasets: otherCountryTransmissionDatasets,
      },
      {
        id: "re-resource",
        name: "RE Resource Potential",
        icon: "Sun",
        datasets: otherCountryREResourceDatasets,
      },
      {
        id: "parameters",
        name: "Parameters",
        icon: "DollarSign",
        datasets: otherCountryParametersDatasets,
      },
    ],
  },
];

//todo: remove mock functionality
export const powerDatasets: Dataset[] = [
  ...chinaDemandDatasets,
  ...chinaSupplyDatasets,
  ...chinaTransmissionDatasets,
  ...chinaREResourceDatasets,
  ...chinaParametersDatasets,
  ...indiaDemandDatasets,
  ...indiaSupplyDatasets,
  ...indiaTransmissionDatasets,
  ...indiaREResourceDatasets,
  ...indiaParametersDatasets,
  ...indonesiaDemandDatasets,
  ...indonesiaSupplyDatasets,
  ...indonesiaTransmissionDatasets,
  ...indonesiaREResourceDatasets,
  ...indonesiaParametersDatasets,
  ...vietnamDemandDatasets,
  ...vietnamSupplyDatasets,
  ...vietnamTransmissionDatasets,
  ...vietnamREResourceDatasets,
  ...vietnamParametersDatasets,
  ...otherCountryDemandDatasets,
  ...otherCountrySupplyDatasets,
  ...otherCountryTransmissionDatasets,
  ...otherCountryREResourceDatasets,
  ...otherCountryParametersDatasets,
];
