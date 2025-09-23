import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-healthcare-gray-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">SmileCare</span>
            </div>
            <p className="text-gray-300 mb-4">
              Affordable dental insurance designed exclusively for Filipino residents in Bahrain.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-healthcare-blue-light" />
                <span className="text-gray-300">contact@smilecare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-healthcare-blue-light" />
                <span className="text-gray-300">+973 39999457</span>
              </div>
              <div className="text-gray-300 text-sm">
                <p>Customer Service: Sat–Thu, 10 AM – 9 PM</p>
                <p>Houras Consultancy: Sun–Thu, 10 AM – 7 PM</p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <div className="space-y-3">
              <a
                href="https://fakhroinsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-healthcare-blue-light hover:text-healthcare-blue transition-colors"
              >
                <span>Fakhro Insurance Services</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-gray-300 text-sm">
                Gulf Union Insurance
              </p>
              <p className="text-gray-300 text-sm">
                Mazaya Dental Centre, Isa Town
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 SmileCare. All rights reserved. Protecting smiles across Bahrain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;