import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, Target, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '../../components/ui/button';

const PPCCampaignTemplates = () => {
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
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 inline mr-1" />
                PPC Advertising
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
              Amazon PPC Campaign Templates: Strategic Blueprint for Success
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Ready-to-use campaign structures for Sponsored Products, Sponsored Brands, and Sponsored Display ads with strategic insights to maximize your advertising ROI.
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
                Amazon Pay-Per-Click (PPC) advertising is an indispensable tool for sellers looking to increase product visibility, drive sales, and accelerate growth on the platform. Effective PPC management requires a deep understanding of different campaign types, targeting strategies, and continuous optimization.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Key PPC Concepts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-blue-700"><strong>ACoS:</strong> Advertising Cost of Sale - lower is better</p>
                    <p className="text-sm text-blue-700"><strong>RoAS:</strong> Return on Ad Spend - higher is better</p>
                    <p className="text-sm text-blue-700"><strong>Keywords:</strong> Search terms customers use</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-blue-700"><strong>ASINs:</strong> Unique product identifiers</p>
                    <p className="text-sm text-blue-700"><strong>Bidding:</strong> Amount you pay per click</p>
                    <p className="text-sm text-blue-700"><strong>Negative Keywords:</strong> Terms to exclude</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <Target className="w-6 h-6 inline mr-2" />
                  Sponsored Products Campaign Structures
                </h3>
                <p className="mb-6">
                  Sponsored Products are the most common and often the most effective ad type for driving individual product sales. They appear in search results and on product detail pages.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">1. Automatic Targeting Campaign</h4>
                    <p className="text-sm mb-3"><strong>Objective:</strong> Discovery & Data Collection</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Strategy:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Let Amazon's algorithm do initial targeting</li>
                          <li>Start with "Dynamic bids - down only"</li>
                          <li>Moderate daily budget ($10-50)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Optimization:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Weekly search term report review</li>
                          <li>Harvest high-performing keywords</li>
                          <li>Add negative keywords for irrelevant terms</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">2. Manual Targeting - Broad Match</h4>
                    <p className="text-sm mb-3"><strong>Objective:</strong> Keyword Expansion</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Strategy:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Target high-volume relevant keywords</li>
                          <li>Capture misspellings and synonyms</li>
                          <li>Dynamic bids or fixed bids</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Best For:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Keyword discovery</li>
                          <li>Expanding reach</li>
                          <li>Finding new search terms</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">3. Manual Targeting - Phrase Match</h4>
                    <p className="text-sm mb-3"><strong>Objective:</strong> Refined Targeting</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Strategy:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Target specific phrases with buyer intent</li>
                          <li>More control than broad match</li>
                          <li>Higher conversion rates expected</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Benefits:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Better ACoS than broad match</li>
                          <li>More precise targeting</li>
                          <li>Higher quality traffic</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-600">4. Manual Targeting - Exact Match</h4>
                    <p className="text-sm mb-3"><strong>Objective:</strong> Performance & Efficiency</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Strategy:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Target proven high-converting keywords</li>
                          <li>Dynamic bids - up and down</li>
                          <li>Higher daily budget allocation</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Optimization:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Continuous ACoS monitoring</li>
                          <li>Bid for top-of-search placements</li>
                          <li>Avoid keyword duplication</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-600">5. Product Targeting Campaign</h4>
                    <p className="text-sm mb-3"><strong>Objective:</strong> ASIN Targeting</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Targeting Options:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Competitor ASINs</li>
                          <li>Complementary products</li>
                          <li>Category targeting</li>
                          <li>Brand targeting</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Benefits:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Capture competitor traffic</li>
                          <li>Target browsing customers</li>
                          <li>Cross-sell opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <TrendingUp className="w-6 h-6 inline mr-2" />
                  Sponsored Brands Campaign Structures
                </h3>
                <p className="mb-4">
                  Sponsored Brands ads help increase brand visibility and drive traffic to your Amazon Store or custom landing page. They appear prominently at the top of search results.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Brand Awareness Campaign</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Target broad category keywords</li>
                      <li>Focus on impressions and reach</li>
                      <li>Drive traffic to Amazon Store</li>
                      <li>Build brand recognition</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Product Collection Campaign</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Showcase multiple products</li>
                      <li>Target specific product keywords</li>
                      <li>Drive to custom landing page</li>
                      <li>Cross-sell product lines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <DollarSign className="w-6 h-6 inline mr-2" />
                  Campaign Optimization Best Practices
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Daily Tasks</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Monitor ACoS performance</li>
                      <li>Adjust bids for top keywords</li>
                      <li>Check budget utilization</li>
                      <li>Review new search terms</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Weekly Tasks</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Comprehensive search term analysis</li>
                      <li>Add negative keywords</li>
                      <li>Harvest new keywords</li>
                      <li>Optimize underperforming campaigns</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Monthly Tasks</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Campaign structure review</li>
                      <li>Budget reallocation</li>
                      <li>Seasonal keyword planning</li>
                      <li>Competitor analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Pro Tips for PPC Success</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-sm text-yellow-700">
                    <li>Start with automatic campaigns for data collection</li>
                    <li>Use exact match for your best-performing keywords</li>
                    <li>Regularly review and optimize negative keywords</li>
                    <li>Monitor competitor pricing and adjust bids accordingly</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-sm text-yellow-700">
                    <li>Set realistic ACoS targets based on profit margins</li>
                    <li>Use dayparting to optimize ad scheduling</li>
                    <li>Test different ad copy and creative elements</li>
                    <li>Implement a structured campaign naming convention</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Master Amazon PPC</h3>
                <p className="text-lg">
                  Successful Amazon PPC requires strategic planning, continuous optimization, and data-driven decision making. Use these campaign templates as your foundation, but remember that every product and market is unique. Test, measure, and refine your approach for maximum ROI.
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
            <h3 className="text-3xl font-bold mb-6">Ready to Optimize Your PPC Campaigns?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our PPC experts can help you implement these campaign structures and optimize 
              your advertising strategy for maximum ROI and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get PPC Management Help
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

export default PPCCampaignTemplates;

