<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> b9f14b405196c133c46637f6814c3095e64563a6
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './App.css'

function App() {
  return (
<<<<<<< HEAD
    <Router basename="/stroyka">
=======
    <Router>
>>>>>>> b9f14b405196c133c46637f6814c3095e64563a6
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
<<<<<<< HEAD
            <Route path="*" element={<Navigate to="/" replace />} />
=======
>>>>>>> b9f14b405196c133c46637f6814c3095e64563a6
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

