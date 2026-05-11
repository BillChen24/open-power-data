import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teamImage from "@assets/stock_images/modern_office_team_r_7103a229.jpg";
import { desc } from "drizzle-orm";
import { url } from "inspector";

export default function AboutPage() {
  const funders = [
    {
      name: "The William and Flora Hewlett Foundation",
      shortName: "Hewlett Foundation",
      url: "https://hewlett.org/",
      description:
        "Established in 1966, the William and Flora Hewlett Foundation is a nonpartisan philanthropy created through the personal generosity of engineer and entrepreneur Bill Hewlett and his wife, Flora. It invests in creative thinkers and problem solvers who are working to ensure everyone has a meaningful opportunity to thrive.",
      image_path:
        "project_funder/The William and Flora Hewlett Foundation Logo.svg",
    },
    {
      name: "Climate Imperative Foundation",
      shortName: "CIF",
      url: "https://climateimperative.org/",
      description:
        "Climate Imperative Foundation provides funding, technical support, and expertise to inform the most important climate policy decisions in major-emitting countries around the world.",
      image_path:
        "https://climateimperative.org/wp-content/uploads/2021/10/ci-logo.png",
    },
    {
      name: "Carnegie Corporation of New York",
      shortName: "Carnegie",
      url: "https://www.carnegie.org",
      description:
        "Established in 1911 by Andrew Carnegie to promote the advancement and diffusion of knowledge and understanding. Today the foundation works to reduce political polarization through philanthropic support for the issues that Carnegie considered most important: education, democracy, and peace.",
      image_path: "project_funder/Carnegie Corporation of New York Logo.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="relative h-80 overflow-hidden">
          <img
            src={teamImage}
            alt="Research team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Advancing the power sector transition through high-resolution,
                validated open power data
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Open Power Data (name pending), an initiative of the Power
              Transformation Lab at the University of California San Diego, is
              dedicated to expanding access to high-quality, transparent power
              data in pivotal regions where such data remains limited. The core
              of this effort is to collect, reconstruct, curate and validate
              publicly available data on power systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              By developing and sharing high-resolution datasets for
              sub-national planning and operational power system modeling, we
              seek to lower barriers to rigorous analysis and enable a wider
              community of researchers, policymakers, and practitioners to
              engage with energy systems on an equal footing with traditional
              incumbents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              In line with the Lab's commitment to open and collaborative
              modeling, we promote transparency and replicability in model
              inputs and outputs, support more diverse and creative uses of
              analytical tools, and inform more inclusive decision-making in the
              energy transition.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Data Collection and Assimilation
                </h3>
                <p className="text-muted-foreground">
                  We collect data from multiple publicly available sources both
                  official and non-official, verify their accuracy through
                  cross-checking and validation, and standardize formats to
                  ensure consistency and usability across power modeling
                  frameworks. Core datasets are anchored by products of national
                  energy authorities and statistical agencies with important
                  limitations. Furthermore, we build on numerous global open
                  source efforts, augmented with ground-truthing and
                  complementary collection of local announcements, planning
                  documents and news reports. Renewable energy profiles are
                  derived from major global reanalysis products such as ERA5 and
                  the Goddard Earth Observing System (GEOS-5) and diverse
                  geospatial datasets reflecting land-use constraints. These
                  datasets are converted for use in power system planning and
                  operational models to evaluate generation expansion,
                  transmission development, renewable integration, system
                  reliability, and decarbonization pathways.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Data Reconstruction and Reproducibility
                </h3>
                <p className="text-muted-foreground">
                  Due to inevitable gaps in the publicly available data series
                  collected, there are substantial additional efforts to
                  reconstruct missing data and produce simulated datasets that
                  reflect real-world conditions. These reconstruction
                  methodologies are fit-for-purpose to the given research
                  questions, for example aiming to replicate extreme behavior
                  for reliability assessments and seasonal variation for annual
                  operations. Where applicable, our simulated data tries to
                  minimize errors with our collected datasets through tunable
                  parameters reflecting weights assigned for importance and
                  accuracy. We provide datasets, methodological notes, and
                  supporting documentation so that users can reconstruct our
                  data, understand the underlying assumptions, and reproduce the
                  results in a transparent and consistent manner.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Data Sharing and Modeling Applications
                </h3>
                <p className="text-muted-foreground">
                  We provide datasets and documentation for modeling power
                  systems, with open-source data profiles, standardized formats,
                  and transparent methodologies for data generation and
                  processing. To support reproducibility and broader adoption,
                  we document how datasets are constructed and harmonized across
                  multiple sources. We also help researchers navigate modeling
                  applications by curating links to open-source models, research
                  reports, and high-impact studies that use the same or related
                  datasets, enabling users to understand and identify relevant
                  use cases for their own analyses.{" "}
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    We welcome inquiries
                  </a>{" "}
                  for additional data creation and modeling application
                  collaborations.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            {/* <div className="flex items-center gap-6 mb-6"> */}
            <div className="mb-6 flex items-center">
              <img
                src="/project_funder/Power-Transformation-Lab-Final-Logo-7-inch.png"
                alt="Power Transformation Lab logo"
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-3xl font-semibold mb-6">
              <a
                href="https://pwrlab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Power Transformation Lab website (opens in a new tab)"
              >
                Power Transformation Lab
              </a>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The Power Transformation Lab at the University of California, San
              Diego studies the engineering and institutional requirements of
              deploying low-carbon energy at scale. We work across multiple
              geographies and with academic, government, civil society, and
              industry partners to advance research and solutions to climate and
              environmental challenges.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-semibold mb-8">Project Funders</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {funders.map((funder) => (
                <Card
                  key={funder.shortName}
                  className="p-10 w-[240px] h-[140px] flex items-center justify-center hover:shadow-md transition-shadow bg-white"
                  data-testid={`card-funder-${funder.shortName
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <a
                    href={funder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${funder.name} website (opens in a new tab)`}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    {/* Logo */}
                    {/* <img
                      src={`/${funder.image_path}`}
                      alt={`${funder.name} logo`}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    /> */}

                    {/* Name (optional but good for accessibility) */}
                    <p className="text-lg text-muted-foreground font-medium">
                      {funder.name}
                    </p>
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
