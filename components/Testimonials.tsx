'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        '"MotoFax caught a rolled-back odometer on a used Yamaha YXZ that would have cost us $8,000 in goodwill repairs. It paid for itself ten times over in the first month."',
      author: 'Derek Halloway',
      title: 'General Manager — Halloway Powersports, Tulsa OK',
      rating: 5,
    },
    {
      quote:
        '"The Lightspeed integration was seamless. Our service writers pull a MotoFax on every trade-in right from the DMS. The report quality is head and shoulders above anything else in the powersports space."',
      author: 'Maria Castillo',
      title: 'Dealer Principal — Southwest Moto Group, Phoenix AZ',
      rating: 5,
    },
    {
      quote:
        '"We run an independent shop and the Dealer plan is a no-brainer. Customers trust us more knowing we do a full history check before pricing a trade. Our closing rate went up 18%."',
      author: 'James Tran',
      title: 'Owner — Tran\'s Cycle & Powersports, Nashville TN',
      rating: 5,
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-bold mb-4">— FROM THE FIELD —</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            DEALERS TRUST
            <br />
            <span className="text-red-600">MOTOFAX.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-800 p-8 rounded">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-red-600">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic mb-6 leading-relaxed">{testimonial.quote}</p>

              {/* Author */}
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
