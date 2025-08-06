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
      author: "Anton Sokolov",
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
      author: "Anton Sokolov",
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
      title: "FREE 6-Hour Amazon FBA Course",
      duration: "6 hours",
      views: "125K+ views",
      description: "Complete A-Z blueprint for Amazon FBA beginners. Learn everything from product research to scaling your business.",
      thumbnail: "/amazon_fba_course_thumbnail.png",
      youtubeUrl: "https://www.youtube.com/watch?v=GYQerHdY5K4"
    },
    {
      title: "Amazon Listing Optimization Secrets",
      duration: "42 min",
      views: "89K+ views",
      description: "Advanced listing optimization strategies from analyzing 8000+ listings. Proven techniques to boost conversions.",
      thumbnail: "/listing_optimization_thumbnail.png",
      youtubeUrl: "https://www.youtube.com/watch?v=0yin3h1lCoM"
    },
    {
      title: "Amazon PPC Strategy Guide",
      duration: "35 min",
      views: "67K+ views",
      description: "Master Amazon PPC advertising with proven strategies to lower ACoS and increase sales.",
      thumbnail: "/ppc_strategy_thumbnail.png",
      youtubeUrl: "https://www.youtube.com/watch?v=sQT3rk45ZfU"
    },
    {
      title: "Product Launch Walkthrough",
      duration: "28 min",
      views: "54K+ views",
      description: "Step-by-step Amazon product launch strategy. Learn how to rank your products fast and generate sales.",
      thumbnail: "/product_launch_thumbnail.png",
      youtubeUrl: "https://www.youtube.com/watch?v=GgI2EqJAAYg"
    }
  ];

  const podcasts = [
    {
      title: "Serious Sellers Podcast",
      host: "Bradley Sutton (Helium 10)",
      episode: "Latest Episode: Amazon Updates & Advanced Strategies",
      duration: "45 min",
      description: "The most comprehensive Amazon FBA podcast with actionable strategies, expert interviews, and real seller stories.",
      spotifyUrl: "https://podcasts.apple.com/us/podcast/serious-sellers-podcast-learn-how-to-sell-on-amazon/id1453455876",
      listeners: "100K+"
    },
    {
      title: "The Full-Time FBA Show",
      host: "Stephen & Rebecca Smotherman", 
      episode: "Latest Episode: Scaling Your Amazon Business in 2024",
      duration: "35 min",
      description: "Real-world Amazon FBA strategies from successful sellers who've built multiple 6-figure businesses.",
      spotifyUrl: "https://www.fulltimefba.com/podcast/",
      listeners: "75K+"
    },
    {
      title: "AM/PM Podcast",
      host: "Manny Coats & Tim Jordan",
      episode: "Latest Episode: Advanced Amazon Selling Techniques",
      duration: "60 min", 
      description: "Advanced Amazon selling strategies with industry experts covering everything from product launches to exit strategies.",
      spotifyUrl: "https://ampmpodcast.com/",
      listeners: "85K+"
    },
    {
      title: "Silent Sales Machine Radio",
      host: "Jim Cockrum",
      episode: "Latest Episode: Amazon Success Stories",
      duration: "40 min",
      description: "Long-running podcast featuring successful Amazon sellers sharing their strategies and real-world experiences.",
      spotifyUrl: "https://silentsalesmachine.com/podcast/", 
      listeners: "60K+"
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
                      <Button size="sm" asChild>
                        <Link to="/contact">
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </Link>
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
                <Card className="hover-lift h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription className="flex-grow">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{video.duration}</span>
                      <span>{video.views}</span>
                    </div>
                    <Button 
                      asChild
                      className="w-full"
                    >
                      <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        Watch Video <Play className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Content */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Top Podcasts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Listen to industry leaders and gain valuable insights on Amazon selling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <Headphones className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{podcast.title}</CardTitle>
                        <CardDescription className="mt-1 text-muted-foreground">Host: {podcast.host}</CardDescription>
                        <CardDescription className="mt-2">{podcast.episode}</CardDescription>
                      </div>
                    </div>
                    <CardDescription className="flex-grow">{podcast.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{podcast.duration}</span>
                      <span>{podcast.listeners} listeners</span>
                    </div>
                    <Button 
                      asChild
                      className="w-full"
                    >
                      <a href={podcast.spotifyUrl} target="_blank" rel="noopener noreferrer">
                        Listen Now <Play className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Dominate Amazon?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can take full control of your Amazon presence and scale your business to new heights.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Book Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


