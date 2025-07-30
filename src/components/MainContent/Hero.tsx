import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="text-center space-y-6 py-8 lg:py-12">
      {/* Main Headline */}
      <div className="space-y-4">
        <h1 className="text-responsive-xl font-bold text-gradient leading-tight">
          Find Meme Coins Ready To 🚀
        </h1>
        <p className="text-responsive-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
          We scan through the crypto noise, show you only the best. 
          AI-powered safety layer for Solana meme coins with 10-point verification in under 1 second.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <SearchBar />
      </div>

      {/* Features Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
        <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold text-sm mb-1">Lightning Fast</h3>
          <p className="text-xs text-text-secondary">Scan results in under 1 second</p>
        </div>
        <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
          <div className="text-2xl mb-2">🛡️</div>
          <h3 className="font-semibold text-sm mb-1">10-Point Safety</h3>
          <p className="text-xs text-text-secondary">Comprehensive security analysis</p>
        </div>
        <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
          <div className="text-2xl mb-2">🤖</div>
          <h3 className="font-semibold text-sm mb-1">AI Powered</h3>
          <p className="text-xs text-text-secondary">Smart pattern recognition</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;