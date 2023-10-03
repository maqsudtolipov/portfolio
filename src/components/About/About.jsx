import Marquee from '../Portfolio/Marquee';
import Accordion from '../UI/Accordion';
import Heading from '../UI/Heading';
import P from '../UI/P';

import './About.scss';

const accordionData = [
  {
    id: 1,
    title: 'Frontend',
    content:
      'I build websites and web apps. I love to create beautiful and functional websites that are user-friendly and easy to use. I also love to create beautiful and functional websites that are user-friendly and easy to use.',
  },
  {
    id: 2,
    title: 'Backend',
    content:
      'I build websites and web apps. I love to create beautiful and functional websites that are user-friendly and easy to use. I also love to create beautiful and functional websites that are user-friendly and easy to use.',
  },
  {
    id: 3,
    title: 'Design',
    content:
      'I build websites and web apps. I love to create beautiful and functional websites that are user-friendly and easy to use. I also love to create beautiful and functional websites that are user-friendly and easy to use.',
  },
];

const About = () => {
  return (
    <div className='section-about'>
      <Heading>About Me</Heading>
      <div className='about-content'>
        <div className='about-text'>
          <P>
            I'm a product designer working on various projects on a wide range
            of clients. My skill set lies on creating branding packages &
            websites to deliver the full online experience for new and also
            veteran businesses.
          </P>
        </div>

        <div>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default About;
