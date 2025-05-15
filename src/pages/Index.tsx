
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Clock, Wrench, Users } from 'lucide-react';
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
          <Link to="/contact">
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
            <Link to="/contact">
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
