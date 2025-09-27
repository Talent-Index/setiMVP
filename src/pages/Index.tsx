import { Header } from "@/components/Header";
import { MarketCard } from "@/components/MarketCard";
import { MarketSlideshow } from "@/components/MarketSlideshow";
import { SharedPredictionModal, PredictionReceiptModal } from "@/components/SharedPredictionModal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Filter, ArrowRight, Plus } from "lucide-react";
import { useMarkets } from "@/hooks/useMarkets";
import { usePredictionModal } from "@/hooks/usePredictionModal";

const Index = () => {
  const { markets, isLoading, error, refetch } = useMarkets();
  const { 
    isOpen, 
    selectedMarket, 
    selectedOutcome, 
    receipt, 
    showReceipt, 
    closeModal, 
    showPredictionReceipt, 
    closeReceipt 
  } = usePredictionModal();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <Header />
      
          {/* Market Slideshow */}
          {markets.length > 0 && (
            <section className="py-4 md:py-8 w-full flex justify-center">
              <div className="container mx-auto px-4 flex justify-center">
                <div className="w-full max-w-6xl flex justify-center">
                  <MarketSlideshow markets={markets.slice(0, 4)} />
                </div>
              </div>
            </section>
          )}
      
      {/* Main Markets Section */}
      <section className="py-8 md:py-16 w-full flex justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-8 gap-4 w-full">
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold font-orbitron">
                  Live Markets
                </h2>
              </div>
              <Button 
                variant="outline" 
                className="gap-2 w-full sm:w-auto transition-all duration-200 hover:scale-105"
                onClick={() => {
                  // TODO: Implement filter functionality
                }}
              >
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-6 md:mb-8 w-full flex flex-col items-center">
              <TabsList className="bg-muted/30 border border-border/50 w-full sm:w-auto overflow-x-auto flex justify-center">
                <TabsTrigger value="all" className="text-xs sm:text-sm">All Markets</TabsTrigger>
                <TabsTrigger value="crypto" className="text-xs sm:text-sm">Crypto</TabsTrigger>
                <TabsTrigger value="stocks" className="text-xs sm:text-sm">Stocks</TabsTrigger>
                <TabsTrigger value="sports" className="text-xs sm:text-sm">Sports</TabsTrigger>
                <TabsTrigger value="politics" className="text-xs sm:text-sm">Politics</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading markets...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-destructive mb-4">{error}</p>
                    <Button onClick={refetch}>
                      Try Again
                    </Button>
                  </div>
                ) : markets.length === 0 ? (
                  <div className="text-center py-12">
                    <Plus className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No markets yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Be the first to create a prediction market!
                    </p>
                    <Button 
                      className="btn-market-gold gap-2"
                      onClick={() => {
                        // Scroll to top to show the header with wallet connection
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        // Show a message to connect wallet first
                        setTimeout(() => {
                          alert('Please connect your wallet first using the "Connect Sui Wallet" button in the header to create markets');
                        }, 500);
                      }}
                    >
                      <Plus className="w-4 h-4" />
                      Connect Wallet to Create Market
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center">
                    {markets.map((market, index) => (
                      <MarketCard 
                        key={market.id} 
                        market={market} 
                        trending={index < 3 ? (index % 2 === 0 ? "up" : "down") : undefined}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Load More */}
            {markets.length > 0 && (
              <div className="text-center mt-6 md:mt-8 w-full flex justify-center">
                <Button 
                  size="lg" 
                  className="btn-market-gold gap-2 w-full sm:w-auto transition-all duration-200 hover:scale-105"
                  onClick={() => {
                    // TODO: Implement load more functionality
                  }}
                >
                  Load More Markets
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-muted/10 py-8 md:py-12 w-full flex justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-4xl text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm md:text-lg font-orbitron">P</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-gradient-gold font-orbitron">PredictMarket</span>
            </div>
            <p className="text-muted-foreground mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
              The future of prediction markets. Trade with confidence, win with style.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Help</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Shared Prediction Modal */}
      <SharedPredictionModal
        isOpen={isOpen}
        onClose={closeModal}
        market={selectedMarket}
        outcome={selectedOutcome}
        onShowReceipt={showPredictionReceipt}
      />

      {/* Prediction Receipt Modal */}
      <PredictionReceiptModal
        isOpen={showReceipt}
        onClose={closeReceipt}
        receipt={receipt}
      />
    </div>
  );
};

export default Index;