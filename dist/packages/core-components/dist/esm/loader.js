import { p as promiseResolve, b as bootstrapLazy } from './index-85d0fe0f.js';
export { s as setNonce } from './index-85d0fe0f.js';

/*
 Stencil Client Patch Esm v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map