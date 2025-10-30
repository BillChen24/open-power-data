import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teamImage from "@assets/stock_images/modern_office_team_r_7103a229.jpg";

export default function AboutPage() {
  const teamMembers = [
    { name: "Dr. Sarah Chen", role: "Principal Investigator", initials: "SC" },
    { name: "Dr. Michael Rodriguez", role: "Energy Systems Lead", initials: "MR" },
    { name: "Dr. Priya Sharma", role: "Data Science Lead", initials: "PS" },
    { name: "Dr. James Wilson", role: "Policy Advisor", initials: "JW" },
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
                Advancing energy research through open data
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Open Power Data initiative was founded on the belief that transparent,
              accessible energy data is essential for addressing global energy challenges.
              We bring together researchers, data scientists, and energy professionals from
              around the world to collect, curate, and share high-quality power system data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is to enable evidence-based decision-making in energy policy,
              accelerate research into sustainable energy systems, and foster collaboration
              across borders and disciplines.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Collection & Curation</h3>
                <p className="text-muted-foreground">
                  We aggregate power system data from official sources, verify its accuracy,
                  and standardize formats to ensure consistency and usability.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Research Support</h3>
                <p className="text-muted-foreground">
                  We provide datasets, documentation, and technical support to researchers
                  studying energy systems, climate change, and sustainable development.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                <p className="text-muted-foreground">
                  We foster a global community of energy data users and contributors through
                  workshops, conferences, and collaborative projects.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name} className="p-6 hover-elevate" data-testid={`card-team-${member.initials}`}>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold" data-testid={`text-name-${member.initials}`}>
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-6">Publications & Impact</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-primary rounded-full" />
                <div>
                  <div className="font-semibold mb-1">2024</div>
                  <p className="text-muted-foreground">
                    Published comprehensive analysis of renewable energy integration across
                    12 countries in <em>Nature Energy</em>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-primary rounded-full" />
                <div>
                  <div className="font-semibold mb-1">2023</div>
                  <p className="text-muted-foreground">
                    Released open-source tools for power system data analysis, adopted by
                    50+ research institutions
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-primary rounded-full" />
                <div>
                  <div className="font-semibold mb-1">2022</div>
                  <p className="text-muted-foreground">
                    Launched international collaboration network with partners in 15 countries
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
