import { GraduationCap, BookOpen, School } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const educationData = [
  {
    icon: School,
    title: '10th Board (ICSE)',
    institution: 'ICSE Board',
    score: '79%',
    year: 'Completed',
  },
  {
    icon: BookOpen,
    title: '12th Board',
    institution: 'Bihar Board',
    score: '80%',
    year: 'Completed',
  },
  {
    icon: GraduationCap,
    title: 'B.Tech in Information Technology',
    institution: 'Currently Pursuing',
    score: 'Ongoing',
    year: 'Present',
  },
];

const EducationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 gradient-hero-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
                  isInView
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg glow-shadow z-10" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass-card p-6 rounded-xl card-shadow hover:hover-shadow transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{edu.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-medium gradient-text">{edu.score}</span>
                          <span className="text-muted-foreground">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
