import { render, html } from '@mantou/gem';
import '@mantou/gem/elements/route';
import '@mantou/gem/elements/title';

import './elements/nav';
import routes from './routes';

render(
  html`
    <style>
      html,
      body {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      app-nav {
        margin-top: 5em;
      }
    </style>
    <app-nav></app-nav>
    <gem-route .routes=${routes}></gem-route>
  `,
  document.body,
);
