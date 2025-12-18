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
              Last updated: December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Data Usage Rights</h2>
              <p className="text-muted-foreground">
                All datasets provided through the Open Power Data platform are
                made available under the Creative Commons Attribution 4.0
                International License (CC BY 4.0), unless otherwise specified.
                This means you are free to share and adapt the data for any
                purpose, including commercial use, provided you give appropriate
                credit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. Attribution Requirements
              </h2>
              <p className="text-muted-foreground">
                When using data from Open Power Data, you must provide
                appropriate credit by citing the source as "Open Power Data
                Initiative" along with the specific dataset name and access
                date. A link to our website is appreciated but not required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. No Warranty</h2>
              <p className="text-muted-foreground">
                The data is provided "as is" without warranty of any kind,
                express or implied. While we strive for accuracy, we cannot
                guarantee that all data is complete, current, or error-free.
                Users should verify data independently for critical
                applications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this licence agreement at any
                time. Changes will be posted on this page with an updated
                revision date. Continued use of our data after changes
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contact</h2>
              <p className="text-muted-foreground">
                For questions about this licence or data usage, please contact
                us at info@openpowerdata.org.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
