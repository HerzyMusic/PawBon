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
  // ③ デバッグモード
  //   true: LIFF外（PCブラウザ等）でも動作確認可能
  //   false: LINE内のみ動作（本番用）
  // ─────────────────────────────
  DEBUG: true,

};
