
import { Github, MessageCircle, Globe, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solana-purple to-solana-green animate-pulse-slow"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
                cryptokingmax
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              The most advanced Solana token launchpad. Launch your project with confidence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/cryptoking-max" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solana-purple transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/cryptokingmax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solana-green transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://cryptokingmax.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-solana-blue transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#launch" className="hover:text-white transition-colors">Launch Token</a></li>
              <li><a href="#live" className="hover:text-white transition-colors">Live Launches</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Token Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liquidity Lock</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <a 
                  href="https://t.me/cryptokingmax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  cryptokingmax
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://cryptokingmax.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  cryptokingmax.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <a 
                  href="https://github.com/cryptoking-max" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  cryptoking-max
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} cryptokingmax. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
