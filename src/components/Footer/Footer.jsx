import { IoLogoGithub, IoLogoTwitter, IoLogoDiscord } from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img className='footer-logo' src={logo} alt='' />
      <p className='footer-text'>
        Copyright &copy; {new Date().getFullYear()} by Maqsud. All rights
        reserved.
      </p>
      <div className='footer-icons'>
        <a href='https://github.com/maqsudtolipov'>
          <IoLogoGithub className='footer-icon' />
        </a>
        <a href='https://twitter.com/maqsud_tolipov'>
          <IoLogoTwitter className='footer-icon' />
        </a>
        <a href='https://discord.com/users/990195744252260362'>
          <IoLogoDiscord className='footer-icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
