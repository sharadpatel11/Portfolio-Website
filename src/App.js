import './App.css';
import { Navbar } from './components';
import { Header, About, Skills, Contact } from './containers';

function App() {
  return (
    <div className="sp">
      <div>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
