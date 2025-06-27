"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, CheckCircle } from "lucide-react";

interface City {
  name: string;
  region: string;
  email: string;
  phone: string;
  postCode: string;
  avatar: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const HealthcareFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const cities: City[] = [
    {
      name: "Kathmandu",
      region: "Bagmati",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "44600",
      avatar: "K",
    },
    {
      name: "Lalitpur",
      region: "Sudportala",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "44700",
      avatar: "L",
    },
    {
      name: "Bhaktapur",
      region: "Thimi",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "44800",
      avatar: "B",
    },
    {
      name: "Nepalgunj",
      region: "Dhamboji",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "21900",
      avatar: "N",
    },
    {
      name: "Birgunj",
      region: "Birpur",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "44300",
      avatar: "Bi",
    },
    {
      name: "Chitwan",
      region: "Bharatpur",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "44200",
      avatar: "C",
    },
    {
      name: "Biratnagar",
      region: "Bir Chowk",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "56613",
      avatar: "Br",
    },
    {
      name: "Pokhara",
      region: "Office 408",
      email: "hy@gmail.com",
      phone: "+977-9847456123",
      postCode: "33700",
      avatar: "P",
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "About Us",
      links: [
        { label: "Health Aggregator", href: "/about" },
        { label: "Simplifying Healthcare", href: "/simplifying" },
        { label: "2023 A-D", href: "/reports" },
      ],
    },
    {
      title: "Corporate Events",
      links: [
        { label: "Personalized Wellness Program", href: "/wellness" },
        { label: "Corporate Health Training", href: "/training" },
        { label: "Corporate Health Camps", href: "/camps" },
        { label: "Awareness Videos", href: "/videos" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Ambulance Directory", href: "/ambulance" },
        { label: "OPD Doctor Booking", href: "/opd" },
        { label: "Tele Doctor Consultation", href: "/tele-consultation" },
        { label: "Virtual Doctor Consultation", href: "/virtual" },
        { label: "Lab Testing at Home", href: "/lab-testing" },
        { label: "International Doctor Consultation", href: "/international" },
        { label: "Medicine Delivery at Home", href: "/medicine" },
        { label: "Ayurvedic Doctor Consultation", href: "/ayurvedic" },
        { label: "Animal Health", href: "/animal-health" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Supported Documents", href: "/documents" },
        { label: "Geolocation", href: "/geolocation" },
        { label: "Proof Verification", href: "/verification" },
        { label: "Manual Review", href: "/review" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Banking", href: "/banking" },
        { label: "Insurance", href: "/insurance" },
        { label: "Telecommunications", href: "/telecom" },
        { label: "Corporates", href: "/corporates" },
        { label: "Education", href: "/education" },
        { label: "Healthcare", href: "/healthcare" },
      ],
    },
  ];

  const resources: FooterLink[] = [
    { label: "Blogs", href: "/blogs" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "White Papers & Reports", href: "/reports" },
    { label: "Press Releases", href: "/press" },
    { label: "Mobile SDK", href: "/sdk" },
    { label: "Webinars", href: "/webinars" },
  ];

  const complianceBadges = [
    "ISO 27001:2013",
    "SOC2 COMPLIANT",
    "PCI DSS COMPLIANT",
    "GDPR",
    "CG GDPR",
    "CYBER ESSENTIALS PLUS",
    "KJM - AGE VERIFICATION",
    "CCPA COMPLIANT",
  ];

  return (
    <footer className="bg-gradient-to-br from-white to-indigo-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-purple-500 rounded- p-8 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">
                  Subscribe to the latest
                </h3>
                <p className="text-white/80 text-sm">
                  industry updates each week
                </p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center gap-2"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-gray-800 font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="font-medium text-gray-800">Kupandole,Lalitpur</p>
              <p>+977-9801324481</p>
              <p>www.HealthVaidyaKayo.com</p>
            </div>
            <div className="mt-6">
              <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors mb-3 block">
                Contact us
              </button>
              <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors block">
                SME
              </button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-800 font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                {resource.label}
              </a>
            ))}
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-12">
          <h4 className="text-gray-800 font-semibold mb-6">Available Cities</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mx-auto mb-3">
                  {city.avatar}
                </div>
                <h5 className="font-semibold text-gray-800 text-sm mb-1">
                  {city.name}
                </h5>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>{city.region}</p>
                  <p>{city.email}</p>
                  <p>{city.phone}</p>
                  <p>{city.postCode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {complianceBadges.map((badge, index) => (
            <span
              key={index}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">Copyright © 2017- 2024</p>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/terms" className="text-gray-500 hover:text-purple-600">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-gray-500 hover:text-purple-600">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-gray-500 hover:text-purple-600">
              Cookie Policy
            </a>
          </div>

          <div className="flex gap-3">
            {[
              "twitter",
              "linkedin",
              "facebook",
              "youtube",
              "instagram",
              "github",
            ].map((social, index) => (
              <a
                key={index}
                href={`#${social}`}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-100 hover:text-purple-600 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HealthcareFooter;
