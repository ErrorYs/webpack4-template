import './index.scss'
import _mm from 'util/mm.js'
import _userServe from 'service/user-serve.js'
const nav = {
  //初始化
  init: function () {
    this.bindEvent()
    this.loadUserinfo()
    this.getshopcart()
    return this
  },
  bindEvent: function () {
    //登录
    $('.js-login').click(function () {
      window.location.href = '../../pages/page1/index.html'
    })
    //跳转到注册页面
    $('.js-register').click(function () {
      window.location.href = '../../pages/page1/index.html'
    })
    //退出登录
    $('.js-logout').click(function () {
      _userServe.logout(function (res) {
        if (res.code === 0) {
          window.location.reload()
        }
      }, function () {
        _mm.errorTips()
      })
    })
  },
  loadUserinfo: function () {
    _userServe.getuserinfo(function (res) {
      if (res.code === 1) {
        $('.login-in').hide()
        $('.login-out').show()
      } else {
        $('.login-in').show()
        $('.login-out').hide()
      }
    })
  },
  getshopcart: function () {
    _userServe.getshopcart(function (res) {
      if (res.code === 1) {
        $('.cartcount').text(0)
      }
    })
  }
}
export default nav.init()
