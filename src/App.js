import './App.module.css'
import { useState, useRef } from 'react';
import Done from './components/Done';
import Todo from './components/Todo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InProgress from './components/InProgress';
import Rooter from './Rooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rooter />,
    children: [
      {
        index: true,
        path: '/',
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
  if(!localStorage.key('toDo')) {
    localStorage.setItem('toDo',JSON.stringify([]));
    localStorage.setItem('progressing',JSON.stringify([]));
    localStorage.setItem('done',JSON.stringify([]));
  }

  return <RouterProvider router={router} />
}

export default App;
