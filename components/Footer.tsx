'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MF</span>
              </div>
              <span className="text-white font-bold">MOTOFAX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Built on integrity. The trusted vehicle history platform for the powersports industry. A
              Sparks Moto Enterprise LLC company.
            </p>
            <p className="text-gray-600 text-xs">SOC 2 Type II • DPPA Compliant</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-2">
              {['How It Works', 'Pricing', 'API Docs', 'Changelog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Dealers */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">For Dealers</h4>
            <ul className="space-y-2">
              {['Dealer Plans', 'POS Integrations', 'White-Label', 'Bulk Lookup', 'Partner Program'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-2 mb-6">
                {['About', 'Contact', 'Blog', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Data Sources', 'DPPA Compliance'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            © 2026 MotoFax · Sparks Moto Enterprise LLC. All rights reserved. Vehicle history data is
            provided for informational purposes only.
          </p>
          <p>Clayton, NC</p>
        </div>
      </div>
    </footer>
  );
}
