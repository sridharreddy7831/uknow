import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
        <h1 className="text-5xl font-bold mb-8 gradient-text">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, to communicate 
              with you, to monitor and analyze trends and usage, and to personalize your experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not share your personal information with third parties except as described in this policy. 
              We may share information with service providers who perform services on our behalf, with your consent, 
              or as required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect the security of your 
              personal information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to access, update, or delete your personal information at any time. You may also 
              have the right to object to or restrict certain types of processing of your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and track information about your 
              activities on our services. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> privacy@wrimtech.com<br />
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

export default Privacy;