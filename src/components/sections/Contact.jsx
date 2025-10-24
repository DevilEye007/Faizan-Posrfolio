import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import BGVideo from "../../assets/Contact.mp4"; // Adjust path if needed

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    countryCode: "",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xblkjgao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          whatsapp: `${formData.countryCode} ${formData.whatsapp}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("✅ Message Sent!");
        setFormData({
          name: "",
          email: "",
          service: "",
          countryCode: "",
          whatsapp: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 text-white">
      
      {/* ✅ Background Video for desktop */}
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

      {/* ✅ Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />

      {/* ✅ Form Content */}
      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-2xl px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-white text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
          >
            {/* Name Input */}
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            {/* Service Selection */}
            <select
              name="service"
              required
              value={formData.service}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select Service Type</option>
              <option value="Web Design" className="text-black">Web Design</option>
              <option value="App Development" className="text-black">App Development</option>
              <option value="UI/UX Design" className="text-black">UI/UX Design</option>
              <option value="Graphic Designing" className="text-black">Graphic Designing</option>
            </select>

            {/* WhatsApp Input */}
            <div className="flex gap-4">
              <select
                name="countryCode"
                required
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="w-1/3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="">Code</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+91">🇮🇳 +91</option>
                {/* Add others as needed */}
              </select>

              <input
                type="text"
                name="whatsapp"
                required
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                className="w-2/3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            {/* Message Input */}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message..."
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
            >
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-sm font-medium text-green-400 mt-3">
                {status}
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
