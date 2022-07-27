import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = '0.0.1';

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This version is <mark>v${this.version}</mark>.</p>
    `;
  }
}