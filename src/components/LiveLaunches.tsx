
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, Clock, TrendingUp, Users, DollarSign } from 'lucide-react';

interface TokenLaunch {
  id: string;
  name: string;
  symbol: string;
  description: string;
  logoUrl: string;
  totalSupply: number;
  presaleRate: number;
  softCap: number;
  hardCap: number;
  raised: number;
  participants: number;
  progress: number;
  timeLeft: string;
  status: 'live' | 'upcoming' | 'ended' | 'success';
  website?: string;
  twitter?: string;
  telegram?: string;
}

const LiveLaunches = () => {
  const [launches, setLaunches] = useState<TokenLaunch[]>([
    {
      id: '1',
      name: 'DeFi Revolution',
      symbol: 'DEFIREV',
      description: 'Next generation DeFi protocol on Solana with innovative yield farming mechanisms.',
      logoUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=center',
      totalSupply: 1000000,
      presaleRate: 1000,
      softCap: 100,
      hardCap: 500,
      raised: 347.5,
      participants: 234,
      progress: 69.5,
      timeLeft: '2d 14h 32m',
      status: 'live',
      website: 'https://defirev.com',
      twitter: '@defirev',
      telegram: '@defirevolution'
    },
    {
      id: '2',
      name: 'Solar Gaming',
      symbol: 'SOLAR',
      description: 'Gaming ecosystem built on Solana blockchain with NFT integration and P2E mechanics.',
      logoUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f1654f?w=100&h=100&fit=crop&crop=center',
      totalSupply: 2000000,
      presaleRate: 800,
      softCap: 200,
      hardCap: 800,
      raised: 156.4,
      participants: 89,
      progress: 19.6,
      timeLeft: '5d 8h 15m',
      status: 'live',
      website: 'https://solargaming.io',
      twitter: '@solargaming'
    },
    {
      id: '3',
      name: 'MetaVerse Token',
      symbol: 'META',
      description: 'Virtual world platform powered by Solana with immersive VR experiences.',
      logoUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center',
      totalSupply: 5000000,
      presaleRate: 1200,
      softCap: 150,
      hardCap: 600,
      raised: 89.2,
      participants: 67,
      progress: 14.9,
      timeLeft: '7d 22h 45m',
      status: 'live'
    },
    {
      id: '4',
      name: 'Green Energy DAO',
      symbol: 'GREEN',
      description: 'Decentralized autonomous organization focused on renewable energy investments.',
      logoUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=100&h=100&fit=crop&crop=center',
      totalSupply: 10000000,
      presaleRate: 500,
      softCap: 300,
      hardCap: 1000,
      raised: 0,
      participants: 0,
      progress: 0,
      timeLeft: '12h 30m',
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'ended':
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
      case 'success':
        return 'bg-solana-purple/20 text-solana-purple border-solana-purple';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live Now';
      case 'upcoming':
        return 'Starting Soon';
      case 'ended':
        return 'Ended';
      case 'success':
        return 'Successful';
      default:
        return 'Unknown';
    }
  };

  return (
    <section id="live" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live Token Launches
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and participate in the latest Solana token launches happening right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch) => (
            <Card key={launch.id} className="glass-card hover:bg-white/15 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={launch.logoUrl} 
                      alt={launch.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{launch.name}</CardTitle>
                      <CardDescription className="text-solana-purple font-medium">
                        ${launch.symbol}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(launch.status)}>
                    {getStatusText(launch.status)}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {launch.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-solana-green">{launch.progress.toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={launch.progress} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{launch.raised} SOL raised</span>
                    <span>{launch.hardCap} SOL goal</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-solana-green mr-1" />
                      <span className="text-sm text-gray-400">Rate</span>
                    </div>
                    <div className="font-semibold">{launch.presaleRate.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">tokens/SOL</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-solana-blue mr-1" />
                      <span className="text-sm text-gray-400">Participants</span>
                    </div>
                    <div className="font-semibold">{launch.participants}</div>
                    <div className="text-xs text-gray-400">investors</div>
                  </div>
                </div>

                {/* Time Left */}
                {launch.status === 'live' && (
                  <div className="flex items-center justify-center p-3 bg-solana-purple/10 rounded-lg border border-solana-purple/20">
                    <Clock className="w-4 h-4 text-solana-purple mr-2" />
                    <span className="text-solana-purple font-medium">{launch.timeLeft} left</span>
                  </div>
                )}

                {launch.status === 'upcoming' && (
                  <div className="flex items-center justify-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Clock className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-medium">Starts in {launch.timeLeft}</span>
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold"
                  disabled={launch.status === 'ended' || launch.status === 'upcoming'}
                >
                  {launch.status === 'live' ? (
                    <>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Participate Now
                    </>
                  ) : launch.status === 'upcoming' ? (
                    'Coming Soon'
                  ) : launch.status === 'ended' ? (
                    'Presale Ended'
                  ) : (
                    'View Details'
                  )}
                </Button>

                {/* Social Links */}
                {(launch.website || launch.twitter || launch.telegram) && (
                  <div className="flex justify-center space-x-3 pt-2 border-t border-white/10">
                    {launch.website && (
                      <a 
                        href={launch.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white"
          >
            View All Launches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveLaunches;
