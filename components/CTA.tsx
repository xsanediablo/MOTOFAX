'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          READY TO RIDE
          <br />
          <span className="text-red-600">WITH CONFIDENCE?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join 12,000+ dealers and 2 million buyers who rely on MotoFax for integrity-driven, transparent
          powersports history reports.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/run-report"
            className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 rounded transition inline-flex items-center justify-center space-x-2"
          >
            <span>RUN YOUR FIRST REPORT</span>
            <span>→</span>
          </Link>
          <Link
            href="/dealer-plans"
            className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-3 rounded transition border border-gray-700 inline-flex items-center justify-center space-x-2"
          >
            <span>👤</span>
            <span>DEALER PLANS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
