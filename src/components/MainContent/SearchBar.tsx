import { useState } from 'react';
import { Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input
            type="text"
            placeholder="Enter token name or contract address"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-12 pr-4 py-4 text-lg bg-card border-border focus:ring-2 focus:ring-primary/50 focus:border-primary rounded-xl"
            disabled={isLoading}
          />
        </div>
        
        <Button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          className="ml-3 px-8 py-4 btn-primary rounded-xl text-base font-medium flex items-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
              <span>Scanning...</span>
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              <span>Scan Now</span>
            </>
          )}
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {['BONK', 'WIF', 'BOME', 'MYRO'].map((token) => (
          <Button
            key={token}
            variant="outline"
            size="sm"
            onClick={() => setQuery(token)}
            className="bg-card/50 border-border hover:bg-card text-text-secondary hover:text-foreground"
          >
            Try {token}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;