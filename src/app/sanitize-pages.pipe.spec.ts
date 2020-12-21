import { SanitizePagesPipe } from './sanitize-pages.pipe';

describe('SanitizePagesPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizePagesPipe();
    expect(pipe).toBeTruthy();
  });
});
