import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketBadge } from "@/components/MarketBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, DollarSign, Clock, Target, BarChart3 } from "lucide-react";

const ACTIVE_POSITIONS = [
  {
    title: "Will Bitcoin hit $100K by end of 2024?",
    position: "YES",
    shares: 150,
    avgPrice: 0.65,
    currentPrice: 0.67,
    value: 100.50,
    pnl: 3.00,
    pnlPercent: 3.08,
    category: "Crypto"
  },
  {
    title: "Will Tesla stock reach $300 before Q2 2025?",
    position: "NO", 
    shares: 80,
    avgPrice: 0.58,
    currentPrice: 0.58,
    value: 46.40,
    pnl: 0,
    pnlPercent: 0,
    category: "Stocks"
  },
  {
    title: "Will AI pass the Turing Test in 2024?",
    position: "YES",
    shares: 200,
    avgPrice: 0.70,
    currentPrice: 0.73,
    value: 146.00,
    pnl: 6.00,
    pnlPercent: 4.29,
    category: "Technology"
  }
];

const PORTFOLIO_STATS = [
  { label: "Total Value", value: "$1,234.56", icon: DollarSign, color: "text-gradient-gold" },
  { label: "Today's P&L", value: "+$45.32", icon: TrendingUp, color: "text-success" },
  { label: "Active Positions", value: "12", icon: Target, color: "text-accent" },
  { label: "Win Rate", value: "68.5%", icon: BarChart3, color: "text-gradient-neon" }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient-gold font-orbitron mb-2">
            Portfolio
          </h1>
          <p className="text-muted-foreground">
            Track your predictions and manage your positions
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {PORTFOLIO_STATS.map((stat, index) => (
            <Card key={index} className="market-card p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted/30">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className={`text-lg font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="bg-muted/30 border border-border/50 mb-6">
            <TabsTrigger value="active">Active Positions</TabsTrigger>
            <TabsTrigger value="history">Trade History</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="space-y-4">
              {ACTIVE_POSITIONS.map((position, index) => (
                <Card key={index} className="market-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MarketBadge variant="purple" className="text-xs">
                          {position.category}
                        </MarketBadge>
                        <MarketBadge 
                          variant={position.position === "YES" ? "success" : "danger"} 
                          className="text-xs"
                        >
                          {position.position}
                        </MarketBadge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {position.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {position.shares} shares @ {position.avgPrice}¢ avg
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Current Price</div>
                        <div className="font-bold">{position.currentPrice}¢</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Value</div>
                        <div className="font-bold text-gradient-gold">${position.value}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">P&L</div>
                        <div className={`font-bold flex items-center gap-1 ${
                          position.pnl > 0 ? 'text-success' : position.pnl < 0 ? 'text-danger' : 'text-muted-foreground'
                        }`}>
                          {position.pnl > 0 ? <TrendingUp className="w-4 h-4" /> : 
                           position.pnl < 0 ? <TrendingDown className="w-4 h-4" /> : null}
                          ${Math.abs(position.pnl).toFixed(2)} ({position.pnlPercent.toFixed(1)}%)
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Sell
                        </Button>
                        <Button size="sm" className="btn-market-gold">
                          Add More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="market-card p-8 text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trade History</h3>
              <p className="text-muted-foreground mb-4">
                Your completed trades and settled positions will appear here
              </p>
              <Button className="btn-market-gold">
                View All Trades
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="watchlist">
            <Card className="market-card p-8 text-center">
              <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Watchlist</h3>
              <p className="text-muted-foreground mb-4">
                Save interesting markets to track their progress without trading
              </p>
              <Button className="btn-market-gold">
                Browse Markets
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;