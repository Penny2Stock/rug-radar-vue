import { User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileProps {
  isCollapsed: boolean;
}

const UserProfile = ({ isCollapsed }: UserProfileProps) => {
  const user = {
    name: "Crypto Degen",
    email: "degen@orug.com",
    avatar: "",
    walletConnected: false
  };

  if (isCollapsed) {
    return (
      <div className="p-2 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full p-2 h-auto touch-target text-sidebar-foreground hover:bg-sidebar-hover"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-3 border-t border-sidebar-border">
      {user.walletConnected ? (
        <div className="space-y-2">
          {/* User Info */}
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-sidebar-hover transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {user.name}
              </p>
              <p className="text-xs text-text-secondary truncate">
                {user.email}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-xs text-sidebar-foreground hover:bg-sidebar-hover"
            >
              <Settings className="h-3 w-3 mr-1" />
              Settings
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-xs text-sidebar-foreground hover:bg-sidebar-hover"
            >
              <LogOut className="h-3 w-3 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <Button
            variant="default"
            className="w-full btn-primary text-sm"
          >
            Connect Wallet
          </Button>
          <p className="text-xs text-text-secondary text-center">
            Connect to access all features
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;