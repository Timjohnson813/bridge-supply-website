import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, Calculator, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AmazonProfitabilityCalculator = () => {
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
                Financial Planning
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
              Amazon Profitability Calculator: Understanding Your True Costs and Margins
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              A comprehensive guide to building a profitability calculator that reveals your true Amazon business financial health and helps you make data-driven decisions.
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
                Calculating true profitability on Amazon is one of the most critical yet often overlooked aspects of running a successful e-commerce business. Many sellers focus on top-line revenue without fully grasping the numerous fees and costs that can erode their margins.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  Why Most Sellers Get Profitability Wrong
                </h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Focus only on gross sales without considering all fees</li>
                  <li>Ignore hidden costs like storage and long-term fees</li>
                  <li>Fail to properly allocate advertising costs per unit</li>
                  <li>Overlook operational expenses and overhead</li>
                  <li>Don't account for returns and refunds</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <Calculator className="w-6 h-6 inline mr-2" />
                  The Importance of a Profitability Calculator
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Strategic Benefits</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Informed product selection and vetting</li>
                      <li>Strategic pricing that ensures profitability</li>
                      <li>Clear financial clarity and cost breakdown</li>
                      <li>Scenario planning for different situations</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Operational Benefits</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Business health monitoring</li>
                      <li>Cost optimization opportunities</li>
                      <li>Investment decision support</li>
                      <li>Performance tracking over time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <DollarSign className="w-6 h-6 inline mr-2" />
                  Revenue Inputs: The Top Line
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Key Revenue Components</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Selling Price per Unit</h5>
                        <p className="text-sm text-green-700">Your retail price on Amazon</p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Monthly Units Sold</h5>
                        <p className="text-sm text-green-700">Projected or actual sales volume</p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Total Monthly Revenue</h5>
                        <p className="text-sm text-green-700">Price × Units = Total Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Cost of Goods Sold (COGS)</h3>
                <p className="mb-4">
                  COGS represents the direct costs associated with acquiring or manufacturing your products.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">Direct Product Costs</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Product Cost per Unit:</strong> Supplier/manufacturer cost</li>
                      <li><strong>Shipping to Warehouse:</strong> Freight and logistics fees</li>
                      <li><strong>Customs/Duties:</strong> Import taxes and tariffs</li>
                      <li><strong>Packaging Cost:</strong> Custom boxes, labels, inserts</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Additional COGS</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Quality Control:</strong> Third-party inspection fees</li>
                      <li><strong>Prep Services:</strong> FBA preparation costs</li>
                      <li><strong>Insurance:</strong> Product liability coverage</li>
                      <li><strong>Storage:</strong> Pre-FBA warehouse costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Amazon Fees: The Hidden Costs</h3>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">⚠️ Critical Fee Categories</h4>
                  <p className="text-sm text-yellow-700">
                    Amazon's fees are numerous and complex. Missing any of these can severely impact your profitability calculations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-600">Core Amazon Fees</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Referral Fee:</strong> 8-15% commission on sales</li>
                      <li><strong>FBA Fulfillment Fee:</strong> Pick, pack, ship costs</li>
                      <li><strong>Monthly Storage Fee:</strong> Per cubic foot storage</li>
                      <li><strong>Professional Seller Fee:</strong> $39.99/month</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Additional Fees</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Long-term Storage:</strong> 365+ day penalty fees</li>
                      <li><strong>Return Processing:</strong> Category-specific fees</li>
                      <li><strong>Removal/Disposal:</strong> Inventory removal costs</li>
                      <li><strong>Variable Closing:</strong> Media product fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <TrendingUp className="w-6 h-6 inline mr-2" />
                  Advertising & Marketing Costs
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">PPC Advertising Costs</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-1">Monthly Ad Spend</h5>
                        <p className="text-sm">Total budget for Sponsored Products, Brands, and Display ads</p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Ad Cost per Unit</h5>
                        <p className="text-sm">Total Ad Spend ÷ Units Sold = Cost per Unit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Other Marketing Expenses</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                      <li>Influencer collaborations and partnerships</li>
                      <li>External advertising (Google, Facebook, etc.)</li>
                      <li>Content creation and photography</li>
                      <li>Email marketing and automation tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Key Profitability Metrics</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Gross Profit</h4>
                    <p className="text-sm mb-2">Revenue - COGS - Amazon Fees</p>
                    <p className="text-xs text-muted-foreground">Measures product profitability before advertising and overhead</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Net Profit</h4>
                    <p className="text-sm mb-2">Gross Profit - Ad Spend - Operational Expenses</p>
                    <p className="text-xs text-muted-foreground">Your true bottom-line profit after all expenses</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">ROI</h4>
                    <p className="text-sm mb-2">(Net Profit ÷ Total Investment) × 100</p>
                    <p className="text-xs text-muted-foreground">Efficiency of your capital investment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">Break-Even Point</h4>
                    <p className="text-sm mb-2">Fixed Costs ÷ (Price - Variable Costs)</p>
                    <p className="text-xs text-muted-foreground">Units needed to cover all costs</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Building Your Calculator</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Spreadsheet Structure</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Create dedicated sections for Inputs, Calculations, and Results</li>
                      <li>Use dynamic formulas that update automatically</li>
                      <li>Include scenario planning with variable inputs</li>
                      <li>Add data validation to prevent errors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Best Practices</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-green-700">
                      <li>Update your calculator monthly with actual data</li>
                      <li>Track trends over time to identify patterns</li>
                      <li>Use conservative estimates for projections</li>
                      <li>Include buffer for unexpected costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Master Your Amazon Finances</h3>
                <p className="text-lg">
                  A comprehensive profitability calculator is your roadmap to Amazon success. By understanding every cost and revenue stream, you can make informed decisions that drive sustainable growth and maximize your return on investment.
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
            <h3 className="text-3xl font-bold mb-6">Need Help Building Your Profitability Calculator?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our financial experts can help you create a custom profitability calculator 
              and provide ongoing financial analysis to optimize your Amazon business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Financial Analysis Help
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

export default AmazonProfitabilityCalculator;

