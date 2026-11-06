---
theme: geist
layout: default
title: Unframe — 身体を使うMRプレゼンテーション
info: Unframeの概要・技術構成・開発の振り返り
author: Unframe
keywords: [Unframe, MR, ユーザー中心設計]
transition: fade
colorSchema: light
highlighter: shiki
lineNumbers: false
aspectRatio: 16/9
canvasWidth: 980
mermaid:
  theme: base
  themeVariables:
    fontFamily: 'Inter, Noto Sans JP, sans-serif'
    fontSize: '20px'
    primaryColor: '#eeeaf5'
    primaryTextColor: '#252733'
    primaryBorderColor: '#9a80d0'
    lineColor: '#85899b'
    secondaryColor: '#e9edfc'
    tertiaryColor: '#f7f7f5'
  flowchart:
    curve: linear
    nodeSpacing: 32
    rankSpacing: 40
themeConfig:
  default: light
class: final-deck final-cover
---

<div class="final-brand"><img src="/brand/icon.png" alt="" />Unframe</div>
<div class="final-cover-copy">
  <h1>Unframe</h1>
  <p class="final-cover-subtitle">身体を使う<br>MRプレゼンテーション</p>
</div>
<img class="final-hero" src="/brand/hero.png" alt="空間にコンテンツを広げて発表するUnframeのイメージ" />

<style src="./styles/final.css"></style>


---
class: final-deck final-install
---

<style src="./styles/final.css"></style>

<div class="final-label">デモの事前準備</div>
<h1>Meta Questへのインストール</h1>
<div class="final-install-grid">
  <div class="final-install-code">
    <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
    <div>Meta Quest用 · インストール</div>
  </div>
  <div>
    <ol class="final-install-steps">
      <li><span>01</span><div>スマートフォンで<br>QRコードを読み取る</div></li>
      <li><span>02</span><div>開いたページで認証する</div></li>
      <li><span>03</span><div>認証後、Meta Questを起動する</div></li>
    </ol>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-01" class="chapter-wave" />
<div class="chapter-number">01</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 01</div>
  <h1>自己紹介</h1>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default profile-slide">
<GradientWave id="profile-wave-sato" class="profile-wave" />

<div class="section-label">01 — 自己紹介</div>

<div class="profile-shell">
  <div class="profile-identity">
    <img class="profile-avatar" src="/profile/kazuki-sato.jpg" alt="佐藤和貴のプロフィール画像" />
    <div class="profile-alias">柿氷</div>
    <div class="profile-links">
      <div class="profile-link"><SocialIcon platform="x" />@kakakisann</div>
      <div class="profile-link"><SocialIcon platform="github" />@kakgr</div>
    </div>
  </div>
  <div class="profile-content">
    <h1>佐藤 和貴</h1>
    <dl class="profile-details">
      <div><dt>今回の担当</dt><dd>MR部分</dd></div>
      <div><dt>技術スタック</dt><dd>Vulkan / Metal ・ HLSL / GLSL ・ C# / C++</dd></div>
      <div><dt>趣味</dt><dd>ゲーム ・ TRPG ・ 写真</dd></div>
      <div><dt>関心分野</dt><dd>グラフィックス・シェーダー</dd></div>
    </dl>
  </div>
</div>
  </div>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf p.6 -->


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default profile-slide">
<GradientWave id="profile-wave-gondai" class="profile-wave" flip />

<div class="section-label">01 — 自己紹介</div>

<div class="profile-shell">
  <div class="profile-identity">
    <img class="profile-avatar" src="/profile/soshi-gondai.png" alt="権代颯士のプロフィール画像" />
    <div class="profile-alias">T4ko0522</div>
    <div class="profile-links">
      <div class="profile-link"><SocialIcon platform="x" />@T4ko0522</div>
      <div class="profile-link"><SocialIcon platform="github" />@T4ko0522</div>
      <div class="profile-link profile-link--url">https://t4ko.pet</div>
    </div>
  </div>
  <div class="profile-content">
    <h1>権代 颯士</h1>
    <dl class="profile-details">
      <div><dt>今回の担当</dt><dd>Web / Infra / Backend</dd></div>
      <div><dt>好きな技術</dt><dd>Nix / TypeScript | Hono / Cloudflare</dd></div>
      <div><dt>趣味</dt><dd>モータースポーツ観戦（F1, SF） / VRC / FPSゲーム</dd></div>
      <div><dt>関心分野</dt><dd>Nix, Architecture, Linux</dd></div>
    </dl>
  </div>
