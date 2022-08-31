import './Hero.scss';
import heroImg from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1 className='hero-title'>
          I'm Maqsud, a MERN stack developer based in Tashkent. Available for
          freeance & collaborations.
        </h1>
        <img className='hero-img' src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
