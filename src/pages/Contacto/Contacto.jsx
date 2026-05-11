import { useState } from 'react'
import styles from './Contacto.module.css'

/**
 * Valida los campos del formulario.
 * Devuelve un objeto con los errores encontrados.
 */
function validar(campos) {
  const errores = {}

  if (!campos.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio.'
  }

  if (!campos.email.trim()) {
    errores.email = 'El email es obligatorio.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) {
    errores.email = 'Introduce un email válido.'
  }

  if (!campos.mensaje.trim()) {
    errores.mensaje = 'El mensaje es obligatorio.'
  } else if (campos.mensaje.trim().length < 20) {
    errores.mensaje = 'El mensaje debe tener al menos 20 caracteres.'
  }

  return errores
}

/**
 * Página de Contacto con formulario validado en tiempo real.
 * Ejercicio 2: useState, onChange, onBlur, onSubmit y validaciones.
 */
function Contacto() {
  const [campos, setCampos] = useState({ nombre: '', email: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [tocados, setTocados] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Actualiza el campo y revalida en tiempo real
  const handleChange = (e) => {
    const { name, value } = e.target
    const nuevosCampos = { ...campos, [name]: value }
    setCampos(nuevosCampos)
    if (tocados[name]) {
      setErrores(validar(nuevosCampos))
    }
  }

  // Marca el campo como tocado y valida al perder foco
  const handleBlur = (e) => {
    const { name } = e.target
    const nuevosTocados = { ...tocados, [name]: true }
    setTocados(nuevosTocados)
    setErrores(validar(campos))
  }

  // Envía el formulario solo si no hay errores
  const handleSubmit = (e) => {
    e.preventDefault()
    const todosLosTocados = { nombre: true, email: true, mensaje: true }
    setTocados(todosLosTocados)
    const erroresFinales = validar(campos)
    setErrores(erroresFinales)
    if (Object.keys(erroresFinales).length === 0) {
      setEnviado(true)
      setCampos({ nombre: '', email: '', mensaje: '' })
      setTocados({})
      setTimeout(() => setEnviado(false), 4000)
    }
  }

  // Indica el estado visual de un campo: 'valido', 'invalido' o ''
  const estadoCampo = (nombre) => {
    if (!tocados[nombre]) return ''
    return errores[nombre] ? styles.invalido : styles.valido
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Contacto</h2>
      <p className={styles.subtitulo}>Rellena el formulario y nos pondremos en contacto contigo.</p>

      {enviado && (
        <div className={styles.exito}>
          ✅ Mensaje enviado correctamente. ¡Gracias!
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Campo Nombre */}
        <div className={styles.campo}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre completo"
            value={campos.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            className={estadoCampo('nombre')}
          />
          {tocados.nombre && errores.nombre && (
            <span className={styles.error}>{errores.nombre}</span>
          )}
          {tocados.nombre && !errores.nombre && (
            <span className={styles.ok}>✓ Correcto</span>
          )}
        </div>

        {/* Campo Email */}
        <div className={styles.campo}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={campos.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={estadoCampo('email')}
          />
          {tocados.email && errores.email && (
            <span className={styles.error}>{errores.email}</span>
          )}
          {tocados.email && !errores.email && (
            <span className={styles.ok}>✓ Correcto</span>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className={styles.campo}>
          <label htmlFor="mensaje">
            Mensaje
            <span className={styles.contador}> ({campos.mensaje.length} / mín. 20)</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            value={campos.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            className={estadoCampo('mensaje')}
          />
          {tocados.mensaje && errores.mensaje && (
            <span className={styles.error}>{errores.mensaje}</span>
          )}
          {tocados.mensaje && !errores.mensaje && (
            <span className={styles.ok}>✓ Correcto</span>
          )}
        </div>

        <button type="submit" className={styles.btn}>Enviar mensaje</button>
      </form>
    </div>
  )
}

export default Contacto
