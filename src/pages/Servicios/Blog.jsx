import { useState } from 'react'
import styles from './Blog.module.css'

/**
 * Genera un ID único simple a partir del timestamp.
 */
const generarId = () => Date.now()

/**
 * Componente PostCard — muestra un post individual.
 * Permite editar, eliminar y destacar el post.
 */
function PostCard({ post, onEliminar, onEditar, onDestacar }) {
  const [editando, setEditando] = useState(false)
  const [titulo, setTitulo] = useState(post.titulo)
  const [descripcion, setDescripcion] = useState(post.descripcion)

  const guardar = () => {
    if (!titulo.trim() || !descripcion.trim()) return
    onEditar(post.id, { titulo, descripcion })
    setEditando(false)
  }

  return (
    <div className={`${styles.card} ${post.destacado ? styles.destacado : ''}`}>
      {editando ? (
        <div className={styles.editForm}>
          <input
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className={styles.editInput}
            placeholder="Título"
          />
          <textarea
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            className={styles.editTextarea}
            rows={3}
            placeholder="Descripción"
          />
          <div className={styles.acciones}>
            <button onClick={guardar} className={styles.btnGuardar}>Guardar</button>
            <button onClick={() => setEditando(false)} className={styles.btnCancelar}>Cancelar</button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.cardHeader}>
            <h4 className={styles.cardTitulo}>
              {post.destacado && <span className={styles.estrella}>⭐ </span>}
              {post.titulo}
            </h4>
          </div>
          <p className={styles.cardDesc}>{post.descripcion}</p>
          <div className={styles.acciones}>
            <button onClick={() => onDestacar(post.id)} className={styles.btnDestacar}>
              {post.destacado ? '★ Quitar' : '☆ Destacar'}
            </button>
            <button onClick={() => setEditando(true)} className={styles.btnEditar}>✏️ Editar</button>
            <button onClick={() => onEliminar(post.id)} className={styles.btnEliminar}>🗑️ Eliminar</button>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Componente Blog — sistema de posts dinámicos.
 * Ejercicio 4: formulario para crear posts, lista dinámica de PostCards,
 * con funcionalidad de editar, eliminar y destacar.
 */
function Blog() {
  const [posts, setPosts] = useState([
    { id: generarId(), titulo: 'Primer post de ejemplo', descripcion: 'Este es un post de ejemplo para mostrar cómo funciona el blog dinámico.', destacado: false },
  ])
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!titulo.trim() || !descripcion.trim()) {
      setError('Rellena el título y la descripción.')
      return
    }
    setPosts(prev => [
      { id: generarId(), titulo: titulo.trim(), descripcion: descripcion.trim(), destacado: false },
      ...prev,
    ])
    setTitulo('')
    setDescripcion('')
    setError('')
  }

  const eliminar = (id) => setPosts(prev => prev.filter(p => p.id !== id))

  const editar = (id, datos) => setPosts(prev =>
    prev.map(p => p.id === id ? { ...p, ...datos } : p)
  )

  const destacar = (id) => setPosts(prev =>
    prev.map(p => p.id === id ? { ...p, destacado: !p.destacado } : p)
  )

  return (
    <div className={styles.blog}>
      <h3 className={styles.titulo}>Blog</h3>

      {/* Formulario para nuevo post */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del post"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Descripción del post"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          rows={3}
          className={styles.textarea}
        />
        {error && <span className={styles.error}>{error}</span>}
        <button type="submit" className={styles.btnPublicar}>+ Publicar post</button>
      </form>

      {/* Lista de posts */}
      <div className={styles.lista}>
        {posts.length === 0 && (
          <p className={styles.vacio}>No hay publicaciones. ¡Crea la primera!</p>
        )}
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onEliminar={eliminar}
            onEditar={editar}
            onDestacar={destacar}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
