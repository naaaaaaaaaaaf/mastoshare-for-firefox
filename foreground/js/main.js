load()
function load() {
  let an = ''
  for (let i = 0, length = localStorage.length; i < length; ++i) {
    an +=
      "<option value='" + localStorage[i] + "'>" + localStorage[i] + '</option>'
  }
  document.getElementById('instance').insertAdjacentHTML('beforeend', an)
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addlistbtn').addEventListener('click', function() {
    let addInstanceurl = document.getElementById('addlist').value
    let checkUrl =
      'https://' + document.getElementById('addlist').value + '/api/v1/instance'
    fetch(checkUrl)
      .catch(function() {
        msg =
          '<div class="alert alert-danger error" role="alert">不正なアドレスです。</div>'
        document.getElementById('error').insertAdjacentHTML('beforeend', msg)
      })
      .then(function(response) {
        if (response.ok) {
          let option = document.createElement('option')
          option.value = addInstanceurl
          option.text = addInstanceurl
          let listNumber = localStorage.length.toString()
          localStorage.setItem(listNumber, addInstanceurl)
          let target = document.getElementsByName('instance')[0]
          target.add(option)
          msg =
            '<div class="alert alert-info error" role="alert">追加しました。このリストはブラウザに保存されます</div>'
          document.getElementById('info').insertAdjacentHTML('beforeend', msg)
        } else {
          msg =
            '<div class="alert alert-danger error" role="alert">Mastodonインスタンス(v1.6.0以上)ではありません</div>'
          document.getElementById('error').insertAdjacentHTML('beforeend', msg)
        }
      })
  })

  document.getElementById('Toot').addEventListener('click', function() {
    let text = document.getElementById('contents').value
    let instanceUrl = document.getElementById('instance').value
    let openUrl = encodeURIComponent(text)
    if (instanceUrl === '') {
      msg =
        '<div class="alert alert-danger error" role="alert">共有するインスタンスを選択してください</div>'
      document.getElementById('error').insertAdjacentHTML('beforeend', msg)
    } else {
      window.open('https://' + instanceUrl + '/share?text=' + openUrl, '_blank')
    }
  })
  document.getElementById('del').addEventListener('click', function() {
    localStorage.clear()
    load()
  })
})
