import imgImmaginePng6SenzaSfondo1 from "figma:asset/782ca1a0148f8675d5398f877fc59f0a13556baa.png";
import { Apple, Play, Rocket, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';
import { sendNewsletterEmail } from '../services/emailService';

interface ComingSoonPageProps {
  onBackHome: () => void;
}

export default function ComingSoonPage({ onBackHome }: ComingSoonPageProps) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Inserisci un indirizzo email valido');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Invio reale della email tramite EmailJS
      const success = await sendNewsletterEmail({
        userEmail: email,
      });

      if (success) {
        toast.success('Iscrizione completata! Benvenuto in Somnium 🚀');
        setEmail('');
        setIsNewsletterOpen(false);
      } else {
        toast.error('Errore durante l\'iscrizione. Riprova più tardi.');
      }
      
    } catch (error: any) {
      console.error('Errore invio newsletter:', error);
      
      // Messaggio di errore specifico se EmailJS non è configurato
      if (error?.message?.includes('non configurato')) {
        toast.error('⚠️ EmailJS non configurato. Segui le istruzioni in /SETUP_EMAILJS.md', {
          duration: 5000,
        });
      } else if (error?.text?.includes('Public Key')) {
        toast.error('🔑 Public Key non valida. Verifica le credenziali EmailJS.', {
          duration: 5000,
        });
      } else if (error?.text?.includes('Service ID')) {
        toast.error('🔧 Service ID non valido. Verifica le credenziali EmailJS.', {
          duration: 5000,
        });
      } else if (error?.text?.includes('Template')) {
        toast.error('📧 Template ID non valido. Verifica le credenziali EmailJS.', {
          duration: 5000,
        });
      } else {
        toast.error('Errore durante l\'iscrizione. Controlla la console per i dettagli.', {
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#120b1e] via-[#1a1029] to-[#0470f9]/20 flex items-center justify-center overflow-hidden relative py-12 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0470f9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0470f9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Logo/Image */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 animate-float mt-4 sm:mt-8">
            <Rocket 
              className="w-full h-full text-[#0470f9] drop-shadow-2xl"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[36px] sm:text-[52px] lg:text-[72px] text-white mb-4 sm:mb-6 tracking-[-2.16px] leading-tight px-4">
          In Arrivo Presto
        </h1>

        {/* Badge */}
        <div className="inline-block bg-[#0470f9]/20 border border-[#0470f9] text-[#0470f9] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          🚀 Disponibile su tutte le piattaforme
        </div>

        {/* Description */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[20px] lg:text-[24px] text-[#f2f2f2]/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 text-[rgb(255,255,255)] font-bold font-normal px-4">
          Somnium sta per arrivare su iOS, Android e Web. Preparati a trasformare il tuo sonno in un'opportunità di apprendimento.
        </p>

        {/* Platform Icons */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-12 sm:mb-16 px-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[24px] sm:text-[28px] lg:text-[32px]">iOS</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[24px] sm:text-[28px] lg:text-[32px]">Android</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 px-4">
          <button 
            onClick={() => setIsNewsletterOpen(true)}
            className="bg-[#0470f9] hover:bg-[#0360d9] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap"
          >
            Iscriviti alla Newsletter
          </button>
          <button 
            onClick={onBackHome}
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95 hover:bg-white/20 whitespace-nowrap"
          >
            Torna alla Home
          </button>
        </div>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-12 sm:mb-16 px-4">
          <div className="flex justify-between mb-2 text-sm sm:text-base">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#f2f2f2]/60">Sviluppo in corso</span>
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[#0470f9]">75%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0470f9] to-[#0360d9] w-3/4 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Newsletter Dialog */}
      <Dialog open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen}>
        <DialogContent className="sm:max-w-md w-[calc(100%-2rem)] bg-gradient-to-br from-[#120b1e] to-[#0470f9]/30 border-2 border-[#0470f9] p-0 overflow-hidden max-h-[90vh] overflow-y-auto [&>button]:hidden">
          <DialogTitle className="sr-only">Iscriviti alla Newsletter Somnium</DialogTitle>
          <DialogDescription className="sr-only">
            Inserisci il tuo indirizzo email per ricevere aggiornamenti sul lancio di Somnium
          </DialogDescription>
          <div className="relative">
            {/* Header con gradiente */}
            <div className="bg-gradient-to-r from-[#0470f9] to-[#0360d9] p-6 sm:p-8 text-center relative">
              <button
                onClick={() => setIsNewsletterOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-3 sm:mb-4">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-2">
                Newsletter Somnium
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/90 text-sm sm:text-base">
                Resta aggiornato sul lancio
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleNewsletterSubmit} className="p-6 sm:p-8 bg-[#120b1e]">
              <div className="mb-6">
                <label className="block font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white mb-3 text-sm sm:text-base">
                  Il tuo indirizzo email
                </label>
                <Input
                  type="email"
                  placeholder="nome@esempio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-[#0470f9] focus:ring-[#0470f9] rounded-xl h-12 sm:h-14"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0470f9] hover:bg-[#0360d9] text-white py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Invio in corso...
                  </span>
                ) : (
                  'Iscriviti Ora'
                )}
              </button>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/60 text-center mt-4 text-[13px] sm:text-[14px]">
                Riceverai aggiornamenti esclusivi sul lancio di Somnium
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
