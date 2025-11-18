import { useState } from 'react'
import './Shop.css'

const products = [
  {
    id: 1,
    name: 'Цемент М500',
    price: 450,
    originalPrice: 520,
    description: 'Высококачественный цемент для строительных работ. Производство по ГОСТ. Гарантия качества.',
    category: 'Материалы',
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Кирпич облицовочный',
    price: 25,
    originalPrice: 28,
    description: 'Красный облицовочный кирпич, 250x120x65 мм. Морозостойкость F50. Высокое качество.',
    category: 'Материалы',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Профнастил С8',
    price: 320,
    originalPrice: 360,
    description: 'Оцинкованный профнастил для кровли и заборов. Толщина 0.5 мм. Защита от коррозии.',
    category: 'Кровля',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Доска обрезная 50x150',
    price: 8500,
    originalPrice: 9200,
    description: 'Сосновая доска, 6 метров, 1 куб.м. Влажность до 18%. Сорт А.',
    category: 'Пиломатериалы',
    inStock: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 5,
    name: 'Плитка керамическая',
    price: 1200,
    originalPrice: 1400,
    description: 'Напольная плитка 30x30 см, 1 кв.м. Высокая износостойкость. Класс PEI IV.',
    category: 'Отделка',
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 6,
    name: 'Гипсокартон ГКЛ',
    price: 280,
    originalPrice: 320,
    description: 'Лист гипсокартона 2500x1200x12.5 мм. Влагостойкий. ГОСТ 6266-97.',
    category: 'Отделка',
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 7,
    name: 'Краска акриловая',
    price: 650,
    originalPrice: 750,
    description: 'Водоэмульсионная краска белая, 10 л. Моющаяся. Расход 1 л/10 м².',
    category: 'Отделка',
    inStock: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 8,
    name: 'Арматура А12',
    price: 85,
    originalPrice: 95,
    description: 'Стальная арматура диаметром 12 мм, 1 метр. Класс А500С. ГОСТ 5781-82.',
    category: 'Материалы',
    inStock: true,
    rating: 4.9,
    reviews: 112
  },
  {
    id: 9,
    name: 'Утеплитель Rockwool',
    price: 1800,
    originalPrice: 2100,
    description: 'Минеральная вата 100 мм, 5 м². Теплопроводность 0.037 Вт/м·К. Негорючий.',
    category: 'Материалы',
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 10,
    name: 'Металлочерепица',
    price: 450,
    originalPrice: 520,
    description: 'Металлочерепица Монтеррей, 1 м². Толщина 0.5 мм. Полимерное покрытие.',
    category: 'Кровля',
    inStock: true,
    rating: 4.9,
    reviews: 167
  }
]

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ['Все', ...new Set(products.map(p => p.category))]

  let filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(p => p.category === selectedCategory)

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const updateCartQuantity = (index, change) => {
    const newCart = [...cart]
    const item = newCart[index]
    if (change === -1 && item.quantity === 1) {
      removeFromCart(index)
      return
    }
    item.quantity = (item.quantity || 1) + change
    setCart(newCart)
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <div className="shop">
      <section className="shop-hero">
        <div className="container">
          <h1 className="shop-title">Магазин строительных материалов</h1>
          <p className="shop-subtitle">Премиум качество для вашего проекта</p>
        </div>
      </section>

      <section className="section shop-content">
        <div className="container">
          <div className="shop-layout">
            <div className="products-section">
              <div className="shop-controls">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <div className="controls-row">
                  <div className="category-filter">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="default">По умолчанию</option>
                    <option value="price-asc">Цена: по возрастанию</option>
                    <option value="price-desc">Цена: по убыванию</option>
                    <option value="rating">По рейтингу</option>
                  </select>
                </div>
              </div>

              <div className="products-grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    {product.originalPrice && (
                      <div className="product-badge">Скидка</div>
                    )}
                    <div className="product-image">
                      <div className="product-overlay">
                        <button 
                          className="view-details-btn"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Подробнее
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-rating">
                        <span className="stars">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
                          ))}
                        </span>
                        <span className="rating-value">{product.rating}</span>
                        <span className="reviews-count">({product.reviews})</span>
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-footer">
                        <div className="product-pricing">
                          <span className="product-price">{product.price.toLocaleString()} ₽</span>
                          {product.originalPrice && (
                            <span className="product-original-price">{product.originalPrice.toLocaleString()} ₽</span>
                          )}
                        </div>
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => addToCart(product)}
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-section">
              <div className="cart">
                <div className="cart-header">
                  <h2 className="cart-title">Корзина</h2>
                  {cart.length > 0 && (
                    <span className="cart-count">{totalItems}</span>
                  )}
                </div>
                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <p>Корзина пуста</p>
                    <span>Добавьте товары из каталога</span>
                  </div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                          <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <div className="cart-item-pricing">
                              <p>{item.price.toLocaleString()} ₽</p>
                              <div className="quantity-controls">
                                <button onClick={() => updateCartQuantity(index, -1)}>-</button>
                                <span>{item.quantity || 1}</span>
                                <button onClick={() => updateCartQuantity(index, 1)}>+</button>
                              </div>
                            </div>
                          </div>
                          <button 
                            className="remove-btn"
                            onClick={() => removeFromCart(index)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="cart-total">
                      <div className="total-row">
                        <p className="total-label">Товаров:</p>
                        <p className="total-value">{totalItems} шт.</p>
                      </div>
                      <div className="total-row">
                        <p className="total-label">Итого:</p>
                        <p className="total-price">{totalPrice.toLocaleString()} ₽</p>
                      </div>
                    </div>
                    <button className="checkout-btn">Оформить заказ</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-product">
              <div className="modal-product-image"></div>
              <div className="modal-product-info">
                <h2>{selectedProduct.name}</h2>
                <div className="modal-rating">
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'star filled' : 'star'}>★</span>
                    ))}
                  </span>
                  <span>{selectedProduct.rating} ({selectedProduct.reviews} отзывов)</span>
                </div>
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="modal-pricing">
                  <span className="modal-price">{selectedProduct.price.toLocaleString()} ₽</span>
                  {selectedProduct.originalPrice && (
                    <span className="modal-original-price">{selectedProduct.originalPrice.toLocaleString()} ₽</span>
                  )}
                </div>
                <button 
                  className="modal-add-btn"
                  onClick={() => {
                    addToCart(selectedProduct)
                    setSelectedProduct(null)
                  }}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop
