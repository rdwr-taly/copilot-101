/**
 * Tests for the main app and fact service
 */
import request from 'supertest';
import app from '../app.js';
import { getRandomFact, getAllFacts } from '../src/facts.js';

describe('Facts Service', () => {
  describe('GET /fact endpoint', () => {
    test('responds with 200 status code', async () => {
      const response = await request(app).get('/fact');
      expect(response.statusCode).toBe(200);
    });
    
    test('returns JSON with fact property', async () => {
      const response = await request(app).get('/fact');
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toHaveProperty('fact');
    });
    
    test('returns a fact string', async () => {
      const response = await request(app).get('/fact');
      expect(typeof response.body.fact).toBe('string');
      expect(response.body.fact.length).toBeGreaterThan(0);
    });
  });
  
  describe('Root endpoint', () => {
    test('responds with 200 and application info', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('endpoints');
    });
  });
  
  describe('404 handling', () => {
    test('responds with 404 for unknown routes', async () => {
      const response = await request(app).get('/non-existent-route');
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty('error', 'Not Found');
    });
  });
});

describe('Facts Module', () => {
  test('getRandomFact returns a string', () => {
    const fact = getRandomFact();
    expect(typeof fact).toBe('string');
    expect(fact.length).toBeGreaterThan(0);
  });
  
  test('getAllFacts returns an array of strings', () => {
    const facts = getAllFacts();
    expect(Array.isArray(facts)).toBe(true);
    expect(facts.length).toBeGreaterThan(0);
    expect(typeof facts[0]).toBe('string');
  });
  
  test('random fact is from the collection', () => {
    const fact = getRandomFact();
    const allFacts = getAllFacts();
    expect(allFacts).toContain(fact);
  });
  
  test('getAllFacts returns a new array, not the original', () => {
    const originalFacts = getAllFacts();
    const factsBefore = originalFacts.length;
    
    // Modify the returned array
    originalFacts.push('This is a test fact');
    
    // Get facts again and check if length unchanged
    const newFacts = getAllFacts();
    expect(newFacts.length).toBe(factsBefore);
    expect(originalFacts.length).toBe(factsBefore + 1);
  });
});
