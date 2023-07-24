import { p as promiseResolve, b as bootstrapLazy } from './index-85d0fe0f.js';
export { s as setNonce } from './index-85d0fe0f.js';

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
  return bootstrapLazy([], options);
});

//# sourceMappingURL=core-components.js.map