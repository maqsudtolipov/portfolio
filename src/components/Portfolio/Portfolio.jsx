import Heading from '../UI/Heading';
import './Portfolio.scss';
import PortfolioProject from './PortfolioProject';

const projects = [
  {
    title: 'Project 1',
    img: 'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    title: 'Project 2',
    img: 'https://images.unsplash.com/photo-1637789594401-5a0dac0d3e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
  },
  {
    title: 'Project 3',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    title: 'Project 1',
    img: 'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    title: 'Project 2',
    img: 'https://images.unsplash.com/photo-1637789594401-5a0dac0d3e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
  },
  {
    title: 'Project 3',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
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
              title={project.title}
              img={project.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
