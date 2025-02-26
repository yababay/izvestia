import { P as PUBLIC_CALENDAR_START } from './public-DwE-3akR.js';
import { r as redirect } from './index-DyoisQP2.js';

const CALENDAR_START = new Date(PUBLIC_CALENDAR_START);
const csr = false;
const load = ({ url }) => {
  let { pathname, searchParams } = url;
  if (/.*\/\d{4}$/.test(pathname)) {
    pathname += "-01-01";
    throw redirect(302, pathname);
  }
  const arr = /.*(\d{4}-\d{2}-\d{2})$/.exec(pathname) || [];
  let [_, ymd] = arr;
  if (!ymd) ymd = searchParams.get("date") || "";
  return { choosen: new Date(ymd ? ymd : CALENDAR_START) };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DwMSFOCt.js')).default;
const universal_id = "src/routes/(header)/view/+layout.ts";
const imports = ["_app/immutable/nodes/4.D6qYMbFk.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CNXGhc8a.js","_app/immutable/chunks/BfnAL8MM.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/Bk6oNkak.js","_app/immutable/chunks/CNUPf0XL.js","_app/immutable/chunks/CDm-fcRQ.js","_app/immutable/chunks/L2j9VugY.js","_app/immutable/chunks/DIJY445-.js","_app/immutable/chunks/iM5OWHQR.js","_app/immutable/chunks/DixeOKT8.js"];
const stylesheets = ["_app/immutable/assets/4.B8iYBVQB.css","_app/immutable/assets/WithAside.BrkHt9qk.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=4-C1EiEZvp.js.map
