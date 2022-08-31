import './Heading.scss';

const Heading = (props) => {
  return (
    <div className='heading'>
      <p className='heading-title'>{props.children}</p>
    </div>
  );
};

export default Heading;
