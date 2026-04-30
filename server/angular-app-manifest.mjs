
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/homepage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/homepage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 596, hash: 'c05dbefde2c95509e06419b90d6681471bad9d607b8206efc8c9b9348670a293', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '86669490b06e29a7c2dbfe01f84ee1d2adfdca642dd87dc727e981bd0023b842', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7034, hash: '3d25c8464f8d46b096b175cd0da6878dfb783614507a4d26dd52a0d5e30104d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7TSEYAUY.css': {size: 71, hash: 'h9c2OpR/H+Q', text: () => import('./assets-chunks/styles-7TSEYAUY_css.mjs').then(m => m.default)}
  },
};
