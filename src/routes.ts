import { html } from '@mantou/gem';
import { RouteItem } from '@mantou/gem/elements/route';

const home: RouteItem = {
  title: 'Home',
  pattern: '/',
  get content() {
    import(/* webpackPrefetch: true */ 'src/pages/home');
    return html`<app-home></app-home>`;
  },
};

const about: RouteItem = {
  title: 'About',
  pattern: '/about',
  get content() {
    import(/* webpackPrefetch: true */ 'src/pages/about');
    return html`<app-about></app-about>`;
  },
};

export default {
  home,
  about,
};
