import { p as push, k as fallback, m as bind_props, f as pop, j as slot } from './index2-CytRkjZz.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Submit($$payload, $$props) {
  let label = fallback($$props["label"], "Сохранить"), back = fallback($$props["back"], ""), formaction = fallback($$props["formaction"], "");
  $$payload.out += `<div class="text-end w-100 mt-2"><!---->`;
  slot($$payload, $$props, "options", {}, () => {
    if (back) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a class="btn btn-primary me-2"${attr("href", back)} rel="external">Вернуться</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  });
  $$payload.out += `<!----> <button class="btn btn-primary" type="submit"${attr("formaction", formaction)}><!---->`;
  slot($$payload, $$props, "label", {}, () => {
    $$payload.out += `${escape_html(label)}`;
  });
  $$payload.out += `<!----></button></div>`;
  bind_props($$props, { label, back, formaction });
}
const idByName = (name) => `id-for-${name}`;
const descrByName = (name) => `id-for-${name}-descr`;
function Textarea($$payload, $$props) {
  push();
  let name = $$props["name"], value = fallback($$props["value"], ""), placeholder = fallback($$props["placeholder"], ""), rows = fallback($$props["rows"], 3), maxlength = fallback($$props["maxlength"], 5e4), id = fallback($$props["id"], () => idByName(name), true), descr = fallback($$props["descr"], () => descrByName(name), true), disabled = fallback($$props["disabled"], false);
  $$payload.out += `<textarea class="form-control w-100 h-100"${attr("rows", rows)}${attr("name", name)}${attr("placeholder", placeholder)}${attr("maxlength", maxlength)}${attr("disabled", disabled, true)}${attr("id", id)}${attr("aria-describedby", descr)}>`;
  const $$body = escape_html(value);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea>`;
  bind_props($$props, {
    name,
    value,
    placeholder,
    rows,
    maxlength,
    id,
    descr,
    disabled
  });
  pop();
}

export { Submit as S, Textarea as T };
//# sourceMappingURL=Textarea-DKawaapf.js.map
