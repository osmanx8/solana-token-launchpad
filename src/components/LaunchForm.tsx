
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, DollarSign, Users, Clock, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LaunchForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    description: '',
    totalSupply: '',
    decimals: '9',
    website: '',
    twitter: '',
    telegram: '',
    logoUrl: '',
    presaleRate: '',
    softCap: '',
    hardCap: '',
    minContribution: '',
    maxContribution: '',
    liquidityPercent: '70',
    startDate: '',
    endDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate token creation process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "Token Launch Successful! 🚀",
        description: `${formData.name} (${formData.symbol}) has been created and deployed to Solana mainnet.`,
      });

      // Reset form
      setFormData({
        name: '',
        symbol: '',
        description: '',
        totalSupply: '',
        decimals: '9',
        website: '',
        twitter: '',
        telegram: '',
        logoUrl: '',
        presaleRate: '',
        softCap: '',
        hardCap: '',
        minContribution: '',
        maxContribution: '',
        liquidityPercent: '70',
        startDate: '',
        endDate: ''
      });
    } catch (error) {
      toast({
        title: "Launch Failed",
        description: "There was an error launching your token. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="launch" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Token
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to create and deploy your Solana token with presale functionality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Token Information */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-solana-purple" />
                    <span>Token Information</span>
                  </CardTitle>
                  <CardDescription>
                    Basic details about your token
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Token Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., My Awesome Token"
                      required
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="symbol">Token Symbol *</Label>
                    <Input
                      id="symbol"
                      name="symbol"
                      value={formData.symbol}
                      onChange={handleInputChange}
                      placeholder="e.g., MAT"
                      required
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalSupply">Total Supply *</Label>
                    <Input
                      id="totalSupply"
                      name="totalSupply"
                      type="number"
                      value={formData.totalSupply}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000000"
                      required
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="decimals">Decimals</Label>
                    <Input
                      id="decimals"
                      name="decimals"
                      type="number"
                      value={formData.decimals}
                      onChange={handleInputChange}
                      min="0"
                      max="18"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your token and its use case..."
                      className="bg-white/5 border-white/20 min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logoUrl">Logo URL</Label>
                    <Input
                      id="logoUrl"
                      name="logoUrl"
                      type="url"
                      value={formData.logoUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/logo.png"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Presale Configuration */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-solana-green" />
                    <span>Presale Configuration</span>
                  </CardTitle>
                  <CardDescription>
                    Set up your token presale parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="presaleRate">Presale Rate (tokens per SOL) *</Label>
                    <Input
                      id="presaleRate"
                      name="presaleRate"
                      type="number"
                      value={formData.presaleRate}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000"
                      required
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="softCap">Soft Cap (SOL) *</Label>
                      <Input
                        id="softCap"
                        name="softCap"
                        type="number"
                        value={formData.softCap}
                        onChange={handleInputChange}
                        placeholder="e.g., 100"
                        required
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hardCap">Hard Cap (SOL) *</Label>
                      <Input
                        id="hardCap"
                        name="hardCap"
                        type="number"
                        value={formData.hardCap}
                        onChange={handleInputChange}
                        placeholder="e.g., 1000"
                        required
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="minContribution">Min Contribution (SOL)</Label>
                      <Input
                        id="minContribution"
                        name="minContribution"
                        type="number"
                        value={formData.minContribution}
                        onChange={handleInputChange}
                        placeholder="e.g., 0.1"
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxContribution">Max Contribution (SOL)</Label>
                      <Input
                        id="maxContribution"
                        name="maxContribution"
                        type="number"
                        value={formData.maxContribution}
                        onChange={handleInputChange}
                        placeholder="e.g., 10"
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="liquidityPercent">Liquidity % *</Label>
                    <Input
                      id="liquidityPercent"
                      name="liquidityPercent"
                      type="number"
                      value={formData.liquidityPercent}
                      onChange={handleInputChange}
                      min="50"
                      max="100"
                      required
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date *</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="datetime-local"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date *</Label>
                      <Input
                        id="endDate"
                        name="endDate"
                        type="datetime-local"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-solana-blue" />
                  <span>Social Links</span>
                </CardTitle>
                <CardDescription>
                  Optional social media links for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourproject.com"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      placeholder="@yourproject"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telegram">Telegram</Label>
                    <Input
                      id="telegram"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      placeholder="@yourproject"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Launch Fee</h3>
                    <p className="text-gray-400">One-time payment to deploy your token</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-solana-green">2 SOL</div>
                    <Badge className="bg-solana-purple/20 text-solana-purple border-solana-purple">
                      Includes Presale
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold px-12 py-4 text-lg crypto-glow"
              >
                {isLoading ? (
                  <>
                    <Clock className="w-5 h-5 mr-2 animate-spin" />
                    Deploying Token...
                  </>
                ) : (
                  <>
                    <Rocket className="w-5 h-5 mr-2" />
                    Launch Token (2 SOL)
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LaunchForm;
