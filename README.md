# Markdown Blog Editor

Markdownでブログ書きたい俺の、オレオレブログエディタ

## こんな人におすすめ

Markdownで書いて  
→ HTMLに変換して  
→ ブログの投稿画面に貼り付けて  
→ 公開！！

…な人におすすめ

## Markdown→HTMLのオレオレ変換

- `h`タグにつくid属性の削除
	- 日本語の見出しの場合、idが`id="-"`のようになってしまい全然idじゃなくなるため
- `h`タグの上下に空行1つ
- `<!--more-->`タグの上下に空行1つ
- `<pre>`タグの前後に空行1つ
- URLのみの行はURLのみの行になるようにする（ブログカード対策）

## 利用ライブラリ

- [SimpleMDE - Markdown Editor](https://github.com/sparksuite/simplemde-markdown-editor)
	- Markdownエディタ部分
- [Marked](https://github.com/markedjs/marked)
	- Markdown → HTML変換
- [Bootstrap 4](https://github.com/twbs/bootstrap)
- [Highlight.js](https://github.com/isagalaev/highlight.js)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
- [jQuery](https://github.com/jquery/jquery)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
