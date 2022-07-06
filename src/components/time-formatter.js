
class TimeFormatter extends HTMLElement {
  constructor() {
    super();
    // 实例化，DOM loading ...
    console.log('实例化 TimeFormatter', 1);
  }
  // DOM 已经插入文档中
  connectedCallback() {
    console.log('this.innerHTML =', this.innerHTML);
    if (!this.rendered) {
      this.render();
      this.rendered = true;
      console.log('first render', 4);
    }
    console.log('this.innerHTML new =', this.innerHTML)
    console.log('DOM 插入文档', 5);
  }
  // 属性监听列表
  static get observedAttributes() {
    // console.log('watch', 6);
    return [
      'datetime',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'time-zone-name',
    ];
  }
  // 属性变化回调
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('change', 2);
    // this[name] = newValue;
    // 使用 this.getAttribute 自动读取，替代手动赋值操作
    this.render();
  }
  // 渲染逻辑
  render() {
    const time = this.getAttribute('datetime');
    const date = new Date(time || Date.now());
    const format = {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    };
    this.innerHTML = new Intl.DateTimeFormat("default", format).format(date);
    console.log('render', 3);
  }
}

export default TimeFormatter;
