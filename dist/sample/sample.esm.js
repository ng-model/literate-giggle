import { b as bootstrapLazy } from './index-6e84d234.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-04eb29fc.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
