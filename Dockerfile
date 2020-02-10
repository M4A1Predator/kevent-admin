FROM node:alpine AS builder

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install && \
    npm run build_prod
RUN npm install --global lite-server

ENTRYPOINT ["lite-server"]
