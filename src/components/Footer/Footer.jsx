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
        <IoLogoGithub className='footer-icon' />
        <IoLogoTwitter className='footer-icon' />
        <IoLogoDiscord className='footer-icon' />
      </div>
    </div>
  );
};

export default Footer;
