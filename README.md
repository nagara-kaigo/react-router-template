# React Router テンプレート

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

**React Router v7** のシンプルな SPA テンプレート。  
**shadcn/ui** がセットアップされており、**GitHub Actions** で **GitHub Pages** に簡単デプロイできます。

</div>

## 📋 目次

- [React Router テンプレート](#react-router-テンプレート)
  - [📋 目次](#-目次)
  - [✨ 特徴](#-特徴)
  - [🚀 はじめ方](#-はじめ方)
  - [💅 shadcn/ui の追加方法](#-shadcnui-の追加方法)
  - [🌐 GitHub Pages にデプロイする](#-github-pages-にデプロイする)
  - [⚙️ 自動デプロイの設定](#️-自動デプロイの設定)

## ✨ 特徴

- SPA モードの **React Router v7**
- **shadcn/ui**
- **GitHub Actions** による **GitHub Pages** へのデプロイ

## 🚀 はじめ方

1. **pnpm をインストールする**

   ```bash
   npm install -g pnpm
   ```

2. **必要なパッケージをインストールする**

   ```bash
   pnpm install
   ```

3. **開発サーバーを起動する**

   ```bash
   pnpm run dev
   ```

## 💅 shadcn/ui の追加方法

```bash
pnpm dlx shadcn@latest add <コンポーネント名>
```

詳細: [shadcn/ui コンポーネント一覧](https://ui.shadcn.com/docs/components/)

## 🌐 GitHub Pages にデプロイする

デプロイの設定は [github/workflows/deploy‑gh‑pages.yml](github/workflows/deploy‑gh‑pages.yml) にあります。

1. リポジトリの Settings → Pages で、Source を GitHub Actions に設定します。
2. 次のファイルにある `<YOUR_REPO_NAME>` を、実際のリポジトリ名に書き換えてください：

`react-router.config.ts`

```ts
basename: import.meta.env.PROD ? "/<YOUR_REPO_NAME>" : "/",
```

`vite.config.ts`

```ts
base: mode === "production" ? "/<YOUR_REPO_NAME>/" : undefined,
```

> [!NOTE]
> 例：リポジトリが https://github.com/your‑name/my‑app の場合、
> react-router.config.ts では `/my‑app`（最後のスラッシュなし）を、
> vite.config.ts では `/my‑app/`（最後のスラッシュあり）を指定します。

デフォルトでは、手動でデプロイする設定になっています。
変更をプッシュしたら、Actions → Deploy to GitHub Pages → Run workflow でサイトを公開できます。

`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

## ⚙️ 自動デプロイの設定

`.github/workflows/deploy-gh-pages.yml`

```yaml
on:
  workflow_dispatch: {} # ← 有効
  # push:                 # ← コメントアウト
  #   branches: [main]
```

main ブランチにプッシュするたびに自動でデプロイしたい場合は、上記の push 部分のコメントを外してコミットしてください。

---

<div align="center">

HappyHacking 🎉

</div>
