import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

/**
 * Barra de navegación principal.
 * Usa NavLink para marcar visualmente la sección activa (Ejercicio 1).
 * Incluye el botón de cambio de tema claro/oscuro (Ejercicio 5).
 */
function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Mi Proyecto React</div>

      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/servicios"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Contacto
          </NavLink>
        </li>
      </ul>

      {/* Botón modo oscuro/claro - Ejercicio 5 */}
      <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Cambiar tema">
        {isDark ? '☀️ Claro' : '🌙 Oscuro'}
      </button>
    </nav>
  )
}

export default Navbar
