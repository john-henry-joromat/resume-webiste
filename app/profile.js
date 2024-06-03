'use client';

export default function Profile() {
  return (
    <>
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
            <button className='btn btn-color-2' onClick={() => location.href='/static/resume.pdf'}>
              Download CV
            </button>
            <button
              className='btn btn-color-1'
              onClick={() => location.href='./#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id='socials-container'>
            <img
              src='/static/linkedin.png'
              alt='My LinkedIn profile'
              className='icon'
              onClick={() => location.href='https://linkedin.com/in/john-henry-joromat'}
            />
            <img
              src='/static/github.png'
              alt='My GitHub profile'
              className='icon'
              onClick={() => location.href='https://github.com/john-henry-joromat'}
            />
          </div>
        </div>
      </section>
    </>
  );
}
