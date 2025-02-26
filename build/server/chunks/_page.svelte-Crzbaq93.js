import { e as escape_html } from './escaping-CqgfEcN3.js';
import { A as Alert } from './Alert-uKTUQdVj.js';
import './index2-CytRkjZz.js';
import './attributes-BeaNKpgU.js';

function _page($$payload) {
  const greeting = `Здравствуйте`;
  Alert($$payload, {
    look: "info",
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(greeting)}`;
    },
    $$slots: { default: true }
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Crzbaq93.js.map
