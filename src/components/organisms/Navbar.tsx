import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/atoms/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { BenevoxLogo } from "@/components/atoms/BenevoxLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/ui/dropdown-menu";

const navigation = [
  {
    name: "Our System",
    items: [
      { name: "Engagement Models", href: "/models" },
      { name: "Operations & Security", href: "/ops-and-security" },
      { name: "How We Work", href: "/ops-and-security#ai-operations" },
    ],
  },
  {
    name: "Our Impact",
    items: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Technical Capabilities", href: "/portfolio" },
      { name: "Accelerator", href: "/accelerator" },
    ],
  },
  {
    name: "Join the Machine",
    items: [
      { name: "Careers", href: "/careers" },
      { name: "About Us", href: "/about" },
    ],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BenevoxLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((group) => (
            <DropdownMenu key={group.name}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium outline-none">
                {group.name}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-border p-2 min-w-[200px]">
                {group.items.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="w-full px-4 py-2 text-sm hover:bg-brand-green/10 hover:text-brand-green rounded-md transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-[hsl(var(--brand-gold))]" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzmEVFuly6CHwREg4utCe2GY538E3SQ0SPUBGEHOdqwCAJ6Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Technical Scoping
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-[hsl(var(--brand-gold))]" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 animate-slide-up">
          <div className="flex flex-col gap-6">
            {navigation.map((group) => (
              <div key={group.name}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                  {group.name}
                </h4>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-brand-green transition-colors py-2 px-2 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <a href="https://calendar.app.google/S8y9f3ErZXRSbfc99">
                Book a Technical Scoping
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
