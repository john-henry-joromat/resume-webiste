'use client';

import Navigation from './navigation.js';
import Profile from './profile.js';
import About from './about.js';
import Experience from './experience.js';
import Projects from './project.js'
import Contact from './contact.js';
import Footer from './footer.js';

export default function Page() {
  return (
    <>
      <Navigation />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
