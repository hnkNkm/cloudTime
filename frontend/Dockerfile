# Node.js 18 を使用
FROM node:18-alpine AS builder
WORKDIR /app

# 依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# アプリコードをコピー
COPY . .

# Next.js のビルド
RUN npm run build

# 本番環境用イメージ
FROM node:18-alpine
WORKDIR /app

# 必要なファイルだけコピー
COPY --from=builder /app ./

# 環境変数を設定（Next.jsの最適化）
ENV NODE_ENV=production

# Next.js の実行
CMD ["npm", "run", "start"]
