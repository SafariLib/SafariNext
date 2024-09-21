FROM node:19-slim

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

CMD ["npm", "start"]