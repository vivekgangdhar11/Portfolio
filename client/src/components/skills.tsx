import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Wrench, Lightbulb } from "lucide-react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiGit, SiGithub } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Java", icon: <Code className="text-orange-600" /> },
        { name: "C", icon: <Code className="text-blue-600" /> },
        { name: "SQL", icon: <Code className="text-blue-500" /> },
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "MERN (Basics)", icon: <Code className="text-green-600" /> },
      ]
    },
    {
      title: "Dev Tools & Cloud",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
        { name: "VS Code", icon: <Code className="text-blue-500" /> },
        { name: "AWS (Basics)", icon: <Code className="text-orange-500" /> },
      ]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Problem-solving", icon: <Code className="text-green-600" /> },
        { name: "Time Management", icon: <Code className="text-blue-600" /> },
        { name: "Team Collaboration", icon: <Code className="text-purple-600" /> },
        { name: "Communication", icon: <Code className="text-orange-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-tech-gray">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="h-5 w-5 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
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
