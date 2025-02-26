import { W as WEBHOOK, g as getConnection, p as prependZeroes, T as TELEGRAM_CHANNEL, d as TELEGRAM_BOT_TOKEN } from './connection-wWuHO8tR.js';
import { Telegram } from 'telegraf';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const telegram = new Telegram(TELEGRAM_BOT_TOKEN);
const options = { parse_mode: "Markdown", link_preview_options: { is_disabled: true } };
const GET = async ({ params }) => {
  const { webhook, id } = params;
  if (webhook !== WEBHOOK) throw "rejected";
  const pattern = `topic:*:${prependZeroes(id)}`;
  const client = await getConnection();
  const keys = await client.keys(pattern);
  if (keys.length !== 1) throw "strange count of keys";
  const [key] = keys;
  const message = await client.get(key);
  if (typeof message !== "string") throw "bad message";
  await telegram.sendMessage(TELEGRAM_CHANNEL, message, options);
  return new Response("ok");
};

export { GET };
//# sourceMappingURL=_server.ts-B1Tcy65c.js.map
