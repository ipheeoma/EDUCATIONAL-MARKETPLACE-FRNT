import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Palette, BarChart3, Megaphone, Camera, Brain, Music } from "lucide-react"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Development",
      description: "Learn programming languages, frameworks, and software development",
      count: 1250,
      icon: Code,
      color: "from-navy-500 to-navy-600",
      courses: ["React Development", "Python Programming", "Full Stack Web Development"],
    },
    {
      name: "Design",
      description: "Master UI/UX design, graphic design, and creative tools",
      count: 890,
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      courses: ["UI/UX Design", "Graphic Design", "Adobe Creative Suite"],
    },
    {
      name: "Business",
      description: "Develop business skills, leadership, and entrepreneurship",
      count: 1100,
      icon: BarChart3,
      color: "from-emerald-500 to-emerald-600",
      courses: ["Business Strategy", "Project Management", "Leadership Skills"],
    },
    {
      name: "Data Science",
      description: "Explore data analysis, machine learning, and AI",
      count: 750,
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      courses: ["Machine Learning", "Data Analysis", "Python for Data Science"],
    },
    {
      name: "Marketing",
      description: "Learn digital marketing, SEO, and social media strategies",
      count: 650,
      icon: Megaphone,
      color: "from-orange-500 to-orange-600",
      courses: ["Digital Marketing", "SEO Optimization", "Social Media Marketing"],
    },
    {
      name: "Photography",
      description: "Master photography techniques and photo editing",
      count: 420,
      icon: Camera,
      color: "from-pink-500 to-pink-600",
      courses: ["Portrait Photography", "Landscape Photography", "Photo Editing"],
    },
    {
      name: "Music",
      description: "Learn music theory, instruments, and audio production",
      count: 380,
      icon: Music,
      color: "from-indigo-500 to-indigo-600",
      courses: ["Music Theory", "Guitar Lessons", "Audio Production"],
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
              <Link href="/categories" className="text-navy-900 font-medium">
                Categories
              </Link>
              <Link href="/instructors" className="text-slate-600 hover:text-navy-900 transition-colors">
                Instructors
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-navy-900 transition-colors">
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
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-navy-900 mb-6">Course Categories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Explore our diverse range of course categories and find the perfect learning path for your goals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-slate-200 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {category.count} courses
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-display font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-slate-800">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="text-xs border-slate-300 text-slate-600">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={`/courses?category=${category.name.toLowerCase()}`}>
                    <Button className="w-full mt-4 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800">
                      Explore {category.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Can't find what you're looking for?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We're constantly adding new courses and categories. Let us know what you'd like to learn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
                >
                  Browse All Courses
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                Request a Course
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
