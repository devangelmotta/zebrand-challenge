This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Disclaimer: La prueba decía que hiciese dos rutas, una para buscar repositorios y otra usuarios.
A mi parecer era un poco redundante dos buscadores (más aún que la app no hace mucho más).
Entonces busqué modificarlo en un solo buscador. Fue solo una opinión.

## Getting Started

Ejecutar proyecto

```bash
touch .env.local
# or
```
Luego copie en el mismo archivo las siguientes variables
```bash
NEXT_PUBLIC_URL_GITHUB_CODE = https://github.com/login/oauth/authorize
NEXT_PUBLIC_URL_GITHUB_TOKEN = https://github.com/login/oauth/access_token
NEXT_PUBLIC_GITHUB_GRAPHQL = https://api.github.com/graphql
NEXT_PUBLIC_GITHUB_CLIENT_ID = ed87073b5f965d9cb75e
NEXT_PUBLIC_GITHUB_CLIENT_SECRET = da0b1df0b1cc76a78f47f23e6407e0e0443dc889

URL_GITHUB_CODE = https://github.com/login/oauth/authorize
URL_GITHUB_TOKEN = https://github.com/login/oauth/access_token
GITHUB_GRAPHQL = https://api.github.com/graphql
GITHUB_CLIENT_ID = ed87073b5f965d9cb75e
GITHUB_CLIENT_SECRET = da0b1df0b1cc76a78f47f23e6407e0e0443dc889
```
Inicie el proyecto ejecutando
```bash
npm run dev
```
Correr tests
```bash
npm  test
```
Una vez corriendo el servidor vaya a [http://localhost:3000](http://localhost:3000)

Este proyecto fue pensando en una estructura limpia y escalable. 
Para ello se siguieron patrones de inyección de dependencias y granuralidad.
Por ejemplo, los reducers son inyectados directamente en el reducer principal permitiendo más independencia a cada
container pues todo lo que requiere está auto contenido.

La granuralidad se hizo en los componentes y funciones permitiendo un código fácilmente testeable y extensible.

La estructura del proyecto se encuenta así: 

## Project structure


```
src\

 |--componentes\    # Contiene todos los componentes que se reutilizan en el proyecto.
 |--pages\          # pages cumple el rol de container.
 |        \sections #Dentro de pages se encuentra sections, es una forma de organizar componentes complejos que       surgen en una sección específica de la página y que no son reutilizables. En la práctica es un ``components`` más, su sentido está en no crear otras carpetas components anidadas que generen confusión, de esa forma se delega los spaces names a escenarios realmente necesarios. 
            \slice  #Slice es una configuración muy sencilla provista por redux-toolkit. Junto con la inyección permite escribir la lógica del manejo de estados rápido, limpio y escalable. Contiene sagas también para manejar peticiones a recursos lejos de la UI.
 |--shared-types\   # Tipos e interfaces que no pertenecen a una page y se reusan en el proyecto.
 |--store\          # Toda la configuración de redux
 |--GraphQl\        # Toda la configuración de GraphQl, desde configuración del cliente hasta resolvers.
 |--styles\         # Estilos y assets
 |--utils\          # Helpers genéricos que se usan en el proyecto
```

Workflow:
    El proyecto inicia en la página de Auth, allí abre una url hacia github solicitando auth.
    Si github completa el proceso redirige a una url call-back es el endpoint de un API de NextJS (src/pages/api/callback-github-auth.ts), esa ruta captura un código que trae el callback y hace una petición a github para obtener un token.
    Si obtiene el token lo guarda en una cookie y redirige a /dashboard
    Si no pudo obtener el token redirige a /auth

    A partir de ese token se conecta al Api de GraphQL y se hacen las peticiones pertinentes.
# zebrand-challenge
