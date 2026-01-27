import { Trophy, Users, Cloud, Code } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const achievements = [
  {
    icon: Trophy,
    title: 'HackIndia Participant',
    description: 'Participated twice in HackIndia, collaborating with teams to build innovative solutions.',
  },
  {
    icon: Users,
    title: 'Cloud Krishna Community',
    description: 'Active contributor at Cloud Krishna, a startup company focused on cloud technologies.',
  },
  {
    icon: Cloud,
    title: '20+ Google Cloud Badges',
    description: 'Earned over 20 skill badges in Google Cloud Platform through hands-on labs and challenges.',
  },
  {
    icon: Code,
    title: 'Open Source Contributor',
    description: 'Actively contributing to open source projects and community-driven development.',
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
            <span className="gradient-text">Achievements</span> & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights of my journey and accomplishments
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
