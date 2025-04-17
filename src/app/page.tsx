/* eslint-disable react/jsx-no-undef */
"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Code, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"; // Add Dialog imports
import { useState } from "react"; // Add useState for dialog state


export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/30 dark:to-blue-900/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
          >
            Anshay Gupta
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.05),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.05),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.05),transparent_40%)]"></div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-20 h-20 rounded-full bg-pink-200/30 dark:bg-pink-900/20 blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-[20%] w-12 h-12 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image src="/images/photo-anshay.jpg" alt="Anshay Gupta" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
                Software Developer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
                Anshay Gupta
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
                Building dynamic, responsive, and scalable web applications with expertise in Angular and modern web
                technologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-2 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <Mail size={18} className="text-purple-500" />
                  <span>guptaanshay@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-2 rounded-lg shadow-sm border-l-4 border-pink-500">
                  <Phone size={18} className="text-pink-500" />
                  <span>9560850428</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-2 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <MapPin size={18} className="text-blue-500" />
                  <span>New Delhi, India</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#contact">
                  <Button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </a>
                <a href="https://github.com/AnshayGupta29" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    <Github className="h-4 w-4 text-purple-500" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/anshay-gupta-67b136166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                  >
                    <Linkedin className="h-4 w-4 text-pink-500" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 transform hover:translate-y-[-5px] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Highly skilled and detail-oriented Software Developer with expertise in Angular and a proven track record
              of developing dynamic, responsive, and scalable web applications. Proficient in creating intuitive user
              interfaces, integrating RESTful APIs, and optimizing application performance. Experienced in working with
              cross-functional teams to deliver high-quality software solutions within deadlines. Adept at leveraging
              modern web technologies and frameworks to meet user needs and business objectives. Passionate about
              staying updated with the latest advancements in front-end development to drive innovation and excellence.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-pink-500 via-orange-500 to-transparent"></div>
          </div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute top-0 left-4 bottom-0 w-px bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 hidden md:block"></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64 flex-shrink-0 flex flex-col items-center md:items-start relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center mb-3 shadow-lg z-10 relative overflow-hidden md:ml-8">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Akiko Sherman Infotech"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center md:text-left md:ml-8">
                    Akiko Sherman Infotech
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <Calendar className="h-4 w-4 text-pink-500" />
                    <span>10/2024 – present</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <MapPin className="h-4 w-4 text-pink-500" />
                    <span>New Delhi, India</span>
                  </div>
                </div>

                <Card className="flex-grow bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden md:ml-12">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-orange-500"></div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Software Developer</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                        <p>
                          Developed and enhanced the NR Service Frontend Portal for the VAHAN eTransport project under
                          NIC using Angular framework.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                        <p>
                          Implemented responsive and interactive UI components to ensure seamless user interaction and a
                          consistent experience across devices.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                        <p>
                          Integrated frontend services with backend APIs for dynamic data presentation and management.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                        <p>
                          Added Docker support for containerizing the frontend application, enabling efficient
                          deployment and scalability across different environments.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                        <p>
                          Collaborated with DevOps teams to streamline CI/CD pipelines and ensure smooth application
                          delivery.
                        </p>
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="font-bold text-pink-600 dark:text-pink-400 mb-3">Key Achievements</h5>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                          <p>
                            Delivered a robust, scalable, and containerized solution that improved deployment efficiency
                            by 40%.
                          </p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                          <p>
                            Enhanced the user experience by reducing page load time by 30% through optimization
                            techniques.
                          </p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                          <p>
                            Facilitated seamless deployment and portability of the portal across development, testing,
                            and production environments using Docker.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute top-0 left-4 bottom-0 w-px bg-gradient-to-b from-orange-500 via-yellow-500 to-green-500 hidden md:block"></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64 flex-shrink-0 flex flex-col items-center md:items-start relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 flex items-center justify-center mb-3 shadow-lg z-10 relative overflow-hidden md:ml-8">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="SimarTech Consultancy"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center md:text-left md:ml-8">
                    SimarTech Consultancy
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span>01/2024 – 09/2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>New Delhi, India</span>
                  </div>
                </div>

                <Card className="flex-grow bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden md:ml-12">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Programmer</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Developed and maintained the PAIDNR Portal as part of the VAHAN eTransport project under NIC.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Designed and implemented user-friendly interfaces using Angular framework to ensure seamless
                          interaction and functionality.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Collaborated with backend teams to integrate RESTful APIs for dynamic data retrieval and
                          processing.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Optimized application performance for high responsiveness and fast loading times across
                          devices.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Successfully delivered a robust and scalable portal that streamlined PAIDNR operations,
                          enhancing operational efficiency.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                        <p>
                          Received recognition from stakeholders for delivering the project within the stipulated
                          timeline.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute top-0 left-4 bottom-0 w-px bg-gradient-to-b from-orange-500 via-yellow-500 to-green-500 hidden md:block"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64 flex-shrink-0 flex flex-col items-center md:items-start relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center mb-3 shadow-lg z-10 relative overflow-hidden md:ml-8">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="DRDO"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center md:text-left md:ml-8">
                    DRDO
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span>07/2022 – 09/2022</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1 md:ml-8">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>New Delhi, India</span>
                  </div>
                </div>

                <Card className="flex-grow bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden md:ml-12">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Software Developer Intern</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                        <p>
                          Designed and implemented a web-based Plagiarism Checker using Python (Flask) for the backend
                          and HTML, CSS, JavaScript for the frontend.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                        <p>
                          Built a robust algorithm for text similarity detection by integrating natural language
                          processing (NLP) libraries such as NLTK and Spacy.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                        <p>
                          Connected the application with document storage systems to enable multi-format (PDF, DOCX,
                          TXT) file uploads for analysis.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                        <p>
                          Enhanced application performance by implementing efficient text comparison algorithms to
                          handle large document sets.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-orange-500 via-yellow-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: VAHAN eTransport Portal */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  // src="/placeholder.svg?height=200&width=400"
                  src="/images/vahan.svg?height=200&width=400"
                  alt="VAHAN eTransport Portal"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">VAHAN eTransport Portal</h3>
                    <p className="text-sm text-white/80">Angular, TypeScript, Docker</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">VAHAN eTransport Portal</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A comprehensive transport management system built for the National Informatics Centre (NIC) to
                  streamline vehicle registration and permit processes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 dark:from-orange-900/50 dark:to-yellow-900/50 dark:text-orange-300">
                    Angular
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-100 to-green-100 text-yellow-800 dark:from-yellow-900/50 dark:to-green-900/50 dark:text-yellow-300">
                    TypeScript
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 dark:from-green-900/50 dark:to-blue-900/50 dark:text-green-300">
                    Docker
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-orange-600 border-orange-300 hover:bg-orange-50 dark:text-orange-400 dark:border-orange-700 dark:hover:bg-orange-900/30"
                  onClick={() => setIsDialogOpen(true)} // Open dialog on click
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  onClick={() => setIsDialogOpen(true)} // Open dialog on click
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2: Plagiarism Checker */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/Plagiarism.svg?height=10&width=40"
                  alt="Plagiarism Checker"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">Plagiarism Checker</h3>
                    <p className="text-sm text-white/80">Python, Flask, NLP</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plagiarism Checker</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A web-based application that detects text similarity across multiple document formats using advanced
                  NLP algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 dark:from-pink-900/50 dark:to-purple-900/50 dark:text-pink-300">
                    Python
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 dark:from-purple-900/50 dark:to-blue-900/50 dark:text-purple-300">
                    Flask
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900/50 dark:to-indigo-900/50 dark:text-blue-300">
                    NLP
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <a href="https://github.com/AnshayGupta29/plagiarism-check" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-pink-600 border-pink-300 hover:bg-pink-50 dark:text-pink-400 dark:border-pink-700 dark:hover:bg-pink-900/30"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3: Personal Portfolio */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-green-500"></div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/Portfolio.svg?height=200&width=400"
                  alt="Personal Portfolio"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">Personal Portfolio</h3>
                    <p className="text-sm text-white/80">Next.js, Tailwind CSS</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Personal Portfolio</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A responsive and interactive portfolio website showcasing my skills, experience, and projects with
                  modern design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 dark:from-blue-900/50 dark:to-green-900/50 dark:text-blue-300">
                    Next.js
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 dark:from-green-900/50 dark:to-teal-900/50 dark:text-green-300">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 dark:from-teal-900/50 dark:to-cyan-900/50 dark:text-teal-300">
                    React
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-300 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-700 dark:hover:bg-blue-900/30"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Dialog for VAHAN Project Restriction Message */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-md bg-white/100 dark:bg-gray-800/100 backdrop-blur-sm border-0 shadow-2xl">
              {/* <div className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div> */}
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Restricted Access
                </DialogTitle>
                <DialogDescription className="text-gray-700 dark:text-gray-300">
                  Due to government restrictions, we could not show the source code or website here.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="w-full bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 dark:from-orange-900/50 dark:to-yellow-900/50 dark:text-orange-300 hover:from-orange-200 hover:to-yellow-200 dark:hover:from-orange-900/70 dark:hover:to-yellow-900/70"
                  >
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-blue-500 via-green-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-4xl">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Frontend Development
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-800 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300 dark:hover:from-purple-900/70 dark:hover:to-pink-900/70 text-sm py-1.5 px-3">
                    Angular
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-100 to-red-100 hover:from-pink-200 hover:to-red-200 text-pink-800 dark:from-pink-900/50 dark:to-red-900/50 dark:text-pink-300 dark:hover:from-pink-900/70 dark:hover:to-red-900/70 text-sm py-1.5 px-3">
                    JavaScript
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 text-red-800 dark:from-red-900/50 dark:to-orange-900/50 dark:text-red-300 dark:hover:from-red-900/70 dark:hover:to-orange-900/70 text-sm py-1.5 px-3">
                    TypeScript
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 text-orange-800 dark:from-orange-900/50 dark:to-yellow-900/50 dark:text-orange-300 dark:hover:from-orange-900/70 dark:hover:to-yellow-900/70 text-sm py-1.5 px-3">
                    HTML5
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-100 to-green-100 hover:from-yellow-200 hover:to-green-200 text-yellow-800 dark:from-yellow-900/50 dark:to-green-900/50 dark:text-yellow-300 dark:hover:from-yellow-900/70 dark:hover:to-green-900/70 text-sm py-1.5 px-3">
                    CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="h-2 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center">
                    <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Backend & DevOps
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 text-green-800 dark:from-green-900/50 dark:to-blue-900/50 dark:text-green-300 dark:hover:from-green-900/70 dark:hover:to-blue-900/70 text-sm py-1.5 px-3">
                    Python
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 text-blue-800 dark:from-blue-900/50 dark:to-indigo-900/50 dark:text-blue-300 dark:hover:from-blue-900/70 dark:hover:to-indigo-900/70 text-sm py-1.5 px-3">
                    Flask
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="h-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Tools & Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800 dark:from-indigo-900/50 dark:to-purple-900/50 dark:text-indigo-300 dark:hover:from-indigo-900/70 dark:hover:to-purple-900/70 text-sm py-1.5 px-3">
                    Git
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-800 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-300 dark:hover:from-purple-900/70 dark:hover:to-pink-900/70 text-sm py-1.5 px-3">
                    Docker
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-100 to-red-100 hover:from-pink-200 hover:to-red-200 text-pink-800 dark:from-pink-900/50 dark:to-red-900/50 dark:text-pink-300 dark:hover:from-pink-900/70 dark:hover:to-red-900/70 text-sm py-1.5 px-3">
                    RESTful APIs
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 text-red-800 dark:from-red-900/50 dark:to-orange-900/50 dark:text-red-300 dark:hover:from-red-900/70 dark:hover:to-orange-900/70 text-sm py-1.5 px-3">
                    CI/CD
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 text-orange-800 dark:from-orange-900/50 dark:to-yellow-900/50 dark:text-orange-300 dark:hover:from-orange-900/70 dark:hover:to-yellow-900/70 text-sm py-1.5 px-3">
                    VS Code
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-orange-500 via-yellow-500 to-transparent"></div>
          </div>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
            <div className="h-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-green-500"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="University Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bachelors of Technology in Computer Science Engineering
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mt-1">
                    Guru Gobind Singh Indraprastha University
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span>Graduated: 07/2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              Contact Me
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-green-500 via-blue-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-full">
              <div className="h-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a
                        href="mailto:guptaanshay1999@gmail.com"
                        className="text-gray-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        guptaanshay1999@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a
                        href="tel:+919560850428"
                        className="text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        +91 9560850428
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">New Delhi, Delhi, India</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Connect with me on social media:</p>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/AnshayGupta29"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-colors"
                      >
                        <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anshay-gupta-67b136166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center hover:from-pink-200 hover:to-orange-200 dark:hover:from-pink-900/50 dark:hover:to-orange-900/50 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      </a>
                      <a
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=guptaanshay1999@gmail.com"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-900/50 to-yellow-900/50 flex items-center justify-center hover:from-orange-900/70 hover:to-yellow-900/70 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-orange-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-full">
              <div className="h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                  Send a Message
                </h3>
                <form className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <Button className="w-full py-6 text-base font-medium bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Anshay Gupta
              </h2>
              <p className="text-gray-400 mt-2">Software Developer</p>
            </div>

            <div className="flex gap-6">
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-400 hover:text-pink-400 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#education" className="text-gray-400 hover:text-orange-400 transition-colors">
                Education
              </a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Anshay Gupta. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/AnshayGupta29"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center hover:from-purple-900/70 hover:to-pink-900/70 transition-colors"
              >
                <Github className="h-5 w-5 text-purple-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshay-gupta-67b136166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-900/50 to-orange-900/50 flex items-center justify-center hover:from-pink-900/70 hover:to-orange-900/70 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-pink-400" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=guptaanshay1999@gmail.com"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-900/50 to-yellow-900/50 flex items-center justify-center hover:from-orange-900/70 hover:to-yellow-900/70 transition-colors"
              >
                <Mail className="h-5 w-5 text-orange-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
