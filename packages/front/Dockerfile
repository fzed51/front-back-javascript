ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app

FROM base as init
COPY package.json .
RUN npm install --omit=dev
RUN npm install

FROM init as build
COPY . .
RUN npm run build

FROM nginx:alpine
ENV NODE_ENV production
COPY package.json .
COPY --chown=nginx:nginx ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
