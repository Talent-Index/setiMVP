import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Users, TrendingUp, Lock, Globe, Award, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Secure & Trustworthy",
    description: "Bank-grade security with transparent smart contracts and audited protocols"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant trades and real-time market updates with minimal latency"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of traders sharing insights and competing for glory"
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Professional tools and charts to analyze market trends and optimize strategies"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays private with optional anonymous trading capabilities"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade 24/7 from anywhere in the world with multi-currency support"
  }
];

const TEAM = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former Goldman Sachs quant with 10+ years in prediction markets",
    avatar: "🎯"
  },
  {
    name: "Sarah Kim",
    role: "Head of Product",
    bio: "Ex-Uber PM who led their marketplace innovations",
    avatar: "💡"
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Blockchain architect from Coinbase with deep DeFi expertise",
    avatar: "⚡"
  },
  {
    name: "Dr. Elena Popov",
    role: "Chief Risk Officer",
    bio: "PhD in Behavioral Economics, former Deutsche Bank risk director",
    avatar: "🛡️"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-dark py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45,100%,70%,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold font-orbitron">About</span>
              <br />
              <span className="text-foreground">PredictMarket</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're revolutionizing prediction markets with premium luxury and cutting-edge technology. 
              Experience the future of forecasting.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-gradient-gold text-primary-foreground px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Best Prediction Platform 2024
              </Badge>
              <Badge className="bg-gradient-neon text-success-foreground px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                50K+ Active Traders
              </Badge>
              <Badge className="bg-gradient-purple text-accent-foreground px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                $10M+ Volume Traded
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gradient-gold font-orbitron mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that collective intelligence can predict the future better than any single expert. 
              Our platform combines the wisdom of crowds with sophisticated technology to create the world's 
              most accurate prediction markets. We're democratizing forecasting while maintaining the luxury 
              and excitement that makes trading truly engaging.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="market-card p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient-gold font-orbitron mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry veterans and visionaries building the future of prediction markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, index) => (
              <Card key={index} className="market-card p-6 text-center">
                <div className="text-4xl mb-3">{member.avatar}</div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient-gold font-orbitron mb-8 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="market-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-danger" />
                  <h3 className="text-xl font-bold">Transparency</h3>
                </div>
                <p className="text-muted-foreground">
                  Every trade, every outcome, every algorithm is open and verifiable. 
                  We believe trust is earned through radical transparency.
                </p>
              </Card>

              <Card className="market-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-success" />
                  <h3 className="text-xl font-bold">Integrity</h3>
                </div>
                <p className="text-muted-foreground">
                  Fair play isn't just a rule—it's our foundation. Every market is 
                  designed to reward accuracy and punish manipulation.
                </p>
              </Card>

              <Card className="market-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                </div>
                <p className="text-muted-foreground">
                  We're constantly pushing boundaries, from AI-powered insights to 
                  revolutionary trading mechanisms that make markets more efficient.
                </p>
              </Card>

              <Card className="market-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold">Community</h3>
                </div>
                <p className="text-muted-foreground">
                  Our platform thrives because of our diverse, passionate community of 
                  traders who share knowledge and compete with respect.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gradient-gold font-orbitron mb-4">
            Ready to Join the Future?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start trading today and become part of the most sophisticated prediction market platform in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-market-gold">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;