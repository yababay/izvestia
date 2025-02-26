import { k as fallback, j as slot, m as bind_props, q as stringify } from './index2-CytRkjZz.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function Alert($$payload, $$props) {
  let look = fallback($$props["look"], "info"), center = fallback($$props["center"], true);
  $$payload.out += `<div${attr("class", `${stringify(`alert alert-${look} w-75`)} svelte-jnhjke ${stringify([center ? "text-center" : ""].filter(Boolean).join(" "))}`)} role="alert"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { look, center });
}

export { Alert as A };
//# sourceMappingURL=Alert-uKTUQdVj.js.map
