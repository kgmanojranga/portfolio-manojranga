import Container from '../common/Container';

interface Interest {
  icon: string;
  title: string;
  description: string;
}

interface BeyondCodeProps {
  interests: Interest[];
}

const BeyondCode = ({ interests }: BeyondCodeProps) => {
  return (
    <Container className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white animate-fade-up">
        Beyond Code
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-wave-primary/30 transition-all hover:transform hover:scale-[1.05] text-center animate-fade-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="text-5xl mb-4">{interest.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {interest.title}
            </h3>
            <p className="text-sm text-neutral-400">{interest.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BeyondCode;
