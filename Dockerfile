FROM node:21 
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
COPY . .
RUN npx tsc
EXPOSE 3000
CMD ["npx", "ts-node", "src/app.ts"]