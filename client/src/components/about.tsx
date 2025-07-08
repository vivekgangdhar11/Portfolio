import { Card, CardContent } from "@/components/ui/card";
import { Code, Calendar, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-tech-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-gray mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-gray-700 leading-relaxed text-lg">
              I am a final-year B.Tech Computer Science Engineering student at Sharad Institute of Technology College of Engineering, Yadrav-Ichalkaranji (Graduating in 2026, CGPA: 8.07).
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              I am eager to learn and grow in the tech field. I aim to apply my programming, web development, and cloud computing skills to real-world projects and gain valuable hands-on experience. I'm passionate about solving problems through code and continuously improving my technical skills.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">8.07</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">2026</div>
                  <div className="text-sm text-gray-600">Graduation</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-tech-gradient rounded-full flex items-center justify-center">
                <Code className="text-white h-24 w-24" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tech-light rounded-full flex items-center justify-center">
                <Code className="text-primary h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Trophy className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
