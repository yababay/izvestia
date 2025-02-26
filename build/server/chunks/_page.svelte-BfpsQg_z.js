import { l as head, m as bind_props, p as push, f as pop, j as slot } from './index2-CytRkjZz.js';
import { A as Alert } from './Alert-uKTUQdVj.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { T as Textarea, S as Submit } from './Textarea-DKawaapf.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function Fieldset($$payload, $$props) {
  let legend = $$props["legend"];
  $$payload.out += `<fieldset class="svelte-1fan63e"><legend class="svelte-1fan63e">${escape_html(legend)}</legend> <section class="d-flex flex-column justify-content-between align-items-center m-0 w-100 h-100"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></section></fieldset>`;
  bind_props($$props, { legend });
}
function Form($$payload, $$props) {
  let legend = $$props["legend"];
  Fieldset($$payload, {
    legend,
    children: ($$payload2) => {
      $$payload2.out += `<form method="post" class="w-100 svelte-4o9ra5"><!---->`;
      slot($$payload2, $$props, "default", {}, null);
      $$payload2.out += `<!----></form>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { legend });
}
const oldToModern = (old) => old.replace(/ѣ/gi, "е").replace(/ѳ/gi, "ф").replace(/[іѵ]/gi, "и").replace(/аго[\s\.\,\!\?\;\:\-\)\"\»]/gi, "ого ").replace(/яся[\s\.\,\!\?\;\:\-\)\"\»]/gi, "еся ").replace(/ния[\s\.\,\!\?\;\:\-\)\"\»]/gi, "ние ").replace(/щия[\s\.\,\!\?\;\:\-\)\"\»]/gi, "щие ").replace(/кия[\s\.\,\!\?\;\:\-\)\"\»]/gi, "кие ").replace(/\sмiр/gi, " мир").replace(/ъ[\s\.\,\!\?\;\:\-\)\"\»]/gi, " ").replace(/ыя\s/gi, "ые ").replace(/iя\s/gi, "ие ").replace(/\sея\s/gi, " её ").replace(/\sоне\s/gi, " они ").replace(/\sразс/gi, " расс").replace(/\sбезс/gi, " бесс").replace(/\n/g, "\n\n");
function Editor($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { content, page, issue, date, id } = data;
  const legend = `№${issue} за ${date} г., стр. ${page}`;
  const href = `https://yandex.ru/archive/catalog/${id}/${page}`;
  const header = `###### ИЗВЕСТИЯ ПЕТРОГРАДСКОГО СОВЕТА <br> Рабочих депутатов

_№${issue}. ${date} года. Стр. ${page}_

<hr>

`;
  if (content) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="wrap svelte-hd6rtq">`;
    Form($$payload, {
      legend,
      children: ($$payload2) => {
        Textarea($$payload2, {
          name: "body",
          value: content.body || header + oldToModern(content.raw),
          rows: 35
        });
        $$payload2.out += `<!----> <input type="hidden" name="date"${attr("value", date)}> `;
        Submit($$payload2, {
          $$slots: {
            options: ($$payload3) => {
              $$payload3.out += `<span slot="options"><a class="btn btn-primary"${attr("href", href)} role="button" target="_blank">На Яндексе</a></span>`;
            }
          }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    Alert($$payload, {
      look: "danger",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Контент не найден`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { page, issue, date, id } = data;
  const description = `«Известия…», №${issue} за ${date} г. C. ${page}.`;
  const origin = `https://yandex.ru/archive/catalog/${id}/${page}`;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta name="description"${attr("content", description)}> <meta name="origin"${attr("content", origin)}> <script src="/publish.js" defer><\/script>`;
  });
  Editor($$payload, { data });
  bind_props($$props, { data });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BfpsQg_z.js.map
