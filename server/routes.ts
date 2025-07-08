import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    // In a real application, this would serve an actual resume file
    // For now, we'll create a simple text response indicating the download
    const resumeContent = `
VIVEK GANGDHAR
Phone: +91 7447741161
Email: vivekgangdhar11@gmail.com
Address: Jaysingpur, India 416101

LeetCode: https://leetcode.com/u/vivek_gangdhar/
LinkedIn: https://linkedin.com/in/vivek-gangdhar-63846329b
GitHub: https://github.com/vivekgangdhar

OBJECTIVE
I am a Computer Science Engineering student eager to learn and grow in the tech field. I aim to apply my programming, web development, and cloud computing skills to real-world projects and gain valuable hands-on experience.

EDUCATION
B.Tech (Computer Science & Engineering) | 2026
Sharad Institute Of Technology College Of Engineering, Yadrav-Ichalkaranji
CGPA: 8.07

Higher Secondary Certificate | 2022
Jaysingpur College Jaysingpur
Percentage: 61.83

Secondary School Certificate | 2020
Laxminarayan Malu Highschool, Jaysingpur
Percentage: 89

INTERNSHIP
Tecspeak IT Solutions, Sangli
Gained hands-on experience with AWS services like EC2, S3, and Lambda.

SKILLS
Programming languages: Java, C, SQL
Web Development: HTML, CSS, JavaScript, MERN (Basics), Bootstrap
Cloud Computing: AWS (Basics)
Development Tools: Git, Visual Studio Code, GitHub
Soft skills: Problem-solving, Team collaboration, Time management, Communication Skills

CERTIFICATION
TCS iON Career Edge – Young Professional [2025]
Issued by: Tata Consultancy Services (TCS iON)
Skills Covered: Communication, Presentation, Soft Skills, Business Etiquette, IT Fundamentals and Overview of AI.

PROJECTS
Car Price Prediction [2024]
Objective: Developed a model to predict car prices based on various features.
Role: Front-end Developer
Technologies Used: Python, SQL, Machine Learning libraries

TextUtils [2024]
Objective: Created a text manipulation tool for various functionalities (capitalize, lowercase, word count).
Role: Developer
Technologies Used: React, JavaScript

DECLARATION
I hereby declare that the above information is true to the best of my knowledge.
Vivek Gangdhar
    `;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Vivek_Gangdhar_Resume.txt"');
    res.send(resumeContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
