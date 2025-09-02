import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Herbal13 from '../assets/13.jpg'
import Herbal14 from '../assets/14.jpg'
import Herbal15 from '../assets/15.jpg'
import Herbal16 from '../assets/16.jpg'

const Products = () => {
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
      image: Herbal13
    },
    {
      id: 2,
      name: 'Turmeric Curcumin',
      description: 'Powerful anti-inflammatory and antioxidant supplement',
      price: '₹1,670',
      originalPrice: '₹2,087',
      rating: 4.9,
      reviews: 189,
      badge: 'New',
      image: Herbal14
    },
    {
      id: 3,
      name: 'Tulsi (Holy Basil) Drops',
      description: 'Natural immune booster and stress reliever',
      price: '₹1,252',
      originalPrice: '₹1,670',
      rating: 4.7,
      reviews: 156,
      badge: 'Organic',
      image: Herbal15
    },
    {
      id: 4,
      name: 'Brahmi Memory Support',
      description: 'Enhanced cognitive function with pure Brahmi extract',
      price: '$28.99',
      originalPrice: '$34.99',
      rating: 4.6,
      reviews: 98,
      badge: 'Premium',
      image: Herbal16
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Premium Ayurvedic Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic Ayurvedic supplements and herbal remedies,
            each crafted with the highest quality natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-natural transition-all duration-500 group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                      {product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
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

        <div className="text-center mt-12">
          <Link to="/products">
            <Button className="btn-outline-nature px-12">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;