import { NavigationBar } from './NavigationBar';
import { AboutMe } from './AboutMe';

import './App.css';
import { WorkExperience } from './WorkExperience';

function App() {
  return (
    <div className="app">
      
      <div className='navigation' id="navigation">
        <NavigationBar/>
      </div>

      <div className="about-me-section" id="about-me-section">
        <AboutMe/>
      </div>

      <div className="work-experience" id="work-experience">
        <WorkExperience/>
      </div>

      <div className="resume" id="resume">

      </div>

      <div className="side-projects" id="side-projects">

      </div>

      <div className="contact-me" id="contact-me">

      </div>
    </div>
  );
}

export default App;
