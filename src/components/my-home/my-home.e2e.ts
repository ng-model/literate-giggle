import { newE2EPage } from '@stencil/core/testing';

describe('my-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-home></my-home>');

    const element = await page.find('my-home');
    expect(element).toHaveClass('hydrated');
  });
});
