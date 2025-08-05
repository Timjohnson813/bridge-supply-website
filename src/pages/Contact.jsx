import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  MessageSquare,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    monthlyRevenue: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@bridgesupplyco.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "1-800-BRIDGE-1",
      description: "Monday to Friday, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Remote & Worldwide",
      description: "Serving clients globally"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "< 24 Hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Free Amazon Audit",
      description: "Comprehensive analysis of your current Amazon presence with actionable recommendations.",
      duration: "30 minutes",
      price: "Free"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategy Consultation",
      description: "Deep-dive strategy session to create a customized growth plan for your brand.",
      duration: "60 minutes",
      price: "Free"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Partnership Discussion",
      description: "Explore how we can become your Amazon growth partner and take control of your success.",
      duration: "45 minutes",
      price: "Free"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start working on my account?",
      answer: "We can typically begin working on your account within 48-72 hours after our initial consultation and agreement signing."
    },
    {
      question: "Do you work with brands of all sizes?",
      answer: "Yes, we work with brands ranging from startups to established companies. Our strategies are scalable and customized to your specific needs and goals."
    },
    {
      question: "What makes you different from other Amazon agencies?",
      answer: "We don't just consult - we take full control and become true partners in your success. We buy wholesale, manage everything from A to Z, and focus on building Amazon empires."
    },
    {
      question: "How do you measure success?",
      answer: "We measure success through concrete metrics: revenue growth, profit margins, market share, conversion rates, and overall brand performance on Amazon."
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
              Let's Scale Your Brand
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Ready to dominate Amazon? Let's discuss how we can take full control of your Amazon presence 
              and build your brand empire together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Tell us about your brand and goals. We'll get back to you within 24 hours with a customized strategy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website/Brand</Label>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="www.yourwebsite.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="monthlyRevenue">Current Monthly Revenue</Label>
                      <select
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select revenue range</option>
                        <option value="0-10k">$0 - $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k+">$500,000+</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your goals *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What are your main goals for Amazon? What challenges are you facing? How can we help you scale?"
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{info.title}</h3>
                            <p className="text-primary font-medium">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    "500+ brands successfully scaled",
                    "$50M+ in revenue generated for clients",
                    "98% client satisfaction rate",
                    "24/7 support and monitoring",
                    "Proven track record of results",
                    "Full-service Amazon management"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Free Consultations Available</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the type of consultation that best fits your needs. All consultations are completely free with no obligations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Price:</span>
                        <span className="font-semibold text-green-600">{service.price}</span>
                      </div>
                      <Button className="w-full">
                        <Calendar className="mr-2 w-4 h-4" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and partnership approach
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Dominate Amazon?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait another day to start scaling your brand. Let's discuss your goals and create a strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 1-800-BRIDGE-1
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

