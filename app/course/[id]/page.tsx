import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, Clock, BookOpen, Play, Share2, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"

export default function CourseDetailPage() {
  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive course",
    instructor: {
      name: "John Smith",
      title: "Senior Full Stack Developer",
      avatar: "/instructor-avatar.png",
      rating: 4.9,
      students: 45000,
      courses: 12,
    },
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.8,
    students: 25430,
    duration: "42 hours",
    lessons: 156,
    image: "/web-development-course.png",
    category: "Development",
    level: "Beginner",
    language: "English",
    lastUpdated: "December 2024",
    bestseller: true,
    certificate: true,
  }

  const curriculum = [
    {
      section: "Getting Started",
      lessons: 8,
      duration: "2h 30m",
      topics: ["Course Introduction", "Setting up Development Environment", "HTML Basics", "CSS Fundamentals"],
    },
    {
      section: "JavaScript Fundamentals",
      lessons: 15,
      duration: "5h 45m",
      topics: ["Variables and Data Types", "Functions and Scope", "DOM Manipulation", "Event Handling"],
    },
    {
      section: "React Development",
      lessons: 20,
      duration: "8h 20m",
      topics: ["React Components", "State Management", "Hooks and Context", "Building Projects"],
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/student-avatar-1.png",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! John explains everything clearly and the projects are very practical.",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/student-avatar-2.png",
      rating: 5,
      date: "1 month ago",
      comment: "This course transformed my career. I went from zero to landing my first developer job!",
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-slate-100 text-slate-700">{course.category}</Badge>
                {course.bestseller && <Badge className="bg-amber-500 text-white">Bestseller</Badge>}
              </div>
              <h1 className="text-4xl font-display font-bold text-navy-900">{course.title}</h1>
              <p className="text-xl text-slate-600">{course.subtitle}</p>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Play className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
            </div>

            {/* Course Video */}
            <div className="relative rounded-lg overflow-hidden bg-slate-900">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Play className="w-6 h-6 mr-2" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Build responsive websites with HTML, CSS, and JavaScript",
                        "Create dynamic web applications with React",
                        "Develop backend APIs with Node.js and Express",
                        "Work with databases and authentication",
                        "Deploy applications to production",
                        "Best practices for modern web development",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Description</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p>
                      This comprehensive web development bootcamp will take you from complete beginner to job-ready
                      developer. You'll learn the most in-demand skills including HTML, CSS, JavaScript, React, Node.js,
                      and much more.
                    </p>
                    <p>
                      The course is project-based, meaning you'll build real applications that you can add to your
                      portfolio. By the end of this course, you'll have the skills and confidence to start your career
                      as a web developer.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                {curriculum.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-display font-bold">{section.section}</CardTitle>
                        <div className="text-sm text-slate-600">
                          {section.lessons} lessons • {section.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2 py-2">
                            <Play className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h3 className="text-xl font-display font-bold text-slate-900">{course.instructor.name}</h3>
                        <p className="text-slate-600">{course.instructor.title}</p>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span>{course.instructor.rating} rating</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.instructor.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.instructor.courses} courses</span>
                          </div>
                        </div>
                        <p className="text-slate-700 mt-4">
                          John is a senior full-stack developer with over 8 years of experience building web
                          applications. He has worked with companies like Google and Microsoft, and is passionate about
                          teaching others the skills they need to succeed in tech.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-slate-900">Student Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-slate-600">({course.students.toLocaleString()} reviews)</span>
                  </div>
                </div>
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{review.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-900">{review.name}</h4>
                            <span className="text-sm text-slate-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-slate-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="space-x-2 mb-2">
                      <span className="text-3xl font-bold text-slate-900">${course.price}</span>
                      <span className="text-lg text-slate-500 line-through">${course.originalPrice}</span>
                    </div>
                    <Badge className="bg-red-100 text-red-700">33% off</Badge>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
                    size="lg"
                  >
                    Enroll Now
                  </Button>

                  <Button variant="outline" className="w-full border-slate-300 bg-transparent" size="lg">
                    Add to Cart
                  </Button>

                  <div className="flex justify-center space-x-4 pt-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4 mr-1" />
                      Wishlist
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Lessons</span>
                  <span className="font-medium">{course.lessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Language</span>
                  <span className="font-medium">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Certificate</span>
                  <span className="font-medium">{course.certificate ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Last Updated</span>
                  <span className="font-medium">{course.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
