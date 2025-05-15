
import { CheckCircle, Package } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PackFeature = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mb-3">
    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
    <span>{children}</span>
  </div>
);

const Packs = () => {
  return (
    <div className="bg-brand-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Packs & Formules</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes et clés en main pour répondre à vos différents besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pack Starter Sage Gestion Commerciale 100c */}
          <Card className="bg-white shadow-lg flex flex-col">
            <CardHeader className="pb-0">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-brand-blue" />
              </div>
              <CardTitle className="text-center text-2xl">Pack Starter Sage Gestion Commerciale 100c</CardTitle>
              <p className="text-center text-gray-500 mt-2">Démarrez avec la gestion commerciale</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mt-6 space-y-4">
                <PackFeature>Paramétrage complet de la gestion commerciale</PackFeature>
                <PackFeature>Formation des utilisateurs</PackFeature>
                <PackFeature>Support réactif via WhatsApp</PackFeature>
                <PackFeature>Configuration des documents de vente</PackFeature>
                <PackFeature>Paramétrage de la gestion des stocks</PackFeature>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Me contacter
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pack Starter Sage Comptabilité 100c */}
          <Card className="bg-white shadow-lg flex flex-col">
            <CardHeader className="pb-0">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-brand-blue" />
              </div>
              <CardTitle className="text-center text-2xl">Pack Starter Sage Comptabilité 100c</CardTitle>
              <p className="text-center text-gray-500 mt-2">Optimisez votre comptabilité</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mt-6 space-y-4">
                <PackFeature>Paramétrage de la comptabilité Sage</PackFeature>
                <PackFeature>Formation des utilisateurs</PackFeature>
                <PackFeature>Support personnalisé</PackFeature>
                <PackFeature>Configuration du plan comptable</PackFeature>
                <PackFeature>Mise en place des règles de saisie</PackFeature>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Me contacter
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pack Formation Full */}
          <Card className="bg-white shadow-lg flex flex-col">
            <CardHeader className="pb-0">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-brand-blue" />
              </div>
              <CardTitle className="text-center text-2xl">Pack Formation Full</CardTitle>
              <p className="text-center text-gray-500 mt-2">Formation complète et approfondie</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mt-6 space-y-4">
                <PackFeature>Programme complet Sage Gestion Commerciale 100c et Sage Comptabilité 100c</PackFeature>
                <PackFeature>Supports de formation fournis</PackFeature>
                <PackFeature>Sessions personnalisées</PackFeature>
                <PackFeature>Exercices pratiques adaptés à votre activité</PackFeature>
                <PackFeature>Suivi post-formation</PackFeature>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Me contacter
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Services optionnels</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border rounded-lg p-4 text-center hover:border-brand-blue hover:shadow-md transition-all">
              <h3 className="font-semibold mb-2">Tableaux de bord Power BI</h3>
              <p className="text-sm text-gray-600">Visualisez clairement vos données métier</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center hover:border-brand-blue hover:shadow-md transition-all">
              <h3 className="font-semibold mb-2">Automatisation n8n</h3>
              <p className="text-sm text-gray-600">Simplifiez vos processus métier</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center hover:border-brand-blue hover:shadow-md transition-all">
              <h3 className="font-semibold mb-2">AMOA</h3>
              <p className="text-sm text-gray-600">Accompagnement de projet sur mesure</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center hover:border-brand-blue hover:shadow-md transition-all">
              <h3 className="font-semibold mb-2">Coaching Projet</h3>
              <p className="text-sm text-gray-600">Méthodologie et bonnes pratiques</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Contrats de support mensuel</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Formule Essentielle</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Assistance par email</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Support technique limité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Délai de réponse sous 24h</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-white shadow-lg border-brand-blue">
              <CardHeader>
                <CardTitle className="text-xl text-center">Formule Sérénité</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Support par email et téléphone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Sessions visio mensuelles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Assistance WhatsApp prioritaire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Délai de réponse sous 8h</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Formule Illimitée raisonnée</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Support multi-canal illimité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Sessions visio hebdomadaires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Assistance WhatsApp 7j/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Délai de réponse sous 4h</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                    <span>Interventions d'urgence</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                    En savoir plus
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packs;
