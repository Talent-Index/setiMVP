import { Button } from "@/components/ui/button";
import { Search, User, Wallet, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-orbitron">P</span>
            </div>
            <span className="text-xl font-bold text-gradient-gold font-orbitron">PredictMarket</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Markets
            </a>
            <a href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Leaderboard
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search markets..." 
              className="pl-10 bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-muted/50"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            <span className="text-gradient-gold font-bold">$1,234.56</span>
          </Button>
          
          <Button className="btn-market-gold">
            <User className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Sign In</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}