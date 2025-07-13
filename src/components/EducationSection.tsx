import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const education: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2019 - 2021',
      location: 'Stanford, CA',
      description: 'Specialized in Machine Learning and Software Engineering with focus on web technologies.',
      achievements: [
        'GPA: 3.9/4.0',
        'Dean\'s List for 4 consecutive semesters',
        'Research Assistant in AI Lab'
      ],
      gpa: '3.9/4.0'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of California, Berkeley',
      period: '2015 - 2019',
      location: 'Berkeley, CA',
      description: 'Comprehensive program covering software development, algorithms, and system design.',
      achievements: [
        'Magna Cum Laude',
        'President of Programming Club',
        'Winner of Campus Hackathon 2018'
      ],
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Le Wagon',
      period: '2015',
      location: 'San Francisco, CA',
      description: 'Intensive 9-week program covering modern web development technologies.',
      achievements: [
        'Top 5% of cohort',
        'Built 3 full-stack applications',
        'Mentored junior students'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 300);
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

  return (
    <section ref={sectionRef} id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-animate">
              <span className="gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
              My academic journey and continuous learning path that shaped my expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative mb-12 scroll-animate ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-primary rounded-full shadow-glow ${
                  index % 2 === 0 
                    ? 'left-2 md:left-1/2 md:transform md:-translate-x-1/2' 
                    : 'left-2 md:left-1/2 md:transform md:-translate-x-1/2'
                }`}>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="card-portfolio group">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                      {edu.gpa && (
                        <div className="text-right">
                          <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                            {edu.gpa}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center scroll-animate">
            <div className="card-portfolio inline-block">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Always exploring new technologies and expanding my knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;