import React from 'react';
import './styles/globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { personalInfo } from './data/personalInfo';
import { skills } from './data/skills';
import { projects } from './data/projects';

const navItems = [
  { name: '首页', href: '#home' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' }
];

function App() {
  return (
    <div className="App">
      <Header navItems={navItems} />
      
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact email={personalInfo.email} socialLinks={personalInfo.socialLinks} />
      </main>
      
      <Footer socialLinks={personalInfo.socialLinks} email={personalInfo.email} />
    </div>
  );
}

export default App;