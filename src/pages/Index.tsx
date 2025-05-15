import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillIcon } from "@/components/SkillIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, ExternalLink, ArrowRight, Calendar, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Skill icons
const skillIcons = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <ParticlesBackground />
          <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6 animate-fade-in">
              Idhaya Prasanth M
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
              Web Developer & Designer | Full Stack Enthusiast | Crafting Beautiful Digital Experiences
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <a href="#contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700">
                  Download Resume <FileText className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/idhayaprasanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/idhayaprasanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <ArrowRight className="h-6 w-6 transform rotate-90" />
            </a>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="About Me" 
              subtitle="Get to know me better" 
            />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p>
                  Hello! I'm Idhaya Prasanth M, a passionate web developer and designer with a strong foundation in both front-end and back-end technologies. Currently pursuing my Bachelor's degree in Computer Science, I'm dedicated to crafting efficient, user-friendly digital experiences.
                </p>
                <p>
                  With experience as a Video Annotator and Quality Analyst at iBrow Technologies, I've developed a keen eye for detail and quality. My focus areas include responsive web design, user experience optimization, and building robust web applications.
                </p>
                <p>
                  I believe in continuous learning and constantly push myself to stay updated with the latest technologies and best practices in the field of web development.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3">What I Do</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Web development with modern frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Responsive design and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Full stack application development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>Database design and management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section - Updated to use a single card with soft color */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Skills" 
              subtitle="Technologies I work with" 
              alignment="center"
            />
            
            <Card className="overflow-hidden border border-blue-200/20 bg-blue-50/10 dark:bg-blue-950/10 shadow-md">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillIcon name="Python" icon={skillIcons.python} />
                  <SkillIcon name="JavaScript" icon={skillIcons.javascript} />
                  <SkillIcon name="React" icon={skillIcons.react} />
                  <SkillIcon name="HTML" icon={skillIcons.html} />
                  <SkillIcon name="CSS" icon={skillIcons.css} />
                  <SkillIcon name="Django" icon={skillIcons.django} />
                  <SkillIcon name="Flask" icon={skillIcons.flask} />
                  <SkillIcon name="MongoDB" icon={skillIcons.mongodb} />
                  <SkillIcon name="MySQL" icon={skillIcons.mysql} />
                  <SkillIcon name="VS Code" icon={skillIcons.vscode} />
                  <SkillIcon name="GitHub" icon={skillIcons.github} />
                  <SkillIcon name="Figma" icon={skillIcons.figma} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Experience" 
              subtitle="My professional journey" 
            />
            
            <div className="relative pl-5 md:pl-10 border-l border-muted">
              {/* Video Annotator Role */}
              <div className="mb-12 relative">
                <div className="absolute -left-[22px] md:-left-[42px] top-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-border card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Video Annotator</h3>
                    <div className="text-sm text-muted-foreground">iBrow Technologies | Dec 2024 - Jan 2025 | Remote</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Annotated and labeled video data for AI model training.</li>
                    <li>Ensured accuracy and consistency in dataset preparation.</li>
                    <li>Collaborated with the AI team to improve model performance.</li>
                    <li>Learned data annotation techniques and quality assurance for AI datasets.</li>
                    <li>Contributed by maintaining high data accuracy and efficiency during labeling.</li>
                  </ul>
                </div>
              </div>
              
              {/* Quality Analyst Role */}
              <div className="mb-12 relative">
                <div className="absolute -left-[22px] md:-left-[42px] top-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-border card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Quality Analyst</h3>
                    <div className="text-sm text-muted-foreground">iBrow Technologies, Chennai | 2023 - Present</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Performed quality checks to ensure annotation accuracy and consistency.</li>
                    <li>Collaborated with team members to maintain high-quality standards for AI model training.</li>
                    <li>Identified patterns and suggested improvements in the annotation workflow.</li>
                    <li>Completed projects within deadline while maintaining attention to detail.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section - Add a soft dark background color */}
        <section id="projects" className="py-20 bg-blue-950/20">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Projects" 
              subtitle="Showcasing my technical skills" 
              alignment="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard 
                title="Attendance Management System"
                description="A comprehensive system for tracking and managing attendance"
                technologies={[
                  { name: "Django", color: "#092e20" },
                  { name: "HTML", color: "#e34c26" },
                  { name: "CSS", color: "#264de4" },
                  { name: "JavaScript", color: "#f0db4f" }
                ]}
                githubLink="https://github.com/idhayaprasanth/attendance-management"
                features={[
                  "Role-based user authentication",
                  "Automatic attendance percentage calculation",
                  "Responsive UI with clean design",
                  "User-friendly dashboard interface"
                ]}
                learnings="Implementing secure role-based authentication and optimizing database queries for real-time attendance calculations."
              />
              
              <ProjectCard 
                title="Bus Ticket Booking System"
                description="Online platform for booking bus tickets with secure payment"
                technologies={[
                  { name: "Django", color: "#092e20" },
                  { name: "HTML", color: "#e34c26" },
                  { name: "CSS", color: "#264de4" },
                  { name: "JavaScript", color: "#f0db4f" },
                  { name: "Razorpay", color: "#0377FF" }
                ]}
                githubLink="https://github.com/idhayaprasanth/bus-ticket-system"
                features={[
                  "Secure online booking with Razorpay integration",
                  "QR code scanning for ticket validation",
                  "Responsive and user-friendly interface",
                  "Real-time seat availability"
                ]}
                learnings="Integrating payment gateways securely and implementing QR code generation/validation for ticket verification."
              />
              
              <ProjectCard 
                title="Library Management System"
                description="Comprehensive system for managing library resources"
                technologies={[
                  { name: "PHP", color: "#777BB3" },
                  { name: "HTML", color: "#e34c26" },
                  { name: "CSS", color: "#264de4" },
                  { name: "JavaScript", color: "#f0db4f" },
                  { name: "MySQL", color: "#00758F" }
                ]}
                githubLink="https://github.com/idhayaprasanth/library-management"
                features={[
                  "Book, member, and transaction management",
                  "Fine calculation and email notifications",
                  "Role-based access (Admin/User)",
                  "Comprehensive reporting"
                ]}
                learnings="Managing large datasets efficiently, implementing role-based permissions, and sending automated email notifications."
              />
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Education" 
              subtitle="My academic background" 
            />
            
            <div className="relative pl-5 md:pl-10 border-l border-muted">
              <div className="mb-12 relative">
                <div className="absolute -left-[22px] md:-left-[42px] top-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-border card-hover">
                  <h3 className="text-xl font-semibold mb-1">Bachelor of Computer Science</h3>
                  <p className="text-muted-foreground mb-2">GTN Arts College | 2022 - 2025</p>
                  <p className="text-sm font-medium">Percentage: 81%</p>
                </div>
              </div>
              
              <div className="mb-12 relative">
                <div className="absolute -left-[22px] md:-left-[42px] top-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-border card-hover">
                  <h3 className="text-xl font-semibold mb-1">HSC (Higher Secondary Certificate)</h3>
                  <p className="text-muted-foreground mb-2">Nagalakshmi Matric HR Sec School | 2020 - 2022</p>
                  <p className="text-sm font-medium">Percentage: 73%</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[22px] md:-left-[42px] top-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-border card-hover">
                  <h3 className="text-xl font-semibold mb-1">SSLC (Secondary School Leaving Certificate)</h3>
                  <p className="text-muted-foreground mb-2">Nagalakshmi Matric HR Sec School | 2020</p>
                  <p className="text-sm font-medium">Percentage: 76%</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Achievements" 
              subtitle="Recognitions and accomplishments" 
              alignment="center"
            />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Freelance Project</h3>
                  <p className="text-muted-foreground">Successfully developed a comprehensive project for college students as a freelance effort.</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">IoT Project Award</h3>
                  <p className="text-muted-foreground">Secured second place in the IoT project competition at a collegiate symposium.</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Web Development Prize</h3>
                  <p className="text-muted-foreground">Won second prize in multiple web development competitions showcasing design and development skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Section - Updated to put the form in a card */}
        <section id="contact" className="py-20">
          <div className="container px-4 md:px-6">
            <SectionHeading 
              title="Get In Touch" 
              subtitle="Let's work together" 
            />
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="mb-6">
                  I'm currently looking for new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <a href="mailto:idhayaprasanth56@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        idhayaprasanth56@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <a href="tel:+919944255013" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9944255013
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">LinkedIn</div>
                      <a 
                        href="https://linkedin.com/in/idhayaprasanth" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/idhayaprasanth
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="border border-blue-200/20 bg-card shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
