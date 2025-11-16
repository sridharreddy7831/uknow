import React, { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, Send, Building2, Handshake, Code, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useToast } from '../hooks/use-toast';

const ContactForm = () => {
  const [formType, setFormType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: '',
    partnershipType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        form_type: formType,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        budget: formData.budget,
        timeline: formData.timeline,
        project_type: formData.projectType,
        partnership_type: formData.partnershipType
      };

      // Uncomment when you have EmailJS credentials
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simulating email send for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting WRIM Technologies. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: '',
        timeline: '',
        projectType: '',
        partnershipType: ''
      });
      setFormType('');
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formOptions = [
    { value: 'project', label: 'Build a Project With Us', icon: Code },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Handshake },
    { value: 'consultation', label: 'Book a Consultation', icon: MessageSquare },
    { value: 'general', label: 'General Inquiry', icon: Building2 }
  ];

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
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose the type of inquiry below, and we'll make sure your message reaches the right team.
          </p>
        </div>
      </section>

      {/* Form Type Selection */}
      {!formType && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {formOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={option.value}
                    className="hover-lift cursor-pointer transition-all duration-300 border-2 hover:border-orange-400"
                    onClick={() => setFormType(option.value)}
                  >
                    <CardHeader className="text-center">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                      <CardTitle className="text-lg">{option.label}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Form Based on Selection */}
      {formType && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Button
                variant="ghost"
                className="mb-6"
                onClick={() => setFormType('')}
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Change Form Type
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    {formOptions.find(opt => opt.value === formType)?.label}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="contact-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                          className="contact-input"
                        />
                      </div>
                    </div>

                    {/* Project-specific fields */}
                    {formType === 'project' && (
                      <>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="projectType">Project Type *</Label>
                            <Select
                              value={formData.projectType}
                              onValueChange={(value) => handleSelectChange('projectType', value)}
                              required
                            >
                              <SelectTrigger className="contact-input">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web">Web Application</SelectItem>
                                <SelectItem value="mobile">Mobile Application</SelectItem>
                                <SelectItem value="ai">AI/ML Solution</SelectItem>
                                <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                                <SelectItem value="custom">Custom Software</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="budget">Budget Range</Label>
                            <Select
                              value={formData.budget}
                              onValueChange={(value) => handleSelectChange('budget', value)}
                            >
                              <SelectTrigger className="contact-input">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                                <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                                <SelectItem value="100k+">$100k+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleSelectChange('timeline', value)}
                          >
                            <SelectTrigger className="contact-input">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (1-2 months)</SelectItem>
                              <SelectItem value="normal">Normal (3-6 months)</SelectItem>
                              <SelectItem value="flexible">Flexible (6+ months)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {/* Partnership-specific fields */}
                    {formType === 'partnership' && (
                      <div className="space-y-2">
                        <Label htmlFor="partnershipType">Partnership Type *</Label>
                        <Select
                          value={formData.partnershipType}
                          onValueChange={(value) => handleSelectChange('partnershipType', value)}
                          required
                        >
                          <SelectTrigger className="contact-input">
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology Partnership</SelectItem>
                            <SelectItem value="reseller">Reseller Program</SelectItem>
                            <SelectItem value="strategic">Strategic Alliance</SelectItem>
                            <SelectItem value="referral">Referral Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Message field */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="contact-input"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full contact-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 WRIM Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;