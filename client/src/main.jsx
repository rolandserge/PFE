import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import App from './App.jsx'
import { SnackbarProvider } from "notistack"
import store from './store.js'
import { Provider } from 'react-redux'
import axios from 'axios'

axios.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Accept": "application/json",
  "Content-Type": "application/json"
}

axios.defaults.baseURL = "http://localhost:5000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider>
      <ModalsProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ModalsProvider>
    </MantineProvider>
  </Provider>
)
