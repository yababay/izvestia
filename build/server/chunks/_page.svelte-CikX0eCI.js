import { p as push, o as ensure_array_like, m as bind_props, f as pop, q as stringify } from './index2-CytRkjZz.js';
import { A as Alert } from './Alert-uKTUQdVj.js';
import { T as Textarea, S as Submit } from './Textarea-DKawaapf.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Card($$payload, $$props) {
  let body = $$props["body"], key = $$props["key"];
  $$payload.out += `<div class="card svelte-1ofwfji"><div class="card-body w-100"><form method="post"><input type="hidden" name="key"${attr("value", key)}> `;
  Textarea($$payload, { name: "topic", rows: 10, value: body });
  $$payload.out += `<!----> `;
  Submit($$payload, {
    formaction: "?/save",
    $$slots: {
      options: ($$payload2) => {
        $$payload2.out += `<span slot="options"><button class="btn btn-primary" type="submit" formaction="?/remove">Удалить</button></span>`;
      }
    }
  });
  $$payload.out += `<!----></form></div></div>`;
  bind_props($$props, { body, key });
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { topics, page } = data;
  const today = /* @__PURE__ */ new Date();
  today.setDate(today.getDate() + 3);
  const third = today.toLocaleString("ru-RU", { weekday: "long" });
  today.setDate(today.getDate() + 1);
  const fourth = today.toLocaleString("ru-RU", { weekday: "long" });
  today.setDate(today.getDate() + 1);
  const fifth = today.toLocaleString("ru-RU", { weekday: "long" });
  today.setDate(today.getDate() + 1);
  const sixth = today.toLocaleString("ru-RU", { weekday: "long" });
  const days = [
    "сегодня",
    "завтра",
    "послезавтра",
    third,
    fourth,
    fifth,
    sixth
  ];
  const each_array = ensure_array_like(days);
  $$payload.out += `<div class="d-flex align-items-center"><span class="nav-header svelte-1pgr77j">Предстоящие публикации: </span> <ul class="pagination ms-2"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let day = each_array[i];
    $$payload.out += `<li${attr("class", `page-item ${stringify([i === page ? "active" : ""].filter(Boolean).join(" "))}`)}><a${attr("href", `/channel/${i}`)} class="page-link" rel="external">${escape_html(day)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> `;
  if (topics.length) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(topics);
    $$payload.out += `<div class="w-75 d-flex flex-wrap justify-content-between gap-5 mt-5"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { body, key } = each_array_1[$$index_1];
      Card($$payload, { body, key });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    Alert($$payload, {
      look: "info",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Сообщения не найдены. <a href="/view" class="link-info">Подготовьте их.</a>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CikX0eCI.js.map
