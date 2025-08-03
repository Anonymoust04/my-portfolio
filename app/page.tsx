"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { link } from "fs"
import {
  Code2,
  Database,
  Terminal,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Shield,
  Cloud,
  Monitor,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C", "R"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Spring Boot"],
    Databases: ["MongoDB", "Oracle"],
    "Cloud & DevOps": ["Docker"],
    "Tools & Platforms": ["Git", "Linux"],
  }

  const projects = [
    {
      title: "Nutritrack App",
      description:
        "Built a MVVM architecture Android app which provides nutrition score and AI-generated advice for their diet.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM Architecture"],
      github: "https://github.com/Anonymoust04/nutritrack_app.01",
    },
    {
      title: "Charity Block",
      description:
        "Developed a charity website that accepts cryptocurrencies such as Bitcoin through Phantom wallet.",
      tech: ["React", "Typescrpit", "Javascript", "Next.Js", "ShadCN"],
      github: "https://github.com/Anonymoust04/charity-block-src"
    },
  ]

  const experience = [
    {
      role: "TeaMWork Project Intern",
      company: "Green Proposition Consulting",
      period: "June 2025 - July 2025",
      location: "Remote",
      achievements: [
        "Reduced deployment time by 75% through CI/CD optimization",
        "Implemented monitoring stack serving 50+ microservices",
        "Led migration to Kubernetes, improving scalability by 300%",
      ],
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <span className="font-mono text-lg font-bold">unknown.dev</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-emerald-400 mb-4">{"> whoami"}</div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                Tee Zhi Hong
              </h1>
              <h2 className="text-2xl text-slate-300 mb-6">A person who interested in AI and software development</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Specialized in object-oriented design, data structures and algorithms and deep learning. Passionate in big data analysis and AI development as I want to understand how Generative AI tools like ChatGPT work while in college.
              </p>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:teezhihong@gmail.com">
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  <a href="https://github.com/Anonymoust04">
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-lg border border-slate-700 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-400">terminal</span>
                </div>
                <div className="space-y-2">
                  <div className="text-emerald-400">$ cat /etc/profile</div>
                  <div className="text-slate-300">Name: Tee Zhi Hong</div>
                  <div className="text-slate-300">Role: Student</div>
                  <div className="text-slate-300">Current Education: Monash University Malaysia</div>
                  <div className="text-slate-300">Course: Bachelor of Computer Science</div>
                  <div className="text-slate-300">Specialisation: Advanced Computer Science</div>
                  <div className="text-slate-300">CGPA: 3.7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400">Technologies and tools I work with daily</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-400">
                    {category === "Programming Languages" && <Code2 className="w-5 h-5" />}
                    {category === "Frameworks & Libraries" && <Zap className="w-5 h-5" />}
                    {category === "Databases" && <Database className="w-5 h-5" />}
                    {category === "Cloud & DevOps" && <Cloud className="w-5 h-5" />}
                    {category === "Security & Networking" && <Shield className="w-5 h-5" />}
                    {category === "Tools & Platforms" && <Monitor className="w-5 h-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Some of my recent work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-emerald-500 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-5">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <a href={project.github}>
                        Source Code
                      </a>
                      
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-slate-400">My journey in the workplace</p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-emerald-400">{job.role}</CardTitle>
                      <CardDescription className="text-lg text-slate-300">{job.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-8">
            Interested in collaborating or discussing opportunities? I'd love to hear from you.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:teezhihong@gmail.com">
                teezhihong@gmail.com
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <a href="https://www.linkedin.com/in/zhi-hong-tee-96387a245/">
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              <a href="https://github.com/Anonymoust04">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="font-mono">© 2024 Tee Zhi Hong. Built with Next.js & TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}
