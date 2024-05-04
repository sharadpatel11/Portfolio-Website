import './App.css';
import { Navbar, Projects, Footer } from './components';
import { Header, Skills, Contact } from './containers';

function App() {
  return (
    <div className="sp">
      <div>
        <Navbar />
        <Header />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
