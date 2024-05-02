import './App.css';
import { Navbar } from './components';
import { Header, About } from './containers';

function App() {
  return (
    <div className="sp">
      <div>
        <Navbar />
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
