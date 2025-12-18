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
              Last updated: December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Open Power Data website and services,
                you agree to be bound by these Terms of Use. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Use of Services</h2>
              <p className="text-muted-foreground">
                You may use our website and data for lawful purposes only. You
                agree not to use our services in any way that could damage,
                disable, or impair our systems or interfere with other users'
                access.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                The Open Power Data name, logo, and website design are protected
                by intellectual property rights. Data usage is governed by our
                Licence Agreement. You may not use our branding without prior
                written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground">
                Our services are provided "as is" without any warranties,
                express or implied. We do not guarantee uninterrupted access to
                our website or the accuracy of any data provided.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Open Power Data shall
                not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance
                with applicable laws, without regard to conflict of law
                principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Use, please contact us at
                info@openpowerdata.org.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
