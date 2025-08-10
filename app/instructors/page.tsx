import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Star, Users, Award, MapPin } from "lucide-react"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"

export default function InstructorsPage() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior React Developer",
      company: "Google",
      avatar: "/instructor-sarah.png",
      rating: 4.9,
      students: 25430,
      courses: 8,
      location: "San Francisco, CA",
      specialties: ["React", "JavaScript", "TypeScript"],
      bio: "Former Google engineer with 8+ years of experience building scalable web applications.",
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      title: "Data Science Lead",
      company: "Microsoft",
      avatar: "/instructor-michael.png",
      rating: 4.8,
      students: 18932,
      courses: 12,
      location: "Seattle, WA",
      specialties: ["Python", "Machine Learning", "Statistics"],
      bio: "PhD in Computer Science, specializing in machine learning and data analysis.",
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "UX Design Director",
      company: "Apple",
      avatar: "/instructor-emma.png",
      rating: 4.9,
      students: 15678,
      courses: 6,
      location: "Cupertino, CA",
      specialties: ["UI/UX Design", "Figma", "Design Systems"],
      bio: "Award-winning designer with 10+ years creating user experiences for millions of users.",
    },
    {
      id: 4,
      name: "Alex Johnson",
      title: "Marketing Strategist",
      company: "Meta",
      avatar: "/instructor-alex.png",
      rating: 4.7,
      students: 12543,
      courses: 9,
      location: "Menlo Park, CA",
      specialties: ["Digital Marketing", "SEO", "Analytics"],
      bio: "Growth marketing expert who has scaled multiple startups from zero to millions in revenue.",
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      title: "AI Research Scientist",
      company: "OpenAI",
      avatar: "/instructor-lisa.png",
      rating: 4.9,
      students: 9876,
      courses: 5,
      location: "San Francisco, CA",
      specialties: ["AI", "Deep Learning", "Neural Networks"],
      bio: "Leading AI researcher with publications in top-tier conferences and journals.",
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Full Stack Engineer",
      company: "Netflix",
      avatar: "/instructor-james.png",
      rating: 4.8,
      students: 14321,
      courses: 11,
      location: "Los Gatos, CA",
      specialties: ["Node.js", "AWS", "DevOps"],
      bio: "Senior engineer building scalable systems that serve millions of users worldwide.",
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
              <Link href="/instructors" className="text-navy-900 font-medium">
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
          <h1 className="text-5xl font-display font-bold text-navy-900 mb-6">Expert Instructors</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Learn from industry leaders and experienced professionals who are passionate about sharing their knowledge
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card
              key={instructor.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-slate-200 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-navy-100 group-hover:ring-navy-200 transition-all">
                    <AvatarImage src={instructor.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-navy-100 text-navy-700 text-lg font-semibold">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-1">{instructor.name}</h3>
                  <p className="text-slate-600 font-medium">{instructor.title}</p>
                  <p className="text-sm text-slate-500">{instructor.company}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{instructor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{instructor.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{instructor.courses} courses</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{instructor.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-700 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 text-center leading-relaxed">{instructor.bio}</p>

                  <Link href={`/instructor/${instructor.id}`}>
                    <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Want to become an instructor?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Share your expertise with thousands of students and build your teaching career with EduMarket
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800"
              >
                Become an Instructor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
