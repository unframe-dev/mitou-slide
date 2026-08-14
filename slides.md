---
theme: geist
title: 未踏ジュニア 中間合宿用資料
info: プロジェクトが変わった理由と、新しい提案
author: Unframe
keywords: [Unframe, MR, プロジェクト, 中間合宿]
transition: slide-left | slide-right
colorSchema: light
highlighter: shiki
lineNumbers: false
themeConfig:
  default: light
class: cover-slide
---

<div class="brand-mark"><img src="/brand/icon.png" alt="" />Unframe</div>

# Present beyond<br><span class="text-gradient">the frame.</span>

<div class="cover-subtitle">空間を使って、伝え方を変える。<br>プロジェクトが変わった理由と、新しい提案。</div>

<img class="cover-visual" src="/brand/hero.png" alt="" />

<!--
この動画では、最終的な提案だけでなく、そこに至るまでの流れも伝える。
初めて見る人にもわかるように、最初の提案から説明する。
-->

---
class: chapter-slide
---

<GradientWave id="chapter-wave-01" class="chapter-wave" />

<div class="chapter-number">01</div>

<div class="section-label">01 — 自己紹介</div>

# まず、私たちについて

- メンバーと役割
- 前回から取り組んできたこと
- 今回のプロジェクト

<!-- 前回の自己紹介スライドをベースに内容を差し替える。 -->

---
class: profile-slide
---

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
      <div><dt>担当</dt><dd>MR部分</dd></div>
      <div><dt>技術</dt><dd>Vulkan / Metal ・ HLSL / GLSL ・ C# / C++</dd></div>
      <div><dt>趣味</dt><dd>ゲーム ・ TRPG ・ 写真</dd></div>
      <div><dt>ひとこと</dt><dd>グラフィックスやシェーダーを語れる方を探しています。</dd></div>
    </dl>
  </div>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf p.6 -->

---
class: profile-slide
---

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
      <div><dt>担当</dt><dd>Web / Infra / Backend</dd></div>
      <div><dt>好きな技術</dt><dd>Nix / TypeScript / Go | Hono / Cloudflare</dd></div>
      <div><dt>趣味</dt><dd>モータースポーツ観戦 / VRC / FPSゲーム</dd></div>
      <div><dt>ひとこと</dt><dd>ここ4ヶ月くらいでNix信者になりました。</dd></div>
    </dl>
  </div>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf p.7 -->

---
class: proposal-slide backstory-slide
---

<div class="section-label">02 — 事前の経緯</div>

<img class="proposal-visual proposal-visual--screen" src="/proposal/proposal-editor.png" alt="3Dモデルを扱う編集画面" />

<div class="proposal-copy">
  <h1>立体物を説明するたび、<br><span class="accent">プレゼンが止まっていた</span></h1>
  <p>構造や形を見せるには、スライドを離れてCADや動画を開き、操作してから戻る必要がありました。</p>
  <div class="backstory-flow" aria-label="従来の説明の流れ">
    <span>スライド</span><i>→</i><span>CAD・動画</span><i>→</i><span>スライドへ戻る</span>
  </div>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: proposal-slide boost-demo-slide
---

<div class="section-label">02 — 最初の提案</div>

<img class="proposal-visual proposal-visual--boost" src="/proposal/boost.gif" alt="3Dモデルを使ったMRプレゼンの試作デモ" />

<div class="proposal-copy proposal-copy--first">
  <h1>そこで考えたのが、<br><span class="accent">3Dモデルを使うMRプレゼン</span></h1>
  <p>立体物の説明を、プレゼンの流れから切り離さないための提案でした。</p>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: proposal-slide initial-solution-slide
---

<div class="section-label">02 — 最初のソリューション</div>

<img class="proposal-visual" src="/proposal/presentation-scene.png" alt="発表者がプレゼン内で3Dモデルを見せるイメージ" />

<div class="proposal-copy">
  <h1>プレゼンの中で、<br><span class="accent">3Dモデルを直接見せる</span></h1>
  <p>別のツールへ移らず、その場で立体物を見せ、説明を続けられる形を目指しました。</p>
  <div class="solution-points"><span>説明を止めない</span><span>立体のまま見せる</span></div>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: issue-slide review-issue-slide
