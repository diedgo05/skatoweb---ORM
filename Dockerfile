# ---- API SKATO: Node + Express + Sequelize ----
    FROM node:20-bookworm-slim

    # bcrypt compila binarios nativos; estas herramientas evitan fallos
    # de instalación (sobre todo en Apple Silicon / arm64).
    RUN apt-get update && apt-get install -y --no-install-recommends \
        python3 make g++ \
     && rm -rf /var/lib/apt/lists/*
    
    WORKDIR /usr/src/app
    
    # 1) Solo package.json primero -> aprovecha la cache de Docker
    COPY package*.json ./
    RUN npm install --omit=dev
    
    # 2) Resto del código
    COPY . .
    
    EXPOSE 3000
    CMD ["node", "server.js"]