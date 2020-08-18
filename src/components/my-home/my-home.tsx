import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-home',
  styleUrl: 'my-home.css',
  shadow: true,
})
export class MyHome {

  @Prop() first: string;

  render() {
    return (
      <Host>
        <div>Hello {this.first}</div>
        <slot></slot>
      </Host>
    );
  }

}
