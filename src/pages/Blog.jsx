import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  Download, 
  Play, 
  Clock, 
  User, 
  ArrowRight,
  FileText,
  Video,
  Headphones,
  Star,
  TrendingUp,
  Target,
  Shield,
  Zap
} from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Top 5 Amazon Listing Mistakes That Kill Your Sales",
      excerpt: "Discover the most common listing mistakes that prevent brands from reaching their full potential on Amazon and learn how to fix them.",
      category: "Listing Optimization",
      readTime: "8 min read",
      author: "Tim Johnson",
      date: "March 15, 2025",
      featured: true,
      tags: ["SEO", "Conversion", "Best Practices"],
      content: "Learn about the critical mistakes that can destroy your Amazon listing performance, including poor keyword research, weak bullet points, missing A+ content, inadequate images, and ignoring customer reviews. We'll show you exactly how to fix each issue and optimize for maximum conversions."
    },
    {
      id: 2,
      title: "How to Remove Unauthorized Sellers: A Complete Guide",
      excerpt: "Step-by-step guide to identifying, reporting, and removing unauthorized sellers who are damaging your brand and stealing your sales.",
      category: "Brand Protection",
      readTime: "12 min read",
      author: "Tony Martinez",
      date: "March 10, 2025",
      featured: true,
      tags: ["Brand Protection", "Legal", "Strategy"],
      content: "Comprehensive guide covering brand registry setup, unauthorized seller identification, enforcement strategies, legal options, and ongoing monitoring to protect your brand from unauthorized resellers and maintain pricing control."
    },
    {
      id: 3,
      title: "What to Know Before Running Ads on Amazon",
      excerpt: "Essential knowledge every brand needs before launching their first Amazon PPC campaign to avoid costly mistakes and maximize ROI.",
      category: "Amazon Advertising",
      readTime: "10 min read",
      author: "Tim Johnson",
      date: "March 5, 2025",
      featured: true,
      tags: ["PPC", "Strategy", "ROI"],
      content: "Everything you need to know before starting Amazon PPC, including campaign types, keyword research, budget planning, bid strategies, and performance metrics. Avoid common pitfalls and set yourself up for advertising success from day one."
    },
    {
      id: 4,
      title: "Amazon FBA vs FBM: Which is Right for Your Brand?",
      excerpt: "Compare the pros and cons of Fulfillment by Amazon versus Fulfillment by Merchant to make the best choice for your business.",
      category: "Logistics",
      readTime: "6 min read",
      author: "Tony Martinez",
      date: "February 28, 2025",
      featured: false,
      tags: ["FBA", "FBM", "Logistics"],
      content: "Detailed comparison of FBA and FBM options, including costs, benefits, control levels, and which option works best for different types of products and business models."
    }
  ];

  const resources = [
    {
      type: "guide",
      icon: <FileText className="w-6 h-6" />,
      title: "Amazon Seller's Complete Handbook",
      description: "Comprehensive 50-page guide covering everything from account setup to advanced optimization strategies.",
      downloadCount: "2,500+ downloads",
      format: "PDF"
    },
    {
      type: "checklist",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Product Launch Checklist",
      description: "Step-by-step checklist to ensure your product launches are successful and optimized from day one.",
      downloadCount: "1,800+ downloads",
      format: "PDF"
    },
    {
      type: "template",
      icon: <Target className="w-6 h-6" />,
      title: "PPC Campaign Templates",
      description: "Ready-to-use campaign structures and templates for Sponsored Products, Brands, and Display ads.",
      downloadCount: "1,200+ downloads",
      format: "Excel"
    },
    {
      type: "calculator",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Amazon Profitability Calculator",
      description: "Calculate your true profitability on Amazon including all fees, advertising costs, and operational expenses.",
      downloadCount: "3,100+ downloads",
      format: "Excel"
    }
  ];

  const videos = [
    {
      title: "Amazon Listing Optimization Masterclass",
      duration: "45 min",
      views: "12K views",
      description: "Complete walkthrough of optimizing Amazon listings for maximum visibility and conversions.",
      thumbnail: "🎯"
    },
    {
      title: "PPC Strategy Deep Dive",
      duration: "38 min",
      views: "8.5K views",
      description: "Advanced PPC strategies used by top Amazon sellers to scale profitably.",
      thumbnail: "📊"
    },
    {
      title: "Brand Protection Essentials",
      duration: "25 min",
      views: "6.2K views",
      description: "How to protect your brand from unauthorized sellers and maintain pricing control.",
      thumbnail: "🛡️"
    }
  ];

  const podcasts = [
    {
      title: "The Amazon Empire Podcast",
      episode: "Episode 15: Scaling from $0 to $1M on Amazon",
      duration: "52 min",
      description: "Interview with a brand that went from zero to seven figures in 18 months using our strategies."
    },
    {
      title: "The Amazon Empire Podcast",
      episode: "Episode 14: Brand Protection Strategies That Work",
      duration: "41 min",
      description: "Deep dive into effective brand protection tactics and real-world case studies."
    },
    {
      title: "The Amazon Empire Podcast",
      episode: "Episode 13: PPC Optimization Secrets",
      duration: "48 min",
      description: "Advanced PPC optimization techniques that top sellers use to maximize ROAS."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Free resources, guides, and expert insights to help you master Amazon and scale your brand. 
              Learn from our experience helping 500+ brands achieve remarkable growth.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get Personalized Advice <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights and actionable strategies to help you succeed on Amazon
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover-lift ${article.featured ? 'ring-2 ring-primary' : ''}`}>
                  {article.featured && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                      Featured Article
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Free Downloads</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical tools and templates to accelerate your Amazon success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                        <CardDescription className="mt-2">{resource.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {resource.downloadCount} • {resource.format}
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Educational Videos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth video tutorials and masterclasses from our Amazon experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-4xl mb-4">
                      {video.thumbnail}
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{video.duration}</span>
                      <span>{video.views}</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Amazon Empire Podcast</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Weekly insights, interviews, and strategies from successful Amazon sellers and industry experts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.episode}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Headphones className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{podcast.episode}</h3>
                        <p className="text-muted-foreground mt-1">{podcast.description}</p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {podcast.duration}
                        </div>
                      </div>
                      <Button>
                        <Play className="w-4 h-4 mr-2" />
                        Listen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest Amazon strategies, tips, and insights delivered to your inbox every week. 
              Join 10,000+ sellers who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

