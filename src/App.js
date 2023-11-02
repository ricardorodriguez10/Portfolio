import Navbar from './Containers/Navbar/Navbar';
import Me from "./Containers/Me/Me"
import About from "./Containers/About/About"
import Projects from "./Containers/Projects/Projects"
import Contact from "./Containers/Contact/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
