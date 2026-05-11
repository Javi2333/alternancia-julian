import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio/Inicio'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'
import './App.css'

/**
 * Componente raíz de la aplicación.
 * Envuelve todo en ThemeProvider y define las rutas principales.
 */
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
