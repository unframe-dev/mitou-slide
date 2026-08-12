---
theme: geist
title: Unframe 中間合宿用動画 草案
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
class: spatial-steps
---

<div class="section-label">02 — 動画の流れ</div>

# プロジェクトが変わった経緯から話します

1. もともとの提案
2. ブースト合宿後に見えた課題
3. 合宿後のアイデア探索
4. 最終的にまとまった新提案
5. これからの開発と課題

<!--
最初にこの順番を示しておくと、プロジェクトの大幅な変更が追いやすくなる。
-->

---
class: proposal-slide
---

<div class="section-label">02 — もともとの提案</div>

<img class="proposal-visual proposal-visual--screen" src="/proposal/proposal-3d-model.png" alt="3Dモデルを配置したプレゼン画面" />

<div class="proposal-copy proposal-copy--first">
  <h1>最初の提案は、<br><span class="accent">3Dモデルを使うプレゼン</span></h1>
  <p>プレゼンの流れの中に、3Dモデルを組み込む構想でした。</p>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: proposal-slide
---

<div class="section-label">02 — もともとの提案</div>

<img class="proposal-visual proposal-visual--screen" src="/proposal/proposal-editor.png" alt="3D編集画面" />

<div class="proposal-copy">
  <h1>説明のたびに、<br><span class="accent">CADや動画に戻っていた</span></h1>
  <p>立体物を説明するたびに、別の資料を開いて補足する必要がありました。</p>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: proposal-slide
---

<div class="section-label">02 — もともとの提案</div>

<img class="proposal-visual" src="/proposal/presentation-scene.png" alt="発表者と聴衆のイラスト" />

<div class="proposal-copy">
  <h1>プレゼンの一部として、<br><span class="accent">3Dモデルを出せれば？</span></h1>
  <p>説明を止めずに、その場で立体物を見せられるプレゼンを目指しました。</p>
</div>

<!-- Source: /home/t4ko/Project/github.com/unframe-dev/unframe/assets/boost.pdf pp.22-24 -->

---
class: issue-slide
---

<div class="section-label">03 — ブースト合宿後の課題</div>

<div class="issue-intro">
  <h1>合宿を終えて、<br><span class="accent">考え直すべき課題</span>が見えてきた</h1>
</div>

<ol class="issue-list">
  <li>本当にニーズがあるのか</li>
  <li>どのようなユースケースで使われるのか</li>
  <li>なぜ MR である必要があるのか</li>
</ol>

<!--
合宿で受けたフィードバックを、課題として整理して話す。
-->

---
class: statement-slide
---

<div class="section-label">04 — 合宿後に行ったこと</div>

# 機能追加よりも、<br><span class="accent">アイデア探し</span>を優先してみた

課題を解消するため、いったん実装の追加から離れました。

---
class: focus-slide
---

<div class="section-label">04 — アイデア探索</div>

<div class="focus-grid">
  <div class="focus-grid__head" aria-hidden="true">
    <span>条件</span>
    <span>方向性</span>
    <span>状態</span>
  </div>

  <div class="focus-row focus-row--initial">
    <div class="focus-conditions"><span>場所依存</span><span>集まる</span><span>同期</span></div>
    <div class="focus-concept"><strong>初期提案（MRプレゼン）</strong><small>今まで作っていたもの</small></div>
    <div class="focus-status">これまで</div>
  </div>

  <div class="focus-row focus-row--future">
    <div class="focus-conditions"><span>場所依存</span><span>集まる</span><span>非同期</span></div>
    <div class="focus-concept"><strong>展示会MR</strong><small>展示空間で体験する</small></div>
    <div class="focus-status">試作済み</div>
  </div>

  <div class="focus-row focus-row--poc">
    <div class="focus-conditions"><span>場所非依存</span><span>散らばる</span><span>非同期</span></div>
    <div class="focus-concept"><strong>資料表示系プレゼン</strong><small>資料表示モード</small></div>
    <div class="focus-status">今回のPoC</div>
  </div>

  <div class="focus-row focus-row--poc">
    <div class="focus-conditions"><span>場所非依存</span><span>散らばる</span><span>同期</span></div>
    <div class="focus-concept"><strong>資料表示系プレゼン</strong><small>発表モード</small></div>
    <div class="focus-status">今回のPoC</div>
  </div>
</div>

<p class="focus-summary">この4つの方向を軸に、試作のPoCを繰り返して現在の形を見つけました。</p>

