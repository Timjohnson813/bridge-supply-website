import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

import BookingModal from '../components/BookingModal';
import { 
  ArrowRight, 
  Package, 
  TrendingUp, 
  Target, 
  Users, 
  Star,
  Play,
  Download,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Amazon Listing Creation",
      description: "Professional product listings that convert browsers into buyers with optimized content and imagery.",
      link: "/services/listing-creation"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Amazon Advertising",
      description: "Strategic PPC campaigns that maximize ROI and drive targeted traffic to your products.",
      link: "/services/amazon-advertising"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Protection",
      description: "Eliminate unauthorized resellers and protect your brand reputation on Amazon.",
      link: "/services/brand-protection"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Brand Management",
      description: "Complete Amazon account management so you can focus on growing your business.",
      link: "/services/brand-management"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Logistics & Inventory",
      description: "Streamlined logistics systems and inventory tracking for optimal performance.",
      link: "/services/logistics"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Distributor Search",
      description: "Find and connect with distributors to expand into new channels and markets.",
      link: "/services/distributor-search"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "EcoBeauty Brand",
      text: "Bridge Supply Co transformed our Amazon presence. Sales increased by 300% in just 6 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "TechGadgets Pro",
      text: "Their PPC management is exceptional. Our ACOS dropped by 40% while sales doubled.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "HomeEssentials Co",
      text: "Professional, results-driven, and always available. Best investment we've made for our business.",
      rating: 5
    }
  ];

  const floating3DObjects = [
    { type: "cube", x: "15%", y: "25%", delay: 0, size: "w-16 h-16" },
    { type: "sphere", x: "75%", y: "20%", delay: 0.5, size: "w-20 h-20" },
    { type: "pyramid", x: "20%", y: "65%", delay: 1, size: "w-14 h-14" },
    { type: "cylinder", x: "80%", y: "75%", delay: 1.5, size: "w-18 h-18" },
    { type: "diamond", x: "60%", y: "30%", delay: 2, size: "w-12 h-12" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Floating 3D Objects */}
        {floating3DObjects.map((obj, index) => (
          <motion.div
            key={obj.type + index}
            initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
            animate={{ 
              opacity: 0.8, 
              scale: 1, 
              rotateY: 360,
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 3, 
              delay: obj.delay,
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute ${obj.size} floating-3d-object ${obj.type}`}
            style={{ left: obj.x, top: obj.y }}
          >
            <div className={`w-full h-full ${obj.type}-shape`}></div>
          </motion.div>
        ))}

        {/* Particle Effects */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}

        {/* Morphing Shapes */}
        <div className="morphing-shape w-32 h-32" style={{ top: '10%', right: '10%' }}></div>
        <div className="morphing-shape w-24 h-24" style={{ bottom: '20%', left: '5%' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-8xl font-bold mb-6 leading-tight">
                We Help Brands
                <br />
                <span className="gradient-text">
                  Grow & Dominate
                </span>
                <br />
                on Amazon
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl">
                Full-service Amazon brand management, wholesale purchasing, and distribution growth. We don't just consult — we take control and deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 pulse-button glow-effect"
                  asChild
                >
                  <Link to="/contact" className="text-white">
                    Let's Scale Your Brand <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Free Audit
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              We Build Amazon Empires for Brands Ready to Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Tim and Anton are Amazon business experts who work directly with brands to help them scale and succeed. We don't just consult — we buy wholesale, manage listings, protect brand reputation, and handle everything from A to Z.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center stats-counter"
            >
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground font-medium">Brands from Different Industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center stats-counter"
            >
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">$100M+</div>
              <p className="text-foreground font-medium">Lifetime Sales Generated</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center stats-counter"
            >
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">98%</div>
              <p className="text-foreground font-medium">Client Satisfaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center stats-counter"
            >
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">24/7</div>
              <p className="text-foreground font-medium">Support Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Amazon growth solutions designed to transform your brand into a marketplace leader
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="service-card h-full w-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="text-base mb-4 flex-grow">
                      {service.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" asChild className="mt-auto self-start">
                      <Link to={service.link}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped brands achieve remarkable success on Amazon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="floating-card">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Dominate Amazon?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can take full control of your Amazon presence and scale your business to new heights.
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
                className="border-white text-white hover:bg-white hover:text-purple-600 transition-colors"
                asChild
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
