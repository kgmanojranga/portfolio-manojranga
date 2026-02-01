import Container from '../common/Container';

const LetsWorkTogether = () => {
  return (
    <Container className="py-12">
      <div className="bg-gradient-to-r from-wave-primary/10 to-wave-secondary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-wave-primary/20 text-center animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="primary-button">
            <span className="primary-button-text">Get In Touch</span>
          </a>
          <a href="/projects" className="secondary-button">
            View My Work
          </a>
        </div>
      </div>
    </Container>
  );
};

export default LetsWorkTogether;
