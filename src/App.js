import './App.module.css'
import Done from './pages/Done';
import Todo from './pages/ToDoList/Todo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InProgress from './pages/InProgress';
import Rooter from './pages/Rooter';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rooter />,
    children: [
      {
        index: true,
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/Todo',
        element: <Todo />,
      },
      {
        path: '/inprogress',
        element: <InProgress />,
      },
      {
        path: '/done',
        element: <Done />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
