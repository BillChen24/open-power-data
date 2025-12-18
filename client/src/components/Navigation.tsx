import { Link, useLocation } from "wouter";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Countries } from "@/lib/powerData";
import CountryIcon from "@/components/CountryIcon";

export default function Navigation() {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer hover-elevate rounded-md px-3 py-2">
              <Database className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Open Power Data</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" data-testid="link-home-nav">
              <span
                className={`text-base font-medium cursor-pointer hover:text-primary transition-colors ${
                  location === "/"
                    ? "text-foreground underline decoration-2 underline-offset-8 decoration-primary"
                    : "text-muted-foreground"
                }`}
              >
                Home
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-base font-medium ${
                      location.startsWith("/explore") ||
                      location.startsWith("/country")
                        ? "text-foreground underline decoration-2 underline-offset-8 decoration-primary"
                        : "text-muted-foreground"
                    }`}
                    data-testid="trigger-data-explore"
                  >
                    Data Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[240px] p-4">
                      <div className="mb-2 text-sm font-medium text-muted-foreground">
                        Browse by Country
                      </div>
                      <ul className="space-y-1">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/explore"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/explore");
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  navigate("/explore");
                                }
                              }}
                              data-testid="link-all-countries"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                All Countries
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {Countries.map((country) => (
                          <li key={country.id}>
                            <NavigationMenuLink asChild>
                              <a
                                href={`/country/${country.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/country/${country.id}`);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    navigate(`/country/${country.id}`);
                                  }
                                }}
                                data-testid={`link-country-${country.id}`}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center gap-2">
                                  <CountryIcon
                                    countryId={country.id}
                                    countryName={country.name}
                                    size="sm"
                                  />
                                  <div>
                                    <div className="text-sm font-medium leading-none">
                                      {country.name}
                                    </div>
                                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                                      {country.datasetCount} datasets
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/about" data-testid="link-about">
              <span
                className={`text-base font-medium cursor-pointer hover:text-primary transition-colors ${
                  location === "/about"
                    ? "text-foreground underline decoration-2 underline-offset-8 decoration-primary"
                    : "text-muted-foreground"
                }`}
              >
                About
              </span>
            </Link>

            <Link href="/contact" data-testid="link-contact">
              <span
                className={`text-base font-medium cursor-pointer hover:text-primary transition-colors ${
                  location === "/contact"
                    ? "text-foreground underline decoration-2 underline-offset-8 decoration-primary"
                    : "text-muted-foreground"
                }`}
              >
                Contact
              </span>
            </Link>
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col gap-4 p-6">
            <Link href="/" data-testid="link-mobile-home">
              <span
                className={`text-base font-medium cursor-pointer block ${
                  location === "/" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </span>
            </Link>
            <div>
              <Link href="/explore" data-testid="link-mobile-data-explore">
                <span
                  className={`text-base font-medium cursor-pointer block mb-2 ${
                    location.startsWith("/explore") ||
                    location.startsWith("/country")
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Explore
                </span>
              </Link>
              <div className="pl-4 space-y-2">
                {Countries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/country/${country.id}`}
                    data-testid={`link-mobile-country-${country.id}`}
                  >
                    <div
                      className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <CountryIcon
                        countryId={country.id}
                        countryName={country.name}
                        size="sm"
                      />
                      <span>{country.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" data-testid="link-mobile-about">
              <span
                className={`text-base font-medium cursor-pointer block ${
                  location === "/about"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </span>
            </Link>
            <Link href="/contact" data-testid="link-mobile-contact">
              <span
                className={`text-base font-medium cursor-pointer block ${
                  location === "/contact"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
