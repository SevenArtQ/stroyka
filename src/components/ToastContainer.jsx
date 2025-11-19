import { useState, useCallback, useEffect } from 'react'
import Toast from './Toast'

let toastId = 0

function ToastContainer() {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'success') => {
    const id = toastId++
    setToasts(prev => [...prev, { id, message, type }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  useEffect(() => {
    // Экспортируем функцию для использования в других компонентах
    window.showToast = showToast
    
    return () => {
      delete window.showToast
    }
  }, [showToast])

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  )
}

export default ToastContainer

