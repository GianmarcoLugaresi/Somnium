import imgImmaginePng6SenzaSfondo1 from "figma:asset/782ca1a0148f8675d5398f877fc59f0a13556baa.png";

interface HeroSectionProps {
  onNavigateToComingSoon: () => void;
}

export default function HeroSection({ onNavigateToComingSoon }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f2f2f2] to-white pt-20 pb-12 sm:pb-0 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#0470f9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#0470f9]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="inline-block bg-[#0470f9]/10 text-[#0470f9] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-sm sm:text-base">
            🌙 Apprendimento Durante il Sonno
          </div>
          
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[36px] sm:text-[48px] lg:text-[64px] leading-tight text-black tracking-[-2px]">
            Impara Nuove Parole Mentre Dormi
          </h1>
          
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed">
            Somnium utilizza tecniche scientificamente provate per aiutarti ad apprendere nuove parole e frasi mentre riposi. Trasforma il tuo sonno in un'opportunità di crescita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={onNavigateToComingSoon} className="bg-[#0470f9] hover:bg-[#0360d9] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl">
              Scarica Gratis
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white border-2 border-black text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95"
            >
              Scopri di Più
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12 pt-6 md:pt-8 justify-center md:justify-start">
            <div>
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[36px] lg:text-[40px] text-[#0470f9] tracking-[-1.2px]">
                10K+
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-sm sm:text-base">
                Suoni Disponibili
              </div>
            </div>
            <div>
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[36px] lg:text-[40px] text-[#0470f9] tracking-[-1.2px]">
                20+
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-sm sm:text-base">
                Parole giornaliere
              </div>
            </div>
            <div>
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[36px] lg:text-[40px] text-[#0470f9] tracking-[-1.2px]">
                24 h
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-sm sm:text-base">
                Apprendimento Continuo
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative order-first md:order-last">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Floating pillow with rotation */}
            <div className="absolute transform rotate-12 animate-float">
              <img 
                src={imgImmaginePng6SenzaSfondo1} 
                alt="Cuscino Somnium" 
                className="w-[280px] sm:w-[380px] lg:w-[500px] h-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 sm:top-20 right-4 sm:right-20 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float-delayed">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0470f9] to-[#0360d9] rounded-full flex items-center justify-center text-white font-bold text-[13px] sm:text-[15px]">
                  85%
                </div>
                <div className="text-xs sm:text-sm font-['Plus_Jakarta_Sans:Bold',sans-serif]">
                  Apprendimento<br/>Migliorato
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 sm:bottom-32 left-0 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float-slow">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-[24px] sm:text-[32px]">🔥</div>
                <div className="text-xs sm:text-sm font-['Plus_Jakarta_Sans:Bold',sans-serif]">
                  Streak di <br/>utilizzi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
