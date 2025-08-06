import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Handshake, 
  Shield, 
  TrendingUp, 
  Target, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Crown,
  Zap,
  Globe,
  Award,
  Lock,
  Truck,
  Search,
  BarChart3,
  Settings,
  Heart,
  Sparkles,
  Diamond,
  Gem
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const StrategicPartnership = () => {
  const partnershipBenefits = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Direct Brand Partnership & Full Amazon Development",
      description: "We work directly with brands to build and execute complete Amazon strategies—from product selection and content creation to launching listings, driving first sales, and scaling growth.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Exclusive Collaboration with Brand Oversight",
      description: "We strictly maintain brand pricing integrity and never undercut your MAP or set prices below your own brand's pricing.",
      color: "from-gold-500 to-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Selective Wholesaler Control",
      description: "By monitoring reseller numbers, we remove unauthorized sellers via IP enforcement, authorized only with your consent to reduce over-competition and preserve pricing.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "MAP + Guidelines Enforcement",
      description: "We adhere fully to your Minimum Advertised Price policies and brand guidelines, managing reseller behavior and communications on your behalf.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium A+ Advertising & Brand Enhancements",
      description: "Our A+ content campaigns boost visibility and engagement—pushing listings into top ranking positions while strengthening brand recognition.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Inventory Buy-In & Storage Support",
      description: "We purchase and warehouse your products in our own fulfillment centers, ensuring consistent supply, careful handling, and stock control.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Logistical Diversification",
      description: "We distribute inventory across Amazon fulfillment centers across the U.S., speeding delivery times and improving coverage.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Full Suite of Brand Services",
      description: "Beyond procurement, we offer reputation management, profile optimization, advertising, SEO, analytics, and reseller oversight—all aligned under one branded engagement.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Custom SEO and Profile Optimization",
      description: "We handle Amazon SEO, keyword-rich product descriptions, backend search terms, and continual optimization for visibility and conversion.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Tailored Support for New-to-Amazon Brands",
      description: "For brands not yet on Amazon, we onboard them from scratch—product selection, listings creation, persuasive product detail writing, advertising setup, monitoring, and ongoing scaled growth management.",
      color: "from-rose-500 to-pink-500"
    }
  ];

  const additionalServices = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advertising Design & Management",
      description: "Professional campaign creation and optimization"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Reputation & Profile Management",
      description: "Brand image protection and enhancement"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reseller Analytics & Monitoring",
      description: "Advanced tracking and competitive intelligence"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SEO Consulting & Strategy",
      description: "Ongoing optimization and keyword research"
    }
  ];

  const floatingObjects = [
    { type: 'diamond', x: '10%', y: '20%', delay: 0, size: 'w-8 h-8' },
    { type: 'gem', x: '85%', y: '15%', delay: 0.5, size: 'w-6 h-6' },
    { type: 'star', x: '15%', y: '70%', delay: 1, size: 'w-10 h-10' },
    { type: 'crown', x: '80%', y: '60%', delay: 1.5, size: 'w-12 h-12' },
    { type: 'sparkle', x: '25%', y: '40%', delay: 2, size: 'w-4 h-4' },
    { type: 'handshake', x: '75%', y: '35%', delay: 2.5, size: 'w-14 h-14' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with 3D Elements */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating 3D Objects */}
          {floatingObjects.map((obj, index) => (
            <motion.div
              key={obj.type + index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
              animate={{ 
                opacity: 0.6, 
                scale: 1, 
                rotateY: 360,
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 4, 
                delay: obj.delay,
                rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className={`absolute ${obj.size} floating-3d-object ${obj.type}`}
              style={{ left: obj.x, top: obj.y }}
            >
              {obj.type === 'diamond' && <Diamond className="w-full h-full text-yellow-400" />}
              {obj.type === 'gem' && <Gem className="w-full h-full text-purple-400" />}
              {obj.type === 'star' && <Star className="w-full h-full text-gold-400" />}
              {obj.type === 'crown' && <Crown className="w-full h-full text-yellow-500" />}
              {obj.type === 'sparkle' && <Sparkles className="w-full h-full text-pink-400" />}
              {obj.type === 'handshake' && <Handshake className="w-full h-full text-blue-400" />}
            </motion.div>
          ))}

          {/* Particle Effects */}
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle gold"></div>
          ))}

          {/* Morphing Shapes */}
          <div className="morphing-shape w-40 h-40 bg-gradient-to-r from-gold-500/20 to-yellow-500/20" style={{ top: '10%', right: '5%' }}></div>
          <div className="morphing-shape w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20" style={{ bottom: '15%', left: '8%' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-gold-500 to-yellow-500 text-black font-bold px-6 py-2 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              EXCLUSIVE PARTNERSHIPS
            </Badge>
            
            <h1 className="text-5xl lg:text-8xl font-bold mb-6 leading-tight">
              Why Brands
              <br />
              <span className="gradient-text bg-gradient-to-r from-gold-400 via-yellow-400 to-gold-600">
                Partner with Us
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Exclusive collaboration with small and medium-sized brands aiming to thrive on Amazon. 
              We guide you from first steps to full-scale success with complete brand protection and integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-black font-bold rounded-full px-8 pulse-button glow-effect"
                asChild
              >
                <Link to="/contact">
                  <Crown className="mr-2 w-5 h-5" />
                  Apply for Partnership
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 rounded-full px-8"
                asChild
              >
                <Link to="/contact">
                  Learn More About Partnership
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">
              <Diamond className="w-4 h-4 mr-2" />
              EXCLUSIVE BENEFITS
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              10 Reasons to Choose
              <br />
              <span className="gradient-text">Strategic Partnership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We don't just provide services—we become your exclusive Amazon growth partner, 
              protecting your brand while scaling your success with precision and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="partnership-benefit-card h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-500/30 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              ADDITIONAL SERVICES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Full Suite of Brand Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our complete range of services at any time—all designed to support 
              and enhance your exclusive brand collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-yellow-500 text-black px-4 py-2">
              <Handshake className="w-4 h-4 mr-2" />
              PARTNERSHIP PROCESS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How We Build Success Together
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our proven partnership process ensures your brand receives the exclusive attention 
              and strategic focus it deserves.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Partnership Application",
                description: "Submit your brand for exclusive partnership consideration. We evaluate fit, potential, and alignment with our strategic approach.",
                icon: <Users className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Strategic Planning",
                description: "We develop a comprehensive Amazon strategy tailored to your brand, including pricing protection, growth targets, and market positioning.",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Exclusive Execution",
                description: "Full implementation with dedicated support, brand protection, inventory management, and continuous optimization for maximum growth.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-gold-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-2xl">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                TRUSTED PARTNER
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The Trusted Partner Small & Medium Brands Deserve
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Bridge Supply Co. is the exclusive partner that small and medium brands deserve—offering 
                  full-service Amazon expertise, pricing integrity, and exclusive cooperation that gets results.
                </p>
                <p>
                  We protect your brand, elevate your presence, and grow your sales with precision and care. 
                  Our strategic partnership approach ensures you receive dedicated attention and customized 
                  solutions that align with your brand's unique goals and values.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold">100% Brand Protection Guarantee</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold">Exclusive Partnership Approach</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold">Dedicated Account Management</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="text-center hover-lift bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">50+</CardTitle>
                  <CardDescription>Exclusive Brand Partners</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift bg-gradient-to-br from-gold-50 to-yellow-50 dark:from-gold-900/20 dark:to-yellow-900/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">$100M+</CardTitle>
                  <CardDescription>Partnership Revenue</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">100%</CardTitle>
                  <CardDescription>Brand Protection Rate</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">98%</CardTitle>
                  <CardDescription>Partner Satisfaction</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 via-yellow-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-black"
          >
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for Exclusive Partnership?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the select group of brands that receive our exclusive partnership treatment. 
              Let's build your Amazon empire together with complete brand protection and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-900 font-bold rounded-full px-8"
                asChild
              >
                <Link to="/contact">
                  <Handshake className="mr-2 w-5 h-5" />
                  Apply for Partnership <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-black text-black hover:bg-black/10 rounded-full px-8"
                asChild
              >
                <Link to="/contact">
                  Schedule Strategy Call
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

export default StrategicPartnership;

