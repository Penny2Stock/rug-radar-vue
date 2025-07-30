import { useState, useEffect } from 'react';
import TokenCard from '../shared/TokenCard';

interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  logo: string;
  safetyScore: number;
  volume24h: number;
  contractAddress: string;
}

const TokenGrid = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data - simulating API response
  useEffect(() => {
    const mockTokens: Token[] = [
      {
        id: '1',
        symbol: 'BONK',
        name: 'Bonk',
        price: 0.000023,
        change24h: 15.4,
        marketCap: 1200000000,
        logo: '🐕',
        safetyScore: 8.5,
        volume24h: 45000000,
        contractAddress: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
      },
      {
        id: '2',
        symbol: 'WIF',
        name: 'Dogwifhat',
        price: 2.85,
        change24h: -3.2,
        marketCap: 2800000000,
        logo: '🐶',
        safetyScore: 9.2,
        volume24h: 120000000,
        contractAddress: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm'
      },
      {
        id: '3',
        symbol: 'BOME',
        name: 'Book of Meme',
        price: 0.0123,
        change24h: 8.7,
        marketCap: 850000000,
        logo: '📚',
        safetyScore: 7.8,
        volume24h: 32000000,
        contractAddress: 'ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82'
      },
      {
        id: '4',
        symbol: 'MYRO',
        name: 'Myro',
        price: 0.195,
        change24h: 22.1,
        marketCap: 195000000,
        logo: '🐾',
        safetyScore: 8.9,
        volume24h: 18000000,
        contractAddress: 'HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4'
      },
      {
        id: '5',
        symbol: 'PEPE',
        name: 'Pepe Solana',
        price: 0.00067,
        change24h: -12.3,
        marketCap: 67000000,
        logo: '🐸',
        safetyScore: 6.4,
        volume24h: 8500000,
        contractAddress: '2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump'
      },
      {
        id: '6',
        symbol: 'SAMO',
        name: 'Samoyedcoin',
        price: 0.0089,
        change24h: 5.6,
        marketCap: 58000000,
        logo: '🐕‍🦺',
        safetyScore: 9.1,
        volume24h: 4200000,
        contractAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setTokens(mockTokens);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Live Token Feed</h2>
          <div className="text-sm text-text-secondary">Loading...</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border shimmer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-muted rounded-full" />
                  <div className="space-y-1 flex-1">
                    <div className="h-4 bg-muted rounded w-16" />
                    <div className="h-3 bg-muted rounded w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-muted rounded w-20" />
                  <div className="h-4 bg-muted rounded w-16" />
                </div>
                <div className="h-10 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Token Feed</h2>
        <div className="text-sm text-text-secondary">
          {tokens.length} tokens scanned
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {tokens.map((token, index) => (
          <TokenCard
            key={token.id}
            token={token}
            index={index}
          />
        ))}
      </div>
      
      {/* Load More */}
      <div className="text-center pt-8">
        <button className="px-6 py-3 bg-card hover:bg-card-hover border border-border rounded-xl text-sm font-medium transition-colors">
          Load More Tokens
        </button>
      </div>
    </section>
  );
};

export default TokenGrid;