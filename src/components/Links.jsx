import React from 'react';
import '../styles/Links.css';
import imgA from '../images/resumeicon.jpg';
import imgB from '../images/github.png';
import imgC from '../images/linkedin.webp';
import imgD from '../images/freecodecamp.png';
import imgE from '../images/codechef.png';
import imgF from '../images/cssbattle.png';


const Links = () => {
  const links = [
    { name: 'My Resume', url: 'https://drive.google.com/file/d/1HJZettjg7pGFWGdF3p3e_vN1ntf91Iod/view?usp=sharing', icon: imgA },
    { name: 'GitHub', url: 'https://github.com/Manishaarya24?tab=repositories', icon: imgB },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manisha-arya-67269b250', icon: imgC },
    { name: 'Codechef', url: 'https://www.codechef.com/users/manisha52', icon: imgE },
    { name: 'freecodecamp', url: 'https://www.freecodecamp.org/manisha2023', icon: imgD },
    { name: 'CSS battle', url: 'https://cssbattle.dev/player/Ji6OTTEOxpg4Uq9HC99IgaDKyLU2', icon: imgF },
  ];

  return (
    <div className="links">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
          <img src={link.icon} alt={link.name} className="link-icon" />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};


export default Links;
