import { ArrowDown, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Microsoft Azure Certified
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            Hi, I'm{' '}
            <span className="gradient-text">Suruchi Kumari</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 mb-6 animate-slide-up animation-delay-200">
            Full Stack Developer | Frontend Specialist
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-up animation-delay-400">
            "Turning ideas into interactive web experiences."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 glow-shadow animate-pulse-glow text-base px-8"
            >
              <a
                href="https://example.com/Suruchi_Kumari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScroll('#contact')}
              className="border-primary/30 hover:bg-primary/10 text-base px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScroll('#about')}
            className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
