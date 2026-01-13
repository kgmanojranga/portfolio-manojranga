import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage';
import ColorSystemPage from '../pages/ColorSystemPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <ProjectsPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
      },
      {
        path: ROUTES.RESUME,
        element: <ResumePage />,
      },
      {
        path: ROUTES.COLOR_SYSTEM,
        element: <ColorSystemPage />,
      },
    ],
  },
]);
