import { useInView } from '@/hooks/useInView';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-bg p-1 glow-shadow">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src={profilePhoto}
                  alt="Suruchi Kumari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-bg rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-30 animate-float animation-delay-400" />
          </div>

          {/* About Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Suruchi Kumari, a passionate full stack developer focused on creating responsive, 
              accessible, and visually appealing web applications. I love combining creativity and 
              technology to craft smooth, user-friendly experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Currently pursuing my B.Tech in Information Technology, I specialize in frontend 
              development with React.js while also having strong backend skills with Node.js and 
              Express. I'm also certified in Microsoft Azure, bringing cloud expertise to my projects.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-muted-foreground">Cloud Badges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2x</div>
                <div className="text-sm text-muted-foreground">Hackathon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
