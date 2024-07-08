import './App.css';
import Cover from './components/Cover'
import About from './components/About'
import SchoolOfFootball from './components/SchoolFootball';
import Birthdays from './components/Birthdays';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Cover/>
      <About/>
      <SchoolOfFootball/>
      <Birthdays/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
