import { Award, Cloud } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const CertificationsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-md mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 gradient-bg rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative glass-card p-8 rounded-2xl card-shadow hover:hover-shadow transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mb-6 glow-shadow animate-float">
                  <Cloud className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Certified Professional</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Microsoft Azure</h3>
                <p className="text-muted-foreground">
                  Cloud computing certification demonstrating expertise in Azure services,
                  cloud architecture, and deployment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
