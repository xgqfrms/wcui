const templateString = `
  <template id="wcui-button-template">
    <style>
      .wcui-button {
        display: inline-block;
        padding: 4px 20px;
        font-size: 14px;
        line-height: 1.5715;
        font-weight: 400;
        border: 1px solid #1890ff;
        border-radius: 2px;
        background-color: #1890ff;
        color: #fff;
        box-shadow: 0 2px #00000004;
        cursor: pointer;
      }
      .wcui-button-success {
        border: 1px solid #14fa4a;
        background-color: #14fa4a;
      }
      .wcui-button-warning {
        border: 1px solid #faad14;
        background-color: #faad14;
      }
      .wcui-button-danger {
        border: 1px solid #ff4d4f;
        background-color: #ff4d4f;
      }
    </style>
    <div id="wcui-button">
      <slot name="text">默认按钮</slot>
    </div>
  </template>
`;

// 继承 HTMLElement 类
class Button extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  init() {
    // types
    this.types = {
      primary: 'wcui-button',
      success: 'wcui-button-success',
      warning: 'wcui-button-warning',
      danger: 'wcui-button-danger',
    };
    this.defaultType = 'wcui-button';
    // 创建 DOM 模版
    if(!document.querySelector(`#wcui-button-template`)) {
      document.body.insertAdjacentHTML(`beforeend`, templateString);
    }
    const template = document.querySelector(`#wcui-button-template`);
    // console.log('\ntemplate =', template);
    // 克隆一份, 防止重复使用造成污染
    const content = template.content.cloneNode(true);
    // 获取 template DOM
    this.btn = content.querySelector('#wcui-button');
    this.btn.classList.add(this.defaultType);
    // 开启 Shadow DOM
    const shadow = this.attachShadow({
      mode: 'open',
    });
    shadow.appendChild(content);
  }
  // ✅ 必须使用 observedAttributes 指定要观察值会变化的 props, 不然 attributeChangedCallback 不会执行
  static get observedAttributes() {
    return ['type', 'callback'];
  }
  // 生命周期方法 attributeChangedCallback
  // 当 custom element 增加、删除、修改`自身属性`时，被调用。
  attributeChangedCallback(prop, oldValue, newValue) {
    // console.log('👻 prop =', prop);
    // console.log('oldValue, newValue =', oldValue, newValue);
    this[prop] = newValue;
    this.render();
  }
  render() {
    // console.log('this.type =', this.type);
    this.btn.className = `wcui-button ${this.types[this.type]}`;
    // console.log('this.callback =', this.callback, window[`${this.callback}`])
    if(this.callback) {
      this.btn.addEventListener('click', () => {
        // js function name string to function ❌
        // this.callback(this.type);
        window[`${this.callback}`](this.type);
      });
    } else {
      console.log('❌ no callback passed');
    }
  }
}

export default Button;
