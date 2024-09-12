ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
EXPOSE 8080

FROM base AS init
COPY package.json .
RUN npm install --omit=dev
RUN npm install

FROM init AS build
COPY . .
RUN npm run build

FROM init AS dev
COPY . .
CMD ["npm", "run", "dev"]

FROM nginx:alpine
ENV NODE_ENV production
COPY package.json .
COPY --chown=nginx:nginx ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
