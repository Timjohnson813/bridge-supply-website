import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Package, 
  Target, 
  Shield, 
  Globe, 
  Zap, 
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'listing-creation',
      icon: <Package className="w-12 h-12" />,
      title: "Amazon Listing Creation",
      description: "Professional product listings that convert browsers into buyers with optimized content and imagery.",
      features: [
        "SEO-optimized product titles and descriptions",
        "High-converting bullet points and A+ content",
        "Professional product photography coordination",
        "Keyword research and optimization",
        "Competitor analysis and positioning"
      ],
      link: "/services/listing-creation"
    },
    {
      id: 'amazon-advertising',
      icon: <Target className="w-12 h-12" />,
      title: "Amazon Advertising (PPC)",
      description: "Strategic PPC campaigns that maximize ROI and drive targeted traffic to your products.",
      features: [
        "Sponsored Products, Brands, and Display campaigns",
        "Advanced keyword targeting and bid optimization",
        "ACOS reduction and ROAS improvement",
        "Campaign structure and negative keyword management",
        "Performance monitoring and optimization"
      ],
      link: "/services/amazon-advertising"
    },
    {
      id: 'brand-management',
      icon: <Globe className="w-12 h-12" />,
      title: "Full Amazon Brand Management",
      description: "Complete Amazon account management so you can focus on growing your business.",
      features: [
        "End-to-end Amazon account management",
        "Inventory planning and forecasting",
        "Customer service and review management",
        "Performance monitoring and reporting",
        "Strategic planning and growth optimization"
      ],
      link: "/services/brand-management"
    },
    {
      id: 'brand-protection',
      icon: <Shield className="w-12 h-12" />,
      title: "Brand Protection & Unauthorized Reseller Removal",
      description: "Eliminate unauthorized resellers and protect your brand reputation on Amazon.",
      features: [
        "Unauthorized seller identification and removal",
        "Brand registry setup and management",
        "IP protection and enforcement",
        "MAP policy implementation",
        "Counterfeit product monitoring"
      ],
      link: "/services/brand-protection"
    },
    {
      id: 'logistics',
      icon: <Zap className="w-12 h-12" />,
      title: "Logistics & Inventory System Setup",
      description: "Streamlined logistics systems and inventory tracking for optimal performance.",
      features: [
        "FBA setup and optimization",
        "Inventory management systems",
        "Supply chain optimization",
        "Shipping and fulfillment coordination",
        "Cost reduction strategies"
      ],
      link: "/services/logistics"
    },
    {
      id: 'distributor-search',
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Distributor Search & Outreach",
      description: "Find and connect with distributors to expand into new channels and markets.",
      features: [
        "Distributor identification and vetting",
        "Partnership negotiation and setup",
        "Channel expansion strategies",
        "Market entry planning",
        "Relationship management"
      ],
      link: "/services/distributor-search"
    },
    {
      id: 'reputation-building',
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Brand Reputation Building",
      description: "Build and maintain a strong brand presence that drives customer loyalty and sales.",
      features: [
        "Review management and optimization",
        "Brand story development",
        "Customer experience enhancement",
        "Social proof strategies",
        "Crisis management and response"
      ],
      link: "/services/reputation-building"
    }
  ];

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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Comprehensive Amazon growth solutions designed to transform your brand into a marketplace leader. 
              We handle everything from A to Z so you can focus on what you do best.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link to={service.link}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              A proven methodology that has helped over 500 brands scale their Amazon presence and achieve remarkable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Analyze & Audit</h3>
              <p className="text-muted-foreground">
                We start with a comprehensive audit of your current Amazon presence, identifying opportunities 
                and areas for improvement across all aspects of your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategize & Plan</h3>
              <p className="text-muted-foreground">
                Based on our findings, we develop a customized strategy tailored to your brand's goals, 
                market position, and growth objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Execute & Optimize</h3>
              <p className="text-muted-foreground">
                We implement the strategy with precision, continuously monitoring performance and 
                optimizing for maximum results and sustainable growth.
              </p>
            </motion.div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Scale Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss which services are right for your brand and create a customized growth strategy.
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
                <Link to="/case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

