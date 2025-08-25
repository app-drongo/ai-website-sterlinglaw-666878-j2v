// Services1 Component
// Generated: 2025-08-25T22:07:46.197Z
// Template: services-c002
// Context: Practice Areas
// Position: pages.1.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Building2,
  FileText,
  Handshake,
  Scale,
  Briefcase,
  Users,
  Shield,
  Gavel
} from "lucide-react"

export default function Services1() {
  const practiceAreas = [
    {
      id: "corporate-law",
      title: "Corporate Law & Governance",
      description: "Comprehensive corporate legal services for businesses of all sizes",
      longDescription: "Our corporate law practice provides strategic legal counsel for business formation, governance, compliance, and day-to-day operations. We help companies navigate complex regulatory environments while protecting their interests.",
      icon: Building2,
      benefits: [
        "Business formation and structuring",
        "Corporate governance and compliance",
        "Securities law and regulations",
        "Contract negotiation and drafting"
      ],
      pricing: "Retainer arrangements available",
      timeline: "Ongoing legal counsel",
      featured: true,
      badge: "Core Practice"
    },
    {
      id: "mergers-acquisitions",
      title: "Mergers & Acquisitions",
      description: "Expert guidance through complex M&A transactions",
      longDescription: "Sterling & Associates provides comprehensive M&A services, from initial due diligence through closing. Our experienced team ensures smooth transactions while protecting your interests and maximizing value.",
      icon: Handshake,
      benefits: [
        "Due diligence and transaction structuring",
        "Purchase agreement negotiation",
        "Regulatory approval assistance",
        "Post-closing integration support"
      ],
      pricing: "Transaction-based fees",
      timeline: "3-12 months per transaction"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Law",
      description: "Protect and monetize your valuable intellectual assets",
      longDescription: "Our IP practice helps clients secure, protect, and leverage their intellectual property rights. From patent applications to trademark disputes, we provide comprehensive IP legal services.",
      icon: Shield,
      benefits: [
        "Patent and trademark registration",
        "IP portfolio management",
        "Licensing agreement negotiation",
        "Infringement litigation defense"
      ],
      pricing: "Starting at $2,500 per filing",
      timeline: "6-18 months for registrations"
    },
    {
      id: "employment-law",
      title: "Employment & Labor Law",
      description: "Navigate complex employment regulations and workplace issues",
      longDescription: "We provide proactive employment law counsel to help businesses maintain compliant workplaces while minimizing litigation risk. Our services cover all aspects of the employment relationship.",
      icon: Users,
      benefits: [
        "Employment contract drafting",
        "Workplace policy development",
        "Discrimination and harassment defense",
        "Executive compensation planning"
      ],
      pricing: "Hourly and retainer options",
      timeline: "Ongoing advisory services",
      badge: "Growing Practice"
    },
    {
      id: "commercial-litigation",
      title: "Commercial Litigation",
      description: "Aggressive representation in business disputes and litigation",
      longDescription: "When business disputes arise, our litigation team provides skilled advocacy in state and federal courts. We handle complex commercial disputes with a focus on achieving favorable outcomes efficiently.",
      icon: Gavel,
      benefits: [
        "Contract and business tort disputes",
        "Shareholder and partnership conflicts",
        "Breach of fiduciary duty claims",
        "Alternative dispute resolution"
      ],
      pricing: "Contingency and hourly arrangements",
      timeline: "12-36 months typical duration"
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      description: "Stay compliant with evolving industry regulations",
      longDescription: "Our regulatory compliance practice helps businesses navigate complex regulatory frameworks across various industries. We provide ongoing compliance monitoring and strategic regulatory advice.",
      icon: Scale,
      benefits: [
        "Compliance program development",
        "Regulatory risk assessment",
        "Government investigation response",
        "Industry-specific compliance counsel"
      ],
      pricing: "Custom compliance packages",
      timeline: "Ongoing monitoring services",
      badge: "Specialized"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Legal Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Services
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tailored to Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates delivers strategic legal counsel across all areas of corporate law, 
            providing the expertise and guidance your business needs to thrive in today's complex legal landscape.
          </p>
        </div>

        {/* Practice Areas List */}
        <div className="space-y-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            
            return (
              <div key={area.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${area.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Practice Area Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${area.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {area.title}
                        </h3>
                        {area.badge && (
                          <Badge variant={area.featured ? "default" : "secondary"} className="bg-primary/10 text-primary border-primary/20">
                            {area.badge}
                          </Badge>
                        )}
                        {area.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {area.description}
                      </p>
                      
                      {area.longDescription && (
                        <p className="text-muted-foreground">
                          {area.longDescription}
                        </p>
                      )}
                      
                      {/* Services Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {area.benefits.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {area.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Fee Structure:</span>
                            <span className="text-sm font-semibold">
                              {area.pricing}
                            </span>
                          </div>
                        )}
                        {area.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Typical Timeline:</span>
                            <span className="text-sm font-semibold">
                              {area.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={area.featured ? "default" : "outline"}
                          className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < practiceAreas.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need Specialized Legal Counsel?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business faces unique legal challenges. Our experienced attorneys provide tailored 
            solutions that protect your interests and support your strategic objectives.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request Legal Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}