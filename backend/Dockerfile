FROM node:18-alpine

WORKDIR /app

# Instalar dependencias (incluye dev deps porque algunas libs están ahí)
COPY package.json package-lock.json* ./
RUN npm install --silent || true

# Copiar el resto del código
COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "app.mjs"]
