import './index.scss'
if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}
console.log(1)
$('.box').css('background', 'red')
