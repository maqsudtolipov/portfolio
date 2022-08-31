import './PortfolioProject.scss';

const PortfolioProject = (props) => {
  return (
    <div className='portfolio-project'>
      <p>{props.title}</p>
      <img src={props.img} alt='' />
    </div>
  );
};

export default PortfolioProject;
