import imgImmaginePng51 from "figma:asset/cbd1c65a7862bf4bc5c093eae19fa4c90fa95803.png";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Scrivi le tue parole chiavi ",
      description: "Scrivi oltre 20 parole al giorno per massimizzare lo studio giornaliero"
    },
    {
      number: "02",
      title: "Studia Durante il Giorno",
      description: "Usa le modalità Impara e Ripassa per ricordare a cosa sono associate le parole."
    },
    {
      number: "03",
      title: "Attiva la Modalità Notte",
      description: "Prima di dormire, avvia la sessione notturna. L'app riprodurrà i suoni a volume minimo."
    },
    {
      number: "04",
      title: "Dormi ed Impara",
      description: "Durante il sonno, il tuo cervello consoliderà naturalmente le informazioni apprese."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-10 pointer-events-none">
        <img 
          src={imgImmaginePng51} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#0470f9]/10 text-[#0470f9] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-4 text-sm sm:text-base">
            Come Funziona
          </div>
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[56px] text-black tracking-[-1.68px] mb-4 sm:mb-6 px-4">
            Semplice e Scientifico
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto px-4">
            Il nostro metodo combina apprendimento attivo e passivo per massimizzare i risultati in tempi brevi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 sm:gap-y-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-4 sm:gap-6 group">
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0470f9] to-[#0360d9] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] sm:text-[28px] text-white tracking-[-0.84px]">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 sm:pt-2">
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] sm:text-[24px] lg:text-[28px] text-black mb-2 sm:mb-3 tracking-[-0.84px]">
                  {step.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (not on last two items) */}
              {index < steps.length - 2 && index % 2 === 0 && (
                <div className="absolute top-20 sm:top-24 left-8 sm:left-10 w-px h-12 sm:h-16 bg-gradient-to-b from-[#0470f9] to-transparent opacity-30 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Science Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-[#0470f9] to-[#0360d9] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[40px] mb-4 sm:mb-6 tracking-[-1.2px]">
                Basato sulla Scienza
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-6 text-white/90">
                Numerosi studi sul TMR dimostrano che l'esposizione a stimoli audio associati a parole durante il sonno può migliorare il consolidamento di esse. Somnium utilizza queste scoperte per ottimizzare il tuo apprendimento.
              </p>
              <div className="flex gap-6 sm:gap-8">
                <div>
                  <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[36px] sm:text-[42px] lg:text-[48px] tracking-[-1.44px]">
                    85%
                  </div>
                  <div className="text-white/80 text-sm sm:text-base">
                    Ritenzione<br/>Migliorata
                  </div>
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[36px] sm:text-[42px] lg:text-[48px] tracking-[-1.44px]">
                    2x
                  </div>
                  <div className="text-white/80 text-sm sm:text-base">
                    Velocità di<br/>Apprendimento
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] hidden md:block">
              <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[60px] sm:text-[70px] lg:text-[80px] mb-4">🧠</div>
                  <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] sm:text-[22px] lg:text-[24px]">
                    Apprendimento Ottimizzato
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
