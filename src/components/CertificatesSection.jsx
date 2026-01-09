// src/components/CertificatesSection.jsx
import React from "react";

const CertificatesSection = () => {
  const certificates = [

    {
      title: "Google Cloud Computing Foundations: Data, ML, and AI",
      issuer: "Google Cloud Skills Boost",
      desc: "Golden League Completed foundational concepts in Data, Machine Learning, and AI using Google Cloud.",
      link: "https://www.cloudskillsboost.google/public_profiles/5053f73f-45d5-4f3b-bc03-f25856651bd6"
    },
    {
      title: "Power BI for Beginners",
      issuer: "Microsoft via Simplilearn | SkillUp",
      desc: "Successfully completed the online course covering foundational concepts and practical skills in Power BI.",
      link: "https://simpli-web.app.link/e/Pal1mnlXAZb"
    },

    {
      title: "Java Foundation Certification",
      issuer: "Infosys | Springboard",
      desc: "Successfully completed foundational Java concepts and certification training.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_013788171933728768154_shared/1-e4454103-462c-4b9f-9c92-ba050679a7b1.pdf"
    },
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      desc: "Data analysis, SQL, visualization.",
      link: "https://coursera.org/share/86b6c4db68bb756b26b328cb69715fd2"
    },
    {
      title: "Hashgraph Developer",
      issuer: "Brillium",
      desc: "Hashgraph development concepts and practical applications.",
      link: "https://certs.hashgraphdev.com/951aafc0-21d6-473f-bb1a-df933b348b6d.pdf"
    },
    {
      title: "UI/UX Design",
      issuer: "Accenture",
      desc: "Fundamentals of user interface and user experience design.",
      link: "https://www.futurelearn.com/certificates/lgfny8a"
    },
    {
      title: "Cyber Security",
      issuer: "Cisco",
      desc: "Cybersecurity essentials.",
      link: "https://www.netacad.com/certificates/?issuanceId=d3dcd99c-83b1-4245-bf5f-d7d6b9025067"
    },
    {
      title: "Introduction to OpenAI GPT Models",
      issuer: "Infosys",
      desc: "Overview of OpenAI GPT models and applications.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_013326582703013888895_shared/1-19249580-f832-426f-9d3b-a82ca7396a59.pdf"
    },
    {
      title: "OpenAI Generative Pre-trained Transformer (GPT)",
      issuer: "Infosys",
      desc: "Understanding GPT architecture and use cases.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_013320143671771136285_shared/1-c8ba91cf-1375-4c99-9366-fbac1b90fcee.pdf"
    },
    {
      title: "Principles of Generative AI Certification",
      issuer: "Infosys",
      desc: "Fundamentals and applications of Generative AI.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_013809178768416768124_shared/1-6d1d836b-2cd8-4ae6-97f1-6796825b547e.pdf"
    },
    {
      title: "Generative Models for Developers",
      issuer: "Infosys",
      desc: "Practical implementation of generative AI models.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0136300438813573121813_shared/1-934ca448-615b-436a-b174-d6a19d8a38f0.pdf"
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys",
      desc: "Basics of neural networks and deep learning.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012782105116811264219_shared/1-03f73d8c-877b-43a2-a151-ea575a441ba7.pdf"
    },
    {
      title: "Deep Learning for Developers",
      issuer: "Infosys",
      desc: "Advanced deep learning implementation for engineers.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01274814254931148859_shared/1-8e4a54cd-9d34-4e62-867b-4652f0472f3d.pdf"
    },
    {
      title: "Computer Vision 101",
      issuer: "Infosys",
      desc: "Introductory computer vision concepts and techniques.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012952007096016896334_shared/1-e5142ed7-ea61-4e7e-8ba3-8dc83d63a144.pdf"
    },
    {
      title: "Artificial Intelligence Primer Certification",
      issuer: "Infosys",
      desc: "Introductory AI concepts and fundamentals.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0134898743771545602_shared/1-54936c3d-b58d-4792-8b0f-a677f5daa1f1.pdf"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys",
      desc: "Core AI fundamentals and concepts.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_8840337130015322000_shared/1-daeed428-4495-4ff2-b7fa-184007e61bad.pdf"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys",
      desc: "Data handling, analysis, and visualization basics.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_12666306402263577000_shared/1-6ac707d9-ddb6-4a2c-a02c-c9845b36a9e5.pdf"
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys",
      desc: "Core NLP techniques and text analytics.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012776556362055680278_shared/1-ad30e2d3-6c19-44c8-87fd-9bb931caaba2.pdf"
    },
    {
      title: "Programming using Java",
      issuer: "Infosys",
      desc: "Core Java programming fundamentals.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012880464547618816347_shared/1-6635dba4-36eb-41a0-bc7f-642c240b7e21.pdf"
    },
    {
      title: "Introduction to Robotic Process Automation",
      issuer: "Infosys",
      desc: "RPA fundamentals and automation tools.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012988484517273600535_shared/1-c7ca1bed-5a96-42ec-9b7f-8ecb64096c9c.pdf"
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys",
      desc: "Practical Agile and Scrum implementation.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_5501638797018560000_shared/1-ca8d9e22-4a1a-4d67-90c0-05a508770f77.pdf"
    },
    {
      title: "Getting Started with Design Thinking",
      issuer: "Infosys",
      desc: "Creative problem-solving and innovation process.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0135015555521249287259/1-7883fe0a-f293-476f-99e2-439199d4562f.pdf"
    },
    {
      title: "High Impact Presentations",
      issuer: "Infosys",
      desc: "Techniques for effective professional presentations.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012686673646936064647_shared/1-336cbe92-2a41-4adc-9b16-e17270e317e7.pdf"
    },
    {
      title: "Email Writing Skills",
      issuer: "Infosys",
      desc: "Professional communication and business email writing.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01268954363013529666_shared/1-abb62150-e7d6-4f2b-949a-0128eb23b467.pdf"
    },
    {
      title: "Time Management",
      issuer: "Infosys",
      desc: "Personal productivity and task prioritization.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012985921210736640721_shared/1-5d73536d-e46d-4700-9d13-29ebf207232f.pdf"
    },

    {
      title: "Cyber Security Job Simulation – JPMORGAN",
      company: "Forage",
      desc: "Cybersecurity - Completed tasks in fraud analysis, application security, email classification, and secure access design.",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_akkxXFfNnevySdRr8_1758718936348_completion_certificate.pdf",
    },
    {
      title: "Cybersecurity Job Simulation – DATACOM",
      company: "Forage",
      desc: "APT breach analysis and cybersecurity risk assessment.",
      link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/yTszJTvkHFBH6zAn3_gCW7Xki5Y3vNpBmnn_akkxXFfNnevySdRr8_1758721332868_completion_certificate.pdf",
    },
    {
      title: "Cyber Job Simulation – Deloitte",
      company: "Forage",
      desc: "Practical experience in cybersecurity projects.",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_akkxXFfNnevySdRr8_1758718936348_completion_certificate.pdf",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      company: "Forage",
      desc: "Exploratory data analysis, AI-driven predictions, and business data storytelling.",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_akkxXFfNnevySdRr8_1758718169607_completion_certificate.pdf",
    },
    {
      title: "Cybersecurity Analyst Job Simulation – TATA",
      company: "Forage",
      desc: "IAM fundamentals, strategy assessment, crafting custom IAM solutions, and platform integration.",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_akkxXFfNnevySdRr8_1758309835162_completion_certificate.pdf",
    },
    {
      title: "Data	Visualisation Job Simulation – Tata",
      company: "Forage",
      desc: "Data	Visualisation - Practical experience in business and technology projects.",
      link: "https://www.theforage.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_akkxXFfNnevySdRr8_1724170250411_completion_certificate.pdf",
    },
    {
      title: "Data Science Job Simulation – British Airways",
      company: "Forage",
      desc: "Data Science - Exposure to real-world airline operations and business scenarios.",
      link: "https://www.theforage.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_akkxXFfNnevySdRr8_1724169597994_completion_certificate.pdf",
    },
    {
      title: "Data Analytics Job Simulation – Quantium",
      company: "Forage",
      desc: "Data Analytics - Hands-on experience in data analytics and problem-solving projects.",
      link: "https://www.theforage.com/completion-certificates/Quantium/NkaC7knWtjSbi6aYv_Quantium_akkxXFfNnevySdRr8_1724168356992_completion_certificate.pdf",
    },
    {
      title: "Data Science Job Simulation – BCGx",
      company: "Forage",
      desc: "Data Science - Practical learning in consulting and strategic business solutions.",
      link: "https://www.theforage.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_akkxXFfNnevySdRr8_1724161661228_completion_certificate.pdf",
    },
    {
      title: "Introduction to Cybersecurity Job Simulation – Commonwealth Bank",
      company: "Forage",
      desc: "Completed hands-on tasks in data analysis, incident response, security awareness, and penetration testing.",
      link: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/x52Jy9s26xNbZkTQ7_2sNmYuurxgpFYawco_akkxXFfNnevySdRr8_1767453200258_completion_certificate.pdf",
    },
    {
      title: "UX Design Introduction Job Simulation – Lloyds",
      company: "Forage",
      desc: "Gained practical experience in competitive analysis, customer research, and user research methodologies.",
      link: "https://www.theforage.com/completion-certificates/Zbnc2o4ok6kD2NEXx/N65hfzBKXRiATv6yd_Zbnc2o4ok6kD2NEXx_akkxXFfNnevySdRr8_1767452815222_completion_certificate.pdf",
    },
    {
      title: "Marketing & Communication Job Simulation – NSW Government",
      company: "Forage",
      desc: "Worked on communication planning and writing content for internal organizational audiences.",
      link: "https://www.theforage.com/completion-certificates/nppSEH2cXYTz95hL7/9ruJezPEgjnwNdSwo_nppSEH2cXYTz95hL7_akkxXFfNnevySdRr8_1767453371643_completion_certificate.pdf",
    },
    {
      title: "ReactJS for Beginners",
      company: "Simplilearn",
      desc: "Learned React fundamentals including components, props, state, and basic frontend project development.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTY3NjQ0N185OTQxMzQxXzE3Njc1MDg4ODgyMjAucG5nIiwidXNlcm5hbWUiOiJTYW5za3J1dGkgUGF0aWwifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1487731721949401254&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8vLzfLIMUp2jUqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAlf8wzD8AAAA%3D",
    },
    {
      title: "Generative AI for Beginners",
      company: "Simplilearn",
      desc: "Gained foundational understanding of Generative AI concepts, use cases, and real-world applications.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzE1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTY3NTcyMl85OTQxMzQxXzE3Njc0Njk5NzQ1NDAucG5nIiwidXNlcm5hbWUiOiJTYW5za3J1dGkgUGF0aWwifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7721%2FGenerative%2520AI%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1487731721949401254&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDykoSCp0MU12jUqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAcnCK%2Fj8AAAA%3D",
    },
    {
      title: "Python 3.4.3 Training",
      company: "Spoken Tutorial – IIT Bombay",
      desc: "Completed hands-on Python training covering programming fundamentals, logical problem solving, and practical coding exercises.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/117070/3888153/",
    },
    {
      title: "Introduction to Computers Training",
      company: "Spoken Tutorial – IIT Bombay",
      desc: "Learned computer fundamentals including hardware, software concepts, operating systems, and digital literacy essentials.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/118767/3888153/",
    },
    {
      title: "HTML Training",
      company: "EduPyramids (Spoken Tutorial – IIT Bombay)",
      desc: "Gained practical knowledge of HTML structure, semantic tags, forms, and responsive webpage development basics.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/133694/3888153/",
    },
    {
      title: "PHP & MySQL Training",
      company: "EduPyramids (Spoken Tutorial – IIT Bombay)",
      desc: "Learned backend development concepts including PHP scripting, database connectivity, and CRUD operations using MySQL.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/133693/3888153/",
    },
    {
      title: "JavaScript Training",
      company: "EduPyramids (Spoken Tutorial – IIT Bombay)",
      desc: "Understood JavaScript fundamentals including DOM manipulation, event handling, functions, and interactive UI behavior.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/144879/3888153/",
    },
    {
      title: "Java Training",
      company: "EduPyramids (Spoken Tutorial – IIT Bombay)",
      desc: "Covered object-oriented programming concepts, core Java syntax, inheritance, exception handling, and application development basics.",
      link: "https://spoken-tutorial.org/software-training/test/participant/certificate/144879/3888153/",
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