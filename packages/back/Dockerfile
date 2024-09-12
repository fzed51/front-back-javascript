ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app

FROM base AS initpord
ENV NODE_ENV production
COPY package.json .
RUN npm install --omit=dev

FROM base AS initdev
ENV NODE_ENV development
COPY package.json .
RUN npm install

FROM initdev AS build
COPY . .
RUN npm run prisma:g
RUN npm run build

FROM initdev AS dev
COPY . .
RUN npm run prisma:g
CMD ["npm", "run", "dev"]

FROM node:${NODE_VERSION}-alpine AS test
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run prisma:g
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM initpord
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules/@prisma/client /app/node_modules/@prisma/client
COPY --from=build /app/prisma /app/prisma
COPY --from=build /app/data /app/data
EXPOSE 3000
CMD ["npm", "run", "start"]
