import { GemElement, html } from '@mantou/gem';

class About extends GemElement {
  render() {
    return html`
      About page
    `;
  }
}

customElements.define('app-about', About);
