javascript:(function(){
  const doc_regex = new RegExp("doc/api/*");

  document.querySelectorAll('.file').forEach(
    function(fileElement, _key, _listObj, _argument){
      const fileName = fileElement.querySelector('.file-info > a').innerText;
      if (doc_regex.test(fileName)) {
        fileElement.style.display = 'none'
      }
      const loadButton = fileElement.querySelector('.load-diff-button');
      if (loadButton && !doc_regex.test(fileName)) {
        loadButton.dispatchEvent(new Event('click', { bubbles: true }))
      }
    }
  )
}())