</div>
  </div>
</div>

---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-02" class="chapter-wave" />
<div class="chapter-number">02</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 02</div>
  <h1>Unframeの概要</h1>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-overview">
<GradientWave id="final-overview" class="final-wave" />
<div class="final-label">02 — Unframeの概要</div>
<h1>身体を使う<br><span class="final-accent">MRプレゼンテーション</span></h1>
<div class="final-overview-points">
  <section><h2>身体に連動した操作</h2><p>移動・ジェスチャーによる<br>進行の制御</p></section>
  <section><h2>空間的な表現</h2><p>従来通りのモニターの平面に限定せず、<br>文字・画像・3Dモデルを空間的に配置</p></section>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-shared">
<div class="final-label">02 — Unframeの概要</div>
<h1>MR空間の共有</h1>
<div class="final-role-row">
  <div class="final-role-block"><h2>プレゼンテイター</h2><p>MRヘッドセットで操作・表示</p></div>
  <div class="final-role-orbit">同じ<br>MR空間</div>
  <div class="final-role-block"><h2>オーディエンス</h2><p>MRヘッドセットや<br>スマートフォンで視聴</p></div>
</div>
<p class="final-no-slides"><span class="final-accent">「スライド」というまとまりのない構成</span><small>空間内のコンテンツと演出を、連続した進行として定義</small></p>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-03" class="chapter-wave" />
<div class="chapter-number">03</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 03</div>
  <h1>目標</h1>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-goal">
<GradientWave id="final-goal-current" class="final-wave" />
<h1>Unframeの目標</h1>
<p class="final-goal-main">「MRならではの表現」と<br>「人が使いたいと思える理由」を両立する<br><span class="final-accent">手法の探求・提案</span></p>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-goal">
<GradientWave id="final-goal-origin" class="final-wave" />
<h1>当初の目標と課題</h1>
<div class="final-goal-origin">
  <section><h2>当初の目標</h2><p>一つのプレゼンテーションアプリとしての完成</p></section>
  <section><h2>開発を通じて明らかになった課題</h2><p>従来の手法で完結する場面の多さ<br>MRの特長を活かす表現設計の難しさ<br/>ユーザーがプレゼンを作りやすい体験の提供</p></section>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-goal">
<GradientWave id="final-goal-shift" class="final-wave" />
<h1>方針転換</h1>
<p class="final-goal-main">アプリとしての完成から<br><span class="final-accent">「MRでプレゼンテーションを行う意味」</span><br>そのものの探求へ</p>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-quest-rail">
  <div class="final-quest-rail-title">Meta Quest</div>
  <img src="/qr/quest-install.png" alt="Meta Quest用Unframeのインストール案内QRコード" />
  <div class="final-quest-rail-caption">インストール用</div>
</div>
<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-04" class="chapter-wave" flip />
<div class="chapter-number">04</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 04</div>
  <h1>デモプレゼン</h1>
</div>
  </div>
</div>


---
class: final-deck final-demo-start
---

<style src="./styles/final.css"></style>

<div class="final-label">04 — デモプレゼン</div>
<div class="final-webxr-grid">
  <div class="final-webxr-code">
    <img src="/qr/webxr-viewer.png" alt="WebXRデモ視聴ページのQRコード" />
    <div>WebXR · デモ視聴</div>
  </div>
  <div>
    <h1>デモプレゼンテーション</h1>
    <p class="final-webxr-note">スマートフォンでQRコードを読み取り、<br>視聴ページに接続</p>
  </div>
