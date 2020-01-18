import { createStore, updateStore } from '@mantou/gem';

import * as api from 'src/service/api';

interface PostStore {
  list: api.Post[];
  loading: boolean;
}

export const posts = createStore<PostStore>({ list: [], loading: false });

export const fetchPosts = async () => {
  updateStore(posts, { loading: true });
  try {
    const list = await api.getPosts();
    updateStore(posts, { list });
  } finally {
    updateStore(posts, { loading: false });
  }
};
