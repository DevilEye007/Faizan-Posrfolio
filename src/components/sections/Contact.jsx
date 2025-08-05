import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

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
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-red-500/20"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            {/* Service */}
            <select
              name="service"
              required
              value={formData.service}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="" className="text-gray-400">Select Service Type</option>
              <option value="Web Design" className="text-black">Web Design</option>
              <option value="App Development" className="text-black">App Development</option>
              <option value="UI/UX Design" className="text-black">UI/UX Design</option>
              <option value="Graphic Designing" className="text-black">Graphic Designing</option>
            </select>

            {/* WhatsApp with Country Code */}
            <div className="flex gap-4">
              <select
                name="countryCode"
                required
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="w-1/3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option className="text-black" value="">Code</option>
                <option className="text-black" value="+92">🇵🇰 +92</option>
                <option className="text-black" value="+1">🇺🇸 +1</option>
                <option className="text-black" value="+91">🇮🇳 +91</option>
                <option className="text-black" value="+44">🇬🇧 +44</option>
                <option className="text-black" value="+61">🇦🇺 +61</option>
                <option className="text-black" value="+971">🇦🇪 +971</option>
                <option className="text-black" value="+880">🇧🇩 +880</option>
                <option className="text-black" value="+93">🇦🇫 +93</option>
                <option className="text-black" value="+81">🇯🇵 +81</option>
                <option className="text-black" value="+86">🇨🇳 +86</option>
                <option className="text-black" value="+49">🇩🇪 +49</option>
                <option className="text-black" value="+33">🇫🇷 +33</option>
                <option className="text-black" value="+39">🇮🇹 +39</option>
                <option className="text-black" value="+34">🇪🇸 +34</option>
                <option className="text-black" value="+7">🇷🇺 +7</option>
                <option className="text-black" value="+62">🇮🇩 +62</option>
                <option className="text-black" value="+234">🇳🇬 +234</option>
                <option className="text-black" value="+27">🇿🇦 +27</option>
                <option className="text-black" value="+964">🇮🇶 +964</option>
                <option className="text-black" value="+90">🇹🇷 +90</option>
                <option className="text-black" value="+974">🇶🇦 +974</option>
                <option className="text-black" value="+966">🇸🇦 +966</option>
                <option className="text-black" value="+98">🇮🇷 +98</option>
              </select>

              <input
                type="text"
                name="whatsapp"
                required
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                className="w-2/3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message..."
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
            >
              Send Message
            </button>

            {/* Status Message */}
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