import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ContactForm from '../components/ContactForm';
import { 
  Package, 
  Target, 
  Shield, 
  Globe, 
  Zap, 
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData = {
    'listing-creation': {
      icon: <Package className="w-16 h-16" />,
      title: "Amazon Listing Creation",
      subtitle: "Professional product listings that convert browsers into buyers",
      description: "Transform your product pages into high-converting sales machines with our comprehensive listing optimization service. We combine data-driven keyword research, compelling copywriting, and strategic positioning to maximize your visibility and conversion rates on Amazon.",
      features: [
        "SEO-optimized product titles and descriptions",
        "High-converting bullet points and A+ content",
        "Professional product photography coordination",
        "Keyword research and optimization",
        "Competitor analysis and positioning",
        "Backend search term optimization",
        "Category and attribute optimization",
        "Enhanced brand content creation"
      ],
      benefits: [
        "Increased organic visibility and search rankings",
        "Higher conversion rates and sales velocity",
        "Improved customer engagement and satisfaction",
        "Better brand positioning against competitors",
        "Enhanced product discoverability",
        "Optimized for Amazon's A9 algorithm"
      ],
      process: [
        {
          step: "Product Research",
          description: "We analyze your product, target audience, and competitive landscape to understand positioning opportunities."
        },
        {
          step: "Keyword Analysis",
          description: "Comprehensive keyword research to identify high-volume, relevant search terms your customers use."
        },
        {
          step: "Content Creation",
          description: "Craft compelling titles, bullet points, descriptions, and A+ content that converts visitors into buyers."
        },
        {
          step: "Optimization & Launch",
          description: "Implement all optimizations and monitor performance, making adjustments for maximum impact."
        }
      ],
      stats: [
        { number: "150%", label: "Average conversion rate increase" },
        { number: "200%", label: "Improvement in organic visibility" },
        { number: "48hrs", label: "Typical optimization turnaround" },
        { number: "95%", label: "Client satisfaction rate" }
      ]
    },
    'amazon-advertising': {
      icon: <Target className="w-16 h-16" />,
      title: "Amazon Advertising (PPC)",
      subtitle: "Strategic PPC campaigns that maximize ROI and drive targeted traffic",
      description: "Scale your Amazon business with data-driven advertising strategies that reduce ACOS while increasing sales. Our PPC experts manage every aspect of your campaigns, from keyword research to bid optimization, ensuring maximum return on your advertising investment.",
      features: [
        "Sponsored Products, Brands, and Display campaigns",
        "Advanced keyword targeting and bid optimization",
        "ACOS reduction and ROAS improvement",
        "Campaign structure and negative keyword management",
        "Performance monitoring and optimization",
        "Competitor analysis and market insights",
        "Budget allocation and scaling strategies",
        "Creative testing and optimization"
      ],
      benefits: [
        "Reduced advertising cost of sales (ACOS)",
        "Increased return on ad spend (ROAS)",
        "Higher product visibility and rankings",
        "Improved organic performance through PPC",
        "Better market share and competitive positioning",
        "Scalable and profitable growth"
      ],
      process: [
        {
          step: "Campaign Audit",
          description: "Analyze existing campaigns and identify optimization opportunities for immediate improvements."
        },
        {
          step: "Strategy Development",
          description: "Create a comprehensive PPC strategy aligned with your business goals and budget."
        },
        {
          step: "Campaign Setup",
          description: "Build optimized campaign structures with proper targeting, keywords, and bid strategies."
        },
        {
          step: "Ongoing Optimization",
          description: "Continuously monitor and optimize campaigns for maximum performance and profitability."
        }
      ],
      stats: [
        { number: "40%", label: "Average ACOS reduction" },
        { number: "250%", label: "Increase in ad-driven sales" },
        { number: "24/7", label: "Campaign monitoring" },
        { number: "98%", label: "Campaign success rate" }
      ]
    },
    'brand-management': {
      icon: <Globe className="w-16 h-16" />,
      title: "Full Amazon Brand Management",
      subtitle: "Complete Amazon account management so you can focus on growing your business",
      description: "Let us take complete control of your Amazon operations while you focus on product development and business growth. Our full-service management covers every aspect of your Amazon presence, from daily operations to strategic planning and execution.",
      features: [
        "End-to-end Amazon account management",
        "Inventory planning and forecasting",
        "Customer service and review management",
        "Performance monitoring and reporting",
        "Strategic planning and growth optimization",
        "Compliance and policy management",
        "Multi-marketplace expansion",
        "Team coordination and communication"
      ],
      benefits: [
        "Complete hands-off Amazon management",
        "Consistent growth and optimization",
        "Professional customer service",
        "Strategic business insights",
        "Risk mitigation and compliance",
        "Time freedom to focus on core business"
      ],
      process: [
        {
          step: "Account Assessment",
          description: "Comprehensive review of your current Amazon operations and identification of improvement areas."
        },
        {
          step: "Transition Planning",
          description: "Smooth transition of account management with minimal disruption to your business."
        },
        {
          step: "Daily Operations",
          description: "Handle all day-to-day Amazon activities including inventory, customer service, and optimization."
        },
        {
          step: "Strategic Growth",
          description: "Implement long-term strategies for sustainable growth and market expansion."
        }
      ],
      stats: [
        { number: "100%", label: "Account management coverage" },
        { number: "24/7", label: "Support availability" },
        { number: "500+", label: "Brands successfully managed" },
        { number: "99%", label: "Client retention rate" }
      ]
    },
    'brand-protection': {
      icon: <Shield className="w-16 h-16" />,
      title: "Brand Protection & Unauthorized Reseller Removal",
      subtitle: "Eliminate unauthorized resellers and protect your brand reputation",
      description: "Safeguard your brand's integrity and profitability by eliminating unauthorized sellers and protecting your intellectual property. Our comprehensive brand protection service ensures your products are sold only by authorized partners at the right prices.",
      features: [
        "Unauthorized seller identification and removal",
        "Brand registry setup and management",
        "IP protection and enforcement",
        "MAP policy implementation",
        "Counterfeit product monitoring",
        "Legal action coordination",
        "Seller verification processes",
        "Ongoing monitoring and alerts"
      ],
      benefits: [
        "Protected brand reputation and integrity",
        "Maintained pricing control and margins",
        "Reduced counterfeit and unauthorized sales",
        "Improved customer trust and loyalty",
        "Enhanced brand value and positioning",
        "Legal protection and enforcement"
      ],
      process: [
        {
          step: "Brand Assessment",
          description: "Identify current unauthorized sellers and assess the scope of brand protection needed."
        },
        {
          step: "Protection Setup",
          description: "Implement brand registry, IP protection, and monitoring systems for comprehensive coverage."
        },
        {
          step: "Enforcement Actions",
          description: "Take swift action against unauthorized sellers through Amazon's enforcement mechanisms."
        },
        {
          step: "Ongoing Monitoring",
          description: "Continuous monitoring and protection to prevent future unauthorized selling activities."
        }
      ],
      stats: [
        { number: "95%", label: "Unauthorized seller removal rate" },
        { number: "30%", label: "Average margin improvement" },
        { number: "24/7", label: "Brand monitoring" },
        { number: "100%", label: "Brand registry success rate" }
      ]
    },
    'logistics': {
      icon: <Zap className="w-16 h-16" />,
      title: "Logistics & Inventory System Setup",
      subtitle: "Streamlined logistics systems and inventory tracking for optimal performance",
      description: "Optimize your supply chain and inventory management with our comprehensive logistics solutions. We help you reduce costs, improve efficiency, and ensure your products are always available to customers when they need them.",
      features: [
        "FBA setup and optimization",
        "Inventory management systems",
        "Supply chain optimization",
        "Shipping and fulfillment coordination",
        "Cost reduction strategies",
        "Demand forecasting and planning",
        "Multi-channel inventory sync",
        "Performance tracking and analytics"
      ],
      benefits: [
        "Reduced logistics costs and complexity",
        "Improved inventory turnover",
        "Better customer satisfaction",
        "Streamlined operations",
        "Reduced stockouts and overstock",
        "Enhanced operational efficiency"
      ],
      process: [
        {
          step: "Current State Analysis",
          description: "Evaluate your existing logistics and inventory processes to identify optimization opportunities."
        },
        {
          step: "System Design",
          description: "Design optimized logistics and inventory systems tailored to your business needs."
        },
        {
          step: "Implementation",
          description: "Set up and integrate new systems with minimal disruption to your operations."
        },
        {
          step: "Optimization",
          description: "Continuously monitor and optimize systems for maximum efficiency and cost savings."
        }
      ],
      stats: [
        { number: "35%", label: "Average cost reduction" },
        { number: "99%", label: "Inventory accuracy rate" },
        { number: "50%", label: "Reduction in stockouts" },
        { number: "24/7", label: "System monitoring" }
      ]
    },
    'distributor-search': {
      icon: <BarChart3 className="w-16 h-16" />,
      title: "Distributor Search & Outreach",
      subtitle: "Find and connect with distributors to expand into new channels and markets",
      description: "Expand your market reach and grow your business through strategic distributor partnerships. We identify, vet, and connect you with the right distributors to accelerate your growth in new markets and channels.",
      features: [
        "Distributor identification and vetting",
        "Partnership negotiation and setup",
        "Channel expansion strategies",
        "Market entry planning",
        "Relationship management",
        "Performance tracking and optimization",
        "Contract negotiation support",
        "Ongoing partnership development"
      ],
      benefits: [
        "Expanded market reach and presence",
        "Increased sales through new channels",
        "Reduced market entry costs",
        "Strategic partnership development",
        "Accelerated business growth",
        "Risk mitigation through diversification"
      ],
      process: [
        {
          step: "Market Research",
          description: "Identify target markets and potential distributor partners that align with your business goals."
        },
        {
          step: "Distributor Outreach",
          description: "Reach out to qualified distributors and present partnership opportunities."
        },
        {
          step: "Partnership Setup",
          description: "Negotiate terms and establish partnerships with selected distributors."
        },
        {
          step: "Relationship Management",
          description: "Ongoing support and optimization of distributor relationships for mutual success."
        }
      ],
      stats: [
        { number: "200+", label: "Distributor partnerships facilitated" },
        { number: "85%", label: "Partnership success rate" },
        { number: "150%", label: "Average sales increase" },
        { number: "30", label: "Days average setup time" }
      ]
    },
    'reputation-building': {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Brand Reputation Building",
      subtitle: "Build and maintain a strong brand presence that drives customer loyalty",
      description: "Establish and maintain a stellar brand reputation that drives customer loyalty and increases sales. Our comprehensive reputation management service helps you build trust, manage reviews, and create a positive brand image that resonates with your target audience.",
      features: [
        "Review management and optimization",
        "Brand story development",
        "Customer experience enhancement",
        "Social proof strategies",
        "Crisis management and response",
        "Content marketing and engagement",
        "Influencer partnership coordination",
        "Brand monitoring and analytics"
      ],
      benefits: [
        "Enhanced brand credibility and trust",
        "Improved customer loyalty and retention",
        "Higher conversion rates and sales",
        "Better competitive positioning",
        "Increased brand value and equity",
        "Positive customer sentiment"
      ],
      process: [
        {
          step: "Brand Audit",
          description: "Assess your current brand reputation and identify areas for improvement and growth."
        },
        {
          step: "Strategy Development",
          description: "Create a comprehensive reputation building strategy aligned with your brand values."
        },
        {
          step: "Implementation",
          description: "Execute reputation building initiatives across all relevant channels and touchpoints."
        },
        {
          step: "Monitoring & Optimization",
          description: "Continuously monitor brand sentiment and optimize strategies for maximum impact."
        }
      ],
      stats: [
        { number: "4.8", label: "Average review rating achieved" },
        { number: "300%", label: "Increase in positive reviews" },
        { number: "90%", label: "Customer satisfaction rate" },
        { number: "24/7", label: "Reputation monitoring" }
      ]
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">
              Back to Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-8 text-white">
              {service.icon}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {service.subtitle}
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                  <CardDescription>
                    Comprehensive features designed to maximize your success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Benefits</CardTitle>
                  <CardDescription>
                    The results you can expect from our service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.step}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how {service.title.toLowerCase()} can help scale your Amazon business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/contact">
                  Book Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ServiceDetail;