---

<div class="section-label">03 — ブースト合宿後の課題</div>

<div class="issue-intro">
  <h1>面白い。けれど、<br><span class="accent">「なぜMR？」</span>が残った</h1>
</div>

<ul class="issue-list">
  <li>3D表示だけなら既存ツールでもできる</li>
  <li>誰が、どこで、何人で使うのかが曖昧</li>
  <li>MRの空間を使う必然性がまだ弱い</li>
</ul>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/docs/Unframe_Scrapbox_reactions_summary.md -->

---
class: statement-slide exploration-slide centered-statement-slide
---

<div class="section-label">04 — アイデア探索</div>

# <span class="accent">「なぜMR？」</span>に答えるため、<br>アイデア探索を始めた

<!--
Sources:
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/notion/雑多タスクリスト/プロダクト案だし(615~).md
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/Unframe_Scrapbox_reactions_summary.md
-->

---
class: focus-slide activity-map-slide
---

<div class="section-label">04 — MRアクティビティーの整理</div>

<h1>場所 × 参加形態 × 時間で整理</h1>

<div class="focus-grid">
  <div class="focus-grid__head" aria-hidden="true">
    <span>条件</span>
    <span>MRで行う活動</span>
    <span>検証</span>
  </div>

  <div class="focus-row focus-row--initial">
    <div class="focus-conditions"><span>場所依存</span><span>集まる</span><span>同期</span></div>
    <div class="focus-concept"><strong>初期提案</strong><small>3Dモデルを使うMRプレゼン</small></div>
    <div class="focus-status">出発点</div>
  </div>

  <div class="focus-row focus-row--future">
    <div class="focus-conditions"><span>場所依存</span><span>集まる</span><span>非同期</span></div>
    <div class="focus-concept"><strong>展示MR</strong><small>作った空間を歩いて見る</small></div>
    <div class="focus-status">旧PoC</div>
  </div>

  <div class="focus-row">
    <div class="focus-conditions"><span>場所非依存</span><span>散らばる</span><span>非同期</span></div>
    <div class="focus-concept"><strong>円状の資料表示</strong><small>視点や腕で順に資料を見る</small></div>
    <div class="focus-status">旧PoC</div>
  </div>

</div>

<p class="focus-summary">比較だけで終わらせず、三つの方向をすべて試作しました。</p>

<!--
Sources:
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/notion/雑多タスクリスト/プロダクト案だし(615~).md
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/decisions/0005-spatial-presentation-domain-model.md
- Archived circular-view PoC: unframe commit 7545c1e
-->

---
class: statement-slide poc-conclusion-slide
---

<div class="section-label">04 — 検証結果</div>

# PoCと合宿レビューから、<br><span class="accent">MRの弱みが見えてきた</span>

<div class="finding-stack">
  <div class="finding-item">
    <span class="finding-label">情報を減らすと</span>
    <span class="finding-text">MRである必然性が薄くなる</span>
  </div>
  <div class="finding-item">
    <span class="finding-label">情報を増やすと</span>
    <span class="finding-text">視界を塞ぎ、観客の視線が散らばる</span>
  </div>
</div>

<p class="proposal-transition">この課題を出発点に、MRでしかできない体験を改めて探します。</p>
<p class="finding-evidence">合宿で得た反応と各PoCの観察をもとにした、定性的な整理</p>

---
class: chapter-slide final-idea-slide
---

<GradientWave id="chapter-wave-05" class="chapter-wave" flip />

<div class="chapter-number">05</div>

<div class="section-label">05 — 最終アイデア</div>

# 身体の動きで、<br><span class="accent">観客の視線を導くMRプレゼン</span>

<div class="final-idea-summary">
  <div><strong>動きを設計する</strong><span>発言に立ち位置・方向・タイミングを組み込む</span></div>
  <div><strong>発表者を支える</strong><span>次の動きと進行を本人だけに案内する</span></div>
  <div><strong>観客を導く</strong><span>発表者の動きと情報表示を同期させる</span></div>
