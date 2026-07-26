import Link from 'next/link';

const benefits = [
  {
    title: 'Premium Synthetic Protection',
    description:
      'Fight heat, wear, and breakdown with synthetic lubricants built for aggressive riding, high revs, and long service intervals.',
  },
  {
    title: 'Ride Hard Between Services',
    description:
      'Keep engines, transmissions, and drivetrains protected between MotoFax service milestones with dependable film strength and cleanliness.',
  },
  {
    title: 'Built for Powersports',
    description:
      'AMSOIL formulas are trusted across motorcycles, ATVs, UTVs, and other powersports machines where performance and protection matter.',
  },
];

const features = [
  'High-heat resistance for demanding street and track riding',
  'Wear protection for engines, clutches, and transmissions',
  'Helps keep internals cleaner for smoother long-term performance',
  'Trusted synthetic performance for riders who expect more',
];

export default function Amsoil() {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative border border-gray-800 rounded-3xl bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.3),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.18),_transparent_30%)]" />

          <div className="relative grid lg:grid-cols-[1.2fr,0.8fr] gap-12 p-8 md:p-12 lg:p-16 items-center">
            <div>
              <p className="text-red-600 text-sm font-bold mb-4 border-l-2 border-red-600 pl-3">
                ⚡ TRUSTED PARTNER PERFORMANCE
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                BUY
                <br />
                <span className="text-red-600">AMSOIL.</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                THE #1 SYNTHETIC OIL FOR POWERSPORTS.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
                Give every ride the protection it deserves with premium AMSOIL lubricants engineered
                for heat, load, and real-world abuse. It&apos;s the perfect partner product for riders who
                want added confidence between MotoFax service milestones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://www.syntheticsusa.com/d/30538674/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded transition inline-flex items-center justify-center"
                >
                  BUY NOW
                </a>
                <Link
                  href="/"
                  className="bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-black px-8 py-4 rounded transition inline-flex items-center justify-center"
                >
                  BACK TO MOTOFAX
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-gray-950/70 p-4"
                  >
                    <span className="text-red-600 text-xl leading-none">✓</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[480px]">
              <div className="absolute inset-0 rounded-[2rem] border border-gray-800 bg-gradient-to-b from-white/5 via-transparent to-red-950/30" />
              <div className="absolute top-8 left-8 right-8 h-40 rounded-[2rem] border border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.25),_transparent_50%)]" />
                <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full opacity-80">
                  <path
                    d="M50 90h42l22-20h56l32 8 18-14h24l26 22h-18l-12-10-14 10h-76l-20 15H84l-14-11H50z"
                    fill="#111827"
                    stroke="#9CA3AF"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <circle cx="103" cy="95" r="18" fill="#030712" stroke="#DC2626" strokeWidth="4" />
                  <circle cx="232" cy="95" r="18" fill="#030712" stroke="#DC2626" strokeWidth="4" />
                  <path d="M122 66l16-18h38l12 12" fill="none" stroke="#DC2626" strokeWidth="4" />
                </svg>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-center gap-4">
                {['10W-40', '20W-50', 'V-TWIN'].map((label, index) => (
                  <div
                    key={label}
                    className={`relative border border-gray-700 bg-gradient-to-b from-gray-200 via-gray-50 to-gray-300 text-black shadow-2xl ${
                      index === 1 ? 'h-72 w-28' : 'h-60 w-24'
                    } rounded-t-3xl rounded-b-xl`}
                  >
                    <div className="absolute -top-5 left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-2xl bg-gray-300 border border-gray-600" />
                    <div className="absolute inset-x-3 top-12 bottom-10 rounded-xl bg-black border border-gray-700 flex flex-col items-center justify-center px-2 text-center">
                      <span className="text-red-600 text-xs font-black tracking-[0.2em]">AMSOIL</span>
                      <span className="mt-3 text-white text-sm font-black">{label}</span>
                      <span className="mt-2 text-gray-400 text-[10px] font-bold uppercase">
                        Synthetic
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border border-gray-800 bg-gray-950/60 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-600 text-xl leading-none">✓</span>
                <h2 className="text-2xl font-black">{benefit.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-800 bg-gradient-to-r from-gray-950 via-black to-red-950/40 p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-red-600 text-sm font-bold mb-3">— PROTECT THE RIDE —</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              KEEP YOUR MACHINE READY
              <br />
              <span className="text-red-600">BETWEEN MILESTONES.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              MotoFax helps riders understand the story behind every machine. AMSOIL helps protect
              what comes next with premium synthetic lubricants you can trust on every mile after the
              report.
            </p>
          </div>

          <a
            href="https://www.syntheticsusa.com/d/30538674/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded transition inline-flex items-center justify-center"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </section>
  );
}
