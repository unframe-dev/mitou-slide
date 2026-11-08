# MITOU Slide

## 開発

```bash
pnpm install
pnpm dev
```

## ビルド・書き出し

```bash
pnpm build
pnpm export
```

従来版は `slides.md`、成果発表版は `slides-final.md` を編集してください。共通スタイルは `styles/index.css`、成果発表版の追加スタイルは `styles/final.css` に配置しています。

## 成果発表版

```bash
pnpm dev slides-final.md
pnpm build
pnpm export slides-final.md
```

`pnpm build` は成果発表版の `slides-final.md` を対象に `dist/` を生成します。Cloudflareのビルドコマンドにも `pnpm build` を指定してください。従来版のビルドは `pnpm exec slidev build slides.md` で実行できます。`pnpm dev`・`pnpm export` の引数を省略すると、従来版の `slides.md` が対象になります。

成果発表版は、動機・提案・Unframeの機能・デモ・発表者の視点・技術構成・振り返り・今後の展望で構成しています。技術構成は、仕組みの全体像、技術構成の全体図、各部分の説明の順に紹介します。技術構成図の編集元は `diagrams/index.html`・`diagrams/tech.css`・`diagrams/tech.js` です。ロゴ付きHTML図をPNG化し、`slides-final.md` から `public/diagrams/tech-*.png` を参照しています。

図を編集した後は、Node.jsとGoogle Chromeがある環境で再生成してください。追加のJavaScript依存は不要です。ロゴの出典・実行環境の指定方法は [diagrams/README.md](diagrams/README.md) を参照してください。

```bash
node scripts/render-tech-diagrams.mjs
```

発表前の確認事項：

- プレゼンテイター視点の動画は `public/videos/presenter-view.mp4`（表紙画像は同名の `.jpg`）です。再生ボタンで開始し、スライドを離れると停止・先頭に戻ります。

## アセット

- `public/`: Workers に同梱する配信用アセット。スライドから `/brand/...`、`/profile/...`、`/proposal/...` のように参照します。
- `media/demos/`: Workers の25 MiB/ファイル制限を避けるため、公開リポジトリの GitHub Raw から参照する大容量デモ素材です。
- `media/source/`: GIF の元動画や、ビルドで直接使わない元画像を置きます。

デモ GIF を Raw URL で参照するため、GitHub リポジトリは公開設定にしてください。現在のスライドは `main` ブランチを参照しています。発表内容を固定する場合は、URL の `main` を対象コミット SHA に置き換えてください。

## テーマ

参照PDFの一枚一メッセージ構成と、Unframe LPの編集的な余白・非対称グリッド・Blue–Purple–Redのブランドグラデーションを組み合わせています。`public/brand/`にはLPと共通のアイコン、Hero、波形付きヘッダー画像を配置しています。

スライドのフロントマターでは、次のクラスを利用できます。

- `cover-slide`: LPのHeroアセットと巨大なDisplay Headingを使う表紙
- `chapter-slide`: グラデーション番号と非対称グリッドを持つ章扉
- `statement-slide`: 一つのメッセージを大きな余白の中に置くスライド
- `spatial-steps`: 細い罫線とグラデーション番号で手順を並べるスライド
- `closing-slide`: ブランド波形と軌道を持つ締めスライド

文章中の重要語は `<span class="accent">重要語</span>` でブランドグラデーションにできます。

PDF/PNG 書き出しが必要な場合だけ、Slidev のブラウザー依存を追加してください。

```bash
pnpm add -D playwright-chromium
pnpm exec playwright install chromium
pnpm export
```
