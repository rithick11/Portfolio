import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ComponentType<any>;
  category: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', percentage: 95, icon: Code, category: 'Frontend' },
    { name: 'React/Next.js', percentage: 90, icon: Globe, category: 'Frontend' },
    { name: 'Node.js/Express', percentage: 85, icon: Server, category: 'Backend' },
    { name: 'Python/Django', percentage: 80, icon: Code, category: 'Backend' },
    { name: 'PostgreSQL/MongoDB', percentage: 85, icon: Database, category: 'Database' },
    { name: 'React Native', percentage: 75, icon: Smartphone, category: 'Mobile' },
    { name: 'UI/UX Design', percentage: 80, icon: Palette, category: 'Design' },
    { name: 'AWS/Docker', percentage: 70, icon: Server, category: 'DevOps' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Design', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-animate">
              My <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-animate">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-portfolio group scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {skill.percentage}%
                  </div>
                </div>

                {/* Progress bar */}
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`,
                      transitionDuration: '1.5s'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 scroll-animate">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">5+ Years</h3>
              <p className="text-muted-foreground">Professional Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">50+ Projects</h3>
              <p className="text-muted-foreground">Completed Successfully</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Always Learning</h3>
              <p className="text-muted-foreground">New Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;