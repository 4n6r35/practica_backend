FROM node:latest as ts-compiler
WORKDIR /backend
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:latest as ts-remover
WORKDIR /backend
COPY --from=ts-compiler /backend/package*.json ./
COPY --from=ts-compiler /backend/build ./
RUN npm install --only=production

FROM gcr.io/distroless/nodejs:latest
WORKDIR /backend
COPY --from=ts-remover /backend ./
USER 1000
EXPOSE 8500/tcp
CMD ["app.js"]
