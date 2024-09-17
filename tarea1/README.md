
# Tarea 1

Este es el repositorio de la Tarea 1,consiste en una middleware de roles en Express y Typescript


# Contenido 

```bash        
        project/
        ├── dist/
        │   └── index.js
        │
        ├── node_modules/
        │
        ├── src/
        │   ├── controllers/
        │   │    ├── index.ts
        │   │    ├── peliculas.controller.ts
        │   │    └── user.controller.ts
        │   │
        │   ├── middlewares/
        │   │    ├── auth.ts
        │   │    └── roles.ts
        │   │
        │   ├── routes/
        │   │    ├── index.ts
        │   │    ├── peluches.ts
        │   │    └── users.ts
        │   │
        │   ├── types/
        │   │    └── users.ts
        │   │
        │   └── index.ts
        │
        ├── package-lock.json
        ├── package.json
        ├── tsconfig.json
        └── README.md

## Instalación

Importante: Requiere [Node.js](https://nodejs.org/) para ejecutar.

```bash
git clone https://github.com/isaac-evs/desarrollo_servidor.git
```

```bash
cd desarrollo_servidor
```

```bash
cd tarea1
npm install
```

```bash
npm start
```

Ahora, abre tu navegador con la direccion de `http://localhost:3000/`


## Testing


Abre el siguiente archivo en: `desarrollo_servidor/tarea1/src/middlewares/roles.ts`

Modifica el rol del usuario harcodeado, los validos son admin y gerente, cualquier otro rol es invalido 

```typescript

export function roles(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const hardcodedUser: User = {
      id: "1",
      name: "John Doe",
      role: "gerente",
    };

    if (allowedRoles.includes(hardcodedUser.role!)) {
      req.user = hardcodedUser;
      return next();
    } else {
      return res.status(403).send("Acceso prohibido");
    }
  };
}

```


Presiona `Cmd + S` o `Control + S` para guardar los cambios.


Abra su navegador con la direccion de `http://localhost:3000/usuarios` para checar los cambios


No importa que rol uses, ya que aparecera "Unauthorized", debido a que se necesita la contrasena: [12345
](http://localhost:3000/usuarios?key=12345)


Ahora, si no eres admin ni gerente te aparecera "acceso prohibido", pero si lo eres te debera aparecer: "lista de usuarios"
## Autores

- [@isaac-evs](https://www.github.com/isaac-evs) - Isaac Ernesto Vazquez Sandoval
