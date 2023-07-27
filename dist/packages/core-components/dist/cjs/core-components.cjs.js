'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-acf58548.js');

/*
 Stencil Client Patch Browser v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('core-components.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["osui-button.cjs",[[1,"osui-button"]]],["osui-card.cjs",[[1,"osui-card",{"alignment":[1],"reversecolumn":[4],"border":[1],"backgroundcolor":[1],"showheader":[4],"showContent":[4,"show-content"],"showFooter":[4,"show-footer"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=core-components.cjs.js.map