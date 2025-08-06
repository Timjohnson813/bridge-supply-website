import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, BookOpen, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AmazonSellerHandbook = () => {
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
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 inline mr-1" />
                Complete Guide
              </span>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                25 min read
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-1" />
                Bridge Supply Team
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Amazon Seller's Complete Handbook: Enhanced Edition
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Your definitive guide to Amazon selling success, from account setup to advanced growth strategies. Everything you need to build a thriving Amazon business in 2025.
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
                Selling on Amazon in 2025 represents an unparalleled opportunity for entrepreneurs and businesses alike. With over 300 million active customer accounts globally and third-party sellers consistently accounting for more than 60% of product sales, the platform is a dominant force in e-commerce.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  The Evolving Amazon Landscape
                </h3>
                <p className="text-blue-700 mb-3">
                  Amazon's marketplace is dynamic, constantly evolving with new policies, algorithms, and competitive pressures. Success requires:
                </p>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li>Adaptability to platform changes</li>
                  <li>Data-driven decision making</li>
                  <li>Commitment to continuous learning</li>
                  <li>Focus on brand building and customer experience</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <Users className="w-6 h-6 inline mr-2" />
                  Setting Up Your Amazon Seller Account
                </h3>
                <p className="mb-6">
                  The initial setup of your Amazon Seller Account is the bedrock upon which your entire Amazon business will be built. Mistakes or oversights at this stage can lead to significant delays or even account suspension.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Individual Plan</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Ideal for &lt;40 items per month</li>
                      <li>$0.99 fee per item sold</li>
                      <li>No monthly subscription</li>
                      <li>Limited access to tools</li>
                      <li>No Buy Box eligibility (usually)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Professional Plan (Recommended)</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>$39.99 per month</li>
                      <li>Access to Amazon Advertising</li>
                      <li>Advanced inventory management</li>
                      <li>Buy Box eligibility</li>
                      <li>Detailed reporting features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Required Documentation</h3>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">📋 Preparation Checklist</h4>
                  <p className="text-sm text-yellow-700">
                    Have all documents ready before starting registration to streamline the process and prevent delays.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Business Information</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Dedicated business email address</li>
                      <li>Bank account for deposits</li>
                      <li>Phone number for verification</li>
                      <li>Tax identification (EIN/SSN)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">Identity Verification</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Government-issued ID</li>
                      <li>Credit card for fee payments</li>
                      <li>Bank statements (if requested)</li>
                      <li>Business licenses/registrations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <ShoppingCart className="w-6 h-6 inline mr-2" />
                  Amazon Business Models
                </h3>
                <p className="mb-6">
                  Amazon's ecosystem supports various business models. Many successful sellers employ a hybrid approach, leveraging different models for different product lines.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">1. Fulfillment by Amazon (FBA)</h4>
                    <p className="text-sm mb-3">Amazon handles storage, shipping, customer service, and returns for your products.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2 text-green-600">✅ Advantages</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Prime eligibility for faster shipping</li>
                          <li>Scalability without infrastructure investment</li>
                          <li>Enhanced customer trust</li>
                          <li>Buy Box advantage</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-red-600">⚠️ Considerations</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Various FBA fees</li>
                          <li>Strict inventory requirements</li>
                          <li>Less control over fulfillment</li>
                          <li>Storage limits based on IPI score</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">2. Fulfillment by Merchant (FBM)</h4>
                    <p className="text-sm mb-3">You handle storage, packing, and shipping orders yourself or through a 3PL.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2 text-green-600">✅ Advantages</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Lower fees (potentially)</li>
                          <li>Greater control over fulfillment</li>
                          <li>Personalized brand experience</li>
                          <li>Better for oversized items</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-red-600">⚠️ Considerations</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>No automatic Prime eligibility</li>
                          <li>More operational complexity</li>
                          <li>Customer service responsibility</li>
                          <li>Shipping cost management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">3. Dropshipping</h4>
                    <p className="text-sm mb-3">Products are shipped directly from supplier to customer without holding inventory.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2 text-green-600">✅ Advantages</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Low startup costs</li>
                          <li>No inventory investment</li>
                          <li>Wide product selection</li>
                          <li>Location independence</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-red-600">⚠️ Considerations</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Lower profit margins</li>
                          <li>Quality control challenges</li>
                          <li>Supplier dependency</li>
                          <li>Amazon policy compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <TrendingUp className="w-6 h-6 inline mr-2" />
                  Key Success Factors
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Product Research</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Market demand validation</li>
                      <li>Competition analysis</li>
                      <li>Profit margin calculation</li>
                      <li>Seasonal trends consideration</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Listing Optimization</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Keyword research and implementation</li>
                      <li>High-quality product images</li>
                      <li>Compelling product descriptions</li>
                      <li>A+ Content utilization</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Performance Monitoring</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Sales and traffic analytics</li>
                      <li>Customer feedback management</li>
                      <li>Inventory performance tracking</li>
                      <li>Advertising ROI optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Account Health & Compliance</h3>
                
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2 text-red-600">⚠️ Critical Metrics to Monitor</h4>
                  <p className="text-sm text-red-700">
                    Maintaining good account health is essential for long-term success on Amazon.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">Performance Metrics</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Order Defect Rate:</strong> Keep below 1%</li>
                      <li><strong>Pre-fulfillment Cancel Rate:</strong> Keep below 2.5%</li>
                      <li><strong>Late Shipment Rate:</strong> Keep below 4%</li>
                      <li><strong>Customer Service Response:</strong> Within 24 hours</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Policy Compliance</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Product authenticity and safety</li>
                      <li>Intellectual property respect</li>
                      <li>Accurate product information</li>
                      <li>Fair pricing practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Your Amazon Success Journey Starts Here</h3>
                <p className="text-lg">
                  Building a successful Amazon business requires strategic planning, continuous optimization, and dedication to customer satisfaction. This handbook provides the foundation, but success comes from consistent execution and adaptation to the ever-evolving marketplace.
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
            <h3 className="text-3xl font-bold mb-6">Ready to Launch Your Amazon Business?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our Amazon experts can guide you through every step of your seller journey, 
              from account setup to scaling your business for maximum profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Expert Guidance
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

export default AmazonSellerHandbook;

