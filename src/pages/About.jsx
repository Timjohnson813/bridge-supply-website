import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We focus on what actually moves the needle on Amazon — measurable growth and profitability."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Protection",
      description: "We eliminate unauthorized resellers and protect your brand reputation at every step."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Approach",
      description: "We become an extension of your team, working directly with you to achieve your goals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      description: "From small brands to Amazon empires — we build systems that scale with your success."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Founded Bridge Supply Co",
      description: "Tim and Tony started with a vision to help small brands succeed on Amazon through strategic partnerships."
    },
    {
      year: "2019",
      title: "First 100 Brands",
      description: "Reached our first milestone of helping 100 brands scale their Amazon presence and revenue."
    },
    {
      year: "2021",
      title: "Full-Service Expansion",
      description: "Expanded to offer complete Amazon management, from wholesale purchasing to brand protection."
    },
    {
      year: "2023",
      title: "Global Distribution",
      description: "Launched distributor search and outreach services, helping brands expand into new channels worldwide."
    },
    {
      year: "2025",
      title: "500+ Success Stories",
      description: "Now helping over 500 brands dominate Amazon with $50M+ in revenue generated for our clients."
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
              Meet Tim & Tony
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Amazon business experts who work directly with brands to help them scale and succeed through strategic partnerships and proven methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                We Don't Just Consult — We Take Control
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Tim and Tony are Amazon business experts who work directly with brands to help them scale and succeed. 
                  Their company focuses on wholesale purchasing, full-service Amazon brand management, and distribution growth.
                </p>
                <p>
                  What sets us apart? We don't just consult — we buy wholesale, manage listings, protect brand reputation, 
                  and handle everything from A to Z for our clients. We become true partners in your success.
                </p>
                <p>
                  Our approach is comprehensive and hands-on. We guide brands toward achieving their Amazon goals, 
                  whether that's growing revenue, becoming buy-box dominant, or expanding globally. In short — we build 
                  Amazon empires for brands that are ready to scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">500+</CardTitle>
                  <CardDescription>Brands Scaled</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">$50M+</CardTitle>
                  <CardDescription>Revenue Generated</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">98%</CardTitle>
                  <CardDescription>Client Satisfaction</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">24/7</CardTitle>
                  <CardDescription>Support Available</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach covers every aspect of Amazon success, from initial setup to ongoing optimization and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Brand Management & Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Creating high-converting Amazon product listings</li>
                    <li>• Running Amazon PPC campaigns and scaling ad profitability</li>
                    <li>• Taking over full Amazon account management</li>
                    <li>• Helping brands achieve buy-box dominance</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Operations & Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Setting up logistics systems and inventory tracking</li>
                    <li>• Eliminating unauthorized resellers</li>
                    <li>• Improving brand reputation and customer experience</li>
                    <li>• Wholesale purchasing and distribution management</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Expansion & Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Helping brands find distributors and expand channels</li>
                    <li>• Global expansion strategies and market entry</li>
                    <li>• New marketplace setup and optimization</li>
                    <li>• Strategic partnerships and business development</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Strategic Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Revenue growth and profitability optimization</li>
                    <li>• Competitive analysis and market positioning</li>
                    <li>• Long-term strategic planning and goal setting</li>
                    <li>• Performance monitoring and continuous improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every partnership we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{value.icon}</div>
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From startup to Amazon empire builders — here's how we've grown alongside our clients.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can take full control of your Amazon presence and build your brand empire together.
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

export default About;

