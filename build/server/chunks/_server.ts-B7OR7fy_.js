import { g as getConnection } from './connection-wWuHO8tR.js';
import 'events';
import 'net';
import 'tls';
import 'string_decoder';
import 'url';
import 'util';
import 'crypto';

const GET = async () => {
  const client = await getConnection();
  const today = (/* @__PURE__ */ new Date()).toISOString().substring(5, 10);
  let key = `approved:${today}`;
  console.log(key);
  if (!await client.exists(key)) return new Response("not found", { status: 404 });
  const members = await client.sMembers(key);
  key = `publish:${today}`;
  if (!await client.exists(key)) {
    await client.lPush(key, ...members);
    await client.expire(key, 3600 * 24);
  }
  await client.rPopLPush(key);
  return new Response("ok");
};

export { GET };
//# sourceMappingURL=_server.ts-B7OR7fy_.js.map
