// Services Component
// Generated: 2025-08-25T22:07:46.189Z
// Template: services-c002
// Context: Home
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Scale,
  Building,
  FileText,
  Shield,
  Briefcase,
  Users,
  Gavel,
  Copyright
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "corporate-law",
      title: "Corporate Law & Governance",
      description: "Comprehensive corporate legal services for businesses of all sizes",
      longDescription: "Our corporate law practice provides end-to-end legal support for business formation, governance, compliance, and strategic transactions. We help companies navigate complex regulatory requirements while positioning them for growth.",
      icon: Building,
      benefits: [
        "Business formation and structuring",
        "Corporate governance and compliance",
        "Securities law and regulatory matters",
        "Board advisory and fiduciary duties"
      ],
      pricing: "Retainer arrangements available",
      timeline: "Ongoing counsel relationship",
      featured: true,
      badge: "Core Practice"
    },
    {
      id: "mergers-acquisitions",
      title: "Mergers & Acquisitions",
      description: "Expert M&A advisory for strategic transactions and growth",
      longDescription: "Our M&A team has successfully closed over $2 billion in transactions. We provide comprehensive support from initial due diligence through post-closing integration, ensuring your deals create maximum value.",
      icon: Briefcase,
      benefits: [
        "Transaction structuring and negotiation",
        "Due diligence coordination",
        "Regulatory approval and compliance",
        "Post-closing integration support"
      ],
      pricing: "Transaction-based fees",
      timeline: "3-9 months typical transaction"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Protection",
      description: "Comprehensive IP strategy and protection services",
      longDescription: "Protect your most valuable assets with our comprehensive IP services. From patent prosecution to trademark registration and licensing agreements, we help you build and defend your intellectual property portfolio.",
      icon: Copyright,
      benefits: [
        "Patent prosecution and portfolio management",
        "Trademark registration and enforcement",
        "Copyright protection and licensing",
        "Trade secret and confidentiality strategies"
      ],
      pricing: "Starting at $2,500 per application",
      timeline: "6-18 months for prosecution"
    },
    {
      id: "contract-negotiation",
      title: "Contract Negotiation & Drafting",
      description: "Strategic contract solutions that protect your interests",
      longDescription: "Our contract specialists draft, review, and negotiate agreements that protect your business while facilitating successful partnerships. We ensure every contract aligns with your strategic objectives and risk tolerance.",
      icon: FileText,
      benefits: [
        "Commercial contract drafting and review",
        "Vendor and supplier agreements",
        "Employment and executive contracts",
        "Licensing and distribution agreements"
      ],
      pricing: "Hourly or project-based pricing",
      timeline: "1-4 weeks per contract",
      badge: "High Demand"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Legal Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert legal counsel across all aspects of corporate law, from formation to complex transactions
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
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
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
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
            Every business faces unique legal challenges. Let's discuss how our expertise can support your specific needs.
          </p>
          <Button size="lg">
            Request Legal Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}