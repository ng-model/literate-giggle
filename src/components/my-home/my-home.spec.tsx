import { newSpecPage } from '@stencil/core/testing';
import { MyHome } from './my-home';

describe('my-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHome],
      html: `<my-home></my-home>`,
    });
    expect(page.root).toEqualHtml(`
      <my-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-home>
    `);
  });
});
