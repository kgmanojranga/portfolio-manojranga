import Interactive3DWave from '../components/common/Interactive3DWave';
import Interactive3DWaveAlt from '../components/common/Interactive3DWaveAlt';
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
  // Toggle between Interactive3DWave and Interactive3DWaveAlt to test
  const useAltVersion = true;

  return (
    <>
      {useAltVersion ? <Interactive3DWaveAlt /> : <Interactive3DWave />}
      <HeroSection />
      {/* Add more sections below that appear on scroll */}
      {/*<section className="min-h-screen">*/}
      {/*  Other content here*/}
      {/*</section>*/}
    </>
  );
};

export default HomePage;
