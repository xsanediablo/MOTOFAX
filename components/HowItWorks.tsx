'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'ENTER THE VIN',
      description:
        'Input any 17-character VIN from a motorcycle, ATV, UTV, PWC, or snowmobile. Works for motorcycles, ATVs, UTVs, PWC, snowmobiles, and dirt bikes.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'WE PULL THE DATA',
      description:
        'MotoFax queries 500+ powersports data sources — state DMVs, NICB, NCIC, insurance carriers, auction houses, and dealer service networks.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'GET YOUR REPORT',
      description:
        'Receive a comprehensive, human-readable report in seconds. Download as PDF or share a secure link.',
      icon: '📄',
    },
  ];

  return (
    <section id="how-it-works" className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-bold mb-4">— HOW IT WORKS —</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            INSTANT INTEL.
            <br />
            <span className="text-red-600">ZERO GUESSWORK.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-l-2 border-red-600 pl-8 py-8 relative"
            >
              {/* Step Number */}
              <p className="text-7xl font-black text-red-600/20 mb-6">{step.number}</p>

              {/* Icon */}
              <p className="text-4xl mb-4">{step.icon}</p>

              {/* Title */}
              <h3 className="text-white font-black text-2xl mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
