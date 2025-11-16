import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, Sparkles, Target, Lightbulb, Shield, Cloud, Code, Database, Users, Mail, Phone, MapPin, Rocket, Award, Music, Cpu, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BioluminescentGrid, BioluminescentGridItem } from '../components/ui/bioluminescent-grid';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const navigate = useNavigate();

  const visionQuotes = [
    "We Are Immortals — Creating technology that transcends generations.",
    "Innovation is not just what we do; it's who we are.",
    "Building the future, one breakthrough at a time.",
    "Excellence isn't an act, it's a habit we live by every day.",
    "We don't follow trends — we create them."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % visionQuotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  const services = [
    {
      Icon: Database,
      title: "AI-Driven Data Analytics",
      description: "Transform raw data into actionable insights with our advanced AI-powered analytics platform.",
      className: "col-span-2 row-span-2",
    },
    {
      Icon: Code,
      title: "Custom Software Development",
      description: "Bespoke software solutions engineered to meet your unique business requirements.",
      className: "",
    },
    {
      Icon: Cloud,
      title: "Cloud Infrastructure Management",
      description: "Scalable, secure, and optimized cloud solutions for modern enterprises.",
      className: "",
    },
    {
      Icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with enterprise-grade security protocols and monitoring.",
      className: "row-span-2",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="wrim-logo-symbol">
              <div className="wave-symbol"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">WRIM</h1>
              <p className="text-xs text-gray-600 tracking-wider">WE ARE IMMORTALS</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#approach" className="nav-link">Our Approach</a>
            <a href="#vision" className="nav-link">Vision</a>
            <Link to="/careers" className="nav-link">Careers</Link>
            <a href="#contact">
              <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Without Mouse Icon */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="hero-badge scroll-animate mb-6">
              <Sparkles className="w-5 h-5 inline mr-2" />
              Innovation • Creativity • Excellence
            </div>
            <h1 className="hero-title scroll-animate mb-6">
              Building The Future,
              <span className="gradient-text block">One Innovation at a Time</span>
            </h1>
            <p className="hero-subtitle scroll-animate mb-10">
              We Are Immortals. At WRIM Technologies, we blend cutting-edge innovation, 
              creative thinking, and advanced engineering to build technology that stands the test of time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center scroll-animate">
              <Button size="lg" className="hero-cta-primary">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="hero-cta-secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Updated Description */}
      <section id="about" className="section-padding bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h2 className="section-title">About WRIM Technologies</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Born from the vision of creating technology that outlasts trends and transforms industries, 
              WRIM Technologies stands at the intersection of innovation and excellence. We are a team of 
              passionate engineers, designers, and visionaries committed to building intelligent systems, 
              scalable architectures, and breakthrough products that redefine what's possible. Our philosophy 
              "We Are Immortals" reflects our dedication to crafting solutions that endure, evolve, and empower 
              businesses to thrive in an ever-changing digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="stat-card scroll-animate hover-lift">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-4xl font-bold gradient-text">10+</CardTitle>
                <CardDescription className="text-lg">Years of Excellence</CardDescription>
              </CardHeader>
            </Card>

            <Card className="stat-card scroll-animate hover-lift" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Rocket className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-4xl font-bold gradient-text">500+</CardTitle>
                <CardDescription className="text-lg">Projects Delivered</CardDescription>
              </CardHeader>
            </Card>

            <Card className="stat-card scroll-animate hover-lift" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Users className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle className="text-4xl font-bold gradient-text">200+</CardTitle>
                <CardDescription className="text-lg">Happy Clients</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Bioluminescent Grid */}
      <section id="services" className="section-padding bio-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Comprehensive technology solutions tailored to drive your business forward.
            </p>
          </div>

          <BioluminescentGrid>
            {services.map((service, i) => (
              <BioluminescentGridItem key={i} className={service.className}>
                <service.Icon className="w-10 h-10 mb-4 text-blue-400" />
                <h2 className="text-xl font-bold mb-3 text-white">{service.title}</h2>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </BioluminescentGridItem>
            ))}
          </BioluminescentGrid>
        </div>
      </section>

      {/* Products Section - Updated with museIt and Immortal OS */}
      <section id="products" className="section-padding bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h2 className="section-title">Our Products</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Innovative technology products designed to revolutionize the way you work and connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* museIt */}
            <Card className="product-card scroll-animate hover-lift">
              <div className="product-image-placeholder">
                <Music className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-3">museIt</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Connect through music. Listen to the same songs simultaneously with friends, 
                  share your thoughts via chat, and send voice messages. Experience music together, anywhere.
                </CardDescription>
                <Button variant="outline" className="w-full hover-scale">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardHeader>
            </Card>

            {/* Immortal OS */}
            <Card className="product-card scroll-animate hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="product-image-placeholder">
                <Cpu className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-3">Immortal OS</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  The operating system of the future. Built for performance, security, and longevity. 
                  Experience computing reimagined from the ground up.
                </CardDescription>
                <Button variant="outline" className="w-full hover-scale">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardHeader>
            </Card>

            {/* Coming Soon */}
            <Card className="product-card scroll-animate hover-lift coming-soon-card" style={{ animationDelay: '0.2s' }}>
              <div className="product-image-placeholder opacity-50">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-3">More Coming Soon</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  We're constantly innovating and building new products. Stay tuned for exciting announcements!
                </CardDescription>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Flow with Popup Animation */}
      <section id="approach" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h2 className="section-title">Our Approach</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              A systematic journey from vision to reality, powered by precision, creativity, and evolution.
            </p>
          </div>

          <div className="approach-flow">
            {/* Flow Line */}
            <div className="flow-line"></div>

            {/* Step 1 */}
            <div className="approach-flow-item scroll-animate left-side">
              <div className="approach-flow-card">
                <div className="approach-flow-number">01</div>
                <Target className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Precision Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every line of code, every design decision is crafted with meticulous attention to detail. 
                  We build systems that are robust, efficient, and scalable.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="approach-flow-item scroll-animate right-side" style={{ animationDelay: '0.2s' }}>
              <div className="approach-flow-card">
                <div className="approach-flow-number">02</div>
                <Lightbulb className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Creative Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We think beyond conventional solutions to create transformative experiences. 
                  Innovation is woven into our DNA.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="approach-flow-item scroll-animate left-side" style={{ animationDelay: '0.4s' }}>
              <div className="approach-flow-card">
                <div className="approach-flow-number">03</div>
                <Sparkles className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Evolving Mindset</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous learning and adaptation keep us at the forefront of technology. 
                  We evolve with every challenge, every project, every breakthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Animated Quotes */}
      <section id="vision" className="section-padding bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="section-title mb-8">Our Vision</h2>
            <div className="section-divider mb-10"></div>
            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              At WRIM Technologies, we envision a future where technology empowers every individual and 
              organization to achieve the impossible. Our commitment to innovation, excellence, and building 
              solutions that stand the test of time drives everything we do.
            </p>
            
            {/* Animated Quote Container */}
            <div className="vision-quote-container">
              {visionQuotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className={`vision-quote-animated ${index === currentQuote ? 'active' : ''}`}
                >
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with Advanced Form Button */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Ready to transform your business? Let's start a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">contact@wrimtech.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="scroll-animate hover-lift">
              <CardHeader>
                <CardTitle>Need More Options?</CardTitle>
                <CardDescription className="text-base">
                  Access our advanced contact forms for project inquiries, partnerships, and consultations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/contact-form')}
                  className="w-full contact-submit"
                  size="lg"
                >
                  Go to Advanced Contact Forms
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text-light">WRIM</h3>
              <p className="text-sm text-gray-400 mb-2">WE ARE IMMORTALS</p>
              <p className="text-sm text-gray-400">Building technology that stands the test of time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><Link to="/careers" className="footer-link">Careers</Link></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="footer-link">AI Analytics</a></li>
                <li><a href="#services" className="footer-link">Software Development</a></li>
                <li><a href="#services" className="footer-link">Cloud Management</a></li>
                <li><a href="#services" className="footer-link">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 WRIM Technologies. All rights reserved. We Are Immortals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
