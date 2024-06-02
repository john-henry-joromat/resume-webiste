'use client';

export default function About() {
  return (
    <>
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
    </>
  );
}
