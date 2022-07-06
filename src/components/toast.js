
class Toast extends HTMLElement {
  constructor() {
      super();
      this.init();
  }
  // ✅ 必须指定要观察值会变化的 props, 不然 attributeChangedCallback 不会执行
  static get observedAttributes() {
    return ['content']
  }
  // 当 custom element 增加、删除、修改`属性`时，被调用
  attributeChangedCallback(prop, oldValue, newValue) {
    this[prop] = newValue;
    this.reRender();
  }
  reRender() {
    this.contentWrapper.innerText = this.content;
    // this.contentWrapper.textContent = this.content;
  }
  init() {
    // Shadow DOM
    const shadow = this.attachShadow({
      mode: 'open',
    });
    // CSS
    const style = this.createStyle();
    shadow.appendChild(style);
    // DOM
    const template = this.createTemplate();
    shadow.appendChild(template);
    // console.log('Toast init finished✅');
  }
  createTemplate() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toast-wrapper');

    const contentWrapper = document.createElement('span');
    contentWrapper.setAttribute('class', 'toast-content-wrapper');

    const textContent = this.getAttribute('content');
    contentWrapper.textContent = textContent;
    wrapper.appendChild(contentWrapper);
    // class 全局变量
    this.wrapper = wrapper;
    this.contentWrapper = contentWrapper;
    return wrapper;
  }
  createStyle() {
    const show = this.getAttribute('show');
    console.log('show =', show);
    const style = document.createElement('style');
    style.textContent = `
      .toast-wrapper {
          box-sizing: content-box;
          padding: 5px 20px;
          text-align: center;
          position: fixed;
          left: 50%;
          transform: translate(-50%, 0);
          top: 40px;
          border: solid 1px #eee;
          border-radius: 10px;
          user-select: none;
          color: #0060ff;
          border-color: #0060ff;
          background-color: #fff;
      }
    `;
    return style;
  }
}

export default Toast;