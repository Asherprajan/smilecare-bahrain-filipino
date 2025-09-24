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

  const processSteps = [
    {
      step: "01",
      title: "Choose Your Plan",
      description: "Select from our flexible dental insurance plans designed for Filipino families",
      icon: Target,
      subIcon: CreditCard,
      color: "healthcare-blue"
    },
    {
      step: "02", 
      title: "Complete Registration",
      description: "Fill out our simple online form with your family details and preferences",
      icon: FileText,
      subIcon: UserCheck,
      color: "healthcare-green"
    },
    {
      step: "03",
      title: "Get Approved",
      description: "Receive instant approval and your insurance card within 24 hours",
      icon: ShieldCheck,
      subIcon: Clock,
      color: "healthcare-blue-light"
    },
    {
      step: "04",
      title: "Start Treatment",
      description: "Visit any of our partner dental clinics and start your dental care journey",
      icon: Heart,
      subIcon: Stethoscope,
      color: "healthcare-green-light"
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
      <section className="relative bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray text-white py-24 lg:py-40 overflow-hidden">
        {/* Layered background overlays */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Animated floating shapes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-healthcare-green/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-healthcare-blue/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full blur-md animate-float-reverse"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Main Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 inline-flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 500+ Filipino Families
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg roboto-black">
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healthcare-green-light to-white">
                    SmileCare Dental Insurance
                  </span>
                </span>
                <span className="block text-white/90 roboto-medium">
                  For Filipinos in Bahrain
                </span>
          </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 text-gray-100/90 leading-relaxed roboto-regular">
                World-class dental coverage, <span className="text-healthcare-green-light font-semibold roboto-medium">affordable</span> and <span className="text-healthcare-blue-light font-semibold roboto-medium">culturally sensitive</span>—designed for Filipino families abroad.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button
                  size="lg"
                  className="bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://fakhroinsurance.com/special-payments/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Today
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
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
            {/* Right: Quick Stats Card */}
            <div className="flex-1 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">BD 14</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Starting price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">24h</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Activation time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">100%</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Preventive care</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-healthcare-green-light drop-shadow roboto-black">30+</div>
                  <div className="text-xs text-gray-200 mt-1 roboto-regular">Years experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SmileCare Section */}
      <section className="py-20 bg-gradient-to-b from-background to-healthcare-gray/30">
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
      </section>

      {/* Coverage Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20">
              <Shield className="w-4 h-4 mr-2" />
              Coverage Details
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Comprehensive <span className="text-healthcare-blue">Dental Coverage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto roboto-regular">
              From preventive care to major procedures, we've got your dental health covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageDetails.map((coverage, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <coverage.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-healthcare-blue transition-colors roboto-bold">
                    {coverage.category}
                  </CardTitle>
                  <Badge className="w-fit mx-auto bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
                    {coverage.coverage}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {coverage.treatments.map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="flex items-center text-sm text-muted-foreground">
                        <treatment.icon className="w-4 h-4 mr-3 text-healthcare-green flex-shrink-0" />
                        {treatment.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-healthcare-gray/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <Rocket className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Get Started in <span className="text-healthcare-green">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto roboto-regular">
              Our streamlined process makes getting dental insurance quick and easy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group text-center border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-healthcare-green rounded-full flex items-center justify-center">
                        <step.subIcon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-healthcare-blue mb-4 group-hover:text-healthcare-green transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-healthcare-green transition-colors roboto-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed roboto-regular">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-healthcare-blue to-healthcare-green transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Customer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              What Our <span className="text-healthcare-green">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto roboto-regular">
              Real stories from Filipino families who trust SmileCare for their dental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-foreground roboto-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground roboto-regular">{testimonial.location}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic roboto-regular">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 roboto-bold">
              Trusted by the <span className="text-white/90">Community</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto roboto-regular">
              Join hundreds of Filipino families who have chosen SmileCare for their dental insurance needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-large bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 roboto-black">
                    {stat.number}
                  </div>
                  <p className="text-white/80 font-medium text-sm leading-tight roboto-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-healthcare-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20">
              <Handshake className="w-4 h-4 mr-2" />
              Trusted Partners
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              Backed by <span className="text-healthcare-blue">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto roboto-regular">
              We partner with the most trusted names in insurance and healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="group text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-healthcare-blue transition-colors roboto-bold">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground roboto-regular">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <p className="text-xl text-muted-foreground roboto-regular">
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