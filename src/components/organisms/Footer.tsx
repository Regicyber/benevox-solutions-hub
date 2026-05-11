import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { BenevoxLogo } from "@/components/atoms/BenevoxLogo";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <BenevoxLogo className="h-10" />
            </div>
            <p className="text-muted-foreground max-w-md mb-6 mt-4">
              Your Product, Our Team. We Build, Ship, and Handover. Connecting
              you to Africa's elite tech talent.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/benevoxhq?igsh=emN5cTl2aXV4OHlt"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/models"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Engagement Models
                </Link>
              </li>
              <li>
                <Link
                  to="/ops-and-security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  to="/accelerator"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accelerator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/ops-and-security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@benevox.africa
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[hsl(var(--brand-gold))]" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Benevox Technologies Limited (RC: 9240456). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
