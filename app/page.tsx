import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Users, Star, Clock, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WalletConnect } from "@/components/wallet-connect"

export default function HomePage() {
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      students: 12543,
      duration: "18 hours",
      image: "/react-development-course.png",
      category: "Development",
      level: "Advanced",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Dr. Michael Rodriguez",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.9,
      students: 8932,
      duration: "24 hours",
      image: "/data-science-course.png",
      category: "Data Science",
      level: "Beginner",
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      instructor: "Emma Thompson",
      price: 94.99,
      originalPrice: 149.99,
      rating: 4.7,
      students: 15678,
      duration: "16 hours",
      image: "/ux-ui-design-course.png",
      category: "Design",
      level: "Intermediate",
    },
  ]

  const categories = [
    { name: "Development", count: 1250, icon: "💻" },
    { name: "Design", count: 890, icon: "🎨" },
    { name: "Business", count: 1100, icon: "📊" },
    { name: "Data Science", count: 750, icon: "📈" },
    { name: "Marketing", count: 650, icon: "📢" },
    { name: "Photography", count: 420, icon: "📸" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-display font-bold text-navy-900">EduMarket</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/courses" className="text-slate-600 hover:text-navy-800 transition-colors font-medium">
                  Courses
                </Link>
                <Link href="/categories" className="text-slate-600 hover:text-navy-800 transition-colors font-medium">
                  Categories
                </Link>
                <Link href="/instructors" className="text-slate-600 hover:text-navy-800 transition-colors font-medium">
                  Instructors
                </Link>
                <Link href="/wallet-demo" className="text-slate-600 hover:text-navy-800 transition-colors font-medium">
                  Web3 Demo
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-navy-800 transition-colors font-medium">
                  About
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-slate-500" />
                <Input
                  placeholder="Search courses..."
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
                />
              </div>
              <WalletConnect />
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-slate-600 hover:text-navy-800">
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

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy-50 via-slate-50 to-stone-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 border-navy-200">
                  🚀 New Web3 features available
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-navy-900 leading-tight">
                  Learn from the
                  <span className="gradient-text"> best minds</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Discover world-class courses from industry experts. Build skills that matter with hands-on projects,
                  crypto rewards, and blockchain certificates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-8"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link href="/wallet-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try Web3 Demo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-navy-900">50K+</div>
                  <div className="text-sm text-slate-600 font-medium">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-navy-900">2K+</div>
                  <div className="text-sm text-slate-600 font-medium">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-navy-900">98%</div>
                  <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-100 to-slate-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <Image
                  src="/online-learning-students.png"
                  alt="Students learning"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Explore Categories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from our wide range of categories and start your learning journey today
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-slate-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-500">{category.count} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Featured Courses</h2>
              <p className="text-slate-600">Hand-picked courses from our top instructors</p>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent">
                View All Courses
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-slate-200"
              >
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-slate-700">{course.category}</Badge>
                  <Badge className="absolute top-3 right-3 bg-slate-800 text-white">{course.level}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-700 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm">by {course.instructor}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-x-2">
                        <span className="text-2xl font-bold text-slate-900">${course.price}</span>
                        <span className="text-sm text-slate-500 line-through">${course.originalPrice}</span>
                      </div>
                      <Link href="/course/1">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
                        >
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 gradient-bg text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold">50,000+</div>
              <div className="text-slate-300">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold">2,500+</div>
              <div className="text-slate-300">Quality Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold">500+</div>
              <div className="text-slate-300">Expert Instructors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold">98%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-100 to-stone-100">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-bold text-slate-900">Ready to start your learning journey?</h2>
            <p className="text-xl text-slate-600">
              Join thousands of students who are already transforming their careers with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 px-8"
                >
                  Start Learning Today
                </Button>
              </Link>
              <Link href="/wallet-demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  Try Web3 Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-xl font-bold">EduMarket</span>
              </div>
              <p className="text-slate-400">
                Empowering learners worldwide with quality education and expert instruction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-slate-400">
                <Link href="/courses" className="block hover:text-white transition-colors">
                  Courses
                </Link>
                <Link href="/instructors" className="block hover:text-white transition-colors">
                  Instructors
                </Link>
                <Link href="/categories" className="block hover:text-white transition-colors">
                  Categories
                </Link>
                <Link href="/wallet-demo" className="block hover:text-white transition-colors">
                  Web3 Demo
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <Link href="/about" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/careers" className="block hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="/contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/blog" className="block hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-slate-400">
                <Link href="/help" className="block hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/privacy" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/community" className="block hover:text-white transition-colors">
                  Community
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} EduMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
