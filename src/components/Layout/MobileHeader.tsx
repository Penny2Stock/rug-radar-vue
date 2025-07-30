import { Menu, Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
  onMenuClick: () => void;
  className?: string;
}

const MobileHeader = ({ onMenuClick, className = "" }: MobileHeaderProps) => {
  return (
    <header className={`h-14 bg-sidebar border-b border-sidebar-border flex items-center justify-between px-4 ${className}`}>
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuClick}
        className="touch-target text-sidebar-foreground hover:bg-sidebar-hover"
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg text-gradient">0RUG.com</span>
      </div>
      
      {/* User Profile */}
      <Button
        variant="ghost"
        size="sm"
        className="touch-target text-sidebar-foreground hover:bg-sidebar-hover"
      >
        <User className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default MobileHeader;