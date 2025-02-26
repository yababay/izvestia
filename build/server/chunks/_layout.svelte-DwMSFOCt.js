import { m as bind_props, k as fallback, l as head, j as slot, p as push, o as ensure_array_like, f as pop, q as stringify } from './index2-CytRkjZz.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as PUBLIC_MAIN_TITLE, P as PUBLIC_CALENDAR_START } from './public-DwE-3akR.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function WithHeader($$payload, $$props) {
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
  $$payload.out += `<div class="layout-with-header svelte-13gpu52"><header class="svelte-13gpu52"><!---->`;
  slot($$payload, $$props, "header", {}, null);
  $$payload.out += `<!----></header> <main class="svelte-13gpu52"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></main></div>`;
  bind_props($$props, { title });
}
function WithAside($$payload, $$props) {
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
  $$payload.out += `<div class="layout-with-aside svelte-lx5dlo"><aside class="svelte-lx5dlo"><!---->`;
  slot($$payload, $$props, "aside", {}, null);
  $$payload.out += `<!----></aside> <section class="svelte-lx5dlo"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></section></div>`;
  bind_props($$props, { title });
}
const DAY_IN_MILLIS = 24 * 36e5;
const YEAR_FROM = 1917;
const YEAR_TO = 1917;
const CALENDAR_START = new Date(PUBLIC_CALENDAR_START);
const MONTHS = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь"
];
class Calendar {
  #current;
  #prefix;
  constructor(date = /* @__PURE__ */ new Date(), prefix) {
    this.#current = date;
    this.#prefix = prefix;
  }
  get choosen() {
    return this.#current;
  }
  get year() {
    return this.#current.getFullYear();
  }
  toYear(year) {
    const date = new Date(this.#current);
    date.setFullYear(year);
    return this.pathname(date);
  }
  get weeks() {
    const { days } = this;
    const weeks = [];
    while (days.length) weeks.push(days.splice(0, 7));
    return weeks;
  }
  pathname(date) {
    return `${this.#prefix}/${date.toISOString().slice(0, 10)}`;
  }
  get next() {
    const { days } = this;
    const date = new Date(days.slice(-1)[0].getTime() + DAY_IN_MILLIS);
    const current = new Date(this.#current).getDate();
    date.setDate(current);
    return this.pathname(date);
  }
  get prev() {
    const { days } = this;
    const date = new Date(days[0].getTime() - DAY_IN_MILLIS);
    const current = new Date(this.#current).getDate();
    date.setDate(current);
    return this.pathname(date);
  }
  get month() {
    return this.days[15].getMonth();
  }
  get days() {
    const seed = this.#current;
    const month = seed.getMonth();
    const before = [seed];
    let current = seed;
    while (current.getMonth() === month) {
      current = new Date(current.getTime() - DAY_IN_MILLIS);
      before.push(current);
    }
    before.pop();
    current = before.slice(-1)[0];
    while (current.getDay() !== 1) {
      current = new Date(current.getTime() - DAY_IN_MILLIS);
      before.push(current);
    }
    current = seed;
    const after = [];
    while (current.getMonth() === month) {
      current = new Date(current.getTime() + 24 * 36e5);
      after.push(current);
    }
    after.pop();
    return [...before.reverse(), ...after];
  }
}
function Week($$payload, $$props) {
  push();
  let week = $$props["week"], calendar = $$props["calendar"];
  const { month, choosen } = calendar;
  const each_array = ensure_array_like(week);
  $$payload.out += `<tr><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let day = each_array[$$index];
    $$payload.out += `<td${attr("class", `td-square svelte-qtpl5d ${stringify([
      day.getMonth() === choosen.getMonth() && day.getDate() === choosen.getDate() ? "td-today" : "",
      day.getMonth() !== month ? "prev-month" : ""
    ].filter(Boolean).join(" "))}`)}><a${attr("href", calendar.pathname(day))} rel="external" class="svelte-qtpl5d">${escape_html(day.getDate())}</a></td>`;
  }
  $$payload.out += `<!--]--></tr>`;
  bind_props($$props, { week, calendar });
  pop();
}
function Years($$payload, $$props) {
  push();
  let calendar = $$props["calendar"];
  const years = [YEAR_FROM];
  for (let i = YEAR_FROM + 1; i <= YEAR_TO; i++) {
    years.push(i);
  }
  const { year, month } = calendar;
  const label = `${MONTHS[month]} ${year} г.`;
  if (years.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(years);
    $$payload.out += `<div class="btn-group width-40 svelte-bk8w60" role="group"><button type="button" class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">${escape_html(label)}</button> <ul class="dropdown-menu"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let year2 = each_array[$$index];
      $$payload.out += `<li><a class="dropdown-item"${attr("href", calendar.toYear(year2))} rel="external">${escape_html(year2)}</a></li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span>${escape_html(label)}</span>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { calendar });
  pop();
}
function Ssr($$payload, $$props) {
  push();
  let choosen = fallback($$props["choosen"], CALENDAR_START), prefix = $$props["prefix"];
  const calendar = new Calendar(choosen, prefix);
  const { month, prev, next, weeks } = calendar;
  const getNextMonthName = () => {
    if (month === 11) return MONTHS[0];
    return MONTHS[month + 1];
  };
  const getPrevMonthName = () => {
    if (month === 0) return MONTHS[11];
    return MONTHS[month - 1];
  };
  const each_array = ensure_array_like(weeks);
  $$payload.out += `<div class="calendar-wrap svelte-xjpgu6"><div class="w-100 calendar-pane mb-1 svelte-xjpgu6"><a rel="external"${attr("href", prev)} class="change-month change-month-link svelte-xjpgu6">« ${escape_html(getPrevMonthName())}</a> `;
  Years($$payload, { calendar });
  $$payload.out += `<!----> <a rel="external"${attr("href", next)} class="change-month change-month-link svelte-xjpgu6">${escape_html(getNextMonthName())} »</a></div> <table class="svelte-xjpgu6"><thead><tr class="tr-calendar svelte-xjpgu6"><td class="svelte-xjpgu6">Пн</td><td class="svelte-xjpgu6">Вт</td><td class="svelte-xjpgu6">Ср</td><td class="svelte-xjpgu6">Чт</td><td class="svelte-xjpgu6">Пт</td><td class="svelte-xjpgu6">Сб</td><td class="svelte-xjpgu6">Вс</td></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let week = each_array[$$index];
    Week($$payload, { week, calendar });
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  bind_props($$props, { choosen, prefix });
  pop();
}
function _layout($$payload, $$props) {
  let data = $$props["data"];
  const { choosen } = data;
  WithHeader($$payload, {
    children: ($$payload2) => {
      WithAside($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          slot($$payload3, $$props, "default", {}, null);
          $$payload3.out += `<!---->`;
        },
        $$slots: {
          default: true,
          aside: ($$payload3) => {
            $$payload3.out += `<div slot="aside" class="p-2"><h6 class="svelte-1rcjin5">Выбор по дате</h6> `;
            Ssr($$payload3, { prefix: "/view", choosen });
            $$payload3.out += `<!----></div>`;
          }
        }
      });
    },
    $$slots: {
      default: true,
      header: ($$payload2) => {
        $$payload2.out += `<h1 class="ms-5" slot="header">${escape_html(PUBLIC_MAIN_TITLE)}</h1>`;
      }
    }
  });
  bind_props($$props, { data });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DwMSFOCt.js.map
