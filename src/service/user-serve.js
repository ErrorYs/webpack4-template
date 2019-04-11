import _mm from '../util/mm'

const _userServe = {
  logout: function (resolve, rejects) {
    _mm.request({
      url: '/logout',
      success: resolve,
      error: rejects
    })
  },
  getuserinfo: function (resolve, rejects) {
    _mm.request({
      url: '/userinfo',
      success: resolve,
      error: rejects
    })
  },
  getshopcart: function (resolve, rejects) {
    _mm.request({
      url: '/getshopcart',
      success: resolve,
      error: rejects
    })
  }
}
export default _userServe
