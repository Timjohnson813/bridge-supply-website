import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';

const ProductLaunchChecklist = () => {
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
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 inline mr-1" />
                Product Launch
              </span>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-1" />
                Bridge Supply Team
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Product Launch Checklist: Ensuring a Successful Amazon Debut
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              A comprehensive step-by-step guide to ensure your product launch is optimized for sustained growth and maximum impact on Amazon.
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
                Launching a new product on Amazon is a multifaceted endeavor that requires meticulous planning and execution. A well-structured launch can significantly impact your product's initial sales velocity, organic ranking, and long-term success. This comprehensive checklist provides a step-by-step guide to ensure your product debut is not only successful but also optimized for sustained growth.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Phase 1: Before Launch - Laying the Groundwork
                </h3>
                <p className="text-blue-700">
                  The preparatory phase is arguably the most critical. Thorough research, strategic planning, and diligent preparation will minimize risks and maximize your chances of a strong market entry.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">1. Product Research & Validation</h3>
                <p className="mb-4">
                  Before investing heavily, validate your product idea to ensure it meets a genuine market need and has profit potential.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Market Demand Confirmation:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Keyword research using Amazon tools</li>
                      <li>Trend analysis with Google Trends</li>
                      <li>Customer pain point analysis</li>
                      <li>Review mining for insights</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Competition Analysis:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Direct competitor identification</li>
                      <li>Market saturation assessment</li>
                      <li>Pricing strategy analysis</li>
                      <li>Gap identification</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">Profitability Target:</h4>
                  <p className="text-sm text-yellow-700">
                    Aim for a gross margin of at least 30-40% after COGS and Amazon fees to allow for advertising and other overheads.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">2. Supplier Sourcing & Quality Control</h3>
                <p className="mb-4">
                  A reliable supply chain is fundamental. Ensure your product is manufactured to high standards and can be consistently supplied.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2 text-purple-600">Supplier ID</h4>
                    <ul className="text-sm space-y-1">
                      <li>Research manufacturers</li>
                      <li>Verify credentials</li>
                      <li>Request quotes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2 text-green-600">Quality Assurance</h4>
                    <ul className="text-sm space-y-1">
                      <li>Order samples</li>
                      <li>Third-party inspections</li>
                      <li>Packaging compliance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2 text-blue-600">FBA Prep</h4>
                    <ul className="text-sm space-y-1">
                      <li>FNSKU labels</li>
                      <li>Product preparation</li>
                      <li>Shipment planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">3. Listing Optimization</h3>
                <p className="mb-4">
                  Your product listing is your primary sales tool. It must be optimized for both Amazon's algorithm and human readability.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Product Title Structure:</h4>
                    <p className="text-sm mb-2">[Brand] + [Main Keyword] + [Key Feature 1] + [Key Feature 2] + [Size/Color]</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Include most important keywords naturally</li>
                      <li>Stay within 200-250 character limit</li>
                      <li>Avoid promotional language</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Key Product Features (Bullet Points):</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Focus on benefits, not just features</li>
                      <li>Start with strong, capitalized benefit statements</li>
                      <li>Integrate secondary keywords naturally</li>
                      <li>Address distinct aspects in each bullet</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Images Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Main image: Pure white background, 1000x1000px minimum</li>
                      <li>Secondary images: Lifestyle shots, close-ups, different angles</li>
                      <li>Include size comparisons and infographic images</li>
                      <li>Aim for 7-9 high-quality images</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">4. Pricing Strategy</h3>
                <p className="mb-4">
                  Set a price that ensures profitability while remaining attractive to customers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Pricing Considerations:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Cost-plus pricing methodology</li>
                      <li>Competitor price analysis</li>
                      <li>Psychological pricing tactics</li>
                      <li>Launch pricing strategy</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Buy Box Factors:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Competitive pricing</li>
                      <li>Seller performance metrics</li>
                      <li>Fulfillment method (FBA advantage)</li>
                      <li>Inventory availability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Phase 2: Launch Day & Week 1 - Gaining Initial Momentum
                </h3>
                <p className="text-green-700">
                  The first few weeks after launch are critical for establishing your product's presence and gathering initial data.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Launch Week Priorities</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-600">Critical Actions:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Monitor inventory levels closely</li>
                      <li>Launch PPC campaigns immediately</li>
                      <li>Track keyword rankings</li>
                      <li>Respond to customer questions quickly</li>
                      <li>Monitor for listing issues</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Performance Metrics:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Sales velocity tracking</li>
                      <li>Conversion rate monitoring</li>
                      <li>PPC performance analysis</li>
                      <li>Organic ranking progress</li>
                      <li>Customer feedback collection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4 text-primary">Advanced Launch Strategies</h3>
                
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Inventory Management</h4>
                <div className="bg-white p-4 rounded-lg mb-6">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Demand Forecasting:</strong> Use historical data and seasonality</li>
                    <li><strong>Lead Time Planning:</strong> Account for manufacturing and shipping delays</li>
                    <li><strong>Safety Stock:</strong> Maintain buffer for unexpected demand</li>
                    <li><strong>IPI Score Monitoring:</strong> Optimize inventory performance</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold mb-3 text-gray-800">Review Generation Strategy</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Follow-up Sequences:</strong> Automated email campaigns</li>
                    <li><strong>Amazon's Request Review:</strong> Use built-in tools</li>
                    <li><strong>Product Inserts:</strong> Compliant review requests</li>
                    <li><strong>Customer Service Excellence:</strong> Proactive support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Launch Success Formula</h3>
                <p className="text-lg mb-4">
                  A successful Amazon product launch requires meticulous preparation, strategic execution, and continuous optimization. Follow this checklist systematically to maximize your chances of a strong market entry and sustained growth.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Preparation</h4>
                    <p className="text-sm opacity-90">Research, validate, optimize</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Execution</h4>
                    <p className="text-sm opacity-90">Launch, monitor, adjust</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Optimization</h4>
                    <p className="text-sm opacity-90">Analyze, improve, scale</p>
                  </div>
                </div>
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
            <h3 className="text-3xl font-bold mb-6">Ready to Launch Your Product?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our product launch experts can guide you through every step of the process, 
              from research to post-launch optimization.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Launch Strategy Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunchChecklist;

