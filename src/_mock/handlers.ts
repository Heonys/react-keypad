import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', async () => {
    return HttpResponse.json({ user: 'test' });
  }),
];