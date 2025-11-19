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
    // Проверяем, был ли редирект через 404.html
    const redirectPath = sessionStorage.getItem('ghp_redirect')
    if (redirectPath && redirectPath !== 'shop') {
      // Очищаем sessionStorage
      sessionStorage.removeItem('ghp_redirect')
      // Навигируем на правильный путь
      navigate('/' + redirectPath, { replace: true })
      return
    }
    
    // Если был редирект на shop, но мы хотим главную - игнорируем
    if (redirectPath === 'shop') {
      sessionStorage.removeItem('ghp_redirect')
    }
    
    // Убеждаемся, что при первой загрузке открывается главная страница
    const currentPath = window.location.pathname
    const basename = getBasename()
    
    // Нормализуем путь - убираем базовый путь если есть
    let normalizedPath = currentPath
    if (basename && currentPath.startsWith(basename)) {
      normalizedPath = currentPath.substring(basename.length)
    }
    
    // Если путь пустой, только слэш, или index.html - переходим на главную
    // НЕ переходим на shop автоматически
    if (!normalizedPath || normalizedPath === '/' || normalizedPath === '/index.html' || normalizedPath === '') {
      // Проверяем, что мы не на shop странице
      if (!normalizedPath.includes('shop')) {
        navigate('/', { replace: true })
      }
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

