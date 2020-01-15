import { GemElement, html, customElement } from '@mantou/gem';
import '@mantou/gem/elements/link';

import routes from 'src/routes';

@customElement('app-nav')
export class Nav extends GemElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          text-align: center;
        }
        gem-active-link {
          display: inline-block;
        }
        gem-active-link:hover {
          cursor: pointer;
        }
        gem-active-link[active] {
          text-decoration: underline;
          color: green;
        }
      </style>
      <gem-active-link .route=${routes.home}>Home</gem-active-link>
      <gem-active-link .route=${routes.about}>About</gem-active-link>
    `;
  }
}
