import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Description from './components/Description';
import AddNote from './components/AddNote';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Description/>
      },
      {
        path: '/:id',
        element: <Description/>
      },
      {
        path: '/add-note',
        element: <AddNote/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='h-screen text-slate-200 relative'>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  </React.StrictMode>
)
