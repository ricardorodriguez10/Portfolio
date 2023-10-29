import Navbar from './Containers/Navbar/Navbar';
import Me from "./Containers/Me/Me"
import About from "./Containers/About/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Me />
      <About />
    </div>
  );
}

export default App;
