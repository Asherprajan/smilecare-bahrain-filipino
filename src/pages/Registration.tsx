import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, CreditCard, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Registration = () => {
  const eligibilityRequirements = [
    "Valid CPR (Central Population Registry) required",
    "Ages 18–60 years eligible",
    "Open to all Filipino residents in Bahrain",
    "No medical exam or health screening required"
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Register Online",
      description: "Visit fakhroinsurance.com and complete your registration form",
      icon: ExternalLink
    },
    {
      step: 2,
      title: "Pay Premium",
      description: "Pay your premium via Benefit Pay using the provided IBAN",
      icon: CreditCard
    },
    {
      step: 3,
      title: "Email Confirmation",
      description: "Receive email acknowledgment of your payment and registration",
      icon: Mail
    },
    {
      step: 4,
      title: "Policy Activation",
      description: "Get policy activation confirmation within the same month",
      icon: CheckCircle
    }
  ];

  const accessSteps = [
    {
      title: "Call to Book",
      description: "Contact Mazaya Dental Centre at +973-17777234 to schedule your appointment",
      icon: Phone
    },
    {
      title: "Free Transport",
      description: "Arrange complimentary pickup and drop-off service to/from the clinic",
      icon: MapPin
    },
    {
      title: "Visit & Pay",
      description: "Show your CPR, pay BD 3 deductible, and receive your dental treatment",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Register for SmileCare Today
          </h1>
          <p className="text-xl text-blue-100">
            Simple registration process with same-month activation
          </p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-healthcare-blue" />
              </div>
              <CardTitle className="text-2xl text-foreground">Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-healthcare-green mt-1 flex-shrink-0" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Registration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to get your dental coverage activated
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-10 h-10 bg-healthcare-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-5 w-5 text-healthcare-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-healthcare-green hover:bg-healthcare-green-light" asChild>
              <a href="https://fakhroinsurance.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Start Registration</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Access Services */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How to Access Dental Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Once registered, accessing your dental care is straightforward
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accessSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Support */}
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Email Support</h3>
                <p className="text-muted-foreground mb-2">contact@smilecare.com</p>
                <Badge variant="outline">24/7 Support</Badge>
              </CardContent>
            </Card>

            {/* Customer Service */}
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Customer Service</h3>
                <p className="text-muted-foreground mb-2">General Inquiries</p>
                <Badge variant="outline">Sat–Thu, 10 AM – 9 PM</Badge>
              </CardContent>
            </Card>

            {/* Houras Consultancy */}
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Houras Consultancy</h3>
                <p className="text-muted-foreground mb-2">+973 39999457</p>
                <Badge variant="outline">Sun–Thu, 10 AM – 7 PM</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Protect Your Smile Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Register with SmileCare and enjoy peace of mind in Bahrain
          </p>
          <Button size="lg" className="bg-white text-healthcare-green hover:bg-gray-100" asChild>
            <a href="https://fakhroinsurance.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <span>Register Now</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Registration;