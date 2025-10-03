import { RevealOnScroll } from "../RevealOnScroll";
import { FaDownload } from "react-icons/fa";
import Resume from './Resume.pdf';
import VideoSrc from '../../assets/BG.mp4';

// ✅ Sub-components for modularity
const SkillCard = ({ title, skills }) => (
  <div className="rounded-xl p-6 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-red-400">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, key) => (
        <span
          key={key}
          className="bg-red-500/20 text-red-300 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 hover:text-white transition shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const EducationCard = () => (
  <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg">
    <h3 className="text-xl font-bold mb-4 text-red-400">Education</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm leading-relaxed">
      <li>
        <strong>B.S. in Information Technology</strong> — University of Gujrat (2021–2025)
      </li>
      <li>
        Final Year Project: Developed a cross-platform <strong>mobile application</strong> using <strong>Flutter</strong> and <strong>Firebase</strong> for real-time communication.
      </li>
      <li>
        Served as an <strong>Assistant Teacher</strong> for <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>, helping peers build strong frontend skills.
      </li>
    </ul>
  </div>
);

const ExperienceCard = () => (
  <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg">
    <h3 className="text-xl font-bold mb-4 text-red-400">Experience</h3>
    <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
      <div>
        <h4 className="font-semibold text-white">Frontend Developer (2023 – Present)</h4>
        <p>
          Developed responsive and accessible UIs using <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>. Optimized user flows, implemented animations, and collaborated in agile teams to deliver scalable, production-ready features.
        </p>
      </div>
    </div>
  </div>
);

const CertificateCard = ({ cert }) => (
  <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg transform hover:scale-105">
    <h3 className="text-lg font-semibold mb-1 text-red-300">{cert.title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
    <p className="text-gray-400 text-xs mt-2">{cert.issuer} — {cert.date}</p>
    {cert.link && (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View certificate: ${cert.title}`}
        className="text-sm mt-3 inline-block text-red-400 hover:underline"
      >
        View Certificate
      </a>
    )}
  </div>
);

export const About = () => {
  const frontendSkills = ["ReactJS", "Kotlin", "Flutter"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  const graphicDesigning = ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Corel Draw"];

  const certificates = [
    {
      title: "Generative AI: Prompt Engineering Basics",
      description: "Completed an IBM authorized course on Prompt Engineering, mastering effective AI prompt design strategies.",
      link: "https://coursera.org/verify/2ZUQRFNVP0TF",
      date: "Sep 12, 2025",
      issuer: "IBM (via Coursera)"
    },
    {
      title: "Introduction to Front-End Development",
      description: "Completed a Meta authorized course on front-end development, covering HTML, CSS, and JavaScript fundamentals.",
      link: "https://coursera.org/verify/YBRG7PHYHRDZ",
      date: "Sep 11, 2025",
      issuer: "Meta (via Coursera)"
    },
    {
      title: "Learn Firebase",
      description: "Completed a Scrimba authorized course on Firebase, focusing on real-time databases, authentication, and hosting.",
      link: "https://coursera.org/verify/91T4444LH0VD",
      date: "Sep 14, 2025",
      issuer: "Scrimba (via Coursera)"
    }
  ];

  return (
    <>
      {/* 🌟 About Me + Skills Section with Background Video */}
      <section id="about" className="relative mt-10 flex items-center justify-center py-20 bg-black overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

        <div className="relative z-10 w-full">
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                About Me
              </h2>

              <div className="rounded-2xl p-8 border border-red-500/30 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 shadow-xl">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed tracking-wide">
                  I bring ideas to life through full-stack development blending clean architecture, sleek interfaces, and purposeful design. Whether it's a high-performing web app or a beautifully responsive portfolio, I focus on delivering digital products that not only look great but feel effortless to use.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <SkillCard title="Frontend" skills={frontendSkills} />
                  <SkillCard title="Backend" skills={backendSkills} />
                  <SkillCard title="Graphic Designing" skills={graphicDesigning} />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 🌟 Education & Experience Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EducationCard />
              <ExperienceCard />
            </div>

            <div className="mt-12 text-center">
              <a
                href={Resume}
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
              >
                <FaDownload className="text-xl" />
                Download Resume
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 🌟 Certificates Section */}
      <section id="certificates" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-400">
              Certificates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};
