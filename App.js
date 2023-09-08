import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Homepage from './components/Homepage';
import Service from './components/Service';

function App() {

  return (
    <div className="App">
   <Homepage/>
   <Service/>
   <Experience/>
   <Education/>
   <Contact/>
    </div>
  );
}

export default App;
