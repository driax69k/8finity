import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "cacfd6d0-bde4-42a3-84d0-802bf8d7cfe2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gold font-display font-medium text-xs tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              START YOUR <br />
              <span className="text-glow-gold italic">8FINITY JOURNEY.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-md">
              Whether you have a specific project in mind or just want to explore
              the possibilities, we're ready to listen.
            </p>

            <div className="space-y-10">
              {CONTACT_INFO.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-sm bg-gold/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-display text-lg font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 lg:p-12"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Sterling"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Inquiry Type</label>
                <select 
                  name="inquiry_type"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors text-white/50 focus:text-white"
                >
                  {SERVICES.map((service) => (
                    <option key={service.id} className="bg-black-deep" value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option className="bg-black-deep" value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1">Project Details</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell us about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group py-5 bg-gold text-black-pure font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-gold-light transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="tracking-[0.2em]">{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {result && (
                <p className={`text-center text-sm font-medium tracking-wide ${result.includes("Successfully") ? "text-gold" : "text-red-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
