// Abouthome Component
// Generated: 2025-08-25T22:07:46.189Z
// Template: about-c001
// Context: Home
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Scale, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Shield,
  Briefcase
} from "lucide-react"

export default function Abouthome() {
  const values = [
    {
      icon: Scale,
      title: "Legal Excellence",
      description: "We maintain the highest standards of legal practice, ensuring every client receives expert counsel backed by decades of experience."
    },
    {
      icon: Shield,
      title: "Client Protection",
      description: "Your interests are our priority. We provide robust legal strategies designed to protect and advance your business objectives."
    },
    {
      icon: Briefcase,
      title: "Business Focus",
      description: "We understand the complexities of modern business and deliver practical legal solutions that support your growth."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local startups to multinational corporations, we provide legal services that span jurisdictions and industries."
    }
  ]

  const stats = [
    { value: "1985", label: "Established", icon: Award },
    { value: "500+", label: "Corporate Clients", icon: Users },
    { value: "98%", label: "Success Rate", icon: TrendingUp },
    { value: "15+", label: "Practice Areas", icon: Scale }
  ]

  const team = [
    {
      name: "Margaret Sterling",
      role: "Managing Partner",
      image: "MS",
      bio: "Harvard Law graduate with 30+ years in corporate law and M&A transactions."
    },
    {
      name: "Robert Associates",
      role: "Senior Partner", 
      image: "RA",
      bio: "Former Fortune 500 General Counsel specializing in intellectual property law."
    },
    {
      name: "Sarah Mitchell",
      role: "Corporate Law Partner",
      image: "SM",
      bio: "Expert in securities law and corporate governance with extensive regulatory experience."
    },
    {
      name: "James Chen",
      role: "IP & Technology Partner",
      image: "JC",
      bio: "Technology law specialist with deep expertise in patent prosecution and licensing."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Sterling & Associates
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted Legal Counsel for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Corporate Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For nearly four decades, Sterling & Associates has been the trusted legal partner 
            for businesses navigating complex corporate challenges and opportunities.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1985 by Margaret Sterling, our firm began with a simple mission: 
                to provide exceptional legal counsel that empowers businesses to thrive.
              </p>
              <p>
                From our early days representing emerging technology companies to our current 
                role advising Fortune 500 corporations, we've built our reputation on delivering 
                results that matter.
              </p>
              <p>
                Today, we're proud to serve as trusted advisors to over 500 corporate clients, 
                helping them navigate mergers, protect intellectual property, and achieve their strategic objectives.
              </p>
            </div>
            <Button className="group">
              View Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Excellence in legal counsel requires both expertise and understanding of business realities."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Margaret Sterling, Managing Partner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our legal practice and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Legal Team</h3>
            <p className="text-muted-foreground">
              Experienced attorneys dedicated to delivering exceptional legal counsel and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet All Attorneys
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Sterling & Associates guided us through our most complex acquisition. Their expertise 
                and attention to detail were instrumental in closing a $50M transaction successfully."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  TD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Thomas Davidson</div>
                  <div className="text-sm text-muted-foreground">CEO, TechVentures Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}