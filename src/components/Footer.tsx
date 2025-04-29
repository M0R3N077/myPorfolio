import { Mail, Phone, Linkedin, Github, Download, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-purple-500" />
              <span>murilo.moreno.dev2024@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={18} className="text-purple-500" />
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                moreno-portfolio.netlify
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Social</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Linkedin size={18} className="text-purple-500" />
              <a href="https://www.linkedin.com/in/murilomorenof/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github size={18} className="text-purple-500" />
              <a href="https://github.com/M0R3N077  " target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Resume and Message */}
        <div className="flex flex-col items-start justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-4">Resume</h4>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Feel free to reach out for collaborations or job opportunities!
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Murilo Moreno. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
