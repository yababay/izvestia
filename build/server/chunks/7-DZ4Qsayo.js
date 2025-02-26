import { g as getConnection } from './connection-wWuHO8tR.js';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const getPage = async (days) => {
  const today = /* @__PURE__ */ new Date();
  today.setDate(today.getDate() + days);
  const iso = today.toISOString();
  const arr = /^\d\d\d\d-(\d\d-\d\d)/.exec(iso) || [];
  const [_, monthDay] = arr;
  if (!monthDay) throw "bad day";
  const client = await getConnection();
  const pattern = `topic:*${monthDay}:*`;
  const keys = await client.keys(pattern);
  return {
    page: days,
    topics: await Promise.all(keys.map((key) => client.get(key))).then((topics) => topics.map((body, i) => ({ body, key: keys[i] })))
  };
};
const load = async ({ params }) => {
  const { days } = params;
  return getPage(+days);
};
const actions = {
  save: async ({ request, params }) => {
    const data = await request.formData();
    const topic = data.get("topic")?.toString().trim();
    const key = data.get("key")?.toString().trim();
    if (!(key && topic)) throw "no key or topic";
    const client = await getConnection();
    await client.set(key, topic);
    const [_, date, id] = /.*\:\d{4}\-([\d\-]+)\:(\d+)/.exec(key) || [];
    if (!(date && id)) throw "no date or id in the key";
    await client.sAdd(`approved:${date}`, +id + "");
    const { days } = params;
    return getPage(+days);
  },
  remove: async ({ request, params }) => {
    const data = await request.formData();
    const key = data.get("key")?.toString().trim();
    if (!key) throw "no key to remove";
    const client = await getConnection();
    await client.del(key);
    const { days } = params;
    return getPage(+days);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CikX0eCI.js')).default;
const server_id = "src/routes/(bare)/channel/[days]/+page.server.ts";
const imports = ["_app/immutable/nodes/7.CN-B1Mwg.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CNXGhc8a.js","_app/immutable/chunks/CDm-fcRQ.js","_app/immutable/chunks/Bk6oNkak.js","_app/immutable/chunks/CNUPf0XL.js","_app/immutable/chunks/L2j9VugY.js","_app/immutable/chunks/DIJY445-.js","_app/immutable/chunks/DixeOKT8.js","_app/immutable/chunks/iM5OWHQR.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/CHJ0qrLc.js","_app/immutable/chunks/BfnAL8MM.js","_app/immutable/chunks/Bi1xZXSP.js"];
const stylesheets = ["_app/immutable/assets/7.DRH9gNme.css","_app/immutable/assets/Alert.8vHm7ddm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-DZ4Qsayo.js.map
