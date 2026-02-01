import Container from '../common/Container';
import Education from './Education';
import type { About, Education as EducationType } from '../../types';

interface WhoIAmProps {
  about: About;
  education: EducationType[];
}

const WhoIAm = ({ about, education }: WhoIAmProps) => {
  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-up animation-delay-400">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Who I Am
          </h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed text-[14px]">
            <p>{about.bio}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-gradient mb-2">
                {about.yearsOfExperience.software}+
              </div>
              <div className="text-sm text-neutral-400">Years in Software</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-gradient mb-2">
                {about.yearsOfExperience.civil}+
              </div>
              <div className="text-sm text-neutral-400">
                Years in Civil Engineering
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <Education education={education} />
      </div>
    </Container>
  );
};

export default WhoIAm;
