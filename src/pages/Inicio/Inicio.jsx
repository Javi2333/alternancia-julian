import styles from './Inicio.module.css'

/**
 * Página de Inicio.
 * Muestra la bienvenida y descripción del proyecto.
 */
function Inicio() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a Mi Proyecto React</h1>
        <p className={styles.subtitle}>
          Aplicación web desarrollada con React, React Router y CSS moderno.
        </p>
        <p className={styles.description}>
          Este proyecto fue desarrollado como parte de los ejercicios de alternancia del módulo de
          Desarrollo Web en Entorno Cliente. Incluye navegación SPA, formulario con validación,
          galería interactiva, blog dinámico y soporte para modo oscuro/claro.
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <span className={styles.icon}>🧭</span>
          <h3>Navegación SPA</h3>
          <p>Rutas sin recarga de página con React Router.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>📋</span>
          <h3>Formulario validado</h3>
          <p>Validación en tiempo real con useState y eventos.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>🖼️</span>
          <h3>Galería interactiva</h3>
          <p>Selección dinámica de imágenes con estado.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>📝</span>
          <h3>Blog dinámico</h3>
          <p>Crea, edita y elimina publicaciones en tiempo real.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>🌙</span>
          <h3>Modo oscuro</h3>
          <p>Cambio de tema mediante variables CSS.</p>
        </div>
      </section>
    </div>
  )
}

export default Inicio
