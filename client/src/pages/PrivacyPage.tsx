import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <h1 className="text-4xl font-bold mb-8" data-testid="heading-privacy">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect minimal personal information necessary to provide our
                services. This may include email addresses when you contact us
                or subscribe to updates, and basic usage analytics to improve
                our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use collected information to respond to inquiries, send
                requested updates, improve our services, and analyze website
                usage patterns. We do not sell or share your personal
                information with third parties for marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. Cookies and Analytics
              </h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar technologies to enhance
                your browsing experience and collect anonymous usage statistics.
                You can disable cookies in your browser settings, though this
                may affect some website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us at
                info@openpowerdata.org.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                6. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
