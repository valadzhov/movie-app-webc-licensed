import { expect } from '@open-wc/testing';
import MovieComplex from './movie-complex.js';

describe('MovieComplex', () => {
  it('<app-movie-complex> is an instance of MovieComplex', async () => {
    const element = document.createElement('app-movie-complex');
    expect(element).to.be.instanceOf(MovieComplex);
  });
});
