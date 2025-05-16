
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Expert ERP Sage 100</h3>
            <p className="mb-4 text-gray-300">Consultant ERP Sage 100 indépendant</p>
            <p className="text-sm text-gray-300">
              Une approche centrée sur la praticité, la réactivité et la personnalisation,
              pour des solutions qui s'adaptent réellement aux besoins des PME.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link></li>
              <li><Link to="/prestations" className="hover:text-brand-blue transition-colors">Prestations</Link></li>
              <li><Link to="/packs" className="hover:text-brand-blue transition-colors">Packs / Formules</Link></li>
              <li><Link to="/apropos" className="hover:text-brand-blue transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@exemple.com" className="hover:text-brand-blue transition-colors">
                  contact@exemple.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+0000000000" className="hover:text-brand-blue transition-colors">
                  +00 00 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Expert ERP Sage 100 - Consultant indépendant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
