import Interactive3DWave from '../components/common/Interactive3DWave.tsx';
import AboutPage from './AboutPage.tsx';
import HeroSection from '../components/sections/HeroSection.tsx';

const HomePage = () => {
  return (
    <>
      {<Interactive3DWave />}
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