</div>


---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>05 技術構成 <span class="final-accent">全体図</span></h1>

```mermaid
flowchart LR
  Edit["編集・公開<br/>Local Editor / CLI / Console"] -->|HTTPS| CP["Control Plane<br/>管理・永続化"]
  CP --> D1[("D1<br/>資料・Session")]
  CP --> R2[("R2<br/>配信用素材")]
  Quest["MR<br/>Unity / Meta Quest"] <-->|gRPC| RT["Realtime<br/>進行・状態同期"]
  Web["Audience Web<br/>React / Three.js"] <-->|WebSocket| RT
  RT -->|進行状態の保存| CP
```

<div class="final-tech-facts">
  <p><strong>HTTPS</strong><br>認証・参加・配信情報の取得</p>
  <p><strong>gRPC / WebSocket</strong><br>操作入力と共有状態の同期</p>
  <p><strong>R2</strong><br>端末への素材配信</p>
</div>

<!--
根拠: app/server/control-plane/src、app/server/realtime/ARCHITECTURE.md、app/web各package.json、app/unity/README.md。
QuestおよびAudienceはControl Planeから参加・配信情報を取得し、素材をHTTPSで取得。図では認証と素材取得の接続線を省略。
-->

---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">MR</span></h1>

```mermaid
flowchart LR
  Body["頭・手・身体<br/>トラッキング"] --> Input["Gesture / Zone<br/>入力認識"]
  Input -->|gRPC| RT["Realtime<br/>共有状態の確定"]
  RT --> View["Unity<br/>空間描画"]
  Tag["AprilTag<br/>会場座標の校正"] --> View
```

<div class="final-tech-facts">
  <p><strong>Meta Quest / Unity 6 / C#</strong><br>OpenXR・Meta XR SDK</p>
  <p><strong>入力と描画の分離</strong><br>端末で認識し、サーバーで進行を確定</p>
</div>

<!--
根拠: app/unity/Packages/manifest.json、app/unity/README.md、app/unity/Assets/Scripts/PresentationRuntime/Quest/PresenterRecognition.cs。
AprilTag検出には任意導入のOpenCV for Unityを使用。共有状態からPNG・テキスト・GLB・動画を描画。Quest実機での総合動作・性能の検証は継続中。
-->

---
class: final-deck final-tech final-tech-web
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">Web</span></h1>

```mermaid
flowchart LR
  Console["Console<br/>資料・Session管理"] -->|HTTPS| CP["Control Plane"]
  Editor["Local Editor<br/>Source編集・Unity Preview"] --> CLI["CLI Host<br/>保存・ビルド・公開"]
  Audience["Audience<br/>スマートフォンでの視聴"] --> Render["Three.js<br/>8th Wall / AprilTag"]
```

<div class="final-tech-facts">
  <p><strong>React 19</strong><br>用途別に独立した3つのWebアプリ</p>
  <p><strong>Audience</strong><br>マーカーで空間校正、SLAMで位置を保持</p>
</div>

<!--
根拠: app/web/console/package.json、app/web/local-editor/package.json、app/web/audience/package.json、app/web/audience/README.md。
AudienceはWebSocketでRealtimeに接続し、Runtime状態に従ってThree.jsで描画。ConsoleはTanStack Query / Router、AudienceはZustandを使用。
-->

---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">バックエンド</span></h1>

```mermaid
flowchart LR
  HTTP["HTTPS<br/>管理・参加・配信情報"] --> CP["Control Plane<br/>TypeScript / Hono<br/>Cloudflare Workers"]
  CP --> D1[("D1<br/>永続データ")]
  CP --> R2[("R2<br/>配信用素材")]
  Stream["gRPC / WebSocket<br/>操作入力・状態配信"] <--> RT["Realtime<br/>Go / gRPC"]
  RT -->|Checkpoint・完了通知| CP
```

<div class="final-tech-facts">
  <p><strong>Control Plane</strong><br>認証・権限・資料・Sessionの管理</p>
  <p><strong>Realtime</strong><br>進行の確定・Snapshot・再接続時の復元</p>
