import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from './Hero';
import StatsPanel from './StatsPanel';
import TokenGrid from './TokenGrid';

interface MainContentProps {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

const MainContent = ({ sidebarCollapsed, onToggleSidebar }: MainContentProps) => {
  return (
    <main className="flex-1 min-h-screen overflow-auto">
      {/* Desktop Sidebar Toggle - only visible when sidebar is collapsed */}
      <div className="hidden lg:block">
        {sidebarCollapsed && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="fixed top-4 left-4 z-20 bg-card/80 backdrop-blur-sm border border-border hover:bg-card"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6 lg:py-8 space-y-8">
        {/* Hero Section */}
        <Hero />
        
        {/* Live Statistics */}
        <StatsPanel />
        
        {/* Token Grid */}
        <TokenGrid />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-text-secondary">
              Scans powered by <span className="text-primary font-medium">0RUG</span>
            </p>
            <p className="text-xs text-text-secondary">
              AI-powered meme coin safety layer for Solana
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MainContent;