document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('getsite').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let tab = tabs[0]
      let url = tab.url
      let title = tab.title
      let Re = ''
      let now = document.getElementById('contents').value
      if (now == '') {
        Re = title + '\n' + url
      } else {
        Re = now + '\n' + title + '\n\n' + url
      }
      document.getElementById('contents').value = Re
    })
  })
})
