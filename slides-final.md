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

<h1>05 技術構成 <span class="final-accent">全体図(簡略版)</span></h1>

<img class="final-tech-diagram" src="/diagrams/tech-overview.png" alt="編集・公開からCloudflare WorkersのControl Plane、D1・R2へ接続。MRとAudience WebはTailscale Funnel経由で自宅サーバーのRealtimeに接続し、Realtimeが進行状態を保存する全体構成。" />

<!--
根拠: app/server/control-plane/src、app/server/realtime/ARCHITECTURE.md、app/web各package.json、app/unity/README.md。
QuestおよびAudienceはControl Planeから参加・配信情報を取得し、素材をHTTPSで取得。図では認証と素材取得の接続線を省略。
-->

---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">MR</span></h1>

<img class="final-tech-diagram" src="/diagrams/tech-mr.png" alt="Quest内のトラッキングとGesture・Zone認識からRealtimeへ操作入力を送り、確定した共有状態をUnityで描画。AprilTagで共通座標を校正。" />

<div class="final-tech-facts">
  <p><strong>Meta Quest / Unity 6 / C#</strong><br>OpenXR・Meta XR SDK</p>
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

<img class="final-tech-diagram" src="/diagrams/tech-web.png" alt="ConsoleはControl Planeで資料とSessionを管理。Audienceは参加コードで参加し、配信情報・接続URL・認証情報を取得。素材読み込みとRealtimeから受信した共有状態をThree.jsに反映し、AprilTagによる会場との位置合わせと8th Wall SLAMによる端末位置追跡を使って空間描画する。" />

<!--
根拠: app/web/audience/src/connection/join-controller.ts、connection/realtime-client.ts、experience/viewing-session.ts、experience/presentation-session.ts、tracking/adapter.ts、experience/anchor-session.ts。
-->

---
class: final-deck final-tech final-tech-server
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">Server</span></h1>

<img class="final-tech-diagram" src="/diagrams/tech-backend.png" alt="Cloudflare Workers上のControl PlaneはTypeScript・Honoで実装。Better Authでメール・Google認証と二要素認証を扱い、Resendで確認・再設定メールを送信。D1に管理情報と進行状態、R2に公開資料と素材を保存。参加権限を確認してRealtimeの接続URL・認証情報と素材取得用URLを発行。自宅サーバー上のGo製Realtimeは演出評価・状態配信・再接続時の復元を行い、進行状態と終了通知をControl Planeへ送信。" />

<!--
根拠: app/server/control-plane/src/app.ts、auth/identity.ts、auth/options.ts、auth/mail.ts、modules/sessions/routes.ts、modules/publications/service.ts、app/server/realtime/cmd/server/main.go。
Realtimeの自宅サーバー配置は現行の運用構成。
-->

---
class: final-deck final-tech final-tech-framework
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">記述・ビルド・配信</span></h1>

<img class="final-tech-diagram" src="/diagrams/tech-framework.png" alt="Authoring APIで記述したTSX DSLをBuild・CompilerがAST解析・意味検証し、Definition・RenderBundle・AssetSet・BuildManifestを生成。CompilerはPresentationの意味モデル・検証を利用。Dev buildをLocal Editor内のUnity WebGLでプレビューし、確認してTSXの修正に戻る。CLIで成果物を公開し、Unity・Webが共通成果物を描画・再生する。" />

<!--
根拠: packages/unframe/authoring/package.json、compiler/src/api/check-declaration-project.ts、compiler/src/api/compile-plan.ts、presentation/src/index.ts、build/src/build-execution/api/compile-declaration-project.ts、cli/src/application/run-presentation-cli.ts、example/src/presentation.unframe.tsx。
-->

---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-06" class="chapter-wave" />
<div class="chapter-number">06</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 06</div>
  <h1>プレゼンテーションの<br>作成方法</h1>
</div>

---
class: final-deck final-creation
---

<style src="./styles/final.css"></style>

<h1>AIと一緒に編集</h1>

<div class="final-ai-edit">
  <div class="final-ai-request">
    <p class="final-ai-context">AIを通して編集</p>
    <div class="final-ai-icons">
      <img src="/brand/codex-color.png" alt="Codex" />
      <img src="/brand/claude.jpg" alt="Claude" />
    </div>
    <blockquote>上にスワイプしたら、<br>文字が浮かび上がる<br>演出を再生して。</blockquote>
  </div>
  <div class="final-ai-arrow" aria-hidden="true">→</div>
  <div class="final-ai-code">
    <div class="final-ai-filename">reaction.flow.ts</div>
    <pre v-pre aria-label="上スワイプをきっかけに浮かび上がる演出を再生するフローの抜粋"><span><span class="final-code-property">trigger</span>: {</span>
<span>  <span class="final-code-property">kind</span>: <span class="final-code-string">"gesture"</span>, <span class="final-code-property">gesture</span>: <span class="final-code-string">"swipeUp"</span>,</span>
<span>},</span>
<span><span class="final-code-property">actions</span>: [{</span>
<span>  <span class="final-code-property">kind</span>: <span class="final-code-string">"timeline.play"</span>,</span>
<span>  <span class="final-code-property">timelineId</span>: <span class="final-code-string">"reaction-float-enter"</span>,</span>
<span>}],</span></pre>
  </div>
</div>
<p class="final-ai-next">編集した結果を、Local Editorで確認する</p>

---
class: final-deck final-creation
---

<style src="./styles/final.css"></style>

<h1>Local Editorでプレビュー</h1>
<p class="final-creation-caption">表示・動き・演出をプレビューで確認</p>
<img class="final-creation-screenshot" src="/screenshots/local-editor-preview.png" alt="Local Editorの公開前確認。中央にUnity WebGLのプレビュー、左に進行、下にCue、右に詳細を表示。" />

---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-07" class="chapter-wave" />
<div class="chapter-number">07</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 07</div>
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

<GradientWave id="final-chapter-08" class="chapter-wave" flip />
<div class="chapter-number">08</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 08</div>
  <h1>振り返り</h1>
</div>

---
class: final-deck final-learning
---

<style src="./styles/final.css"></style>

<div class="final-label">08 — 振り返り</div>
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
<div class="final-label">08 — 振り返り</div>
<h1><span class="final-accent">ユーザー中心設計</span></h1>
<p class="final-user-question">操作負荷の低減と、<br>発表内容に集中できる体験の設計</p>


---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-09" class="chapter-wave" />
<div class="chapter-number">09</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 09</div>
  <h1>今後の展望</h1>
</div>

---
class: final-deck final-statement final-future
---

<style src="./styles/final.css"></style>

<GradientWave id="final-future" class="final-wave" flip />
<div class="final-label">09 — 今後の展望</div>
<h1><span class="final-accent">空間編集エディターの設計</span></h1>
<p class="final-future-note">空間編集の操作性と学習負荷の改善<br>未踏などの支援プログラムへの挑戦と継続開発</p>


---
class: final-deck final-closing
---

<style src="./styles/final.css"></style>

<GradientWave id="final-thanks" class="final-wave" />
<div class="final-brand"><img src="/brand/icon.png" alt="" />Unframe</div>
<h1>ご清聴ありがとうございました</h1>
