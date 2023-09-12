import { NavigationBar } from './NavigationBar';
import { AboutMe } from './AboutMe';

import './App.css';

function App() {
  return (
    <div className="app">
      
      <div className='navigation'>
        <NavigationBar/>
      </div>

      <div className="about-me-section">
        <AboutMe/>
      </div>

      <div className="work-experience">

      </div>

      <div className="resume">

      </div>

      <div className="side-projects">

      </div>

      <div className="contact-me">

      </div>
    </div>
  );
}

export default App;
