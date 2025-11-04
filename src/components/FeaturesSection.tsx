import imgImg4598 from "figma:asset/e58430711498605560f1b55bab82266e2b2a8f1e.png";
import imgImg4597SenzaSfondo1 from "figma:asset/916135eb467937c6261463574ddb2eeac41b65b2.png";
import imgImg4599 from "figma:asset/8c3c9d5aec25af509f63b03ffb83991da09023c8.png";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  color: string;
}

interface FeaturesSectionProps {
  onNavigateToComingSoon: () => void;
}

function FeatureCard({ image, title, description, color }: FeatureCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity" style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}></div>
      
      <div className="relative z-10">
        {/* Image */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-black text-center mb-3 sm:mb-4 tracking-[-0.96px]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default function FeaturesSection({ onNavigateToComingSoon }: FeaturesSectionProps) {
  const features = [
    {
      image: imgImg4598,
      title: "Impara",
      description: "Scrivi e memorizza nuove parole in modo naturale. Il nostro sistema di generazione di stuoni ottimizza l'apprendimento durante il sonno.",
      color: "#0470f9"
    },
    {
      image: imgImg4597SenzaSfondo1,
      title: "Ripassa",
      description: "Consolida le tue conoscenze con flashcard e quiz interattivi. Ascolta i suoni associati per massimizzare l'apprendimento notturno.",
      color: "#0470f9"
    },
    {
      image: imgImg4599,
      title: "Notte",
      description: "Attiva la modalità notturna e lascia che Somnium riproduca i suoni mentre dormi. Al risveglio ricorderai oltre il 90% delle parole senza sforzo.",
      color: "#120b1e"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#0470f9]/10 text-[#0470f9] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-4 text-sm sm:text-base">
            Funzionalità
          </div>
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[56px] text-black tracking-[-1.68px] mb-4 sm:mb-6 px-4">
            Tre Step per Imparare
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto px-4">
            Somnium offre un approccio completo all'apprendimento, combinando tecniche diurne e notturne per risultati ottimali.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button onClick={onNavigateToComingSoon} className="bg-[#0470f9] hover:bg-[#0360d9] text-white px-10 sm:px-12 py-3 sm:py-4 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] transition-all hover:scale-105 active:scale-95 shadow-xl">
            Prova Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
