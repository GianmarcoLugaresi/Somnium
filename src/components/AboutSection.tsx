import imgImmaginePng6SenzaSfondo1 from "figma:asset/782ca1a0148f8675d5398f877fc59f0a13556baa.png";
import { Clock, Moon, Sparkles, GraduationCap, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f2f2f2] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#0470f9]/10 text-[#0470f9] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-4 text-sm sm:text-base">
            La Nostra Storia
          </div>
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[56px] text-black tracking-[-1.68px] mb-4 sm:mb-6 px-4">
            Chi Siamo
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto px-4">
            Un'App nata dall'ambizione di ottimizzare ogni momento della giornata, compresa la notte.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left - Image/Logo */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0470f9]/20 to-[#120b1e]/20 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#0470f9] to-[#120b1e] rounded-2xl sm:rounded-3xl shadow-xl h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full blur-3xl"></div>
              </div>
              <Target className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-white relative z-10" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right - Mission */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-black tracking-[-1.2px]">
              La Nostra Missione
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
              In Somnium crediamo che ogni momento della giornata sia prezioso e possa essere ottimizzato. 
              Anche le ore di sonno rappresentano un'opportunità unica per migliorare le proprie competenze 
              linguistiche attraverso tecniche innovative di apprendimento.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
              La nostra tecnologia sfrutta i principi della neuroscienza e dell'apprendimento durante il sonno 
              per aiutarti a raggiungere i tuoi obiettivi linguistici in modo naturale ed efficace.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="bg-gradient-to-br from-[#0470f9]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#0470f9] mb-2 sm:mb-3" />
                <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                  24/7 Ottimizzazione
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-[12px] sm:text-[14px]">
                  Ogni momento conta
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#120b1e]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-[#120b1e] mb-2 sm:mb-3" />
                <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                  Sonno Produttivo
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-[12px] sm:text-[14px]">
                  Impara dormendo
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0470f9]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0470f9] mb-2 sm:mb-3" />
                <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                  Innovazione
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-[12px] sm:text-[14px]">
                  Tecnologia all'avanguardia
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#120b1e]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#120b1e] mb-2 sm:mb-3" />
                <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                  Apprendimento
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-[12px] sm:text-[14px]">
                  Risultati garantiti
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
