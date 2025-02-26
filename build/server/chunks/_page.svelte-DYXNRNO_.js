import { p as push, l as head, m as bind_props, f as pop, k as fallback, o as ensure_array_like, j as slot, q as stringify } from './index2-CytRkjZz.js';
import showdown from 'showdown';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { T as Textarea, S as Submit } from './Textarea-DKawaapf.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Article($$payload, $$props) {
  push();
  let readme = $$props["readme"];
  const converter = new showdown.Converter();
  const html$1 = converter.makeHtml(readme);
  $$payload.out += `<article class="svelte-717uf7">${html(html$1)}</article>`;
  bind_props($$props, { readme });
  pop();
}
function Item($$payload, $$props) {
  let prefix = fallback($$props["prefix"], ""), postfix = fallback($$props["postfix"], ""), num = $$props["num"], active = fallback($$props["active"], false);
  $$payload.out += `<li class="page-item"><a rel="external"${attr("class", `page-link ${stringify([active ? "active" : ""].filter(Boolean).join(" "))}`)}${attr("href", `${prefix}/${num}${postfix}`)}${attr("aria-label", "" + num)}>${escape_html(num)}</a></li>`;
  bind_props($$props, { prefix, postfix, num, active });
}
function Limit($$payload, $$props) {
  let num = $$props["num"], prefix = $$props["prefix"], postfix = $$props["postfix"];
  const title = num === 1 ? "В начало" : `В конец (${num})`;
  $$payload.out += `<li class="page-item"><a rel="external"${attr("title", title)} class="page-link"${attr("href", `${prefix}/${num}${postfix}`)}${attr("aria-label", "" + num)}>`;
  if (num === 1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span aria-hidden="true">├─</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span aria-hidden="true">─┤</span>`;
  }
  $$payload.out += `<!--]--></a></li>`;
  bind_props($$props, { num, prefix, postfix });
}
function Pagination($$payload, $$props) {
  push();
  const paginationHalf = 10;
  const doubleHalf = paginationHalf * 2 + 1;
  let count = $$props["count"], current = fallback($$props["current"], 1), prefix = fallback($$props["prefix"], ""), postfix = fallback($$props["postfix"], "");
  const noDecorations = count <= doubleHalf;
  let pages = new Array(noDecorations ? count : doubleHalf);
  let min = current - paginationHalf;
  while (min < 1) min++;
  for (let i = 0; i < doubleHalf; i++) {
    pages[i] = i + min;
  }
  while (pages[pages.length - 1] > count) pages.pop();
  while (pages.length < doubleHalf) {
    const page = pages[0] - 1;
    if (page === 0) break;
    pages = [page, ...pages];
  }
  let leftLimit = !noDecorations && pages[0] !== 1;
  let rightLimit = !noDecorations && pages[pages.length - 1] !== count;
  if (count > 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(pages);
    $$payload.out += `<nav aria-label="pagination" class="w-100 d-flex align-items-center justify-content-end gap-3 me-5"><ul class="pagination">`;
    if (leftLimit) {
      $$payload.out += "<!--[-->";
      Limit($$payload, { num: 1, prefix, postfix });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let num = each_array[$$index];
      Item($$payload, {
        num,
        active: +num === +current,
        prefix,
        postfix
      });
    }
    $$payload.out += `<!--]--> `;
    if (rightLimit) {
      $$payload.out += "<!--[-->";
      Limit($$payload, { num: count, prefix, postfix });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></ul> <!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></nav>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p> </p>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { count, current, prefix, postfix });
  pop();
}
function Publisher($$payload, $$props) {
  let date = $$props["date"], href = $$props["href"], description = $$props["description"];
  $$payload.out += `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#publisher">Публикация</button> <div class="modal fade" id="publisher" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><form method="post"><div class="modal-header"><h1 class="modal-title fs-5" id="staticBackdropLabel">Подготовка к публикации</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><input type="hidden" name="date"${attr("value", date)}> <input type="hidden" name="href"${attr("value", href)}> <input type="hidden" name="description"${attr("value", description)}> `;
  Textarea($$payload, { name: "topic", rows: 20 });
  $$payload.out += `<!----></div> <div class="modal-footer">`;
  Submit($$payload, { label: "Создать" });
  $$payload.out += `<!----></div></form></div></div></div>`;
  bind_props($$props, { date, href, description });
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const {
    content,
    id,
    page,
    count,
    date,
    issue,
    year,
    local
  } = data;
  const postfix = `?date=${date}`;
  const prefix = `/view/${year}/${issue}`;
  let { body, raw } = content;
  const href = `https://yandex.ru/archive/catalog/${id}/${page}`;
  const edit = `/edit/${year}/${issue}/${page}`;
  const description = `«Известия…», №${issue} за ${new Date(date).toLocaleString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} C. ${page}.`;
  const readme = body || raw;
  raw = `# Страница еще не обработана

${raw}`;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script src="/publish.js" defer><\/script><!---->`;
  });
  Pagination($$payload, {
    count,
    current: page,
    prefix,
    postfix,
    children: ($$payload2) => {
      $$payload2.out += `<ul class="pagination ms-5">`;
      if (local) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li class="page-item"><a target="_blank"${attr("href", edit)} title="Править" aria-label="Править"><i class="bi bi-pencil p-2"></i></a></li> <li class="page-item"><a target="_blank" href="/channel" title="Управление каналом" aria-label="Управление каналом"><i class="bi bi-telegram p-2"></i></a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <li class="page-item"><a${attr("href", href)} target="_blank" title="Источник в Яндекс-архиве" aria-label="Источник в Яндекс-архиве"><i class="bi bi-link p-2"></i></a></li></ul>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  if (local) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-3 pe-3 text-end w-100">`;
    Publisher($$payload, { date, description, href });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  Article($$payload, { readme });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DYXNRNO_.js.map
