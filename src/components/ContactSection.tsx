import { useState } from 'react';
import { Send, Mail, Linkedin, Loader2, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_2zo4i66';
const EMAILJS_TEMPLATE_ID = 'template_x3m7f8r';
const EMAILJS_PUBLIC_KEY = 'WG5gzYZcwVrK39fam';

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kumarisuruchi7317@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Suruchi44132039', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/suruchi-kumari-0017a528b/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kumarisuruchi7317@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 gradient-hero-bg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-8 md:p-10 rounded-2xl card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-bg text-primary-foreground hover:opacity-90 glow-shadow"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-center text-muted-foreground mb-4">Or connect with me on</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
