import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface WCUI {
  version: string;
}
@customElement('wcui-element')
export class WCUIElement extends LitElement implements WCUI {
  @property()
  version = '0.0.1';

  render() {
    return html`
      <h1>Welcome to the Lit Web Component!</h1>
      <p>This version is <mark>v${this.version}</mark>.</p>
    `;
  }
}