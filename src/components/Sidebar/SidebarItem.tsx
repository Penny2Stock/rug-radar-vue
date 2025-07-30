import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
  isPrimary?: boolean;
  isComingSoon?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  href, 
  isActive, 
  isCollapsed, 
  isPrimary, 
  isComingSoon,
  onClick 
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      className={`
        w-full justify-start relative touch-target
        ${isCollapsed ? 'px-2' : 'px-3'} py-2
        ${isActive ? 'nav-active' : 'text-sidebar-foreground hover:bg-sidebar-hover'}
        ${isPrimary ? 'text-primary hover:text-primary' : ''}
        ${isComingSoon ? 'coming-soon' : ''}
        transition-all duration-200
      `}
      onClick={onClick}
      disabled={isComingSoon}
    >
      <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
      {!isCollapsed && (
        <span className="text-sm font-medium truncate">{label}</span>
      )}
    </Button>
  );
};

export default SidebarItem;