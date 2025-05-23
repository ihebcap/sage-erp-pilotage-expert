import { Link } from 'react-router-dom';
import { ChevronRight, Award, Clock, Wrench, Users, Phone, Clipboard, Check, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Expert ERP Sage 100 pour votre entreprise
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Je vous accompagne dans la mise en place, l'optimisation et le pilotage de votre ERP Sage 100.
          </p>
          <Link to="/contact-form">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              Contactez-moi
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Trust Me */}
      <section className="py-16 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi me faire confiance</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 border-t-brand-blue">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Plus de 15 ans d'expertise</h3>
                  <p className="text-gray-600">Une expérience solide dans l'écosystème Sage 100</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-brand-blue">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Gain de temps</h3>
                  <p className="text-gray-600">Des solutions efficaces pour optimiser vos processus</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-brand-blue">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Wrench className="h-12 w-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Solutions adaptées</h3>
                  <p className="text-gray-600">Des prestations personnalisées selon vos besoins</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-brand-blue">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-brand-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Support réactif</h3>
                  <p className="text-gray-600">Un accompagnement constant et une grande disponibilité</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Business Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solutions Métier Sur-Mesure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agilité, Simplicité, Zéro Licence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-light-gray to-white rounded-lg p-6 shadow-md mb-10">
            <p className="mb-6">
              En complément de mes prestations autour de Sage 100, je propose désormais la création de micro-solutions sur mesure pour les TPE et PME qui souhaitent combler un besoin spécifique non couvert par leur système actuel.
            </p>
            
            <p className="mb-6 font-medium flex items-start">
              <span className="bg-brand-blue text-white p-1 rounded-full mr-2 flex-shrink-0">
                <Wrench className="h-4 w-4" />
              </span>
              <span>
                <strong>Objectif :</strong> vous fournir rapidement un outil simple, utile et parfaitement adapté à votre fonctionnement, sans complexité technique ni surcoût logiciel.
              </span>
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8">Exemples de solutions proposées</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Phone className="h-10 w-10 text-brand-blue mb-4" />
                  <h4 className="font-bold text-lg mb-2">Mini CRM ou outil de relance commerciale</h4>
                  <p className="text-gray-600">Gestion simplifiée de votre portefeuille clients</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Clipboard className="h-10 w-10 text-brand-blue mb-4" />
                  <h4 className="font-bold text-lg mb-2">Portail de gestion documentaire</h4>
                  <p className="text-gray-600">Devis, factures, livraisons... tout centralisé</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Check className="h-10 w-10 text-brand-blue mb-4" />
                  <h4 className="font-bold text-lg mb-2">Formulaires personnalisés</h4>
                  <p className="text-gray-600">Congés, notes de frais, demandes internes...</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BarChart className="h-10 w-10 text-brand-blue mb-4" />
                  <h4 className="font-bold text-lg mb-2">Tableaux de bord dynamiques</h4>
                  <p className="text-gray-600">Visualisez et analysez vos données facilement</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="bg-brand-light-gray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center text-brand-dark-blue">
                <span className="bg-brand-blue text-white p-1 rounded-full mr-2">
                  <Wrench className="h-5 w-5" />
                </span>
                Comment ?
              </h3>
              <p className="text-gray-700">
                Je conçois des applications légères via des plateformes visuelles, avec une base de données simple, et j'y ajoute des automatismes pour fluidifier vos processus : notifications, mails automatiques, mises à jour, synchronisations...
              </p>
              <p className="mt-4 text-gray-700">
                <strong>Sans licences logicielles</strong> à payer dans la majorité des cas : vous ne payez que la mise en place de la solution, à un tarif raisonné et transparent.
              </p>
            </div>
            
            <div className="bg-brand-light-gray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center text-brand-dark-blue">
                <span className="bg-brand-blue text-white p-1 rounded-full mr-2">
                  <Users className="h-5 w-5" />
                </span>
                Pour qui ?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Entrepreneurs et dirigeants qui veulent un outil métier ciblé, sans refondre tout leur système</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Services opérationnels qui ont besoin d'une solution rapide pour gagner en efficacité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Structures agiles cherchant à tester ou valider une idée avant un projet plus ambitieux</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact-form">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                Discuter de votre besoin
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à optimiser votre ERP ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Formation, reporting, automatisation : tout est pensé pour vous faire gagner du temps et de la clarté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prestations">
              <Button className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white">
                Voir mes prestations
              </Button>
            </Link>
            <Link to="/contact-form">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                Discuter de votre projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
