const InternshipSection = () => {
  const internships = [
    {
      title: "UI/UX Intern",
      company: "FirstBuy.com",
      duration: "July 2025 - Jan 2026",
      desc: "Working on user interface design, refining layouts, enhancing usability, and improving the overall user experience across web pages.",
      link: "https://internship-lor-sanskruti-patil.tiiny.site",
    },
    {
      title: "GenAI Virtual Internship",
      company: "Google",
      duration: "Sept 2024 - Oct 2024",
      desc: "Training in Generative AI, NLP, and applied AI solutions, with hands-on projects and practical applications.",
      link: "https://skillwallet.smartinternz.com/certificate/virtual-internship/5e93e97910814feb7ea0902bad6182fb",
    },
    {
      title: "Generative AI & Prompt Engineering",
      company: "Google Cloud Skills Boost",
      duration: "Aug 2024 - Oct 2025",
      desc: "Diamond League Practical expertise in generative AI concepts, prompt design, and applying large language models to real-world use cases.",
      link: "https://www.cloudskillsboost.google/public_profiles/eaba62e1-12bd-4b41-a7b9-a28aad86895d",
    },
  ];

  return (
    <section id="internship" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow">
          Internship & <span className="text-primary">Training</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 rounded-2xl border border-primary/20 bg-card/10 backdrop-blur-sm hover:border-primary hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {intern.title}
                </h3>
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-lg font-medium text-foreground">{intern.company}</span>
                  <span className="text-sm text-muted-foreground font-mono bg-primary/10 px-2 py-1 rounded inline-block w-fit mx-auto">
                    {intern.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {intern.desc}
                </p>
              </div>

              {/* View Certificate Button */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <a
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group-hover:gap-3"
                >
                  View Certificate <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
