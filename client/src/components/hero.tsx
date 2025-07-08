import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Vivek_Gangdhar_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient pt-24">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-lg transform rotate-45 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-tech-gray mb-6">
            Hi, I'm <span className="text-primary">Vivek Gangdhar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Final Year B.Tech CSE Student | Web Developer | DSA Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            "Driven by logic. Passionate about problem-solving."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Jaysingpur, India</span>
            </div>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <a href="mailto:vivekgangdhar11@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <a href="tel:+917447741161">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </a>
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/vivek-gangdhar-63846329b" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
            >
              <SiLinkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/vivekgangdhar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
            >
              <SiGithub className="h-8 w-8" />
            </a>
            <a 
              href="https://leetcode.com/u/vivek_gangdhar/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
            >
              <SiLeetcode className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
