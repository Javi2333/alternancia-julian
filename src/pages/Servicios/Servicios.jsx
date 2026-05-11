import Galeria from './Galeria'
import Blog from './Blog'
import styles from './Servicios.module.css'

/**
 * Página de Servicios.
 * Contiene el componente Galería (Ejercicio 3) y el componente Blog (Ejercicio 4).
 */
function Servicios() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Servicios</h2>
      <p className={styles.subtitulo}>Explora nuestra galería y las últimas publicaciones del blog.</p>

      <section className={styles.seccion}>
        <Galeria />
      </section>

      <section className={styles.seccion}>
        <Blog />
      </section>
    </div>
  )
}

export default Servicios
