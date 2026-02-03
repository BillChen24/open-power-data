import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LicencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <h1 className="text-4xl font-bold mb-8" data-testid="heading-licence">
            Licence Agreement
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: January 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Data Usage Rights</h2>
              <p className="text-muted-foreground">
                All datasets provided through the Open Regional Electricity
                Observatory (OREO) are made available under the Creative Commons
                Attribution 4.0 International License (CC BY 4.0), unless
                otherwise specified. You are free to copy, redistribute, and
                adapt the material for any purpose, including commercial use,
                provided that you give appropriate credit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. Attribution Requirements
              </h2>
              <p className="text-muted-foreground">
                When using data from OREO, you must provide appropriate credit
                by acknowledging the Power Transformation Lab and the Open
                Regional Electricity Observatory (OREO) as the source. For
                specific datasets, please follow the mandatory citation format
                provided on each dataset's individual page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground">
                The data is provided on an "as is" and "as available" basis.
                While we strive for high granularity and scientific rigor, we
                make no warranties, express or implied, regarding the accuracy,
                completeness, or fitness for a particular purpose. Users assume
                all responsibility for verifying data before use in critical
                applications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Limitations of Liability
              </h2>
              <p className="text-muted-foreground">
                In no event shall the Power Transformation Lab or its
                contributors be liable for any claims, damages, or other
                liabilities arising from the use of, or inability to use, the
                data provided on this platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this agreement at any time.
                Changes will be posted on this page with an updated revision
                date. Continued use of the data after changes constitutes
                acceptance of the modified terms. For inquiries, please refer to
                our{" "}
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
