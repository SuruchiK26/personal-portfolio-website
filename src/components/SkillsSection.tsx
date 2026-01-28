import { useInView } from '@/hooks/useInView';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Responsive Design', level: 90 },
  { name: 'Azure Cloud', level: 70 },
  { name: 'MongoDB', level: 75 },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 gradient-hero-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="glass-card p-4 rounded-xl hover:card-shadow transition-shadow duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isInView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 50 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
