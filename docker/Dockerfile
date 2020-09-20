FROM node:14-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install && \
    npm run build

RUN ls -lA


FROM node:14-alpine

WORKDIR /home/node/app

COPY --from=0 /home/node/app/dist ./dist
COPY --from=0 /home/node/app/.env .
COPY --from=0 /home/node/app/package.json .
COPY --from=0 /home/node/app/node_modules ./node_modules

CMD [ "npm", "start" ]