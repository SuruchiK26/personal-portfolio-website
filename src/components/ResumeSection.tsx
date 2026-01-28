import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const ResumeSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark-bg opacity-95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center glow-shadow">
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground dark:text-foreground">
              Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Get a detailed overview of my skills, experience, and qualifications
            </p>

            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 glow-shadow animate-pulse-glow text-base px-10"
              onClick={() => window.open(
                "https://resumesto.blob.core.windows.net/resumecontainer/SuruchiKumari_Resume.pdf",
                "_blank",
                "noopener,noreferrer"
              )}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
