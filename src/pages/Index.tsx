import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketCard } from "@/components/MarketCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Filter, ArrowRight } from "lucide-react";

const TRENDING_MARKETS = [
  {
    title: "Will Bitcoin hit $100K by end of 2024?",
    description: "BTC has been climbing steadily. Major institutions are bullish, but market volatility remains high.",
    yesPrice: 67,
    noPrice: 33,
    volume: "842K",
    timeLeft: "89d 14h",
    participants: 12847,
    trending: "up" as const,
    category: "Crypto"
  },
  {
    title: "Will Tesla stock reach $300 before Q2 2025?",
    description: "Tesla's autonomous driving progress and energy business expansion could drive significant growth.",
    yesPrice: 42,
    noPrice: 58,
    volume: "634K", 
    timeLeft: "156d 8h",
    participants: 9632,
    trending: "down" as const,
    category: "Stocks"
  },
  {
    title: "Will AI pass the Turing Test in 2024?",
    description: "Recent advances in LLMs suggest we're closer than ever to artificial general intelligence.",
    yesPrice: 73,
    noPrice: 27,
    volume: "458K",
    timeLeft: "42d 22h",
    participants: 7891,
    trending: "up" as const,
    category: "Technology"
  },
  {
    title: "Will Manchester City win the Premier League?",
    description: "City leads the table but Arsenal and Liverpool are close behind in a thrilling season.",
    yesPrice: 55,
    noPrice: 45,
    volume: "523K",
    timeLeft: "78d 5h",
    participants: 15234,
    category: "Sports"
  },
  {
    title: "Will the Fed cut interest rates by 0.5% in March?",
    description: "Inflation data suggests the Fed may take aggressive action to stimulate economic growth.",
    yesPrice: 38,
    noPrice: 62,
    volume: "721K",
    timeLeft: "67d 11h",
    participants: 8967,
    category: "Economics"
  },
  {
    title: "Will SpaceX land on Mars by 2026?",
    description: "Starship development is accelerating, but technical challenges remain formidable.",
    yesPrice: 29,
    noPrice: 71,
    volume: "387K",
    timeLeft: "234d 16h",
    participants: 6543,
    trending: "up" as const,
    category: "Space"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Main Markets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-gradient-gold font-orbitron">
                Trending Markets
              </h2>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-muted/30 border border-border/50">
              <TabsTrigger value="all">All Markets</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
              <TabsTrigger value="stocks">Stocks</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="politics">Politics</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TRENDING_MARKETS.map((market, index) => (
                  <MarketCard key={index} {...market} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More */}
          <div className="text-center">
            <Button size="lg" className="btn-market-gold gap-2">
              Load More Markets
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-muted/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-orbitron">P</span>
              </div>
              <span className="text-xl font-bold text-gradient-gold font-orbitron">PredictMarket</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The future of prediction markets. Trade with confidence, win with style.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Help</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;