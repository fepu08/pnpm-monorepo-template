import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Express App', () => {
  describe('GET /', () => {
    it('should return Hello World message', async () => {
      const response = await request(app).get('/').expect(200);

      expect(response.body).toEqual({ message: 'Hello World!' });
    });
  });

  describe('404 handling', () => {
    it('should return 404 for non-existent routes', async () => {
      await request(app).get('/non-existent').expect(404);
    });
  });
});
