import request from 'src/service/request';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  return request('/api/posts');
}
