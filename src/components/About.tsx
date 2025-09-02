import { Button } from '@/components/ui/button';
import { Heart, Users, Microscope } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, number: '15K+', label: 'Happy Customers' },
    { icon: Users, number: '25+', label: 'Years Experience' },
    { icon: Microscope, number: '500+', label: 'Products Tested' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <span className="text-primary font-semibold text-lg">About Our Store</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
                Ancient Wisdom, Modern Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over two decades, we have been dedicated to bringing you the finest Ayurvedic 
                products and herbal remedies. Our commitment to quality, authenticity, and customer 
                satisfaction has made us a trusted name in natural health and wellness.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We combine traditional Ayurvedic knowledge passed down through generations with 
                modern quality control standards to ensure every product meets the highest standards 
                of purity and potency.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="btn-nature">
                Learn More
              </Button>
              <Button className="btn-outline-nature">
                Our Story
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-natural">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                Our Achievements
              </h3>
              
              <div className="space-y-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{stat.number}</div>
                        <div className="text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground text-center italic">
                  "Trusted by thousands for authentic Ayurvedic solutions"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;