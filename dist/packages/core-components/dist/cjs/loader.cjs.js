'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-acf58548.js');

/*
 Stencil Client Patch Esm v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["osui-button.cjs",[[1,"osui-button"]]],["osui-card.cjs",[[1,"osui-card",{"alignment":[1],"reversecolumn":[4],"border":[1],"backgroundcolor":[1],"showheader":[4],"showContent":[4,"show-content"],"showFooter":[4,"show-footer"]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map