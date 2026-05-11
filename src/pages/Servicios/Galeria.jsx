import { useState } from 'react'
import styles from './Galeria.module.css'

/**
 * Lista de imágenes de la galería.
 * Se usan imágenes de Unsplash con dimensiones fijas para no depender de archivos locales.
 */
const IMAGENES = [
  { id: 1, src: 'https://picsum.photos/seed/naturaleza/800/500', thumb: 'https://picsum.photos/seed/naturaleza/200/130', alt: 'Naturaleza' },
  { id: 2, src: 'https://picsum.photos/seed/ciudad/800/500',     thumb: 'https://picsum.photos/seed/ciudad/200/130',     alt: 'Ciudad' },
  { id: 3, src: 'https://picsum.photos/seed/oceano/800/500',     thumb: 'https://picsum.photos/seed/oceano/200/130',     alt: 'Océano' },
  { id: 4, src: 'https://picsum.photos/seed/montana/800/500',    thumb: 'https://picsum.photos/seed/montana/200/130',    alt: 'Montaña' },
  { id: 5, src: 'https://picsum.photos/seed/desierto/800/500',   thumb: 'https://picsum.photos/seed/desierto/200/130',   alt: 'Desierto' },
]

/**
 * Componente Galería de imágenes interactiva.
 * Ejercicio 3: imagen principal dinámica, miniatura seleccionada resaltada,
 * uso de src, alt, className y renderizado condicional.
 */
function Galeria() {
  const [seleccionada, setSeleccionada] = useState(IMAGENES[0])

  return (
    <div className={styles.galeria}>
      <h3 className={styles.titulo}>Galería de imágenes</h3>

      {/* Imagen principal */}
      <div className={styles.principal}>
        <img
          src={seleccionada.src}
          alt={seleccionada.alt}
          className={styles.imgPrincipal}
        />
        <p className={styles.caption}>{seleccionada.alt}</p>
      </div>

      {/* Miniaturas */}
      <div className={styles.miniaturas}>
        {IMAGENES.map(img => (
          <button
            key={img.id}
            className={`${styles.miniatura} ${seleccionada.id === img.id ? styles.activa : ''}`}
            onClick={() => setSeleccionada(img)}
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <img src={img.thumb} alt={img.alt} />
            {/* Indicador visual de selección - renderizado condicional */}
            {seleccionada.id === img.id && (
              <span className={styles.badge}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Galeria
