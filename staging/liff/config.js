/**
 * ═══════════════════════════════════════════════
 * PawBon 元気チェック — LIFF 共通設定
 * config.js
 *
 * ★★★ このファイルだけ編集すれば全ページに反映 ★★★
 *
 * 環境自動判定 / 环境自动判定:
 *   localhost        → LOCAL  (Supabase CLI)
 *   github.io/staging → STAGING (TEST project)
 *   github.io (other) → PRODUCTION
 * ═══════════════════════════════════════════════
 */

// ─────────────────────────────
// 環境自動判定 / 环境自动判定
// ─────────────────────────────
const ENV = (() => {
  const host = window.location.hostname;
  const path = window.location.pathname;

  // LOCAL: localhost / 127.0.0.1
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'LOCAL';
  }
  // STAGING: GitHub Pages の /staging/ パス
  if (host.endsWith('github.io') && path.includes('/staging/')) {
    return 'STAGING';
  }
  // PRODUCTION: その他すべて
  return 'PRODUCTION';
})();

// ─────────────────────────────
// 環境別 API 設定 / 各环境 API 配置
// ─────────────────────────────
const ENV_CONFIG = {
  LOCAL: {
    API_BASE: 'http://localhost:54321/functions/v1',
  },
  STAGING: {
    API_BASE: 'https://yxtenqytvbmmbrzcllqk.supabase.co/functions/v1',
  },
  PRODUCTION: {
    API_BASE: 'https://jzkihezfmptrhfyiqqxk.supabase.co/functions/v1',
  },
};

const PAWBON_CONFIG = {

  // 現在の環境 / 当前环境
  ENV: ENV,

  // ─────────────────────────────
  // ① API ベースURL（環境別）/ API 基础 URL（按环境）
  // ─────────────────────────────
  API_BASE: ENV_CONFIG[ENV].API_BASE,

  // ─────────────────────────────
  // ② LIFF ID（TEST / PROD 2セット）
  //   LINE Developers → LIFF タブで取得
  //   LOCAL / STAGING → TEST チャネル
  //   PRODUCTION → PROD チャネル
  // ─────────────────────────────
  LIFF_ID: (ENV === 'PRODUCTION') ? {
    // PROD チャネル / 生产频道
    register:    '2009150735-QVZVEgQg',
    familyJoin:  '2009150735-NwzuWNub',
    worry:       '2009150735-o8ZaIkmY',
    report:      '2009150735-xVqRCfBp',
    care:        '2009150735-xVqRCfBp',  // report と同じ LIFF ID を流用
    family:      '2009150735-zbmCgJZv',
    settings:    '2009150735-GT1YvHUH',
  } : {
    // TEST チャネル / 测试频道
    register:    '2009188008-vZDZZycU',
    familyJoin:  '2009188008-FTihZzkt',
    worry:       '2009188008-0fXNW2aC',
    report:      '2009188008-87cLzkKc',
    care:        '2009188008-87cLzkKc',  // report と同じ LIFF ID を流用
    family:      '2009188008-c4NLtOwb',
    settings:    '2009188008-HmSCR5ng',
  },

  // ─────────────────────────────
  // ③ LINE 公式アカウント（環境別）/ LINE 官方帐号（按环境）
  // ─────────────────────────────
  LINE_BOT_ID: (ENV === 'PRODUCTION') ? '@pawbon' : '@709kodce',
  LINE_ADD_FRIEND_URL: (ENV === 'PRODUCTION')
    ? 'https://line.me/R/ti/p/@pawbon'
    : 'https://line.me/R/ti/p/@709kodce',

  // ─────────────────────────────
  // ④ LIFF ページのベースURL（GitHub Pages）
  // ─────────────────────────────
  LIFF_BASE_URL: 'https://herzymusic.github.io/PawBon/liff/',

  // ─────────────────────────────
  // ⑤ デバッグモード
  //   true: LIFF外（PCブラウザ等）でも動作確認可能
  //   false: LINE内のみ動作（本番用）
  // ─────────────────────────────
  DEBUG: ENV !== 'PRODUCTION',

};

