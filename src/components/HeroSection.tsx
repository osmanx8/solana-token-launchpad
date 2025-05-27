
import { Button } from '@/components/ui/button';
import { Rocket, Shield, Zap, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-solana-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-solana-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-solana-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Launch Your
            <span className="bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green bg-clip-text text-transparent animate-glow">
              {" "}Solana Token
            </span>
            <br />
            in Minutes
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The most advanced Solana token launchpad. Create, deploy, and manage your tokens with enterprise-grade security and simplicity.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-solana-green" />
              <span className="text-sm">Audited Smart Contracts</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-solana-blue" />
              <span className="text-sm">Instant Deployment</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-solana-purple" />
              <span className="text-sm">Pro Features</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold px-8 py-4 text-lg crypto-glow"
              onClick={() => document.getElementById('launch')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Your Token
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white font-semibold px-8 py-4 text-lg"
              onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Live Launches
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-green mb-2">500+</div>
              <div className="text-gray-400">Tokens Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-blue mb-2">$50M+</div>
              <div className="text-gray-400">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-purple mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-green mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
