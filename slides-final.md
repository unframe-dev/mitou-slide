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

<div class="final-brand"><img src="/brand/icon.svg" alt="" />Unframe</div>
<div class="final-cover-copy">
  <h1>Unframe</h1>
  <p class="final-cover-subtitle">身体を使う<br>MRプレゼンテーション</p>
</div>
<img class="final-hero" src="/brand/hero.png" alt="空間にコンテンツを広げて発表するUnframeのイメージ" />

<style src="./styles/final.css"></style>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

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
      <div><dt>好きな技術</dt><dd>Vulkan / Metal ・ HLSL / GLSL ・ C# / C++</dd></div>
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
      <div class="profile-link profile-link--url"><img class="profile-website-icon" src="/profile/website-icon.png" alt="" />https://t4ko.pet</div>
    </div>
  </div>
  <div class="profile-content">
    <h1>権代 颯士</h1>
    <dl class="profile-details">
      <div><dt>今回の担当</dt><dd>Infra / Frontend / Backend</dd></div>
      <div><dt>好きな技術</dt><dd>Nix / TypeScript | Hono / Cloudflare</dd></div>
      <div><dt>趣味</dt><dd>モータースポーツ観戦（F1, SF） / VRC / FPSゲーム</dd></div>
      <div><dt>関心分野</dt><dd>Nix, Architecture, Linux, Design</dd></div>
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

<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-02" class="chapter-wave" />
<div class="chapter-number">02</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 02</div>
  <h1>提案</h1>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-statement final-spatial-motive">
<svg class="final-spatial-art" viewBox="0 0 480 520" fill="none" aria-hidden="true">
  <defs>
    <linearGradient id="motive-panel" x1="70" y1="100" x2="420" y2="430" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7187f5" /><stop offset=".55" stop-color="#9a80d0" /><stop offset="1" stop-color="#df7b80" />
    </linearGradient>
  </defs>
  <ellipse cx="282" cy="416" rx="185" ry="51" stroke="url(#motive-panel)" opacity=".25" />
  <ellipse cx="282" cy="416" rx="132" ry="35" stroke="url(#motive-panel)" opacity=".18" />
  <path d="M92 146 250 87 250 298 92 357Z" fill="url(#motive-panel)" fill-opacity=".06" stroke="url(#motive-panel)" stroke-opacity=".4" />
  <path d="M191 131 377 166 377 377 191 342Z" fill="url(#motive-panel)" fill-opacity=".09" stroke="url(#motive-panel)" stroke-width="2" />
  <path d="M294 82 449 143 449 293 294 232Z" fill="url(#motive-panel)" fill-opacity=".05" stroke="url(#motive-panel)" stroke-opacity=".5" />
  <path d="M218 179 310 197M218 198 345 222M218 217 281 229" stroke="url(#motive-panel)" stroke-width="4" stroke-linecap="round" opacity=".45" />
  <path d="m263 264 39-16 38 32-39 17Z M263 264v43l38 32 39-16v-43 M301 297v42" stroke="url(#motive-panel)" stroke-width="2" />
  <path d="M191 342v74M377 377v39" stroke="url(#motive-panel)" stroke-dasharray="4 7" opacity=".3" />
  <circle cx="191" cy="416" r="4" fill="#9a80d0" /><circle cx="377" cy="416" r="4" fill="#df7b80" />
</svg>
<div class="final-label">02 — 動機</div>
<h1><span class="final-accent">MR空間</span>を活かした<br/>空間的なアプローチ</h1>
<p class="final-statement-note">文字や画像、立体物を目の前の空間に配置し、<br>手の動きや立ち位置と組み合わせて発表したい。</p>
  </div>
</div>


---
layout: none
class: final-prelude final-inspiration-slide
---

<style src="./styles/final.css"></style>

<img class="final-inspiration-image" src="/proposal/minority-reprot.png" alt="空間に広がる複数の映像を、手の動きで操作するSF的な表現の参考イメージ" />
<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-inspiration">
<div class="final-label">02 — 作りたかった表現</div>
<div class="final-inspiration-layout">
  <div class="final-inspiration-copy">
    <h1><span class="final-accent">SF映画のような演出を、</span><br>プレゼンテーションで<br>やりたい</h1>
    <p class="final-inspiration-caption">※参考画像<br>ref: Minory Report</p>
  </div>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-statement final-proposal-claim">
<div class="final-label">02 — 提案</div>
<h1>これらの要素を<br><span class="final-accent">普及させたかった</span></h1>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-prelude-stage">
  <div class="slidev-layout default chapter-slide final-section">
<GradientWave id="final-chapter-03" class="chapter-wave" />
<div class="chapter-number">03</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 03</div>
  <h1>Unframeの機能</h1>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-capabilities">
