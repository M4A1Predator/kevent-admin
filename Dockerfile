# FROM node:alpine AS builder

# WORKDIR /app

# COPY . .

# EXPOSE 8080

# RUN npm install && \
#     npm run build_prod
# # RUN npm install --global lite-server
# RUN npm install --global serve

# # ENTRYPOINT ["lite-server"]
# ENTRYPOINT ["serve "]

FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build_prod

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/