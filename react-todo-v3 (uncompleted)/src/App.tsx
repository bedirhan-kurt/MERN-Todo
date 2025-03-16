import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Application from "@/pages/Application.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application />}/>
      </Routes>
    </Router>
  )
}

export default App
