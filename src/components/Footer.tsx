import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hotel-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royal Lusaka Hotel</h3>
            <p className="text-white/80">Experience luxury and comfort in the heart of Zambia's capital</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-hotel-secondary transition-colors">Home</a></li>
              <li><a href="#amenities" className="hover:text-hotel-secondary transition-colors">Amenities</a></li>
              <li><a href="#rooms" className="hover:text-hotel-secondary transition-colors">Rooms</a></li>
              <li><a href="#contact" className="hover:text-hotel-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li>123 Independence Avenue</li>
              <li>Lusaka, Zambia</li>
              <li>+260 123 456 789</li>
              <li>info@royallusakahotel.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hotel-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-hotel-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-hotel-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Royal Lusaka Hotel. All rights reserved. Designed by <a href="https://craigsims.pages.dev"><u><strong>Craig Sims</strong></u></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;