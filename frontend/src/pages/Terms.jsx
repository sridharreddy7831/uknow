import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="wrim-logo-symbol">
              <div className="wave-symbol"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">WRIM</h1>
              <p className="text-xs text-gray-600 tracking-wider">WE ARE IMMORTALS</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 gradient-text">Terms & Conditions</h1>
        <p className="text-gray-600 mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using WRIM Technologies' services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Use of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are provided for lawful purposes only. You agree not to use our services for any 
              illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a 
              destructive nature.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content included in our services, such as text, graphics, logos, images, and software, is the 
              property of WRIM Technologies or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              WRIM Technologies shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any changes by 
              posting the new terms on this page. Your continued use of our services after such modifications 
              constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> legal@wrimtech.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 WRIM Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;