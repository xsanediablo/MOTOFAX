'use client';

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    vinNumber: '',
    shopName: '',
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRunReport = () => {
    console.log('Running report with:', formData);
    // Add your report logic here
  };

  const stats = [
    { value: '47M+', label: 'POWERSPORTS RECORDS' },
    { value: '2.3M+', label: 'REPORTS GENERATED' },
    { value: '12,000+', label: 'DEALER PARTNERS' },
    { value: '99.7%', label: 'DATA ACCURACY' },
  ];

  return (
    <section className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left md:max-w-2xl">
          <p className="text-red-600 text-sm font-bold mb-4 border-l-2 border-red-600 pl-3">
            ⚡ POWERSPORTS HISTORY REPORTS
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            THE HISTORY
            <br />
            <span className="text-red-600">BEHIND</span>
            <br />
            EVERY RIDE
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            The only vehicle history platform built exclusively for powersports — motorcycles, ATVs,
            UTVs, PWC, and snowmobiles. Built on integrity. Trusted by 12,000+ dealers and shops
            nationwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 p-6 rounded">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Toggle */}
          <div className="flex items-center space-x-3 bg-gray-900/50 w-fit px-4 py-3 rounded border border-gray-800">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            <span className="text-gray-400">Consumer — Pay per successful report</span>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="shopName"
              placeholder="Shop name"
              value={formData.shopName}
              onChange={handleInputChange}
              className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-red-600"
            />
            <input
              type="text"
              name="location"
              placeholder="Shop location (City, State)"
              value={formData.location}
              onChange={handleInputChange}
              className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-red-600"
            />
          </div>

          {/* VIN Input */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="vinNumber"
              placeholder="Enter 17-character VIN 0/17"
              value={formData.vinNumber}
              onChange={handleInputChange}
              maxLength={17}
              className="flex-1 bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:border-red-600"
            />
            <button
              onClick={handleRunReport}
              className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 rounded transition whitespace-nowrap"
            >
              🔍 RUN REPORT
            </button>
          </div>

          {/* Sample Links */}
          <div className="flex items-center space-x-3 text-sm">
            <span className="text-gray-500">Try a sample:</span>
            <div className="flex space-x-4">
              {['Harley-Davidson', 'Yamaha', 'Honda'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFormData({ ...formData, vinNumber: 'SAMPLE' + brand })}
                  className="text-red-600 hover:text-red-400 font-bold transition"
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
