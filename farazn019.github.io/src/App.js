import './App.css';
import {render} from 'react-dom';


import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { NavigationBar } from './NavigationBar';

function App() {
  return (
    <div className="app">
      {/*<Badge bg="secondary" as={Button}>
        New
      </Badge>*/}
      <div className='navigation'>
        <NavigationBar/>
      </div>

      <div className="about-me-section">

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
