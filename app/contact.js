'use client';

export default function Contact() {
  return (
    <>
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
    </>
  );
}