<div class="final-label">03 — Unframeの機能</div>
<h1>MRプレゼンテーションを<br>作成・発表・視聴する</h1>
<ul class="final-capability-list">
  <li>
    <strong>作成</strong><p>空間に置くコンテンツと演出を記述し、<br>プレビューで確認する。</p>
  </li>
  <li>
    <strong>発表</strong><p>MRヘッドセットを使い、<br>手の動きや立ち位置で演出を進める。</p>
  </li>
  <li>
    <strong>視聴</strong><p>MRヘッドセットやスマートフォンで、<br>同じ空間の表現を見る。</p>
  </li>
</ul>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>章

<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-effects">
<div class="final-label">03 — 演出の要素</div>
<h1>身体と空間を演出に使用する</h1>
<div class="final-effect-grid">
  <section><h2><span class="final-accent">Gesture</span> <span>ジェスチャー</span></h2><p>手の動きをきっかけに、演出を始める。</p></section>
  <section><h2><span class="final-accent">Animation</span> <span>アニメーション</span></h2><p>文字や画像などに動きをつける。</p></section>
  <section><h2><span class="final-accent">Zone</span> <span>空間の領域</span></h2><p>決めた領域への出入りを、演出のきっかけにする。</p></section>
  <section><h2><span class="final-accent">3D Model</span> <span>3Dモデル表示</span></h2><p>立体物を、空間の中に配置して見せる。</p></section>
</div>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

<div class="final-prelude-stage">
  <div class="slidev-layout default final-deck final-authoring-proposal">
<div class="final-label">03 — 制作を身近にするために</div>
<h1><span class="final-accent">AIで、</span>表現を作るハードルを下げる</h1>
<div class="final-authoring-comparison">
  <section class="final-authoring-tools">
    <svg class="final-authoring-tool-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6 10h28M6 20h28M6 30h28" stroke="currentColor" stroke-width="1.5" /><rect x="12" y="6" width="5" height="8" rx="2" fill="#f7f7f5" stroke="currentColor" stroke-width="1.5" /><rect x="25" y="16" width="5" height="8" rx="2" fill="#f7f7f5" stroke="currentColor" stroke-width="1.5" /><rect x="9" y="26" width="5" height="8" rx="2" fill="#f7f7f5" stroke="currentColor" stroke-width="1.5" /></svg>
    <h2>凝った表現を作るには</h2><p>素材や演出の制作には、<br>専門ツールの操作と手間がかかる。</p>
  </section>
  <section class="final-authoring-ai">
    <div class="final-authoring-logos"><img src="/brand/codex-color.png" alt="Codex" /><img src="/brand/claude.jpg" alt="Claude" /></div>
    <h2>AIに意図を伝えて編集する</h2>
    <blockquote>「上にスワイプしたら、<br>文字が浮かび上がるように」</blockquote>
    <p>生成した内容をプレビューし、調整する。</p>
  </section>
</div>
<p class="final-authoring-purpose">作りやすくすることによる、使用するハードルの低下。</p>
  </div>
</div>


---
layout: none
class: final-prelude
---

<style src="./styles/final.css"></style>

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
class: final-deck final-statement final-demo-start
---

<style src="./styles/final.css"></style>

<div class="final-label">04 — デモプレゼン</div>
<h1>それでは、<br>デモをご覧ください。</h1>


---
class: final-deck final-video
---

<style src="./styles/final.css"></style>

<h1>デモ</h1>
<SlidevVideo class="final-presenter-video" controls autoreset="slide" playsinline preload="metadata" poster="/videos/demo.jpg" aria-label="デモ動画">
  <source src="/videos/demo.mp4" type="video/mp4" />
</SlidevVideo>


---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-05" class="chapter-wave" />
<div class="chapter-number">05</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 05</div>
  <h1>プレゼンテイターの<br>視点</h1>
</div>

---
class: final-deck final-video
---

<style src="./styles/final.css"></style>

<h1>プレゼンテイターの視点 1</h1>
<SlidevVideo class="final-presenter-video" controls muted autoreset="slide" playsinline preload="metadata" poster="/videos/presenter-demo1.jpg" aria-label="プレゼンテイターの視点 1">
  <source src="/videos/presenter-demo1.mp4" type="video/mp4" />
</SlidevVideo>

---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-06" class="chapter-wave" />
<div class="chapter-number">06</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 06</div>
  <h1>全体の構成</h1>
</div>

---
class: final-deck final-system-overview
---

<style src="./styles/final.css"></style>

<div class="final-label">06 — 技術構成 / 仕組みの全体像</div>
<h1><span class="final-accent">発表の準備</span></h1>
<ol class="final-system-flow">
  <li>
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="5" y="8" width="38" height="28" rx="3" /><path d="M17 43h14M24 36v7M12 16h12M12 22h8M29 20l7 5-7 5Z" /></svg>
    <h2>資料を作る</h2>
    <p>コンテンツと演出を記述し、<br>プレビューで確認</p>
  </li>
  <li>
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 30V6m-9 9 9-9 9 9M8 28v12h32V28" /><path d="M15 34h18" /></svg>
    <h2>公開する</h2>
    <p>資料をアップロードし、<br>発表・視聴に使える状態に</p>
  </li>
