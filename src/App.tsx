import { RouterProvider } from 'react-router';
import { router } from './routes';
import './lib/i18n';

export default function App() {
  return <RouterProvider router={router} />;
}
