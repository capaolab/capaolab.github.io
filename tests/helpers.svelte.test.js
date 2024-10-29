import { expect, test } from 'vitest';
import * as helpers from '../src/lib/helpers.js';

test('capitalizeWord', () => {
    expect(helpers.capitalizeWord('hello word')).toBe('Hello Word');
    expect(helpers.capitalizeWord('nada-nada')).toBe('Nada-nada');
    expect(helpers.capitalizeWord('hello')).toBe('Hello');
    expect(helpers.capitalizeWord('helloCapao')).toBe('HelloCapao');
})