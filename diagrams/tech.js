const host = document.querySelector('#diagram');
const diagram = new URLSearchParams(location.search).get('diagram') || 'overview';
const logo = (name, alt = name) => `<img class="logo ${name}" src="./logos/${name}.${name === 'unframe' ? 'png' : 'svg'}" alt="${alt}">`;
const tech = (name, text) => `<span class="tech">${logo(name, text)}${text}</span>`;
const title = (name, text) => `<div class="brand-title">${logo(name, text)}<div class="title">${text}</div></div>`;
const desc = text => `<div class="description">${text}</div>`;
const card = (x, y, w, h, content, cls = '') => `<section class="card ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${content}</section>`;
const label = (x, y, text, cls = '') => `<div class="label ${cls}" style="left:${x}px;top:${y}px">${text}</div>`;
const group = (x, y, w, h) => `<div class="group" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"></div>`;
const path = (d, cls = '', both = false) => `<path class="wire ${cls}" d="${d}" marker-end="url(#${cls.includes('blue') ? 'blue' : 'arrow'})" ${both ? `marker-start="url(#${cls.includes('blue') ? 'blue' : 'arrow'})"` : ''}/>`;
const wires = items => `<svg class="wires" viewBox="0 0 1768 650" aria-hidden="true"><defs>${['arrow', 'blue'].map(id => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="${id === 'blue' ? '#647cdd' : '#a59bb9'}" stroke-width="1.5" stroke-linejoin="round"/></marker>`).join('')}</defs>${items.join('')}</svg>`;

const diagrams = {
  overview: () => [
    wires([
      path('M420 107 H670'),
      path('M420 327 H545 V405 H670', 'blue', true),
      path('M420 549 H545 V481 H670', 'blue', true),
      path('M900 338 V182'),
      path('M1130 107 H1390'),
      path('M1130 140 H1260 V391 H1390'),
    ]),
    card(20, 32, 400, 150, title('unframe', '編集・公開') + desc('Local Editor / CLI / Console')),
    card(20, 252, 400, 150, title('unity', 'MR') + desc('Unity / Meta Quest')),
    card(20, 474, 400, 150, title('react', 'Audience Web') + desc('React / Three.js')),
    card(670, 32, 460, 150, title('cloudflare', 'Control Plane') + desc('認証・管理・永続化'), 'purple'),
    card(670, 338, 460, 210, '<div class="eyebrow">RUNTIME</div>' + title('go', 'Realtime') + desc('進行の確定・共有状態の同期'), 'blue'),
    card(1390, 32, 350, 150, title('cloudflare', 'D1') + desc('資料・Session')),
    card(1390, 316, 350, 150, title('cloudflare', 'R2') + desc('配信用素材')),
    label(545, 84, 'HTTPS'), label(540, 287, 'gRPC', 'blue'),
    label(539, 592, 'WebSocket', 'blue'), label(1022, 258, '進行状態の保存'),
    '<div class="note" style="left:670px;top:574px">端末の認証・参加・素材取得はHTTPS<br>これらの接続線は省略</div>',
  ].join(''),
  mr: () => [
    group(20, 25, 1140, 600),
    '<div class="group-heading" style="left:53px;top:48px">' + logo('meta', 'Meta') + 'Meta Quest<span>Unity 6 / C# / OpenXR・Meta XR SDK</span></div>',
    wires([
      path('M350 242 H435'), path('M755 242 H1370', 'blue'),
      path('M1550 360 V503 H1045', 'blue'),
      path('M350 503 H435', 'dashed'), path('M195 425 V379 H595 V330', 'dashed'),
    ]),
    card(50, 150, 300, 180, '<div class="eyebrow">TRACKING</div><div class="title">頭・手・身体</div>' + desc('Poseの取得')),
    card(435, 150, 320, 180, '<div class="eyebrow">RECOGNITION</div><div class="title">Gesture / Zone</div>' + desc('端末内で入力認識'), 'purple'),
    card(1370, 150, 370, 210, '<div class="eyebrow">SERVER</div>' + title('go', 'Realtime') + desc('共有状態の確定'), 'blue'),
    card(50, 425, 300, 155, '<div class="title">AprilTag</div>' + desc('会場座標の校正'), 'flat'),
    card(435, 425, 610, 155, title('unity', '空間描画') + desc('PNG・テキスト・GLB・動画')),
    label(1100, 211, 'gRPC / 操作入力', 'blue'),
    label(1365, 472, 'gRPC / 共有状態', 'blue'),
    label(590, 378, '入力と描画の座標を統一', 'purple'),
  ].join(''),
  web: () => [
    wires([
      path('M267 325 V425'), path('M882 325 V425', '', true), path('M1497 325 V425', 'blue', true),
    ]),
    card(20, 35, 495, 290, '<div class="eyebrow">MANAGEMENT</div>' + title('react', 'Console') + desc('資料・Sessionの管理') + '<div class="tech-row">' + tech('react', 'React 19') + '</div>'),
    card(635, 35, 495, 290, '<div class="eyebrow">AUTHORING</div>' + title('react', 'Local Editor') + desc('Source編集・Unity Preview') + '<div class="tech-row">' + tech('react', 'React 19') + '</div>'),
    card(1250, 35, 495, 290, '<div class="eyebrow">VIEWING</div>' + title('react', 'Audience') + desc('スマートフォンでの視聴') + '<div class="tech-row">' + tech('threejs', 'Three.js') + '<span class="tech">8th Wall / AprilTag</span></div>', 'blue'),
    card(20, 425, 495, 185, title('cloudflare', 'Control Plane') + desc('認証・管理API'), 'purple'),
    card(635, 425, 495, 185, title('unframe', 'CLI Host') + desc('保存・ビルド<br>Control Planeへの公開'), 'purple'),
    card(1250, 425, 495, 185, title('go', 'Realtime') + desc('共有状態の受信'), 'blue'),
    label(267, 375, 'HTTPS'), label(882, 375, 'localhost / HTTP'), label(1497, 375, 'WebSocket', 'blue'),
  ].join(''),
  backend: () => [
    wires([
      path('M245 152 H390'), path('M245 492 H390', 'blue', true),
      path('M1170 112 H1400'), path('M1170 190 H1260 V251 H1400'),
      path('M900 390 V265'),
    ]),
    '<div class="group-heading" style="left:20px;top:86px">HTTPS</div><div class="note" style="left:20px;top:168px">管理・参加<br>配信情報</div>',
    '<div class="group-heading" style="left:20px;top:424px">gRPC / WS</div><div class="note" style="left:20px;top:508px">操作入力<br>状態配信</div>',
    card(390, 35, 780, 230, title('cloudflare', 'Control Plane') + desc('認証・権限・資料・Sessionの管理') + '<div class="tech-row">' + tech('typescript', 'TypeScript') + tech('hono', 'Hono') + tech('cloudflare', 'Workers') + '</div>', 'purple'),
    card(390, 390, 780, 230, title('go', 'Realtime') + desc('進行の確定・Snapshot・再接続時の復元') + '<div class="tech-row">' + tech('go', 'Go') + '<span class="tech">gRPC / WebSocket</span></div>', 'blue'),
    card(1400, 35, 340, 125, title('cloudflare', 'D1') + desc('永続データ'), 'compact'),
    card(1400, 188, 340, 125, title('cloudflare', 'R2') + desc('配信用素材'), 'compact'),
    label(968, 327, 'Checkpoint・完了通知'),
    '<div class="note" style="left:1250px;top:435px">高頻度の状態処理は<br>Realtime内で完結<br><br>Control Planeと独立して実行</div>',
  ].join(''),
  framework: () => [
    wires([
      path('M296 278 H380'), path('M660 278 H744'), path('M1024 278 H1108'), path('M1388 278 H1472'),
      path('M520 480 V415', 'dashed'),
    ]),
    card(16, 145, 280, 270, '<div class="step">01 / AUTHOR</div>' + title('typescript', 'TSX Source') + desc('型付きDSL<br>配置・入力・演出')),
    card(380, 145, 280, 270, '<div class="step">02 / COMPILE</div>' + title('unframe', 'Compiler') + desc('静的解析<br>意味検証'), 'purple'),
    card(744, 145, 280, 270, '<div class="step">03 / ARTIFACT</div><div class="title">Dist</div><div class="files">Definition<br>RenderBundle<br>AssetSet<br>BuildManifest</div>', 'purple'),
    card(1108, 145, 280, 270, '<div class="step">04 / PUBLISH</div>' + title('unframe', 'CLI') + desc('アップロード<br>公開')),
    card(1472, 145, 280, 270, '<div class="step">05 / PLAY</div><div class="brand-title">' + logo('unity', 'Unity') + logo('react', 'React') + '</div><div class="title" style="margin-top:17px">Unity / Web</div>' + desc('描画・再生'), 'blue'),
    card(380, 480, 644, 135, title('unframe', 'Core') + desc('意味モデル・意味検証・純粋実行'), 'flat'),
    label(604, 451, '依存', 'purple'), label(1430, 106, '公開した成果物を配信'),
    '<div class="note" style="left:1108px;top:496px">共通の成果物を利用<br>各クライアントが描画・再生を担当</div>',
  ].join(''),
};

if (!Object.hasOwn(diagrams, diagram)) throw new Error(`Unknown diagram: ${diagram}`);
host.className = diagram;
host.innerHTML = diagrams[diagram]();
document.title = `Unframe 技術構成図 / ${diagram}`;
