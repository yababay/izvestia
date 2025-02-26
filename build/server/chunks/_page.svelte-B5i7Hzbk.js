import { m as bind_props } from './index2-CytRkjZz.js';
import { A as Alert } from './Alert-uKTUQdVj.js';
import './attributes-BeaNKpgU.js';
import './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  let data = $$props["data"];
  const { status } = data;
  Alert($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Выпуск за это число не найден.`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B5i7Hzbk.js.map
