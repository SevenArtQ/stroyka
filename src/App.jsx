import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ToastContainer from './components/ToastContainer'
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

// Компонент для обработки редиректа с 404 страницы
function RedirectHandler() {
  const navigate = useNavigate()
  
  useEffect(() => {
    const currentPath = window.location.pathname
    const basename = getBasename()
    
    // Нормализуем путь - убираем базовый путь если есть
    let normalizedPath = currentPath
    if (basename && currentPath.startsWith(basename)) {
      normalizedPath = currentPath.substring(basename.length)
    }
    
    // Если пользователь явно перешел на /shop - разрешаем
    if (normalizedPath === '/shop' || normalizedPath === 'shop') {
      // Проверяем, был ли это прямой переход (не через редирект)
      const redirectPath = sessionStorage.getItem('ghp_redirect')
      if (redirectPath === 'shop') {
        // Это был прямой переход на shop - разрешаем
        sessionStorage.removeItem('ghp_redirect')
        return
      }
    }
    
    // Проверяем, был ли редирект через 404.html (только для других путей, не shop)
    const redirectPath = sessionStorage.getItem('ghp_redirect')
    if (redirectPath && redirectPath !== 'shop') {
      sessionStorage.removeItem('ghp_redirect')
      navigate('/' + redirectPath, { replace: true })
      return
    }
    
    // Очищаем shop из sessionStorage если он там есть (чтобы не открывался автоматически)
    if (redirectPath === 'shop') {
      sessionStorage.removeItem('ghp_redirect')
    }
    
    // Если путь пустой, только слэш, или index.html - ВСЕГДА переходим на главную
    if (!normalizedPath || normalizedPath === '/' || normalizedPath === '/index.html' || normalizedPath === '') {
      navigate('/', { replace: true })
    }
  }, [navigate])
  
  return null
}

function App() {
  return (
    <Router basename={getBasename()}>
      <RedirectHandler />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App

