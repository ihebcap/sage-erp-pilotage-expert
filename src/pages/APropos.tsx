
import { CircleCheck, Trophy, Book, Users } from 'lucide-react';

const APropos = () => {
  return (
    <div className="bg-brand-light-gray py-12">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">À propos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultant ERP spécialisé sur Sage 100, avec plus de 15 ans d'expérience 
            au service des PME.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Expert ERP Sage 100</h2>
            <p className="mb-4 text-gray-700">
              Je suis consultant ERP, expert sur Sage 100 (modules gestion commerciale et comptabilité), 
              avec plus de 15 ans d'expérience dans le domaine.
            </p>
            <p className="mb-4 text-gray-700">
              Mon parcours m'a permis de travailler avec différentes tailles d'entreprises et secteurs d'activité, 
              m'offrant une vision à 360° des problématiques métier et des moyens d'y répondre efficacement.
            </p>
            <p className="mb-4 text-gray-700">
              J'accompagne les entreprises dans le paramétrage de leur ERP, la formation des utilisateurs, 
              la mise en place de tableaux de bord de pilotage, et l'automatisation des processus à l'aide 
              d'outils comme n8n.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Ma valeur ajoutée</h3>
            <ul className="space-y-6">
              <li className="flex">
                <div className="mr-4">
                  <CircleCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Expertise technique pointue</h4>
                  <p className="text-gray-600 text-sm">
                    Maîtrise approfondie de Sage 100 et de son écosystème.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <Trophy className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Solutions pragmatiques</h4>
                  <p className="text-gray-600 text-sm">
                    Des recommandations orientées résultats, adaptées à votre contexte.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <Book className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Pédagogie et formation</h4>
                  <p className="text-gray-600 text-sm">
                    Capacité à transmettre les connaissances de façon simple et efficace.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Relation de confiance</h4>
                  <p className="text-gray-600 text-sm">
                    Écoute, disponibilité et transparence dans tous les échanges.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ma méthodologie</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-blue/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="font-bold mb-2">Analyse</h3>
              <p className="text-sm text-gray-600">
                Compréhension approfondie de vos besoins et contraintes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-blue/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue">2</span>
              </div>
              <h3 className="font-bold mb-2">Proposition</h3>
              <p className="text-sm text-gray-600">
                Solutions adaptées à votre contexte métier et technique
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-blue/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="font-bold mb-2">Mise en œuvre</h3>
              <p className="text-sm text-gray-600">
                Déploiement méthodique et pragmatique des solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-blue/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue">4</span>
              </div>
              <h3 className="font-bold mb-2">Accompagnement</h3>
              <p className="text-sm text-gray-600">
                Suivi et support continu pour garantir la pérennité
              </p>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Mon approche</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Mon approche est centrée sur la praticité, la réactivité et la personnalisation, 
            pour des solutions qui s'adaptent réellement aux besoins des PME.
          </p>
          
          <a href="/contact-form" className="inline-block bg-brand-blue hover:bg-brand-blue/90 text-white py-3 px-8 rounded-md transition-colors">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default APropos;
