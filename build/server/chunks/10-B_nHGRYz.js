import { c as byDate } from './connection-wWuHO8tR.js';
import { r as redirect } from './index-DyoisQP2.js';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const load = async ({ params }) => {
  const { year } = params;
  let url = null;
  try {
    url = await byDate(year);
  } catch (err) {
    console.log(err);
    return { status: 404 };
  }
  throw redirect(302, url || "/");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B5i7Hzbk.js')).default;
const server_id = "src/routes/(header)/view/[year]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BlquaJGI.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CNXGhc8a.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/CHJ0qrLc.js","_app/immutable/chunks/BfnAL8MM.js","_app/immutable/chunks/DixeOKT8.js"];
const stylesheets = ["_app/immutable/assets/Alert.8vHm7ddm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-B_nHGRYz.js.map
