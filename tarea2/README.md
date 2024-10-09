# Tarea 2

Esta tarea es una API de autenticación construida con Express.js, MongoDB y JWT.

## Prerequisitos

- Node.js (v14 or later)
- MongoDB

## Variables de entorno

Cree un archivo `.env` en el directorio raíz y agregue lo siguiente:

```
PORT=3000
MONGODB_URI=mongodb+srv://isaacvazqsand:UfRgadFfG22bPWyI@cluster0.3wi5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=UfRgadFfG22bPWyI
```

## Instalación

1. Clona el respositorio:
   ```
   git clone https://github.com/isaac-evs/desarrollo_servidor.git
   cd tarea2
   ```

2. Instala las dedpendencia:
   ```
   npm install
   ```

## Ejecutar el proyecto

Para iniciar el servidor, ejecute el siguiente comando:

```
npm run dev
```

El servidor iniciaria en `http://localhost:3000` (o en el puerto especificado en el archivo .env).

## API Endpoints

- POST `/api/auth/register`: Registrar un nuevo usuario
- POST `/api/auth/login`: Iniciar sesión

## Testing

Utiliza postman para probar los endpoints de la API.

Ejemplo para registrar un usuario:
```
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "testuser@example.com",
  "password": "password123",
  "role": "user"
}
```

## Project Structure

```
tarea2 /
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── authcontrollers.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── routes/
│   │   └── authRoutes.ts
│   └── app.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
