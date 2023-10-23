import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Description from './components/Description';
import AddNote from './components/AddNote';
import { Provider } from 'react-redux';
import { store } from './app/store';
import EmptyList from './components/EmptyList';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <EmptyList/>
      },
      {
        path: '/:id',
        element: <Description/>,
        loader: ({ params }) => {
          const state = store.getState()
          const notes = state.notes
          const id = params.id!
          const note = notes.find((note) => note.id === parseInt(id))
          if (note === undefined) {
            throw new Response("Not found", {
              status: 404,
              statusText: "Not found"
            })
          }
          return note
        }
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
    <div className='relative h-screen text-slate-200'>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  </React.StrictMode>
)
