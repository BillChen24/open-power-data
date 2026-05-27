import type { Country, DataCategory, Dataset } from "@shared/schema";
import { c, l } from "node_modules/vite/dist/node/types.d-aGj9QkWt";


const chinaDemandDatasets: Dataset[] = [
  {
    id: "china-demand-provincial-yearly",
    country: "China",
    category: "Demand",
    name: "China Provincial Annual Electricity Consumption",
    featured: false,
    downloadable: true,
    updated: "2025-06-30",
    format: "CSV",
    size: "22 KB",
    license: "CC BY 4.0",
    citation: "This dataset contains China provincial annual electricity consumption data. The data is collected from the National Bureau of Statistics of China (NBS).",
    about: "This dataset contains China provincial annual electricity consumption data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1995-2024",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1JQ6JW0BaA6D5KkVT1G75PfMH8y10SeJz",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial monthly electricity consumption data. The data is collected from Dianchacha.",
    about: "This dataset contains China provincial monthly electricity consumption data. The data is collected from Dianchacha. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2020/02-2025/06",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_prov_monthly_consumption.svg"
  },
  {
    id: "china-demand-provincial-hourly-simulated",
    country: "China",
    category: "Demand",
    name: "China Provincial Simulated Hourly Electricity Load Profiles (2022)",
    featured: true,
    downloadable: false,
    updated: "2026-04-30",
    format: "CSV",
    size: "11.4 MB",
    license: "CC BY 4.0",
    citation: "Power TransfPower Transformation Lab. (2026). China Provincial Simulated Hourly Electricity Load Profiles (2022) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains China provincial simulated hourly electricity load profiles in 2022. The data is generated based on China provincial monthly electricity consumption data, combined with typical load curves of each provincial power grid.",
    regionLevel: "Provincial",
    frequency: "Hourly",
    dataCoverage: "2022",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1nEKYAkXl17uXhoF4atPvyHNTkvYy-pQh/view?usp=drive_link",
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
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 1, load_mw: 32835.8016 },
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 2, load_mw: 30861.72566 },
      { province: "Anhui", year: 2022, month: 1, day: 1, hour: 3, load_mw: 29683.65695 },
    ],
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      // { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      // { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      // { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      // { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      // { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_prov_simulated_hourly_load_profiles.svg"
  },
  {
    id: "china-demand-provincial-hourly-simulated-2030-2035",
    country: "China",
    category: "Demand",
    name: "China Provincial Simulated Hourly Electricity Load Profiles (2030/2035)",
    featured: true,
    downloadable: false,
    updated: "2026-04-30",
    format: "CSV",
    size: "5.9 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Provincial Simulated Hourly Electricity Load Profiles (2030/2035) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains China provincial simulated hourly electricity load profiles in 2030/2035.",
    regionLevel: "Provincial",
    frequency: "Hourly",
    dataCoverage: "2030/2035",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/17GizISzvUWCB7o7YfMq6JrYT_TyfA1N8/view?usp=drive_link",
    methodology: "Methodology for China Provincial Hourly Electricity Load in 2030/2035",
    preview: [
      { hour: "hour", demand_gw: "demand_gw" },
      { hour: 0, demand_gw: 73.37542512778239 },
      { hour: 1, demand_gw: 71.37151126128461 },
    ],
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
    ],
    figureLink: "/dataset_charts/cn_prov_hourly_load_2030_2035.png"
  },
  {
    id: "china-east-grid-hourly-load-2030",
    country: "China",
    category: "Demand",
    name: "China East Grid Simulated Hourly Electricity Load Profiles (2030)",
    featured: true,
    downloadable: false,
    updated: "2026-04-30",
    format: "CSV",
    size: "127 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China East Grid Simulated Hourly Electricity Load Profiles (2030) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains simulated hourly electricity load profiles for each province in the China East Grid covering the period from July 1, 2030 to September 22, 2030.",
    regionLevel: "Provincial",
    frequency: "Hourly",
    dataCoverage: "2030/07/01-2030/09/22",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1nEKYAkXl17uXhoF4atPvyHNTkvYy-pQh/view?usp=drive_link",
    methodology: "Methodology for China Simulated Hourly Electricity Load Profiles",
    preview: [
      { datetime: "datetime", Shanghai: "Shanghai", Jiangsu: "Jiangsu", Zhejiang: "Zhejiang", Anhui: "Anhui", Fujian: "Fujian" },
      { datetime: "7/1/2030 0:00", Shanghai: 26354.67381, Jiangsu: 115985.2533, Zhejiang: 96876.53587, Anhui: 52283.7691, Fujian: 57386.33035 },
      { datetime: "7/1/2030 1:00", Shanghai: 25692.62358, Jiangsu: 114454.5627, Zhejiang: 95027.00695, Anhui: 51261.98857, Fujian: 56977.51247 },
      { datetime: "7/1/2030 2:00", Shanghai: 25249.65223, Jiangsu: 113252.6773, Zhejiang: 93442.79912, Anhui: 50652.22091, Fujian: 56005.16401 },
    ],
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R9", title: "Resource Adequacy Assessment for the East China Grid: Policy Interventions and Contingent Scenarios for 2030", url: "https://emtracker.org/research/resource-adequacy-assessment-for-the-east-china-grid-policy-interventions-and-contingent-scenarios-for-2030/" },
    ],
    figureLink: "/dataset_charts/cn_east_grid_hourly_load_2030.png"
  },
  {
    id: "china-south-grid-hourly-load-2030-2060",
    country: "China",
    category: "Demand",
    name: "China South Grid Simulated Hourly Electricity Load Profiles (2030/2060)",
    featured: true,
    downloadable: false,
    updated: "2026-04-30",
    format: "CSV",
    size: "49 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China South Grid Simulated Hourly Electricity Load Profiles (2030/2060) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains simulated hourly electricity load profiles for each province in the China South Grid for July 2030 and July 2060.",
    regionLevel: "Provincial",
    frequency: "Hourly",
    dataCoverage: "2030/07 and 2060/07",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1nEKYAkXl17uXhoF4atPvyHNTkvYy-pQh/view?usp=drive_link",
    methodology: "Methodology for China Simulated Hourly Electricity Load Profiles",
    preview: [
      { datetime: "datetime", Guangdong: "Guangdong", Guangxi: "Guangxi", Guizhou: "Guizhou", Hainan: "Hainan", Yunnan: "Yunnan" },
      { datetime: "7/1/2060 0:00", Guangdong: 192471.0033, Guangxi: 47360.88495, Guizhou: 27933.34049, Hainan: 11901.05742, Yunnan: 38908.42731 },
      { datetime: "7/1/2060 1:00", Guangdong: 188009.4177, Guangxi: 44915.45012, Guizhou: 26509.56912, Hainan: 11215.27941, Yunnan: 37899.13259 },
      { datetime: "7/1/2060 2:00", Guangdong: 182291.3352, Guangxi: 43189.52453, Guizhou: 25847.14764, Hainan: 10659.2073, Yunnan: 36683.73013 },
    ],
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R8", title: "Offshore Wind Power and Resource Adequacy in the China Southern Grid", url: "https://www.law.berkeley.edu/wp-content/uploads/archive/2026/03/Offshore-wind-Report-Feb-2026.pdf" },
    ],
    figureLink: "/dataset_charts/cn_south_grid_hourly_load_2030_2060.png"
  },
  {
    id: "china-guangdong-prefecture-hourly-load-2030-2060",
    country: "China",
    category: "Demand",
    name: "China Guangdong Simulated Hourly Electricity Load Profiles (2030/2060)",
    featured: true,
    downloadable: false,
    updated: "2026-04-30",
    format: "CSV",
    size: "226 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Guangdong Simulated Hourly Electricity Load Profiles (2030/2060) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains simulated hourly electricity load profiles for each prefecture-level city in Guangdong for July 2030 and July 2060.",
    regionLevel: "Prefecture",
    frequency: "Hourly",
    dataCoverage: "2030/07 and 2060/07",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1nEKYAkXl17uXhoF4atPvyHNTkvYy-pQh/view?usp=drive_link",
    methodology: "Methodology for China Simulated Hourly Electricity Load Profiles",
    preview: [
      { datetime: "7/1/2023 0:00", Chaozhou: 2242.088473, Dongguan: 19314.26464, Foshan: 14901.43246, Guangzhou: 23465.00468, Heyuan: 2159.116449, Huizhou: 9995.363166, Jiangmen: 6438.629068, Jieyang: 3872.02779, Maoming: 2778.640895, Meizhou: 2336.123433, Qingyuan: 4598.493956, Shaoguan: 2999.899626, Shantou: 5087.41804, Shanwei: 1503.435986, Shenzhen: 20919.5807, Yangjiang: 1685.254, Yunfu: 2688.29358, Zhongshan: 5344.407181, Zhuhai: 4288.731733, Zhaoqing: 4129.484941, Zhanjiang: 6833.207138 },
      { datetime: "7/1/2023 1:00", Chaozhou: 2190.113072, Dongguan: 18866.52734, Foshan: 14555.99207, Guangzhou: 22921.04621, Heyuan: 2109.06448, Huizhou: 9763.653753, Jiangmen: 6289.370763, Jieyang: 3782.267641, Maoming: 2714.227302, Meizhou: 2281.968143, Qingyuan: 4491.893094, Shaoguan: 2930.356882, Shantou: 4969.48309, Shanwei: 1468.583798, Shenzhen: 20434.62946, Yangjiang: 1646.186964, Yunfu: 2625.974391, Zhongshan: 5220.514789, Zhuhai: 4189.311682, Zhaoqing: 4033.756501, Zhanjiang: 6674.801846 },
      { datetime: "7/1/2023 2:00", Chaozhou: 2123.500065, Dongguan: 18292.69573, Foshan: 14113.2668, Guangzhou: 22223.89507, Heyuan: 2044.916592, Huizhou: 9466.689024, Jiangmen: 6098.07749, Jieyang: 3667.228731, Maoming: 2631.673189, Meizhou: 2212.561334, Qingyuan: 4355.270693, Shaoguan: 2841.229117, Shantou: 4818.334633, Shanwei: 1423.916341, Shenzhen: 19813.10351, Yangjiang: 1596.117648, Yunfu: 2546.104519, Zhongshan: 5061.731121, Zhuhai: 4061.892394, Zhaoqing: 3911.068474, Zhanjiang: 6471.785561 },
    ],
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R8", title: "Offshore Wind Power and Resource Adequacy in the China Southern Grid", url: "https://www.law.berkeley.edu/wp-content/uploads/archive/2026/03/Offshore-wind-Report-Feb-2026.pdf" },
    ],
    figureLink: "/dataset_charts/cn_gd_prefecture_hourly_load_2030_2060.png"
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
    size: "3.3 MB",
    license: "CC BY 4.0",
    citation: "This dataset contains data on China’s coal, gas, hydro, nuclear, solar and wind power generators. The data is collected from Global Energy Monitor (GEM).",
    about: "This dataset contains data on China's coal, gas, hydro, nuclear, solar and wind power generators. The data is collected from Global Energy Monitor (GEM). The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "N/A",
    dataCoverage: "As of 2025/09",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial annual electricity generation data, including total, thermal and hydro data. The data is collected from the National Bureau of Statistics of China (NBS).",
    about: "This dataset contains China provincial annual electricity generation data, including total, thermal and hydro data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "1991-2024",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1TFlXSlrk5iIrAQvTkcwtreItTD3HGWw5",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial monthly electricity generation data, including total, thermal, hydro, nuclear, solar and wind data. The data is collected from the National Bureau of Statistics of China (NBS).",
    about: "This dataset contains China provincial monthly electricity generation data, including total, thermal, hydro, nuclear, solar and wind data. The data is collected from the National Bureau of Statistics of China (NBS). The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2002/04-2025/08",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1E_BVz5Iqr82YlBRg0HZhIbsG_3A8rcjM",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial annual installed capacity data in the power industry, including thermal, hydro, nuclear, solar and wind data. The data is collected from Dianchacha.",
    about: "This dataset contains China provincial annual installed capacity data in the power industry, including thermal, hydro, nuclear, solar and wind data. The data is collected from Dianchacha. The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2009-2024",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_prov_annual_capacity_by_tech.svg"
  },
  {
    id: "china-prov-annual-solar-capacity-by-type",
    country: "China",
    category: "Supply",
    name: "China Provincial Annual Solar PV Grid-Connected Capacity by Type",
    featured: true,
    downloadable: true,
    updated: "2025-06-30",
    format: "CSV",
    size: "94 KB",
    license: "CC BY 4.0",
    citation: "This dataset contains China provincial annual grid-connected capacity data by solar PV type, including new and cumulative, distributed and centralized, and residential and non-residential solar PV data. The data is collected from the National Energy Administration of China (NEA).",
    about: "This dataset contains China provincial annual grid-connected capacity data by solar PV type, including new and cumulative, distributed and centralized, and residential and non-residential solar PV data. The data is collected from the National Energy Administration of China (NEA). The data is updated annually, typically in June each year.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2018-2024",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1rVBX6MUseLvM5DJBoMvesAJsfcY8PNFD",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial monthly solar PV installed capacity data. The data is collected from Dianchacha.",
    about: "This dataset contains China provincial monthly solar PV installed capacity data. The data is collected from PK Thinker. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2022/05-2025/07",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "This dataset contains China provincial monthly wind power installed capacity data. The data is collected from Dianchacha.",
    about: "This dataset contains China provincial monthly wind power installed capacity data. The data is collected from PK Thinker. The data is updated every six months, typically in March and September each year.",
    regionLevel: "Provincial",
    frequency: "Monthly",
    dataCoverage: "2022/05-2025/07",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
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
    citation: "Power Transformation Lab. (2026). China Mainland EHV and UHV Transmission Lines [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains curated records of China's operational extra-high voltage (EHV) and ultra-high voltage (UHV) transmission network, covering both AC and DC technologies. All information is derived exclusively from open-source materials and has been manually cross-validated across multiple independent sources.",
    regionLevel: "Interprovincial and Intraprovincial",
    frequency: "N/A",
    dataCoverage: "As of 2025/11",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1fXW_tAfjPwvPoCNaXMjBqpAF4nwDmGMe",
    methodologyUrl: "https://drive.google.com/file/d/1wN_by2PkInmUK76Ah8nfZIBtqjgP5Crf/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_ehv_uhv_dc_uhv_ac_lines.svg"
  },
  {
    id: "china-interprovincial-500kv-750kv-network",
    country: "China",
    category: "Transmission",
    name: "China Mainland Interprovincial Transmission Network (500 kV and 750 kV)",
    featured: true,
    downloadable: false,
    updated: "2025-11-30",
    format: "CSV",
    size: "1 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Mainland Interprovincial Transmission Network (500 kV and 750 kV) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains interprovincial 500 kV and 750 kV transmission network in Mainland China. All lines included are in operation or under construction. The dataset is intended for academic research, policy analysis, and industry studies, such as power flow analysis and grid structure assessment.",
    regionLevel: "Interprovincial",
    frequency: "N/A",
    dataCoverage: "As of 2025/11",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1wN_by2PkInmUK76Ah8nfZIBtqjgP5Crf/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_interprovincial_500kv_750kv_network.svg"
  },
  {
    id: "china-interprovincial-capacity-500kv-above",
    country: "China",
    category: "Transmission",
    name: "China Mainland Interprovincial Transmission Network (500 kV and Above)",
    featured: true,
    downloadable: true,
    updated: "2025-11-30",
    format: "CSV",
    size: "3 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Mainland Interprovincial Transmission Network (500 kV and Above) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains interprovincial transmission capacity in mainland China for high-voltage DC lines (EHV/UHV) and AC lines rated 500 kV and above. The dataset is intended for academic research, policy analysis, and industry studies, such as power flow analysis and grid structure assessment.",
    regionLevel: "Interprovincial",
    frequency: "N/A",
    dataCoverage: "As of 2025/11",
    downloadUrl: "https://drive.google.com/uc?export=download&id=17ynarlOCEAZq_RFb3Ig13ewaE1VoCvmF",
    methodologyUrl: "https://drive.google.com/file/d/1wN_by2PkInmUK76Ah8nfZIBtqjgP5Crf/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
      { report_id: "R4", title: "Ratcheting up wind and solar targets for decarbonizing the power sector in China and beyond", url: "https://www.cell.com/cell-reports-sustainability/fulltext/S2949-7906(25)00085-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2949790625000850%3Fshowall%3Dtrue" },
      { report_id: "R5", title: "Reaching carbon neutrality in China: Temporal and subnational limitations of renewable energy scale-up", url: "https://www.sciencedirect.com/science/article/pii/S2666792425000320?via%3Dihub" },
    ],
    figureLink: "/dataset_charts/cn_interprovincial_capacity_500kv_above.svg"
  },
  {
    id: "china-guangdong-interprefecture-500kv-network",
    country: "China",
    category: "Transmission",
    name: "China Guangdong Inter-prefecture Transmission Network (500 kV)",
    featured: false,
    downloadable: false,
    updated: "2025-11-30",
    format: "CSV",
    size: "2 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Guangdong Inter-prefecture Transmission Network (500 kV) [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains 500 kV AC transmission lines within Guangdong Province that connect 21 different prefecture-level cities. All lines included are in operation or under construction and form part of Guangdong's internal high-voltage transmission network. The dataset is intended for academic research, policy analysis, and industry studies, such as regional power flow analysis and grid structure assessment.",
    regionLevel: "Inter-prefecture",
    frequency: "N/A",
    dataCoverage: "As of 2025/11",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1KtgTUX2OJA_suHhk4h3BGGshC7cPYe-2/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R8", title: "Offshore Wind Power and Resource Adequacy in the China Southern Grid", url: "https://www.law.berkeley.edu/wp-content/uploads/archive/2026/03/Offshore-wind-Report-Feb-2026.pdf" },
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
    updated: "2026-04-30",
    format: "CSV",
    size: "6.8 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China East Grid Simulated Hourly Electricity Flow Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains inter-provincial simulated hourly electricity flow profiles in East China Power Grid in 2022. The data is generated using TOU schedules, monthly export totals, load shapes, and network constraints.",
    regionLevel: "Inter-provincial",
    frequency: "Hourly",
    dataCoverage: "2022",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/124ullKs_c_cmkK-FWeFSAEliF-LJ6y4l/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R9", title: "Resource Adequacy Assessment for the East China Grid: Policy Interventions and Contingent Scenarios for 2030", url: "https://emtracker.org/research/resource-adequacy-assessment-for-the-east-china-grid-policy-interventions-and-contingent-scenarios-for-2030/" },
    ],
    figureLink: "/dataset_charts/cn_east_grid_simulated_hourly_flow_profiles.svg"
  },
];

