document.addEventListener( 'DOMContentLoaded', function( event ) {
  marked.setOptions({
      breaks : true
  })
  var simplemde = new SimpleMDE({
    element: document.getElementById('editor-main'),
    autosave: {
      enabled: true,
      uniqueId: "markdownblogeditor",
      delay: 1000,
    },
    forceSync: true,
    spellChecker: false,
    toolbar: false,
    status: false,
    indentWithTabs: false
  })

  if ( document.getElementById('editor-main').value ) {
    previewMarked( document.getElementById('editor-main').value )
  }
  $('.CodeMirror').keyup(function() {
    var text = $('#editor-main').val()
    previewMarked( text )
  })
  document.getElementById('html-copy').addEventListener('click', copyhtml, false)
});


function previewMarked( text ) {
  $('#preview').html( marked( text ) )
  $('#preview pre code').each(function(i, block) {
      hljs.highlightBlock(block)
  });
}

function copyhtml() {
  var t = document.createElement('textarea')
  var input = document.getElementById('editor-main').value
  t.textContent = convertMarkdown( input )
  var b = document.getElementsByTagName('body')[0]
  b.appendChild(t)
  t.select()
  var copy = document.execCommand('copy')
  b.removeChild(t)
  return copy
}


function convertMarkdown( text ) {
  text = marked(text)
  /**
   * オレオレ変換をかける
   */
  return text
    .replace(/ id=".+?"/g,'')
    .replace(/<p><p>/g,'<p>')
    .replace(/<\/p><\/p>/g,'</p>')
    .replace(/<h1>/g,"\n<h1>")
    .replace(/<\/h1>/g,"</h1>\n")
    .replace(/<h2>/g,"\n<h2>")
    .replace(/<\/h2>/g,"</h2>\n")
    .replace(/<h3>/g,"\n<h3>")
    .replace(/<\/h3>/g,"</h3>\n")
    .replace(/<h4>/g,"\n<h4>")
    .replace(/<\/h4>/g,"</h4>\n")
    .replace(/<h5>/g,"\n<h5>")
    .replace(/<\/h5>/g,"</h5>\n")
    .replace(/<h6>/g,"\n<h6>")
    .replace(/<\/h6>/g,"</h6>\n")
    .replace('<!--more-->',"\n<!--more-->\n")
    .replace(/<pre>/g,"\n\n<pre>")
    .replace(/<\/pre>/g,"</pre>\n\n")
    .replace(/<p><a[^>]*?href="(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)"[^>]*?>(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)<\/a><\/p>/g,"\n$2\n")
}
