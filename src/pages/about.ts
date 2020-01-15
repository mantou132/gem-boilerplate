import { GemElement, html, customElement } from '@mantou/gem';

@customElement('app-about')
export class About extends GemElement {
  render() {
    return html`
      <p>这是个模板 App</p>
      <p>包含 Route，Store 以及基于函数的 Action</p>
    `;
  }
}
