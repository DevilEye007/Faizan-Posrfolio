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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-24 text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BGVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0" />

      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-2xl px-4 mx-auto">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
              Get In Touch
            </h2>
            <p className="text-gray-300 max-w-lg mx-auto">
              Have a project in mind? Let’s discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="john@example.com"
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service Interested In *
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none"
              >
                <option value="" className="text-gray-700">Select a service</option>
                {services.map((s) => <option key={s} value={s} className="text-gray-900">{s}</option>)}
              </select>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp Number *
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="sm:w-1/3 w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code} className="text-gray-900">{country}</option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  placeholder="300 1234567"
                  onChange={handleChange}
                  pattern="[0-9]*"
                  className="sm:w-2/3 w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Include your country code and number without spaces
              </p>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                placeholder="Tell us about your project, timeline, and budget..."
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Status */}
            {status.message && (
              <div className={`p-4 rounded-xl text-center text-sm font-medium transition-all ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}>
                {status.message}
              </div>
            )}

            {/* Privacy */}
            <p className="text-xs text-gray-400 text-center mt-2">
              Your information is secure and will only be used to respond to your inquiry.
            </p>
          </form>

          {/* Detailed Form Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">Need a more detailed quote?</p>
            <a
              href="https://deslog-digital-solutuons-requirement-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-8 rounded-xl font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              Fill Detailed Requirement Form
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};