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
    figureLink: "/dataset_charts/china-provincial-annual-load.svg"
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
    figureLink: "/dataset_charts/china-provincial-monthly-load.svg"
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
    figureLink: "/dataset_charts/china-provincial-hourly-load.svg"
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
    figureLink: "/dataset_charts/china-generators-by-tech.svg"
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
    figureLink: "/dataset_charts/china-prov-annual-generation-by-tech.svg"
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
    size: "1.1 MB",
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
    figureLink: "/dataset_charts/china-prov-monthly-generation-by-tech.svg"
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
    size: "49 KB",
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
      { technology: "hydro", province: "All Provinces", year: 2024, cumulative_capacity_gw: 435.95 },
      { technology: "hydro", province: "Anhui", year: 2024, cumulative_capacity_gw: 6.19 },
      { technology: "hydro", province: "Beijing", year: 2024, cumulative_capacity_gw: 1.01 },
    ],
    figureLink: "/dataset_charts/china-prov-annual-capacity-by-tech.svg"
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
    size: "114 KB",
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
      { province: "All Provinces", year: 2024, pv_type: "New Residential PV", capacity_gw: 29.55 },
      { province: "All Provinces", year: 2024, pv_type: "New Non-Residential PV", capacity_gw: 88.63 },
      { province: "All Provinces", year: 2024, pv_type: "New Installed Capacity", capacity_gw: 277.57 },
    ],
    figureLink: "/dataset_charts/china-prov-annual-solar-pv-capacity-by-type.svg"
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
    size: "29 KB",
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
      { province: "All Provinces", year: 2025, month: 7, cumulative_capacity_gw: 1109.6 },
      { province: "Anhui", year: 2025, month: 7, cumulative_capacity_gw: 53.96 },
      { province: "Beijing", year: 2025, month: 7, cumulative_capacity_gw: 1.86 },
    ],
    figureLink: "/dataset_charts/china-prov-monthly-solar-pv-capacity.svg"
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
    size: "29 KB",
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
      { province: "All Provinces", year: 2025, month: 7, cumulative_capacity_gw: 574.86 },
      { province: "Anhui", year: 2025, month: 7, cumulative_capacity_gw: 10.39 },
      { province: "Beijing", year: 2025, month: 7, cumulative_capacity_gw: 0.23 },
    ],
    figureLink: "/dataset_charts/china-prov-monthly-wind-capacity.svg"
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
    size: "14 KB",
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
      {
        type: "DC",
        voltage: "±1100 kV",
        name: "Ji-Quan HVDC",
        name_local: "吉泉直流",
        name_full: "Zhundong - Southern Anhui ±1100 kV UHVDC",
        name_full_local: "准东-皖南±1100千伏特高压直流输电工程",
        province_1: "Xinjiang",
        province_2: "Anhui",
        province_3: null,
        province_4: null,
        commissioning_date: "2019-07-01",
        rated_capacity_mw: 12000,
        rated_capacity_source: "Reported",
        length_km: 3324
      },
      {
        type: "DC",
        voltage: "±800 kV (multi terminal)",
        name: "Lu=Gao-hao HVDC (Gao-Zhao Section)",
        name_local: "禄高肇直流（高肇段）",
        name_full: "Luquan (Yunnan) - Gaopo (Guizhou) - Zhaoqing (Guangdong) Three-terminal HVDC (Gao-Zhao Section)",
        name_full_local: "云南禄劝换流站-贵州高坡换流站-广东肇庆换流站三端直流（高肇段）",
        province_1: "Guizhou",
        province_2: "Guangdong",
        province_3: null,
        province_4: null,
        commissioning_date: "2004-09-24",
        rated_capacity_mw: 3000,
        rated_capacity_source: "Reported",
        length_km: 1277
      },
      {
        type: "DC",
        voltage: "±800 kV (multi terminal)",
        name: "Lu-Gao-Zhao HVDC (Lu-Gao Section)",
        name_local: "禄高肇直流（禄高段）",
        name_full: "Luquan (Yunnan) - Gaopo (Guizhou) - Zhaoqing (Guangdong) Three-terminal HVDC (Lu-Gao Section)",
        name_full_local: "云南禄劝换流站-贵州高坡换流站-广东肇庆换流站三端直流（禄高段）",
        province_1: "Yunnan",
        province_2: "Guizhou",
        province_3: null,
        province_4: null,
        commissioning_date: "2020-06-11",
        rated_capacity_mw: 3000,
        rated_capacity_source: "Reported",
        length_km: 389
      },
    ],
    figureLink: "/dataset_charts/cn_ehv_uhv_dc_uhv_ac_lines.png"
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
    figureLink: "/dataset_charts/cn_interprovincial_500kv_750kv_network.png"
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
    size: "2 KB",
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
      {
        province_a: "Anhui",
        province_b: "Jiangsu",
        capacity_mw: 14800
      },
      {
        province_a: "Anhui",
        province_b: "Xinjiang",
        capacity_mw: 12000
      },
      {
        province_a: "Anhui",
        province_b: "Zhejiang",
        capacity_mw: 13600
      },
    ],
    figureLink: "/dataset_charts/cn_interprovincial_capacity_500kv_above.png"
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
      {
        province: "Guangdong",
        prefecture_a: "Chaozhou",
        prefecture_b: "to_prefecture",
        voltage: "500 kV",
        capacity_mw: 7200,
        circuits: 6
      },
      {
        province: "Guangdong",
        prefecture_a: "Dongguan",
        prefecture_b: "Guangzhou",
        voltage: "500 kV",
        capacity_mw: 7200,
        circuits: 6
      },
      {
        province: "Guangdong",
        prefecture_a: "Dongguan",
        prefecture_b: "Huizhou",
        voltage: "500 kV",
        capacity_mw: 12000,
        circuits: 10
      },
    ],
    figureLink: "/dataset_charts/cn_gd_inter_perfecture_500kv_network.png"
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
    figureLink: "/dataset_charts/china-coal-price-indices.svg"
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
    id: "indonesia-demand-regional-yearly",
    country: "Indonesia",
    category: "Demand",
    name: "Indonesia Regional Yearly Power Consumption",
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

const indonesiaSupplyDatasets: Dataset[] = [
  {
    id: "indonesia-generator-coal",
    country: "Indonesia",
    category: "Supply",
    name: "Indonesia Coal Power Generators",
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

const indonesiaTransmissionDatasets: Dataset[] = [
  {
    id: "indonesia-network-500kv",
    country: "Indonesia",
    category: "Transmission",
    name: "Indonesia 500 kV Power Network",
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
    name: "Vietnam Regional Yearly Power Consumption",
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

const vietnamSupplyDatasets: Dataset[] = [
  {
    id: "vietnam-generator-coal",
    country: "Vietnam",
    category: "Supply",
    name: "Vietnam Coal Power Generators",
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

const vietnamTransmissionDatasets: Dataset[] = [
  {
    id: "vietnam-network-500kv",
    country: "Vietnam",
    category: "Transmission",
    name: "Vietnam 500 kV Power Network",
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

const vietnamREResourceDatasets: Dataset[] = [
  {
    id: "vietnam-wind-regional-monthly",
    country: "Vietnam",
    category: "RE Resource Potential",
    name: "Vietnam Wind Regional Monthly Profile",
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

const vietnamParametersDatasets: Dataset[] = [
  {
    id: "vietnam-coal-import-price",
    country: "Vietnam",
    category: "Parameters",
    name: "Vietnam Coal Import Price",
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
    datasetCount: 19,
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
    datasetCount: 5,
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
    datasetCount: 5,
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
