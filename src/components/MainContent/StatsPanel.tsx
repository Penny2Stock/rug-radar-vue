import { useEffect, useState } from 'react';
import { TrendingUp, Shield, Zap, AlertTriangle } from 'lucide-react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: any;
  color: string;
  change?: number;
}

const StatsPanel = () => {
  const [stats, setStats] = useState<Stat[]>([
    { label: 'Tokens Scanned', value: 0, suffix: '', icon: Zap, color: 'text-primary', change: 24 },
    { label: 'Pass Rate', value: 0, suffix: '%', icon: Shield, color: 'text-success', change: 2.1 },
    { label: 'Avg Scan Time', value: 0, suffix: 's', icon: TrendingUp, color: 'text-secondary', change: -0.2 },
    { label: 'Rugs Blocked', value: 0, suffix: '', icon: AlertTriangle, color: 'text-warning', change: 15 }
  ]);

  // Animate counters on mount
  useEffect(() => {
    const targetValues = [1247, 8.3, 0.8, 1156];
    
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats(prevStats => 
          prevStats.map((stat, index) => ({
            ...stat,
            value: Math.floor(targetValues[index] * progress * 100) / 100
          }))
        );
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(prevStats => 
            prevStats.map((stat, index) => ({
              ...stat,
              value: targetValues[index]
            }))
          );
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map((stat, index) => {
          if (index === 0) { // Tokens scanned
            return { ...stat, value: stat.value + Math.floor(Math.random() * 3) };
          }
          if (index === 3) { // Rugs blocked
            return { ...stat, value: stat.value + Math.floor(Math.random() * 2) };
          }
          return stat;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="p-4 lg:p-6 rounded-xl bg-card border border-border token-card stagger-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <Icon className={`h-5 w-5 ${stat.color}`} />
              {stat.change && (
                <span className={`text-xs font-medium ${stat.change > 0 ? 'text-success' : 'text-danger'}`}>
                  {stat.change > 0 ? '+' : ''}{stat.change}%
                </span>
              )}
            </div>
            
            <div className="space-y-1">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl lg:text-3xl font-bold text-foreground animate-counter">
                  {stat.value.toLocaleString()}
                </span>
                <span className="text-sm text-text-secondary">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs lg:text-sm text-text-secondary">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsPanel;