import { Button } from "@/components/ui/button";
import { MarketBadge } from "./MarketBadge";
import { TrendingUp, TrendingDown, Users, Clock } from "lucide-react";

interface MarketCardProps {
  title: string;
  description: string;
  yesPrice: number;
  noPrice: number;
  volume: string;
  timeLeft: string;
  participants: number;
  trending?: "up" | "down";
  category: string;
}

export function MarketCard({
  title,
  description,
  yesPrice,
  noPrice,
  volume,
  timeLeft,
  participants,
  trending,
  category
}: MarketCardProps) {
  return (
    <div className="market-card market-card-glow group">
      <div className="flex items-start justify-between mb-4">
        <MarketBadge variant="purple" className="text-xs">
          {category}
        </MarketBadge>
        {trending && (
          <div className={`flex items-center gap-1 ${trending === 'up' ? 'text-success' : 'text-danger'}`}>
            {trending === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-xs font-medium">Trending</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient-gold transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
        {description}
      </p>

      {/* Price Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Button 
          className="btn-market-success h-12 flex flex-col items-center justify-center"
          variant="outline"
        >
          <span className="text-xs opacity-80">YES</span>
          <span className="text-lg font-bold">{yesPrice}¢</span>
        </Button>
        
        <Button 
          className="btn-market-danger h-12 flex flex-col items-center justify-center"
          variant="outline"
        >
          <span className="text-xs opacity-80">NO</span>
          <span className="text-lg font-bold">{noPrice}¢</span>
        </Button>
      </div>

      {/* Market Stats */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{participants.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{timeLeft}</span>
        </div>
        
        <div className="text-gradient-gold font-medium">
          ${volume}
        </div>
      </div>
    </div>
  );
}