import { g as getConnection, p as prependZeroes, b as getPage } from './connection-wWuHO8tR.js';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const csr = false;
const load = async ({ params, url }) => {
  const { year, issue, page } = params;
  const date = url.searchParams.get("date") || "";
  const props = await getPage(year, issue, page);
  const { hostname } = url;
  return { ...props, date, local: hostname === "localhost" };
};
const actions = {
  default: async ({ params, request, url }) => {
    const { year, issue, page } = params;
    const data = await request.formData();
    const body = data.get("topic")?.toString().trim();
    const date = data.get("date")?.toString().trim();
    const href = data.get("href")?.toString().trim();
    const description = data.get("description")?.toString().trim();
    if (!(body && date)) throw "no body or date";
    const client = await getConnection();
    await client.incr("topic:count");
    const id = await client.incr("topic:count");
    const key = `topic:${date}:${prependZeroes(id)}`;
    await client.set(key, `${body}

${description}

[Источник](${href})`);
    const props = await getPage(year, issue, page);
    const { hostname } = url;
    return { ...props, date, local: hostname === "localhost" };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  csr: csr,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DYXNRNO_.js')).default;
const server_id = "src/routes/(header)/view/[year]/[issue]/[page]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.UEB0tJHu.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CNXGhc8a.js","_app/immutable/chunks/Bk6oNkak.js","_app/immutable/chunks/CNUPf0XL.js","_app/immutable/chunks/DIJY445-.js","_app/immutable/chunks/iM5OWHQR.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/B0AT_9hh.js","_app/immutable/chunks/L2j9VugY.js","_app/immutable/chunks/BfnAL8MM.js","_app/immutable/chunks/CDm-fcRQ.js","_app/immutable/chunks/DixeOKT8.js","_app/immutable/chunks/Bi1xZXSP.js"];
const stylesheets = ["_app/immutable/assets/Article.DTjfKkyD.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-sI3VVV_n.js.map
