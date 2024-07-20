import React from "react";
import "../Sections/secondSects.css";
const SecondSects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://github.com/pabitra-k11/PortfolioWebsite.git",
    },
    {
      name: "FoodKidda Website",
      description:
        "A Foodkidda platfrom provide to user is ordering street food from Stall and nearby access.",
      technologies: ["HTML", "JavaScript", "Tailwind CSS", "Firebase", "React"],
      link: "https://github.com/yourusername/e-commerce-platform",
    },
    {
      name: "Wanderlust Website",
      description:
        "The project focused on providing the user add new accommodatiom, user ability to search, book & manage accommodation.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "Node.Js",
        "Express.Js",
      ],
      link: "https://majorproject-3-7jq2.onrender.com/listings",
    },
  ];
  return (
    <div>
      <div className="project ">
        <h1>Projects</h1>
        <div className="row offset-1 ">
          <div className="col">
            <div className="project-list1">
              {projects.map((project, index) => (
                <div className="project-item1 " key={index}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p>
                    <strong>Technologies Used:</strong>{" "}
                    {project.technologies.join(", ")}
                  </p>
                  {project.link && (
                    <p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSects;
