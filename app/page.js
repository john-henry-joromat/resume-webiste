'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [showToggleMenu, setToggleMenu] = useState(false);
  const [showDownloadCV, setDownloadCV] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!showToggleMenu);
    console.log(showToggleMenu);
  };

  function downloadCV() {
    setDownloadCV(!showDownloadCV);
  }

  return (
    <>
      <nav id='desktop-nav'>
        <div className='logo'>John Henry</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>About</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>John Henry</div>
        <div className='hamburger-menu'>
          <div className='hamburger-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={showToggleMenu ? "menu-links open" : "menu-links"}>
            <li>
              <a href='#about' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id='profile'>
        <div className='section__pic-container'>
          <img
            src='/static/soft.JPG'
            alt='John Henry profile picture'
            className='profile-pic'
          />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello I'm</p>
          <h1 className='title'>John Henry</h1>
          <p className='section__text__p2'>Tech Support Specialist</p>
          <div className='btn-container'>
            <button className='btn btn-color-2' onClick={downloadCV}>
              Download CV
            </button>
            <button
              className='btn btn-color-1'
              //onClick={}
            >
              Contact Info
            </button>
          </div>
          <div id='socials-container'>
            <img
              src='/static/linkedin.png'
              alt='My LinkedIn profile'
              className='icon'
              //onClick={}
            />
            <img
              src='/static/github.png'
              alt='My GitHub profile'
              className='icon'
              //onClick={}
            />
          </div>
        </div>
      </section>
      <section id='about'>
        <p className='section__text__p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
          <div className='section__pic-container'>
            <img
              src='/static/profile-picture-2.jpg'
              alt='Profile Picture'
              className='about-pic'
            />
          </div>
          <div className='about-details-container'>
            <div className='about-containers'>
              <div className='details-container'>
                <img
                  src='/static/experience.png'
                  alt='Experience Icon'
                  className='icon'
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  IT Technician
                </p>
              </div>
              <div className='details-container'>
                <img
                  src='/static/education.png'
                  alt='Education Icon'
                  className='icon'
                />
                <h3>Education</h3>
                <p>B.Sc. Information Technology</p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                Results-driven IT Support with 2 years of experience providing
                technical solutions in diverse environments. Proficient in
                troubleshooting hardware, software, and network issues with a
                focus on enhancing user experience. Strong communication skills
                and a commitment to ongoing professional development to meet
                evolving industry standards.
              </p>
            </div>
          </div>
        </div>
        <img
          src='/static/arrow.png'
          alt='Arrow icon'
          className='icon arrow'
          //onClick={}
        />
      </section>
      <section id='experience'>
        <p className='section__text__p1'>Explore my</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Technical Skills</h2>
              <div className='article-container'>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Windows</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Active Directory</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Microsoft 365</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Computer Networking</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Hardware Troubleshooting</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Microsoft Azure</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Soft Skills</h2>
              <div className='article-container'>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Customer Service</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Responsiveness</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Teamwork</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Problem-solving</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Flexibility</h3>
                    <p>Experieced</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>Active Listening</h3>
                    <p>Experieced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Other Skills</h2>
              <div className='article-container'>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>HTML5/CSS3</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src='/static/checkmark.png'
                    alt='Experience Icon'
                    className='icon'
                  />
                  <div>
                    <h3>C# Programming</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects'>
        <p className='section__text__p1'>Browse My Recent</p>
        <h1 className='title'>Projects</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-container color-container'>
              <h2 className='experience-sub-title project-title'>
                Coming Soon!
              </h2>
            </div>
            <div className='details-container color-container'>
              <h2 className='experience-sub-title project-title'>
                Coming Soon!
              </h2>
            </div>
            <div className='details-container color-container'>
              <h2 className='experience-sub-title project-title'>
                Coming Soon!
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id='contact'>
        <p className='section__text__p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <img
              src='/static/email.png'
              alt='Email icon'
              className='icon contact-icon email-icon'
            />
            <p>
              <a href='mailto:jhenryj09@gmail.com'>jhenryj09@gmail.com</a>
            </p>
          </div>
          <div className='contact-info-container'>
            <img
              src='/static/linkedin.png'
              alt='Email icon'
              className='icon contact-icon email-icon'
            />
            <p>
              <a href='https://linkedin.com/in/john-henry-joromat'>LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className='nav-links-container'>
            <ul className='nav-links'>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 John Henry Joromat. All Rights Reserved.</p>
      </footer>
    </>
  );
}
