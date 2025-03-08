# Node.js 18 を使用
FROM node:18-alpine AS builder
WORKDIR /app

# 依存関係をインストール
COPY package.json package-lock.json tsconfig.json ./
RUN npm install

# アプリコードをコピー
COPY . .

# TypeScript をコンパイル
RUN npm run build

# 本番環境用イメージ
FROM node:18-alpine
WORKDIR /app

# 必要なファイルだけコピー
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --production

# ポートを公開
EXPOSE 4000

# サーバーを起動
CMD ["node", "dist/index.js"]
