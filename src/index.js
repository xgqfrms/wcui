import * as pkg from "../package.json";

window.wcui = `${pkg.name}@${pkg.version}`;
const style = `
  color: #0f0;
  background: #000;
  padding: 5px 10px;
  line-height: 1.5rem;
  font-size: 23px;
`;
console.log(`\n%cWCUI 🚀 ${window.wcui}\n`, style);

// TODO: auto get component's name using shell script, like element-ui
// 手动导入新组件
import Toast from './components/toast.js';
import Button from './components/button.js';
import TimeFormatter from './components/time-formatter.js';


// 注册自定义组件
if(window.customElements) {
  customElements.define('wcui-toast', Toast);
  customElements.define('wcui-button', Button);
  customElements.define("wcui-time-formatter", TimeFormatter);
}

console.log('npm run build');