import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Zap, Shield, Clock, Car, Globe, Headphones } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "SmileCare Plan A",
      subtitle: "General Public",
      price: "BD 18",
      vat: "+ VAT",
      deductible: "BD 3 per visit",
      popular: false,
      benefits: [
        "Unlimited consultations",
        "2 composite fillings",
        "2 simple extractions",
        "1 professional cleaning",
        "1 root canal treatment (excluding crown)",
        "2 removable dentures"
      ]
    },
    {
      name: "SmileCare Plan B",
      subtitle: "Household Staff",
      price: "BD 14",
      vat: "+ VAT",
      deductible: "BD 3 per visit",
      popular: true,
      benefits: [
        "2 consultations/year",
        "1 composite filling",
        "2 extractions",
        "1 professional cleaning"
      ]
    }
  ];

  const universalBenefits = [
    {
      icon: Zap,
      title: "No Waiting Period",
      description: "Coverage starts immediately upon registration"
    },
    {
      icon: Shield,
      title: "No Medical Exam Required",
      description: "Simple registration process with no health screenings"
    },
    {
      icon: Clock,
      title: "Same-Month Activation",
      description: "Get your policy activated within the same month"
    },
    {
      icon: Car,
      title: "Free Transportation",
      description: "Complimentary pickup and drop-off to/from clinic"
    },
    {
      icon: Globe,
      title: "Discounted Extra Treatments",
      description: "Special rates for treatments beyond your plan coverage"
    },
    {
      icon: Headphones,
      title: "Bilingual Service",
      description: "Full support in both English and Tagalog"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-blue-100">
            Affordable dental coverage designed specifically for Filipino families in Bahrain
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative shadow-medium hover:shadow-large transition-shadow ${plan.popular ? 'border-healthcare-green ring-2 ring-healthcare-green/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-healthcare-green hover:bg-healthcare-green-light">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-healthcare-blue">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.vat} / year</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Deductible: {plan.deductible}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3 mb-6">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-healthcare-green mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-healthcare-green hover:bg-healthcare-green-light' : ''}`} 
                    size="lg" 
                    asChild
                  >
                    <Link to="/registration">Choose This Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Benefits Section */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Universal Member Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every SmileCare member enjoys these exclusive advantages, regardless of plan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universalBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Choose your plan and register today. Your dental coverage can be active within the same month!
          </p>
          <Button size="lg" className="bg-white text-healthcare-green hover:bg-gray-100" asChild>
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Plans;