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
      link: "/articles/top-amazon-listing-mistakes",
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
      link: "/articles/remove-unauthorized-sellers",
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
      link: "/articles/amazon-advertising",
      content: "Master the fundamentals of Amazon advertising before you spend a dime. Learn about campaign types, keyword research, bidding strategies, and optimization techniques that will help you achieve profitable ROAS from day one."
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
      link: "/articles/amazon-fba-vs-fbm",
      content: "Detailed comparison of FBA and FBM options, including costs, benefits, control levels, and which option works best for different types of products and business models."
    }
  ];

  const downloadResources = [
    {
      title: "Amazon Seller's Complete Handbook",
      description: "Comprehensive 50-page guide covering everything from account setup to advanced optimization strategies.",
      downloadCount: "2,500+",
      format: "PDF",
      fileName: "Amazon_Seller_Complete_Handbook_Augmented.pdf"
    },
    {
      title: "Product Launch Checklist",
      description: "Step-by-step checklist to ensure your product launches are successful and optimized from day one.",
      downloadCount: "1,800+",
      format: "PDF",
      fileName: "Product_Launch_Checklist_Augmented.pdf"
    },
    {
      title: "PPC Campaign Templates",
      description: "Ready-to-use campaign structures and templates for Sponsored Products, Brands, and Display ads.",
      downloadCount: "1,200+",
      format: "Excel",
      fileName: "PPC_Campaign_Templates_Augmented.pdf"
    },
    {
      title: "Amazon Profitability Calculator",
      description: "Calculate your true profitability on Amazon including all fees, advertising costs, and operational expenses.",
      downloadCount: "3,100+",
      format: "Excel",
      fileName: "Amazon_Profitability_Calculator_Augmented.pdf"
    }
  ];

  const resources = [
    {
      type: "guide",
      icon: <FileText className="w-6 h-6" />,
      title: "Comprehensive Guides",
      count: "15+ guides",
      description: "In-depth guides covering every aspect of Amazon selling"
    },
    {
      type: "template",
      icon: <Target className="w-6 h-6" />,
      title: "Ready-to-Use Templates",
      count: "25+ templates",
      description: "Proven templates for listings, PPC campaigns, and more"
    },
    {
      type: "tool",
      icon: <Zap className="w-6 h-6" />,
      title: "Calculators & Tools",
      count: "10+ tools",
      description: "Essential calculators for profitability and ROI analysis"
    },
    {
      type: "checklist",
      icon: <Shield className="w-6 h-6" />,
      title: "Action Checklists",
      count: "20+ checklists",
      description: "Step-by-step checklists to ensure nothing is missed"
    }
  ];

  const videos = [
    {
      title: "FREE 6-Hour Amazon FBA Course",
      duration: "6 hours",
      views: "125K+ views",
      description: "Complete A-Z blueprint for Amazon FBA beginners. Learn everything from product research to scaling your business.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "Advanced PPC Strategies That Actually Work",
      duration: "45 min",
      views: "89K+ views",
      description: "Advanced Amazon PPC tactics used by 7-figure sellers to dominate their categories and maximize profitability.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "Brand Protection Masterclass",
      duration: "1.5 hours",
      views: "67K+ views",
      description: "Everything you need to know about protecting your brand on Amazon, from trademark registration to enforcement.",
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  const podcasts = [
    {
      title: "The Amazon Empire Podcast",
      episode: "Episode 47: Scaling to 8-Figures",
      duration: "52 min",
      description: "Interview with a brand that went from $0 to $10M in revenue on Amazon in just 18 months.",
      plays: "45K+ plays"
    },
    {
      title: "Brand Protection Deep Dive",
      episode: "Episode 44: Fighting Counterfeiters",
      duration: "38 min",
      description: "Real case study of how we helped a client remove 200+ unauthorized sellers and recover $2M in lost revenue.",
      plays: "32K+ plays"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Free resources, guides, and expert insights to help you master Amazon and scale your brand. 
              Learn from our experience helping 500+ brands achieve remarkable growth.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                Get Personalized Advice <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20">
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

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {articles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3">{article.title}</CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                        <span className="mx-2">•</span>
                        {article.date}
                      </div>
                      <Button asChild>
                        <Link to={article.link}>
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                        <span className="mx-2">•</span>
                        {article.date}
                      </div>
                      <Button asChild>
                        <Link to={article.link}>
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Free Downloads */}
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
            {downloadResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {resource.downloadCount} • {resource.format}
                      </div>
                      <Button size="sm" asChild>
                        <a 
                          href={`/downloads/${resource.fileName}`} 
                          download
                          onClick={(e) => {
                            // Force download
                            const link = document.createElement('a');
                            link.href = `/downloads/${resource.fileName}`;
                            link.download = resource.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-20">
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
                  <div className="relative">
                    <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{video.views}</span>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Episodes */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Podcast Episodes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Listen to real success stories and expert insights on the go
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
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{podcast.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">{podcast.episode}</p>
                        <CardDescription>{podcast.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{podcast.duration}</span>
                        <span>{podcast.plays}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Listen Now
                      </Button>
                    </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Scale Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized strategies and hands-on support from our Amazon experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

