import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45,100%,70%,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(270,70%,65%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-gold font-orbitron">Predict</span>
            <br />
            <span className="text-foreground">The Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the thrill of prediction markets with premium luxury. 
            Bet on real-world events and win big.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-market-gold text-lg px-8 py-6">
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Trading
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary">
              Explore Markets
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient-gold">$2.4M</div>
              <div className="text-sm text-muted-foreground">Volume Traded</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-gradient-neon">45K+</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">1,234</div>
              <div className="text-sm text-muted-foreground">Live Markets</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient-gold">98.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}