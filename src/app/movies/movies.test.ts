import { expect } from '@open-wc/testing';
import Movies from './movies.js';

describe('Movies', () => {
  it('<app-movies> is an instance of Movies', async () => {
    const element = document.createElement('app-movies');
    expect(element).to.be.instanceOf(Movies);
  });
});
