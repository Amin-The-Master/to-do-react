import './App.module.css'
import Done from './components/DoneList/Done';
import Todo from './components/ToDoList/Todo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InProgress from './components/InProgress';
import Rooter from './Rooter';
import MainPage from './components/MainPage/MainPage';

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
  if(localStorage.length === 0 && !localStorage.key('toDo')) {
    localStorage.setItem('toDo',JSON.stringify([]));
    localStorage.setItem('progressing',JSON.stringify([]));
    localStorage.setItem('done',JSON.stringify([]));
  }
 
  return <RouterProvider router={router} />
}

export default App;
