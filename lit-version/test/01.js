// import {LitElement, html} from 'lit';
import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2.2.8/all/lit-all.min.js';
// import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

// import {LitElement, html} from '../node_modules/lit/index.js';
// import {LitElement, html} from './node_modules/lit/index.js';

// customElements.define()
// https://lit.dev/docs/components/decorators/
// https://lit.dev/docs/components/properties/
export class MyElement extends LitElement {
  static properties = {
    version: '',
  };

  constructor() {
    super();
    this.version = '0.0.1';
  }

  render() {
    // html: template function, tagged template
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This version is <mark>v${this.version}</mark>.</p>
    `;
  }
}

customElements.define('my-element', MyElement);
