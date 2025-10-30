import { Card } from "@/components/ui/card";
import { Users, Globe, TrendingUp } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Research Excellence
          </div>
          <h2 className="text-4xl font-semibold mb-6">About Our Initiative</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open Power Data is a collaborative research initiative dedicated to providing
            transparent, accessible energy and power system data. Our mission is to enable
            researchers, policymakers, and industry professionals to make data-driven decisions
            that advance sustainable energy futures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-2">Global Coverage</div>
            <p className="text-sm text-muted-foreground">
              Comprehensive datasets from major economies and emerging markets
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-2">Expert Team</div>
            <p className="text-sm text-muted-foreground">
              Led by energy researchers and data scientists worldwide
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-2">Regular Updates</div>
            <p className="text-sm text-muted-foreground">
              Continuously updated with latest power system information
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
