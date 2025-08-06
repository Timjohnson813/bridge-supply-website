import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';

const TopAmazonListingMistakes = () => {
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
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 inline mr-1" />
                Listing Optimization
              </span>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-1" />
                Bridge Supply Team
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Top 5 Amazon Listing Mistakes That Kill Your Sales
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Avoid these critical listing errors that prevent customers from finding and buying your products on Amazon.
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
                Your Amazon listing is your digital storefront. Even small mistakes can dramatically impact your visibility, conversion rates, and sales. Here are the five most common listing errors that successful sellers avoid at all costs.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-800">Why Listing Optimization Matters</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>94% of Amazon shoppers never go past the first page of search results</li>
                  <li>Poor listings can reduce conversion rates by up to 70%</li>
                  <li>Optimized listings can increase sales by 30-50%</li>
                  <li>Amazon's algorithm favors well-optimized listings</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mistake #1: Poor Keyword Research</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-600">❌ What NOT to Do</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
                      <li>Using only broad, competitive keywords</li>
                      <li>Ignoring long-tail keyword opportunities</li>
                      <li>Not researching competitor keywords</li>
                      <li>Keyword stuffing in titles</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">✅ Best Practices</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-green-700">
                      <li>Use tools like Helium 10 or Jungle Scout</li>
                      <li>Target a mix of high and low competition keywords</li>
                      <li>Include relevant long-tail keywords</li>
                      <li>Analyze top competitor listings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mistake #2: Weak Product Titles</h3>
                <p className="mb-4">
                  Your product title is the first thing customers see and heavily influences both search rankings and click-through rates.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">Title Formula That Works:</h4>
                  <p className="text-sm text-yellow-700 font-mono">
                    [Brand] + [Main Keyword] + [Key Feature 1] + [Key Feature 2] + [Size/Color/Quantity]
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-red-600">❌ Bad Example:</h5>
                    <p className="text-sm text-red-700">"Water Bottle"</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-600">✅ Good Example:</h5>
                    <p className="text-sm text-green-700">"HydroMax Insulated Water Bottle - 32oz Stainless Steel, Leak-Proof, Keeps Drinks Cold 24hrs"</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mistake #3: Low-Quality Images</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Image Requirements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Main Image:</strong> Pure white background, product fills 85% of frame</li>
                      <li><strong>Minimum Resolution:</strong> 1000x1000 pixels for zoom functionality</li>
                      <li><strong>Image Count:</strong> Use all 7-9 available image slots</li>
                      <li><strong>Variety:</strong> Include lifestyle, detail, and infographic images</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Pro Tips:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-blue-700">
                      <li>Show the product in use (lifestyle shots)</li>
                      <li>Highlight key features with callouts</li>
                      <li>Include size comparison images</li>
                      <li>Show all included accessories</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mistake #4: Weak Bullet Points</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-600">❌ Common Mistakes:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
                      <li>Focusing on features instead of benefits</li>
                      <li>Using technical jargon</li>
                      <li>Not addressing customer pain points</li>
                      <li>Ignoring emotional triggers</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">✅ Winning Formula:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-green-700">
                      <li>Start with a compelling benefit</li>
                      <li>Include relevant keywords naturally</li>
                      <li>Address specific customer needs</li>
                      <li>Use emotional language</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mistake #5: Ignoring Backend Keywords</h3>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">Backend Search Terms Strategy:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-purple-700">
                    <li>Use all 250 bytes of available space</li>
                    <li>Include synonyms and alternate spellings</li>
                    <li>Add competitor brand names (if relevant)</li>
                    <li>Include seasonal or trending keywords</li>
                    <li>Don't repeat words from your visible listing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Quick Optimization Checklist</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Title & Keywords</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Include main keyword in title</li>
                      <li>Use relevant long-tail keywords</li>
                      <li>Optimize backend search terms</li>
                      <li>Research competitor keywords</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Images & Content</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>High-quality main image</li>
                      <li>7-9 total images</li>
                      <li>Benefit-focused bullet points</li>
                      <li>Detailed product description</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Start Optimizing Today</h3>
                <p className="text-lg">
                  Avoiding these five critical mistakes can dramatically improve your Amazon listing performance. Remember, optimization is an ongoing process - continuously test and refine your listings based on performance data and customer feedback.
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
            <h3 className="text-3xl font-bold mb-6">Need Help Optimizing Your Listings?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our listing optimization experts can audit your current listings and implement 
              proven strategies to boost your visibility and sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Listing Optimization Help
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

export default TopAmazonListingMistakes;

