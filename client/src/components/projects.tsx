import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Type, MapPin } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Car Price Prediction",
      year: "2024",
      description: "Developed a model to predict car prices based on various features using machine learning techniques.",
      role: "Front-end Developer",
      tech: ["Python", "SQL", "ML"],
      icon: <Car className="h-12 w-12 text-white" />,
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "TextUtils",
      year: "2024",
      description: "Created a text manipulation tool for various functionalities including capitalize, lowercase, and word count.",
      role: "Developer",
      tech: ["React", "JavaScript"],
      icon: <Type className="h-12 w-12 text-white" />,
      gradient: "from-green-400 to-blue-600"
    },
    {
      title: "WakeMeUp",
      year: "In Progress",
      description: "A travel assistant app that alerts users as they approach their destination using location services.",
      role: "Full-Stack Developer",
      tech: ["React Native", "Geolocation"],
      icon: <MapPin className="h-12 w-12 text-white" />,
      gradient: "from-orange-400 to-red-600",
      isInProgress: true
    }
  ];

  const getTechBadgeColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Python": "bg-yellow-100 text-yellow-800",
      "SQL": "bg-blue-100 text-blue-800",
      "ML": "bg-green-100 text-green-800",
      "React": "bg-blue-100 text-blue-800",
      "JavaScript": "bg-yellow-100 text-yellow-800",
      "React Native": "bg-blue-100 text-blue-800",
      "Geolocation": "bg-green-100 text-green-800"
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-tech-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-center">
                  {project.icon}
                  <div className="text-white text-sm font-semibold mt-2">
                    {project.title.includes("ML") ? "ML Project" : 
                     project.title.includes("Text") ? "React App" : "Mobile App"}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-tech-gray">{project.title}</CardTitle>
                  <span className={`text-sm font-medium ${
                    project.isInProgress ? "text-orange-500" : "text-gray-500"
                  }`}>
                    {project.year}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Role: </span>
                  <span className="text-sm text-primary">{project.role}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} className={getTechBadgeColor(tech)}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
