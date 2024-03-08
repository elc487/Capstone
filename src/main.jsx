import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './app/components/Redux/store.jsx'
// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
