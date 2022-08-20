import { log } from "./left";
log();
// css和less
import "./style/index.css";
import "./style/index.less";
// 字体图标导入
import "./assets/fonts/iconfont.css";
// 图片

import big from "./assets/1.gif";
const img = document.createElement("img");
img.src = big;
document.body.appendChild(img);

import pngSrc from "./assets/small.png";
const img2 = document.createElement("img");
img2.src = pngSrc;
document.body.appendChild(img2);
// vue
import App from "./App.vue";
