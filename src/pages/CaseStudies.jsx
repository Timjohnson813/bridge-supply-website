import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Users, 
  Star,
  ArrowRight,
  BarChart3,
  ShoppingCart,
  Award,
  Zap
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "EcoBeauty Brand",
      industry: "Beauty & Personal Care",
      challenge: "Low conversion rates and poor organic visibility",
      solution: "Complete listing optimization and strategic PPC campaigns",
      results: {
        revenue: "+300%",
        conversion: "+150%",
        acos: "-45%",
        timeframe: "6 months"
      },
      description: "EcoBeauty was struggling with low conversion rates and minimal organic visibility on Amazon. Their product listings were poorly optimized, and their PPC campaigns were burning through budget without generating profitable sales.",
      implementation: [
        "Conducted comprehensive keyword research and competitor analysis",
        "Completely rewrote product titles, bullet points, and descriptions",
        "Created high-converting A+ content with professional imagery",
        "Restructured PPC campaigns with strategic keyword targeting",
        "Implemented negative keyword strategies to reduce wasted spend"
      ],
      outcome: "Within 6 months, EcoBeauty saw a 300% increase in revenue, 150% improvement in conversion rates, and 45% reduction in ACOS. They went from struggling to compete to becoming a top seller in their category.",
      testimonial: "Bridge Supply Co transformed our Amazon presence completely. We went from barely breaking even to becoming one of the top sellers in our category. Their expertise in both listing optimization and PPC management is unmatched.",
      author: "Sarah Johnson, Founder"
    },
    {
      id: 2,
      company: "TechGadgets Pro",
      industry: "Electronics & Accessories",
      challenge: "Unauthorized resellers destroying brand value and margins",
      solution: "Comprehensive brand protection and authorized dealer network",
      results: {
        margin: "+40%",
        unauthorized: "-90%",
        brand_value: "+200%",
        timeframe: "4 months"
      },
      description: "TechGadgets Pro was losing significant revenue to unauthorized resellers who were undercutting their prices and damaging their brand reputation. Counterfeit products were also appearing on the marketplace.",
      implementation: [
        "Set up Amazon Brand Registry and IP protection",
        "Identified and removed 50+ unauthorized sellers",
        "Implemented MAP pricing policies and enforcement",
        "Created authorized dealer verification process",
        "Established ongoing monitoring and protection systems"
      ],
      outcome: "In just 4 months, we eliminated 90% of unauthorized sellers, increased profit margins by 40%, and significantly improved brand perception. TechGadgets Pro now has complete control over their brand presence on Amazon.",
      testimonial: "The brand protection service saved our business. We were losing thousands to unauthorized sellers every month. Now we have complete control over our brand and pricing, and our margins have never been better.",
      author: "Mike Chen, CEO"
    },
    {
      id: 3,
      company: "HomeEssentials Co",
      industry: "Home & Kitchen",
      challenge: "Complex inventory management and fulfillment issues",
      solution: "Complete logistics overhaul and inventory optimization",
      results: {
        efficiency: "+60%",
        costs: "-35%",
        stockouts: "-80%",
        timeframe: "3 months"
      },
      description: "HomeEssentials Co was struggling with complex inventory management across multiple SKUs, frequent stockouts, and high fulfillment costs that were eating into their profits.",
      implementation: [
        "Analyzed current logistics and identified inefficiencies",
        "Implemented advanced inventory forecasting system",
        "Optimized FBA setup and shipping strategies",
        "Created automated reorder points and safety stock levels",
        "Established performance monitoring and optimization protocols"
      ],
      outcome: "The logistics optimization resulted in 60% improved efficiency, 35% cost reduction, and 80% fewer stockouts. HomeEssentials Co now operates with precision and predictability.",
      testimonial: "Our logistics were a nightmare before working with Bridge Supply Co. Now everything runs like clockwork. We've cut costs significantly while improving customer satisfaction. It's been a game-changer for our business.",
      author: "Lisa Rodriguez, Operations Director"
    }
  ];

  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$50M+",
      label: "Revenue Generated",
      description: "Total revenue generated for our clients across all services"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "300%",
      label: "Average Growth",
      description: "Average revenue growth achieved by our clients"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Brands Scaled",
      description: "Number of brands we've helped scale on Amazon"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      description: "Percentage of clients who achieve their growth goals"
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
              Success Stories
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Real results from real brands. See how we've helped companies transform their Amazon presence 
              and achieve remarkable growth through our proven strategies.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Start Your Success Story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers don't lie. Here's the impact we've made for brands across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{metric.icon}</div>
                    </div>
                    <CardTitle className="text-3xl font-bold">{metric.value}</CardTitle>
                    <CardDescription className="font-semibold">{metric.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed case studies showing how we've helped brands overcome challenges and achieve exceptional growth.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Company Info & Challenge */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                        <Badge variant="secondary" className="mb-4">{study.industry}</Badge>
                        <p className="text-muted-foreground">{study.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-green-600">Results Achieved</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-2xl font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace('_', ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Implementation</h4>
                        <ul className="space-y-1">
                          {study.implementation.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Testimonial & Outcome */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Outcome</h4>
                        <p className="text-sm text-muted-foreground">{study.outcome}</p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-sm italic mb-3">
                          "{study.testimonial}"
                        </blockquote>
                        <cite className="text-xs font-semibold">— {study.author}</cite>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, helping brands of all types achieve Amazon success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Beauty & Personal Care", icon: <Zap className="w-8 h-8" />, count: "150+ brands" },
              { name: "Electronics & Tech", icon: <BarChart3 className="w-8 h-8" />, count: "100+ brands" },
              { name: "Home & Kitchen", icon: <ShoppingCart className="w-8 h-8" />, count: "120+ brands" },
              { name: "Health & Wellness", icon: <Target className="w-8 h-8" />, count: "80+ brands" },
              { name: "Sports & Outdoors", icon: <TrendingUp className="w-8 h-8" />, count: "60+ brands" },
              { name: "Fashion & Apparel", icon: <Users className="w-8 h-8" />, count: "40+ brands" }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{industry.icon}</div>
                    </div>
                    <CardTitle>{industry.name}</CardTitle>
                    <CardDescription>{industry.count}</CardDescription>
                  </CardHeader>
                </Card>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of brands who have transformed their Amazon presence and achieved remarkable growth with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

