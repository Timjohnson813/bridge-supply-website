import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    revenue: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('New Contact Form Submission - Book a Call');
      const body = encodeURIComponent(`
New contact form submission:

Full Name: ${formData.fullName}
Email: ${formData.email}
Company Name: ${formData.companyName}
Website/Brand: ${formData.website}
Current Monthly Revenue: ${formData.revenue}

Goals:
${formData.goals}

Please contact this person to schedule a call.
      `);
      
      const mailtoLink = `mailto:accounts@bridgesupplyco.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        website: '',
        revenue: '',
        goals: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-background/80 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl lg:text-4xl font-bold mb-4">
                Book a Call with Us
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about your brand and goals. We'll get back to you within 24 hours with a customized strategy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Website/Brand
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="text"
                      placeholder="www.yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                    Current Monthly Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
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
                  <label htmlFor="goals" className="block text-sm font-medium mb-2">
                    Tell us about your goals *
                  </label>
                  <Textarea
                    id="goals"
                    name="goals"
                    placeholder="What are your main goals for Amazon? What challenges are you facing? How can we help you scale?"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you! Your message has been sent. We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    There was an error sending your message. Please try again or contact us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Book a Call
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

