import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  DollarSign, 
  Users, 
  Heart, 
  CheckCircle, 
  Star, 
  Clock, 
  Phone, 
  MapPin,
  Award,
  Zap,
  Globe,
  FileText,
  Calendar,
  MessageCircle,
  ChevronRight,
  Play,
  Smile,
  Stethoscope,
  CreditCard,
  Building2,
  Handshake,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Clock3,
  Headphones,
  Mail,
  ArrowRight,
  Plus,
  Minus,
  X,
  Info,
  AlertCircle,
  ThumbsUp,
  Target,
  Lightbulb,
  Rocket,
  Gem,
  Crown,
  ArrowDown,
  ArrowUp,
  Check,
  XCircle,
  AlertTriangle,
  HelpCircle,
  Search,
  Filter,
  Settings,
  Menu,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Database,
  Server,
  Cloud,
  Wifi,
  Signal,
  Battery,
  WifiOff,
  Wrench,
  Drill
} from "lucide-react";
import heroImage from "@/assets/hero-dental-care.jpg";

const Home = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Comprehensive Coverage",
      description: "Complete dental care including fillings, extractions, cleanings, root canals, crowns, and orthodontics.",
      details: [
        { text: "Preventive care", icon: Shield },
        { text: "Restorative treatments", icon: Stethoscope },
        { text: "Cosmetic procedures", icon: Sparkles },
        { text: "Emergency services", icon: Zap }
      ]
    },
    {
      icon: CreditCard,
      title: "Affordable Premiums",
      description: "Plans starting from just BD 14/year with flexible payment options and family discounts.",
      details: [
        { text: "No hidden fees", icon: CheckCircle },
        { text: "Family packages", icon: Users },
        { text: "Monthly/Annual options", icon: Calendar },
        { text: "Group discounts", icon: TrendingUp }
      ]
    },
    {
      icon: Building2,
      title: "Trusted Partners",
      description: "Backed by Gulf Union Insurance & Fakhro Insurance Services with 30+ years of experience.",
      details: [
        { text: "Licensed insurers", icon: Award },
        { text: "Financial stability", icon: Shield },
        { text: "International recognition", icon: Globe },
        { text: "Local expertise", icon: MapPin }
      ]
    },
    {
      icon: Heart,
      title: "Filipino-Friendly Care",
      description: "Tagalog-speaking staff, cultural understanding, and personalized service for Filipino families.",
      details: [
        { text: "Native language support", icon: MessageCircle },
        { text: "Cultural sensitivity", icon: Smile },
        { text: "Community focus", icon: Handshake },
        { text: "Personalized care", icon: UserCheck }
      ]
    }
  ];

  const stats = [
    { number: "30+", label: "Years Insurance Expertise", icon: Award },
    { number: "15+", label: "Certified Dental Professionals", icon: Users },
    { number: "8+", label: "Advanced Treatment Rooms", icon: Zap },
    { number: "100%", label: "Same-Month Activation", icon: Clock },
    { number: "500+", label: "Happy Filipino Families", icon: Heart },
    { number: "24/7", label: "Customer Support", icon: MessageCircle }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "Manama, Bahrain",
      rating: 5,
      text: "SmileCare has been a blessing for our family. The staff speaks Tagalog and understands our needs perfectly. The coverage is comprehensive and affordable.",
      image: "👩‍💼"
    },
    {
      name: "Jose Rodriguez",
      location: "Riffa, Bahrain", 
      rating: 5,
      text: "I've been with SmileCare for 3 years now. The dental care is excellent and the insurance process is so smooth. Highly recommended!",
      image: "👨‍💼"
    },
    {
      name: "Ana Cruz",
      location: "Muharraq, Bahrain",
      rating: 5,
      text: "As a working mother, I needed reliable dental coverage. SmileCare provides exactly that - quality care at an affordable price with Filipino-friendly service.",
      image: "👩‍👧‍👦"
    }
  ];

  const coverageDetails = [
    {
      category: "Preventive Care",
      icon: Shield,
      treatments: [
        { name: "Regular cleanings", icon: Sparkles },
        { name: "Dental exams", icon: Stethoscope },
        { name: "X-rays", icon: Eye },
        { name: "Fluoride treatments", icon: Shield }
      ],
      coverage: "100% covered",
      color: "healthcare-green"
    },
    {
      category: "Basic Restorative",
      icon: FileText,
      treatments: [
        { name: "Fillings", icon: Wrench },
        { name: "Simple extractions", icon: Minus },
        { name: "Root canals", icon: Drill },
        { name: "Crowns", icon: Crown }
      ],
      coverage: "80% covered",
      color: "healthcare-blue"
    },
    {
      category: "Major Procedures",
      icon: Gem,
      treatments: [
        { name: "Dental implants", icon: Plus },
        { name: "Bridges", icon: Plus },
        { name: "Dentures", icon: Smile },
        { name: "Orthodontics", icon: Target }
      ],
      coverage: "50% covered",
      color: "healthcare-blue-light"
    },
    {
      category: "Emergency Care",
      icon: Zap,
      treatments: [
        { name: "Emergency extractions", icon: AlertTriangle },
        { name: "Pain relief", icon: Heart },
        { name: "Trauma treatment", icon: ShieldCheck },
        { name: "24/7 support", icon: Clock }
      ],
      coverage: "90% covered",
      color: "healthcare-green-light"
    }
  ];

  const registrationProcess = [
    {
      step: "1",
      title: "Register",
      description: "Complete online application form which is available on Fakhro insurance service's website (https://fakhroinsurance.com)",
      icon: FileText,
      color: "healthcare-blue"
    },
    {
      step: "2",
      title: "Pay Premium",
      description: "Copy the IBAN no. mentioned on an enrollment form and pay the premium by Benefit Pay",
      icon: CreditCard,
      color: "healthcare-green"
    },
    {
      step: "3",
      title: "Acknowledgment",
      description: "Receive acknowledgment of filled enrollment form and payment confirmation by email",
      icon: Mail,
      color: "healthcare-blue-light"
    }
  ];

  const serviceProcess = [
    {
      step: "1",
      title: "Policy Activation Confirmation",
      description: "Receive Email notification confirming policy activation",
      icon: ShieldCheck,
      color: "healthcare-green"
    },
    {
      step: "2",
      title: "Book Appointment",
      description: "Call dedicated helpline number of Mazaya dental centre booking of an appointment",
      icon: Phone,
      color: "healthcare-blue"
    },
    {
      step: "3",
      title: "Free Transportation",
      description: "Mazaya Dental Centre arranges pickup and drop-off service",
      icon: Users,
      color: "healthcare-green-light"
    },
    {
      step: "4",
      title: "Dental Visit",
      description: "Show CPR, pay BD 3 co-payment, proceed with treatment",
      icon: Stethoscope,
      color: "healthcare-blue-light"
    }
  ];

  const partners = [
    { 
      name: "Gulf Union Insurance", 
      icon: Building2, 
      description: "Leading insurance provider",
      color: "healthcare-blue"
    },
    { 
      name: "Fakhro Insurance Services", 
      icon: Handshake, 
      description: "Trusted local partner",
      color: "healthcare-green"
    },
    { 
      name: "Bahrain Dental Society", 
      icon: Award, 
      description: "Professional association",
      color: "healthcare-blue-light"
    },
    { 
      name: "Filipino Community Center", 
      icon: Users, 
      description: "Community support",
      color: "healthcare-green-light"
    }
  ];

  const strategicPartners = [
    {
      name: "Philippine Embassy, Bahrain",
      icon: Building2,
      role: "Strategic partner providing support and community connections",
      color: "healthcare-blue",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      features: [
        "Ensures precise targeting of the Filipino community",
        "Provides recognition and community integration"
      ]
    },
    {
      name: "Gulf Union Insurance company",
      icon: Shield,
      role: "Main insurance underwriter",
      color: "healthcare-blue",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      features: [
        "Designs and manages dental micro-insurance policy",
        "Established in 1995 with 30+ years of experience"
      ]
    },
    {
      name: "Fakhro Insurance Services",
      icon: MessageCircle,
      role: "Professional insurance brokerage support",
      color: "healthcare-green",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      features: [
        "Wholly-owned subsidiary of Mr. Abdulla Yousif Fakhro group",
        "Established in 2000 with 25+ years of market experience"
      ]
    },
    {
      name: "Mazaya Dental Centre",
      icon: Smile,
      role: "Exclusive dental service provider, Location :- Isa Town",
      color: "healthcare-red",
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      features: [
        "Provides all dental treatment services",
        "Founded in 2024 with focus on Dental Quality services"
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get coverage?",
      answer: "You can get coverage within 24 hours of registration. We offer same-month activation for immediate dental care needs."
    },
    {
      question: "Do you have Tagalog-speaking staff?",
      answer: "Yes! All our customer service representatives speak Tagalog and understand Filipino culture and needs."
    },
    {
      question: "What dental treatments are covered?",
      answer: "We cover preventive care (100%), basic restorative (80%), major procedures (50%), and emergency care (90%)."
    },
    {
      question: "Can I add family members to my plan?",
      answer: "Absolutely! We offer family packages with discounts for multiple family members. Children under 18 get special rates."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray text-white py-28 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-10">
          <div className="w-full h-full bg-black/40" />
        </div>
        {/* Animated floating shapes */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-8 left-1/5 w-36 h-36 bg-healthcare-green/25 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-healthcare-blue/20 rounded-full blur-xl animate-float" />
          <div className="absolute top-1/2 left-16 w-20 h-20 bg-white/10 rounded-full blur-md animate-float-reverse" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
            {/* Left: Main Hero Content */}
            <div className="flex-1 text-left">
              <Badge className="mb-7 bg-white/20 text-white border-white/30 hover:bg-white/30 inline-flex items-center shadow-md">
                <Award className="w-4 h-4 mr-2" />
                Trusted by the Filipino Community
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg roboto-black text-left">
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healthcare-green-light to-white">
                    SmileCare Dental Insurance
                  </span>
                </span>
                <span className="block text-white/90 roboto-medium">
                  For Filipinos in Kingdom of Bahrain
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-0 text-gray-100/90 leading-relaxed roboto-regular text-left">
                World-class dental coverage, <span className="text-healthcare-green-light font-semibold roboto-medium">affordable</span> and <span className="text-healthcare-blue-light font-semibold roboto-medium">culturally sensitive</span>—designed for Filipino families abroad.
              </p>
              <div className="flex flex-wrap justify-start gap-3 mb-8 text-sm">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-healthcare-green-light" />
                  Same-day approval
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-healthcare-green-light" />
                  Tagalog support
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-healthcare-green-light" />
                  No waiting period
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
                <Button
                  size="lg"
                  className="bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link to="/registration">
                    Get Started Today
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-healthcare-blue px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                  asChild
                >
                  <Link to="/plans">
                    <Play className="w-5 h-5 mr-2" />
                    View Plans
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right: Quick Stats Card (optional, can be enabled if needed) */}
            {/* 
            <div className="flex-1 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">BD 14</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Starting price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">24h</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Activation time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">100%</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Preventive care</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">30+</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Years experience</div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Choose Your Perfect Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <Heart className="w-4 h-4 mr-2" />
              Our Plans
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Choose Your <span className="text-healthcare-green">Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed roboto-regular">
              Two comprehensive dental insurance plans designed specifically for Filipino families in Bahrain. 
              Both plans offer essential dental services with the same affordable deductible rate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* SmileCare Plan A */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Star className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold text-blue-800 roboto-bold">SmileCare Plan A</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-200/50 rounded-xl p-4 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm text-blue-700 roboto-medium">Annual Premium</div>
                      <div className="text-lg font-bold text-blue-800 roboto-bold">BD 18 + VAT per member</div>
                    </div>
                  </div>
                  <div className="bg-blue-200/50 rounded-xl p-4 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm text-blue-700 roboto-medium">Deductible</div>
                      <div className="text-lg font-bold text-blue-800 roboto-bold">BD 3 per visit</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4 roboto-bold">Comprehensive Coverage:</h4>
                  <ul className="space-y-3">
                    {[
                      "Unlimited consultations",
                      "2 composite fillings", 
                      "2 simple tooth extractions",
                      "1 professional cleaning",
                      "1 root canal treatment (excluding crown)",
                      "2 removable dentures"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-blue-700 roboto-regular">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold roboto-bold">
                  Choose Plan A
                </Button>
              </div>
            </div>

            {/* For Household Staff */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-3xl shadow-xl p-8 border-2 border-pink-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Building2 className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="text-3xl font-bold text-pink-800 roboto-bold">For Household Staff</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-pink-200/50 rounded-xl p-4 flex items-center">
                    <FileText className="w-5 h-5 text-pink-600 mr-3" />
                    <div>
                      <div className="text-sm text-pink-700 roboto-medium">Annual Premium</div>
                      <div className="text-lg font-bold text-pink-800 roboto-bold">BD 14 + VAT per member</div>
                    </div>
                  </div>
                  <div className="bg-pink-200/50 rounded-xl p-4 flex items-center">
                    <FileText className="w-5 h-5 text-pink-600 mr-3" />
                    <div>
                      <div className="text-sm text-pink-700 roboto-medium">Deductible</div>
                      <div className="text-lg font-bold text-pink-800 roboto-bold">BD 3 per visit</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-pink-800 mb-4 roboto-bold">Essential Coverage:</h4>
                  <ul className="space-y-3">
                    {[
                      "2 consultations per year",
                      "1 composite filling",
                      "2 tooth extractions", 
                      "1 professional cleaning"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-pink-700 roboto-regular">
                        <CheckCircle className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-semibold roboto-bold">
                  Choose Household Plan
                </Button>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-healthcare-green/10 to-healthcare-blue/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4 roboto-bold">
                GULF UNION INSURANCE & REINSURANCE CO. BSC(C)
              </h3>
              <p className="text-lg text-muted-foreground roboto-regular">
                Both plans are backed by Gulf Union Insurance & Reinsurance Co. BSC(C), 
                providing reliable coverage for the Filipino community in Bahrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SmileCare Section */}
      {/* <section className="py-20 bg-gradient-to-b from-background to-healthcare-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Why Choose <span className="text-healthcare-green">SmileCare</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              We understand the unique needs of Filipino families living abroad and provide 
              comprehensive dental coverage that's both affordable and culturally sensitive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group text-center border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-healthcare-green transition-colors roboto-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed roboto-regular">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center text-sm text-healthcare-green">
                        <detail.icon className="w-4 h-4 mr-2" />
                        {detail.text}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mazaya Dental Centre: Service Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20">
              <Building2 className="w-4 h-4 mr-2" />
              Our Partner Clinic
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              <span className="text-healthcare-blue">Mazaya Dental Centre</span> Service Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              Established in 2024 by Mr. Neel Antony, Mazaya Dental Centre provides exceptional dental care with a focus on Filipino patients' needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Facilities */}
            <Card className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-healthcare-blue transition-colors roboto-bold">
                  Advanced Facilities
                </CardTitle>
                <Badge className="w-fit mx-auto bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
                  Modern Equipment
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {[
                    { name: "Located in Isa Town", icon: MapPin },
                    { name: "5+ advanced dental treatment rooms", icon: Stethoscope },
                    { name: "Internal CBCT and digital X-ray systems", icon: Eye },
                    { name: "Fully equipped dental laboratory", icon: Wrench }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <item.icon className="w-4 h-4 mr-3 text-healthcare-green flex-shrink-0" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Team */}
            <Card className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-healthcare-blue transition-colors roboto-bold">
                  Professional Team
                </CardTitle>
                <Badge className="w-fit mx-auto bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
                  Expert Care
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {[
                    { name: "10+ certified dental professionals", icon: Users },
                    { name: "Specialists in endodontics, orthodontics, and prosthetics", icon: Search },
                    { name: "Team includes Tagalog-speaking assistants", icon: MessageCircle },
                    { name: "Cultural sensitivity to Filipino patients", icon: Heart }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <item.icon className="w-4 h-4 mr-3 text-healthcare-green flex-shrink-0" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comprehensive Services */}
            <Card className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smile className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-healthcare-blue transition-colors roboto-bold">
                  Comprehensive Services
                </CardTitle>
                <Badge className="w-fit mx-auto bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
                  Full Care
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {[
                    { name: "General dentistry", icon: Stethoscope },
                    { name: "Root canal treatment", icon: Drill },
                    { name: "Orthodontics", icon: Target },
                    { name: "Aesthetic dentistry", icon: Smile },
                    { name: "Oral surgery", icon: Building2 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <item.icon className="w-4 h-4 mr-3 text-healthcare-green flex-shrink-0" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Challenges & Solution Section */}
      <section className="py-20 bg-gradient-to-b from-healthcare-gray/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20">
              <AlertCircle className="w-4 h-4 mr-2" />
              Current Challenges & Solution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Current <span className="text-healthcare-blue">Challenges</span> & <span className="text-healthcare-blue">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              Understanding the challenges Filipino residents face and how SmileCare provides the perfect solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Challenges */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-3xl font-bold text-red-600 mb-4 roboto-bold">Current Challenges</h3>
                <div className="w-16 h-1 bg-red-500 mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6">
                {/* Expensive Traditional Insurance */}
                <Card className="border-l-4 border-red-500 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Expensive Traditional Insurance</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Traditional dental insurance options in Bahrain are prohibitively expensive for many Filipino residents
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Limited Coverage */}
                <Card className="border-l-4 border-red-500 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Limited Coverage</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Many insurance plans offer insufficient coverage for comprehensive dental care needs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Economic Pressure */}
                <Card className="border-l-4 border-red-500 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Economic Pressure</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Filipinos face financial strain when seeking necessary dental treatments
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* SmileCare Solution */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-3xl font-bold text-healthcare-blue mb-4 roboto-bold">SmileCare Solution</h3>
                <div className="w-16 h-1 bg-healthcare-blue mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6">
                {/* Tailored Insurance */}
                <Card className="border-l-4 border-healthcare-blue shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-healthcare-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Heart className="w-6 h-6 text-healthcare-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Tailored Insurance</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Specifically designed for Filipino residents with customized coverage options
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Affordable Pricing */}
                <Card className="border-l-4 border-healthcare-blue shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-healthcare-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="w-6 h-6 text-healthcare-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Affordable Pricing</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Economical premium rates with comprehensive coverage at a low cost
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cultural Sensitivity */}
                <Card className="border-l-4 border-healthcare-blue shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-healthcare-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-healthcare-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Cultural Sensitivity</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Special attention to Filipino cultural needs and language support (Tagalog services)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quality Care at Home */}
                <Card className="border-l-4 border-healthcare-blue shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-healthcare-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Building2 className="w-6 h-6 text-healthcare-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 roboto-bold">Quality Care at Home</h4>
                        <p className="text-muted-foreground roboto-regular">
                          Access to quality dental care in their 'foreign home' without the additional financial burden
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer */}
        
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnerships
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              <span className="text-healthcare-blue">Strategic Partnerships</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed roboto-regular">
              Smile Care built on strategic partnerships with key organizations that share a commitment to providing quality dental care to Filipino residents in Bahrain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategicPartners.map((partner, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gray-50">
                  <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 ${partner.bgColor} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <partner.icon className={`w-8 h-8 ${partner.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 roboto-bold ${
                        partner.name.includes('Philippine Embassy') ? 'text-blue-800' :
                        partner.name.includes('Gulf Union') ? 'text-blue-800' :
                        partner.name.includes('Fakhro') ? 'text-green-800' :
                        'text-red-800'
                      }`}>
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground roboto-regular mb-4">
                        {partner.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {partner.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground roboto-regular">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground roboto-regular">
              SmileCare: Affordable Dental Insurance for Filipino Residents in Bahrain
            </p>
          </div>
        </div>
      </section>

      {/* Registration & Service Process Section */}
      <section className="py-20 bg-gradient-to-b from-healthcare-gray/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <Rocket className="w-4 h-4 mr-2" />
              Simple Registration & Service Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              <span className="text-healthcare-green">Simple Registration</span> & <span className="text-healthcare-blue">Service Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed roboto-regular">
              Easy steps to access quality dental care designed for Filipino residents in Bahrain
            </p>
          </div>
          
          {/* Registration Process */}
          <div className="mb-16">
          
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {registrationProcess.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group text-center border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 ${
                          index === 0 ? 'bg-blue-600' : 
                          index === 1 ? 'bg-green-600' : 
                          'bg-blue-600'
                        }`}>
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors roboto-bold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed roboto-regular text-sm flex-grow">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < registrationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Completed Registration */}
            <div className="flex justify-center mb-8">
              <Card className="bg-green-100 border border-green-200 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 roboto-bold">Completed Registration</h3>
                </CardContent>
              </Card>
            </div>
            
            {/* Eligibility Criteria */}
            <div className="mt-8 bg-blue-100 rounded-xl p-6 max-w-2xl mx-auto border border-blue-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4 roboto-bold text-center">Eligibility Criteria</h4>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700 roboto-medium">Valid CPR</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700 roboto-medium">Age between 18yrs to 60 yrs</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Process */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4 roboto-bold">
                Service Process
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceProcess.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group text-center border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors roboto-bold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed roboto-regular text-sm flex-grow">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Language Support Info */}
          <div className="mt-12 bg-gradient-to-r from-healthcare-green/10 to-healthcare-blue/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Info className="w-6 h-6 text-healthcare-blue mr-3" />
              <h3 className="text-xl font-bold text-foreground roboto-bold">Language Support</h3>
            </div>
            <p className="text-lg text-muted-foreground text-center roboto-regular">
              Service available in both <span className="font-semibold text-healthcare-blue">English</span> and <span className="font-semibold text-healthcare-green">Tagalog</span> languages to accommodate all Filipino members
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-healthcare-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Customer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              What Our <span className="text-healthcare-green">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              Real stories from Filipino families who trust SmileCare for their dental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white font-bold roboto-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-healthcare-green transition-colors roboto-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground roboto-regular flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-healthcare-green" />
                        {testimonial.location}
                      </p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-healthcare-green/20 text-4xl font-serif">"</div>
                    <p className="text-muted-foreground leading-relaxed italic roboto-regular pl-4">
                      {testimonial.text}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-healthcare-green/20 text-4xl font-serif">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Trust Indicators */}
          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-healthcare-green/10 to-healthcare-blue/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 roboto-bold">
                Trusted by the Filipino Community
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-healthcare-green mb-2 roboto-black">500+</div>
                  <p className="text-muted-foreground roboto-medium">Happy Filipino Families</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-healthcare-blue mb-2 roboto-black">4.9/5</div>
                  <p className="text-muted-foreground roboto-medium">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-healthcare-green mb-2 roboto-black">24/7</div>
                  <p className="text-muted-foreground roboto-medium">Customer Support</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Common <span className="text-healthcare-green">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              Everything you need to know about SmileCare dental insurance
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center roboto-bold">
                    <MessageCircle className="w-5 h-5 mr-3 text-healthcare-green" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8 roboto-regular">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-green to-healthcare-blue text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Users className="w-4 h-4 mr-2" />
            Join Our Community
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight roboto-black">
            Ready to Protect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">
              Family's Smile?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed roboto-regular">
            Join hundreds of Filipino families who trust SmileCare for their dental needs. 
            <span className="font-semibold roboto-medium"> Get started today and experience the difference.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-healthcare-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300" asChild>
              <a
                href="https://fakhroinsurance.com/special-payments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Your Registration
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-healthcare-green px-8 py-4 text-lg font-semibold backdrop-blur-sm" asChild>
              <Link to="/plans">
                <FileText className="w-5 h-5 mr-2" />
                Compare Plans
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-bold text-white mb-2 roboto-bold">Call Us</h3>
              <p className="text-white/80 text-sm roboto-regular">+973 1234 5678</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-bold text-white mb-2 roboto-bold">Visit Us</h3>
              <p className="text-white/80 text-sm roboto-regular">Manama, Bahrain</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-bold text-white mb-2 roboto-bold">Chat Support</h3>
              <p className="text-white/80 text-sm roboto-regular">24/7 Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;