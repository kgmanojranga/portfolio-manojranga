import Container from '../common/Container';
import type { About } from '../../types';

interface WhoIAmProps {
  about: About;
}

const WhoIAm = ({ about }: WhoIAmProps) => {
  return (
    <Container className="py-12">
      <div className="animate-fade-up animation-delay-400">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Who I Am
        </h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed text-[14px] max-w-4xl">
          <p>{about.bio}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">
              {about.yearsOfExperience.software}+
            </div>
            <div className="text-sm text-neutral-400">
              Years in Software Engineering
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">
              {about.yearsOfExperience.civil}+
            </div>
            <div className="text-sm text-neutral-400">
              Years in Civil Engineering
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoIAm;
