import imgImg4599 from "figma:asset/8c3c9d5aec25af509f63b03ffb83991da09023c8.png";

interface CTASectionProps {
  onNavigateToComingSoon: () => void;
}

export default function CTASection({ onNavigateToComingSoon }: CTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#120b1e] to-[#0f1a2f] relative overflow-hidden">
      {/* Moon decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <img 
          src={imgImg4599} 
          alt="Luna" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Stars decoration */}
        <div className="absolute top-0 left-10 text-white/20 text-[40px]">✦</div>
        <div className="absolute top-20 right-20 text-white/20 text-[30px]">✦</div>
        <div className="absolute bottom-10 left-1/4 text-white/20 text-[25px]">✦</div>

        <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[56px] text-white tracking-[-1.68px] mb-6 px-4">
          Inizia il Tuo Viaggio di Apprendimento
        </h2>
        
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          Unisciti a migliaia di studenti che stanno già trasformando le loro notti in opportunità di crescita. Scarica Somnium oggi stesso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button onClick={onNavigateToComingSoon} className="bg-white text-[#120b1e] px-12 py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
            Scarica su iOS
          </button>
          <button onClick={onNavigateToComingSoon} className="bg-[#0470f9] hover:bg-[#0360d9] text-white px-12 py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl">
            Scarica su Android
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-white tracking-[-1.2px]">
              100%
            </div>
            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-white/70">
              Funzionante
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-white tracking-[-1.2px]">
              0
            </div>
            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-white/70">
              Pubblicità
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[40px] text-white tracking-[-1.2px]">
              24/7
            </div>
            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-white/70">
              Supporto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
