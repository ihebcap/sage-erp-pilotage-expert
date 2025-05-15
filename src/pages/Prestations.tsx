
import { Database, BarChart, Workflow, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Prestations = () => {
  return (
    <div className="bg-brand-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Mes Prestations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions personnalisées pour répondre à vos besoins spécifiques en matière d'ERP, de reporting et d'automatisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ERP Service */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Database className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Gestion ERP</CardTitle>
                  <CardDescription className="text-gray-500">Paramétrage et optimisation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Paramétrage complet de Sage 100 Gestion Commerciale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Configuration de Sage 100 Comptabilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Personnalisation des écrans et des processus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Audit et optimisation des systèmes existants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Migration et mise à jour des environnements Sage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Reporting Service */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <BarChart className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Tableaux de bord</CardTitle>
                  <CardDescription className="text-gray-500">Reporting et analyse de données</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Création de tableaux de bord Power BI personnalisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Analyse des données commerciales et financières</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Mise en place d'indicateurs de performance (KPI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Reporting automatisé pour la direction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Tableaux de suivi d'activité et de productivité</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Automation Service */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Workflow className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Automatisation</CardTitle>
                  <CardDescription className="text-gray-500">Fluidité des processus</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Automatisation des flux de travail avec n8n</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Intégration des différents systèmes d'information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Synchronisation des données inter-applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Création de routines automatisées pour tâches répétitives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Alertes et notifications personnalisées</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Training Service */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Formation</CardTitle>
                  <CardDescription className="text-gray-500">Autonomie et maîtrise</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Formation sur Sage 100 Gestion commerciale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Formation sur Sage 100 Comptabilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Supports de formation personnalisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Accompagnement à la prise en main</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Formation continue et mise à niveau</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-brand-dark-blue text-white rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Une approche différente</h3>
          <p className="mb-6">
            Mon approche est simple : du concret, du résultat, et du support réactif.
            Je travaille en proximité avec vos équipes pour garantir des solutions qui fonctionnent vraiment.
          </p>
          <a href="/contact" className="inline-block bg-brand-blue hover:bg-brand-blue/90 text-white py-2 px-6 rounded-md transition-colors">
            Discuter de votre projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prestations;
