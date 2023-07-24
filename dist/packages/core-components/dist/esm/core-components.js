import { p as promiseResolve, b as bootstrapLazy } from './index-b220d619.js';
export { s as setNonce } from './index-b220d619.js';

/*
 Stencil Client Patch Browser v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["osui-button",[[1,"osui-button"]]],["osui-card",[[1,"osui-card",{"alignment":[1],"reversecolumn":[4],"border":[1],"backgroundcolor":[1],"showheader":[4],"showContent":[4,"show-content"],"showFooter":[4,"show-footer"]}]]]], options);
});

//# sourceMappingURL=core-components.js.map