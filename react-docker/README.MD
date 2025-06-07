# Dockerize React app

- Create Dockerfile and provides the docker settings.

- Build the image
  `docker build -t react-docker .`

- add `--host` in package.json file

```
"scripts": {
  "dev": "vite --host",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
},
```

- Run the container
  `docker run -p 5173:5173 react-docker`

- Run the container in watch mode
  `docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker`

# Some Docker commands

- list all active containers
  `docker ps`

- list all containers
  `docker ps -a`

- stop docker
  `docker stop <container-name>`
  OR
  `docker stop <first-3-digit-of-container-id>`

- Remove all stoped containers
  `docker container prune`

- Remove a specific container
  `docker rm <docker-name>` OR `docker rm <first-3-digit-of-container-id>`
  use --force flag to force remove

-
