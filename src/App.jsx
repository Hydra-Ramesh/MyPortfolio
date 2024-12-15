import About from './sections/About.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Project.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
};

export default App;