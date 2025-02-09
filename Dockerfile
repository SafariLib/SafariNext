FROM node:22-slim

ENV NODE_ENV "production"
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]