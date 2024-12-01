import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-hotel-primary">Royal Lusaka Hotel</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-hotel-text hover:text-hotel-primary transition-colors">Home</a>
            <a href="#amenities" className="text-hotel-text hover:text-hotel-primary transition-colors">Amenities</a>
            <a href="#rooms" className="text-hotel-text hover:text-hotel-primary transition-colors">Rooms</a>
            <a href="#contact" className="text-hotel-text hover:text-hotel-primary transition-colors">Contact</a>
            <Button className="bg-hotel-primary hover:bg-hotel-primary/90">Book Now</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;