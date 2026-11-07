const host = document.querySelector('#diagram');
const diagram = new URLSearchParams(location.search).get('diagram') || 'overview';
const logo = (name, alt = name) => `<img class="logo ${name}" src="./logos/${name}.${['unframe', 'cloudflareworkers', 'tailscale', 'hono', 'google', 'betterauth'].includes(name) ? 'png' : 'svg'}" alt="${alt}">`;
const tech = (name, text) => `<span class="tech">${logo(name, text)}${text}</span>`;
const title = (name, text) => `<div class="brand-title">${logo(name, text)}<div class="title">${text}</div></div>`;
const desc = text => `<div class="description">${text}</div>`;
const card = (x, y, w, h, content, cls = '') => `<section class="card ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${content}</section>`;
const label = (x, y, text, cls = '') => `<div class="label ${cls}" style="left:${x}px;top:${y}px">${text}</div>`;
const group = (x, y, w, h) => `<div class="group" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"></div>`;
const path = (d, cls = '', both = false) => `<path class="wire ${cls}" d="${d}" marker-end="url(#${cls.includes('blue') ? 'blue' : 'arrow'})" ${both ? `marker-start="url(#${cls.includes('blue') ? 'blue' : 'arrow'})"` : ''}/>`;
const wires = items => `<svg class="wires" viewBox="0 0 1768 ${['backend', 'web', 'framework'].includes(diagram) ? 800 : 650}" aria-hidden="true"><defs>${['arrow', 'blue'].map(id => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="${id === 'blue' ? '#647cdd' : '#a59bb9'}" stroke-width="1.5" stroke-linejoin="round"/></marker>`).join('')}</defs>${items.join('')}</svg>`;

const diagrams = {
  overview: () => [
    group(970, 290, 480, 330),
    '<div class="group-heading" style="left:1000px;top:310px">自宅サーバー</div>',
    wires([
      path('M420 107 H990'),
      path('M420 327 H600 V425 H990', 'blue', true),
      path('M420 549 H600 V495 H990', 'blue', true),
      path('M1210 370 V182'),
      path('M1430 107 H1490'),
      path('M1430 140 H1465 V391 H1490'),
    ]),
    card(20, 32, 400, 150, title('unframe', '編集・公開') + desc('Local Editor / CLI / Console')),
    card(20, 252, 400, 150, title('unity', 'MR') + desc('Unity / Meta Quest')),
    card(20, 474, 400, 150, title('react', 'Audience Web') + desc('React / Three.js')),
    card(990, 32, 440, 150, title('cloudflareworkers', 'Control Plane') + desc('認証・管理・永続化')),
    label(790, 460, tech('tailscale', 'Tailscale Funnel')),
    card(990, 370, 440, 190, title('go', 'Realtime') + desc('進行の確定・共有状態の同期')),
    card(1490, 32, 260, 150, title('cloudflare', 'D1') + desc('資料・Session')),
    card(1490, 316, 260, 150, title('cloudflare', 'R2') + desc('配信用素材')),
    label(705, 84, 'HTTPS'),
    label(485, 290, 'gRPC', 'blue'),
    label(525, 592, 'WebSocket', 'blue'),
    label(1210, 240, '進行状態の保存'),
  ].join(''),
  mr: () => [
    group(20, 25, 1140, 600),
    '<div class="group-heading" style="left:53px;top:48px">' + logo('meta', 'Meta') + 'Meta Quest<span>Unity 6 / C# / OpenXR・Meta XR SDK</span></div>',
    wires([
      path('M350 242 H435'), path('M755 242 H1370', 'blue'),
      path('M1550 360 V503 H1045', 'blue'),
      path('M350 503 H435', 'dashed'), path('M195 425 V379 H595 V330', 'dashed'),
    ]),
    card(50, 150, 300, 180, '<div class="eyebrow">Tracking</div><div class="title">頭・手・身体</div>' + desc('Poseの取得')),
    card(435, 150, 320, 180, '<div class="eyebrow">Recognition</div><div class="title">Gesture / Zone</div>' + desc('端末内で入力認識')),
    card(1370, 150, 370, 210, '<div class="eyebrow">SERVER</div>' + title('go', 'Realtime') + desc('共有状態の確定')),
    card(50, 425, 300, 155, '<div class="title">AprilTag</div>' + desc('会場座標の校正'), 'flat'),
    card(435, 425, 610, 155, title('unity', '空間描画') + desc('PNG・テキスト・GLB・動画')),
    label(1100, 211, 'gRPC / 操作入力', 'blue'),
    label(1365, 472, 'gRPC / 共有状態', 'blue'),
    label(590, 378, '入力と描画の座標を統一', 'purple'),
  ].join(''),
  web: () => [
    group(650, 20, 1090, 760),
    '<div class="group-heading" style="left:680px;top:35px">' + logo('react', 'React') + 'Audience · React</div>',
    wires([
      path('M185 145 V225'),
      path('M350 290 H550 V170 H690', '', true),
      path('M1090 170 H1230'),
      path('M350 700 H550 V430 H690', 'blue', true),
      path('M890 245 V355'),
      path('M1090 430 H1230', 'blue'),
      path('M1460 245 V355'),
      path('M1090 680 H1160 V480 H1230'),
      path('M1460 620 V505'),
    ]),
    card(20, 25, 330, 120, title('react', 'Console') + desc('資料・Session管理')),
    card(20, 225, 330, 140, title('cloudflareworkers', 'Control Plane') + desc('参加・配信・接続情報')),
    card(20, 630, 330, 140, title('go', 'Realtime') + desc('進行・共有状態の配信')),
    card(690, 95, 400, 150, '<div class="title">参加・接続</div>' + desc('参加・接続情報の取得')),
    card(1230, 95, 460, 150, '<div class="title">素材読み込み</div>' + desc('画像・動画・3Dモデル')),
    card(690, 355, 400, 150, '<div class="title">状態管理</div>' + desc('Zustand · シーン・演出状態')),
    card(1230, 355, 460, 150, title('threejs', 'Three.js') + desc('素材・状態・位置を反映して描画')),
    card(690, 620, 400, 120, '<div class="title">AprilTag</div>' + desc('マーカーで会場と位置合わせ')),
    card(1230, 620, 460, 120, '<div class="title">8th Wall · SLAM</div>' + desc('カメラから端末位置を追跡')),
    label(185, 185, 'HTTPS'),
    label(505, 205, '参加・情報取得'),
    label(1160, 135, '配信情報'),
    label(530, 565, 'WebSocket', 'blue'),
    label(1160, 400, '共有状態', 'blue'),
    label(1160, 560, '表示位置の校正'),
    label(1460, 560, '端末の位置・向き'),
  ].join(''),
  backend: () => [
    group(500, 20, 650, 540),
    '<div class="group-heading" style="left:525px;top:38px">' + logo('cloudflareworkers', 'Workers') + 'Control Plane · Workers / ' + logo('hono', 'Hono') + 'Hono</div>',
    wires([
      path('M270 200 H530'),
      path('M270 430 H530', '', true),
      path('M825 370 V285'),
      path('M1120 190 H1300', '', true),
      path('M1120 250 H1200 V450 H1300'),
      path('M1120 485 H1300'),
      path('M1120 515 H1240 V570 H1300'),
      path('M270 500 H400 V720 H530', 'blue', true),
      path('M825 660 V525'),
    ]),
    card(20, 140, 250, 420, '<div class="title">Client</div>' + desc('Console<br>Audience Web<br>Quest<br>Local Editor / CLI')),
    card(530, 100, 590, 185, title('betterauth', 'Auth · Better Auth') + desc('/api/auth/*<br>ログイン・セッション・二要素認証')),
    card(530, 370, 590, 155, '<div class="title">管理・参加API</div>' + desc('権限・資料・Session<br>接続URL・認証情報の発行')),
    card(1300, 70, 440, 260, title('google', 'Google OAuth') + '<div style="margin-top:42px">' + title('resend', 'Resend') + desc('確認・再設定メール') + '</div>'),
    card(1300, 390, 440, 250, title('cloudflare', 'D1') + desc('認証・管理・進行状態') + '<div style="margin-top:26px">' + title('cloudflare', 'R2') + desc('公開資料・素材') + '</div>'),
    card(530, 660, 590, 120, title('go', 'Realtime') + desc('自宅サーバー · 演出評価・状態配信')),
    label(400, 170, '認証'),
    label(400, 400, '管理・参加'),
    label(925, 325, 'セッション確認'),
    label(1210, 150, '認証・メール'),
    label(1210, 340, '認証情報'),
    label(1210, 460, '管理データ'),
    label(1210, 610, '素材の保存・取得'),
    label(945, 595, '進行保存・終了通知'),
    label(400, 620, 'gRPC / WebSocket', 'blue'),
  ].join(''),
  framework: () => [
    wires([
      path('M190 160 V220'),
      path('M360 300 H520'),
      path('M860 300 H1020'),
      path('M690 380 V435 H420 V490', 'blue'),
      path('M190 490 V380', 'blue'),
      path('M860 340 H920 V720 H860', 'dashed'),
      path('M1170 350 V580'),
      path('M1320 685 H1430'),
    ]),
    card(20, 20, 340, 140, title('unframe', 'Authoring API') + desc('TSX DSLの記述API')),
    card(20, 220, 340, 160, title('typescript', 'TSX / DSL') + desc('空間配置・入力条件・演出')),
    card(520, 220, 340, 160, title('unframe', 'Build / Compiler') + desc('AST解析・意味検証<br>描画データ・Asset生成')),
    card(1020, 60, 720, 290, '<div class="title">Dist</div><div class="framework-artifacts"><div>Definition<br><span>シーン・演出の定義</span></div><div>RenderBundle<br><span>描画用データ</span></div><div>AssetSet<br><span>画像・動画・3Dモデル</span></div><div>BuildManifest<br><span>成果物の構成情報</span></div></div>'),
    card(20, 490, 500, 140, title('unframe', 'Local Editor · Preview') + desc('Unity WebGLで表示・演出を確認')),
    card(520, 650, 340, 140, title('unframe', 'Presentation') + desc('意味モデル・意味検証')),
    card(1020, 580, 300, 210, title('unframe', 'CLI') + desc('成果物をアップロード<br>資料を公開')),
    card(1430, 580, 310, 210, '<div class="brand-title">' + logo('unity', 'Unity') + logo('react', 'React') + '</div><div class="title" style="margin-top:14px">Unity / Web</div>' + desc('共通成果物を描画・再生')),
    label(190, 190, '利用して記述'),
    label(440, 265, 'ビルド'),
    label(940, 265, '生成'),
    label(650, 405, 'Dev build', 'blue'),
    label(190, 435, '確認して修正', 'blue'),
    label(920, 660, '参照・検証'),
    label(1170, 465, '公開'),
    label(1375, 645, '公開後に<br>取得'),
  ].join(''),
};

if (!Object.hasOwn(diagrams, diagram)) throw new Error(`Unknown diagram: ${diagram}`);
host.className = diagram;
host.innerHTML = diagrams[diagram]();
document.title = `Unframe 技術構成図 / ${diagram}`;
