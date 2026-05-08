'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Camera, Mail, Phone, MapPin, GraduationCap, Languages, Download, Shield, Code, Server, Database, Globe, ChevronDown, Menu, X, CheckCircle, AlertCircle, Loader, Linkedin, Facebook } from 'lucide-react';

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

      title: "Finance & Logistics Professional · Software Engineer",

      subtitle: "Humanitarian Operations · Procurement · Supply Chain · Web Development",

      webDev: "I build full responsive websites and web apps — affordable freelance rates.",

      cta: "Hit me up",

      description: "Results-driven Finance and Logistics professional with 2.5+ years supporting humanitarian health programmes in South Sudan. Expert in financial management, procurement cycle administration, and supply chain coordination. I also design and build full responsive websites and web applications (Next.js, Tailwind, Node, MongoDB); available for freelance work at competitive rates."

    },

    contact: {

      phone: "+211 922 950 783",

      email: "Riakmawut68@gmail.com",

      location: "Muniki, Juba, South Sudan"

    },

    about: {
      paragraphs: [
        "My name is Riak Mawut Angui Atem. I am a results-driven Finance and Logistics professional with over two and a half years of progressive experience supporting humanitarian health programmes in South Sudan. I demonstrate proven expertise in end-to-end financial management, procurement cycle administration, supply chain coordination, and inventory control within donor-funded and NGO operational environments.",
        "Throughout my career, I have developed exceptional proficiency in upholding strict accountability standards, donor compliance frameworks, and audit-ready documentation practices. I am skilled in deploying QuickBooks, ERPs, and advanced Excel-based systems to drive operational efficiency and transparent reporting. My experience spans financial documentation, accounts payable/receivable processing, invoice verification, bank reconciliation, and comprehensive expenditure tracking.",
        "Currently in my 4th year pursuing a Bachelor's degree in Cybersecurity at the University of Juba, where I have developed practical coding skills and expertise in secure systems design. Through my studies and independent practice, I design and build fully responsive websites and web applications using modern frameworks like Next.js, React, and MongoDB. My web development work emphasizes accessibility, mobile-first design, secure defaults, clean architecture, and cost-effective deployment strategies.",
        "I am recognized for meticulous attention to detail, sound judgment under pressure, and the ability to collaborate effectively within multidisciplinary humanitarian teams. Professionally, I am detail-oriented, analytical, accountability-driven, and committed to leveraging financial acumen, logistics expertise, and technical skills to strengthen programme delivery. I offer affordable freelance services for web development and technical solutions for small businesses and personal projects."
      ]
    },

    skills: [

      "Financial Management & Accounting",

      "Voucher Preparation & Audit-Ready Documentation",

      "QuickBooks (Journal Entries, Ledger Posting, Bank Reconciliation)",

      "Accounts Payable/Receivable Processing & Reconciliation",

      "Procurement Cycle Administration (RFQ, RFP, Tendering, Bid Evaluation)",

      "Supply Chain Coordination & Vendor Management",

      "Inventory Control & Warehouse Operations",

      "Advanced Microsoft Excel (Dashboards, Tracking Systems, Data Analysis)",

      "Financial Reporting & Donor Compliance",

      "Web Development (Next.js, Tailwind, React)",

      "Backend Development (Node.js, Express, MongoDB)",

      "Database Management & API Development",

      "Responsive Design & Mobile-First Approach",

      "Security Fundamentals & Secure Coding Practices"

    ],

    experience: [

      {

        title: "Logistics & Administrative Assistant",

        company: "Mayar Medical Centre",

        location: "Juba, South Sudan",

        period: "July 2025 – April 2026",

        highlights: [

          "Managed the full procurement cycle for medical and non-medical supplies — including RFQ preparation, supplier coordination, competitive bid evaluation, and purchase order processing — in strict compliance with internal controls and organisational standards.",

          "Coordinated end-to-end logistics for pharmaceuticals, medical equipment, and consumables, ensuring timely and accurate delivery to sustain uninterrupted healthcare service delivery.",

          "Maintained robust inventory management systems for pharmaceuticals, medical consumables, and general supplies, including real-time stock tracking, periodic reconciliation, and expiry date monitoring to prevent waste and stockouts.",

          "Oversaw warehouse operations and storage best practices, ensuring proper handling, systematic organisation, and full accountability of all medical and non-medical stock.",

          "Verified supplier invoices against purchase orders, delivery notes, and contracts, ensuring 100% accuracy and donor compliance prior to payment authorisation.",

          "Prepared payment vouchers and maintained comprehensive financial documentation to support transparent recordkeeping, operational audits, and donor reporting requirements.",

          "Supported financial operations including petty cash management, expenditure tracking, and accounting processes using QuickBooks and Excel-based financial tools.",

          "Maintained and regularly updated supplier databases; monitored vendor performance to ensure reliability, cost-effectiveness, and sustained service quality.",

          "Conducted consumption trend analysis to inform procurement planning and prevent critical stockouts of essential medical supplies.",

          "Designed and maintained Excel-based tracking tools for inventory management, procurement activity, and financial data reporting, improving data accessibility for management decision-making.",

          "Ensured full compliance with internal policies, standard operating procedures, and accountability standards across all logistics, procurement, and administrative functions.",

          "Facilitated cross-functional coordination between medical, administrative, and finance teams to align supply chain activities with programme delivery priorities.",

          "Produced operational and financial reports to support management oversight, programme review, and donor accountability processes."

        ]

      },

      {

        title: "Finance & Administrative Assistant",

        company: "Favor Africa Ministries International",

        location: "Juba, South Sudan",

        period: "January 2024 – June 2025",

        highlights: [

          "Executed end-to-end financial documentation encompassing voucher preparation, payment requests, and expenditure tracking to underpin accurate programme budgeting and donor reporting.",

          "Verified all supplier invoices against purchase orders and delivery notes, ensuring full compliance and elimination of discrepancies across programme financial records.",

          "Maintained audit-ready financial filing systems in alignment with internal controls, donor requirements, and international accountability standards.",

          "Supported the full procurement process by preparing RFQs, conducting comparative quotation analysis, evaluating bids, and coordinating supplier follow-up to facilitate timely acquisition of goods and services.",

          "Tracked purchase orders and coordinated logistics activities including dispatch planning, transport arrangements, and delivery confirmation to ensure uninterrupted programme operations.",

          "Managed inventory tracking, stock movement recording, and reconciliation processes using Excel-based systems, maintaining accurate and up-to-date stock records.",

          "Supported payroll administration by managing employee time tracking, leave records, and benefits deductions, reducing discrepancies by 15%.",

          "Provided comprehensive administrative support including document control, correspondence management, and office coordination to sustain operational effectiveness.",

          "Developed and maintained Excel dashboards for finance, procurement, and inventory reporting, enabling data-driven management oversight and programme planning."

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
            "jobTitle": "Finance & Logistics Professional",
            "description": "Finance and Logistics professional with 2.5+ years supporting humanitarian health programmes. Expert in financial management, procurement, supply chain coordination. Also a freelance web developer.",
            "url": "https://riak-portfolio.onrender.com",
            "image": "https://riak-portfolio.onrender.com/profile-icon.png",
            "email": "Riakmawut68@gmail.com",
            "telephone": "+211922950783",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Juba",
              "addressCountry": "South Sudan",
              "streetAddress": "Muniki"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Ndejje University"
            },
            "knowsAbout": [
              "Finance & Accounting",
              "Procurement",
              "Supply Chain Management",
              "Logistics",
              "QuickBooks",
              "Web Development",
              "Next.js",
              "React",
              "MongoDB"
            ],
            "sameAs": [
              "https://www.linkedin.com/in/riak-mawut-9019aa20a",
              "https://www.facebook.com/riak.mawut/"
            ]
          })
        }}
      />

      {/* Header */}

      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-14 sm:h-16">

            <div className="flex items-center space-x-1.5 sm:space-x-2">

              <img 

                src="/profile-icon.png"

                alt="Riak Mawut Logo"

                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"

              />

              <span className="text-lg sm:text-xl font-bold text-orange-600">Riak Mawut</span>

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

      <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">

              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 rounded-full">

                <Shield className="text-orange-600" size={18} />

                <span className="text-xs sm:text-sm font-medium text-orange-700">

                  Software Engineer • Finance & Logistics Professional

                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>

                Hi, I'm <span className="text-orange-600">{content.hero.name.split(' ')[0]}</span>

              </h1>

              <div className="space-y-1 sm:space-y-2">

                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>

                  {content.hero.title}

                </h2>

                <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>{content.hero.subtitle}</p>

              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-2xl pt-2 sm:pt-4" style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.75' }}>{content.hero.description}</p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">

                <button

                  onClick={() => scrollToSection('contact')}

                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-orange-700 transition-colors"

                  style={{ fontFamily: 'Roboto, sans-serif' }}

                >

                  {content.hero.cta}

                </button>

                <button

                  onClick={() => scrollToSection('projects')}

                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 text-sm sm:text-base font-medium rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"

                  style={{ fontFamily: 'Roboto, sans-serif' }}

                >

                  View My Work

                </button>

              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-600">

                <div className="flex items-center space-x-2">

                  <MapPin size={14} className="text-orange-600 flex-shrink-0" />

                  <span className="break-words">{content.contact.location}</span>

                </div>

                <div className="flex flex-col space-y-1">

                  <div className="flex items-center space-x-2">

                    <GraduationCap size={14} className="text-orange-600 flex-shrink-0" />

                    <span>Ndejje University, BBA Accounting</span>

                  </div>

                  <div className="flex items-center space-x-2 ml-6">

                    <span className="text-xs text-gray-600">University of Juba, Bachelor's in Cybersecurity (4th Year)</span>

                  </div>

                </div>

                <div className="flex items-center space-x-2">

                  <Languages size={14} className="text-orange-600 flex-shrink-0" />

                  <span>English, Arabic, Dinka</span>

                </div>

              </div>

            </div>

            <div className="relative z-10 mb-6 sm:mb-8 order-1 md:order-2">

              <div className="relative bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg z-0">

                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md z-20 animate-smooth-pulse">

                  <span className="text-xs sm:text-sm font-semibold text-orange-600">Available for Freelance</span>

                </div>

                <div className="aspect-square rounded-xl overflow-hidden relative z-0">

                  <img 
                    src="/profile.png"
                    alt="Riak Mawut Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />

                </div>

              </div>

              

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-orange-100 z-30 animate-smooth-pulse hidden sm:block" style={{ animationDelay: '0.5s' } as React.CSSProperties}>

                <div className="flex items-center space-x-2 sm:space-x-3">

                  <Shield className="text-orange-600" size={24} />

                  <div>

                    <p className="font-semibold text-sm sm:text-base text-gray-900">Security-Focused</p>

                    <p className="text-xs sm:text-sm text-gray-600">Secure by Design</p>

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

      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>About</h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">

            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">

              {content.about.paragraphs.map((paragraph, index) => (

                <p key={index} className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>

                  {paragraph}

                </p>

              ))}

            </div>

            <div className="relative order-1 md:order-2">

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

      <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Core Competencies</h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">Supply Chain Expertise + Technical Skills</p>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

            {content.skills.map((skill, index) => (

              <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5 sm:mt-1" size={18} />

                <span className="text-sm sm:text-base text-gray-700">{skill}</span>

              </div>

            ))}

          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {[

              { icon: Code, label: "Frontend Dev", tech: "React, Next.js, Tailwind" },

              { icon: Server, label: "Backend Dev", tech: "Node.js, Express, APIs" },

              { icon: Database, label: "Databases", tech: "MongoDB, MySQL" },

              { icon: Shield, label: "Security", tech: "Secure Coding, HTTPS, Auth" }

            ].map((item, index) => (

              <div key={index} className="p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">

                <item.icon className="text-orange-600 mb-2 sm:mb-3" size={28} />

                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.label}</h3>

                <p className="text-xs sm:text-sm text-gray-600">{item.tech}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Experience Section */}

      <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Professional Experience</h2>

          

          <div className="space-y-6 sm:space-y-8">

            {content.experience.map((job, index) => (

              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">

                  <div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{job.title}</h3>

                    <p className="text-base sm:text-lg text-orange-600 font-medium">{job.company}</p>

                    <p className="text-xs sm:text-sm text-gray-600">{job.location}</p>

                  </div>

                  <span className="text-xs sm:text-sm font-medium text-gray-600 mt-2 sm:mt-0">{job.period}</span>

                </div>

                

                <ul className="space-y-2 sm:space-y-2 mt-3 sm:mt-4">

                  {job.highlights.map((highlight, idx) => (

                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">

                      <span className="text-orange-600 mt-1 flex-shrink-0">•</span>

                      <span className="text-sm sm:text-base text-gray-700">{highlight}</span>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects Section */}

      <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Projects & Portfolio</h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">Sample projects demonstrating full-stack development and security practices</p>

          

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

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

                  <div className="p-4 sm:p-6">

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                    <p className="text-xs sm:text-sm text-orange-600 font-medium mb-2 sm:mb-3">{project.tech}</p>

                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>

                    <div className="flex items-center text-orange-600 text-xs sm:text-sm font-medium group-hover:text-orange-700 transition-colors">
                      <span>View Live Demo</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Services & Pricing</h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">Affordable web development for small businesses and startups</p>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">

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

                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">

                    Popular

                  </div>

                )}

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{service.tier}</h3>

                <p className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 sm:mb-6">{service.price}</p>

                <ul className="space-y-2 sm:space-y-3">

                  {service.features.map((feature, idx) => (

                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">

                      <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5 sm:mt-1" size={16} />

                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 sm:p-8 text-center">

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What I Offer</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left max-w-4xl mx-auto">

              <div>

                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Responsive Websites & Web Apps</h4>

                <p className="text-xs sm:text-sm text-gray-700">Landing pages, business sites, admin dashboards, and single-page applications</p>

              </div>

              <div>

                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Security-Aware Development</h4>

                <p className="text-xs sm:text-sm text-gray-700">Secure configuration, input validation, CORS, environment secrets</p>

              </div>

              <div>

                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Affordable Pricing</h4>

                <p className="text-xs sm:text-sm text-gray-700">Competitive rates for small projects, MVPs, and early-stage startups</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">

            I'm available for Executive Assistant, Administrative, Logistics, Supply Chain, IT support roles, 

            and freelance web development projects. Open to remote and local opportunities.

          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">

            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>

              

              <a href={`tel:${content.contact.phone}`} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                  <Phone className="text-orange-600" size={20} />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-xs sm:text-sm text-gray-600">Phone</p>

                  <p className="text-sm sm:text-base font-semibold text-gray-900 break-all">{content.contact.phone}</p>

                </div>

              </a>

              <a href={`mailto:${content.contact.email}`} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                  <Mail className="text-orange-600" size={20} />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-xs sm:text-sm text-gray-600">Email</p>

                  <p className="text-sm sm:text-base font-semibold text-gray-900 break-all">{content.contact.email}</p>

                </div>

              </a>

              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                  <MapPin className="text-orange-600" size={20} />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-xs sm:text-sm text-gray-600">Location</p>

                  <p className="text-sm sm:text-base font-semibold text-gray-900 break-words">{content.contact.location}</p>

                </div>

              </div>

              <a 
                href="/resume.pdf" 
                download
                className="w-full flex items-center justify-center space-x-2 p-3 sm:p-4 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >

                <Download size={18} />

                <span>Download CV (PDF)</span>

              </a>

              <div className="flex items-center space-x-3 sm:space-x-4 pt-2 sm:pt-4">
                <span className="text-xs sm:text-sm text-gray-600 font-medium">Connect with me:</span>
                <a
                  href="https://www.linkedin.com/in/riak-mawut-9019aa20a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} className="text-gray-700" />
                </a>
                <a
                  href="https://www.facebook.com/riak.mawut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <Facebook size={18} className="text-gray-700" />
                </a>
              </div>

            </div>

            <div className="order-1 md:order-2">

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Send a Message</h3>

              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                <input

                  type="text"

                  placeholder="Your Name *"

                  value={formData.name}

                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                />

                

                <input

                  type="email"

                  placeholder="Your Email *"

                  value={formData.email}

                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                  required

                />

                

                <input

                  type="tel"

                  placeholder="Your Phone Number *"

                  value={formData.phone}

                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                  required

                />

                

                <input

                  type="text"

                  placeholder="Subject"

                  value={formData.subject}

                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}

                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"

                />

                

                <textarea

                  id="message-textarea"

                  placeholder="Your Message *"

                  value={formData.message}

                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                  rows={5}

                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition-colors resize-none"

                  required

                />

                {formStatus.error && (

                  <div className="flex items-center space-x-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">

                    <AlertCircle size={18} />

                    <span className="text-xs sm:text-sm">{formStatus.error}</span>

                  </div>

                )}

                {formStatus.success && (

                  <div className="flex items-center space-x-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">

                    <CheckCircle size={18} />

                    <span className="text-xs sm:text-sm">Message sent successfully! I'll get back to you soon.</span>

                  </div>

                )}

                <button

                  type="submit"

                  disabled={formStatus.loading}

                  className="w-full py-2.5 sm:py-3 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"

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

      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">

            <div>

              <div className="flex items-center space-x-2 mb-3 sm:mb-4">

                <img 

                  src="/profile-icon.png"

                  alt="Riak Mawut Logo"

                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"

                />

                <span className="text-lg sm:text-xl font-bold text-orange-600">Riak Mawut</span>

              </div>

              <p className="text-gray-400 text-xs sm:text-sm">

                Finance & Logistics Professional and Cybersecurity Student building secure, responsive web solutions.

              </p>

              <div className="flex items-center space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                <a
                  href="https://www.linkedin.com/in/riak-mawut-9019aa20a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/riak.mawut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <Facebook size={18} className="text-white" />
                </a>
              </div>

            </div>

            <div>

              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>

              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">

                {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (

                  <button

                    key={item}

                    onClick={() => scrollToSection(item.toLowerCase())}

                    className="block text-gray-400 hover:text-orange-400 transition-colors text-left"

                  >

                    {item}

                  </button>

                ))}

              </div>

            </div>

            <div>

              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Education & Certification</h4>

              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">

                <p>BBA Accounting, Ndejje University</p>

                <p>Bachelor's in Cybersecurity (4th Year), University of Juba</p>

                <p>Driver's License: A, B, C, D1, D, E, T</p>

              </div>

            </div>

          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">

            <p className="text-center sm:text-left mb-3 sm:mb-0">© 2026 Riak Mawut Angui Atem — All rights reserved.</p>

            <button 

              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

              className="text-orange-400 hover:text-orange-300 transition-colors"

            >

              Back to top ↑

            </button>

          </div>

        </div>

      </footer>

    </div>

  );

}

