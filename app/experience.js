'use client';

import { useEffect, useState } from 'react';

export default function Experience() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Technical Skills',
      skills: [
        {
          name: 'Windows',
          level: 'Intermediate',
        },
        {
          name: 'Active Directory',
          level: 'Basic',
        },
        {
          name: 'Microsoft 365',
          level: 'Basic',
        },
        {
          name: 'Computer Networking',
          level: 'Basic',
        },
        {
          name: 'Hardware Troubleshooting',
          level: 'Basic',
        },
        {
          name: 'Microsoft Azure',
          level: 'Basic',
        },
      ],
    },
    {
      id: 2,
      name: 'Soft Skills',
      skills: [
        {
          name: 'Customer Service',
          level: 'Experienced',
        },
        {
          name: 'Responsiveness',
          level: 'Intermediate',
        },
        {
          name: 'Team Work',
          level: 'Intermediate',
        },
        {
          name: 'Problem-Solving',
          level: 'Intermediate',
        },
        {
          name: 'Flexibility',
          level: 'Intermediate',
        },
        {
          name: 'Active Listening',
          level: 'Intermediate',
        },
      ],
    },
    {
      id: 3,
      name: 'Other Skills',
      skills: [
        {
          name: 'HTML5',
          level: 'Basic',
        },
        {
          name: 'CSS3',
          level: 'Basic',
        },
        {
          name: 'JavaScript',
          level: 'Basic',
        },
        {
          name: 'React.js',
          level: 'Basic',
        },
        {
          name: 'C#',
          level: 'Basic',
        },
        {
          name: 'Python',
          level: 'Basic',
        },
      ],
    },
  ]);

  return (
    <>
      <section id='experience'>
        <p className='section__text__p1'>Explore my</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            {data.map((experience) => (
              <div className='details-container' key={experience.id}>
                <h2 className='experience-sub-title'>{experience.name}</h2>
                <div className='article-container'>
                  {experience.skills.map((skill, index) => (
                    <article>
                      <img
                        src='/static/checkmark.png'
                        alt='Experience Icon'
                        className='icon'
                      />
                      <div key={index}>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
