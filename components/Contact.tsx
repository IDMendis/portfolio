"use client";
import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

const { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } = LucideIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dinushimendisxp@gmail.com",
      href: "mailto:dinushimendisxp@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 774 758 167",
      href: "tel:+94774758167",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
    },
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "341aa7b2-4dcc-4dcf-8123-227cad9da742",
          from_name: "B.I.P.D Mendis",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project idea, internship opportunity, or just want to say hi?
            I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-pink-400 mb-6">
                Let’s Connect
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-pink-400/50 hover:bg-pink-500/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-green-400 font-medium">
                  Open to internships & projects
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-pink-400 mb-6">
              Send a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <p className="text-green-400">Message sent successfully!</p>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                <AlertCircle className="text-red-400" />
                <p className="text-red-400">{submitError}</p>
              </div>
            )}

            <div className="space-y-5">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white"
              />

              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white resize-none"
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                {isSubmitting ? "Sending..." : <>
                  <Send size={18} /> Send Message
                </>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
