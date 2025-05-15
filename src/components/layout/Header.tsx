
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Package, User, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Accueil", icon: Home, path: "/" },
    { name: "Prestations", icon: Briefcase, path: "/prestations" },
    { name: "Packs / Formules", icon: Package, path: "/packs" },
    { name: "À propos", icon: User, path: "/apropos" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  return (
    <header className="bg-brand-dark-blue text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Iheb Chafai</Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="flex items-center gap-2 hover:text-brand-blue transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-3 px-4 bg-brand-dark-blue border border-gray-700 rounded-lg">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
