import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import router from './routers/router.jsx'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router = {router} />
  </Provider>,
)
