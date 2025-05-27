import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, X, Github, MessageCircle, Globe } from 'lucide-react';
const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const connectWallet = async () => {
    try {
      // Check if Phantom wallet is installed
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setIsConnected(true);
        console.log('Connected to wallet:', response.publicKey.toString());
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };
  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
        setIsConnected(false);
        setWalletAddress('');
      }
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };
  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };
  return <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solana-purple to-solana-green animate-pulse-slow"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              KingPad
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#launch" className="text-gray-300 hover:text-white transition-colors">
              Launch Token
            </a>
            <a href="#live" className="text-gray-300 hover:text-white transition-colors">
              Live Launches
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links & Wallet */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/cryptoking-max" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://t.me/cryptokingmax" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm"></span>
            </a>
            <a href="https://cryptokingmax.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            
            {!isConnected ? <Button onClick={connectWallet} className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button> : <Button onClick={disconnectWallet} variant="outline" className="border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white">
                <Wallet className="w-4 h-4 mr-2" />
                {formatAddress(walletAddress)}
              </Button>}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#launch" className="text-gray-300 hover:text-white transition-colors">
                Launch Token
              </a>
              <a href="#live" className="text-gray-300 hover:text-white transition-colors">
                Live Launches
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/cryptoking-max" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://t.me/cryptokingmax" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">cryptoking</span>
                </a>
                <a href="https://cryptokingmax.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
              {!isConnected ? <Button onClick={connectWallet} className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold w-full">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button> : <Button onClick={disconnectWallet} variant="outline" className="border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white w-full">
                  <Wallet className="w-4 h-4 mr-2" />
                  {formatAddress(walletAddress)}
                </Button>}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;