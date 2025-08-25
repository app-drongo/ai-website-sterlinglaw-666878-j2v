// Footer Component
// Generated: 2025-08-25T22:07:46.189Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Scale,
  Clock,
  Shield
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Practice Areas",
      links: [
        { name: "Corporate Law", href: "/practice-areas/corporate" },
        { name: "Mergers & Acquisitions", href: "/practice-areas/ma" },
        { name: "Intellectual Property", href: "/practice-areas/ip" },
        { name: "Employment Law", href: "/practice-areas/employment" },
        { name: "Real Estate", href: "/practice-areas/real-estate" },
        { name: "Litigation", href: "/practice-areas/litigation" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Firm", href: "/about" },
        { name: "Attorneys", href: "/attorneys" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "News & Insights", href: "/news" },
        { name: "Careers", href: "/careers" },
        { name: "Pro Bono", href: "/pro-bono" }
      ]
    },
    {
      title: "Client Resources",
      links: [
        { name: "Legal Resources", href: "/resources" },
        { name: "Client Portal", href: "/portal" },
        { name: "Document Center", href: "/documents" },
        { name: "FAQ", href: "/faq" },
        { name: "Legal Updates", href: "/updates" },
        { name: "Consultation", href: "/consultation" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Attorney Advertising", href: "/advertising" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Bar Admissions", href: "/admissions" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sterling-associates" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/sterlinglaw" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/sterlingassociates" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Scale className="size-6 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-accent">Sterling & Associates</span>
                  <span className="text-xs text-muted-foreground tracking-wide">LAW FIRM</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Providing exceptional legal counsel in corporate law, mergers & acquisitions, and intellectual property. 
                Trusted by Fortune 500 companies and emerging businesses for over 25 years.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <div>1200 Corporate Plaza, Suite 2500</div>
                  <div>New York, NY 10019</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">(212) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">info@sterlinglaw.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Fri: 8:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-accent">Legal Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-accent">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe to receive important legal updates and firm news.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-accent">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Sterling & Associates Law Firm. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Shield className="size-3 text-accent" /> Attorney Advertising
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Sitemap
            </Link>
            <Link href="/bar-admissions" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Bar Admissions
            </Link>
            <Link href="/disclaimer" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Legal Disclaimer
            </Link>
            <Link href="/emergency" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Emergency Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}