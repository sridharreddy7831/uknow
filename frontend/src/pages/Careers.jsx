import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Users, Heart, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
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

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the <span className="gradient-text">Immortals</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At WRIM Technologies, we're not just building products — we're crafting the future. 
            Join our team of innovators, creators, and visionaries.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Why Join WRIM?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl mb-3">Collaborative Culture</CardTitle>
                <CardDescription className="text-base">
                  Work with talented individuals who share your passion for innovation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl mb-3">Cutting-Edge Tech</CardTitle>
                <CardDescription className="text-base">
                  Work on exciting projects using the latest technologies and frameworks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl mb-3">Work-Life Balance</CardTitle>
                <CardDescription className="text-base">
                  We value your wellbeing with flexible hours and remote work options.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <Trophy className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl mb-3">Career Growth</CardTitle>
                <CardDescription className="text-base">
                  Continuous learning opportunities and clear paths for advancement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Remote' },
              { title: 'AI/ML Engineer', department: 'AI Research', location: 'Hybrid' },
              { title: 'Cloud Solutions Architect', department: 'Cloud Services', location: 'Remote' },
              { title: 'Cybersecurity Specialist', department: 'Security', location: 'On-site' },
              { title: 'Product Designer', department: 'Design', location: 'Remote' },
            ].map((job, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        {job.department} • {job.location}
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:shadow-lg transition-all duration-300">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-100 to-blue-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let's explore opportunities together.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
            Send Your Resume
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 WRIM Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;