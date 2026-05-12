# Proyecto React – Alternancia

Aplicación web desarrollada con React 19 y Vite como parte de los ejercicios de alternancia del módulo de **Desarrollo Web en Entorno Cliente**.

## Entregables

| Plataforma | URL |
|---|---|
| GitHub | https://github.com/Javi2333/alternancia-julian |
| Vercel | https://alternancia-julian-liart.vercel.app/ |
| InfinityFree | https://alternancia-julian.42web.io |

---

## Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | Biblioteca principal de UI |
| Vite | 8 | Bundler y servidor de desarrollo |
| React Router DOM | 7 | Navegación SPA sin recarga |
| CSS Modules | — | Estilos con scope por componente |
| CSS Custom Properties | — | Sistema de temas claro/oscuro |

---

## Estructura del proyecto

```
src/
├── main.jsx                    # Punto de entrada, BrowserRouter
├── App.jsx                     # Rutas principales + ThemeProvider
├── index.css                   # Variables CSS globales (temas)
├── App.css                     # Layout principal
├── context/
│   └── ThemeContext.jsx         # Contexto global del tema
├── components/
│   ├── Navbar.jsx               # Barra de navegación
│   └── Navbar.module.css
└── pages/
    ├── Inicio/
    │   ├── Inicio.jsx           # Página principal con hero y tarjetas
    │   └── Inicio.module.css
    ├── Servicios/
    │   ├── Servicios.jsx        # Contenedor de Galería y Blog
    │   ├── Galeria.jsx          # Ejercicio 3: galería interactiva
    │   ├── Blog.jsx             # Ejercicio 4: posts dinámicos
    │   └── *.module.css
    └── Contacto/
        ├── Contacto.jsx         # Ejercicio 2: formulario validado
        └── Contacto.module.css
```

---

## Ejercicios implementados

### Ejercicio 1 – Navegación SPA con React Router
Implementado en `App.jsx` y `Navbar.jsx`.

- `BrowserRouter` envuelve toda la app en `main.jsx`
- `Routes` y `Route` definen tres rutas: `/`, `/servicios`, `/contacto`
- `NavLink` en la Navbar aplica la clase `active` automáticamente a la ruta activa
- La navegación no recarga la página (comportamiento SPA)

### Ejercicio 2 – Formulario de Contacto con validación
Implementado en `pages/Contacto/Contacto.jsx`.

- Tres campos: nombre, email y mensaje
- Estado gestionado con `useState`: `campos`, `errores`, `tocados`, `enviado`
- `handleChange`: actualiza el campo y revalida si ya fue tocado
- `handleBlur`: marca el campo como tocado y valida al perder foco
- `handleSubmit`: bloquea el envío si hay errores; muestra mensaje de éxito 4 segundos
- Indicadores visuales verdes/rojos por campo mediante CSS Modules

### Ejercicio 3 – Galería de imágenes interactiva
Implementado en `pages/Servicios/Galeria.jsx`.

- Array `IMAGENES` con 5 fotos de picsum.photos
- Estado `seleccionada` controla qué imagen se muestra en grande
- Clic en miniatura actualiza el estado y cambia la imagen principal
- La miniatura activa recibe la clase CSS `activa` mediante renderizado condicional
- Badge `✓` sobre la miniatura seleccionada con renderizado condicional (`&&`)

### Ejercicio 4 – Blog dinámico
Implementado en `pages/Servicios/Blog.jsx`.

- Lista de posts gestionada con `useState`
- Crear nuevo post con título y contenido
- Editar post existente con estado local por componente (`PostCard`)
- Eliminar post
- Destacar/des-destacar post con resaltado visual

### Ejercicio 5 – Modo oscuro/claro
Implementado en `context/ThemeContext.jsx` e `index.css`.

- `ThemeProvider` gestiona el estado `isDark` con `useState`
- `useEffect` aplica `data-theme="dark"` o `"light"` en `document.documentElement`
- La preferencia se persiste en `localStorage` entre sesiones
- `useContext` expone `isDark` y `toggleTheme` a cualquier componente
- Los colores se definen como variables CSS en `:root` y `[data-theme='dark']`

---

## Instalación y ejecución local

**Requisitos:** Node.js 18 o superior

```bash
# Clonar el repositorio
git clone https://github.com/Javi2333/alternancia-julian.git
cd alternancia-julian/react-alternancia

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Despliegue

### Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos estáticos optimizados.

### Vercel (despliegue automático)

1. Importar el repositorio de GitHub en [vercel.com](https://vercel.com)
2. Vercel detecta Vite automáticamente y configura el build
3. Cada push a `main` despliega una nueva versión automáticamente

### InfinityFree (despliegue manual via FTP)

1. Crear cuenta en [infinityfree.com](https://infinityfree.com)
2. Obtener credenciales FTP desde el panel → "FTP Details"
3. Conectar con FileZilla al host `ftpupload.net`
4. Navegar a la carpeta `/htdocs` en el servidor
5. Subir el contenido de `dist/` (incluyendo `.htaccess`)
6. El archivo `.htaccess` es necesario para que React Router funcione en Apache:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Sin este archivo, las rutas como `/servicios` o `/contacto` devuelven error 404 al acceder directamente o al recargar la página, porque Apache busca un fichero físico en esa ruta y no lo encuentra.

---

## Historial de commits

El repositorio está organizado con una rama por ejercicio, fusionada a `main` con `--no-ff` para preservar el historial:

- `feature/ejercicio-1-navegacion`
- `feature/ejercicio-2-formulario`
- `feature/ejercicio-3-galeria`
- `feature/ejercicio-4-blog`
- `feature/ejercicio-5-tema`
