import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Herbal1 from '../assets/1.jpeg'
import Herbal2 from '../assets/2.jpeg'
import Herbal3 from '../assets/3.jpeg'
import Herbal4 from '../assets/4.jpeg'
import Herbal5 from '../assets/5.jpeg'
import Herbal6 from '../assets/6.jpeg'
import Herbal7 from '../assets/7.jpeg'
import Herbal8 from '../assets/8.jpeg'
import Herbal9 from '../assets/9.jpeg'
import Herbal10 from '../assets/10.jpeg'
import Herbal11 from '../assets/11.jpeg'
import Herbal12 from '../assets/12.jpeg'
import Herbal13 from '../assets/13.jpeg'
import Herbal14 from '../assets/14.jpeg'
import Herbal15 from '../assets/15.jpeg'
import Herbal16 from '../assets/16.jpeg'

const AllProducts = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Ashwagandha Capsules',
      description: 'Premium quality Ashwagandha for stress relief and vitality',
      price: '₹2,087',
      originalPrice: '₹2,505',
      rating: 4.8,
      reviews: 234,
      badge: 'Bestseller',
      image: Herbal1
    },
    {
      id: 2,
      name: 'Turmeric Immunity Blend',
      description: 'Organic turmeric with black pepper for enhanced absorption',
      price: '₹1,670',
      originalPrice: '₹2,087',
      rating: 4.9,
      reviews: 189,
      badge: 'New',
      image: Herbal2
    },
    {
      id: 3,
      name: 'Triphala Detox Formula',
      description: 'Traditional three-fruit blend for digestive health',
      price: '₹1,920',
      originalPrice: '₹2,338',
      rating: 4.7,
      reviews: 156,
      badge: 'Organic',
      image: Herbal3
    },
    {
      id: 4,
      name: 'Brahmi Memory Support',
      description: 'Enhanced cognitive function with pure Brahmi extract',
      price: '₹2,421',
      originalPrice: '₹2,923',
      rating: 4.6,
      reviews: 98,
      badge: 'Premium',
      image: Herbal4
    },
    {
      id: 5,
      name: 'Neem Skin Care Formula',
      description: 'Pure neem extract for healthy, glowing skin',
      price: '₹2,254',
      originalPrice: '₹2,672',
      rating: 4.5,
      reviews: 167,
      badge: 'Natural',
      image: Herbal5
    },
    {
      id: 6,
      name: 'Giloy Immunity Booster',
      description: 'Traditional immunity enhancer with pure Giloy extract',
      price: '₹1,836',
      originalPrice: '₹2,254',
      rating: 4.7,
      reviews: 143,
      badge: 'Immune Support',
      image: Herbal6
    },
    {
      id: 7,
      name: 'Moringa Energy Capsules',
      description: 'Nutrient-rich moringa leaves for natural energy boost',
      price: '₹2,003',
      originalPrice: '₹2,421',
      rating: 4.6,
      reviews: 201,
      badge: 'Energy',
      image: Herbal7
    },
    {
      id: 8,
      name: 'Amla Vitamin C Complex',
      description: 'Natural vitamin C from organic Amla for immunity',
      price: '₹1,586',
      originalPrice: '₹2,004',
      rating: 4.8,
      reviews: 178,
      badge: 'Vitamin C',
      image: Herbal8
    },
    {
      id: 9,
      name: 'Fenugreek Digestive Support',
      description: 'Traditional fenugreek seeds for digestive wellness',
      price: '₹1,753',
      originalPrice: '₹2,171',
      rating: 4.4,
      reviews: 92,
      badge: 'Digestive',
      image: Herbal9
    },
    {
      id: 10,
      name: 'Spirulina Green Superfood',
      description: 'Nutrient-dense spirulina algae for overall health',
      price: '₹2,755',
      originalPrice: '₹3,257',
      rating: 4.9,
      reviews: 267,
      badge: 'Superfood',
      image: Herbal10
    },
    {
      id: 11,
      name: 'Ginseng Energy Blend',
      description: 'Premium ginseng extract for vitality and stamina',
      price: '₹3,005',
      originalPrice: '₹3,591',
      rating: 4.7,
      reviews: 134,
      badge: 'Premium',
      image: Herbal11
    },
    {
      id: 12,
      name: 'Holy Basil Stress Relief',
      description: 'Sacred tulsi for natural stress management',
      price: '₹1,670',
      originalPrice: '₹2,087',
      rating: 4.6,
      reviews: 211,
      badge: 'Stress Relief',
      image: Herbal12
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Link
                to="/"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                All Ayurvedic Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our complete collection of authentic Ayurvedic supplements and herbal remedies,
                carefully selected for their purity and effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-natural transition-all duration-500 group animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge
                      className="absolute top-3 left-3 bg-primary text-primary-foreground"
                    >
                      {product.badge}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          ₹{Number(product.price.replace(/[^0-9.-]+/g, "")).toLocaleString('en-IN')}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          ₹{Number(product.originalPrice.replace(/[^0-9.-]+/g, "")).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full btn-nature group-hover:bg-primary-light"
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          description: product.description
                        });
                        toast({
                          title: "Added to cart!",
                          description: `${product.name} has been added to your cart.`,
                        });
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;