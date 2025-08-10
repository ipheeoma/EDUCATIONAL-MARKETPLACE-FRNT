import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Users, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WalletConnect } from "@/components/wallet-connect"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in course quality and instructor expertise.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning community where everyone can thrive.",
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "Making quality education accessible to learners worldwide.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing new technologies to enhance the learning experience.",
    },
  ]

  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "2,500+", label: "Quality Courses" },
    { number: "500+", label: "Expert Instructors" },
    { number: "150+", label: "Countries Reached" },
  ]

  const team = [
    {
      name: "David Kim",
      role: "CEO & Founder",
      image: "/team-david.png",
      bio: "Former education executive with 15+ years of experience in online learning.",
    },
    {
      name: "Maria Garcia",
      role: "Head of Product",
      image: "/team-maria.png",
      bio: "Product leader focused on creating exceptional learning experiences.",
    },
    {
      name: "Robert Chen",
      role: "CTO",
      image: "/team-robert.png",
      bio: "Technology veteran building scalable platforms for millions of users.",
    },
  ]

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
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/courses" className="text-slate-600 hover:text-navy-900 transition-colors">
                Courses
              </Link>
              <Link href="/categories" className="text-slate-600 hover:text-navy-900 transition-colors">
                Categories
              </Link>
              <Link href="/instructors" className="text-slate-600 hover:text-navy-900 transition-colors">
                Instructors
              </Link>
              <Link href="/about" className="text-navy-900 font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <WalletConnect />
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-slate-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge className="bg-navy-100 text-navy-700 mb-6">About EduMarket</Badge>
          <h1 className="text-5xl font-display font-bold text-navy-900 mb-6">Empowering learners worldwide</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We're on a mission to democratize education by connecting passionate learners with world-class instructors,
            making quality education accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-navy-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At EduMarket, we believe that education is the key to unlocking human potential. Our platform brings
              together the world's best instructors and most motivated learners in a seamless, engaging environment.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We're not just building courses – we're building careers, transforming lives, and creating a more educated
              world where anyone can learn anything, anytime, anywhere.
            </p>
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
              >
                Start Learning Today
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-100 to-slate-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              <Image src="/about-mission.png" alt="Our mission" width={500} height={400} className="rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-navy-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Our Impact</h2>
            <p className="text-xl text-slate-600">Making a difference in education worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-navy-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The passionate people behind EduMarket</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-navy-100 to-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-navy-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy-600 to-navy-700 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-display font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-xl mb-8 text-navy-100">
              Join thousands of learners who are already transforming their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-navy-700 hover:bg-slate-100">
                  Browse Courses
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
