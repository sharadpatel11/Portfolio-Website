import './App.css';
import { Navbar } from './components';
import { Header, About, Skills } from './containers';

function App() {
  return (
    <div className="sp">
      <div>
        <Navbar />
        <Header />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
