import { request } from '@mantou/gem/helper/request';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export async function getPosts() {
  return request<Post[]>('/api/posts');
}
