'use client';

export default function Features() {
  const features = [
    {
      title: 'Accident & Damage Records',
      description: 'Insurance claims, collision reports, and declared damage from all 50 states.',
      icon: '⚠️',
    },
    {
      title: 'Title & Ownership History',
      description: 'Liens, salvage, flood, and rebuilt titles. Full chain of ownership.',
      icon: '📋',
    },
    {
      title: 'Odometer / Hour Meter Verification',
      description:
        'Catch rollbacks and hour meter tampering — verified across DMV records, powersports dealers, and service centers.',
      icon: '📈',
    },
    {
      title: 'Theft Records',
      description:
        'Cross-referenced with NICB and NCIC databases in real-time. Includes recovered/total-loss flags.',
      icon: '🛡️',
    },
    {
      title: 'Service & Maintenance',
      description:
        'Oil changes, tire swaps, chain/belt services, and recall completions logged by powersports dealers and independent shops.',
      icon: '⏱️',
    },
    {
      title: 'Market Value Estimate',
      description:
        'Current market pricing based on condition, miles/hours, region, and comparable powersports listings.',
      icon: '📊',
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-red-600 text-sm font-bold mb-4">— WHAT'S INCLUDED —</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ONE REPORT.
              <br />
              <span className="text-red-600">FULL PICTURE.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every MotoFax report aggregates data from DMVs, insurance carriers, auction houses,
              service centers, and law enforcement — giving you a complete history before you buy, sell,
              or trade.
            </p>
          </div>

          {/* Sample Report */}
          <div className="bg-gray-900/30 border border-gray-800 p-8 rounded">
            <p className="text-gray-500 text-sm font-bold mb-2">SAMPLE REPORT</p>
            <h3 className="text-2xl font-black text-white mb-4">2021 KAWASAKI NINJA ZX-6R</h3>
            <p className="text-gray-500 mb-6">VIN: JKBZXJD1XMA123456</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Accidents</span>
                <span className="text-white font-bold">0 reported</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Owners</span>
                <span className="text-white font-bold">2 previous</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Odometer / Hrs</span>
                <span className="text-white font-bold">8,412 mi — verified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Open Recalls</span>
                <span className="text-red-600 font-bold">1 open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-800 p-6 rounded hover:border-red-600/50 transition">
              <p className="text-2xl mb-4">{feature.icon}</p>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
