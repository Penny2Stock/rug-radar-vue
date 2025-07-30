import { ExternalLink, TrendingUp, TrendingDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface TokenCardProps {
  token: Token;
  index: number;
}

const TokenCard = ({ token, index }: TokenCardProps) => {
  const formatPrice = (price: number) => {
    if (price < 0.01) {
      return `$${price.toFixed(6)}`;
    }
    return `$${price.toFixed(3)}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(1)}B`;
    }
    if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(1)}M`;
    }
    return `$${(marketCap / 1e3).toFixed(1)}K`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(1)}M`;
    }
    return `$${(volume / 1e3).toFixed(1)}K`;
  };

  const getSafetyColor = (score: number) => {
    if (score >= 8.5) return 'text-success';
    if (score >= 7.0) return 'text-warning';
    return 'text-danger';
  };

  const getSafetyBadgeVariant = (score: number) => {
    if (score >= 8.5) return 'default';
    if (score >= 7.0) return 'secondary';
    return 'destructive';
  };

  return (
    <div
      className="p-6 rounded-xl bg-card border border-border token-card stagger-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Token Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-3xl">{token.logo}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-lg text-foreground">{token.symbol}</h3>
            <Badge 
              variant={getSafetyBadgeVariant(token.safetyScore)}
              className="text-xs"
            >
              <Shield className="h-3 w-3 mr-1" />
              {token.safetyScore}
            </Badge>
          </div>
          <p className="text-sm text-text-secondary truncate">{token.name}</p>
        </div>
      </div>

      {/* Price & Change */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">
            {formatPrice(token.price)}
          </span>
          <div className={`flex items-center space-x-1 ${
            token.change24h >= 0 ? 'text-success' : 'text-danger'
          }`}>
            {token.change24h >= 0 ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-medium">
              {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-secondary">Market Cap</p>
            <p className="font-medium text-foreground">{formatMarketCap(token.marketCap)}</p>
          </div>
          <div>
            <p className="text-text-secondary">24h Volume</p>
            <p className="font-medium text-foreground">{formatVolume(token.volume24h)}</p>
          </div>
        </div>
      </div>

      {/* Contract Address */}
      <div className="mb-4">
        <p className="text-xs text-text-secondary mb-1">Contract</p>
        <div className="flex items-center space-x-2">
          <code className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground flex-1 truncate">
            {token.contractAddress}
          </code>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 h-auto"
          >
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Action Button */}
      <Button
        className="w-full btn-primary font-medium"
        size="lg"
      >
        Buy ${token.symbol}
      </Button>
    </div>
  );
};

export default TokenCard;