# Rurning multi-container apps

To run multi-container app we use docker compose

### Docker Compose

Docker Compose is a tool for defining and managing multi-container applications. It uses a YAML file to configure the application's services, networks, and volumes. This allows for the entire application stack to be managed as a single unit.

### Steps to use docker compose

- Create Dockerfile in backend and frontend directory as usual
- Create compose.yml file and add services: web and api and the properies.

### Commands to run docker compose

At the root directory of mern-docker, use the following:

- To build docker image and container
  `sudo docker compose up`

- To run docker compose in watch mode
  `sudo docker compose watch`
