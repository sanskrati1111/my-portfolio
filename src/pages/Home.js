import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About  from './About';
import Experience from './Experience';
import Projects from './Projects';
import Newsletter from './Newsletter';
// import Contact from './Contact';
import Footer from '../components/Footer';
import TechnicalSkills from './TechnicalSkills';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechnicalSkills />
      <Projects/>
      <Newsletter />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
