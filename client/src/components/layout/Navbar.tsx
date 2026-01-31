import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import Container from '../common/Container';
import profileImage from '../../assets/images/profile-image-2-low.jpg'; // import ThemeToggle from '../common/ThemeToggle'; // Removed - dark mode only
// import ThemeToggle from '../common/ThemeToggle'; // Removed - dark mode only

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: ROUTES.HOME, label: 'Home' },
    { to: ROUTES.ABOUT, label: 'About' },
    { to: ROUTES.PROJECTS, label: 'Projects' },
    { to: ROUTES.CONTACT, label: 'Contact' },
    { to: ROUTES.RESUME, label: 'Resume' },
  ];

  return (
    <nav className="navbar-height bg-white dark:bg-neutral-950 shadow-md sticky top-0 z-50 border-b-2 border-neutral-200 dark:border-white/10">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to={ROUTES.HOME}
            className="flex items-center"
            onClick={closeMenu}
          >
            <img
              src={profileImage}
              alt="Manoj Profile"
              className="w-10 h-10 rounded-full profile-image object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="navbar-buttons">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-4 h-4 text-neutral-600 dark:text-neutral-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 mt-2">
            <ul className="space-y-2 p-4 bg-black/80 rounded-md">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-2 px-4 text-neutral-600 dark:text-neutral-300 dark:hover:text-white transition-colors text-[12px]"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