</div>

<!-- 新提案の詳細は06章で説明する。 -->

---
class: statement-slide idea-hero-slide
---

<div class="section-label">06-1 — 概要</div>

# プレゼンターの動きを、<br><span class="accent">ツールがアシストする</span>

立ち位置・方向・タイミングを案内し、 <br/> 動きと情報表示を同期させる

<img class="idea-hero-visual" src="/people/steve-jobs-presenting-user.png" alt="ステージ上でプレゼンテーションするスティーブ・ジョブズ" />

<!--
この一文を新提案の定義として扱う。
正式なプロジェクト名が決まったら見出しを差し替える。

[Sources]
- Photo: user-provided image
- Modification: cropped and faded with CSS
-->

<!-- 概要の後に、新提案の違いと実現方法を追加で説明する。 -->

---
class: statement-slide new-proposal-difference-slide
---

<div class="section-label">06-1 — 今までとの違い</div>

# 情報を減らさず、<br><span class="accent">身体の動きで視線を導く</span>

従来のプレゼンは情報を1ページずつ切り分けます。本提案は情報量を保ったまま、身体の動きで注目点を順に導きます。

<div class="difference-diagram" aria-label="従来のプレゼンと新提案の比較">
  <div class="difference-diagram__panel difference-diagram__panel--traditional">
    <div class="difference-diagram__eyebrow">従来のプレゼン</div>
    <div class="difference-diagram__visual difference-diagram__visual--pages" aria-hidden="true">
      <span class="difference-page-card difference-page-card--back">C</span>
      <span class="difference-page-card difference-page-card--middle">B</span>
      <span class="difference-page-card difference-page-card--front">A</span>
    </div>
    <strong>情報を1ページずつ提示</strong>
    <small>ページを切り替えて、注目点を分ける</small>
  </div>
  <div class="difference-diagram__connector" aria-hidden="true"><span>→</span></div>
  <div class="difference-diagram__panel difference-diagram__panel--proposal">
    <div class="difference-diagram__eyebrow">このプロジェクト</div>
    <div class="difference-diagram__visual difference-diagram__visual--space" aria-hidden="true">
      <span class="difference-space-card difference-space-card--a">A</span>
      <span class="difference-space-card difference-space-card--b">B</span>
      <span class="difference-space-card difference-space-card--c">C</span>
      <span class="difference-space-route"></span>
      <span class="difference-presenter">YOU</span>
    </div>
    <strong>同じ空間で情報を展開</strong>
    <small>動きと表示を同期し、視線を導く</small>
  </div>
</div>

---
class: statement-slide walking-visual-slide
---

<div class="section-label">06-1 — 発表の設計</div>

# 発言だけでなく、<br><span class="accent">動く位置とタイミングまで設計する</span>

新提案では、スピーカーノートに移動先とタイミングを組み込み、発表者の動きに合わせて情報を順番に表示します。

<img class="walking-visual" src="/walking-with-infomation-transparent.png" alt="歩いた軌跡に沿って情報が現れるイメージ" />

<!-- Source: user-provided walking-with-infomation.png; background removed mechanically -->

---
class: statement-slide proposal-reasons-slide new-proposal-motion-slide
---

<div class="section-label">06-1 — 動作認識の範囲</div>

# 動作認識は、<br><span class="accent">進行トリガーだけを見る</span>

- 詳細な腕の振り方やジェスチャーは認識しない
- ここからここまでの移動と、次へ進む入力だけを判定する

汎用的な動作認識を作り込むのではなく、プレゼンテーションツール側を作り込みます。次の表示へ進むトリガーが分かれば、プレゼンは成立します。

---
class: statement-slide demo-slide
---

<div class="section-label">06-1 — 観客への見せ方</div>

# 指定した動きに合わせて、<br><span class="accent">情報を展開する</span>

現状のPoCでは、ボタンを押しながらコントローラを直線移動したときだけ、表示を順番に切り替えます。