</ol>

---
class: final-deck final-system-overview
---

<style src="./styles/final.css"></style>

<div class="final-label">06 — 技術構成 / 仕組みの全体像</div>
<h1><span class="final-accent">会場での発表・視聴</span></h1>
<ol class="final-system-flow">
  <li>
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="10" r="5" /><path d="M24 16v17M14 44l10-11 10 11M9 26l15-7 13 5 7-9" /><path d="m38 8 5-3M44 10h3" /></svg>
    <h2>発表者が操作する</h2>
    <p>手の動きや立ち位置を<br>きっかけに、演出を進める</p>
  </li>
  <li>
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="7" y="5" width="34" height="24" rx="3" /><path d="m20 11 10 6-10 6Z" /><circle cx="13" cy="37" r="4" /><circle cx="35" cy="37" r="4" /><path d="M5 47c0-8 16-8 16 0M27 47c0-8 16-8 16 0" /></svg>
    <h2>観客に反映する</h2>
    <p>発表の進行に合わせて、<br>それぞれの端末で描画</p>
  </li>
</ol>

---
class: final-deck final-tech
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">全体図(簡略版)</span></h1>

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
class: final-deck final-tech final-tech-framework
---

<style src="./styles/final.css"></style>

<h1>技術構成 <span class="final-accent">Framework</span></h1>

<img class="final-tech-diagram" src="/diagrams/tech-framework.png" alt="Authoring APIで記述したTSX DSLをBuild・CompilerがAST解析・意味検証し、Definition・RenderBundle・AssetSet・BuildManifestを生成。CompilerはPresentationの意味モデル・検証を利用。Dev buildをLocal Editor内のUnity WebGLでプレビューし、確認してTSXの修正に戻る。CLIで成果物を公開し、Unity・Webが共通成果物を描画・再生する。" />

<!--
根拠: packages/unframe/authoring/package.json、compiler/src/api/check-declaration-project.ts、compiler/src/api/compile-plan.ts、presentation/src/index.ts、build/src/build-execution/api/compile-declaration-project.ts、cli/src/application/run-presentation-cli.ts、example/src/presentation.unframe.tsx。
-->

---
class: chapter-slide final-section
---

<style src="./styles/final.css"></style>

<GradientWave id="final-chapter-07" class="chapter-wave" flip />
<div class="chapter-number">07</div>
<div class="final-section-copy">
  <div class="section-label">SECTION 07</div>
  <h1>まとめ</h1>
</div>

---
class: final-deck final-summary final-summary-challenge
---

<style src="./styles/final.css"></style>

<h1>まとめ</h1>
<div class="final-summary-content">
  <p class="final-summary-context">今回のプロジェクトで一番の挑戦</p>
  <p class="final-summary-question">MRで<span class="final-accent">SF的な、目を引くプレゼン</span>を<br>行う方法を探ることだった。</p>
</div>

---
class: final-deck final-summary final-summary-answer
---

<style src="./styles/final.css"></style>

<h1>まとめ</h1>
<ol class="final-summary-points">
  <li>
    <span class="final-summary-number">01</span>
    <p>それぞれのPoCに意味があり、<br>最終的な形を作る上で、<br><span class="final-accent">どれも価値のあるものにできた。</span></p>
  </li>
  <li>
    <span class="final-summary-number">02</span>
    <p>MRで人の目を引くプレゼンとは<br>どのようなものか、<br><span class="final-accent">自分たちなりの答えが出せた。</span></p>
  </li>
</ol>


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
class: final-deck final-learning final-future
---

<style src="./styles/final.css"></style>

<GradientWave id="final-future" class="final-wave" flip />
<div class="final-label">08 — 今後の展望</div>
<h1><span class="final-accent">より簡単に作れるように</span></h1>
<div class="final-learning-grid">
  <section><h2>直感的に作れる</h2><p>コードと画面、どちらからでも編集できるように。<br>複数人での同時作成を実現する</p></section>
  <section><h2>作成しやすい環境作成</h2><p>DSL設計の筋が悪いため、プレビューが遅い<br>作成までの導線が複雑になっているので整える ...etc</p></section>
</div>


---
class: final-deck final-closing
---

<style src="./styles/final.css"></style>

<GradientWave id="final-thanks" class="final-wave" />
<div class="final-brand"><img src="/brand/icon.svg" alt="" />Unframe</div>
<h1>ご清聴ありがとうございました!</h1>

<div class="final-closing-links">
  <a href="https://github.com/unframe-dev/unframe" target="_blank" rel="noopener noreferrer"><SocialIcon platform="github" /><span>https://github.com/unframe-dev/unframe</span></a>
  <a href="https://un-fra.me" target="_blank" rel="noopener noreferrer"><img class="profile-website-icon" src="/profile/website-icon.png" alt="" /><span>https://un-fra.me</span></a>
</div>
