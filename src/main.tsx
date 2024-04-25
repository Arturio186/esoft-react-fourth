import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

import AppRouter from '#routes/AppRouter.tsx'
import store from '#store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
