import './Home.css'

function Home() {

  const stats = [
    { number: '500+', label: 'Завершенных проектов' },
    { number: '14', label: 'Лет опыта' },
    { number: '50+', label: 'Специалистов' },
    { number: '100%', label: 'Гарантия качества' }
  ]

  const portfolio = [
    { id: 1, title: 'Жилой комплекс', description: 'Многоэтажное строительство', year: '2023' },
    { id: 2, title: 'Офисный центр', description: 'Коммерческая недвижимость', year: '2023' },
    { id: 3, title: 'Частный дом', description: 'Элитное жилье', year: '2022' },
    { id: 4, title: 'Торговый центр', description: 'Реконструкция и отделка', year: '2022' },
    { id: 5, title: 'Промышленный объект', description: 'Складской комплекс', year: '2021' },
    { id: 6, title: 'Коттеджный поселок', description: 'Комплексное строительство', year: '2021' }
  ]

  const testimonials = [
    { 
      id: 1, 
      name: 'Иван Петров', 
      role: 'Владелец бизнеса',
      text: 'Отличная работа! Проект был выполнен в срок и с высоким качеством. Рекомендую компанию СТРОЙКА всем, кто ищет надежного подрядчика.',
      rating: 5
    },
    { 
      id: 2, 
      name: 'Мария Сидорова', 
      role: 'Частный заказчик',
      text: 'Очень довольна результатом. Команда профессионалов, которые знают свое дело. Все сделано аккуратно и качественно.',
      rating: 5
    },
    { 
      id: 3, 
      name: 'Алексей Козлов', 
      role: 'Директор компании',
      text: 'Работали с компанией на нескольких объектах. Всегда пунктуальны, качество на высшем уровне. Будем сотрудничать дальше.',
      rating: 5
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Премиум строительство</div>
            <h1 className="hero-title">СТРОЙКА</h1>
            <p className="hero-subtitle">Профессиональные строительные решения</p>
            <p className="hero-description">
              Мы создаем качественные и надежные строительные проекты с 2010 года. 
              Наша команда профессионалов готова реализовать ваши идеи.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Связаться с нами</a>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">О нас</span>
            <h2 className="section-title">О компании</h2>
            <p className="section-description">
              Профессионализм, качество и надежность — наши главные принципы
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                СТРОЙКА — это команда опытных специалистов, которые занимаются 
                строительством и ремонтом уже более 14 лет. Мы предлагаем полный 
                спектр строительных услуг от проектирования до сдачи объекта.
              </p>
              <p>
                Наша компания использует только качественные материалы и современные 
                технологии. Мы гарантируем высокое качество работ и соблюдение всех 
                сроков выполнения проектов.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div>
                    <h4>Современные технологии</h4>
                    <p>Используем передовые методы строительства</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div>
                    <h4>Гарантия качества</h4>
                    <p>Официальная гарантия на все виды работ</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <div>
                    <h4>Опытная команда</h4>
                    <p>Профессионалы с многолетним опытом</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Услуги</span>
            <h2 className="section-title">Наши услуги</h2>
            <p className="section-description">
              Полный спектр строительных и ремонтных работ
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon icon-building"></div>
              <h3>Строительство</h3>
              <p>Возведение зданий и сооружений любой сложности</p>
              <a href="#contact" className="service-link">Узнать больше →</a>
            </div>
            <div className="service-card">
              <div className="service-icon icon-tools"></div>
              <h3>Ремонт</h3>
              <p>Капитальный и косметический ремонт помещений</p>
              <a href="#contact" className="service-link">Узнать больше →</a>
            </div>
            <div className="service-card">
              <div className="service-icon icon-design"></div>
              <h3>Проектирование</h3>
              <p>Разработка проектной документации</p>
              <a href="#contact" className="service-link">Узнать больше →</a>
            </div>
            <div className="service-card">
              <div className="service-icon icon-finish"></div>
              <h3>Отделка</h3>
              <p>Внутренняя и внешняя отделка помещений</p>
              <a href="#contact" className="service-link">Узнать больше →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Портфолио</span>
            <h2 className="section-title">Наши проекты</h2>
            <p className="section-description">
              Реализованные проекты, которыми мы гордимся
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">
                  <div className="portfolio-overlay">
                    <span className="portfolio-year">{project.year}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Отзывы</span>
            <h2 className="section-title">Что говорят клиенты</h2>
            <p className="section-description">
              Мнения наших заказчиков о работе с нами
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Контакты</span>
            <h2 className="section-title">Свяжитесь с нами</h2>
            <p className="section-description">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon icon-phone"></div>
                <h4>Телефон</h4>
                <p>+7 (999) 123-45-67</p>
                <a href="tel:+79991234567" className="contact-link">Позвонить</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon icon-email"></div>
                <h4>Email</h4>
                <p>info@stroyka.ru</p>
                <a href="mailto:info@stroyka.ru" className="contact-link">Написать</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon icon-location"></div>
                <h4>Адрес</h4>
                <p>г. Москва, ул. Строительная, д. 1</p>
                <a href="#" className="contact-link">Как добраться</a>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form 
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
                }}
              >
                <h3>Отправить сообщение</h3>
                <div className="form-row">
                  <input type="text" placeholder="Ваше имя" required />
                  <input type="tel" placeholder="Телефон" required />
                </div>
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Сообщение" rows="5" required></textarea>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
