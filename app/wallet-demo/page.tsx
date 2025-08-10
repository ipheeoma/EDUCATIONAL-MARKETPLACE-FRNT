import { WalletConnect } from "@/components/wallet-connect"
import { WalletFeatures } from "@/components/wallet-features"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Wallet, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function WalletDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-navy-900">EduMarket</span>
            </Link>
            <div className="flex items-center space-x-4">
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-bold text-navy-900 mb-6">Web3 Learning Experience</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Experience the future of education with blockchain-powered features, crypto payments, and NFT certificates
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-slate-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Crypto Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Pay for courses using cryptocurrency with instant, secure transactions</p>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle>NFT Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Earn blockchain-verified certificates that prove your achievements forever
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Token Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Earn EDU tokens for learning, completing courses, and referring friends</p>
            </CardContent>
          </Card>
        </div>

        {/* Wallet Features */}
        <WalletFeatures />
      </div>
    </div>
  )
}
