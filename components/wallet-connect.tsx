"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Wallet, Copy, ExternalLink, LogOut, CheckCircle, AlertCircle, Coins } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface WalletInfo {
  address: string
  network: string
  balance: string
  provider: string
  nfts: number
  transactions: number
}

interface DemoWallet {
  name: string
  icon: string
  address: string
  network: string
  balance: string
  nfts: number
  transactions: number
  description: string
}

const DEMO_WALLETS: DemoWallet[] = [
  {
    name: "Student Wallet",
    icon: "🎓",
    address: "0x742d35Cc6634C0532925a3b8D4C9db96590c4C87",
    network: "Polygon",
    balance: "125.50 MATIC",
    nfts: 3,
    transactions: 47,
    description: "A student's wallet with course certificates and learning tokens",
  },
  {
    name: "Instructor Wallet",
    icon: "👨‍🏫",
    address: "0x8ba1f109551bD432803012645Hac136c82C",
    network: "Ethereum",
    balance: "2.85 ETH",
    nfts: 12,
    transactions: 156,
    description: "An instructor's wallet with teaching rewards and premium NFTs",
  },
  {
    name: "Collector Wallet",
    icon: "💎",
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    network: "Polygon",
    balance: "890.25 MATIC",
    nfts: 28,
    transactions: 203,
    description: "A collector's wallet with rare educational NFTs and tokens",
  },
  {
    name: "Developer Wallet",
    icon: "💻",
    address: "0xA0b86a33E6417c8C2A3F8C323D1C1C1C1C1C1C1C",
    network: "Ethereum",
    balance: "5.42 ETH",
    nfts: 8,
    transactions: 89,
    description: "A developer's wallet with coding bootcamp certificates",
  },
  {
    name: "Enterprise Wallet",
    icon: "🏢",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    network: "Polygon",
    balance: "1,250.00 MATIC",
    nfts: 45,
    transactions: 312,
    description: "An enterprise wallet for bulk course purchases and team training",
  },
  {
    name: "Creator Wallet",
    icon: "🎨",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    network: "Ethereum",
    balance: "3.67 ETH",
    nfts: 19,
    transactions: 134,
    description: "A content creator's wallet with design course royalties",
  },
]

interface WalletProvider {
  name: string
  icon: string
  isInstalled: boolean
  connect: () => Promise<WalletInfo>
  description?: string
}

