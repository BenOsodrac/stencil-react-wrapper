import { p as promiseResolve, b as bootstrapLazy } from './index-b220d619.js';
export { s as setNonce } from './index-b220d619.js';

/*
 Stencil Client Patch Esm v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["osui-button",[[1,"osui-button"]]],["osui-card",[[1,"osui-card",{"alignment":[1],"reversecolumn":[4],"border":[1],"backgroundcolor":[1],"showheader":[4],"showContent":[4,"show-content"],"showFooter":[4,"show-footer"]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map