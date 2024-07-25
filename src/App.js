import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar, Projects, Footer } from './components';
import { Header, Skills, Contact } from './containers';

function App() {
  return (
    <div className="sp">
      <div>
        <div className="scale-in-top">
          <Navbar />
          <Header />
        </div>
        <div className="bounce-in-left">
          <Projects />
        </div>
        <Skills />
        <Contact />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
