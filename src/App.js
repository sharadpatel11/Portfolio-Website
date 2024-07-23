import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
