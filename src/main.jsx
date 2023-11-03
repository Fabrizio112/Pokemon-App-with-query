import React from 'react'
import ReactDOM from 'react-dom/client'
import PokedexApp from './Components/PokedexApp.jsx'
import "./assets/css/styles.css"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux"
import { store } from './store/store.js'

let queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <PokedexApp />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
