# TaskListWebSocket

Este proyecto es una aplicación de lista de tareas colaborativa en tiempo real utilizando WebSockets y Node.js.

## Características
- Añade, elimina y edita notas/tareas.
- Sincronización en tiempo real entre clientes mediante WebSocket.
- Interfaz web sencilla y responsiva

## Estructura del proyecto
- `src/` - Código fuente del backend y frontend
  - `app.js` - Configuración principal de la aplicación
  - `config.js` - Configuración de parámetros
  - `db.js` - Conexión y lógica de base de datos
  - `index.js` - Punto de entrada del servidor
  - `socket.js` - Lógica de WebSocket
  - `models/Note.js` - Modelo de datos para notas/tareas
  - `public/` - Archivos estáticos del frontend
    - `index.html` - Página principal
    - `main.css` - Estilos
    - `main.js` - Lógica principal del frontend
    - `socket.js` - Comunicación WebSocket en el frontend
    - `ui.js` - Lógica de interfaz de usuario
- `package.json` - Dependencias y scripts de npm

## Instalación
1. Clona el repositorio.
2. Instala las dependencias:
   ```powershell
   npm install
   ```
3. Inicia el servidor:
   ```powershell
   npm start
   ```
4. Abre `http://localhost:3000` en tu navegador.

## Requisitos
- Node.js >= 14

## Uso
- Accede a la web, añade tareas y observa cómo se sincronizan en tiempo real entre todos los usuarios conectados.

## Licencia
MIT
