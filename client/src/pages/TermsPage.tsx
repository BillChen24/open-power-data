import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <h1 className="text-4xl font-bold mb-8" data-testid="heading-terms">
            Terms of Use
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: January 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Open Regional Electricity Observatory
                (OREO) website and its services, you agree to be bound by these
                Terms of Use. If you do not agree to these terms, please refrain
                from using our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Use of Services</h2>
              <p className="text-muted-foreground">
                You may use our website and data for lawful purposes only. You
                agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Use our services in any way that could damage, disable, or
                  impair our servers or networks.
                </li>
                <li>
                  Engage in any automated data collection (such as scraping)
                  that places an unreasonable load on our infrastructure without
                  prior authorization.
                </li>
                <li>Interfere with other users' access to the platform.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                The OREO name, logo, website design, and the Power
                Transformation Lab branding are protected by intellectual
                property rights. While datasets are governed by our License
                Agreement (CC BY 4.0), you may not use our branding, logos, or
                trademarks for promotional purposes without prior written
                permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground">
                Our services are provided on an "as is" and "as available"
                basis. We do not guarantee uninterrupted access to the website
                or the absolute accuracy of any data provided. The Power
                Transformation Lab disclaims all warranties, express or implied,
                to the fullest extent permitted by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, the Power Transformation
                Lab and its contributors shall not be liable for any direct,
                indirect, incidental, or consequential damages (including, but
                not limited to, research errors or financial loss) arising from
                your use of, or inability to use, our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance
                with the applicable laws of the jurisdiction where the Power
                Transformation Lab is established, without regard to conflict of
                law principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to update these Terms of Use at any time.
                Continued use of the platform following the posting of changes
                constitutes your acceptance of the revised terms. For inquiries,
                please refer to our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
