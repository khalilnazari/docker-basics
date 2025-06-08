# Dockerize Next.js app

### Initialize docker

In the root directory of nextjs-docker, run:

`docker init`

and choose the following options:

```
khalil@Khalil nextjs-docker % docker init

Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

! Warning → The following Docker files already exist in this directory:
  - README.Docker.md

? Do you want to overwrite them? Yes
? What application platform does your project use? Node
? What version of Node do you want to use? 22.16.0
? Which package manager do you want to use? npm
? Do you want to run "npm run build" before starting your server? No
? What command do you want to use to start the app? npm run dev
? What port does your server listen on? 3000
```

it will create the following files:
Dockerfile
.dockerignore
compose.yaml

**To run docker build**
`sudo docker compose up`

**To run docker in watch mode**
`sudo docker compose watch`
