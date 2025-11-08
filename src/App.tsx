import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ClientPage } from './pages/ClientPage'
import { PresentationPage } from './pages/PresentationPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client/:clientId" element={<ClientPage />} />
        <Route
          path="/client/:clientId/project/:projectId"
          element={<PresentationPage />}
        />
      </Routes>
    </div>
  )
}

export default App
