import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Users, Clock, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.8,
      students: 25430,
      duration: "42 hours",
      image: "/web-development-bootcamp.png",
      category: "Development",
      level: "Beginner",
      bestseller: true,
    },
    {
      id: 2,
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.9,
      students: 12543,
      duration: "18 hours",
      image: "/react-development-course.png",
      category: "Development",
      level: "Advanced",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Michael Rodriguez",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.7,
      students: 18932,
      duration: "28 hours",
      image: "/python-data-science.png",
      category: "Data Science",
      level: "Intermediate",
    },
    {
      id: 4,
      title: "UX/UI Design Masterclass",
      instructor: "Emma Thompson",
      price: 94.99,
      originalPrice: 149.99,
      rating: 4.8,
      students: 15678,
      duration: "16 hours",
      image: "/ux-ui-design-course.png",
      category: "Design",
      level: "Intermediate",
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      instructor: "Alex Johnson",
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.6,
      students: 9876,
      duration: "12 hours",
      image: "/digital-marketing-course.png",
      category: "Marketing",
      level: "Beginner",
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Lisa Wang",
      price: 109.99,
      originalPrice: 159.99,
      rating: 4.9,
      students: 7654,
      duration: "35 hours",
      image: "/machine-learning-course.png",
      category: "Data Science",
      level: "Advanced",
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
              <Link href="/courses" className="text-navy-900 font-medium">
                Courses
              </Link>
              <Link href="/categories" className="text-slate-600 hover:text-navy-900 transition-colors">
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">All Courses</h1>
          <p className="text-slate-600 text-lg font-medium">
            Discover our comprehensive collection of courses from industry experts
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Search courses..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-600">Showing {courses.length} courses</p>
          <Button variant="outline" size="sm" className="border-slate-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
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
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-white/90 text-slate-700">{course.category}</Badge>
                  {course.bestseller && <Badge className="bg-amber-500 text-white">Bestseller</Badge>}
                </div>
                <Badge className="absolute top-3 right-3 bg-slate-800 text-white">{course.level}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">
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
                    <Link href={`/course/${course.id}`}>
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

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
          >
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  )
}
