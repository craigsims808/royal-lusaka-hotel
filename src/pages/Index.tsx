import { MapPin, Phone, Mail, BedDouble, Wifi, Coffee, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen" id="home">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <div className="text-white max-w-2xl animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Royal Lusaka Hotel</h1>
            <p className="text-xl mb-8">Experience luxury and comfort in the heart of Zambia's capital</p>
            <Button className="bg-hotel-primary hover:bg-hotel-primary/90 text-white px-8 py-6 text-lg">
              Book Your Stay
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-hotel-light" id="amenities">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-hotel-text">Our Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BedDouble, title: "Luxury Rooms", desc: "Spacious and comfortable" },
              { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet" },
              { icon: Coffee, title: "Breakfast", desc: "Continental & local cuisine" },
              { icon: UtensilsCrossed, title: "Restaurant", desc: "Fine dining experience" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <feature.icon className="w-12 h-12 text-hotel-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="py-20" id="rooms">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-hotel-text">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Room",
                price: "$200",
                image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Executive Suite",
                price: "$350",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Presidential Suite",
                price: "$500",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((room, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">{room.title}</h3>
                  <p className="text-white/90">from {room.price} per night</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-hotel-secondary py-20" id="contact">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-hotel-text">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-hotel-primary mr-4" />
                    <p>123 Independence Avenue, Lusaka, Zambia</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-hotel-primary mr-4" />
                    <p>+260 123 456 789</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-hotel-primary mr-4" />
                    <p>info@royallusakahotel.com</p>
                  </div>
                </div>
              </div>
              <div>
                <Button className="w-full bg-hotel-primary hover:bg-hotel-primary/90 text-white py-6 text-lg">
                  Make a Reservation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
