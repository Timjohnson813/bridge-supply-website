import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';

const RemoveUnauthorizedSellers = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 inline mr-1" />
                Brand Protection
              </span>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-1" />
                Bridge Supply Team
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How to Remove Unauthorized Sellers: A Complete Guide
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Step-by-step guide to identifying, reporting, and removing unauthorized sellers who are damaging your brand and stealing your sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-lg leading-relaxed space-y-8">
              <p className="text-xl text-muted-foreground mb-8">
                Unauthorized sellers can severely damage your brand reputation, erode profit margins, and create customer confusion. This comprehensive guide provides actionable strategies to identify, report, and remove unauthorized sellers from your Amazon listings.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-800">Why Unauthorized Sellers Are Dangerous</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Damage brand reputation with poor customer service</li>
                  <li>Sell counterfeit or inferior products</li>
                  <li>Undercut your pricing strategy</li>
                  <li>Violate MAP (Minimum Advertised Price) policies</li>
                  <li>Create customer confusion about authorized retailers</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Step 1: Identify Unauthorized Sellers</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Monitor Your Listings</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Check your product detail pages daily</li>
                      <li>Look for new sellers in the "Other Sellers" section</li>
                      <li>Monitor pricing changes and Buy Box winners</li>
                      <li>Use automated monitoring tools</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Red Flags to Watch For</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Sellers with poor feedback ratings</li>
                      <li>Significantly lower prices than authorized retailers</li>
                      <li>Sellers located in unexpected regions</li>
                      <li>New seller accounts with high-volume listings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Step 2: Document Everything</h3>
                <p className="mb-4">
                  Before taking action, gather comprehensive evidence of unauthorized selling activities.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Evidence to Collect:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-yellow-700">
                    <li>Screenshots of unauthorized listings</li>
                    <li>Seller information and contact details</li>
                    <li>Pricing evidence and Buy Box history</li>
                    <li>Customer complaints or reviews</li>
                    <li>Product authenticity concerns</li>
                    <li>Violation of your distribution agreements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Step 3: Take Action</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">1. Direct Contact</h4>
                    <p className="text-sm mb-2">Start with a professional cease and desist communication:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Send a formal notice to the unauthorized seller</li>
                      <li>Reference your trademark and distribution rights</li>
                      <li>Request immediate removal of listings</li>
                      <li>Set a reasonable deadline for compliance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">2. Amazon Brand Registry</h4>
                    <p className="text-sm mb-2">Leverage Amazon's brand protection tools:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>File a Report a Violation through Brand Registry</li>
                      <li>Use the Brand Gating feature to restrict sellers</li>
                      <li>Submit intellectual property complaints</li>
                      <li>Utilize Transparency program for authentication</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">3. Legal Action</h4>
                    <p className="text-sm mb-2">For persistent violators, consider legal remedies:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Trademark infringement claims</li>
                      <li>Copyright violation reports</li>
                      <li>Unfair competition lawsuits</li>
                      <li>Temporary restraining orders</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Prevention Strategies</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Proactive Measures</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Register your brand with Amazon Brand Registry</li>
                      <li>Implement strong distribution agreements</li>
                      <li>Use unique product identifiers (UPC/EAN)</li>
                      <li>Monitor your supply chain closely</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Ongoing Protection</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Regular monitoring and enforcement</li>
                      <li>Educate authorized retailers about policies</li>
                      <li>Implement MAP pricing policies</li>
                      <li>Use brand protection services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Take Control of Your Brand</h3>
                <p className="text-lg">
                  Removing unauthorized sellers requires persistence and the right strategy. By following this systematic approach and leveraging available tools, you can protect your brand integrity and maintain control over your Amazon presence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Need Help Protecting Your Brand?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our brand protection experts can help you identify and remove unauthorized sellers, 
              implement prevention strategies, and maintain control over your Amazon presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Brand Protection Help
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">
                  Read More Articles
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RemoveUnauthorizedSellers;