<img
  class="demo-visual"
  src="https://raw.githubusercontent.com/unframe-dev/mitou-slide/main/media/demos/demo.gif"
  alt="指定したコントローラ入力に合わせて情報を表示するデモ"
/>

<!-- Source: media/demos/demo.gif; served from the public repository via GitHub Raw -->

---
class: statement-slide demo-slide demo-slide--landscape
---

<div class="section-label">06-1 — 実現方法</div>

# 次の立ち位置と進行を、<br><span class="accent">発表者だけに表示する</span>
追随表示の見え方を足がかりに、身体表現を繰り返せる中心機能として試作します。

<img
  class="demo-visual"
  src="https://raw.githubusercontent.com/unframe-dev/mitou-slide/main/media/demos/demo_1.gif"
  alt="発表者向けUIが次の動きを補助するデモ"
/>

<!--
発表者向けUIに表示する最小情報はPoCを通じて決める。

[Sources]
- Demo source: `media/source/demo_1.mp4`; converted to `media/demos/demo_1.gif` with FFmpeg
-->

---
class: statement-slide proposal-reasons-slide
---

<div class="section-label">06-2 — 提案にまとまった理由</div>

# この提案を選んだ<span class="accent">二つの理由</span>

- MRプレゼン特有の注意誘導の課題に向き合える
- 自分たちが実際に使いたいと思える

解決すべき課題と、作りたい体験の両方が重なる方向を選びました。

---
class: statement-slide spatial-capacity-slide
---

<div class="section-label">06-3 — MR プレゼンの課題</div>

# MRは、情報を置ける場所を<br><span class="accent">360度へ広げられる</span>

- モニターの枠にとらわれず、空間全体を使える
- 実際の物体に重ねて情報を表示できる

<img class="spatial-capacity-visual" src="/presentation.png" alt="空間全体へ情報を配置したプレゼンテーションのイメージ" />

<!--
MRの利点を最初に示し、次のスライドでプレゼンにしたときの問題へつなぐ。

[Sources]
- Image: user-provided presentation.png
-->

---
class: statement-slide attention-confusion-slide
---

<div class="section-label">06-3 — MR プレゼンの課題</div>

# しかし観客は、<br><span class="accent">どこを見ればよいか迷う</span>

情報を広い範囲に置くほど、発表者が伝えたい順番と観客の視線がずれていきます。

<img class="attention-confusion-visual" src="/proposal/many-infomation-transparent.png" alt="多くの情報が空間に散らばり、観客の視線が分散するイメージ" />

<!--
[Sources]
- Image: user-provided many-infomation.png
- Modification: near-white pixels made transparent with FFmpeg; faded with CSS
-->

---
class: statement-slide front-fixed-slide
---

<div class="section-label">06-3 — MR プレゼンの課題</div>

# 正面に固定するなら、<br><span class="accent">普通のプレゼンでよい</span>

わかりやすさを優先して表示を前面へ集めると、MRの空間表現を活かせません。

---
class: statement-slide attention-guidance-slide
---

<div class="section-label">06-3 — 身体による解決</div>

# 発表者の身体を、<br><span class="accent">注意誘導の手がかり</span>にする

歩く、振り向く、腕を振る。 <br/> 身体の動きと情報表示を合わせ、観客の視線を導きます。

<img class="attention-guidance-visual" src="/proposal/mr-presentation-transparent.png" alt="発表者の身体の動きが観客の視線をMR情報へ導くイメージ" />

<!--
スティーブ・ジョブズのiPhone発表を、身体による注意誘導の着想として紹介する。

[Sources]
- Image: user-provided mr-presentation.png
- Modification: near-white pixels made transparent with FFmpeg; faded with CSS
-->

---
class: statement-slide centered-statement-slide
---

<div class="section-label">06-4 — ニーズ</div>