declare global {
  interface Window {
    ethereum?: any
    solana?: any
    hashpack?: any
  }
}

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [availableWallets, setAvailableWallets] = useState<WalletProvider[]>([])
  const [showDemoWallets, setShowDemoWallets] = useState(false)

  useEffect(() => {
    // Check for existing connection on mount
    const savedWallet = sessionStorage.getItem("connectedWallet")
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet)
        setWalletInfo(walletData)
        setIsConnected(true)
      } catch (error) {
        console.error("Error parsing saved wallet:", error)
        sessionStorage.removeItem("connectedWallet")
      }
    }

    // Detect available wallets
    detectWallets()
  }, [])

  const detectWallets = () => {
    const wallets: WalletProvider[] = [
      {
        name: "MetaMask",
        icon: "🦊",
        isInstalled: typeof window !== "undefined" && !!window.ethereum?.isMetaMask,
        connect: connectMetaMask,
        description: "Connect your MetaMask wallet",
      },
      {
        name: "Browser Wallet",
        icon: "🌐",
        isInstalled: typeof window !== "undefined" && !!(window.ethereum && !window.ethereum.isMetaMask),
        connect: connectBrowserWallet,
        description: "Connect your browser's Ethereum wallet",
      },
      {
        name: "Demo Wallets",
        icon: "🎯",
        isInstalled: true,
        connect: () => Promise.resolve({} as WalletInfo), // Placeholder
        description: "Try demo wallets with sample data",
      },
    ]

    setAvailableWallets(wallets)
  }

  const connectMetaMask = async (): Promise<WalletInfo> => {
    if (!window.ethereum?.isMetaMask) {
      throw new Error("MetaMask not installed")
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length === 0) {
        throw new Error("No accounts found")
      }

      // Try to get balance
      let balance = "0 ETH"
      try {
        const balanceWei = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })
        const balanceEth = Number.parseInt(balanceWei, 16) / Math.pow(10, 18)
        balance = `${balanceEth.toFixed(4)} ETH`
      } catch (balanceError) {
        console.warn("Could not fetch balance:", balanceError)
      }

      return {
        address: accounts[0],
        network: "Ethereum",
        balance,
        provider: "MetaMask",
        nfts: Math.floor(Math.random() * 10) + 1,
        transactions: Math.floor(Math.random() * 100) + 10,
      }
    } catch (error: any) {
      console.error("MetaMask connection error:", error)
      throw new Error(error.message || "Failed to connect to MetaMask")
    }
  }

  const connectBrowserWallet = async (): Promise<WalletInfo> => {
    if (!window.ethereum) {
      throw new Error("No Ethereum wallet found")
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length === 0) {
        throw new Error("No accounts found")
      }

      return {
        address: accounts[0],
        network: "Ethereum",
        balance: "0.0 ETH",
        provider: "Browser Wallet",
        nfts: Math.floor(Math.random() * 5) + 1,
        transactions: Math.floor(Math.random() * 50) + 5,
      }
    } catch (error: any) {
      console.error("Browser wallet connection error:", error)
      throw new Error(error.message || "Failed to connect to wallet")
    }
  }

  const connectDemoWallet = async (demoWallet: DemoWallet): Promise<WalletInfo> => {
    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      address: demoWallet.address,
      network: demoWallet.network,
      balance: demoWallet.balance,
      provider: demoWallet.name,
      nfts: demoWallet.nfts,
      transactions: demoWallet.transactions,
    }
  }

  const handleWalletConnect = async (wallet: WalletProvider) => {
    if (wallet.name === "Demo Wallets") {
      setShowDemoWallets(true)
      return
    }

    if (!wallet.isInstalled) {
      toast({
        title: "Wallet not installed",
        description: `Please install ${wallet.name} to continue`,
        variant: "destructive",
      })
      return
    }

    setIsConnecting(true)

    try {
      const walletData = await wallet.connect()
      setWalletInfo(walletData)
      setIsConnected(true)

      // Store in session storage
      sessionStorage.setItem("connectedWallet", JSON.stringify(walletData))

      toast({
        title: "Wallet connected successfully",
        description: `Connected to ${wallet.name}`,
      })
    } catch (error: any) {
      console.error("Connection error:", error)
      toast({
        title: "Connection failed",
        description: error.message || "Failed to connect wallet",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDemoWalletConnect = async (demoWallet: DemoWallet) => {
    setIsConnecting(true)
    setShowDemoWallets(false)

    try {
      const walletData = await connectDemoWallet(demoWallet)
      setWalletInfo(walletData)
      setIsConnected(true)

      // Store in session storage
      sessionStorage.setItem("connectedWallet", JSON.stringify(walletData))

      toast({
        title: "Demo wallet connected",
        description: `Connected to ${demoWallet.name}`,
      })
    } catch (error: any) {
      console.error("Demo connection error:", error)
      toast({
        title: "Connection failed",
        description: error.message || "Failed to connect demo wallet",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setWalletInfo(null)
    sessionStorage.removeItem("connectedWallet")

    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  const shortenAddress = (address: string) => {
    if (!address) return ""
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyAddress = async () => {
    if (walletInfo?.address) {
      try {
        await navigator.clipboard.writeText(walletInfo.address)
        toast({
          title: "Address copied",
          description: "Wallet address copied to clipboard",
        })
      } catch (error) {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea")
        textArea.value = walletInfo.address
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)

        toast({
          title: "Address copied",
          description: "Wallet address copied to clipboard",
        })
      }
    }
  }

  const openExplorer = () => {
    if (walletInfo?.address) {
      const explorerUrl =
        walletInfo.network === "Polygon"
          ? `https://polygonscan.com/address/${walletInfo.address}`
          : `https://etherscan.io/address/${walletInfo.address}`

      window.open(explorerUrl, "_blank")
    }
  }

  if (isConnected && walletInfo) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-navy-200 bg-navy-50 hover:bg-navy-100 text-navy-800">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            {shortenAddress(walletInfo.address)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Connected Wallet</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {walletInfo.network}
              </Badge>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">Address</div>
                <div className="text-xs text-slate-900 font-mono break-all bg-slate-50 p-2 rounded">
                  {walletInfo.address}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-50 p-2 rounded">
                  <div className="text-sm font-semibold text-slate-900">{walletInfo.balance}</div>
                  <div className="text-xs text-slate-500">Balance</div>
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <div className="text-sm font-semibold text-slate-900">{walletInfo.nfts}</div>
                  <div className="text-xs text-slate-500">NFTs</div>
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <div className="text-sm font-semibold text-slate-900">{walletInfo.transactions}</div>
                  <div className="text-xs text-slate-500">Transactions</div>
                </div>
              </div>

              <div className="text-xs text-slate-500">Provider: {walletInfo.provider}</div>
            </div>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={copyAddress}>
            <Copy className="w-4 h-4 mr-2" />
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem onClick={openExplorer}>
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Explorer
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDisconnect} className="text-red-600">
            <LogOut className="w-4 h-4 mr-2" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  if (showDemoWallets) {
    return (
      <DropdownMenu open={showDemoWallets} onOpenChange={setShowDemoWallets}>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white"
            disabled={isConnecting}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {isConnecting ? "Connecting..." : "Choose Demo Wallet"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-96">
          <div className="p-3">
            <h3 className="font-medium mb-2">Choose a Demo Wallet</h3>
            <p className="text-xs text-slate-600 mb-3">Select from pre-configured wallets with sample data</p>
          </div>
          <DropdownMenuSeparator />
          <div className="max-h-80 overflow-y-auto">
            {DEMO_WALLETS.map((wallet) => (
              <DropdownMenuItem
                key={wallet.address}
                onClick={() => handleDemoWalletConnect(wallet)}
                disabled={isConnecting}
                className="flex flex-col items-start p-3 cursor-pointer space-y-2"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{wallet.icon}</span>
                    <div>
                      <span className="font-medium">{wallet.name}</span>
                      <div className="text-xs text-slate-500">{shortenAddress(wallet.address)}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {wallet.network}
                  </Badge>
                </div>
                <div className="text-xs text-slate-600 w-full">{wallet.description}</div>
                <div className="flex items-center space-x-4 text-xs text-slate-500 w-full">
                  <div className="flex items-center space-x-1">
                    <Coins className="w-3 h-3" />
                    <span>{wallet.balance}</span>
                  </div>
                  <div>{wallet.nfts} NFTs</div>
                  <div>{wallet.transactions} TXs</div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShowDemoWallets(false)}>← Back to wallet options</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white"
          disabled={isConnecting}
        >
          <Wallet className="w-4 h-4 mr-2" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <div className="p-3">
          <h3 className="font-medium mb-2">Connect a Wallet</h3>
          <p className="text-xs text-slate-600 mb-3">Connect your wallet to access blockchain features</p>
        </div>
        <DropdownMenuSeparator />
        {availableWallets.map((wallet) => (
          <DropdownMenuItem
            key={wallet.name}
            onClick={() => handleWalletConnect(wallet)}
            disabled={isConnecting}
            className="flex items-center justify-between cursor-pointer p-3"
          >
            <div className="flex items-center">
              <span className="text-lg mr-3">{wallet.icon}</span>
              <div>
                <span className="block font-medium">{wallet.name}</span>
                <span className="text-xs text-slate-500">{wallet.description}</span>
              </div>
            </div>
            {!wallet.isInstalled && wallet.name !== "Demo Wallets" && (
              <AlertCircle className="w-4 h-4 text-amber-500" />
            )}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="p-3 text-xs text-slate-500">
          💡 Demo wallets are perfect for testing Web3 features without real crypto!
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
