import { Leaf, FlaskConical, Shield, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'All our products are certified organic and sourced from the finest natural ingredients.',
      delay: '0.1s'
    },
    {
      icon: FlaskConical,
      title: 'Digital Laboratory',
      description: 'Advanced testing and quality control using modern digital laboratory equipment.',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Hygienic Product',
      description: 'Strict hygiene standards maintained throughout the production and packaging process.',
      delay: '0.3s'
    },
    {
      icon: Award,
      title: 'Quality Tested',
      description: 'Every product undergoes rigorous quality testing to ensure maximum potency and safety.',
      delay: '0.4s'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Why Choose Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of nature with our carefully crafted Ayurvedic products, 
            backed by traditional wisdom and modern quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-scale-in text-center group hover-lift"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-natural transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-lighter rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;