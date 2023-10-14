import React, { useState } from 'react';

export const Banner = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="banner" id="home">
      <div className="Container">
        <div className="row">
          <div className='col-xs-12 col-md-16 col-xl-7'>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Koushik Vijji.</h1>
                <p>I am CSE student with problem solving skills and passionate about creating web applications and have been exploring various technologies, including HTML, CSS, JavaScript, and React. My goal is to leverage my technical skills and creativity to build innovative and user-friendly web solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
