import './App.css';
import AboutSection from './components/about-section';
import HeroSection from './components/hero-section';
import Navigation from './components/navigation';
import SkillSection from './components/skills-section';

function App() {
  return (
    <div className="min-h-screen crow-pattern">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
