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
              Last updated: January 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect minimal information necessary to operate and improve
                the Open Regional Electricity Observatory (OREO). This may
                include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Contact Information:</strong> Email addresses provided
                  voluntarily when you contact the Power Transformation Lab or
                  subscribe to updates.
                </li>
                <li>
                  <strong>Usage Data:</strong> Anonymous technical information
                  (e.g., IP addresses, browser type, and download statistics)
                  used to understand how our datasets are accessed.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. How We Use Information
              </h2>
              <p className="text-muted-foreground">
                The information collected is used solely to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Respond to inquiries and provide requested data updates.
                </li>
                <li>
                  Analyze website usage patterns to improve our data services
                  and platform performance.
                </li>
                <li>
                  Report aggregated, anonymous usage statistics to support the
                  project's academic mission. We do not sell, rent, or share
                  personal information with third parties for marketing
                  purposes.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. Cookies and Analytics
              </h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar technologies to enhance
                your browsing experience and collect anonymous usage statistics.
                You can manage or disable cookies through your browser settings,
                though some platform features may be affected.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized access,
                alteration, or disclosure. As an open-access platform, we
                prioritize the integrity of our systems and the security of any
                user communications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or request the deletion
                of any personal information we may hold. To exercise these
                rights or for any privacy-related inquiries, please refer to the
                contact channels provided on our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact page
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Policy Updates</h2>
              <p className="text-muted-foreground">
                We reserve the right to update this Privacy Policy to reflect
                changes in our services or legal obligations. All updates will
                be posted on this page with a revised "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
