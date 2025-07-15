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

  const handleSubmit = (e) => {
    setStatus("Message Sent!");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2
            id="contact-heading"
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>

          <form
            id="contact-form"
            action="https://formspree.io/f/xblkjgao"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Service Type Dropdown */}
            <div className="relative">
              <select
                name="service"
                required
                value={formData.service}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white appearance-none transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="" className="text-black">Select Service Type</option>
                <option value="Web Design" className="text-black">Web Design</option>
                <option value="App Development" className="text-black">App Development</option>
                <option value="UI/UX Design" className="text-black">UI/UX Design</option>
                <option value="Graphic Designing" className="text-black">Graphic Designing</option>
              </select>
            </div>

            {/* WhatsApp Number with Country Code */}
            <div className="relative flex gap-4">
              <input
                type="text"
                name="countryCode"
                required
                placeholder="+92"
                value={formData.countryCode}
                className="w-1/3 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
              />
              <input
                type="text"
                name="whatsapp"
                required
                placeholder="3123456789"
                value={formData.whatsapp}
                className="w-2/3 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message..."
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-400 text-center font-medium mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
