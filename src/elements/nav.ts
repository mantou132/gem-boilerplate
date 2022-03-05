import { GemElement, html, customElement } from '@mantou/gem';

import routes from 'src/routes';

import '@mantou/gem/elements/link';

@customElement('app-nav')
export class Nav extends GemElement {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          gap: 0.5em;
          justify-content: center;
        }
        gem-active-link {
          cursor: pointer;
        }
        gem-active-link:where([data-active], :--active) {
          color: green;
        }
      </style>
      <gem-active-link .route=${routes.home}>Home</gem-active-link>
      <gem-active-link .route=${routes.about}>About</gem-active-link>
    `;
  }
}
