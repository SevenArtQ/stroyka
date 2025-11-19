import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './App.css'

// Определяем basename автоматически на основе текущего пути
function getBasename() {
  const path = window.location.pathname
  if (path.startsWith('/stroyka')) {
    return '/stroyka'
  }
  return ''
}

function App() {
  return (
    <Router basename={getBasename()}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