<div class="statement-rays" aria-hidden="true">
  <span style="--ray-angle: 0deg; --ray-x: 50%; --ray-y: 0%"></span>
  <span style="--ray-angle: 30deg; --ray-x: 70%; --ray-y: 7%"></span>
  <span style="--ray-angle: 60deg; --ray-x: 90%; --ray-y: 25%"></span>
  <span style="--ray-angle: 90deg; --ray-x: 100%; --ray-y: 50%"></span>
  <span style="--ray-angle: 120deg; --ray-x: 90%; --ray-y: 75%"></span>
  <span style="--ray-angle: 150deg; --ray-x: 70%; --ray-y: 93%"></span>
  <span style="--ray-angle: 180deg; --ray-x: 50%; --ray-y: 100%"></span>
  <span style="--ray-angle: 210deg; --ray-x: 30%; --ray-y: 93%"></span>
  <span style="--ray-angle: 240deg; --ray-x: 10%; --ray-y: 75%"></span>
  <span style="--ray-angle: 270deg; --ray-x: 0%; --ray-y: 50%"></span>
  <span style="--ray-angle: 300deg; --ray-x: 10%; --ray-y: 25%"></span>
  <span style="--ray-angle: 330deg; --ray-x: 30%; --ray-y: 7%"></span>
</div>

# まず、私たち自身が<br><span class="accent">一番使ってみたい</span>

万人受けする、最もニーズのある物を模索していたが、それをやめ、 <br/> 自分たちが本当に体験したいものからニーズを考え直しました。

---
class: statement-slide sf-romance-visual-slide
---

<div class="section-label">06-4 — ニーズ</div>

# 身体で情報を操る体験には、<br><span class="accent">SF的なロマン</span>がある

サイバーパンク作品のような情報表現を、自分の身体で疑似体験できること自体に価値があると考えています。

<div class="visual-reference">ref: movie <cite>Minority Report</cite></div>

<img class="sf-romance-visual" src="/proposal/minority-reprot.png" alt="空間に広がる情報を身体で操作するSF的なインターフェースのイメージ" />

<!--
[Sources]
- Image: user-provided minority-reprot.png
-->

---
class: statement-slide centered-emphasis-slide
---

<div class="section-label">06-4 — 将来像</div>

# MRが普及した未来の、<br><span class="accent">かっこいいプレゼン</span>をつくる

5年後、10年後にMRが広がったとき、空間と身体を使って伝えるためのサービスを目指します。

<!--
「1万人に1人なら使いたい人がいる」という考え方は、
市場規模の根拠ではなく、ニーズ仮説を立てる姿勢としてナレーションで扱う。
-->

---
class: chapter-slide supplement-chapter-slide
---

<GradientWave id="chapter-wave-07" class="chapter-wave" flip />

<div class="chapter-number">07</div>

<div class="section-label">07 — 実現方法</div>

# 身体表現を、<br><span class="accent">プレゼンの進行に組み込む</span>

新提案を成立させる、入力・進行・発表者向けUIの仕組みを説明します。

---
class: statement-slide supplement-slide supplement-slide--single-line
---

<div class="section-label">07 — 実現方法</div>

# 汎用的な動作認識には、<span class="accent">依存しない</span>

進行ごとに定義した位置・コントローラ移動・ボタン入力だけを有効にし、<br>意図しない動作による誤進行を抑えます。

<div class="implementation-boundary">
  <div><strong>使う</strong><span>進行ごとに定義した入力と動き</span></div>
  <div><strong>使わない</strong><span>カメラ任せの汎用モーション認識</span></div>
</div>

<!--
Source: /home/t4ko/Project/github.com/unframe-dev/unframe/docs/decisions/0005-spatial-presentation-domain-model.md
-->

---
class: statement-slide supplement-slide centered-statement-slide
---

<div class="section-label">07 — 実現方法</div>

# スピーカーノートを、<br><span class="accent">動きの設計図にする</span>

発言と立ち位置・方向・表示タイミングを記録。発表中は必要な指示だけを表示します。

<!--
発表者向けUIは補足機能ではなく、身体表現を再現可能にする中心機能として説明する。

Sources:
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/Unframe_Scrapbox_reactions_summary.md
- /home/t4ko/Project/github.com/unframe-dev/unframe/docs/decisions/0005-spatial-presentation-domain-model.md
-->

---
class: statement-slide reference-demo-slide
---

