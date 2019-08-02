import { createStore, updateStore } from '@mantou/gem';

export const posts = createStore({ list: [], loading: false });

export const fetchPosts = async () => {
  updateStore(posts, { loading: true });
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const list = await res.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateStore(posts, { list });
  } finally {
    updateStore(posts, { loading: false });
  }
};
