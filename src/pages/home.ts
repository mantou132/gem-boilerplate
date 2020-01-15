import { GemElement, html, customElement, connectStore, repeat } from '@mantou/gem';

import { posts, fetchPosts } from 'src/store/posts';

@customElement('app-home')
@connectStore(posts)
export class Home extends GemElement {
  mounted() {
    fetchPosts();
  }
  render() {
    return html`
      ${posts.loading
        ? 'loading...'
        : html`
            <ul>
              ${repeat(
                posts.list,
                ({ id }) => id,
                ({ body }) => html`
                  <li>${body}</li>
                `,
              )}
            </ul>
          `}
    `;
  }
}
