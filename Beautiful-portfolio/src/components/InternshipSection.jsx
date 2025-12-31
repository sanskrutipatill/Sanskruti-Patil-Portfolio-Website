const InternshipSection = () => {
  const internships = [
  {
    title: "UI/UX Intern",
    company: "FirstBuy.com",
    desc: "Worked on user interface design, refining layouts, enhancing usability, and improving the overall user experience across web pages.",
    link: "/public/Internship & Training/Offer_letter_First-Buy_UI.pdf", 
  },
  {
    title: "GenAI Virtual Internship",
    company: "Google",
    desc: "Training in Generative AI, NLP, and applied AI solutions, with hands-on projects and practical applications.",
    link: "public/Internship & Training/Genai_internship.pdf",
  },
  {
    title: "Job Simulation – JPMORGAN",
    company: "Forage",
    desc: "Cybersecurity - Completed tasks in fraud analysis, application security, email classification, and secure access design.",
    link: "/public/Internship & Training/Cybersecurity Job Simulation.pdf",
  },
  {
  title: "Cybersecurity Job Simulation – DATACOM",
  company: "Forage",
  desc: "APT breach analysis and cybersecurity risk assessment.",
  link: "public/Internship & Training/DATACOM Cybersecurity Job Simulation.pdf",
},
{
  title: "Cyber Job Simulation – Deloitte",
  company: "Forage",
  desc: "Practical experience in cybersecurity projects.",
  link: "public/Internship & Training/Deloitte Cyber Job Simulation.pdf",
},
{
  title: "GenAI Powered Data Analytics Job Simulation",
  company: "Forage",
  desc: "Exploratory data analysis, AI-driven predictions, and business data storytelling.",
  link: "public/Internship & Training/GenAI Powered Data Analytics Job Simulation.pdf",
},
{
  title: "Cybersecurity Analyst Job Simulation – TATA",
  company: "Forage",
  desc: "IAM fundamentals, strategy assessment, crafting custom IAM solutions, and platform integration.",
  link: "public/Internship & Training/Cybersecurity Analyst.pdf",
},
  {
    title: "Job Simulation – Tata",
    company: "Forage",
    desc: "Data	Visualisation - Practical experience in business and technology projects.",
    link: "/public/Internship & Training/Data Visualisation.pdf",
  },
  {
    title: "Job Simulation – British Airways",
    company: "Forage",
    desc: "Data Science - Exposure to real-world airline operations and business scenarios.",
    link: "/public/Internship & Training/Data Science.pdf",
  },
  {
    title: "Job Simulation – Quantium",
    company: "Forage",
    desc: "Data Analytics - Hands-on experience in data analytics and problem-solving projects.",
    link: "/public/Internship & Training/Data Analytics.pdf",
  },
  {
    title: "Job Simulation – BCGx",
    company: "Forage",
    desc: "Data Science - Practical learning in consulting and strategic business solutions.",
    link: "/public/Internship & Training/Data Science BCGX.pdf",
  },
];

  return (
  <section id="internship" className="py-20 relative z-10 text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-purple-600">
        Internship & Training
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="p-6 border border-purple-500/40 rounded-xl hover:border-purple-600 hover:scale-105 transition transform duration-300 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-purple-600">
              {intern.title}
            </h3>
            <p className="text-gray-400">{intern.company}</p>
            <p className="text-sm text-gray-500 mt-2">{intern.desc}</p>

            {/* Always show View Certificate */}
            <a
              href={intern.link}
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

export default InternshipSection;
