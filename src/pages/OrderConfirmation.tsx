import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Home, Printer } from 'lucide-react';
import paytmQR from '../assets/paytmQR.jpeg';

// Define types for better TypeScript support
interface CartItem {
  id: string | number;
  name: string;
  price: string;
  quantity: number;
}

interface OrderData {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  orderId: string;
  items: CartItem[];
  totalAmount: number;
  orderDate: string;
  orderTime: string;
}

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData }: { orderData?: OrderData } = location.state || {};

  // Redirect if no order data (direct access to page)
  useEffect(() => {
    if (!orderData) {
      navigate('/', { replace: true });
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null; // Or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>

      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Hello <strong>{orderData.name}</strong>, your order has been successfully placed!
          </p>
          <p className="text-lg text-muted-foreground">
            Thank you for shopping with us!
          </p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-mono font-semibold">{orderData.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Order Date & Time</p>
                <p className="font-medium">{orderData.orderDate} at {orderData.orderTime}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-bold text-lg">₹{orderData.totalAmount.toLocaleString('en-IN')}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{orderData.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{orderData.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">
                  {orderData.address}, {orderData.city} - {orderData.zip}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderData.items.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">
                    ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment QR */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Complete Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <img
                src={paytmQR}
                alt="Paytm QR Code"
                className="mx-auto w-64 h-64 object-contain mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Scan the QR code above to complete your payment
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/')} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            onClick={() => window.print()}
            className="flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print Receipt
          </Button>
        </div>
      </div>
    </div>
  );
}
