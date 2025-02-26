import { g as getConnection, a as getIssueKey, b as getPage } from './connection-wWuHO8tR.js';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const csr = false;
const load = async ({ params }) => {
  const { year, issue, page } = params;
  return await getPage(year, issue, page);
};
const actions = {
  default: async ({ params, request }) => {
    const { year, issue, page } = params;
    const key = `${getIssueKey(year, issue)}:page:${page}`;
    const data = await request.formData();
    const body = data.get("body")?.toString();
    if (!body) throw "no body";
    const client = await getConnection();
    await client.hSet(key, "body", body);
    await client.save();
    return await getPage(year, issue, page);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  csr: csr,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BfpsQg_z.js')).default;
const server_id = "src/routes/(bare)/edit/[year]/[issue]/[page]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.ZH8-UXLO.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CNXGhc8a.js","_app/immutable/chunks/Bk6oNkak.js","_app/immutable/chunks/DIJY445-.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/CNUPf0XL.js","_app/immutable/chunks/iM5OWHQR.js","_app/immutable/chunks/CHJ0qrLc.js","_app/immutable/chunks/BfnAL8MM.js","_app/immutable/chunks/DixeOKT8.js","_app/immutable/chunks/CDm-fcRQ.js","_app/immutable/chunks/Bi1xZXSP.js"];
const stylesheets = ["_app/immutable/assets/8.CCZk5cRG.css","_app/immutable/assets/Form.DjI1pf8O.css","_app/immutable/assets/Alert.8vHm7ddm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-BExTH0lN.js.map
