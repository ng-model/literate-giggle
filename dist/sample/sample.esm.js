import { b as bootstrapLazy } from './index-f055ba64.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-fbfb7e9f.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["my-home",[[1,"my-home",{"first":[1]}]]]], options);
});
