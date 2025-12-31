// src/components/CertificatesSection.jsx
import React from "react";

const CertificatesSection = () => {
  const certificates = [
    { 
      title: "Google Cloud Computing Foundations: Data, ML, and AI", 
      issuer: "Google Cloud Skills Boost", 
      desc: "Completed foundational concepts in Data, Machine Learning, and AI using Google Cloud.", 
      link: "https://www.cloudskillsboost.google/public_profiles/5053f73f-45d5-4f3b-bc03-f25856651bd6" 
    },
    { 
  title: "Power BI for Beginners", 
  issuer: "Microsoft via Simplilearn | SkillUp", 
  desc: "Successfully completed the online course covering foundational concepts and practical skills in Power BI.", 
  link: "public/Certificates/Power BI for Beginners.pdf" 
},

{ 
  title: "Java Foundation Certification", 
  issuer: "Infosys | Springboard", 
  desc: "Successfully completed foundational Java concepts and certification training.", 
  link: "public/Certificates/Java Foundation Certification.pdf" 
},
    { 
      title: "Generative AI & Prompt Engineering", 
      issuer: "Google Cloud Skills Boost", 
      desc: "Practical expertise in generative AI concepts, prompt design, and applying large language models to real-world use cases.", 
      link: "https://www.cloudskillsboost.google/public_profiles/eaba62e1-12bd-4b41-a7b9-a28aad86895d" 
    },
    { 
      title: "Google Data Analytics", 
      issuer: "Coursera", 
      desc: "Data analysis, SQL, visualization.", 
      link: "public/Certificates/Google Data Analytics.pdf" 
    },
    { 
      title: "Hashgraph Developer", 
      issuer: "Brillium", 
      desc: "Hashgraph development concepts and practical applications.", 
      link: "public/Certificates/Hashgraph Developer.pdf" 
    },
    { 
      title: "UI/UX Design", 
      issuer: "Accenture", 
      desc: "Fundamentals of user interface and user experience design.", 
      link: "public/Certificates/UI-UX.pdf" 
    },
    { 
      title: "Cyber Security", 
      issuer: "Cisco", 
      desc: "Cybersecurity essentials.", 
      link: "public/Certificates/CISCO Cybersecurity.pdf" 
    },
  { 
    title: "Introduction to OpenAI GPT Models", 
    issuer: "Infosys", 
    desc: "Overview of OpenAI GPT models and applications.", 
    link: "public/Certificates/Introduction to OpenAI GPT Models.pdf" 
  },
  { 
    title: "OpenAI Generative Pre-trained Transformer (GPT)", 
    issuer: "Infosys", 
    desc: "Understanding GPT architecture and use cases.", 
    link: "public/Certificates/OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers.pdf" 
  },
  { 
    title: "Principles of Generative AI Certification", 
    issuer: "Infosys", 
    desc: "Fundamentals and applications of Generative AI.", 
    link: "public/Certificates/Principles of Generative AI Certification.pdf" 
  },
  { 
    title: "Generative Models for Developers", 
    issuer: "Infosys", 
    desc: "Practical implementation of generative AI models.", 
    link: "public/Certificates/Generative models for developers.pdf" 
  },
  { 
    title: "Introduction to Deep Learning", 
    issuer: "Infosys", 
    desc: "Basics of neural networks and deep learning.", 
    link: "public/Certificates/Introduction to Deep Learning.pdf" 
  },
  { 
    title: "Deep Learning for Developers", 
    issuer: "Infosys", 
    desc: "Advanced deep learning implementation for engineers.", 
    link: "public/Certificates/Deep Learning for Developers.pdf" 
  },
  { 
    title: "Computer Vision 101", 
    issuer: "Infosys", 
    desc: "Introductory computer vision concepts and techniques.", 
    link: "public/Certificates/Computer Vision 101.pdf" 
  },
  { 
    title: "Artificial Intelligence Primer Certification", 
    issuer: "Infosys", 
    desc: "Introductory AI concepts and fundamentals.", 
    link: "public/Certificates/Artificial Intelligence Primer Certification.pdf" 
  },
  { 
    title: "Introduction to Artificial Intelligence", 
    issuer: "Infosys", 
    desc: "Core AI fundamentals and concepts.", 
    link: "public/Certificates/Introduction to Artificial Intelligence.pdf" 
  },
  { 
    title: "Introduction to Data Science", 
    issuer: "Infosys", 
    desc: "Data handling, analysis, and visualization basics.", 
    link: "public/Certificates/Introduction to Data Science.pdf" 
  },
  { 
    title: "Introduction to Natural Language Processing", 
    issuer: "Infosys", 
    desc: "Core NLP techniques and text analytics.", 
    link: "public/Certificates/Introduction to Natural Language Processing.pdf" 
  },
  { 
    title: "Programming using Java", 
    issuer: "Infosys", 
    desc: "Core Java programming fundamentals.", 
    link: "public/Certificates/Programming using Java.pdf" 
  },
  { 
    title: "Introduction to Robotic Process Automation", 
    issuer: "Infosys", 
    desc: "RPA fundamentals and automation tools.", 
    link: "public/Certificates/Introduction to Robotic Process Automation.pdf" 
  },
  { 
    title: "Agile Scrum in Practice", 
    issuer: "Infosys", 
    desc: "Practical Agile and Scrum implementation.", 
    link: "public/Certificates/Agile Scrum in Practice.pdf" 
  },
  { 
    title: "Getting Started with Design Thinking", 
    issuer: "Infosys", 
    desc: "Creative problem-solving and innovation process.", 
    link: "public/Certificates/Getting Started with Design Thinking.pdf" 
  },
  { 
    title: "High Impact Presentations", 
    issuer: "Infosys", 
    desc: "Techniques for effective professional presentations.", 
    link: "public/Certificates/High Impact Presentations.pdf" 
  },
  { 
    title: "Email Writing Skills", 
    issuer: "Infosys", 
    desc: "Professional communication and business email writing.", 
    link: "public/Certificates/Email Writing Skills.pdf" 
  },
  { 
    title: "Time Management", 
    issuer: "Infosys", 
    desc: "Personal productivity and task prioritization.", 
    link: "public/Certificates/Time Management.pdf" 
  }
    
  ];

  return (
  <section id="certificates" className="py-20 relative z-10 text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-purple-600">
        Certificates
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-6 border border-purple-500/40 rounded-xl hover:border-purple-600 hover:scale-105 transition transform duration-300 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-purple-600">
              {cert.title}
            </h3>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mt-2">{cert.desc}</p>

            {/* View Certificate button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-purple-500 hover:text-purple-700"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default CertificatesSection;