const chinaREResourceDatasets: Dataset[] = [
  {
    id: "china-onshore-wind-profiles",
    country: "China",
    category: "RE Resource Protential",
    name: "China Hourly Onshore Wind Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-04-29",
    format: "PKL",
    size: "893.6 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Hourly Onshore Wind Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly onshore wind profiles for China in 2015.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2015",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1H-Qn6og5AcYMQ4uG3BCxYiHVbapDx8G5/view?usp=drive_link",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      { index: 36, latitude: 18.25, longitude: 109.0625, province: "Hainan", capacity_GW: 0.38599, capacity_factor: [0.1604858375, 0.1508937375, 0.1706583125, '...'] },
      { index: 37, latitude: 18.25, longitude: 109.3750, province: "Hainan", capacity_GW: 0.95525, capacity_factor: [0.159964075, 0.1731098125, 0.2018813875, '...'] },
      { index: 38, latitude: 18.25, longitude: 109.6875, province: "Hainan", capacity_GW: 0.69336, capacity_factor: [0.288965125, 0.300301725, 0.31847015, '...'] }
    ],
    figureLink: "/dataset_charts/figure_onshore_cf_2015.png",
    inPreparation: false,
    modelImplementations: [
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
    ],
  },
  {
    id: "china-offshore-wind-profiles",
    country: "China",
    category: "RE Resource Protential",
    name: "China Hourly Offshore Wind Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-04-29",
    format: "PKL",
    size: "63.2 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Hourly Offshore Wind Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly offshore wind profiles for China in 2015.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2015",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1H-Qn6og5AcYMQ4uG3BCxYiHVbapDx8G5/view?usp=drive_link",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      { index: 1, latitude: 17.50, longitude: 109.0625, province: "Hainan", capacity_GW: 0.86843, capacity_factor: [0.8981448125, 0.892389875, 0.908240375, '...'] },
      { index: 2, latitude: 17.50, longitude: 109.3750, province: "Hainan", capacity_GW: 0.06516, capacity_factor: [0.970413, 0.956745, 0.963589375, 0.978333625, '...'] },
      { index: 3, latitude: 17.50, longitude: 109.6875, province: "Hainan", capacity_GW: 2.27197, capacity_factor: [0.993933, 0.986597125, 0.985011, 0.991102875, '...'] }
    ],
    figureLink: "/dataset_charts/figure_offshore_cf_2015.png",
    inPreparation: false,
    modelImplementations: [
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
    ],
  },
  {
    id: "china-utility-scale-solar-profiles",
    country: "China",
    category: "RE Resource Protential",
    name: "China Hourly Utility-scale Solar Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-04-29",
    format: "PKL",
    size: "410.5 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Hourly Utility-scale Solar Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly utility-scale solar profiles for China in 2015.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2015",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1H-Qn6og5AcYMQ4uG3BCxYiHVbapDx8G5/view?usp=drive_link",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      { index: 0, latitude: 18.25, longitude: 109.375, province: "Hainan", capacity_GW: 0.8256, capacity_factor: [0, 0, 0, '...', 0, 0, 0] },
      { index: 1, latitude: 18.25, longitude: 109.6875, province: "Hainan", capacity_GW: 0.51, capacity_factor: [0, 0, 0, '...', 0, 0, 0] },
      { index: 2, latitude: 18.5, longitude: 108.75, province: "Hainan", capacity_GW: 2.1714, capacity_factor: [0, 0, 0, '...', 0, 0, 0] }
    ],
    figureLink: "/dataset_charts/figure_upv_cf_2015.png",
    inPreparation: false,
    modelImplementations: [
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
    ],
  },
  {
    id: "china-distributed-solar-profiles",
    country: "China",
    category: "RE Resource Protential",
    name: "China Hourly Distributed Solar Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-04-29",
    format: "PKL",
    size: "408.6 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). China Hourly Distributed Solar Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly distributed solar profiles for China in 2015.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2015",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1H-Qn6og5AcYMQ4uG3BCxYiHVbapDx8G5/view?usp=drive_link",
    methodology: `Data Sources:\nLink:\nLimitations:`,
    preview: [
      { index: 12254, latitude: 18.25, longitude: 109.3750, province: "Hainan", capacity_GW: 0.0749, capacity_factor: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.220, '...'] },
      { index: 12255, latitude: 18.25, longitude: 109.6875, province: "Hainan", capacity_GW: 0.0083, capacity_factor: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.217, '...'] },
      { index: 12256, latitude: 18.50, longitude: 108.7500, province: "Hainan", capacity_GW: 0.0457, capacity_factor: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.219, '...'] }
    ],
    figureLink: "/dataset_charts/figure_dpv_cf_2015.png",
    inPreparation: false,
    modelImplementations: [
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
    ],
    relevantReports: [
      { report_id: "R3", title: "Spatially resolved land and grid model of carbon neutrality in China | PNAS", url: "https://www.pnas.org/doi/10.1073/pnas.2306517121" },
    ],
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
    citation: "This dataset contains data on several key coal price indices in China, such as BSPI, CCI, and CCTD. The data was collected from multiple data sources, including the China Coal Transport and Distribution Association and the China Coal Economic Research Association.",
    about: "This dataset contains data on several key coal price indices in China, such as BSPI, CCI, and CCTD. The data was collected from multiple data sources, including the China Coal Transport and Distribution Association and the China Coal Economic Research Association. The data is updated every six months, typically in March and September each year.",
    regionLevel: "National",
    frequency: "Weekly",
    dataCoverage: "2007/11-2024/05",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1ySVk9Oi29bdIjyewcWDGKuZhZE4Ij9Si/view?usp=drive_link",
    methodology: `## Data Sources

The data is collected from publicly available sources, including the China Coal Transport and Distribution Association (CCTD) and the China Coal Economic Research Association (CCERA).

CCTD is an industry association voluntarily joined by coal producers and distributors nationwide. It regularly publishes coal price indices, including the BSPI (Bohai-Rim Steam Coal Price Index).  
**CCTD:** https://www.cctd.com.cn/

CCERA is a comprehensive social organization in the economic field of China's coal industry. It regularly compiles and releases coal price indices, including the CCI (China Coal Index).  
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
    modelImplementations: [
      { model_id: "M1", name: "UCED Model", url: "https://github.com/Power-Lab/JEPO_ResourceAdequacy_2026" },
      { model_id: "M2", name: "RESPO Model", url: "https://github.com/mrziheng/RESPO" },
      { model_id: "M3", name: "Renewable Energy Pathways Model", url: "https://github.com/Power-Lab/AdvAppliedEnergy_Pathways_2025" },
    ],
    relevantReports: [
      { report_id: "R1", title: "Resource adequacy under institutional constraints and the low-carbon energy transition in China - ScienceDirect", url: "https://www.sciencedirect.com/science/article/pii/S030142152600042X#da0010" },
      { report_id: "R2", title: "North China and Northeast China Interprovincial Electricity Trade Brief", url: "https://emtracker.org/research/north-china-and-northeast-china-interprovincial-electricity-trade-brief/" },
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
    id: "id_prov_annual_consumption",
    country: "Indonesia",
    category: "Demand",
    name: "Indonesia Provincial Annual Electricity Consumption",
    featured: false,
    downloadable: true,
    updated: "2026-03-17",
    format: "CSV",
    size: "7 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). Indonesia Provincial Annual Electricity Consumption [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains annual provincial electricity consumption in Indonesia by year, expressed in GWh.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2015-2024",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1aH2UYmTbhG8ncO9EczldxZKehEinTdPu",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province: "Aceh", year: 2015, demand_gwh: 2119 },
      { province: "Aceh", year: 2016, demand_gwh: 2330 },
      { province: "Aceh", year: 2017, demand_gwh: 2409 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    figureLink: "/dataset_charts/id_prov_historical_consumption.svg"
  },
  {
    id: "id_prov_annual_projections",
    country: "Indonesia",
    category: "Demand",
    name: "Indonesia Provincial Annual Electricity Projections",
    featured: false,
    downloadable: false,
    updated: "2026-03-17",
    format: "CSV",
    size: "8 KB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). Indonesia Provincial Annual Electricity Projections [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains annual provincial electricity projections in Indonesia by year, expressed in GWh.",
    regionLevel: "Provincial",
    frequency: "Annual",
    dataCoverage: "2025-2034",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province: "Aceh", year: 2025, demand_gwh: 3844 },
      { province: "Aceh", year: 2026, demand_gwh: 3964 },
      { province: "Aceh", year: 2027, demand_gwh: 4110 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    figureLink: "/dataset_charts/id_prov_annual_projections.svg"
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
    citation: "Power Transformation Lab. (2026). Indonesia Power Generators by Technology [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains power plant records by province, with plant names, installed capacity, operational status, start year, generation technology, and fuel type.",
    regionLevel: "Provincial",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province: "Jakarta", plant_name: "pltgu_muara_karang_blok_1__2_", capacity_mw: 1074, status: "operating", start_year: null, technology: "ccgt", fuel: "gas" },
      { province: "Jakarta", plant_name: "pltu_muara_karan_4_5_", capacity_mw: 324, status: "operating", start_year: null, technology: "coal", fuel: "coal" },
      { province: "Jakarta", plant_name: "pltgu_muara_karang_blok_3_gt", capacity_mw: 300, status: "operating", start_year: null, technology: "ccgt", fuel: "gas" }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
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
    citation: "Power Transformation Lab. (2026). Indonesia Jawa-Bali Power Network [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains inter-provincial transmission links in the Jawa-Bali power system, including connected province pairs, line voltage levels, and transfer capacity in MW.",
    regionLevel: "Intra-island",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1YgO9KliKBJKvA7UV07hdzMGePeTx1SB4",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province_a: "Jakarta", province_b: "Banten", voltage: "150 kV", capacity_mw: 3359.41 },
      { province_a: "Jakarta", province_b: "West Java", voltage: "150 kV", capacity_mw: 832.51 },
      { province_a: "Jakarta", province_b: "West Java", voltage: "500 kV", capacity_mw: 6166.77 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
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
    citation: "Power Transformation Lab. (2026). Indonesia Kalimantan Power Network [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains inter-provincial transmission links in the Kalimantan power system, with province-to-province connections, voltage classes, and line capacity values.",
    regionLevel: "Intra-island",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1yUCS30UEBmXYJ0lnvZpkfswI9Fd48Zgr",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province_a: "West Kalimantan", province_b: "Central Kalimantan", voltage: "150 kV", capacity_mw: 105.29 },
      { province_a: "South Kalimantan", province_b: "Central Kalimantan", voltage: "150 kV", capacity_mw: 342.39 },
      { province_a: "South Kalimantan", province_b: "East Kalimantan", voltage: "150 kV", capacity_mw: 249.14 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
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
    citation: "Power Transformation Lab. (2026). Indonesia Sulawesi Power Network [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains inter-provincial transmission links in the Sulawesi power system, reporting endpoint provinces, voltage levels, and transmission capacity in MW.",
    regionLevel: "Intra-island",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1BjPL2HVlX76lcWCGoimjCqYqcushAWAu",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province_a: "North Sulawesi", province_b: "Gorontalo", voltage: "150 kV", capacity_mw: 301.46 },
      { province_a: "Gorontalo", province_b: "Central Sulawesi", voltage: "150 kV", capacity_mw: 203.04 },
      { province_a: "Central Sulawesi", province_b: "South Sulawesi", voltage: "275 kV", capacity_mw: 879.06 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
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
    citation: "Power Transformation Lab. (2026). Indonesia Sumatera Power Network [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains inter-provincial transmission links in the Sumatera power system, including connected provinces, line voltages, and capacity for each network segment.",
    regionLevel: "Intra-island",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1G4Rg32e9-MQcd4pLMOesRNUkgCCMJ_sO",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    methodology: "",
    preview: [
      { province_a: "Aceh", province_b: "North Sumatra", voltage: "275 kV", capacity_mw: 322.83 },
      { province_a: "Aceh", province_b: "North Sumatra", voltage: "150 kV", capacity_mw: 288.15 },
      { province_a: "North Sumatra", province_b: "Riau", voltage: "500 kV", capacity_mw: 994.48 }
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    figureLink: "/dataset_charts/id_Sumatera_network.svg"
  },
];

const indonesiaREResourceDatasets: Dataset[] = [
  {
    id: "indonesia-hourly-wind-profiles-2023",
    country: "Indonesia",
    category: "RE Resource Potential",
    name: "Indonesia Hourly Wind Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-05-05",
    format: "CSV",
    size: "23.6 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). Indonesia Hourly Wind Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly wind profiles for Indonesia in 2023.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2023",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1v0hdb-seLlE19rpqmIsqfTVDe6oWECP-/view?usp=sharing",
    methodology: "Methodology for Indonesia RE Profiles",
    preview: [
      { time: "2023-01-01 00:00:00", y: -3.919, x: 104.24574, lat: -3.919, lon: 104.24574, capacity_factor: 0.155044 },
      { time: "2023-01-01 00:00:00", y: -3.919, x: 104.495766, lat: -3.919, lon: 104.495766, capacity_factor: 0.184763 },
      { time: "2023-01-01 00:00:00", y: -3.919, x: 104.7458, lat: -3.919, lon: 104.7458, capacity_factor: 0.19437 },
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    figureLink: "/dataset_charts/id_wind_profiles_2023.png",
  },
  {
    id: "indonesia-hourly-solar-profiles-2023",
    country: "Indonesia",
    category: "RE Resource Potential",
    name: "Indonesia Hourly Solar Profiles",
    featured: true,
    downloadable: false,
    updated: "2026-05-05",
    format: "CSV",
    size: "33 MB",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). Indonesia Hourly Solar Profiles [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains grid-level, hourly solar profiles for Indonesia in 2023.",
    regionLevel: "Grid-level",
    frequency: "Hourly",
    dataCoverage: "2023",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1v0hdb-seLlE19rpqmIsqfTVDe6oWECP-/view?usp=sharing",
    methodology: "Methodology for Indonesia RE Profiles",
    preview: [
      { time: "2023-01-01 00:00:00", y: 0.331, x: 99.745285, lat: 0.331, lon: 99.745285, capacity_factor: 0.011445102025571 },
      { time: "2023-01-01 00:00:00", y: 0.331, x: 99.99531, lat: 0.331, lon: 99.99531, capacity_factor: 0.01135418858159 },
      { time: "2023-01-01 00:00:00", y: 0.331, x: 100.24533, lat: 0.331, lon: 100.24533, capacity_factor: 0.010110914360058 },
    ],
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    figureLink: "/dataset_charts/id_solar_profiles_2023.png",
  },
  /*
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
  */
];

const indonesiaParametersDatasets: Dataset[] = [
  {
    id: "indonesia-coal-price",
    country: "Indonesia",
    category: "Parameters",
    name: "Indonesia Coal Price Indices",
    featured: false,
    downloadable: true,
    updated: "2026-03-06",
    format: "CSV",
    size: "472 bytes",
    license: "CC BY 4.0",
    citation: "Power Transformation Lab. (2026). Indonesia Coal Price Indices [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains coal price data for different coal index types across multiple years, including Domestic Market Obligation, mine mouth, and captive coal prices.",
    regionLevel: "National",
    frequency: "Annual",
    dataCoverage: "2022-2050",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1PagG1n7elvW2DIqWXRbePeEpQpFBOs8L",
    methodology: "",
    methodologyUrl: "https://drive.google.com/file/d/1zMOrnp08TV3EV16Dtx_k1Kkz4L4YB9FZ/view?usp=drive_link",
    modelImplementations: [
      { model_id: "M4", name: "Captive Indonesia Capacity Expansion Model", url: "https://github.com/Power-Lab/captive-indonesia-2025" },
    ],
    relevantReports: [
      { report_id: "R6", title: "Advancing Low-Carbon Industry Transition: Decarbonizing Industrial Captive Generation in Indonesia", url: "https://zenodo.org/records/17345968" },
    ],
    preview: [
      { fuel_type: "coal", index_name: "Coal (Domestic Market Obligation)", price_usd_per_ton: 70, year: 2022 },
      { fuel_type: "coal", index_name: "Coal (mine mouth)", price_usd_per_ton: 37, year: 2022 },
      { fuel_type: "coal", index_name: "Coal (captive)", price_usd_per_ton: 100, year: 2022 }
    ],
    figureLink: "/dataset_charts/id_coal_price_indices.svg",
    inPreparation: false,
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
    citation: "Author: Power Transformation Lab; Title: vn_regional_annual_consumption (CC BYPower Transformation Lab. (2026). Vietnam Regional Annual Electricity Consumption [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Vietnam zonal annual electricity demand projections derived from regional load profiles, sourced from Vietnam's Eighth Power Development Plan (PDP8).",
    regionLevel: "Zonal",
    frequency: "Annual",
    dataCoverage: "2030-2050",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Gy5Y3hLXu-HN10OnB0R-K89tXNE5dooj",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
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
    citation: "Power Transformation Lab. (2026). Vietnam Coal Power Generators [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Vietnam coal power plant data, sourced from Global Energy Monitor (GEM) .",
    regionLevel: "Zonal",
    frequency: "N/A",
    dataCoverage: "As of 2024/01",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
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
    citation: "Power Transformation Lab. (2026). Vietnam 500 kV Power Network [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Vietnam 500 kV power network lines (existing, operational by 2025), sourced from PDP8 Draft Table 4.",
    regionLevel: "Interzonal and Intrazonal",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1dwFKoVtJC9G6KEV5PJeqtrdWstdsy6Lb",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
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
    citation: "Power Transformation Lab. (2026). Vietnam 500 kV Substations [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Vietnam 500 kV substations (existing, operational by 2025), sourced from the PDP8 transmission annex.",
    regionLevel: "Zonal",
    frequency: "N/A",
    dataCoverage: "As of 2025",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1toFhfv0Krp7MwLqiqUOuS-m0EyKnq5vG",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
    ],
    figureLink: "/dataset_charts/vn_500kv_substations.svg"
  },
];

const vietnamREResourceDatasets: Dataset[] = [
  /*
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
    citation: "Power Transformation Lab. (2026). Vietnam Wind Regional Monthly Profile [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Vietnam onshore wind capacity factors from Renewables.ninja, aggregated to model zones by capacity-weighted averaging.",
    regionLevel: "Zonal",
    frequency: "Monthly",
    dataCoverage: "Not specified",
    downloadUrl: "#",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
    ],
    figureLink: "/dataset_charts/vn_wind_regional_monthly_profile.svg"
  },
  */
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
    citation: "Power Transformation Lab. (2026). Vietnam Coal Import Price [Dataset], Version 1.0. University of California, San Diego. [URL]. Licensed under CC BY 4.0.",
    about: "This dataset contains Newcastle FOB thermal coal benchmark, sourced from World Bank Commodity Price Data (Pink Sheet), via IndexMundi.",
    regionLevel: "National",
    frequency: "Monthly",
    dataCoverage: "2019/01-2025/02",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1xQFJTVbmqXN3sOtcj4FWZxhD5FmEAuRe",
    methodologyUrl: "https://drive.google.com/file/d/1StuTWrjxOMI7dYsPEINl3nZKIeUJ1ut5/view?usp=drive_link",
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
    modelImplementations: [
      { model_id: "M5", name: "Vietnam Power Capacity Expansion Model (Link coming soon)" }
    ],
    relevantReports: [
      { report_id: "R7", title: "Policy Brief - Vietnam 2035 Power - Nov 2025 - UCSD Power Lab.pdf", url: "https://drive.google.com/file/d/1IJeenNwuhSGLyOuSck65YCpzck9NBrho/view" }
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
    datasetCount: chinaDemandDatasets.length + chinaSupplyDatasets.length + chinaTransmissionDatasets.length + chinaREResourceDatasets.length + chinaParametersDatasets.length,
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
  // {
  //   id: "india",
  //   name: "India",
  //   flag: "🇮🇳",
  //   datasetCount: 6,
  //   categories: [
  //     {
  //       id: "demand",
  //       name: "Demand",
  //       icon: "TrendingUp",
  //       datasets: indiaDemandDatasets,
  //     },
  //     {
  //       id: "supply",
  //       name: "Supply",
  //       icon: "Zap",
  //       datasets: indiaSupplyDatasets,
  //     },
  //     {
  //       id: "transmission",
  //       name: "Transmission",
  //       icon: "Network",
  //       datasets: indiaTransmissionDatasets,
  //     },
  //     {
  //       id: "re-resource",
  //       name: "RE Resource Potential",
  //       icon: "Sun",
  //       datasets: indiaREResourceDatasets,
  //     },
  //     {
  //       id: "parameters",
  //       name: "Parameters",
  //       icon: "DollarSign",
  //       datasets: indiaParametersDatasets,
  //     },
  //   ],
  // },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    datasetCount: indonesiaDemandDatasets.length + indonesiaSupplyDatasets.length + indonesiaTransmissionDatasets.length + indonesiaREResourceDatasets.length + indonesiaParametersDatasets.length,
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
    datasetCount: vietnamDemandDatasets.length + vietnamSupplyDatasets.length + vietnamTransmissionDatasets.length + vietnamREResourceDatasets.length + vietnamParametersDatasets.length,
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
  // {
  //   id: "other",
  //   name: "Other Countries",
  //   flag: "🌏",
  //   datasetCount: otherCountryDemandDatasets.length + otherCountrySupplyDatasets.length + otherCountryTransmissionDatasets.length + otherCountryREResourceDatasets.length + otherCountryParametersDatasets.length,
  //   categories: [
  //     {
  //       id: "demand",
  //       name: "Demand",
  //       icon: "TrendingUp",
  //       datasets: otherCountryDemandDatasets,
  //     },
  //     {
  //       id: "supply",
  //       name: "Supply",
  //       icon: "Zap",
  //       datasets: otherCountrySupplyDatasets,
  //     },
  //     {
  //       id: "transmission",
  //       name: "Transmission",
  //       icon: "Network",
  //       datasets: otherCountryTransmissionDatasets,
  //     },
  //     {
  //       id: "re-resource",
  //       name: "RE Resource Potential",
  //       icon: "Sun",
  //       datasets: otherCountryREResourceDatasets,
  //     },
  //     {
  //       id: "parameters",
  //       name: "Parameters",
  //       icon: "DollarSign",
  //       datasets: otherCountryParametersDatasets,
  //     },
  //   ],
  // },
];

export const powerDatasets: Dataset[] = [
  ...chinaDemandDatasets,
  ...chinaSupplyDatasets,
  ...chinaTransmissionDatasets,
  ...chinaREResourceDatasets,
  ...chinaParametersDatasets,
  // ...indiaDemandDatasets,
  // ...indiaSupplyDatasets,
  // ...indiaTransmissionDatasets,
  // ...indiaREResourceDatasets,
  // ...indiaParametersDatasets,
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
  //...otherCountryDemandDatasets,
  //...otherCountrySupplyDatasets,
  //...otherCountryTransmissionDatasets,
  //...otherCountryREResourceDatasets,
  //...otherCountryParametersDatasets,
];
