import { GemElement, html } from '@mantou/gem';

class Home extends GemElement {
  render() {
    return html`
      Home Page
    `;
  }
}

customElements.define('app-home', Home);
