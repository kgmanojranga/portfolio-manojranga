import Container from '../common/Container';
import heroProfileImage from '../../assets/images/hero-profile-image-low.jpg';
import heroProfileImage2 from '../../assets/images/hero-profile-image-3-low.jpg';

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] flex items-center py-8 relative">
      {/* Background image for small screens */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden transition-opacity duration-100"
        style={{
          backgroundImage: `url(${heroProfileImage2})`,
        }}
      />

      {/* Background image for medium and larger screens */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block transition-opacity duration-100"
        style={{
          backgroundImage: `url(${heroProfileImage})`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/10" />

      <Container className="w-full flex gap-8 relative z-10">
        <div className="w-full md:max-w-2xl flex flex-col gap-4 md:gap-8 items-center md:items-start">
          {/* HELLO! - Largest, full gradient */}
          <h1 className="text-gradient text-center md:text-left font-aeonik text-[68px] sm:text-[96px] md:text-[128px] tracking-[-0.05em] leading-none animate-fade-up">
            HELLO!
          </h1>

          {/* I'm Manoj Ranga - Medium size, gradient only on name */}
          <h2 className="text-center md:text-left font-aeonik text-[30px] sm:text-[36px] md:text-[48px] leading-tight animate-fade-up animation-delay-200">
            <span
              className="text-neutral-400"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              I'm{' '}
            </span>
            <span
              className="tracking-[-0.05em]"
              style={{
                background:
                  'linear-gradient(135deg, #DC8AF5, #F58AD8, #8AB3F5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter:
                  'drop-shadow(0 3px 6px rgba(220, 138, 245, 0.4)) drop-shadow(0 6px 12px rgba(139, 179, 245, 0.3))',
              }}
            >
              Manoj Ranga
            </span>
          </h2>

          {/* a Software Engineer - Smallest, clean white */}
          <h3 className="text-center md:text-left font-aeonik text-[24px] sm:text-[30px] md:text-[36px] tracking-[-0.05em] leading-tight animate-fade-up animation-delay-400">
            <span
              className="text-neutral-400"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              a{' '}
            </span>
            <span
              className="text-white dark:text-white"
              style={{
                textShadow:
                  '0 2px 6px rgba(139, 179, 245, 0.6), 0 4px 12px rgba(220, 138, 245, 0.4), 0 0 20px rgba(139, 179, 245, 0.3)',
              }}
            >
              Software Engineer
            </span>
          </h3>

          {/* Brief Introduction */}
          <p className="text-center md:text-left text-white text-[12px] md:text-[14px]  max-w-[500px] leading-relaxed px-4 md:px-0 animate-fade-up animation-delay-600">
            Passionate about building scalable web applications and creating
            seamless user experiences. Specialized in full-stack development
            with modern technologies.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start items-center animate-fade-up animation-delay-800 px-4 md:px-0">
            <a href="#projects" className="primary-button">
              <span className="primary-button-text">View Projects</span>
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
            <a href="/resume" className="general-button">
              Download Resume
            </a>
          </div>

          {/* Quick Links & Email */}
          <div className="flex flex-col items-center md:items-start gap-4 animate-fade-up animation-delay-1000">
            {/* Email */}
            {/*<a*/}
            {/*  href="mailto:manojranga7583@gmail.com"*/}
            {/*  className="text-neutral-300 hover:text-wave-primary transition-colors text-[14px] sm:text-[16px] flex items-center gap-2"*/}
            {/*>*/}
            {/*  <svg*/}
            {/*    className="w-5 h-5"*/}
            {/*    fill="none"*/}
            {/*    stroke="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      strokeLinecap="round"*/}
            {/*      strokeLinejoin="round"*/}
            {/*      strokeWidth={2}*/}
            {/*      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*  <span>manojranga7583@gmail.com</span>*/}
            {/*</a>*/}

            {/* Social Links */}
            {/*<div className="flex gap-6">*/}
            {/*  <a*/}
            {/*    href="https://github.com/kgmanojranga"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="text-neutral-400 hover:text-wave-primary transition-colors"*/}
            {/*    aria-label="GitHub"*/}
            {/*  >*/}
            {/*    <svg*/}
            {/*      className="w-6 h-6"*/}
            {/*      fill="currentColor"*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*    >*/}
            {/*      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="https://www.linkedin.com/in/manoj-ranga-76531416b"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="text-neutral-400 hover:text-wave-primary transition-colors"*/}
            {/*    aria-label="LinkedIn"*/}
            {/*  >*/}
            {/*    <svg*/}
            {/*      className="w-6 h-6"*/}
            {/*      fill="currentColor"*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*    >*/}
            {/*      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
