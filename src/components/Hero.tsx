import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ayurvedic herbs and natural wellness products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Welcome to the Best Herbal & Ayurvedic Store
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white/90 mb-8">
              Discover the power of nature with our time-tested Ayurvedic remedies, crafted for your holistic well-being.
            </h2>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl">
              Rooted in ancient traditions and enhanced by modern science, our products support your journey to balanced health and natural healing.
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-full shadow-glow"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProducts}
        style={{ cursor: 'pointer' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;