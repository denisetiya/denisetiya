
import Header from '../components/layout/Header';
import Hero from '../components/fragment/Hero';
import About from '../components/fragment/About';
import Skills from '../components/fragment/Skills';
import Experience from '../components/fragment/Experience';
import Projects from '../components/fragment/Projects';
import Contact from '../components/fragment/Contact';
import Footer from '../components/layout/Footer';
import LoadingScreen from '../components/widget/LoadingScreen';
import ScrollProgress from '../components/widget/ScrollProgress';
import BackToTop from '../components/widget/BackToTop';
import CustomCursor from '../components/widget/CustomCursor';
import { useSmoothScroll } from '../hooks/useScroll';

function Home() {
  useSmoothScroll();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default Home;