import { Award, BadgeCheck, Cloud, Medal } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const achievements = [
  {
    icon: Award,
    title: 'Microsoft Azure Certification',
    description: 'Certified in Microsoft Azure fundamentals, demonstrating cloud computing expertise and proficiency.',
  },
  {
    icon: BadgeCheck,
    title: 'Infosys Generative AI Certificate',
    description: 'Completed Infosys certification for Generative AI for All, showcasing AI/ML knowledge.',
  },
  {
    icon: Medal,
    title: 'Coding School Azure AI Certificate',
    description: 'Earned Azure AI Fundamentals certification from Coding School, validating AI skills on Azure platform.',
  },
  {
    icon: Cloud,
    title: '20+ Google Cloud Skill Badges',
    description: 'Earned over 20 skill badges in Google Cloud Platform through hands-on labs and challenges.',
  },
];

const AchievementsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 md:py-32 gradient-hero-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certifications and accomplishments earned through dedication and hard work
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card p-6 rounded-xl card-shadow hover:hover-shadow transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
