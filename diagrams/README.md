# 技術構成図

`index.html`、`tech.css`、`tech.js` が編集用ソースです。外部通信なしで表示でき、`logos/` のロゴ素材を参照します。次のURLパラメーターで図を切り替えます。

- `index.html?diagram=overview`: 全体図
- `index.html?diagram=mr`: MR
- `index.html?diagram=web`: Web
- `index.html?diagram=backend`: Server
- `index.html?diagram=framework`: 記述・ビルド・配信

## 画像の再生成

リポジトリルートで実行します。Node.jsとGoogle Chromeが必要です。追加のJavaScript依存はありません。

```bash
node scripts/render-tech-diagrams.mjs
```

macOSでは`/Applications/Google Chrome.app`を使用します。別のChrome / Chromiumを使う場合は`BROWSER_BIN`に実行ファイルのパスを指定します。日本語フォントとしてNoto Sans JPまたはHiragino Sansを利用します。書き出し環境によって代替フォントや折り返しが変わるため、再生成後は表示を確認してください。

1768 × 650 CSS pxのHTMLを2倍で撮影し、`public/diagrams/tech-*.png`へ3536 × 1300 pxで出力します。`slides-final.md`では884 × 325 px相当で使用します。Server・Web・記述・ビルド・配信図は1768 × 800 CSS pxで生成し、スライドでは884 × 400 px相当で表示します。タイトル・共通フッター・補足テキストはSlidev側に残しています。

## ロゴ素材の出典

ロゴは元の縦横比を保って配置しています。各名称・ロゴの商標権は権利者に帰属します。

- React、TypeScript、Unity、Go、Cloudflare、Three.js: [Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0/icons)（MIT）。Goは`go-original-wordmark.svg`、それ以外は`{name}-original.svg`。
- Meta: [Simple Icons](https://github.com/simple-icons/simple-icons/tree/develop/icons)（CC0）。使用ファイルは`meta.svg`。名称・ブランドの利用条件は各権利者の規定を参照してください。
- Unframe: このリポジトリの`public/brand/icon.png`。

Deviconライセンスは`logos/LICENSE-devicon`、Simple Iconsのライセンスは`logos/LICENSE-simple-icons`に同梱しています。

Cloudflare Workers、Tailscale、Honoは提供画像（`cloudflareworkers.png`、`tailscale.png`、`hono.png`）を使用しています。

Google、Better Auth、Resendは提供画像（`google.png`、`betterauth.png`、`resend.svg`）を使用しています。
