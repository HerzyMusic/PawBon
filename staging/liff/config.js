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
    family:      '2009150735-zbmCgJZv',
    settings:    '2009150735-GT1YvHUH',
  } : {
    // TEST チャネル / 测试频道
    register:    '2009188008-vZDZZycU',
    familyJoin:  '2009188008-FTihZzkt',
    worry:       '2009188008-0fXNW2aC',
    report:      '2009188008-87cLzkKc',
    family:      '2009188008-c4NLtOwb',
    settings:    '2009188008-HmSCR5ng',
  },

  // ─────────────────────────────
  // ③ LINE 公式アカウント — 全環境共通
  // ─────────────────────────────
  LINE_BOT_ID: '@pawbon',
  LINE_ADD_FRIEND_URL: 'https://line.me/R/ti/p/@pawbon',

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
