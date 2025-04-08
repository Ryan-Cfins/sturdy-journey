import { describe, it, expect } from 'vitest';
import generateUUID from './index';

describe('generateUUID', () => {
  it('should generate a string in the correct format', () => {
    const uuid = generateUUID();
    const uuidRegex = /^[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{3}$/; // Matches 'xxx-yxxx-xxx' format
    expect(uuid).toMatch(uuidRegex);
  });

  it('should generate unique values on multiple calls', () => {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();
    expect(uuid1).not.toBe(uuid2);
  });
});
