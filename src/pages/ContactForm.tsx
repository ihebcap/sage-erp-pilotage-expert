
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    need: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, need: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Utiliser FormSubmit.co pour l'envoi du formulaire
      const response = await fetch('https://formsubmit.co/chafai.iheb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nouveau message du site: ${formData.need}`,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          city: '',
          need: '',
          description: ''
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Formulaire de contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet ? Une question ? Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom et prénom *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Société *</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Votre ville"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="need">Besoin *</Label>
                  <Select value={formData.need} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez votre besoin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Gestion Commerciale">Gestion Commerciale</SelectItem>
                        <SelectItem value="Comptabilité">Comptabilité</SelectItem>
                        <SelectItem value="Formation">Formation</SelectItem>
                        <SelectItem value="Reporting">Reporting</SelectItem>
                        <SelectItem value="Automatisation">Automatisation</SelectItem>
                        <SelectItem value="Assistance">Assistance</SelectItem>
                        <SelectItem value="Autre">Autre</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description du besoin *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={6}
                    className="resize-none"
                    placeholder="Détaillez votre projet ou votre besoin..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
