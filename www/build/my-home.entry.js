import { r as registerInstance, h, e as Host } from './index-f055ba64.js';

const myHomeCss = ":host{display:block}";

const MyHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", null, "Hello ", this.first), h("slot", null)));
    }
};
MyHome.style = myHomeCss;

export { MyHome as my_home };
