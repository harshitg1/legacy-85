"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  MessageCircle,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary/5 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-theme-primary" />
            <span className="text-sm font-semibold text-theme-primary uppercase tracking-wider">
              Get In Touch
            </span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Connect with <span className="text-theme-primary">our team</span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We're here to help you succeed. Reach out with any questions about
            our services or to schedule a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm h-full">
              {/* Phone */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-theme-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+916393142456"
                  className="text-xl font-bold text-theme-primary hover:text-theme-primary-light transition-colors"
                >
                  +91 6393142456
                </a>
              </div>

              {/* Address */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-theme-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Address
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600 text-sm">
                    Legacy85 Mentoring Private Limited
                  </p>
                  <p className="text-slate-600 text-sm">
                    117/H-1/365 Pandu Nagar, Kanpur – Opp Bikanervala
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-theme-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Email
                  </h3>
                </div>
                <div className="space-y-1">
                  <a
                    href="mailto:contact@legacy85mentoringpvtltd.com"
                    className="text-slate-600 hover:text-theme-primary transition-colors block text-sm"
                  >
                    contact@legacy85mentoringpvtltd.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-theme-primary/10 rounded-lg">
                    <Globe className="w-5 h-5 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Website
                  </h3>
                </div>
                <div className="space-y-1">
                  <a
                    href="https://www.legacy85mentoringpvtltd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-theme-primary transition-colors block text-sm"
                  >
                    www.legacy85mentoringpvtltd.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-theme-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-1 text-slate-600 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-2.5 bg-slate-100 hover:bg-theme-primary/10 rounded-lg transition-colors group"
                  >
                    <Facebook className="w-5 h-5 text-slate-500 group-hover:text-theme-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 bg-slate-100 hover:bg-theme-primary/10 rounded-lg transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-slate-500 group-hover:text-theme-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 bg-slate-100 hover:bg-theme-primary/10 rounded-lg transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-500 group-hover:text-theme-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 bg-slate-100 hover:bg-theme-primary/10 rounded-lg transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-slate-500 group-hover:text-theme-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-theme-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg">
            Need immediate assistance? Call us directly at{" "}
            <a
              href="tel:+916393142456"
              className="text-theme-primary hover:text-theme-primary-dark transition-colors font-semibold"
            >
              +91 6393142456
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
