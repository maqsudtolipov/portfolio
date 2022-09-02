import Heading from '../UI/Heading';
import Marquee from './Marquee';
import './Portfolio.scss';
import PortfolioProject from './PortfolioProject';

const projects = [
  {
    title: 'Instagram Clone',
    img: 'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    description: 'Full Stack',
  },
  {
    title: 'Budget App',
    img: 'https://images.unsplash.com/photo-1637789594401-5a0dac0d3e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
    description: 'Back end',
  },
  {
    title: 'The Food Api',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    description: 'Back end',
  },
  {
    title: 'Music Player App',
    img: 'https://images.unsplash.com/photo-1653592328269-09c14b3628f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Front end',
  },
];

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Heading>Projects</Heading>
      <div className='portfolio-projects'>
        {projects.map((project, index) => {
          return (
            <PortfolioProject
              key={index}
              id={index}
              img={project.img}
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
