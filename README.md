# MITOU Slide

参照元の [cf-wrks-kyoto-2](https://github.com/T4ko0522/cf-wrks-kyoto-2) と同じく、Slidev と Geist テーマを使うスライドの scaffold です。

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

発表内容は `slides.md`、共通スタイルは `styles/index.css` を編集してください。

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
