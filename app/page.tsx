'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Camera, Mail, Phone, MapPin, GraduationCap, Languages, Download, Shield, Code, Server, Database, Globe, ChevronDown, Menu, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// Main Portfolio Application

export default function Portfolio() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('home');

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  // Content data

  const content = {

    hero: {

      name: "Riak Mawut Angui Atem",

      title: "Supply Chain & Administration Officer · Software Engineer",

      subtitle: "Procurement · Logistics · Inventory · Web Development",

      webDev: "I build full responsive websites and web apps — affordable freelance rates.",

      cta: "Hit me up",

      description: "Experienced supply chain professional with 5+ years reducing wastage and leading warehouse operations. I design and build full responsive websites and web applications (Next.js, Tailwind, Node, MongoDB); available for freelance work at competitive, low rates."

    },

    contact: {

      phone: "+211 922 950 783",

      email: "riakmawut3@gmail.com",

      location: "Muniki Suk Malesha, Juba, South Sudan"

    },

    about: {
      paragraphs: [
        "My name is Riak Mawut Angui Atem. I am a dedicated supply chain and administration professional with over five years of experience in procurement, logistics, inventory control, and administrative coordination across complex operating environments. My career began in supply chain and logistics, where I developed strong organizational discipline, accountability, and process-optimization skills while managing procurement operations and inventory at scale.",
        "Since 2022, I have been pursuing a degree in Cybersecurity at the University of Juba, driven by a strong interest in secure systems, data protection, and resilient digital infrastructure. Through my studies and independent practice, I have developed practical skills in secure system design, secure coding practices, threat awareness, and risk-conscious development.",
        "In parallel, I design and build fully responsive websites and web applications, ranging from static marketing pages to dynamic applications using REST APIs and MongoDB backends. My work emphasizes accessibility, mobile-first design, secure defaults, clean architecture, and cost-effective deployment strategies.",
        "Professionally, I am detail-oriented, analytical, and reliability-driven. I value clarity, security, and efficiency in both physical operations and digital systems. I offer affordable freelance services for small businesses and personal projects, with a focus on delivering practical, secure, and scalable solutions."
      ]
    },

    skills: [

      "Procurement Planning & Inventory Control (FIFO)",

      "Vendor Negotiation & Logistics Coordination",

      "Financial Management & Reporting",

      "Team Leadership & Training",

      "MS Office Suite & Adobe Photoshop",

      "Web Development (Next.js, Tailwind, React)",

      "Backend Development (Node.js, Express, MongoDB)",

      "Security Fundamentals & Secure Coding Practices",

      "Database Management & API Development",

      "Responsive Design & Mobile-First Approach"

    ],

    experience: [

      {

        title: "Administration Section Head",

        company: "Mayar Medical Center",

        location: "Juba, South Sudan",

        period: "December 2024 – December 2025",

        highlights: [

          "Coordinated incoming and outgoing correspondence, managing confidential information and ensuring effective communication within the organization",

          "Organized meetings, conferences, and events, providing full logistical support, preparing agendas, and distributing minutes",

          "Managed the executive calendar, scheduled appointments, arranged official travel and accommodations, and handled stakeholder interactions",

          "Served as the main point of contact for client inquiries and stakeholder communications, providing timely and professional responses",

          "Handled visitor reception, navigated clients within the office, and provided refreshments and hospitality services",

          "Provided phone support, answered calls, took messages, and assisted in routine client inquiries",

          "Monitored budgets and prepared expenditure reports to support compliance",

          "Maintained detailed financial records, ensuring transparency and accuracy"

        ]

      },

      {

        title: "Supply Chain Officer/Assistant",

        company: "Awake General Trading & Entrepreneurship Co. Ltd",

        location: "Juba, South Sudan",

        period: "January 2020 – January 2025",

        highlights: [

          "Oversaw end-to-end supply chain operations, including procurement planning, order processing, and vendor engagement",

          "Conducted supplier evaluations, negotiated terms, and ensured quality and compliance in all transactions",

          "Monitored stock worth over 10M SSP using FIFO methods, reducing wastage by 20%",

          "Implemented FIFO stock control, minimizing wastage and improving inventory accuracy by 20%",

          "Processed procurement requests for office and warehouse supplies, ensuring inventory readiness",

          "Prepared load plans, packing lists, and documentation for accurate and timely deliveries",

          "Supervised over 150 shipments with a 98% on-time delivery rate and led cross-functional logistics teams",

          "Organized transportation logistics for shipments across South Sudan, improving delivery efficiency by 15%",

          "Coordinated shipments with vendors and logistics teams, verified packing lists, and ensured accurate and timely deliveries",

          "Maintained detailed documentation, issued waybills, and completed paperwork for in-and-out movements of materials",

          "Redesigned warehouse layout, increasing storage efficiency by 25% and streamlining retrieval processes",

          "Coordinated with vendors and logistics teams to resolve shipment delays and discrepancies",

          "Acted as a point of contact for clients and suppliers, maintaining professional relationships",

          "Monitored budgets, generated financial reports, and supported external audits",

          "Monitored budget allocations, tracked expenditures, and prepared reports, supporting financial compliance and accurate record-keeping",

          "Submitted weekly inventory and warehouse stock reports to program managers, contributing to transparent supply chain management",

          "Maintained documentation including purchase orders, invoices, delivery notes, and supplier records"

        ]

      }

    ],

    projects: [

      {

        title: "Full-Stack E-Commerce Platform",

        tech: "Next.js, Tailwind, MongoDB, Stripe",

        description: "Responsive e-commerce site with secure payment processing and admin dashboard",

        demoUrl: "/demos/ecommerce-platform.html"

      },

      {

        title: "Business Landing Page + CMS",

        tech: "React, Node.js, Express, MongoDB",

        description: "Custom CMS for small business with contact form and inventory management",

        demoUrl: "/demos/business-cms.html"

      },

      {

        title: "Security-Hardened Web App",

        tech: "Next.js, MongoDB, Security Headers",

        description: "Demonstrates input sanitization, CORS configuration, rate limiting, and environment-based secrets",

        demoUrl: "/demos/security-hardened.html"

      },

      {

        title: "Inventory Management Dashboard",

        tech: "React, Chart.js, REST API",

        description: "Real-time stock tracking with visual analytics and export functionality",

        demoUrl: "/demos/inventory-dashboard.html"

      }

    ],

    services: [

      {

        tier: "Micro",

        price: "$70",

        priceValue: 70,

        features: ["Single landing page", "Responsive design", "Contact form", "Basic SEO", "1 week delivery"]

      },

      {

        tier: "Standard",

        price: "$100",

        priceValue: 100,

        features: ["Multi-page website", "Custom backend API", "Database integration", "Security hardening", "2-3 week delivery"]

      },

      {

        tier: "Pro",

        price: "$150",

        priceValue: 150,

        features: ["Full web application", "Advanced features", "Admin dashboard", "Deployment & hosting", "Ongoing support"]

      }

    ]

  };

  // Navigation scroll handler

  useEffect(() => {

    const handleScroll = () => {

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {

        const element = document.getElementById(section);

        if (element) {

          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {

            setActiveSection(section);

            break;

          }

        }

      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  // Form submission handler

  const handleSubmit = async (e: React.FormEvent) => {

    if (e) e.preventDefault();

    setFormStatus({ loading: true, success: false, error: '' });

    // Client-side validation

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {

      setFormStatus({ loading: false, success: false, error: 'Please fill in all required fields' });

      return;

    }

    // Email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {

      setFormStatus({ loading: false, success: false, error: 'Please enter a valid email address' });

      return;

    }

    try {

      const response = await fetch('/api/contact', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(formData)

      });

      
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        // If response is not JSON, get text
        const text = await response.text();
        console.error('API response error:', text);
        setFormStatus({ loading: false, success: false, error: 'Server error. Please check your connection and try again.' });
        return;
      }

      
      if (!response.ok) {

        // Handle rate limiting and other errors
        const errorMessage = data?.error || `Server error (${response.status}). Please try again.`;
        console.error('API error:', errorMessage, data);
        setFormStatus({ loading: false, success: false, error: errorMessage });
        return;
      }

      
      setFormStatus({ loading: false, success: true, error: '' });

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      

      // Reset success message after 5 seconds

      setTimeout(() => {

        setFormStatus({ loading: false, success: false, error: '' });

      }, 5000);

    } catch (error) {

      console.error('Form submission error:', error);
      setFormStatus({ loading: false, success: false, error: 'Network error. Please check your connection and try again.' });

    }

  };

  const scrollToSection = (sectionId: string) => {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

      setMobileMenuOpen(false);

    }

  };

  // Generate contextual message based on service plan
  const generateServiceMessage = (tier: string, price: number) => {

    const messages: { [key: string]: string } = {

      Micro: `Hello, I'm interested in the Micro plan ($${price}) for a single landing page. Please contact me with next steps.`,

      Standard: `Hello, I'm interested in the Standard plan ($${price}) for a multi-page website with backend features. Please contact me with next steps.`,

      Pro: `Hello, I'm interested in the Pro plan ($${price}) for a full web application. Please contact me with next steps.`

    };

    return messages[tier] || `Hello, I'm interested in the ${tier} plan ($${price}). Please contact me with next steps.`;

  };

  // Handle service card click - open contact form with pre-filled message
  const handleServiceClick = (service: { tier: string; priceValue: number }) => {

    const message = generateServiceMessage(service.tier, service.priceValue);

    setFormData({

      name: '',

      email: '',

      phone: '',

      subject: `${service.tier} Plan Inquiry`,

      message: message

    });

    // Scroll to contact section

    scrollToSection('contact');

    // Focus on message textarea after a short delay

    setTimeout(() => {

      const textarea = document.getElementById('message-textarea') as HTMLTextAreaElement;

      if (textarea) {

        textarea.focus();

        textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });

      }

    }, 500);

  };

  return (

    <div className="min-h-screen bg-gray-50">
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Riak Mawut Angui Atem",
            "alternateName": "Riak Mawut",
            "jobTitle": "Supply Chain & Administration Officer",
            "description": "Supply Chain Professional with 5+ years experience. Cybersecurity student at University of Juba. Freelance web developer.",
            "url": "https://riak-portfolio.onrender.com",
            "image": "https://riak-portfolio.onrender.com/profile-icon.png",
            "email": "riakmawut3@gmail.com",
            "telephone": "+211922950783",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Juba",
              "addressCountry": "South Sudan",
              "streetAddress": "Muniki Suk Malesha"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "University of Juba"
            },
            "knowsAbout": [
              "Supply Chain Management",
              "Procurement",
              "Logistics",
              "Cybersecurity",
              "Web Development",
              "Next.js",
              "React",
              "MongoDB"
            ],
            "sameAs": []
          })
        }}
      />

      {/* Header */}

      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2">

              <img 

                src="/profile-icon.png"

                alt="Riak Mawut Logo"

                className="w-10 h-10 object-contain"

              />

              <span className="text-xl font-bold text-orange-600">Riak Mawut</span>

            </div>

            {/* Desktop Navigation */}

            <div className="hidden md:flex space-x-8">

              {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (

                <button

                  key={item}

                  onClick={() => scrollToSection(item.toLowerCase())}

                  className={`text-sm font-medium transition-colors ${

                    activeSection === item.toLowerCase()

                      ? 'text-orange-600'

                      : 'text-gray-600 hover:text-orange-600'

                  }`}

                >

                  {item}

                </button>

              ))}

            </div>

            {/* Mobile menu button */}

            <button

              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

              className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"

            >

              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}

            </button>

          </div>

        </nav>

        {/* Mobile Navigation */}

        {mobileMenuOpen && (

          <div className="md:hidden bg-white border-t border-gray-200 rounded-b-xl shadow-xl mx-4 mb-2 overflow-hidden">

            <div className="px-4 pt-3 pb-4 space-y-1">

              {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (

                <button

                  key={item}

                  onClick={() => scrollToSection(item.toLowerCase())}

                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-gray-50"

                >

                  {item}

                </button>

              ))}

            </div>

          </div>

        )}

      </header>

      {/* Hero Section */}

      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 order-2 md:order-1">

              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-50 rounded-full">

                <Shield className="text-orange-600" size={20} />

                <span className="text-sm font-medium text-orange-700">

                  Software Engineer • Supply Chain Professional

                </span>

              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Roboto, sans-serif' }}>

                Hi, I'm <span className="text-orange-600">{content.hero.name.split(' ')[0]}</span>

              </h1>

              <div className="space-y-2">

                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>

                  {content.hero.title}

                </h2>

                <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>{content.hero.subtitle}</p>

              </div>

              <p className="text-gray-600 leading-relaxed text-justify max-w-2xl pt-4" style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.75' }}>{content.hero.description}</p>

              <div className="flex flex-wrap gap-4 pt-4">

                <button

                  onClick={() => scrollToSection('contact')}

                  className="px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"

                  style={{ fontFamily: 'Roboto, sans-serif' }}

                >

                  {content.hero.cta}

                </button>

                <button

                  onClick={() => scrollToSection('projects')}

                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"

                  style={{ fontFamily: 'Roboto, sans-serif' }}

                >

                  View My Work

                </button>

              </div>

              <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">

                <div className="flex items-center space-x-2">

                  <MapPin size={16} className="text-orange-600" />

                  <span>{content.contact.location}</span>

                </div>

                <div className="flex items-center space-x-2">

                  <GraduationCap size={16} className="text-orange-600" />

                  <span>University of Juba</span>

                </div>

                <div className="flex items-center space-x-2">

                  <Languages size={16} className="text-orange-600" />

                  <span>English, Arabic, Dinka</span>

                </div>

              </div>

            </div>

            <div className="relative z-10 mb-8 order-1 md:order-2">

              <div className="relative bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 shadow-lg z-0">

                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md z-20 animate-smooth-pulse">

                  <span className="text-sm font-semibold text-orange-600">Available for Freelance</span>

                </div>

                <div className="aspect-square rounded-xl overflow-hidden relative z-0">

                  <img 
                    src="/profile.png"
                    alt="Riak Mawut Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />

                </div>

              </div>

              

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100 z-30 animate-smooth-pulse" style={{ animationDelay: '0.5s' } as React.CSSProperties}>

                <div className="flex items-center space-x-3">

                  <Shield className="text-orange-600" size={32} />

                  <div>

                    <p className="font-semibold text-gray-900">Security-Focused</p>

                    <p className="text-sm text-gray-600">Secure by Design</p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 flex justify-center">

          <ChevronDown className="text-orange-600 animate-bounce" size={32} />

        </div>

      </section>

      {/* About Section */}

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>About</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div className="space-y-6">

              {content.about.paragraphs.map((paragraph, index) => (

                <p key={index} className="text-gray-700 leading-relaxed text-justify text-base sm:text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>

                  {paragraph}

                </p>

              ))}

            </div>

            <div className="relative">

              <div className="rounded-xl overflow-hidden shadow-lg">

                <img 

                  src="/profile 2.png"

                  alt="Riak Mawut Angui Atem - Professional Profile"

                  className="w-full h-auto object-cover rounded-xl"

                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>

          <p className="text-gray-600 mb-12">Supply Chain Expertise + Technical Skills</p>

          

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {content.skills.map((skill, index) => (

              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />

                <span className="text-gray-700">{skill}</span>

              </div>

            ))}

          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[

              { icon: Code, label: "Frontend Dev", tech: "React, Next.js, Tailwind" },

              { icon: Server, label: "Backend Dev", tech: "Node.js, Express, APIs" },

              { icon: Database, label: "Databases", tech: "MongoDB, MySQL" },

              { icon: Shield, label: "Security", tech: "Secure Coding, HTTPS, Auth" }

            ].map((item, index) => (

              <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">

                <item.icon className="text-orange-600 mb-3" size={32} />

                <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>

                <p className="text-sm text-gray-600">{item.tech}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Experience Section */}

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Professional Experience</h2>

          

          <div className="space-y-8">

            {content.experience.map((job, index) => (

              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>

                    <p className="text-orange-600 font-medium">{job.company}</p>

                    <p className="text-sm text-gray-600">{job.location}</p>

                  </div>

                  <span className="text-sm font-medium text-gray-600 mt-2 sm:mt-0">{job.period}</span>

                </div>

                

                <ul className="space-y-2 mt-4">

                  {job.highlights.map((highlight, idx) => (

                    <li key={idx} className="flex items-start space-x-3">

                      <span className="text-orange-600 mt-1">•</span>

                      <span className="text-gray-700">{highlight}</span>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects Section */}

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects & Portfolio</h2>

          <p className="text-gray-600 mb-12">Sample projects demonstrating full-stack development and security practices</p>

          

          <div className="grid sm:grid-cols-2 gap-8">

            {content.projects.map((project, index) => {
              const imageMap = [
                '/project-image1.png',
                '/project-image2.png',
                '/project-image3.png',
                '/project-image4.png'
              ];

              return (
                <a 
                  key={index} 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer block"
                >

                  <div className="aspect-video relative overflow-hidden">

                    <img 
                      src={imageMap[index]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                        <span className="text-orange-600 font-semibold flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          View Demo
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                    <p className="text-sm text-orange-600 font-medium mb-3">{project.tech}</p>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors">
                      <span>View Live Demo</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                  </div>

                </a>
              );
            })}

          </div>

        </div>

      </section>

      {/* Services Section */}

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services & Pricing</h2>

          <p className="text-gray-600 mb-12">Affordable web development for small businesses and startups</p>

          

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {content.services.map((service, index) => (

              <div 

                key={index} 

                onClick={() => handleServiceClick(service)}

                className={`bg-white p-8 rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-orange-400 ${

                  index === 1 ? 'border-orange-600 relative' : 'border-gray-200'

                }`}

                role="button"

                tabIndex={0}

                onKeyDown={(e) => {

                  if (e.key === 'Enter' || e.key === ' ') {

                    e.preventDefault();

                    handleServiceClick(service);

                  }

                }}

                aria-label={`Select ${service.tier} plan for $${service.priceValue}`}

              >

                {index === 1 && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">

                    Popular

                  </div>

                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.tier}</h3>

                <p className="text-3xl font-bold text-orange-600 mb-6">{service.price}</p>

                <ul className="space-y-3">

                  {service.features.map((feature, idx) => (

                    <li key={idx} className="flex items-start space-x-3">

                      <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={18} />

                      <span className="text-gray-700">{feature}</span>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 text-center">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Offer</h3>

            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">

              <div>

                <h4 className="font-semibold text-gray-900 mb-2">Responsive Websites & Web Apps</h4>

                <p className="text-sm text-gray-700">Landing pages, business sites, admin dashboards, and single-page applications</p>

              </div>

              <div>

                <h4 className="font-semibold text-gray-900 mb-2">Security-Aware Development</h4>

                <p className="text-sm text-gray-700">Secure configuration, input validation, CORS, environment secrets</p>

              </div>

              <div>

                <h4 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h4>

                <p className="text-sm text-gray-700">Competitive rates for small projects, MVPs, and early-stage startups</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>

          <p className="text-gray-600 mb-12">

            I'm available for Executive Assistant, Administrative, Logistics, Supply Chain, IT support roles, 

            and freelance web development projects. Open to remote and local opportunities.

          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-6">

              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

              

              <a href={`tel:${content.contact.phone}`} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">

                  <Phone className="text-orange-600" size={24} />

                </div>

                <div>

                  <p className="text-sm text-gray-600">Phone</p>

                  <p className="font-semibold text-gray-900">{content.contact.phone}</p>

                </div>

              </a>

              <a href={`mailto:${content.contact.email}`} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">

                  <Mail className="text-orange-600" size={24} />

                </div>

                <div>

                  <p className="text-sm text-gray-600">Email</p>

                  <p className="font-semibold text-gray-900">{content.contact.email}</p>

                </div>

              </a>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">

                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">

                  <MapPin className="text-orange-600" size={24} />

                </div>

                <div>

                  <p className="text-sm text-gray-600">Location</p>

                  <p className="font-semibold text-gray-900">{content.contact.location}</p>

                </div>

              </div>

              <a 
                href="/resume.pdf" 
                download
                className="w-full flex items-center justify-center space-x-2 p-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >

                <Download size={20} />

                <span>Download CV (PDF)</span>

              </a>

            </div>

            <div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Send a Message</h3>

              
              <form onSubmit={handleSubmit} className="space-y-4">

                <input

                  type="text"

                  placeholder="Your Name *"

                  value={formData.name}

                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                />

                

                <input

                  type="email"

                  placeholder="Your Email *"

                  value={formData.email}

                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                  required

                />

                

                <input

                  type="tel"

                  placeholder="Your Phone Number *"

                  value={formData.phone}

                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                  required

                />

                

                <input

                  type="text"

                  placeholder="Subject"

                  value={formData.subject}

                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                />

                

                <textarea

                  id="message-textarea"

                  placeholder="Your Message *"

                  value={formData.message}

                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                  rows={5}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors resize-none"

                  required

                />

                {formStatus.error && (

                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">

                    <AlertCircle size={20} />

                    <span className="text-sm">{formStatus.error}</span>

                  </div>

                )}

                {formStatus.success && (

                  <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">

                    <CheckCircle size={20} />

                    <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>

                  </div>

                )}

                <button

                  type="submit"

                  disabled={formStatus.loading}

                  className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"

                >

                  {formStatus.loading ? (

                    <>

                      <Loader className="animate-spin" size={20} />

                      <span>Sending...</span>

                    </>

                  ) : (

                    <span>Send Message</span>

                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>

              <div className="flex items-center space-x-2 mb-4">

                <img 

                  src="/profile-icon.png"

                  alt="Riak Mawut Logo"

                  className="w-10 h-10 object-contain"

                />

                <span className="text-xl font-bold text-orange-600">Riak Mawut</span>

              </div>

              <p className="text-gray-400 text-sm">

                Supply Chain Professional & Cybersecurity Student building secure, responsive web solutions.

              </p>

            </div>

            <div>

              <h4 className="font-semibold mb-4">Quick Links</h4>

              <div className="space-y-2 text-sm">

                {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (

                  <button

                    key={item}

                    onClick={() => scrollToSection(item.toLowerCase())}

                    className="block text-gray-400 hover:text-orange-400 transition-colors"

                  >

                    {item}

                  </button>

                ))}

              </div>

            </div>

            <div>

              <h4 className="font-semibold mb-4">Education & Certification</h4>

              <div className="space-y-2 text-sm text-gray-400">

                <p>Cybersecurity Degree (University of Juba)</p>

                <p>Business Administration Diploma</p>

                <p>Driver's License: A, B, C, D1, D, E, T</p>

              </div>

            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">

            <p>© 2026 Riak Mawut Angui Atem — All rights reserved.</p>

            <button 

              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

              className="mt-4 sm:mt-0 text-orange-400 hover:text-orange-300 transition-colors"

            >

              Back to top ↑

            </button>

          </div>

        </div>

      </footer>

    </div>

  );

}

