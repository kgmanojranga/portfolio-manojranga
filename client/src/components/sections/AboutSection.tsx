import { Link } from 'react-router-dom';
import Container from '../common/Container';
import portfolioData from '../../data/portfolio';
import aboutBackground from '../../assets/images/about-bg-low.jpg';
import heroImage from '../../assets/images/profile-image-2-low.jpg';

const AboutSection = () => {
  const { about } = portfolioData;

  // Create a short preview bio (first 2-3 sentences)
  const shortBio = about.bio.split('.').slice(0, 2).join('.') + '.';

  return (
    <section className="py-20 relative min-h-[calc(100vh-var(--navbar-height))] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-100 -z-10"
        style={{
          backgroundImage: `url(${aboutBackground})`,
        }}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Bio Preview */}
            <div className="md:col-span-2">
              <p className="text-neutral-300 leading-relaxed mb-6 text-sm md:text-md">
                {shortBio}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about" className="primary-button">
                  <span className="primary-button-text">Learn More</span>
                </Link>

                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient">
                      {about.yearsOfExperience.software}+
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Years in Software Engineering
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient">
                      {about.yearsOfExperience.civil}+
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Years in Civil Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image (optional) */}
            <div className="md:col-span-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="overflow-hidden w-48 h-48 rounded-full bg-gradient-to-br from-wave-primary/20 to-wave-secondary/20 border-2 border-wave-primary/30 flex items-center justify-center backdrop-blur-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-100 -z-10"
                    style={{
                      backgroundImage: `url(${heroImage})`,
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-wave-primary/20 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full bg-wave-secondary/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
