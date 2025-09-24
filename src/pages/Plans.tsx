import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, Car, Globe, Headphones, ChevronRight } from "lucide-react";

const CTA_URL = "https://fakhroinsurance.com/special-payments/";

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
    <div className="min-h-screen font-roboto bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <Badge className="mb-6 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20 roboto-medium">
            Compare Plans
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 roboto-black">
            Choose Your <span className="text-healthcare-green">Perfect Plan</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto roboto-regular">
            Affordable dental coverage designed specifically for Filipino families in Bahrain
          </p>
          <div className="flex justify-center mt-10">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
            >
              Get Started Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Our <span className="text-healthcare-blue">Dental Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Simple, transparent pricing for every Filipino family
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm ${
                  plan.popular
                    ? "ring-2 ring-healthcare-green/30 border-healthcare-green"
                    : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-healthcare-green text-white border-0 shadow-lg roboto-bold z-20">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground roboto-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground roboto-regular">{plan.subtitle}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-healthcare-blue roboto-black">{plan.price}</span>
                    <span className="text-muted-foreground text-lg roboto-medium">{plan.vat} <span className="text-base">/ year</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 roboto-regular">
                    Deductible: <span className="font-semibold">{plan.deductible}</span>
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-healthcare-green mt-0.5 flex-shrink-0" />
                        <span className="text-foreground roboto-regular">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex justify-center items-center text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 roboto-bold rounded-full py-3 ${
                      plan.popular
                        ? "bg-healthcare-green hover:bg-healthcare-green-light text-white"
                        : "bg-healthcare-blue hover:bg-healthcare-blue-light text-white"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {plan.popular ? "Get Started" : "Select & Pay"}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
            >
              Get SmileCare Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Universal Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 roboto-medium">
              Universal Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 roboto-bold">
              Universal <span className="text-healthcare-green">Member Benefits</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto roboto-regular">
              Every SmileCare member enjoys these exclusive advantages, regardless of plan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {universalBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-healthcare-green to-healthcare-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white roboto-bold">{benefit.title}</h3>
                  <p className="text-white/80 roboto-regular">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-healthcare-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
            >
              Register & Pay Online
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-green to-healthcare-blue text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 roboto-medium">
            Registration
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight roboto-black">
            Ready to <span className="text-healthcare-green">Get Started?</span>
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto roboto-regular">
            Choose your plan and register today. Your dental coverage can be active within the same month!
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-healthcare-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
          >
            Register & Pay Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Plans;