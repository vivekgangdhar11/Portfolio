import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function Contact() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Vivek_Gangdhar_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "vivekgangdhar11@gmail.com",
      link: "mailto:vivekgangdhar11@gmail.com",
      bgColor: "bg-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7447741161",
      link: "tel:+917447741161",
      bgColor: "bg-green-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Jaysingpur, India",
      link: null,
      bgColor: "bg-orange-500"
    },
    {
      icon: <SiLinkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "vivek-gangdhar-63846329b",
      link: "https://linkedin.com/in/vivek-gangdhar-63846329b",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tech-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4">Let's discuss opportunities and collaborations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`${info.bgColor} text-white p-3 rounded-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-tech-gray">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-primary transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-tech-gray">Ready to Connect?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
              </p>
              
              <div className="space-y-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="mailto:vivekgangdhar11@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a 
                    href="https://linkedin.com/in/vivek-gangdhar-63846329b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
