import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Home, Mail, Phone } from 'lucide-react';

interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
    submittedAt: string;
    submittedTime: string;
    contactId: string;
}

export default function ContactConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { contactData }: { contactData?: ContactData } = location.state || {};

    // Redirect if no contact data (direct access to page)
    useEffect(() => {
        if (!contactData) {
            navigate('/', { replace: true });
        }
    }, [contactData, navigate]);

    if (!contactData) {
        return null;
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
                    <h1 className="text-3xl font-bold mb-2">Message Received!</h1>
                    <p className="text-lg text-muted-foreground">
                        Thank you <strong>{contactData.name}</strong>, your message has been successfully sent!
                    </p>
                    <p className="text-lg text-muted-foreground">
                        We'll get back to you within 24 hours.
                    </p>
                </div>

                {/* Message Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <p className="text-sm text-muted-foreground">Contact ID</p>
                                <p className="font-mono font-semibold">{contactData.contactId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Submitted On</p>
                                <p className="font-medium">{contactData.submittedAt} at {contactData.submittedTime}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Your Email</p>
                                <p className="font-medium">{contactData.email}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>What Happens Next?</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <p className="text-sm">You'll receive a confirmation email shortly</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <p className="text-sm">Our team will respond within 24 hours</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <p className="text-sm">We'll address your inquiry personally</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Message Summary */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Your Message Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Name</p>
                            <p className="font-medium">{contactData.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <p className="font-medium">{contactData.email}</p>
                        </div>
                        {contactData.subject && (
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Subject</p>
                                <p className="font-medium">{contactData.subject}</p>
                            </div>
                        )}
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Message</p>
                            <p className="font-medium whitespace-pre-wrap bg-muted p-4 rounded-md">
                                {contactData.message}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Button */}
                <div className="flex justify-center">
                    <Button onClick={() => navigate('/')} className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
