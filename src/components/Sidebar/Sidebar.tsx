import { useState } from 'react';
import { Shield, FileText, Radar, Bot, TrendingUp, Briefcase, Bell, Settings, User, ChevronLeft, ChevronRight, Trophy, Plug, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SidebarItem from './SidebarItem';
import UserProfile from './UserProfile';

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

const navigationItems = [
  { icon: FileText, label: 'New Scan', href: '/scan', isPrimary: true },
  { icon: Radar, label: 'Radar Feed', href: '/radar' },
  { icon: Bot, label: 'AI Picks', href: '/picks' },
  { icon: TrendingUp, label: 'Whale Tracker', href: '/whales' },
  { icon: Briefcase, label: 'Portfolio', href: '/portfolio' },
  { icon: Bell, label: 'Alerts', href: '/alerts' },
  { icon: Settings, label: 'Settings', href: '/settings' }
];

const comingSoonItems = [
  { icon: TrendingUp, label: 'Copy Trading' },
  { icon: Trophy, label: 'Tournaments' },
  { icon: Plug, label: 'API Access' },
  { icon: BarChart3, label: 'Analytics' }
];

const Sidebar = ({ isOpen, isCollapsed, onClose, onToggleCollapse }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState('/');

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`
        hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border
        sidebar-desktop z-30
        ${isCollapsed ? 'w-16' : 'w-60'}
      `}>
        {/* Logo & Toggle */}
        <div className={`flex items-center h-14 px-4 border-b border-sidebar-border ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-gradient">0RUG.com</span>
            </div>
          )}
          {isCollapsed && <Shield className="h-6 w-6 text-primary" />}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="text-sidebar-foreground hover:bg-sidebar-hover"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href || '#'}
              isActive={activeItem === item.href}
              isCollapsed={isCollapsed}
              isPrimary={item.isPrimary}
              onClick={() => setActiveItem(item.href || '#')}
            />
          ))}
          
          {/* Coming Soon Section */}
          {!isCollapsed && (
            <div className="pt-4">
              <p className="text-xs text-coming-soon font-medium mb-2 px-3 uppercase tracking-wider">
                Coming Soon
              </p>
              {comingSoonItems.map((item) => (
                <SidebarItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  href="#"
                  isActive={false}
                  isCollapsed={false}
                  isComingSoon
                  onClick={() => {}}
                />
              ))}
            </div>
          )}
        </nav>

        {/* User Profile */}
        <UserProfile isCollapsed={isCollapsed} />
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-60 bg-sidebar border-r border-sidebar-border
        flex flex-col z-50 lg:hidden
        sidebar-mobile ${isOpen ? 'open' : 'closed'}
      `}>
        {/* Logo */}
        <div className="flex items-center h-14 px-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-gradient">0RUG.com</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href || '#'}
              isActive={activeItem === item.href}
              isCollapsed={false}
              isPrimary={item.isPrimary}
              onClick={() => {
                setActiveItem(item.href || '#');
                onClose();
              }}
            />
          ))}
          
          {/* Coming Soon Section */}
          <div className="pt-4">
            <p className="text-xs text-coming-soon font-medium mb-2 px-3 uppercase tracking-wider">
              Coming Soon
            </p>
            {comingSoonItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href="#"
                isActive={false}
                isCollapsed={false}
                isComingSoon
                onClick={() => {}}
              />
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <UserProfile isCollapsed={false} />
      </aside>
    </>
  );
};

export default Sidebar;