// ─────────────────────────────
// 非本番環境バッジ表示 / 非生产环境标记
// ─────────────────────────────
if (ENV !== 'PRODUCTION') {
  document.addEventListener('DOMContentLoaded', () => {
    const badge = document.createElement('div');
    badge.textContent = `\u{1F9EA} ${ENV}`;
    badge.style.cssText =
      'position:fixed;top:0;left:0;z-index:99999;' +
      'background:#ff6b00;color:#fff;padding:2px 10px;' +
      'font-size:12px;font-weight:bold;border-radius:0 0 6px 0;';
    document.body.appendChild(badge);
  });
}

// ─────────────────────────────
// PawBon カスタムモーダル / 品牌弹窗
// window.alert() をオーバーライドし、ドメイン名を非表示に
// ─────────────────────────────
(function () {
  var _nativeAlert = window.alert;

  // モーダル DOM を遅延生成（1回のみ）/ 延迟创建 DOM（仅一次）
  var overlay, dialog;
  function ensureDOM() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.id = 'pawbon-modal-overlay';
    overlay.style.cssText =
      'display:none;position:fixed;inset:0;z-index:100000;' +
      'background:rgba(0,0,0,.45);justify-content:center;align-items:center;';

    dialog = document.createElement('div');
    dialog.style.cssText =
      'background:#fff;border-radius:14px;width:270px;max-width:85vw;' +
      'text-align:center;overflow:hidden;font-family:-apple-system,system-ui,sans-serif;' +
      'box-shadow:0 8px 32px rgba(0,0,0,.18);';

    // ヘッダー（ロゴ + タイトル）/ 头部（Logo + 标题）
    var header = document.createElement('div');
    header.style.cssText = 'padding:20px 16px 4px;';
    header.innerHTML =
      '<div style="font-size:22px;margin-bottom:4px;">\u{1F43E}</div>' +
      '<div style="font-size:17px;font-weight:600;color:#1a1a1a;">PawBon</div>';

    // メッセージ本文 / 消息正文
    var body = document.createElement('div');
    body.id = 'pawbon-modal-body';
    body.style.cssText =
      'padding:8px 16px 20px;font-size:13px;line-height:1.5;color:#444;' +
      'white-space:pre-wrap;word-break:break-word;';

    // 区切り線 + OK ボタン / 分割线 + OK 按钮
    var btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'border-top:1px solid #e5e5e5;';
    var btn = document.createElement('button');
    btn.id = 'pawbon-modal-btn';
    btn.textContent = 'OK';
    btn.style.cssText =
      'width:100%;padding:12px;border:none;background:none;' +
      'font-size:17px;font-weight:600;color:#007aff;cursor:pointer;' +
      '-webkit-tap-highlight-color:transparent;';
    btnWrap.appendChild(btn);

    dialog.appendChild(header);
    dialog.appendChild(body);
    dialog.appendChild(btnWrap);
    overlay.appendChild(dialog);
  }

  // resolve 関数を保持 / 保持 resolve 函数
  var _resolve = null;

  function showModal(msg) {
    ensureDOM();
    // body にまだ追加されていなければ追加 / 如果还未添加到 body 则追加
    if (!overlay.parentNode) document.body.appendChild(overlay);

    document.getElementById('pawbon-modal-body').textContent = msg;
    overlay.style.display = 'flex';

    return new Promise(function (resolve) {
      _resolve = resolve;
      var btn = document.getElementById('pawbon-modal-btn');
      // リスナーを差し替え / 替换监听器
      var newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', closeModal);
    });
  }

  function closeModal() {
    overlay.style.display = 'none';
    if (_resolve) { _resolve(); _resolve = null; }
  }

  // window.alert をオーバーライド / 覆盖 window.alert
  window.alert = function (msg) {
    if (!document.body) {
      // DOM 未構築時はネイティブにフォールバック
      _nativeAlert(msg);
      return;
    }
    showModal(String(msg || ''));
  };
})();
