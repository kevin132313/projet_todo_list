import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={isAuthenticated ? (
            <div className="app-container">
              <h1>TaskFlow Dashboard</h1>
              <p>Welcome to your project management dashboard</p>
              <button onClick={() => setIsAuthenticated(false)}>
                Logout
              </button>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
