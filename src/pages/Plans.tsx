import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Zap, 
  Shield, 
  Clock, 
  Car, 
  Globe, 
  Headphones, 
  ChevronRight,
  FileText,
  CreditCard,
  Users,
  Heart,
  Phone,
  MapPin,
  Building2,
  Stethoscope,
  Smile,
  AlertCircle,
  Crown,
  Wrench,
  Drill,
  Target,
  Eye,
  Calendar,
  DollarSign,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Plus,
  Minus,
  Gem
} from "lucide-react";

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
      color: "blue",
      icon: Users,
      description: "Comprehensive dental coverage for general public with extensive benefits",
      benefits: [
        "Unlimited consultations",
        "2 composite fillings",
        "2 simple extractions", 
        "1 professional cleaning",
        "1 root canal treatment (excluding crown)",
        "2 removable dentures"
      ],
      coverage: {
        preventive: "100%",
        basic: "80%", 
        major: "50%",
        emergency: "90%"
      }
    },
    {
      name: "SmileCare Plan B",
      subtitle: "Household Staff",
      price: "BD 14",
      vat: "+ VAT",
      deductible: "BD 3 per visit",
      popular: true,
      color: "green",
      icon: Heart,
      description: "Essential dental coverage designed specifically for household staff",
      benefits: [
        "2 consultations/year",
        "1 composite filling",
        "2 extractions",
        "1 professional cleaning"
      ],
      coverage: {
        preventive: "100%",
        basic: "80%",
        major: "50%", 
        emergency: "90%"
      }
    }
  ];

  const coverageDetails = [
    {
      category: "Preventive Care",
      icon: Shield,
      coverage: "100%",
      color: "green",
      treatments: [
        { name: "Regular cleanings", icon: Sparkles, frequency: "Unlimited" },
        { name: "Dental exams", icon: Stethoscope, frequency: "Unlimited" },
        { name: "X-rays", icon: Eye, frequency: "As needed" },
        { name: "Fluoride treatments", icon: Shield, frequency: "Annual" }
      ]
    },
    {
      category: "Basic Restorative",
      icon: FileText,
      coverage: "80%",
      color: "blue",
      treatments: [
        { name: "Fillings", icon: Wrench, frequency: "As needed" },
        { name: "Simple extractions", icon: Minus, frequency: "As needed" },
        { name: "Root canals", icon: Drill, frequency: "As needed" },
        { name: "Crowns", icon: Crown, frequency: "As needed" }
      ]
    },
    {
      category: "Major Procedures",
      icon: Gem,
      coverage: "50%",
      color: "purple",
      treatments: [
        { name: "Dental implants", icon: Plus, frequency: "As needed" },
        { name: "Bridges", icon: Plus, frequency: "As needed" },
        { name: "Dentures", icon: Smile, frequency: "As needed" },
        { name: "Orthodontics", icon: Target, frequency: "As needed" }
      ]
    },
    {
      category: "Emergency Care",
      icon: Zap,
      coverage: "90%",
      color: "red",
      treatments: [
        { name: "Emergency extractions", icon: AlertCircle, frequency: "24/7" },
        { name: "Pain relief", icon: Heart, frequency: "24/7" },
        { name: "Trauma treatment", icon: ShieldCheck, frequency: "24/7" },
        { name: "24/7 support", icon: Clock, frequency: "24/7" }
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

  const eligibilityRequirements = [
    {
      requirement: "Valid CPR (Civil Population Registry)",
      description: "Must have a valid CPR number issued by the Kingdom of Bahrain",
      icon: UserCheck,
      mandatory: true
    },
    {
      requirement: "Age between 18-60 years",
      description: "Applicants must be between 18 and 60 years of age at the time of registration",
      icon: Calendar,
      mandatory: true
    },
    {
      requirement: "Filipino Nationality",
      description: "Must be a Filipino citizen or have Filipino heritage",
      icon: Globe,
      mandatory: true
    },
    {
      requirement: "Resident in Bahrain",
      description: "Must be currently residing in the Kingdom of Bahrain",
      icon: MapPin,
      mandatory: true
    }
  ];

  const claimsProcess = [
    {
      step: "1",
      title: "Visit Mazaya Dental Centre",
      description: "Schedule appointment and visit our partner clinic",
      icon: Building2
    },
    {
      step: "2", 
      title: "Present Insurance Card",
      description: "Show your SmileCare insurance card and CPR",
      icon: CreditCard
    },
    {
      step: "3",
      title: "Pay Deductible",
      description: "Pay only BD 3 deductible per visit",
      icon: DollarSign
    },
    {
      step: "4",
      title: "Receive Treatment",
      description: "Get your dental treatment with full coverage",
      icon: Stethoscope
    }
  ];

  const pricingBreakdown = [
    {
      item: "Annual Premium",
      planA: "BD 18 + VAT",
      planB: "BD 14 + VAT",
      description: "One-time annual payment"
    },
    {
      item: "Deductible per Visit",
      planA: "BD 3",
      planB: "BD 3", 
      description: "Fixed amount per dental visit"
    },
    {
      item: "Family Discount",
      planA: "10% off",
      planB: "10% off",
      description: "For 3+ family members"
    },
    {
      item: "Group Discount",
      planA: "15% off",
      planB: "15% off",
      description: "For 10+ employees"
    }
  ];

  return (
    <div className="min-h-screen font-roboto bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] lg:h-[420px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/plan.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Plan Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Compare Our <span className="text-healthcare-blue">Dental Plans</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed roboto-regular">
              Two comprehensive plans designed to meet different needs and budgets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white ${
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
                <CardHeader className="text-center pb-2">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                    <plan.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground roboto-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground roboto-regular text-sm">{plan.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-1 roboto-regular">{plan.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-healthcare-blue roboto-black">{plan.price}</span>
                    <span className="text-muted-foreground text-base roboto-medium">{plan.vat} <span className="text-sm">/ year</span></span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 roboto-regular">
                    Deductible: <span className="font-semibold">{plan.deductible}</span>
                  </p>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-2 mb-6">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-healthcare-green mt-0.5 flex-shrink-0" />
                        <span className="text-foreground roboto-regular text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex justify-center items-center text-base font-semibold shadow hover:shadow-lg transition-all duration-300 roboto-bold rounded-full py-2 ${
                      plan.popular
                        ? "bg-healthcare-green hover:bg-healthcare-green-light text-white"
                        : "bg-healthcare-blue hover:bg-healthcare-blue-light text-white"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {plan.popular ? "Get Started" : "Select & Pay"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Breakdown Table */}
          <div className="bg-gradient-to-r from-healthcare-green/10 to-healthcare-blue/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center roboto-bold">
              Pricing Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-foreground roboto-bold text-sm">Item</th>
                    <th className="text-center py-3 px-3 font-semibold text-healthcare-blue roboto-bold text-sm">Plan A</th>
                    <th className="text-center py-3 px-3 font-semibold text-healthcare-green roboto-bold text-sm">Plan B</th>
                    <th className="text-left py-3 px-3 font-semibold text-foreground roboto-bold text-sm">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingBreakdown.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-foreground roboto-medium text-sm">{item.item}</td>
                      <td className="py-3 px-3 text-center text-healthcare-blue roboto-medium text-sm">{item.planA}</td>
                      <td className="py-3 px-3 text-center text-healthcare-green roboto-medium text-sm">{item.planB}</td>
                      <td className="py-3 px-3 text-muted-foreground roboto-regular text-xs">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-16 bg-gradient-to-b from-background to-healthcare-gray/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Detailed <span className="text-healthcare-blue">Coverage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed roboto-regular">
              Comprehensive coverage across all dental treatment categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageDetails.map((category, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-healthcare-blue transition-colors roboto-bold">
                    {category.category}
                  </CardTitle>
                  <Badge className={`w-fit mx-auto text-xs ${
                    category.color === 'green' ? 'bg-green-100 text-green-800' :
                    category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {category.coverage} Covered
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {category.treatments.map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <treatment.icon className="w-4 h-4 mr-2 text-healthcare-green flex-shrink-0" />
                          <span className="text-foreground roboto-regular text-sm">{treatment.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground roboto-medium">{treatment.frequency}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              <span className="text-healthcare-green">Eligibility</span> Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed roboto-regular">
              Simple requirements to qualify for SmileCare dental insurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityRequirements.map((req, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <req.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-healthcare-blue transition-colors roboto-bold">
                        {req.requirement}
                      </h3>
                      <p className="text-muted-foreground roboto-regular text-sm">
                        {req.description}
                      </p>
                      {req.mandatory && (
                        <Badge className="mt-1 bg-red-100 text-red-800 text-xs">
                          Required
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claims Process Section */}
      <section className="py-16 bg-gradient-to-b from-healthcare-gray/30 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Simple <span className="text-healthcare-blue">Claims Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed roboto-regular">
              Easy 4-step process to access your dental benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimsProcess.map((step, index) => (
              <div key={index} className="relative h-full">
                <Card className="group text-center border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white h-full flex flex-col">
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-healthcare-blue mb-2 group-hover:text-healthcare-green transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold mb-2 text-foreground group-hover:text-healthcare-green transition-colors roboto-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed roboto-regular text-xs">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-white/20 text-white border-white/30 roboto-medium text-xs">
              Universal Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 roboto-bold">
              Universal <span className="text-white/90">Member Benefits</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed roboto-regular">
              Every SmileCare member enjoys these exclusive advantages, regardless of plan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universalBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-healthcare-green to-healthcare-blue rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-white roboto-bold">{benefit.title}</h3>
                  <p className="text-white/80 roboto-regular text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-healthcare-green to-healthcare-blue text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 roboto-medium text-xs">
            Registration
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight roboto-black">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">Get Started?</span>
          </h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed roboto-regular">
            Choose your plan and register today. Your dental coverage can be active within the same month!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-healthcare-green hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
            >
              Register & Pay Now
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="tel:+97312345678"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-healthcare-green px-6 py-3 text-base font-semibold rounded-full backdrop-blur-sm transition-all duration-300 roboto-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;