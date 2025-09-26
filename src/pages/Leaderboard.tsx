import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketBadge } from "@/components/MarketBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Trophy, Medal, TrendingUp, DollarSign, Target, Flame } from "lucide-react";

const TOP_TRADERS = [
  {
    rank: 1,
    username: "CryptoKing",
    avatar: "👑",
    totalPnL: 15643.28,
    winRate: 87.3,
    totalTrades: 234,
    streak: 12,
    badge: "Legendary Predictor"
  },
  {
    rank: 2,
    username: "MarketMaven",
    avatar: "💎",
    totalPnL: 12890.15,
    winRate: 82.1,
    totalTrades: 189,
    streak: 8,
    badge: "Diamond Trader"
  },
  {
    rank: 3,
    username: "FutureSeeker",
    avatar: "🚀",
    totalPnL: 11234.67,
    winRate: 79.5,
    totalTrades: 156,
    streak: 15,
    badge: "Rising Star"
  },
  {
    rank: 4,
    username: "OracleAI",
    avatar: "🔮",
    totalPnL: 9876.43,
    winRate: 84.7,
    totalTrades: 203,
    streak: 6,
    badge: "Tech Prophet"
  },
  {
    rank: 5,
    username: "GoldRush",
    avatar: "⭐",
    totalPnL: 8765.21,
    winRate: 76.8,
    totalTrades: 178,
    streak: 4,
    badge: "Golden Touch"
  }
];

const CATEGORIES = [
  { name: "All Time", icon: Crown, color: "gold" },
  { name: "This Month", icon: Trophy, color: "success" },
  { name: "This Week", icon: Medal, color: "purple" },
  { name: "Today", icon: Flame, color: "danger" }
];

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-primary" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeVariant = (rank: number) => {
    switch (rank) {
      case 1:
        return "gold";
      case 2:
        return "purple";
      case 3:
        return "success";
      default:
        return "purple";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-gold font-orbitron mb-2">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">
            Compete with the best prediction traders in the world
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {TOP_TRADERS.slice(0, 3).map((trader, index) => (
            <Card key={trader.rank} className={`market-card p-6 text-center ${
              trader.rank === 1 ? 'market-card-glow ring-2 ring-primary/20' : ''
            }`}>
              <div className="flex items-center justify-center mb-4">
                {getRankIcon(trader.rank)}
              </div>
              <div className="text-3xl mb-2">{trader.avatar}</div>
              <h3 className="font-bold text-lg mb-1">{trader.username}</h3>
              <MarketBadge variant={getRankBadgeVariant(trader.rank)} className="mb-3">
                {trader.badge}
              </MarketBadge>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-gold">
                  ${trader.totalPnL.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {trader.winRate}% Win Rate • {trader.totalTrades} Trades
                </div>
                <div className="flex items-center justify-center gap-1 text-success">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-medium">{trader.streak} streak</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="all-time" className="w-full">
          <TabsList className="bg-muted/30 border border-border/50 mb-6 w-full md:w-auto">
            <TabsTrigger value="all-time">All Time</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="daily">Today</TabsTrigger>
          </TabsList>

          <TabsContent value="all-time">
            <Card className="market-card p-6">
              <div className="space-y-4">
                {TOP_TRADERS.map((trader, index) => (
                  <div key={trader.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50">
                        {getRankIcon(trader.rank)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{trader.avatar}</span>
                          <span className="font-bold">{trader.username}</span>
                          <MarketBadge variant={getRankBadgeVariant(trader.rank)} className="text-xs">
                            {trader.badge}
                          </MarketBadge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {trader.totalTrades} trades • {trader.winRate}% win rate
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-gradient-gold mb-1">
                        ${trader.totalPnL.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 text-success text-sm">
                        <Flame className="w-3 h-3" />
                        <span>{trader.streak} streak</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card className="market-card p-8 text-center">
              <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Monthly Champions</h3>
              <p className="text-muted-foreground mb-4">
                See who's dominating the markets this month
              </p>
              <Button className="btn-market-gold">
                View Monthly Stats
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="weekly">
            <Card className="market-card p-8 text-center">
              <Medal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Weekly Warriors</h3>
              <p className="text-muted-foreground mb-4">
                The hottest traders making moves this week
              </p>
              <Button className="btn-market-gold">
                View Weekly Stats
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="daily">
            <Card className="market-card p-8 text-center">
              <Flame className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Daily Dominators</h3>
              <p className="text-muted-foreground mb-4">
                Today's biggest winners and market movers
              </p>
              <Button className="btn-market-gold">
                View Daily Stats
              </Button>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Your Rank */}
        <Card className="market-card p-6 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Your Rank</h3>
              <p className="text-muted-foreground text-sm">Keep trading to climb higher!</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient-gold">#147</div>
              <div className="text-sm text-muted-foreground">of 12,847 traders</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;