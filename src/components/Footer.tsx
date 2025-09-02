import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Contact', href: '#contact' }
    ],
    'Categories': [
      { name: 'Immunity Boosters', href: '#' },
      { name: 'Digestive Health', href: '#' },
      { name: 'Stress Relief', href: '#' },
      { name: 'Beauty & Skin', href: '#' }
    ],
    'Support': [
      { name: 'Customer Service', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns & Refunds', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-white">
                  Ayurveda<span className="text-primary-light">+</span>
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Your trusted partner in natural health and wellness. We bring you authentic 
                Ayurvedic products crafted with the highest quality ingredients and traditional wisdom.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 hover:bg-primary-light rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary-light transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/70">
                Subscribe to our newsletter for wellness tips and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <button className="px-6 py-3 bg-primary-light hover:bg-primary text-white font-medium rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/70">
              <span>© 2024 Ayurveda+ Store. Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for your wellness</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-primary-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-primary-light transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;