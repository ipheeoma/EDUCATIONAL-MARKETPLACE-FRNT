"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, Award, ShoppingCart, Users, TrendingUp, Gift, Wallet } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface WalletFeature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  action: string
  cost?: string
  reward?: string
  available: boolean
}

export function WalletFeatures() {
  const [connectedWallet, setConnectedWallet] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedWallet = sessionStorage.getItem("connectedWallet")
    if (savedWallet) {
      try {
        setConnectedWallet(JSON.parse(savedWallet))
      } catch (error) {
        console.error("Error parsing wallet:", error)
      }
    }
  }, [])

  const walletFeatures: WalletFeature[] = [
    {
      id: "purchase",
      title: "Purchase with Crypto",
      description: "Buy courses using your cryptocurrency balance",
      icon: <ShoppingCart className="w-5 h-5" />,
      action: "Buy Course",
      cost: "0.05 ETH",
      available: true,
    },
    {
      id: "earn",
      title: "Earn Learning Tokens",
      description: "Complete courses and earn EduTokens as rewards",
      icon: <Coins className="w-5 h-5" />,
      action: "Start Earning",
      reward: "+50 EDU",
      available: true,
    },
    {
      id: "nft",
      title: "Course Certificates NFT",
      description: "Get blockchain-verified certificates as NFTs",
      icon: <Award className="w-5 h-5" />,
      action: "Mint Certificate",
      cost: "Free",
      available: true,
    },
    {
      id: "stake",
      title: "Stake for Premium",
      description: "Stake tokens to unlock premium features",
      icon: <TrendingUp className="w-5 h-5" />,
      action: "Stake Tokens",
      cost: "100 EDU",
      available: connectedWallet?.nfts > 5,
    },
    {
      id: "referral",
      title: "Referral Rewards",
      description: "Earn crypto rewards for referring friends",
      icon: <Users className="w-5 h-5" />,
      action: "Get Referral Link",
      reward: "0.01 ETH per referral",
      available: true,
    },
    {
      id: "airdrop",
      title: "Weekly Airdrops",
      description: "Receive free tokens for active learning",
      icon: <Gift className="w-5 h-5" />,
      action: "Claim Airdrop",
      reward: "+25 EDU",
      available: connectedWallet?.transactions > 10,
    },
  ]

  const handleFeatureAction = async (feature: WalletFeature) => {
    if (!connectedWallet) {
      toast({
        title: "Wallet Required",
        description: "Please connect your wallet to use this feature",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate blockchain transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))

    switch (feature.id) {
      case "purchase":
        toast({
          title: "Course Purchased!",
          description: "Transaction confirmed. Course access granted.",
        })
        break
      case "earn":
        toast({
          title: "Earning Started!",
          description: "You'll earn EDU tokens as you complete lessons.",
        })
        break
      case "nft":
        toast({
          title: "Certificate Minted!",
          description: "Your course certificate NFT has been created.",
        })
        break
      case "stake":
        toast({
          title: "Tokens Staked!",
          description: "Premium features unlocked for 30 days.",
        })
        break
      case "referral":
        navigator.clipboard.writeText("https://edumarket.com/ref/abc123")
        toast({
          title: "Referral Link Copied!",
          description: "Share this link to earn rewards.",
        })
        break
      case "airdrop":
        toast({
          title: "Airdrop Claimed!",
          description: "25 EDU tokens added to your wallet.",
        })
        break
    }

    setIsLoading(false)
  }

  if (!connectedWallet) {
    return (
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="w-5 h-5" />
            <span>Web3 Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">Connect your wallet to unlock blockchain-powered learning features</p>
          <div className="text-center">
            <Button variant="outline" disabled>
              Connect Wallet to Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-navy-600" />
            <span>Your Web3 Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-900">{connectedWallet.balance}</div>
              <div className="text-sm text-slate-600">Balance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-900">{connectedWallet.nfts}</div>
              <div className="text-sm text-slate-600">NFTs Owned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-900">{connectedWallet.transactions}</div>
              <div className="text-sm text-slate-600">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-900">{Math.floor(Math.random() * 500) + 100}</div>
              <div className="text-sm text-slate-600">EDU Tokens</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {walletFeatures.map((feature) => (
          <Card
            key={feature.id}
            className={`border-slate-200 ${feature.available ? "hover:shadow-lg transition-shadow" : "opacity-60"}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-navy-100 rounded-lg text-navy-600">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                {!feature.available && (
                  <Badge variant="secondary" className="text-xs">
                    Locked
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">{feature.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {feature.cost && <span className="text-slate-500">Cost: {feature.cost}</span>}
                  {feature.reward && <span className="text-green-600">Reward: {feature.reward}</span>}
                </div>
              </div>

              <Button
                onClick={() => handleFeatureAction(feature)}
                disabled={!feature.available || isLoading}
                className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
                size="sm"
              >
                {isLoading ? "Processing..." : feature.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
