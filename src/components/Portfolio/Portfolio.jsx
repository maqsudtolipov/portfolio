import Heading from "../UI/Heading";
import Marquee from "./Marquee";
import "./Portfolio.scss";
import PortfolioProject from "./PortfolioProject";

const projects = [
  {
    title: "Spotify Clone",
    img: "https://images.unsplash.com/photo-1661949734732-7a845100959e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2506&q=80",
    description: "Full Stack",
    link: "/projects/spotify",
  },
  {
    title: "Instagram Clone",
    img: "https://images.unsplash.com/photo-1646388286286-fbc4c9b5332f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description: "Coming Soon",
    link: "/projects/spotify",
  },
  // {
  //   title: "The Food Api",
  //   img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  //   description: "Back end",
  //   link: "#",
  // },
  // {
  //   title: "Music Player App",
  //   img: "https://images.unsplash.com/photo-1653592328269-09c14b3628f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   description: "Front end",
  //   link: "#",
  // },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Heading>Projects</Heading>
      <div className="portfolio-projects">
        {projects.map((project, index) => {
          return (
            <PortfolioProject
              key={index}
              id={index}
              img={project.img}
              link={project.link}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
