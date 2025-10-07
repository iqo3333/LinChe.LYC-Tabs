# ブラウザ互換性

このウェブサイトは、HTML5、CSS3（ガラス効果含む）、ES6 JavaScript、および一部の高度な CSS 機能（`backdrop-filter`、`will-change` など）を使用して構築されています。

すべての機能とビジュアル効果を正しく表示するための最小サポートブラウザは以下の通りです。

| 機能                                            | Chrome | Edge (Chromium) | Safari | IE           |
| --------------------------------------------- | :----: | :-------------: | :----: | :---------: |
| ES6 文法 (`const/let`, アロー関数, テンプレート文字列) | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 10+</span> | <span style="color:red">❌ 非対応</span> |
| Unicode 正規表現 (`\p{L}`, `\p{N}` ドメイン/キーワード検出用) | <span style="color:green">✅ 64+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:red">❌ 非対応</span> |
| `backdrop-filter` / `-webkit-backdrop-filter` | <span style="color:green">✅ 76+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 非対応</span> |
| `will-change`                                 | <span style="color:green">✅ 36+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 部分対応</span> |
| Flex レイアウト                                | <span style="color:green">✅ 29+</span> | <span style="color:green">✅ 12+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 基本対応</span> |
| MutationObserver                               | <span style="color:green">✅ 11+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:orange">⚠️ 部分対応</span> |
| CSS 変数 (`var(--dynamic-text-color)`)          | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 非対応</span> |

⚠️ 注意事項:

* IE 系ブラウザは ES6、CSS 変数、Unicode 正規表現を **サポートしていません**。一部の機能は動作しない可能性があります。  
* IE では `backdrop-filter` がサポートされないため、ガラス効果は表示されません。  
* 古い Safari (<12) および Chromium Edge (<79) では Unicode ドメインやキーワードを正しく認識できません。  
* 古いブラウザでもサイトは開けますが、視覚効果や入力検証機能が制限される場合があります。  

最適な体験とアニメーション効果を得るには、推奨ブラウザ: **Chrome 100+ / Safari 15+ / Edge 100+**  

⚠️ 注意: このレポートは「Ver.8.1.0」およびそれ以前のバージョンに適用されます。以降のバージョンでの互換性は **保証されません**。