<!--
Source: /home/t4ko/Project/github.com/unframe-dev/unframe/docs/Unframe_Scrapbox_reactions_summary.md
-->

---
class: chapter-slide final-idea-slide
---

<GradientWave id="chapter-wave-05" class="chapter-wave" flip />

<div class="chapter-number">05</div>

<div class="section-label">05 — 最終アイデア</div>

# PoCの結果、<br><span class="accent">MRの強みと限界が見えました</span>

<div class="finding-stack">
  <div class="finding-item">
    <span class="finding-label">情報量を落とすと</span>
    <span class="finding-text">MRでなくてもよくなる</span>
  </div>
  <div class="finding-item">
    <span class="finding-label">情報量を増やすと</span>
    <span class="finding-text">認識の妨げになり、MRの強みが消える</span>
  </div>
</div>

<p class="proposal-transition">この気づきをもとに、情報の見せ方を変える新提案を紹介します。</p>

<!-- 最終アイデアの名称と一文の説明を追加する。 -->

---
class: statement-slide
---

<div class="section-label">06 — 新提案</div>

# <span class="accent">新しい提案</span>を紹介します

ここからは、最終的にまとまったアイデアについて説明します。

---
class: statement-slide
---

<div class="section-label">06-1 — 概要</div>

# このプロジェクトは何をするものか

新提案の概要を、次の3点で説明します。

- 誰が使うのか
- どのような場面で使うのか
- 何ができるようになるのか

<!-- 新提案を一文で言い切る。必要なら利用シーンの図を置く。 -->

---
class: statement-slide
---

<div class="section-label">06-2 — 提案にまとまった理由</div>

# このアイデアを選んだ<span class="accent">理由は二つ</span>あります

1. MR でプレゼンを行うときの課題を解決できる
2. 実際に使いたいと思えるニーズがある

この二つが、提案を最終的に絞り込む軸になりました。

---
class: statement-slide
---

<div class="section-label">06-3 — MR プレゼンの課題</div>

# 情報を増やすほど、プレゼンは<span class="accent">わかりづらくなる</span>

- 情報を広げて表示すると、全体を把握しづらい
- 情報を狭い範囲にまとめると、MR である意味が薄くなる
- 表示量とわかりやすさの両立が難しい

<!--
実際の MR プレゼンで起こる状況を、画面例や短いデモで示す。
-->

---
class: statement-slide
---

<div class="section-label">06-3 — 課題の解決</div>

# 新提案は、<span class="accent">情報の見せ方</span>そのものを変えます

新提案では、MR 空間の広さを活かしながら、見る人が必要な情報を追えるようにします。

- 情報を置く場所に意味を持たせる
- 見る順番を自然に誘導する
- 必要な情報と補助情報を分ける

<!-- 解決方法の具体的な動き・画面・インタラクションを追加する。 -->

---
class: statement-slide
---

<div class="section-label">06-4 — ニーズ</div>

# 使いたいと思える場面から、ニーズを考えました

- どのような人が困っているのか
- いまは何で代替しているのか
- この提案によって何が楽になるのか

<!--
想定ユーザー、利用シーン、既存の代替手段を具体化する。
ニーズが一時的な興味ではなく、継続して使う理由になるかを確認する。
-->

---
class: statement-slide
---

<div class="section-label">07 — 補足事項</div>

# 誤解されやすい点を補足します

- モーションの読み取りは必要ない
- 本人にしか見えない補助 UI がある

<!-- 質問を受けそうな点を追加して、先回りして説明する。 -->

---
class: statement-slide
---

<div class="section-label">08 — 今後の開発</div>

# ここからは、<span class="accent">体験の確かさ</span>を検証していきます

- まず何を試作するか
- どの利用シーンを検証するか
- 何を基準に改善するか

重視するのは、表現の面白さだけでなく、使う人が迷わず理解できることです。

---
class: statement-slide
---

<div class="section-label">09 — 課題</div>

# まだ、解決すべき課題が残っています

- 表現の多彩さと、わかりやすい UI のバランス
- 提案した体験を、実装と検証で確かめること

<!--
二つ目以降の課題は、試作とレビューを通じて具体化していく。
-->

---
class: closing-slide
---

<div class="closing-rays"></div>

# From slides to <span class="text-gradient">spaces.</span>

<div class="slide-note">動いて伝えるプレゼンへ。MRだからこそ成立する体験を検証する。</div>

<!--
最後に、プロジェクトが変わったこと自体ではなく、
課題を踏まえて提案を更新できたことを伝える。
-->
