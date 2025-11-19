import { useEffect, useRef } from 'react'
import './YandexMap.css'

function YandexMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Проверяем, загружена ли библиотека Яндекс.Карт
    if (!window.ymaps) {
      // Загружаем Яндекс.Карты API
      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU'
      script.async = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    function initMap() {
      if (!window.ymaps || mapInstanceRef.current) return

      window.ymaps.ready(() => {
        // Координаты Конаково, Тверская область
        const coordinates = [56.7167, 36.7667]

        // Создаем карту
        const map = new window.ymaps.Map(mapRef.current, {
          center: coordinates,
          zoom: 14,
          controls: ['zoomControl', 'fullscreenControl']
        })

        // Создаем метку с кастомной иконкой
        const placemark = new window.ymaps.Placemark(
          coordinates,
          {
            balloonContentHeader: '<strong>СТРОЙКА</strong>',
            balloonContentBody: 'Конаково, Тверская область<br>Конаковский район',
            balloonContentFooter: '<a href="tel:+79108337977">+7 (910) 833-79-77</a>',
            hintContent: 'СТРОЙКА - Конаково'
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0C11.193 0 0 11.193 0 25C0 37.5 25 60 25 60C25 60 50 37.5 50 25C50 11.193 38.807 0 25 0Z" fill="#D4AF37"/>
                <circle cx="25" cy="25" r="10" fill="white"/>
                <circle cx="25" cy="25" r="5" fill="#D4AF37"/>
              </svg>
            `),
            iconImageSize: [50, 60],
            iconImageOffset: [-25, -60],
            iconContentOffset: [0, 0]
          }
        )

        map.geoObjects.add(placemark)
        mapInstanceRef.current = map
      })
    }

    return () => {
      // Очистка при размонтировании компонента
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="yandex-map" />
}

export default YandexMap

