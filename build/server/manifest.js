const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aside.js","background.png","bootstrap-icons.min.css","bootstrap.bundle.min.js","bootstrap.bundle.min.js.map","bootstrap.min.css","bootstrap.min.css.map","favicon.ico","favicon.png","favicon.svg","fonts/CormorantGaramond-Bold.ttf","fonts/CormorantGaramond-Regular.ttf","fonts/IstokWeb-Bold.ttf","fonts/IstokWeb-BoldItalic.ttf","fonts/IstokWeb-Italic.ttf","fonts/IstokWeb-Regular.ttf","fonts/PlayfairDisplaySC-Bold.ttf","fonts/PlayfairDisplaySC-Regular.ttf","fonts/bootstrap-icons.woff","fonts/bootstrap-icons.woff2","img/izvestia-bg.png","img/stalin-prix-1.png","img/stalin-prix-2.png","publish.js","stub.png","tags.json","vegniette.svg"]),
	mimeTypes: {".js":"text/javascript",".png":"image/png",".css":"text/css",".map":"application/json",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.1I45HlR2.js",app:"_app/immutable/entry/app.DV-v3V-8.js",imports:["_app/immutable/entry/start.1I45HlR2.js","_app/immutable/chunks/B9IOJEXW.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Js0jPM36.js","_app/immutable/entry/app.DV-v3V-8.js","_app/immutable/chunks/CuqPCOm1.js","_app/immutable/chunks/CDm-fcRQ.js","_app/immutable/chunks/Bk6oNkak.js","_app/immutable/chunks/C-V7koEK.js","_app/immutable/chunks/CNUPf0XL.js","_app/immutable/chunks/BO3cye2v.js","_app/immutable/chunks/Js0jPM36.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CaR6Tvlv.js')),
			__memo(() => import('./chunks/1-BuaXj3D0.js')),
			__memo(() => import('./chunks/2-cFT2lD8M.js')),
			__memo(() => import('./chunks/3-BHDUn10p.js')),
			__memo(() => import('./chunks/4-C1EiEZvp.js')),
			__memo(() => import('./chunks/5-DR77fd7V.js')),
			__memo(() => import('./chunks/6-GwrFKEdd.js')),
			__memo(() => import('./chunks/7-DZ4Qsayo.js')),
			__memo(() => import('./chunks/8-BExTH0lN.js')),
			__memo(() => import('./chunks/9-CFBgwcvy.js')),
			__memo(() => import('./chunks/10-B_nHGRYz.js')),
			__memo(() => import('./chunks/11-sI3VVV_n.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(bare)/channel",
				pattern: /^\/channel\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(bare)/channel/[days]",
				pattern: /^\/channel\/([^/]+?)\/?$/,
				params: [{"name":"days","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(bare)/edit/[year]/[issue]/[page]",
				pattern: /^\/edit\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"year","optional":false,"rest":false,"chained":false},{"name":"issue","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/publish/[webhook]",
				pattern: /^\/publish\/([^/]+?)\/?$/,
				params: [{"name":"webhook","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B7OR7fy_.js'))
			},
			{
				id: "/publish/[webhook]/[id]",
				pattern: /^\/publish\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"webhook","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B1Tcy65c.js'))
			},
			{
				id: "/(header)/view",
				pattern: /^\/view\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(header)/view/[year]",
				pattern: /^\/view\/([^/]+?)\/?$/,
				params: [{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(header)/view/[year]/[issue]/[page]",
				pattern: /^\/view\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"year","optional":false,"rest":false,"chained":false},{"name":"issue","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
