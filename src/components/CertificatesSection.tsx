import { useState, useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink, X, Building } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  image: string;
  skills: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      description: 'Validates expertise in designing distributed systems on AWS.',
      credentialUrl: 'https://aws.amazon.com/certification/',
      image: '☁️',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'System Design'],
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'January 2023',
      description: 'Professional certification in React development and modern frontend practices.',
      credentialUrl: 'https://developers.facebook.com/docs/react/',
      image: '⚛️',
      skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX'],
      level: 'Expert'
    },
    {
      id: 3,
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: 'November 2022',
      description: 'Demonstrates proficiency in Google Analytics and digital marketing.',
      credentialUrl: 'https://skillshop.exceedlms.com/student/catalog',
      image: '📊',
      skills: ['Analytics', 'Digital Marketing', 'Data Analysis', 'SEO'],
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'September 2022',
      description: 'Validates skills in containerization and Docker ecosystem.',
      credentialUrl: 'https://training.mirantis.com/certification/',
      image: '🐳',
      skills: ['Docker', 'Containerization', 'DevOps', 'Kubernetes'],
      level: 'Advanced'
    },
    {
      id: 5,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'July 2022',
      description: 'Certification in MongoDB database design and development.',
      credentialUrl: 'https://university.mongodb.com/',
      image: '🍃',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Node.js'],
      level: 'Advanced'
    },
    {
      id: 6,
      title: 'TypeScript Deep Dive',
      issuer: 'Microsoft',
      date: 'May 2022',
      description: 'Advanced TypeScript programming and type system mastery.',
      credentialUrl: 'https://docs.microsoft.com/en-us/learn/',
      image: '📘',
      skills: ['TypeScript', 'JavaScript', 'Type Safety', 'Modern JS'],
      level: 'Expert'
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

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-accent bg-accent/20';
      case 'Advanced': return 'text-primary bg-primary/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <section ref={sectionRef} id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-animate">
              <span className="gradient-primary bg-clip-text text-transparent">Certificates</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
              Professional certifications and achievements that validate my expertise.
            </p>
          </div>

          {/* Certificates grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="certificate-item scroll-animate"
                onClick={() => openModal(certificate)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate header */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{certificate.image}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">
                        {certificate.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <Building className="w-3 h-3" />
                        {certificate.issuer}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {certificate.date}
                      </div>
                    </div>
                  </div>

                  {/* Level badge */}
                  <div className="mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(certificate.level)}`}>
                      {certificate.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Skills preview */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                        +{certificate.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 scroll-animate">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{certificates.length}</h3>
              <p className="text-muted-foreground">Professional Certificates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2023</h3>
              <p className="text-muted-foreground">Latest Certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-muted-foreground">Technology Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{selectedCertificate.image}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {selectedCertificate.issuer}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedCertificate.date}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(selectedCertificate.level)}`}>
                    {selectedCertificate.level} Level
                  </span>
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
              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2">About This Certification</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCertificate.description}
                </p>
              </div>

              {/* Skills covered */}
              <div>
                <h4 className="font-semibold mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate details */}
              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Certificate Details</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Issued by:</span>
                    <div className="font-medium">{selectedCertificate.issuer}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Issue Date:</span>
                    <div className="font-medium">{selectedCertificate.date}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Level:</span>
                    <div className="font-medium">{selectedCertificate.level}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <div className="font-medium text-green-400">Valid</div>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="pt-4">
                <a
                  href={selectedCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero flex items-center gap-2 w-fit"
                >
                  <ExternalLink size={18} />
                  View Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;