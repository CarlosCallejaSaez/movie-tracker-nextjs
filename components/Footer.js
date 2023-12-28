import React from 'react';
import { FaLinkedin, FaGithub ,FaHeart} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>Developed with <FaHeart style={{ color: 'red' }} /> by Carlos Calleja</p>
      <div>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
