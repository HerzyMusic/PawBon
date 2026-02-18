/**
 * ═══════════════════════════════════════════════
 * PawBon 元気チェック — LIFF 共通設定
 * config.js
 *
 * ★★★ このファイルだけ編集すれば全ページに反映 ★★★
 * ═══════════════════════════════════════════════
 */

const PAWBON_CONFIG = {

  // ─────────────────────────────
  // ① GAS デプロイURL（/exec 結尾）
  // ─────────────────────────────
  GAS_URL: 'https://aaa.gashi.workers.dev/',

  SUPABASE_URL: 'https://jzkihezfmptrhfyiqqxk.supabase.co',
  SUPABASE_KEY: 'sb_publishable_vtd1CFDs_9GAVawJVTOWsQ_qp-fr2HY',
  
  // ─────────────────────────────
  // ② LIFF ID（6個）
  //   LINE Developers → LIFF タブで取得
  // ─────────────────────────────
  LIFF_ID: {
    register:    '2009150735-QVZVEgQg',
    familyJoin:  '2009150735-NwzuWNub',
    worry:       '2009150735-o8ZaIkmY',
    report:      '2009150735-xVqRCfBp',
    family:      '2009150735-zbmCgJZv',
    settings:    '2009150735-GT1YvHUH',
  },

    // ─────────────────────────────
  // ④ LINE 公式アカウント
  // ─────────────────────────────
  LINE_BOT_ID: '@689imzld',   // 例: @123abcde
  LINE_ADD_FRIEND_URL: 'https://line.me/R/ti/p/@689imzld',

  // ─────────────────────────────
  // ⑤ LIFF ページのベースURL（GitHub Pages）
  // ─────────────────────────────
   LIFF_BASE_URL: 'https://herzymusic.github.io/PawBon/liff/',


  // ─────────────────────────────
  // ③ デバッグモード
  //   true: LIFF外（PCブラウザ等）でも動作確認可能
  //   false: LINE内のみ動作（本番用）
  // ─────────────────────────────
  DEBUG: true,

};
