
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import logoAurenBlack from '../../assets/logo-auren-black.png';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoAurenBlack} 
                alt="AUREN" 
                className="h-6 w-auto"
              />
              <h3 className="text-xl font-central font-light tracking-wide">AUREN</h3>
            </div>
            <p className="mb-4 text-gray-300 font-light">ESN - Services Numériques</p>
            <p className="text-sm text-gray-300 font-light">
              Votre réussite, notre obsession. Nous transformons votre vision métier en réalité opérationnelle 
              avec des solutions technologiques sur mesure.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300 transition-colors font-light">Accueil</Link></li>
              <li><Link to="/prestations" className="hover:text-gray-300 transition-colors font-light">Prestations</Link></li>
              <li><Link to="/packs" className="hover:text-gray-300 transition-colors font-light">Packs / Formules</Link></li>
              <li><Link to="/apropos" className="hover:text-gray-300 transition-colors font-light">À propos</Link></li>
              <li><Link to="/contact-form" className="hover:text-gray-300 transition-colors font-light">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <Link to="/contact-form" className="hover:text-gray-300 transition-colors font-light">
                  Formulaire de contact
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a 
                  href="https://www.linkedin.com/in/ihebc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors font-light"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p className="font-light">&copy; {new Date().getFullYear()} AUREN - ESN Services Numériques. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
