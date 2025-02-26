import { k as fallback, l as head, j as slot, m as bind_props } from './index2-CytRkjZz.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Bare($$payload, $$props) {
  let title = fallback($$props["title"], "");
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<div class="bare-layout svelte-tqjq0"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { title });
}

export { Bare as B };
//# sourceMappingURL=Bare-DGvO7Qqd.js.map
