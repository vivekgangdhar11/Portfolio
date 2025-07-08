import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function Education() {
  const hobbies = [
    "🧩 DSA Problems",
    "🏏 Cricket", 
    "🎲 Rubik's Cube",
    "🎬 Movies",
    "💻 Tech Tools"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-tech-gray mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-tech-gray">B.Tech in Computer Science Engineering</h4>
                    <p className="text-primary font-medium">Sharad Institute of Technology, Yadrav-Ichalkaranji</p>
                    <p className="text-sm text-gray-600 mt-1">2022 – 2026 | CGPA: 8.07</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* HSC */}
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <Card className="bg-gray-50">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-tech-gray">HSC</h4>
                    <p className="text-gray-700">Jaysingpur College</p>
                    <p className="text-sm text-gray-600 mt-1">2020 – 2022 | Percentage: 61.83%</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* SSC */}
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <Card className="bg-gray-50">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-tech-gray">SSC</h4>
                    <p className="text-gray-700">Laxminarayan Malu Highschool, Jaysingpur</p>
                    <p className="text-sm text-gray-600 mt-1">2020 | Percentage: 89%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Experience & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-tech-gray mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience & Certifications
            </h3>
            
            <div className="space-y-6">
              {/* Internship */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white p-2 rounded-lg">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-gray">Internship</h4>
                      <p className="text-primary font-medium">Tecspeak IT Solutions, Sangli</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Gained hands-on experience with AWS services like EC2, S3, and Lambda. 
                        Learned about deploying and managing basic cloud resources and infrastructure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Certification */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white p-2 rounded-lg">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-gray">TCS iON Career Edge</h4>
                      <p className="text-primary font-medium">Young Professional Certification</p>
                      <p className="text-sm text-gray-600 mt-1">2025 | Tata Consultancy Services</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Communication, Presentation, Soft Skills, Business Etiquette, IT Fundamentals and Overview of AI
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hobbies */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-tech-gray">Hobbies & Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby, index) => (
                      <Badge key={index} variant="outline" className="bg-white text-gray-700">
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
