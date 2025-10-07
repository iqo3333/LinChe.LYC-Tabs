# 브라우저 호환성

이 웹사이트는 HTML5, CSS3(글래스 효과 포함), ES6 JavaScript 및 일부 고급 CSS 기능(`backdrop-filter`, `will-change` 등)으로 제작되었습니다.

모든 기능과 시각 효과가 제대로 작동하려면 최소 지원 브라우저 버전은 다음과 같습니다.

| 기능                                            | Chrome | Edge (Chromium) | Safari | IE           |
| --------------------------------------------- | :----: | :-------------: | :----: | :---------: |
| ES6 문법 (`const/let`, 화살표 함수, 템플릿 리터럴) | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 10+</span> | <span style="color:red">❌ 지원 안됨</span> |
| 유니코드 정규식 (`\p{L}`, `\p{N}` 도메인/키워드 검사용) | <span style="color:green">✅ 64+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:red">❌ 지원 안됨</span> |
| `backdrop-filter` / `-webkit-backdrop-filter` | <span style="color:green">✅ 76+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 지원 안됨</span> |
| `will-change`                                 | <span style="color:green">✅ 36+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 부분 지원</span> |
| Flex 레이아웃                                 | <span style="color:green">✅ 29+</span> | <span style="color:green">✅ 12+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 기본 지원</span> |
| MutationObserver                              | <span style="color:green">✅ 11+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:orange">⚠️ 부분 지원</span> |
| CSS 변수 (`var(--dynamic-text-color)`)          | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 지원 안됨</span> |

⚠️ 주의 사항:

* IE 브라우저는 ES6, CSS 변수, Unicode 정규식을 **지원하지 않습니다**. 일부 기능이 작동하지 않을 수 있습니다.  
* IE에서는 `backdrop-filter`가 지원되지 않아 글래스 효과가 나타나지 않습니다.  
* 구버전 Safari (<12) 및 Chromium Edge (<79)에서는 Unicode 도메인이나 키워드를 제대로 인식하지 못합니다.  
* 오래된 브라우저에서도 웹사이트를 열 수 있지만 시각 효과와 입력 검증 기능이 제한될 수 있습니다.  

최적의 경험과 애니메이션 효과를 위해 권장 브라우저: **Chrome 100+ / Safari 15+ / Edge 100+**  

⚠️ 경고: 이 보고서는 "Ver.8.1.0" 및 이전 버전에 적용됩니다. 이후 버전과의 호환성은 **보장되지 않습니다**.
