import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import ContactForm from '../../components/ContactForm';

const HowToStartSellingOnAmazon = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How to Start Selling on Amazon: Complete 2025 Guide
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Tim Johnson</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 15, 2025</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know to start your Amazon selling journey in 2025. From account setup to your first sale, this comprehensive guide covers all the essential steps, strategies, and insider tips to help you succeed on the world's largest marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Start Selling on Amazon in 2025?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Amazon continues to dominate the e-commerce landscape with over 400 million Prime members projected by 2028 and $56 billion in advertising revenue generated in 2024 alone. For entrepreneurs and businesses looking to tap into this massive marketplace, 2025 presents unprecedented opportunities.
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                    Amazon by the Numbers (2024-2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span>Active Prime Members:</span>
                      <span className="font-semibold">317.8M+ (growing to 400M by 2028)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advertising Revenue (2024):</span>
                      <span className="font-semibold">$56B (+18% YoY)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Third-party Seller Share:</span>
                      <span className="font-semibold">60%+ of total sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Countries Available:</span>
                      <span className="font-semibold">20+ marketplaces</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 1: Choose Your Selling Model */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step 1: Choose Your Amazon Selling Model</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Individual vs Professional Account</h3>
              <p className="mb-6">
                Your first decision is choosing between an Individual ($0.99 per sale) or Professional ($39.99/month) seller account. For serious sellers planning to sell more than 40 items per month, Professional is the clear choice, offering advanced tools, bulk listing capabilities, and access to advertising features.
              </p>

              <h3 className="text-2xl font-semibold mb-4">FBA vs FBM: The Critical Decision</h3>
              <p className="mb-6">
                Fulfillment by Amazon (FBA) vs Fulfillment by Merchant (FBM) is one of your most important strategic decisions. Based on 2024 data, FBA sellers typically see 20-25% higher conversion rates due to Prime eligibility and Amazon's trusted fulfillment network.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">FBA Advantages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        Prime eligibility increases conversion rates
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        Amazon handles customer service and returns
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        Multi-channel fulfillment options
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        Better search ranking potential
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">FBM Advantages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        Lower fees for large/heavy items
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        Complete control over inventory
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        Direct customer relationships
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        No storage limitations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2: Product Research */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step 2: Master Product Research (The Make-or-Break Factor)</h2>
              
              <p className="mb-6">
                Product research is where 90% of Amazon success is determined. In 2025, successful sellers are using AI-powered tools and data-driven approaches to identify profitable opportunities while avoiding oversaturated markets.
              </p>

              <h3 className="text-2xl font-semibold mb-4">The Golden Criteria for Product Selection</h3>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>2025 Product Research Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>Monthly Search Volume:</span>
                      <span className="font-semibold">10,000 - 50,000 searches</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>Competition Level:</span>
                      <span className="font-semibold">Low to Medium</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>Profit Margin:</span>
                      <span className="font-semibold">30%+ after all fees</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>Price Range:</span>
                      <span className="font-semibold">$15 - $50 (sweet spot)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span>Weight:</span>
                      <span className="font-semibold">Under 2 lbs (for FBA efficiency)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">Essential Research Tools for 2025</h3>
              <p className="mb-6">
                While Amazon's own tools provide basic insights, successful sellers invest in professional research tools. Jungle Scout, Helium 10, and AMZScout have evolved significantly, now incorporating AI-driven market analysis and trend prediction.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">2025 Market Reality Check</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      The "easy money" days of Amazon are over. Success now requires professional tools, substantial investment, and strategic thinking. Budget $5,000-$10,000 minimum for your first product launch, including inventory, tools, and advertising.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Account Setup */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step 3: Professional Account Setup</h2>
              
              <p className="mb-6">
                Setting up your Amazon seller account correctly from the start prevents future headaches and potential account issues. Amazon's verification process has become more stringent in 2025, requiring additional documentation and business verification.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Required Documentation</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Government-issued photo ID</li>
                <li>Business license (if applicable)</li>
                <li>Tax identification number (EIN or SSN)</li>
                <li>Bank account and routing information</li>
                <li>Credit card for account verification</li>
                <li>Utility bill or bank statement for address verification</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Critical Account Settings</h3>
              <p className="mb-6">
                Your account settings impact everything from tax calculations to customer communication. Pay special attention to your business address, tax settings, and notification preferences. These seemingly minor details can significantly impact your operations.
              </p>
            </div>

            {/* Step 4: Listing Optimization */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step 4: Create Winning Product Listings</h2>
              
              <p className="mb-6">
                Your product listing is your digital storefront. In 2025, Amazon's A10 algorithm prioritizes listings that provide comprehensive, accurate information while maintaining high conversion rates. Every element matters.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Title Optimization Strategy</h3>
              <p className="mb-6">
                Your title should include your main keyword, brand name, key features, and size/quantity. Amazon allows up to 200 characters, but mobile displays are limited, so front-load your most important information.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Example Optimized Title:</h4>
                <p className="text-green-700 dark:text-green-300 font-mono text-sm">
                  "BRAND NAME Premium Stainless Steel Water Bottle - 32oz Insulated Tumbler with Straw, Leak-Proof Lid, BPA-Free"
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Bullet Points That Convert</h3>
              <p className="mb-6">
                Your bullet points should address customer pain points and highlight benefits, not just features. Use emotional triggers and social proof where appropriate. Each bullet should be scannable and provide unique value.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Images That Sell</h3>
              <p className="mb-6">
                High-quality images are non-negotiable. Your main image should be on a white background with the product taking up 85% of the frame. Additional images should show the product in use, highlight key features, and include lifestyle shots that help customers envision ownership.
              </p>
            </div>

            {/* Step 5: Launch Strategy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step 5: Execute a Professional Launch Strategy</h2>
              
              <p className="mb-6">
                A successful product launch in 2025 requires a coordinated approach combining inventory management, advertising, and review generation. The first 30 days determine your long-term success trajectory.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Pre-Launch Checklist</h3>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {[
                      "Inventory shipped to Amazon (2-3 weeks lead time)",
                      "Listing optimized and keyword-rich",
                      "PPC campaigns created but not launched",
                      "Competitor analysis completed",
                      "Launch budget allocated ($2,000-$5,000 recommended)",
                      "Review generation strategy planned",
                      "Social media and external traffic sources prepared"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">The 30-Day Launch Timeline</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold mb-2">Days 1-7: Aggressive Launch</h4>
                  <p>Launch with competitive pricing and high advertising spend. Focus on auto campaigns to gather keyword data. Monitor inventory levels closely.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold mb-2">Days 8-14: Optimization Phase</h4>
                  <p>Analyze PPC data and optimize campaigns. Begin manual campaigns with high-performing keywords. Start review generation efforts.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold mb-2">Days 15-21: Scale and Refine</h4>
                  <p>Increase budgets on profitable campaigns. Launch external traffic campaigns. Monitor organic ranking improvements.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-semibold mb-2">Days 22-30: Stabilization</h4>
                  <p>Achieve target ACoS and organic ranking. Plan inventory replenishment. Analyze performance and plan next steps.</p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Common Mistakes That Kill Amazon Businesses</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-600">Inventory Mistakes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Underestimating demand and running out of stock</li>
                      <li>• Overordering and tying up cash flow</li>
                      <li>• Ignoring seasonal fluctuations</li>
                      <li>• Poor supplier relationships</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-600">Marketing Mistakes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Launching without sufficient advertising budget</li>
                      <li>• Ignoring PPC optimization</li>
                      <li>• Focusing only on Amazon traffic</li>
                      <li>• Neglecting review management</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Your Amazon Success Roadmap</h2>
              
              <p className="mb-6">
                Starting an Amazon business in 2025 requires more sophistication than ever before, but the opportunities remain substantial for those who approach it professionally. Success comes from treating Amazon as a serious business venture, not a get-rich-quick scheme.
              </p>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                    Investment Reality Check
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Plan for a minimum investment of $10,000-$15,000 for your first product, including:
                  </p>
                  <ul className="space-y-2">
                    <li>• Initial inventory: $5,000-$8,000</li>
                    <li>• Advertising budget: $2,000-$3,000</li>
                    <li>• Tools and software: $500-$1,000</li>
                    <li>• Professional services: $1,000-$2,000</li>
                    <li>• Miscellaneous expenses: $500-$1,000</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to start your Amazon journey? Our team has helped hundreds of brands achieve success on Amazon.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Expert Guidance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default HowToStartSellingOnAmazon;

