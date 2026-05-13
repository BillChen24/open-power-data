import { Link } from "wouter";
import { Database, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Open Power Data</span>
            </div>
            <p className="text-md text-muted-foreground max-w-md">
              A collaborative research initiative providing transparent,
              accessible and validated power system data built from the ground
              up.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/explore" data-testid="link-footer-explore">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Data Explore
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/licence" data-testid="link-footer-licence">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Licence Agreement
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" data-testid="link-footer-privacy">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Privacy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms" data-testid="link-footer-terms">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">
                    Terms of Use
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/power-lab"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                  data-testid="link-github"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Open Power Data Initiative. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
