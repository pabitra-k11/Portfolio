import React from 'react';
import '../Project/project.css';
import Footer from '../Footer/Footer';

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://portfoliowebsite-2.onrender.com/"
  },
  {
    name: "FoodKidda Website",
    description: "A Foodkidda platfrom provide to user is ordering street food from Stall and nearby access.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS", "Firebase", "React"],
    link: "https://github.com/yourusername/e-commerce-platform"
  },
  {
    name: "Wanderlust Website",
    description: "The project focused on providing the user add new accommodatiom, user ability to search, book & manage accommodation.",
    technologies: ["HTML5","CSS3", "Bootstrap","JavaScript","Node.Js","Express.Js"],
    link: "https://majorproject-3-7jq2.onrender.com/listings"
  }
];

const Project = () => {
  return (
   <>
    <div className="project">
      <h1>Projects</h1>
    <div className="row offset-2">
      <div className="col col-11">
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
            {project.link && (
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
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
    <hr className='border-2 text-white '/>
    <Footer/>
  </>
  );
};

export default Project;
