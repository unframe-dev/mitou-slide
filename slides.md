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

<ul class="issue-list">
  <li>本当にニーズがあるのか</li>
  <li>どのようなユースケースで使われるのか</li>
  <li>なぜ MR である必要があるのか</li>
</ul>

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
    <div class="focus-status">試作・PoC</div>
  </div>

  <div class="focus-row focus-row--poc">
    <div class="focus-conditions"><span>場所非依存</span><span>散らばる</span><span>非同期</span></div>
    <div class="focus-concept"><strong>資料表示系プレゼン</strong><small>資料表示モード</small></div>
    <div class="focus-status">試作・PoC</div>
  </div>

  <div class="focus-row focus-row--poc">
    <div class="focus-conditions"><span>場所非依存</span><span>散らばる</span><span>同期</span></div>
    <div class="focus-concept"><strong>資料表示系プレゼン</strong><small>発表モード</small></div>
    <div class="focus-status">試作・PoC</div>
  </div>
</div>

<p class="focus-summary">この4つの方向を軸に、試作のPoCを繰り返して現在の形を見つけました。</p>

<!--
Source: /home/t4ko/Project/github.com/unframe-dev/unframe/docs/Unframe_Scrapbox_reactions_summary.md
-->

---
class: statement-slide poc-conclusion-slide
---

<div class="section-label">04 — PoCの結論</div>

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

---
class: chapter-slide final-idea-slide
---

<GradientWave id="chapter-wave-05" class="chapter-wave" flip />

<div class="chapter-number">05</div>

<div class="section-label">05 — 最終アイデア</div>

# 身体の動きで、<br><span class="accent">観客の視線を導くMRプレゼン</span>

<div class="final-idea-summary">
  <div><strong>身体で操作する</strong><span>移動やジェスチャーで情報を展開する</span></div>
  <div><strong>空間に配置する</strong><span>モニターの外まで伝える範囲を広げる</span></div>
  <div><strong>観客を導く</strong><span>発表者の動きを視線の手がかりにする</span></div>
</div>

<!-- 新提案の詳細は06章で説明する。 -->

---
class: statement-slide idea-hero-slide
---

<div class="section-label">06-1 — 概要</div>

# <span class="accent">身体を使った</span><br>MRプレゼンテーションアプリ

従来の操作に身体の移動やジェスチャーを組み合わせ、MR空間に置いた情報へ観客の注意を導きます。

<img class="idea-hero-visual" src="/people/steve-jobs-presenting-user.png" alt="ステージ上でプレゼンテーションするスティーブ・ジョブズ" />

<!--
この一文を新提案の定義として扱う。
正式なプロジェクト名が決まったら見出しを差し替える。

[Sources]
- Photo: user-provided image
- Modification: cropped and faded with CSS
-->

---
class: statement-slide walking-visual-slide
---

<div class="section-label">06-1 — 身体を使った表現</div>

# 移動した軌跡に沿って、<br><span class="accent">情報が現れる</span>

位置Aから位置Bへ歩く動きに合わせて、通った空間へ要素を順番に表示します。

<img class="walking-visual" src="/walking-with-infomation-transparent.png" alt="歩いた軌跡に沿って情報が現れるイメージ" />

<!-- Source: user-provided walking-with-infomation.png; background removed mechanically -->

---
class: statement-slide demo-slide
---

<div class="section-label">06-1 — 身体を使った表現</div>

# 腕を振った先へ、<br><span class="accent">観客の視線を導く</span>

体の動きに合わせて要素を表示する

<img
  class="demo-visual"
  src="https://raw.githubusercontent.com/unframe-dev/mitou-slide/main/media/demos/demo.gif"
  alt="身体の動きに合わせて情報を表示するデモ"
/>

<!-- Source: media/demos/demo.gif; served from the public repository via GitHub Raw -->

---
class: statement-slide demo-slide demo-slide--landscape
---

<div class="section-label">06-1 — 発表者の補助</div>

# 体についてくる、<br><span class="accent">相対位置の追尾要素</span>
身体表現だけに頼らず、立ち位置・次の操作・進行を補助します。

<img
  class="demo-visual"
  src="https://raw.githubusercontent.com/unframe-dev/mitou-slide/main/media/demos/demo_1.gif"
  alt="発表者向けUIが次の動きを補助するデモ"
/>

<!--
補助UIに何を表示するかはPoCを通じて決める。

