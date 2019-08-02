import { GemElement, html } from '@mantou/gem';
import { posts, fetchPosts } from '../store/posts';

class Home extends GemElement {
  static observedStores = [posts];
  mounted() {
    fetchPosts();
  }
  render() {
    return html`
      <style>
        :host {
          width: 30em;
        }
      </style>
      <ul>
        ${posts.loading
          ? 'loading...'
          : posts.list.map(
              ({ body }) => html`
                <li>${body}</li>
              `,
            )}
      </ul>
    `;
  }
}

customElements.define('app-home', Home);
