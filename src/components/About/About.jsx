import Heading from '../UI/Heading';
import P from '../UI/P';

import './About.scss';

const About = () => {
  return (
    <div>
      <Heading>About Me</Heading>
      <div className='about-content'>
        <div className='about-text'>
          <P>
            I'm a product designer working on various projects on a wide range
            of clients. My skillset lies on creating branding packages &
            websites to deliver the full online experience for new and also
            veteran businesses.
          </P>
          <br />
          <P>
            You can often find me creating videos about design over on YouTube,
            or sharing my thoughts on my podcast, Dialogue With Designers . I'm
            passionate about giving back and teaching what I know to the next
            generation of designers.
          </P>
        </div>

        <div>
          <P>Your one stop shop for:</P>
        </div>
      </div>
    </div>
  );
};

export default About;
