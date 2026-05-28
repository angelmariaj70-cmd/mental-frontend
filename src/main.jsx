import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SearchContextShare from './context/ContextShare.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="513923018174-nsddqoiralhtm9dc45tno7g3q4sk7hmt.apps.googleusercontent.com"><SearchContextShare>
      <App/>
      </SearchContextShare>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
