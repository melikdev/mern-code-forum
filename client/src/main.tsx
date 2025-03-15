import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import './index.css';
import App from './App.tsx';
import NewQuestion from './routes/NewQuestion.tsx';
import MainLayout from './components/MainLayout.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import Login from './routes/Login.tsx';
import Register from './routes/Register.tsx';
import { RouterProvider } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import SavedQuestions from './routes/SavedQuestions.tsx';
import SingleQuestion from './routes/SingleQuestion.tsx';

const queryClient = new QueryClient();

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/question/new',
        element: <NewQuestion />,
      },
      {
        path: '/question/:id',
        element: <SingleQuestion />,
      },
      {
        path: '/user/login',
        element: <Login />,
      },
      {
        path: '/user/register',
        element: <Register />,
      },
      {
        path: '/saved-questions',
        element: <SavedQuestions />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </ClerkProvider>
);
