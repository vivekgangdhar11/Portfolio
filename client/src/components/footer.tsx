import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-tech-gray text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300">
            &copy; 2024 Vivek Gangdhar. Built with passion and dedication.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://linkedin.com/in/vivek-gangdhar-63846329b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/vivekgangdhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://leetcode.com/u/vivek_gangdhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SiLeetcode className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
