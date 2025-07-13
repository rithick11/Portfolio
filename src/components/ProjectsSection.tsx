import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X, Calendar, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  date: string;
  features: string[];
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB.',
      longDescription: 'A comprehensive e-commerce platform built from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://demo-store.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      category: 'Full Stack',
      date: '2023',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Responsive design for all devices'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React-based task management application with drag-and-drop functionality.',
      longDescription: 'A powerful task management application inspired by Trello, featuring drag-and-drop boards, real-time collaboration, and team management capabilities.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      liveUrl: 'https://taskflow-app.com',
      githubUrl: 'https://github.com/johndoe/taskflow',
      category: 'Frontend',
      date: '2023',
      features: [
        'Drag-and-drop task boards',
        'Real-time collaboration',
        'Team and project management',
        'Due dates and notifications',
        'File attachments and comments',
        'Mobile-responsive interface'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and data visualization.',
      longDescription: 'An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful data visualizations for any location worldwide.',
      image: '🌤️',
      technologies: ['React', 'Chart.js', 'Weather API', 'Geolocation'],
      liveUrl: 'https://weather-dash.com',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      category: 'Frontend',
      date: '2023',
      features: [
        'Current weather conditions',
        '7-day weather forecast',
        'Interactive weather maps',
        'Location-based auto-detection',
        'Beautiful data visualizations',
        'Offline functionality'
      ]
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'Content Management System for blogs with markdown support and SEO optimization.',
      longDescription: 'A powerful content management system designed for bloggers and content creators, featuring markdown support, SEO optimization, and a beautiful admin interface.',
      image: '📝',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Markdown'],
      liveUrl: 'https://blog-cms.com',
      githubUrl: 'https://github.com/johndoe/blog-cms',
      category: 'Full Stack',
      date: '2022',
      features: [
        'Markdown editor with live preview',
        'SEO optimization tools',
        'Category and tag management',
        'Comment system with moderation',
        'Analytics dashboard',
        'Multi-author support'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and modern design.',
      longDescription: 'A stunning portfolio website showcasing my work and skills, built with modern web technologies and featuring smooth animations and responsive design.',
      image: '💼',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://johndoe-portfolio.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
      category: 'Frontend',
      date: '2023',
      features: [
        'Smooth scroll animations',
        'Responsive design',
        'Interactive project showcase',
        'Contact form with validation',
        'Dark/light theme toggle',
        'Performance optimized'
      ]
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, private messaging, and file sharing.',
      longDescription: 'A real-time chat application built with Socket.io, featuring chat rooms, private messaging, file sharing, and a modern interface.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      liveUrl: 'https://chatapp-demo.com',
      githubUrl: 'https://github.com/johndoe/chat-app',
      category: 'Full Stack',
      date: '2022',
      features: [
        'Real-time messaging',
        'Private and group chats',
        'File and image sharing',
        'User presence indicators',
        'Message history',
        'Emoji reactions'
      ]
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-animate">
              My <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
              A showcase of my recent work and the technologies I love working with.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-animate">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card-portfolio group cursor-pointer scroll-animate"
                onClick={() => openModal(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image/icon */}
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-smooth">
                  {project.image}
                </div>

                {/* Project info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    {project.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {selectedProject.category}
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Project image */}
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-8xl">
                {selectedProject.image}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2"
                >
                  <Github size={18} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;