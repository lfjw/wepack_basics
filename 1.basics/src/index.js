
import './index.css'
import './less.less'
import './sass.scss'

let title = require('./tit.txt');

console.log('title');

let logo = require('./image/vue.png')

let img = new Image()
img.src = logo.default;
document.body.appendChild(img)