[Sources]
- Demo source: `media/source/demo_1.mp4`; converted to `media/demos/demo_1.gif` with FFmpeg
-->

---
class: statement-slide
---

<div class="section-label">06-2 — 提案にまとまった理由</div>

# この提案を選んだ<span class="accent">二つの理由</span>

1. MRプレゼン特有の注意誘導の課題に向き合える
2. 自分たちが実際に使いたいと思える

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
class: statement-slide
---

<div class="section-label">06-3 — MR プレゼンの課題</div>

# 正面に固定するなら、<br><span class="accent">普通のプレゼンでよい</span>

わかりやすさを優先して表示を前面へ集めると、MRの空間表現を活かせません。

---
class: statement-slide attention-guidance-slide
---

<div class="section-label">06-3 — 身体による解決</div>

# 発表者の身体を、<br><span class="accent">注意誘導の手がかり</span>にする

歩く、振り向く、腕を振る。その動きと情報表示を組み合わせ、観客が見る場所と順番を自然に示します。

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
class: statement-slide
---

<div class="section-label">06-4 — ニーズ</div>

# 身体で情報を操る体験には、<br><span class="accent">SF的なロマン</span>がある

サイバーパンク作品のような情報表現を、自分の身体で疑似体験できること自体に価値があると考えています。

---
class: statement-slide
---

<div class="section-label">06-4 — 将来像</div>

# MRが普及した未来の、<br><span class="accent">かっこいいプレゼン</span>をつくる

5年後、10年後にMRが広がったとき、空間と身体を使って伝えるためのサービスを目指します。

<!--
「1万人に1人なら使いたい人がいる」という考え方は、
市場規模の根拠ではなく、ニーズ仮説を立てる姿勢としてナレーションで扱う。
-->

---
class: statement-slide
---

<div class="section-label">07 — 補足事項</div>

# 身体の動きを、<br><span class="accent">自動認識する前提ではない</span>

現時点では、カメラでモーションを読み取ることを必須にせず、発表操作と身体表現を組み合わせる想定です。

<!--
表示を進める具体的な入力方法は要確認。
「身体の動きをトリガーにする」という表現との違いをナレーションで補足する。
-->

---
class: statement-slide
---

<div class="section-label">07 — 補足事項</div>

# 補助UIは、<br><span class="accent">発表者にだけ見える</span>

観客の体験を邪魔せず、立ち位置・次に見せる情報・進行のタイミングを案内します。

<!-- 補助UIの最小構成をPoCで検証する。 -->

---
class: statement-slide
---

<div class="section-label">07 — 体験のイメージ</div>

# 完成形に近い感覚は、<br>デザインあ展の<span class="accent">「DO IT!」</span>

指示に合わせて身体を動かすことと、画面上の表現が結びつく体験を参考にします。

<!-- Reference: https://www.youtube.com/watch?v=TP6L3JbJLZQ -->

---
class: statement-slide
---

<div class="section-label">08 — 今後の開発</div>

# まず、体験の核を<br><span class="accent">小さく試作する</span>

- 移動に合わせて情報を展開する
- ジェスチャーの先へ視線を誘導する
- 発表者用の補助UIで進行を支える

<!-- 実装順序と、最初に検証する利用シーンは要決定。 -->

---
class: statement-slide
---

<div class="section-label">08 — 検証すること</div>

# 面白さとわかりやすさを、<br><span class="accent">同時に確かめる</span>

- 観客は次に見る場所を迷わないか
- 発表者は無理なく進行できるか
- 身体を使う表現にMRならではの魅力があるか

---
class: statement-slide
---

<div class="section-label">09 — 課題・聞きたいこと</div>

# 皆さんと一緒に、<br><span class="accent">この体験を磨きたい</span>

- 表現の多彩さと、わかりやすいUIをどう両立するか
- 皆さんが思う「SF的なかっこよさ」とは何か
- この体験を使ってみたい場面はあるか

<!--
回答を求める問いとして読み上げ、レビューにつなげる。
-->

---
class: closing-slide
---

# From slides to <span class="text-gradient">spaces.</span>

<div class="slide-note">動いて伝えるプレゼンへ。MRだからこそ成立する体験を検証する。</div>

<!--
最後に、プロジェクトが変わったこと自体ではなく、
課題を踏まえて提案を更新できたことを伝える。
-->
