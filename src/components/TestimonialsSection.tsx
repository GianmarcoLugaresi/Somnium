interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ name, role, quote, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#0470f9] text-[20px]">
            {i < rating ? '★' : '☆'}
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-gray-700 leading-relaxed mb-6">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0470f9] to-[#0360d9] flex items-center justify-center text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px]">
          {avatar}
        </div>
        <div>
          <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black">
            {name}
          </div>
          <div className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-500 text-[14px]">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Studente Universitario",
      quote: "Ho migliorato il mio inglese in sole 3 settimane! Somnium è incredibile, posso studiare anche mentre dormo.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Laura Bianchi",
      role: "Business Manager",
      quote: "Perfetto per chi ha poco tempo. Ho imparato il francese per lavoro senza dover rinunciare alle mie ore di sonno.",
      rating: 5,
      avatar: "LB"
    },
    {
      name: "Giuseppe Verdi",
      role: "Insegnante",
      quote: "Come educatore, apprezzo l'approccio scientifico di Somnium. I risultati parlano chiaro!",
      rating: 5,
      avatar: "GV"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f2f2f2] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#0470f9]/10 text-[#0470f9] px-4 py-2 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-4">
            Testimonianze
          </div>
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[56px] text-black tracking-[-1.68px] mb-6">
            Cosa Dicono i Nostri Utenti
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] text-gray-600 max-w-2xl mx-auto">
            Migliaia di persone hanno già trasformato il loro modo di imparare le lingue con Somnium.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
