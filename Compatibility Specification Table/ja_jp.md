# ブラウザ互換性

このウェブサイトは、HTML5、CSS3（グラスモーフィズム効果を含む）、ES6 JavaScript、および一部の高度な CSS 機能（`backdrop-filter`、`will-change` など）を使用して構築されています。

機能と効果を完全に表示するため、最低サポートブラウザは以下の通りです：

| 機能 | Chrome | Edge (Chromium) | Safari |
|------|:------:|:---------------:|:------:|
| ES6 構文 (`const/let`, アロー関数, テンプレート文字列) | 49+ | 15+ | 10+ |
| Unicode 正規表現 (`\p{L}`, `\p{N}` ドメイン検出用) | 64+ | 79+ | 11+ |
| `backdrop-filter` / `-webkit-backdrop-filter` | 76+ | 79+ | 9+ |
| `will-change` | 36+ | 79+ | 9+ |
| Flex レイアウト | 29+ | 12+ | 9+ |

⚠️ 注意:  
- 古い Safari (<11) と Chromium Edge (<79) では日本語や Unicode ドメインを正しく認識できません。  
- `backdrop-filter` は Chrome 76+ で完全にグラスモーフィズム効果を表示できます。  
- 古いブラウザでもサイトは表示可能ですが、一部の視覚効果や入力検証機能が制限される場合があります。

**Chrome 100+ / Safari 15+ / Edge 100+** の使用を推奨します。
