"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, Shield, Zap, Gift, TrendingUp, Award, Wallet, ExternalLink } from "lucide-react"

export function WalletFeatures() {
  const features = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Multi-Chain Payments",
      description: "Pay for courses using ETH, SOL, HBAR, or MATIC",
      status: "Available",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "NFT Certificates",
      description: "Earn blockchain-verified completion certificates",
      status: "Available",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Learning Rewards",
      description: "Earn EDU tokens for completing courses and milestones",
      status: "Coming Soon",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description: "All payments secured by blockchain technology",
      status: "Available",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Referral Bonuses",
      description: "Earn crypto rewards for referring new students",
      status: "Coming Soon",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Token Staking",
      description: "Stake EDU tokens for premium features and discounts",
      status: "Coming Soon",
      color: "bg-blue-100 text-blue-800",
    },
  ]

  const supportedWallets = [
    {
      name: "MetaMask",
      icon: "🦊",
      networks: ["Ethereum", "Polygon", "Arbitrum", "Optimism"],
      url: "https://metamask.io",
    },
    {
      name: "Phantom",
      icon: "👻",
      networks: ["Solana"],
      url: "https://phantom.app",
    },
    {
      name: "HashPack",
      icon: "🔷",
      networks: ["Hedera"],
      url: "https://hashpack.app",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Features Grid */}
      <div>
        <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 text-center">Web3 Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy-600 to-navy-700 rounded-xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <Badge className={feature.color}>{feature.status}</Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Supported Wallets */}
      <div>
        <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 text-center">Supported Wallets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {supportedWallets.map((wallet, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{wallet.icon}</div>
                <CardTitle className="text-xl">{wallet.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 font-medium">Supported Networks:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {wallet.networks.map((network) => (
                      <Badge key={network} variant="outline" className="text-xs">
                        {network}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => window.open(wallet.url, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <Card className="border-slate-200 bg-gradient-to-r from-navy-50 to-slate-50">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-slate-600 max-w-2xl mx-auto">
            Connect your wallet to unlock the full potential of our Web3 educational platform. Enjoy secure payments,
            earn rewards, and collect NFT certificates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800">
              Connect Wallet
            </Button>
            <Button variant="outline">View Courses</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
