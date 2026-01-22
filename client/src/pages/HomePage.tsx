import HeroSection from '../components/sections/HeroSection';
import Interactive3DWave from '../components/common/Interactive3DWave.tsx';
import AboutPage from './AboutPage.tsx';
import HeroSectionCopy from '../components/sections/HeroSectionCopy.tsx';

const HomePage = () => {
  return (
    <>
      {<Interactive3DWave />}
      {/*<ScrollAnimatedHero />*/}
      <HeroSectionCopy />
      <HeroSection />
      <AboutPage />
      {/* Add more sections below that appear on scroll */}
      {/*<section className="min-h-screen">*/}
      {/*  Other content here*/}
      {/*</section>*/}
    </>
  );
};

export default HomePage;
