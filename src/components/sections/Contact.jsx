import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import BGVideo from "../../assets/Contact.mp4";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    countryCode: "+92",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const countryCodes = [
    { code: "+92", country: "🇵🇰 Pakistan" },
    { code: "+1", country: "🇺🇸 USA/Canada" },
    { code: "+91", country: "🇮🇳 India" },
    { code: "+44", country: "🇬🇧 UK" },
    { code: "+61", country: "🇦🇺 Australia" },
    { code: "+49", country: "🇩🇪 Germany" },
    { code: "+33", country: "🇫🇷 France" },
    { code: "+971", country: "🇦🇪 UAE" },
    { code: "+966", country: "🇸🇦 Saudi Arabia" },
  ];

  const services = [
    "Web Design",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Graphic Designing",
    "Digital Marketing",
    "SEO Services",
    "Brand Identity",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch("https://formspree.io/f/xblkjgao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          service: formData.service,
          whatsapp: `${formData.countryCode} ${formData.whatsapp.trim()}`,
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus({
          message: "✅ Message sent successfully! We'll get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", service: "", countryCode: "+92", whatsapp: "", message: "" });
        formRef.current?.reset();
      } else throw new Error("Form submission failed");
    } catch (err) {
      console.error(err);
      setStatus({ message: "❌ Failed to send message. Try again later.", type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ message: "", type: "" }), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-24 text-white bg-[#1a1a1a]"
    >
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute w-[600px] h-[600px] bg-red-600/5 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full bottom-0 right-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full top-1/2 left-0"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Background Video with Neomorphic Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src={BGVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Neomorphic Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/80 z-0" />

      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-2xl px-4 mx-auto">

          {/* Title with Neomorphic Design */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
              {/* Neomorphic Underline */}
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></span>
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"></span>
            </h2>

            <p className="text-gray-300 max-w-lg mx-auto relative inline-block px-6 py-2 rounded-full
              bg-[#1a1a1a]
              shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Neomorphic Form Container */}
          <div className="relative rounded-3xl bg-[#1a1a1a] shadow-[12px_12px_30px_#0f0f0f,-12px_-12px_30px_#252525] hover:shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] transition-all duration-500">
            
            {/* Neomorphic Top Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-3xl"></div>
            
            {/* Neomorphic Inner Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 rounded-3xl bg-[#1a1a1a] space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field with Neomorphic Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      placeholder="John Doe"
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white placeholder-gray-500 
                        shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                        focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                        focus:ring-2 focus:ring-red-500/50
                        transition-all duration-300 outline-none"
                    />
                    {/* Neomorphic Input Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field with Neomorphic Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      placeholder="john@example.com"
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white placeholder-gray-500 
                        shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                        focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                        focus:ring-2 focus:ring-red-500/50
                        transition-all duration-300 outline-none"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Service Select with Neomorphic Design */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white 
                      shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                      focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                      focus:ring-2 focus:ring-red-500/50
                      transition-all duration-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-400 bg-[#1a1a1a]">Select a service</option>
                    {services.map((s) => <option key={s} value={s} className="text-white bg-[#1a1a1a]">{s}</option>)}
                  </select>
                  {/* Neomorphic Select Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* WhatsApp with Neomorphic Design */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  WhatsApp Number *
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative sm:w-1/3 w-full">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white 
                        shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                        focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                        focus:ring-2 focus:ring-red-500/50
                        transition-all duration-300 outline-none appearance-none cursor-pointer"
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code} className="text-white bg-[#1a1a1a]">{country}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative sm:w-2/3 w-full">
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      placeholder="300 1234567"
                      onChange={handleChange}
                      pattern="[0-9]*"
                      className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white placeholder-gray-500 
                        shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                        focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                        focus:ring-2 focus:ring-red-500/50
                        transition-all duration-300 outline-none"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 pl-1">
                  Include your country code and number without spaces
                </p>
              </div>

              {/* Message Textarea with Neomorphic Design */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    placeholder="Tell us about your project, timeline, and budget..."
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border-0 rounded-xl px-4 py-3 text-white placeholder-gray-500 
                      shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                      focus:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                      focus:ring-2 focus:ring-red-500/50
                      transition-all duration-300 outline-none resize-none"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button with Neomorphic Design */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full py-3.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden
                  ${isSubmitting
                    ? "bg-[#2a2a2a] cursor-not-allowed shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]"
                    : "bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525] hover:bg-[#1e1e1e]"
                  }`}
              >
                {/* Neomorphic Inner Glow */}
                {!isSubmitting && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                )}
                
                {/* Neomorphic Red Glow Effect */}
                {!isSubmitting && (
                  <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(239,68,68,0.15)]"></span>
                )}

                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {/* Status Message with Neomorphic Design */}
              {status.message && (
                <div className={`relative p-4 rounded-xl text-center text-sm font-medium transition-all duration-300
                  ${status.type === "success"
                    ? "bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525] text-green-400 border border-green-500/20"
                    : "bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525] text-red-400 border border-red-500/20"
                  }`}>
                  {status.message}
                </div>
              )}

              {/* Privacy Text */}
              <p className="text-xs text-gray-400 text-center mt-2">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </div>

          {/* Detailed Form Link with Neomorphic Design */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">Need a more detailed quote?</p>
            <a
              href="https://deslog-digital-solutuons-requirement-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden group/link
                bg-[#1a1a1a]
                shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525]
                hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
                active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                hover:bg-[#1e1e1e]"
            >
              {/* Neomorphic Inner Glow */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
              
              {/* Neomorphic Red Glow Effect */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(239,68,68,0.15)]"></span>
              
              <span className="relative">Fill Detailed Requirement Form</span>
              <svg className="relative w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        /* Neomorphic Base */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }
        
        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525;
        }
        
        /* Neomorphic Inset */
        .neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }
        
        /* Neomorphic Pressed (Active State) */
        .neu-pressed {
          box-shadow: inset 6px 6px 16px #0f0f0f, inset -6px -6px 16px #252525;
        }
        
        /* Smooth Transitions */
        * {
          transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        /* Neomorphic Grid Pattern */
        .neu-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          box-shadow: inset 1px 1px 3px #0f0f0f, inset -1px -1px 3px #252525;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          box-shadow: 2px 2px 4px #0f0f0f, -2px -2px 4px #252525;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }

        /* Remove default select styling */
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        /* Input autofill styling */
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          -webkit-box-shadow: inset 3px 3px 8px #0f0f0f, inset -3px -3px 8px #252525 !important;
          -webkit-text-fill-color: white !important;
          background-color: #1a1a1a !important;
        }
      `}</style>
    </section>
  );
};