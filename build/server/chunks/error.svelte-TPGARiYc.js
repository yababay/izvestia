import { e as escape_html } from './escaping-CqgfEcN3.js';
import { p as push, f as pop, h as getContext } from './index2-CytRkjZz.js';
import { s as stores } from './client-C4d8u1AB.js';
import './exports-CMz5gIbe.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-TPGARiYc.js.map
