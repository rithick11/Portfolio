import { useEffect, useRef } from 'react';
import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
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

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Designing with the user experience at the forefront.'
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to continuous learning and improvement.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-animate">
              About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
              Get to know more about my journey, passion, and what drives me as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image and info */}
            <div className="space-y-6 scroll-animate">
              <div className="relative">
                <div className="w-80 h-80 mx-auto md:mx-0 rounded-2xl bg-gradient-primary p-1 shadow-card">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <div className="text-8xl font-bold text-primary">👨‍💻</div>
                  </div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-glow"></div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="text-primary font-semibold mb-4">Full Stack Developer</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>

            {/* About content */}
            <div className="space-y-6 scroll-animate">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience creating 
                    digital solutions that make a difference. My journey started with a curiosity 
                    about how websites work, and it has evolved into a love for crafting elegant, 
                    efficient, and user-friendly applications.
                  </p>
                  <p>
                    I specialize in modern web technologies, with expertise in React, TypeScript, 
                    Node.js, and cloud platforms. I believe in writing clean, maintainable code 
                    and following best practices to deliver high-quality software.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-portfolio text-center scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;