import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, TrendingUp, Target, Zap, DollarSign, BarChart3, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import ContactForm from '../../components/ContactForm';

const From0To1MillionOnAmazon = () => {
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
              From $0 to $1 Million on Amazon: The Complete Scaling Blueprint
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Tim Johnson</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 20, 2025</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              The exact strategies, systems, and mindset shifts that separate six-figure sellers from seven-figure Amazon empires. Based on real case studies and proven methodologies that have generated over $100 million in Amazon sales.
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
              <h2 className="text-3xl font-bold mb-6">The Million-Dollar Mindset Shift</h2>
              <p className="text-lg leading-relaxed mb-6">
                Most Amazon sellers never break $100,000 in annual revenue. They get stuck in the "product picker" mentality, constantly searching for the next winning product instead of building a scalable business system. The sellers who reach $1 million think differently—they build brands, not just product listings.
              </p>
              
              <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                    <Rocket className="w-5 h-5 mr-2" />
                    The $1M Revenue Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Revenue Milestones</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Month 1-6:</span>
                          <span className="font-semibold">$0 - $50K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 7-12:</span>
                          <span className="font-semibold">$50K - $200K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 13-18:</span>
                          <span className="font-semibold">$200K - $500K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 19-24:</span>
                          <span className="font-semibold">$500K - $1M+</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Success Factors</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Brand-focused approach from day one</li>
                        <li>• Multiple product lines within niche</li>
                        <li>• Advanced PPC and SEO strategies</li>
                        <li>• External traffic and email marketing</li>
                        <li>• International marketplace expansion</li>
                        <li>• Team building and automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 1: Foundation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Phase 1: Building the Foundation ($0 - $50K)</h2>
              
              <h3 className="text-2xl font-semibold mb-4">The Brand-First Approach</h3>
              <p className="mb-6">
                Forget about finding "winning products." Instead, identify underserved customer segments and build a brand around solving their specific problems. This approach creates customer loyalty, allows for premium pricing, and provides a clear roadmap for product expansion.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Brand Foundation Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Brand Identity</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Clear mission and values</li>
                        <li>• Target customer persona</li>
                        <li>• Unique value proposition</li>
                        <li>• Professional logo and design</li>
                        <li>• Consistent brand voice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Legal Protection</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Trademark registration</li>
                        <li>• Brand registry enrollment</li>
                        <li>• Domain name acquisition</li>
                        <li>• Social media handles</li>
                        <li>• Business entity formation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">Product Development Strategy</h3>
              <p className="mb-6">
                Your first product should validate your brand concept while generating enough profit to fund expansion. Focus on products with 40%+ margins, clear differentiation opportunities, and expansion potential within your chosen niche.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Case Study: Kitchen Brand Success</h4>
                <p className="text-blue-700 dark:text-blue-300 mb-4">
                  One of our clients started with a single silicone baking mat targeting health-conscious bakers. By focusing on non-toxic materials and innovative design, they achieved $45K in first-year revenue. This foundation product led to a complete line of healthy baking accessories, reaching $1.2M by year three.
                </p>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>Key Lesson:</strong> The first product doesn't need to be revolutionary—it needs to establish your brand credibility and customer base.
                </div>
              </div>
            </div>

            {/* Phase 2: Growth */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Phase 2: Accelerated Growth ($50K - $200K)</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Product Line Expansion</h3>
              <p className="mb-6">
                Once your first product proves market fit, rapid expansion becomes critical. The goal is to own your niche by offering complementary products that increase customer lifetime value and create barriers to competition.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-500" />
                    Expansion Strategy Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Horizontal Expansion</h4>
                      <p className="text-sm text-muted-foreground">Add products that serve the same customer need in different ways</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Vertical Expansion</h4>
                      <p className="text-sm text-muted-foreground">Move up or down the customer journey with premium or budget options</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Adjacent Expansion</h4>
                      <p className="text-sm text-muted-foreground">Enter related categories that appeal to your existing customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">Advanced PPC Mastery</h3>
              <p className="mb-6">
                At this stage, PPC becomes your primary growth engine. You need sophisticated campaign structures, aggressive keyword expansion, and data-driven optimization. Successful sellers typically spend 15-25% of revenue on advertising during growth phases.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Campaign Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Auto campaigns for discovery</li>
                      <li>• Exact match for high-performers</li>
                      <li>• Broad match for expansion</li>
                      <li>• Product targeting campaigns</li>
                      <li>• Brand defense campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Optimization Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Daily bid adjustments</li>
                      <li>• Negative keyword mining</li>
                      <li>• Search term harvesting</li>
                      <li>• Dayparting optimization</li>
                      <li>• Placement bid modifiers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Advanced Tactics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Competitor keyword targeting</li>
                      <li>• Video ad campaigns</li>
                      <li>• DSP advertising</li>
                      <li>• External traffic campaigns</li>
                      <li>• Attribution tracking</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Inventory Management at Scale</h3>
              <p className="mb-6">
                Cash flow management becomes critical as you scale. Stockouts can destroy momentum, while overstock ties up capital. Implement demand forecasting, establish supplier relationships, and consider inventory financing options.
              </p>
            </div>

            {/* Phase 3: Optimization */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Phase 3: Optimization & Efficiency ($200K - $500K)</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Building Systems and Processes</h3>
              <p className="mb-6">
                This phase is about working ON your business, not IN it. Successful sellers build repeatable systems for product launches, inventory management, customer service, and marketing. Automation becomes essential for maintaining growth without burning out.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Automation Priorities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Marketing Automation</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• PPC bid management tools</li>
                        <li>• Review monitoring and response</li>
                        <li>• Email marketing sequences</li>
                        <li>• Social media scheduling</li>
                        <li>• Competitor price tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Operations Automation</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Inventory forecasting</li>
                        <li>• Reorder point alerts</li>
                        <li>• Financial reporting</li>
                        <li>• Customer service chatbots</li>
                        <li>• Quality control checklists</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">External Traffic Development</h3>
              <p className="mb-6">
                Amazon rewards sellers who drive external traffic to their listings. This phase focuses on building owned media assets: email lists, social media followings, and content marketing. These channels reduce dependence on Amazon's algorithm and improve profit margins.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold mb-2">Content Marketing</h4>
                  <p className="text-sm text-muted-foreground">Blog posts, YouTube videos, and social media content that educate your target audience while subtly promoting your products.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold mb-2">Email Marketing</h4>
                  <p className="text-sm text-muted-foreground">Build an email list through lead magnets, then nurture subscribers with valuable content and strategic product promotions.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold mb-2">Influencer Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Collaborate with micro-influencers in your niche to reach new audiences and build social proof.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-semibold mb-2">Strategic Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Partner with complementary brands for cross-promotion and bundle opportunities.</p>
                </div>
              </div>
            </div>

            {/* Phase 4: Scale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Phase 4: Scale to Seven Figures ($500K - $1M+)</h2>
              
              <h3 className="text-2xl font-semibold mb-4">International Expansion</h3>
              <p className="mb-6">
                Amazon operates in 20+ countries, representing massive untapped opportunities. Successful expansion requires understanding local markets, compliance requirements, and cultural preferences. Start with English-speaking markets (UK, Canada, Australia) before expanding to Europe and Asia.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>International Expansion Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Phase 1: English Markets</span>
                      <span className="text-sm text-muted-foreground">UK, Canada, Australia</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Phase 2: European Union</span>
                      <span className="text-sm text-muted-foreground">Germany, France, Italy, Spain</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Phase 3: Asian Markets</span>
                      <span className="text-sm text-muted-foreground">Japan, Singapore, India</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Phase 4: Emerging Markets</span>
                      <span className="text-sm text-muted-foreground">Mexico, Brazil, UAE</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">Team Building and Delegation</h3>
              <p className="mb-6">
                Reaching seven figures requires building a team. You can't do everything yourself and maintain growth. Key hires include virtual assistants for daily operations, PPC specialists for advertising management, and content creators for marketing efforts.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Essential Team Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Virtual Assistant (operations)</li>
                      <li>• PPC Manager (advertising)</li>
                      <li>• Content Creator (marketing)</li>
                      <li>• Customer Service Rep</li>
                      <li>• Bookkeeper/Accountant</li>
                      <li>• Product Developer</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Delegation Framework</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Document all processes</li>
                      <li>• Create training materials</li>
                      <li>• Establish KPIs and metrics</li>
                      <li>• Implement review cycles</li>
                      <li>• Use project management tools</li>
                      <li>• Regular team meetings</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Advanced Business Strategies</h3>
              <p className="mb-6">
                Seven-figure sellers think beyond Amazon. They build omnichannel businesses with their own websites, retail partnerships, and even physical stores. Amazon becomes one channel in a diversified business portfolio.
              </p>
            </div>

            {/* Financial Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Financial Management for Scale</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Cash Flow Optimization</h3>
              <p className="mb-6">
                Cash flow, not profit, kills most scaling businesses. Amazon's payment cycles, inventory requirements, and advertising spend create complex cash flow challenges. Successful sellers use financial tools and strategies to maintain liquidity during growth.
              </p>

              <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-800 dark:text-yellow-200">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Financial Milestones by Revenue Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">$50K Revenue</div>
                        <div className="text-muted-foreground">$15K Cash Reserve</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">$200K Revenue</div>
                        <div className="text-muted-foreground">$60K Cash Reserve</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">$500K Revenue</div>
                        <div className="text-muted-foreground">$150K Cash Reserve</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">$1M Revenue</div>
                        <div className="text-muted-foreground">$300K Cash Reserve</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-4">Key Performance Indicators</h3>
              <p className="mb-6">
                Track the metrics that matter for scaling. Revenue is vanity, profit is sanity, but cash flow is reality. Focus on metrics that predict future performance and identify problems before they become critical.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Financial KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Gross margin %</li>
                      <li>• Net profit margin %</li>
                      <li>• Cash conversion cycle</li>
                      <li>• Inventory turnover</li>
                      <li>• Customer acquisition cost</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Growth KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Monthly recurring revenue</li>
                      <li>• Year-over-year growth</li>
                      <li>• Market share by category</li>
                      <li>• New product success rate</li>
                      <li>• International revenue %</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Operational KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Inventory days on hand</li>
                      <li>• Stockout frequency</li>
                      <li>• Customer satisfaction score</li>
                      <li>• Return rate %</li>
                      <li>• Review velocity</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Common Scaling Challenges */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overcoming Common Scaling Challenges</h2>
              
              <div className="space-y-6">
                <Card className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-red-600">Challenge: Cash Flow Crunch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm">
                      <strong>Problem:</strong> Rapid growth requires more inventory investment than cash flow can support.
                    </p>
                    <p className="text-sm">
                      <strong>Solution:</strong> Implement inventory financing, negotiate better payment terms with suppliers, and use cash flow forecasting tools to predict and prevent shortfalls.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Challenge: Increased Competition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm">
                      <strong>Problem:</strong> Success attracts competitors who copy your products and undercut prices.
                    </p>
                    <p className="text-sm">
                      <strong>Solution:</strong> Build brand loyalty through superior customer experience, continuous innovation, and legal protection (patents, trademarks, brand registry).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 dark:border-yellow-800">
                  <CardHeader>
                    <CardTitle className="text-yellow-600">Challenge: Operational Complexity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm">
                      <strong>Problem:</strong> Managing multiple products, markets, and team members becomes overwhelming.
                    </p>
                    <p className="text-sm">
                      <strong>Solution:</strong> Invest in systems and processes early. Use project management tools, standard operating procedures, and regular team training to maintain quality as you scale.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Your Million-Dollar Action Plan</h2>
              
              <p className="mb-6">
                Reaching $1 million in Amazon revenue isn't about luck or finding the perfect product—it's about building a systematic, scalable business. The sellers who achieve this milestone share common characteristics: they think long-term, invest in systems, and treat Amazon as a serious business venture.
              </p>

              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle>The Million-Dollar Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Foundation (Months 1-6)</h4>
                      <ul className="space-y-1 text-sm">
                        <li>□ Brand identity and legal protection</li>
                        <li>□ First product launch and optimization</li>
                        <li>□ Basic PPC campaign structure</li>
                        <li>□ Customer feedback collection system</li>
                        <li>□ Financial tracking and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Scale (Months 7-24)</h4>
                      <ul className="space-y-1 text-sm">
                        <li>□ Product line expansion (5+ products)</li>
                        <li>□ Advanced PPC and external traffic</li>
                        <li>□ Team building and delegation</li>
                        <li>□ International marketplace expansion</li>
                        <li>□ Omnichannel business development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to scale your Amazon business to seven figures? Our proven system has helped dozens of sellers reach the million-dollar milestone.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Your Scaling Strategy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default From0To1MillionOnAmazon;

