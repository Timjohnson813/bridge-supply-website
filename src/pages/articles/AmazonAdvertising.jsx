import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AmazonAdvertising = () => {
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
                Amazon Advertising
              </span>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
              <div className="flex items-center text-white/80">
                <User className="w-4 h-4 mr-1" />
                Tim Johnson
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              What to Know Before Running Ads on Amazon
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Essential knowledge every brand needs before launching their first Amazon PPC campaign to avoid costly mistakes and maximize ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-muted-foreground mb-8">
              Amazon advertising is a powerful tool for sellers to increase product visibility, drive sales, and accelerate growth. However, to achieve a positive Return on Ad Spend (ROAS) and avoid wasting budget, it's crucial to understand the fundamentals before launching your first campaign. This guide covers essential considerations for new and experienced advertisers on Amazon.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">1. Understand Your Goals and Budget</h2>
            <p className="mb-6">
              Before you even think about keywords or bids, define what you want to achieve with your advertising. Are you looking for brand awareness, sales velocity for a new product, or profitability for an existing one? Your goals will dictate your strategy.
            </p>
            <p className="mb-6">
              For example, a new product launch might prioritize sales velocity over immediate profitability, meaning you're willing to accept a higher Advertising Cost of Sale (ACoS) initially. Conversely, for a mature product, you'll likely aim for a lower ACoS to maximize profit.
            </p>
            <p className="mb-6">
              Once goals are clear, set a realistic budget. Start small and scale up as you see positive results. Don't overcommit until you understand what works for your product and category. A common mistake is to set a budget too low to gather meaningful data, or too high and burn through cash without a clear strategy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">2. Optimize Your Product Listing First</h2>
            <p className="mb-6">
              Advertising drives traffic to your product page, but a poor listing will convert that traffic into wasted ad spend. Before running ads, ensure your product listing is fully optimized. This means having a compelling title with relevant keywords, benefit-driven bullet points, a detailed product description, and high-quality images (including lifestyle and infographic images).
            </p>
            <p className="mb-6">
              If you are Brand Registered, leverage A+ Content to enhance your product detail page. Your listing is your storefront; if it's not appealing, customers will leave without purchasing, regardless of how good your ad was. A strong conversion rate on your listing will significantly improve your ad performance and reduce your ACoS.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">3. Master Keyword Research</h2>
            <p className="mb-6">
              Keywords are the foundation of Amazon advertising. Effective keyword research is crucial for targeting the right customers. Don't just guess; use Amazon's own tools (like Brand Analytics, if you're Brand Registered) and third-party tools (e.g., Helium 10, Jungle Scout) to find relevant, high-volume keywords.
            </p>
            <p className="mb-6">
              Look for both broad and long-tail keywords. Understand keyword match types: Broad, Phrase, and Exact. Broad match offers wide reach but less control, while Exact match offers precise targeting but narrower reach. Use them strategically.
            </p>
            <p className="mb-6">
              Also, identify negative keywords — terms you don't want your ads to show for (e.g., competitor brand names, irrelevant searches) — to prevent wasted ad spend. Continuously refine your keyword list based on search term reports.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">4. Understand Different Ad Types</h2>
            <p className="mb-6">Amazon offers several ad types, each with unique benefits:</p>
            
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Sponsored Products</h3>
              <p>These are the most common and appear in search results and on product detail pages. They are great for driving sales of individual products. You can target keywords or specific products (ASINs).</p>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Sponsored Brands</h3>
              <p>Available to Brand Registered sellers, these ads feature your brand logo, a custom headline, and multiple products. They appear prominently at the top of search results and drive traffic to your Amazon Store or a custom landing page. Ideal for brand awareness and product portfolio promotion.</p>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Sponsored Display</h3>
              <p>These ads are audience-based and can appear on and off Amazon. They are excellent for remarketing (targeting customers who viewed your product but didn't buy) or reaching new audiences based on shopping behaviors and interests. They are more top-of-funnel for brand discovery.</p>
            </div>

            <p className="mb-6">
              Each ad type serves a different purpose in the customer journey. A comprehensive strategy often involves using a combination of these to achieve different goals.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">5. Monitor and Optimize Regularly</h2>
            <p className="mb-6">
              Launching an ad campaign is just the beginning. Continuous monitoring and optimization are essential for success. Don't set and forget. Regularly review your campaign performance in Seller Central or your advertising console.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Key metrics to track include:</h3>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Impressions:</strong> How many times your ad was shown</li>
              <li>• <strong>Clicks:</strong> How many times your ad was clicked</li>
              <li>• <strong>Click-Through Rate (CTR):</strong> Clicks divided by impressions</li>
              <li>• <strong>Spend:</strong> How much you've spent</li>
              <li>• <strong>Sales:</strong> Revenue generated from ad clicks</li>
              <li>• <strong>ACoS:</strong> Your ad spend divided by ad sales</li>
              <li>• <strong>RoAS:</strong> The inverse of ACoS (Ad Sales / Ad Spend)</li>
            </ul>

            <p className="mb-6">
              Use your search term reports to identify new keywords to add (to manual campaigns) and negative keywords to exclude. Adjust bids based on performance. Pause underperforming keywords or campaigns. A/B test different ad creatives, headlines, and bidding strategies. Amazon's advertising platform is dynamic, and your strategy should be too.
            </p>

            <div className="bg-muted p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p>
                Amazon advertising can be a game-changer for your business, but it requires a strategic, data-driven approach. By understanding your goals, optimizing your listings, mastering keyword research, utilizing different ad types, and committing to continuous monitoring and optimization, you can effectively leverage Amazon ads to drive sales and grow your brand.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AmazonAdvertising;