</div>

<!--
根拠: app/server/control-plane/package.json、app/server/realtime/go.mod、app/server/realtime/ARCHITECTURE.md。
Control PlaneとRealtimeは独立プロセス。高頻度の共有状態処理はRealtime内で完結し、Control Planeへの保存と分離。Fly.io配備・Machine lifecycleは未実装。
-->

---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">フレームワーク</span></h1>

```mermaid
flowchart LR
  Source["TSX Source<br/>型付きDSL"] --> Compiler["Compiler<br/>静的解析・意味検証"]
  Core["Core<br/>意味モデル・実行ロジック"] -.-> Compiler
  Compiler --> Dist["Dist<br/>定義・描画素材"]
  Dist --> Publish["CLI<br/>アップロード・公開"]
  Publish --> Client["Unity / Web<br/>描画・再生"]
```

<div class="final-tech-facts">
  <p><strong>Unframe独自の記述・コンパイル基盤</strong><br>空間配置・入力条件・演出をTSXで定義</p>
  <p><strong>実行環境との分離</strong><br>共通の成果物を各クライアントで利用</p>
</div>

<!--
根拠: packages/unframe-core/ARCHITECTURE.md、packages/unframe-compiler/ARCHITECTURE.md、packages/unframe-compiler/src/index.ts、packages/unframe-cli/package.json、examples/presentation/presentation.unframe.tsx。
CompilerはDefinition / RenderBundle / AssetSet / BuildManifestを生成。Coreは実行環境非依存の型・意味検証・Cue / Timeline純粋実行を提供。TSXは静的にコンパイルし、Reactの画面をQuestでそのまま実行する構成ではない。
-->

---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-06" class="chapter-wave" />
<div class="chapter-number">06</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 06</div>
  <h1>プレゼンテイターの<br>視点</h1>
</div>

---
class: final-deck final-video
---

<style src="./styles/final.css"></style>

<h1>プレゼンテイターの視点</h1>
<div class="final-video-slot" aria-label="プレゼンテイター視点動画の挿入場所">
  <strong>視点動画</strong><span>16:9</span>
</div>


---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-07" class="chapter-wave" flip />
<div class="chapter-number">07</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 07</div>
  <h1>振り返り</h1>
</div>

---
class: final-deck final-learning
---

<style src="./styles/final.css"></style>

<div class="final-label">07 — 振り返り</div>
<h1><span class="final-accent">プロダクトとマネジメントの学び</span></h1>
<div class="final-learning-grid">
  <section><h2>プロダクト</h2><p>利用者と利用場面の明確化<br>体験全体の設計</p></section>
  <section><h2>マネジメント</h2><p>優先順位と開発範囲の決定<br>進行管理と提供方法の設計</p></section>
</div>


---
class: final-deck final-statement final-user
---

<style src="./styles/final.css"></style>

<GradientWave id="final-user-centered" class="final-wave" />
<div class="final-label">07 — 振り返り</div>
<h1><span class="final-accent">ユーザー中心設計</span></h1>
<p class="final-user-question">操作負荷の低減と、<br>発表内容に集中できる体験の設計</p>


---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-08" class="chapter-wave" />
<div class="chapter-number">08</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 08</div>
  <h1>今後の展望</h1>
</div>

---
class: final-deck final-statement final-future
---

<style src="./styles/final.css"></style>

<GradientWave id="final-future" class="final-wave" flip />
<div class="final-label">08 — 今後の展望</div>
<h1><span class="final-accent">空間編集エディターの設計</span></h1>
<p class="final-future-note">空間編集の操作性と学習負荷の改善<br>未踏などの支援プログラムへの挑戦と継続開発</p>


---
class: final-deck final-closing
---

<style src="./styles/final.css"></style>

<GradientWave id="final-thanks" class="final-wave" />
<div class="final-brand"><img src="/brand/icon.png" alt="" />Unframe</div>
<h1>ご清聴ありがとうございました</h1>
