'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MF</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">MOTOFAX</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-400 hover:text-white transition">
              How It Works
            </Link>
            <Link href="#for-dealers" className="text-gray-400 hover:text-white transition">
              For Dealers
            </Link>
            <Link href="#integrations" className="text-gray-400 hover:text-white transition">
              Integrations
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/amsoil" className="text-gray-400 hover:text-white transition">
              Buy AMSOIL
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/dealer-login"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              Dealer Login
            </Link>
            <Link
              href="/get-started"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-bold transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
