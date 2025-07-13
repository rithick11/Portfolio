import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Problem Solver'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, currentRoleIndex, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow animate-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">JD</span>
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up">
              Hi, I'm{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                I'm a{' '}
                <span className="text-primary font-semibold">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Passionate about creating beautiful, functional, and user-friendly digital experiences.
              I love turning complex problems into simple, elegant solutions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;