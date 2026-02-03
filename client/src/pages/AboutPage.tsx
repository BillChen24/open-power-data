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
      name: "The Rockefeller Brothers Fund",
      shortName: "RBF",
      url: "https://www.rbf.org",
      description:
        "Created in 1940, the Rockefeller Brothers Fund (RBF) is a private family foundation rooted in the Rockefeller tradition of philanthropy. It advances social change that contributes to a more just, sustainable, and peaceful world.",
      image_path: "project_funder/The Rockefeller Brothers Fund Logo.png",
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
                Advancing energy transition through high-resolution open data
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Open Regional Electricity Observatory (OREO), an initiative by
              the Power Transformation Lab, is dedicated to the belief that
              transparent and high-resolution energy data is the bedrock of a
              sustainable future. We bridge the critical data gap by collecting,
              curating, and sharing sub-national power system data—from
              provincial to prefecture levels—across annual, monthly, and hourly
              granularities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Starting with pivotal regions like China and Southeast Asia, our
              mission is to build a borderless platform that empowers
              researchers, policymakers, and energy professionals. By providing
              open access to detailed generation, consumption, and transmission
              data, we aim to accelerate evidence-based decision-making and
              foster global collaboration for the energy transition.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Data Collection & Curation
                </h3>
                <p className="text-muted-foreground">
                  We aggregate power system data from official sources, verify
                  its accuracy, and standardize formats to ensure consistency
                  and usability.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Research Support</h3>
                <p className="text-muted-foreground">
                  We provide datasets, documentation, and technical support to
                  researchers studying energy systems, climate change, and
                  sustainable development.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Community Building
                </h3>
                <p className="text-muted-foreground">
                  We foster a global community of energy data users and
                  contributors through workshops, conferences, and collaborative
                  projects.
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
                    <img
                      src={`/${funder.image_path}`}
                      alt={`${funder.name} logo`}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />

                    {/* Name (optional but good for accessibility) */}
                    <p className="text-sm text-muted-foreground font-medium">
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
