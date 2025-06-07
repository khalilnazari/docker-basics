# Trying my first Docker app.

This is simple react app runing by docker

- First, clone the repo
  `git clone https://github.com/docker/welcome-to-docker hello-docker-app`

- Go do the app directory `cd hello-docker-app`

- Open the hello-docker-app in VSCode and review the Dockerfile

- Run this docker to build the container
  `docker build -t hello-docker-app .`

Explaination:

- `docker build` this the docker command for building docker image

`-t hello-docker-app ` -t flag tag/name the created docker image with "hello-docker-app" text

`.` means run the command in the current directory. Hence, docker will look for the Docker file n the current directory and based on the instruction inside the file to create the image.

- After the command process is completed, check the image under the Images in the docker destop app.
- Click on the image name and set the name and port
- Go to Containers tab and run the container. OR, use this command to run the container.
