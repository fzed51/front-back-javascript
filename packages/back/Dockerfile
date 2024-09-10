ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app

FROM base as initpord
COPY package.json .
RUN npm install --omit=dev

FROM initpord as init
RUN npm install

FROM init as build
ENV NODE_ENV production
COPY . .
RUN npm run prisma:g
RUN npm run build

FROM initpord
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules/@prisma/client /app/node_modules/@prisma/client
COPY --from=build /app/prisma /app/prisma
COPY --from=build /app/data /app/data
EXPOSE 3000
CMD ["npm", "run", "start"]
