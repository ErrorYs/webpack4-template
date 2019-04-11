const BASE_URL = '/api'
const _mm = {
  request: function (param) {
    // let _this = this
    $.ajax({
      type: param.method || 'get',
      url: BASE_URL + param.url || '',
      data: param.data || '',
      dataType: param.type || 'json',
      success: function (response) {
        param.success(response)
      },
      error: function (err) {
        param.error(err)
      }
    })
  },
  getUrlParam: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  },
  successTips: function (msg) {
    alert(msg || '操作成功！')
  },
  // 错误提示
  errorTips: function (msg) {
    alert(msg || '哪里不对了~')
  },
  doLogin: function () {
    window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href)
  },
  goHome: function () {
    window.location.href = './index.html'
  }
}

export default _mm
