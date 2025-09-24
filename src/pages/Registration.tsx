import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const REGISTRATION_CTA_URL = "https://fakhroinsurance.com/special-payments/";

const Registration = () => {
  const eligibilityRequirements = [
    "Valid CPR (Central Population Registry) required",
    "Ages 18–60 years eligible",
    "Open to all Filipino residents in Bahrain",
    "No medical exam or health screening required",
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Register Online",
      description:
        "Visit fakhroinsurance.com and complete your registration form",
      icon: ExternalLink,
    },
    {
      step: 2,
      title: "Pay Premium",
      description: "Pay your premium via Benefit Pay using the provided IBAN",
      icon: CreditCard,
    },
    {
      step: 3,
      title: "Email Confirmation",
      description:
        "Receive email acknowledgment of your payment and registration",
      icon: Mail,
    },
    {
      step: 4,
      title: "Policy Activation",
      description: "Get policy activation confirmation within the same month",
      icon: CheckCircle,
    },
  ];

  const accessSteps = [
    {
      title: "Call to Book",
      description:
        "Contact Mazaya Dental Centre at +973-17777234 to schedule your appointment",
      icon: Phone,
    },
    {
      title: "Free Transport",
      description:
        "Arrange complimentary pickup and drop-off service to/from the clinic",
      icon: MapPin,
    },
    {
      title: "Visit & Pay",
      description:
        "Show your CPR, pay BD 3 deductible, and receive your dental treatment",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-healthcare-blue/10 via-white to-healthcare-green/10">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-green to-healthcare-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 roboto-medium text-base">
            <Users className="w-4 h-4 mr-2" />
            SmileCare Registration
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight roboto-black">
            Register for <span className="text-healthcare-green">SmileCare</span> Today
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto roboto-regular">
            Simple, fast, and Filipino-friendly registration with <span className="font-semibold">same-month activation</span>
          </p>
          <Button
            size="lg"
            className="bg-white text-healthcare-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 roboto-bold"
            asChild
          >
            <a
              href={REGISTRATION_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span>Start Registration</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-large border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-healthcare-blue" />
              </div>
              <CardTitle className="text-2xl text-foreground roboto-bold">
                Eligibility Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-healthcare-green mt-1 flex-shrink-0" />
                    <span className="text-foreground roboto-regular">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-healthcare-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20 roboto-medium">
              <CreditCard className="w-4 h-4 mr-2" />
              Registration Steps
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              How to Register
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Four simple steps to get your dental coverage activated
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-healthcare-green to-healthcare-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl roboto-black">{step.step}</span>
                  </div>
                  <div className="w-10 h-10 bg-healthcare-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-5 w-5 text-healthcare-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground roboto-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed roboto-regular">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 roboto-bold"
              asChild
            >
              <a
                href={REGISTRATION_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
              >
                <span>Start Registration</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Access Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20 roboto-medium">
              <MapPin className="w-4 h-4 mr-2" />
              Accessing Care
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              How to Access Dental Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Once registered, accessing your dental care is straightforward
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accessSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-healthcare-green to-healthcare-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground roboto-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed roboto-regular">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-healthcare-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20 roboto-medium">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Contact Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Support */}
            <Card className="text-center border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Mail className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground roboto-bold">Email Support</h3>
                <p className="text-muted-foreground mb-2 roboto-regular">contact@smilecare.com</p>
                <Badge variant="outline" className="roboto-medium">24/7 Support</Badge>
              </CardContent>
            </Card>
            {/* Customer Service */}
            <Card className="text-center border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Phone className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground roboto-bold">Customer Service</h3>
                <p className="text-muted-foreground mb-2 roboto-regular">General Inquiries</p>
                <Badge variant="outline" className="roboto-medium">Sat–Thu, 10 AM – 9 PM</Badge>
              </CardContent>
            </Card>
            {/* Houras Consultancy */}
            <Card className="text-center border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Phone className="h-8 w-8 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground roboto-bold">Houras Consultancy</h3>
                <p className="text-muted-foreground mb-2 roboto-regular">+973 39999457</p>
                <Badge variant="outline" className="roboto-medium">Sun–Thu, 10 AM – 7 PM</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-healthcare-green to-healthcare-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 roboto-medium text-base">
            <CheckCircle className="w-4 h-4 mr-2" />
            Peace of Mind
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 roboto-black">
            Protect Your Smile Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto roboto-regular">
            Register with SmileCare and enjoy peace of mind in Bahrain
          </p>
          <Button
            size="lg"
            className="bg-white text-healthcare-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 roboto-bold"
            asChild
          >
            <a
              href={REGISTRATION_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
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