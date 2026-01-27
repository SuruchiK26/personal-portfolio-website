import { Briefcase, Users, Trophy } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    icon: Briefcase,
    title: 'Intern at Cloud Krishna',
    role: 'Cloud & Development Intern',
    description: 'Working as an intern with Cloud Krishna, a startup community focused on cloud technologies. Contributing to various cloud-based projects and community initiatives.',
    period: 'Present',
  },
  {
    icon: Trophy,
    title: 'HackIndia Participation',
    role: 'Hackathon Participant',
    description: 'Participated twice in HackIndia, collaborating with teams to build innovative solutions and gaining hands-on experience in rapid prototyping.',
    period: '2024 - 2025',
  },
  {
    icon: Users,
    title: 'Open Source Contributor',
    role: 'Community Member',
    description: 'Actively contributing to open source projects and community-driven development, enhancing collaboration and coding skills.',
    period: 'Ongoing',
  },
];

const ExperienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and community involvement
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
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
                  <div className="glass-card p-6 rounded-xl card-shadow hover:hover-shadow transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                        <exp.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium mb-2">{exp.role}</p>
                        <p className="text-muted-foreground text-sm mb-2">{exp.description}</p>
                        <span className="text-xs text-muted-foreground/70">{exp.period}</span>
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

export default ExperienceSection;
