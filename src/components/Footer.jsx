import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>СТРОЙКА</h3>
            <p>Профессиональные строительные услуги</p>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Email: info@stroyka.ru</p>
            <p>Адрес: г. Москва, ул. Строительная, д. 1</p>
          </div>
          <div className="footer-section">
            <h4>Режим работы</h4>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: Выходной</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 СТРОЙКА. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