<div class="section-label">07 — 体験のイメージ</div>

# 完成形に近い感覚は、<br>デザインあ展の<span class="accent">「DO IT!」</span>

指示に合わせて身体を動かすことと、 <br/> 画面上の表現が結びつく体験を参考にします。

<div class="reference-media">
  <img src="https://raw.githubusercontent.com/unframe-dev/mitou-slide/main/media/demos/a_ten-neo.gif" alt="デザインあ展のDO IT!で、画面の指示に合わせて身体を動かす体験" />
  <div class="reference-media-caption">ref — デザインあ展「DO IT!」</div>
  <div class="reference-media-caption">https://www.youtube.com/watch?v=TP6L3JbJLZQ</div>
</div>

<!--
[Sources]
- Reference: https://www.youtube.com/watch?v=TP6L3JbJLZQ
- GIF: user-provided a_ten-neo.gif
-->

---
class: statement-slide prototype-roadmap-slide
---

<div class="section-label">08 — 今後の開発</div>

# まず、体験の核を<br><span class="accent">小さく試作する</span>

<div class="prototype-roadmap">
  <div class="prototype-step prototype-step--move">
    <span class="prototype-step-number">01</span>
    <div><strong>移動</strong><span>歩いた軌跡に合わせて、空間へ情報を展開する</span></div>
  </div>
  <div class="prototype-step prototype-step--guide">
    <span class="prototype-step-number">02</span>
    <div><strong>視線誘導</strong><span>ジェスチャーの先へ、観客の注意を自然に導く</span></div>
  </div>
  <div class="prototype-step prototype-step--assist">
    <span class="prototype-step-number">03</span>
    <div><strong>補助UI</strong><span>発表者だけに進行と次の操作を案内する</span></div>
  </div>
</div>

<!-- 実装順序と、最初に検証する利用シーンは要決定。 -->

---
class: statement-slide validation-balance-slide
---

<div class="section-label">08 — 検証すること</div>

# 面白さとわかりやすさを、<br><span class="accent">同時に確かめる</span>

<div class="validation-balance">
  <div class="validation-axis">
    <span class="validation-axis-label">わかりやすさ</span>
    <span class="validation-axis-center">両立</span>
    <span class="validation-axis-label">面白さ</span>
  </div>
  <div class="validation-checks">
    <div><span>01</span><strong>観客</strong><small>次に見る場所を迷わないか</small></div>
    <div><span>02</span><strong>発表者</strong><small>無理なく進行できるか</small></div>
    <div><span>03</span><strong>MR体験</strong><small>身体を使う表現にMRならではの魅力があるか</small></div>
  </div>
</div>

---
class: statement-slide audience-questions-slide
---

<div class="section-label">09 — みなさんへの質問 1</div>

# この体験について、<br><span class="accent">どう思うか</span>

<div class="audience-questions">
  <div><span>01</span><p>皆さんが思う<br>「SF的なかっこよさ」とは何か</p></div>
  <div><span>02</span><p>簡単になるなら試したい、<br>SF的な表現は何か</p></div>
  <div><span>03</span><p>この体験を<br>使ってみたい場面はあるか</p></div>
</div>

<!--
回答を求める問いとして読み上げ、レビューにつなげる。
-->

---
class: statement-slide audience-questions-slide technical-questions-slide
---

<div class="section-label">09 — みなさんへの質問 2</div>

# この提案を、<br><span class="accent">どう実現していくか</span>

<div class="audience-questions">
  <div><span>04</span><p>表現の自由さと、<br>UIの複雑化をどう両立するか</p></div>
  <div><span>05</span><p>p2pやCloud Anchorで、<br>現実空間の原点をどう同期するか</p></div>
  <div><span>06</span><p>表現の多彩さと、<br>わかりやすいUIをどう両立するか</p></div>
</div>

---
class: closing-slide
---

<img class="closing-brand-image" src="/brand/light-header.png" alt="Unframe" />

<div class="slide-note">ご視聴ありがとうございました。</div>

<!--
Unframeのブランドと、今回検証する体験を短く残して締める。
-->
