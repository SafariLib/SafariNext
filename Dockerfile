FROM node:22-slim

ENV NODE_ENV "production"
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_API_URL "https://api.safaridigital.fr"

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]