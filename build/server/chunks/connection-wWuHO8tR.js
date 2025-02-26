import require$$0 from 'events';
import require$$1 from 'net';
import require$$2 from 'tls';
import require$$0$1 from 'string_decoder';
import require$$9 from 'url';
import require$$2$1 from 'util';
import require$$0$2 from 'crypto';

var dist$6 = {};

var dist$5 = {};

var client$1 = {};

var commands$6 = {};

var commands$5 = {};

var APPEND = {};

var hasRequiredAPPEND;

function requireAPPEND () {
	if (hasRequiredAPPEND) return APPEND;
	hasRequiredAPPEND = 1;
	Object.defineProperty(APPEND, "__esModule", { value: true });
	APPEND.transformArguments = APPEND.FIRST_KEY_INDEX = void 0;
	APPEND.FIRST_KEY_INDEX = 1;
	function transformArguments(key, value) {
	    return ['APPEND', key, value];
	}
	APPEND.transformArguments = transformArguments;
	return APPEND;
}

var BITCOUNT = {};

var hasRequiredBITCOUNT;

function requireBITCOUNT () {
	if (hasRequiredBITCOUNT) return BITCOUNT;
	hasRequiredBITCOUNT = 1;
	Object.defineProperty(BITCOUNT, "__esModule", { value: true });
	BITCOUNT.transformArguments = BITCOUNT.IS_READ_ONLY = BITCOUNT.FIRST_KEY_INDEX = void 0;
	BITCOUNT.FIRST_KEY_INDEX = 1;
	BITCOUNT.IS_READ_ONLY = true;
	function transformArguments(key, range) {
	    const args = ['BITCOUNT', key];
	    if (range) {
	        args.push(range.start.toString(), range.end.toString());
	        if (range.mode) {
	            args.push(range.mode);
	        }
	    }
	    return args;
	}
	BITCOUNT.transformArguments = transformArguments;
	return BITCOUNT;
}

var BITFIELD_RO = {};

var hasRequiredBITFIELD_RO;

function requireBITFIELD_RO () {
	if (hasRequiredBITFIELD_RO) return BITFIELD_RO;
	hasRequiredBITFIELD_RO = 1;
	Object.defineProperty(BITFIELD_RO, "__esModule", { value: true });
	BITFIELD_RO.transformArguments = BITFIELD_RO.IS_READ_ONLY = BITFIELD_RO.FIRST_KEY_INDEX = void 0;
	BITFIELD_RO.FIRST_KEY_INDEX = 1;
	BITFIELD_RO.IS_READ_ONLY = true;
	function transformArguments(key, operations) {
	    const args = ['BITFIELD_RO', key];
	    for (const operation of operations) {
	        args.push('GET', operation.encoding, operation.offset.toString());
	    }
	    return args;
	}
	BITFIELD_RO.transformArguments = transformArguments;
	return BITFIELD_RO;
}

var BITFIELD = {};

var hasRequiredBITFIELD;

function requireBITFIELD () {
	if (hasRequiredBITFIELD) return BITFIELD;
	hasRequiredBITFIELD = 1;
	Object.defineProperty(BITFIELD, "__esModule", { value: true });
	BITFIELD.transformArguments = BITFIELD.FIRST_KEY_INDEX = void 0;
	BITFIELD.FIRST_KEY_INDEX = 1;
	function transformArguments(key, operations) {
	    const args = ['BITFIELD', key];
	    for (const options of operations) {
	        switch (options.operation) {
	            case 'GET':
	                args.push('GET', options.encoding, options.offset.toString());
	                break;
	            case 'SET':
	                args.push('SET', options.encoding, options.offset.toString(), options.value.toString());
	                break;
	            case 'INCRBY':
	                args.push('INCRBY', options.encoding, options.offset.toString(), options.increment.toString());
	                break;
	            case 'OVERFLOW':
	                args.push('OVERFLOW', options.behavior);
	                break;
	        }
	    }
	    return args;
	}
	BITFIELD.transformArguments = transformArguments;
	return BITFIELD;
}

var BITOP = {};

var genericTransformers = {};

var hasRequiredGenericTransformers;

function requireGenericTransformers () {
	if (hasRequiredGenericTransformers) return genericTransformers;
	hasRequiredGenericTransformers = 1;
	Object.defineProperty(genericTransformers, "__esModule", { value: true });
	genericTransformers.transformRangeReply = genericTransformers.pushSlotRangesArguments = genericTransformers.pushSortArguments = genericTransformers.transformFunctionListItemReply = genericTransformers.RedisFunctionFlags = genericTransformers.transformCommandReply = genericTransformers.CommandCategories = genericTransformers.CommandFlags = genericTransformers.pushOptionalVerdictArgument = genericTransformers.pushVerdictArgument = genericTransformers.pushVerdictNumberArguments = genericTransformers.pushVerdictArguments = genericTransformers.pushEvalArguments = genericTransformers.evalFirstKeyIndex = genericTransformers.transformPXAT = genericTransformers.transformEXAT = genericTransformers.transformGeoMembersWithReply = genericTransformers.GeoReplyWith = genericTransformers.pushGeoRadiusStoreArguments = genericTransformers.pushGeoRadiusArguments = genericTransformers.pushGeoSearchArguments = genericTransformers.pushGeoCountArgument = genericTransformers.transformLMPopArguments = genericTransformers.transformZMPopArguments = genericTransformers.transformSortedSetWithScoresReply = genericTransformers.transformSortedSetMemberReply = genericTransformers.transformSortedSetMemberNullReply = genericTransformers.transformStreamsMessagesReply = genericTransformers.transformStreamMessagesNullReply = genericTransformers.transformStreamMessagesReply = genericTransformers.transformStreamMessageNullReply = genericTransformers.transformStreamMessageReply = genericTransformers.transformTuplesReply = genericTransformers.transformStringNumberInfinityArgument = genericTransformers.transformNumberInfinityArgument = genericTransformers.transformNumberInfinityNullArrayReply = genericTransformers.transformNumberInfinityNullReply = genericTransformers.transformNumberInfinityReply = genericTransformers.pushScanArguments = genericTransformers.transformBooleanArrayReply = genericTransformers.transformBooleanReply = void 0;
	function transformBooleanReply(reply) {
	    return reply === 1;
	}
	genericTransformers.transformBooleanReply = transformBooleanReply;
	function transformBooleanArrayReply(reply) {
	    return reply.map(transformBooleanReply);
	}
	genericTransformers.transformBooleanArrayReply = transformBooleanArrayReply;
	function pushScanArguments(args, cursor, options) {
	    args.push(cursor.toString());
	    if (options?.MATCH) {
	        args.push('MATCH', options.MATCH);
	    }
	    if (options?.COUNT) {
	        args.push('COUNT', options.COUNT.toString());
	    }
	    return args;
	}
	genericTransformers.pushScanArguments = pushScanArguments;
	function transformNumberInfinityReply(reply) {
	    switch (reply.toString()) {
	        case '+inf':
	            return Infinity;
	        case '-inf':
	            return -Infinity;
	        default:
	            return Number(reply);
	    }
	}
	genericTransformers.transformNumberInfinityReply = transformNumberInfinityReply;
	function transformNumberInfinityNullReply(reply) {
	    if (reply === null)
	        return null;
	    return transformNumberInfinityReply(reply);
	}
	genericTransformers.transformNumberInfinityNullReply = transformNumberInfinityNullReply;
	function transformNumberInfinityNullArrayReply(reply) {
	    return reply.map(transformNumberInfinityNullReply);
	}
	genericTransformers.transformNumberInfinityNullArrayReply = transformNumberInfinityNullArrayReply;
	function transformNumberInfinityArgument(num) {
	    switch (num) {
	        case Infinity:
	            return '+inf';
	        case -Infinity:
	            return '-inf';
	        default:
	            return num.toString();
	    }
	}
	genericTransformers.transformNumberInfinityArgument = transformNumberInfinityArgument;
	function transformStringNumberInfinityArgument(num) {
	    if (typeof num !== 'number')
	        return num;
	    return transformNumberInfinityArgument(num);
	}
	genericTransformers.transformStringNumberInfinityArgument = transformStringNumberInfinityArgument;
	function transformTuplesReply(reply) {
	    const message = Object.create(null);
	    for (let i = 0; i < reply.length; i += 2) {
	        message[reply[i].toString()] = reply[i + 1];
	    }
	    return message;
	}
	genericTransformers.transformTuplesReply = transformTuplesReply;
	function transformStreamMessageReply([id, message]) {
	    return {
	        id,
	        message: transformTuplesReply(message)
	    };
	}
	genericTransformers.transformStreamMessageReply = transformStreamMessageReply;
	function transformStreamMessageNullReply(reply) {
	    if (reply === null)
	        return null;
	    return transformStreamMessageReply(reply);
	}
	genericTransformers.transformStreamMessageNullReply = transformStreamMessageNullReply;
	function transformStreamMessagesReply(reply) {
	    return reply.map(transformStreamMessageReply);
	}
	genericTransformers.transformStreamMessagesReply = transformStreamMessagesReply;
	function transformStreamMessagesNullReply(reply) {
	    return reply.map(transformStreamMessageNullReply);
	}
	genericTransformers.transformStreamMessagesNullReply = transformStreamMessagesNullReply;
	function transformStreamsMessagesReply(reply) {
	    if (reply === null)
	        return null;
	    return reply.map(([name, rawMessages]) => ({
	        name,
	        messages: transformStreamMessagesReply(rawMessages)
	    }));
	}
	genericTransformers.transformStreamsMessagesReply = transformStreamsMessagesReply;
	function transformSortedSetMemberNullReply(reply) {
	    if (!reply.length)
	        return null;
	    return transformSortedSetMemberReply(reply);
	}
	genericTransformers.transformSortedSetMemberNullReply = transformSortedSetMemberNullReply;
	function transformSortedSetMemberReply(reply) {
	    return {
	        value: reply[0],
	        score: transformNumberInfinityReply(reply[1])
	    };
	}
	genericTransformers.transformSortedSetMemberReply = transformSortedSetMemberReply;
	function transformSortedSetWithScoresReply(reply) {
	    const members = [];
	    for (let i = 0; i < reply.length; i += 2) {
	        members.push({
	            value: reply[i],
	            score: transformNumberInfinityReply(reply[i + 1])
	        });
	    }
	    return members;
	}
	genericTransformers.transformSortedSetWithScoresReply = transformSortedSetWithScoresReply;
	function transformZMPopArguments(args, keys, side, options) {
	    pushVerdictArgument(args, keys);
	    args.push(side);
	    if (options?.COUNT) {
	        args.push('COUNT', options.COUNT.toString());
	    }
	    return args;
	}
	genericTransformers.transformZMPopArguments = transformZMPopArguments;
	function transformLMPopArguments(args, keys, side, options) {
	    pushVerdictArgument(args, keys);
	    args.push(side);
	    if (options?.COUNT) {
	        args.push('COUNT', options.COUNT.toString());
	    }
	    return args;
	}
	genericTransformers.transformLMPopArguments = transformLMPopArguments;
	function pushGeoCountArgument(args, count) {
	    if (typeof count === 'number') {
	        args.push('COUNT', count.toString());
	    }
	    else if (count) {
	        args.push('COUNT', count.value.toString());
	        if (count.ANY) {
	            args.push('ANY');
	        }
	    }
	    return args;
	}
	genericTransformers.pushGeoCountArgument = pushGeoCountArgument;
	function pushGeoSearchArguments(args, key, from, by, options) {
	    args.push(key);
	    if (typeof from === 'string') {
	        args.push('FROMMEMBER', from);
	    }
	    else {
	        args.push('FROMLONLAT', from.longitude.toString(), from.latitude.toString());
	    }
	    if ('radius' in by) {
	        args.push('BYRADIUS', by.radius.toString());
	    }
	    else {
	        args.push('BYBOX', by.width.toString(), by.height.toString());
	    }
	    args.push(by.unit);
	    if (options?.SORT) {
	        args.push(options.SORT);
	    }
	    pushGeoCountArgument(args, options?.COUNT);
	    return args;
	}
	genericTransformers.pushGeoSearchArguments = pushGeoSearchArguments;
	function pushGeoRadiusArguments(args, key, from, radius, unit, options) {
	    args.push(key);
	    if (typeof from === 'string') {
	        args.push(from);
	    }
	    else {
	        args.push(from.longitude.toString(), from.latitude.toString());
	    }
	    args.push(radius.toString(), unit);
	    if (options?.SORT) {
	        args.push(options.SORT);
	    }
	    pushGeoCountArgument(args, options?.COUNT);
	    return args;
	}
	genericTransformers.pushGeoRadiusArguments = pushGeoRadiusArguments;
	function pushGeoRadiusStoreArguments(args, key, from, radius, unit, destination, options) {
	    pushGeoRadiusArguments(args, key, from, radius, unit, options);
	    if (options?.STOREDIST) {
	        args.push('STOREDIST', destination);
	    }
	    else {
	        args.push('STORE', destination);
	    }
	    return args;
	}
	genericTransformers.pushGeoRadiusStoreArguments = pushGeoRadiusStoreArguments;
	var GeoReplyWith;
	(function (GeoReplyWith) {
	    GeoReplyWith["DISTANCE"] = "WITHDIST";
	    GeoReplyWith["HASH"] = "WITHHASH";
	    GeoReplyWith["COORDINATES"] = "WITHCOORD";
	})(GeoReplyWith || (genericTransformers.GeoReplyWith = GeoReplyWith = {}));
	function transformGeoMembersWithReply(reply, replyWith) {
	    const replyWithSet = new Set(replyWith);
	    let index = 0;
	    const distanceIndex = replyWithSet.has(GeoReplyWith.DISTANCE) && ++index, hashIndex = replyWithSet.has(GeoReplyWith.HASH) && ++index, coordinatesIndex = replyWithSet.has(GeoReplyWith.COORDINATES) && ++index;
	    return reply.map(member => {
	        const transformedMember = {
	            member: member[0]
	        };
	        if (distanceIndex) {
	            transformedMember.distance = member[distanceIndex];
	        }
	        if (hashIndex) {
	            transformedMember.hash = member[hashIndex];
	        }
	        if (coordinatesIndex) {
	            const [longitude, latitude] = member[coordinatesIndex];
	            transformedMember.coordinates = {
	                longitude,
	                latitude
	            };
	        }
	        return transformedMember;
	    });
	}
	genericTransformers.transformGeoMembersWithReply = transformGeoMembersWithReply;
	function transformEXAT(EXAT) {
	    return (typeof EXAT === 'number' ? EXAT : Math.floor(EXAT.getTime() / 1000)).toString();
	}
	genericTransformers.transformEXAT = transformEXAT;
	function transformPXAT(PXAT) {
	    return (typeof PXAT === 'number' ? PXAT : PXAT.getTime()).toString();
	}
	genericTransformers.transformPXAT = transformPXAT;
	function evalFirstKeyIndex(options) {
	    return options?.keys?.[0];
	}
	genericTransformers.evalFirstKeyIndex = evalFirstKeyIndex;
	function pushEvalArguments(args, options) {
	    if (options?.keys) {
	        args.push(options.keys.length.toString(), ...options.keys);
	    }
	    else {
	        args.push('0');
	    }
	    if (options?.arguments) {
	        args.push(...options.arguments);
	    }
	    return args;
	}
	genericTransformers.pushEvalArguments = pushEvalArguments;
	function pushVerdictArguments(args, value) {
	    if (Array.isArray(value)) {
	        // https://github.com/redis/node-redis/pull/2160
	        args = args.concat(value);
	    }
	    else {
	        args.push(value);
	    }
	    return args;
	}
	genericTransformers.pushVerdictArguments = pushVerdictArguments;
	function pushVerdictNumberArguments(args, value) {
	    if (Array.isArray(value)) {
	        for (const item of value) {
	            args.push(item.toString());
	        }
	    }
	    else {
	        args.push(value.toString());
	    }
	    return args;
	}
	genericTransformers.pushVerdictNumberArguments = pushVerdictNumberArguments;
	function pushVerdictArgument(args, value) {
	    if (Array.isArray(value)) {
	        args.push(value.length.toString(), ...value);
	    }
	    else {
	        args.push('1', value);
	    }
	    return args;
	}
	genericTransformers.pushVerdictArgument = pushVerdictArgument;
	function pushOptionalVerdictArgument(args, name, value) {
	    if (value === undefined)
	        return args;
	    args.push(name);
	    return pushVerdictArgument(args, value);
	}
	genericTransformers.pushOptionalVerdictArgument = pushOptionalVerdictArgument;
	var CommandFlags;
	(function (CommandFlags) {
	    CommandFlags["WRITE"] = "write";
	    CommandFlags["READONLY"] = "readonly";
	    CommandFlags["DENYOOM"] = "denyoom";
	    CommandFlags["ADMIN"] = "admin";
	    CommandFlags["PUBSUB"] = "pubsub";
	    CommandFlags["NOSCRIPT"] = "noscript";
	    CommandFlags["RANDOM"] = "random";
	    CommandFlags["SORT_FOR_SCRIPT"] = "sort_for_script";
	    CommandFlags["LOADING"] = "loading";
	    CommandFlags["STALE"] = "stale";
	    CommandFlags["SKIP_MONITOR"] = "skip_monitor";
	    CommandFlags["ASKING"] = "asking";
	    CommandFlags["FAST"] = "fast";
	    CommandFlags["MOVABLEKEYS"] = "movablekeys"; // keys have no pre-determined position. You must discover keys yourself.
	})(CommandFlags || (genericTransformers.CommandFlags = CommandFlags = {}));
	var CommandCategories;
	(function (CommandCategories) {
	    CommandCategories["KEYSPACE"] = "@keyspace";
	    CommandCategories["READ"] = "@read";
	    CommandCategories["WRITE"] = "@write";
	    CommandCategories["SET"] = "@set";
	    CommandCategories["SORTEDSET"] = "@sortedset";
	    CommandCategories["LIST"] = "@list";
	    CommandCategories["HASH"] = "@hash";
	    CommandCategories["STRING"] = "@string";
	    CommandCategories["BITMAP"] = "@bitmap";
	    CommandCategories["HYPERLOGLOG"] = "@hyperloglog";
	    CommandCategories["GEO"] = "@geo";
	    CommandCategories["STREAM"] = "@stream";
	    CommandCategories["PUBSUB"] = "@pubsub";
	    CommandCategories["ADMIN"] = "@admin";
	    CommandCategories["FAST"] = "@fast";
	    CommandCategories["SLOW"] = "@slow";
	    CommandCategories["BLOCKING"] = "@blocking";
	    CommandCategories["DANGEROUS"] = "@dangerous";
	    CommandCategories["CONNECTION"] = "@connection";
	    CommandCategories["TRANSACTION"] = "@transaction";
	    CommandCategories["SCRIPTING"] = "@scripting";
	})(CommandCategories || (genericTransformers.CommandCategories = CommandCategories = {}));
	function transformCommandReply([name, arity, flags, firstKeyIndex, lastKeyIndex, step, categories]) {
	    return {
	        name,
	        arity,
	        flags: new Set(flags),
	        firstKeyIndex,
	        lastKeyIndex,
	        step,
	        categories: new Set(categories)
	    };
	}
	genericTransformers.transformCommandReply = transformCommandReply;
	var RedisFunctionFlags;
	(function (RedisFunctionFlags) {
	    RedisFunctionFlags["NO_WRITES"] = "no-writes";
	    RedisFunctionFlags["ALLOW_OOM"] = "allow-oom";
	    RedisFunctionFlags["ALLOW_STALE"] = "allow-stale";
	    RedisFunctionFlags["NO_CLUSTER"] = "no-cluster";
	})(RedisFunctionFlags || (genericTransformers.RedisFunctionFlags = RedisFunctionFlags = {}));
	function transformFunctionListItemReply(reply) {
	    return {
	        libraryName: reply[1],
	        engine: reply[3],
	        functions: reply[5].map(fn => ({
	            name: fn[1],
	            description: fn[3],
	            flags: fn[5]
	        }))
	    };
	}
	genericTransformers.transformFunctionListItemReply = transformFunctionListItemReply;
	function pushSortArguments(args, options) {
	    if (options?.BY) {
	        args.push('BY', options.BY);
	    }
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
	    }
	    if (options?.GET) {
	        for (const pattern of (typeof options.GET === 'string' ? [options.GET] : options.GET)) {
	            args.push('GET', pattern);
	        }
	    }
	    if (options?.DIRECTION) {
	        args.push(options.DIRECTION);
	    }
	    if (options?.ALPHA) {
	        args.push('ALPHA');
	    }
	    return args;
	}
	genericTransformers.pushSortArguments = pushSortArguments;
	function pushSlotRangeArguments(args, range) {
	    args.push(range.start.toString(), range.end.toString());
	}
	function pushSlotRangesArguments(args, ranges) {
	    if (Array.isArray(ranges)) {
	        for (const range of ranges) {
	            pushSlotRangeArguments(args, range);
	        }
	    }
	    else {
	        pushSlotRangeArguments(args, ranges);
	    }
	    return args;
	}
	genericTransformers.pushSlotRangesArguments = pushSlotRangesArguments;
	function transformRangeReply([start, end]) {
	    return {
	        start,
	        end
	    };
	}
	genericTransformers.transformRangeReply = transformRangeReply;
	return genericTransformers;
}

var hasRequiredBITOP;

function requireBITOP () {
	if (hasRequiredBITOP) return BITOP;
	hasRequiredBITOP = 1;
	Object.defineProperty(BITOP, "__esModule", { value: true });
	BITOP.transformArguments = BITOP.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	BITOP.FIRST_KEY_INDEX = 2;
	function transformArguments(operation, destKey, key) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['BITOP', operation, destKey], key);
	}
	BITOP.transformArguments = transformArguments;
	return BITOP;
}

var BITPOS = {};

var hasRequiredBITPOS;

function requireBITPOS () {
	if (hasRequiredBITPOS) return BITPOS;
	hasRequiredBITPOS = 1;
	Object.defineProperty(BITPOS, "__esModule", { value: true });
	BITPOS.transformArguments = BITPOS.IS_READ_ONLY = BITPOS.FIRST_KEY_INDEX = void 0;
	BITPOS.FIRST_KEY_INDEX = 1;
	BITPOS.IS_READ_ONLY = true;
	function transformArguments(key, bit, start, end, mode) {
	    const args = ['BITPOS', key, bit.toString()];
	    if (typeof start === 'number') {
	        args.push(start.toString());
	    }
	    if (typeof end === 'number') {
	        args.push(end.toString());
	    }
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	BITPOS.transformArguments = transformArguments;
	return BITPOS;
}

var BLMOVE = {};

var hasRequiredBLMOVE;

function requireBLMOVE () {
	if (hasRequiredBLMOVE) return BLMOVE;
	hasRequiredBLMOVE = 1;
	Object.defineProperty(BLMOVE, "__esModule", { value: true });
	BLMOVE.transformArguments = BLMOVE.FIRST_KEY_INDEX = void 0;
	BLMOVE.FIRST_KEY_INDEX = 1;
	function transformArguments(source, destination, sourceDirection, destinationDirection, timeout) {
	    return [
	        'BLMOVE',
	        source,
	        destination,
	        sourceDirection,
	        destinationDirection,
	        timeout.toString()
	    ];
	}
	BLMOVE.transformArguments = transformArguments;
	return BLMOVE;
}

var BLMPOP = {};

var LMPOP = {};

var hasRequiredLMPOP;

function requireLMPOP () {
	if (hasRequiredLMPOP) return LMPOP;
	hasRequiredLMPOP = 1;
	Object.defineProperty(LMPOP, "__esModule", { value: true });
	LMPOP.transformArguments = LMPOP.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	LMPOP.FIRST_KEY_INDEX = 2;
	function transformArguments(keys, side, options) {
	    return (0, generic_transformers_1.transformLMPopArguments)(['LMPOP'], keys, side, options);
	}
	LMPOP.transformArguments = transformArguments;
	return LMPOP;
}

var hasRequiredBLMPOP;

function requireBLMPOP () {
	if (hasRequiredBLMPOP) return BLMPOP;
	hasRequiredBLMPOP = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 3;
		function transformArguments(timeout, keys, side, options) {
		    return (0, generic_transformers_1.transformLMPopArguments)(['BLMPOP', timeout.toString()], keys, side, options);
		}
		exports.transformArguments = transformArguments;
		var LMPOP_1 = requireLMPOP();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return LMPOP_1.transformReply; } }); 
	} (BLMPOP));
	return BLMPOP;
}

var BLPOP = {};

var hasRequiredBLPOP;

function requireBLPOP () {
	if (hasRequiredBLPOP) return BLPOP;
	hasRequiredBLPOP = 1;
	Object.defineProperty(BLPOP, "__esModule", { value: true });
	BLPOP.transformReply = BLPOP.transformArguments = BLPOP.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	BLPOP.FIRST_KEY_INDEX = 1;
	function transformArguments(keys, timeout) {
	    const args = (0, generic_transformers_1.pushVerdictArguments)(['BLPOP'], keys);
	    args.push(timeout.toString());
	    return args;
	}
	BLPOP.transformArguments = transformArguments;
	function transformReply(reply) {
	    if (reply === null)
	        return null;
	    return {
	        key: reply[0],
	        element: reply[1]
	    };
	}
	BLPOP.transformReply = transformReply;
	return BLPOP;
}

var BRPOP = {};

var hasRequiredBRPOP;

function requireBRPOP () {
	if (hasRequiredBRPOP) return BRPOP;
	hasRequiredBRPOP = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, timeout) {
		    const args = (0, generic_transformers_1.pushVerdictArguments)(['BRPOP'], key);
		    args.push(timeout.toString());
		    return args;
		}
		exports.transformArguments = transformArguments;
		var BLPOP_1 = requireBLPOP();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return BLPOP_1.transformReply; } }); 
	} (BRPOP));
	return BRPOP;
}

var BRPOPLPUSH = {};

var hasRequiredBRPOPLPUSH;

function requireBRPOPLPUSH () {
	if (hasRequiredBRPOPLPUSH) return BRPOPLPUSH;
	hasRequiredBRPOPLPUSH = 1;
	Object.defineProperty(BRPOPLPUSH, "__esModule", { value: true });
	BRPOPLPUSH.transformArguments = BRPOPLPUSH.FIRST_KEY_INDEX = void 0;
	BRPOPLPUSH.FIRST_KEY_INDEX = 1;
	function transformArguments(source, destination, timeout) {
	    return ['BRPOPLPUSH', source, destination, timeout.toString()];
	}
	BRPOPLPUSH.transformArguments = transformArguments;
	return BRPOPLPUSH;
}

var BZMPOP = {};

var ZMPOP = {};

var hasRequiredZMPOP;

function requireZMPOP () {
	if (hasRequiredZMPOP) return ZMPOP;
	hasRequiredZMPOP = 1;
	Object.defineProperty(ZMPOP, "__esModule", { value: true });
	ZMPOP.transformReply = ZMPOP.transformArguments = ZMPOP.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZMPOP.FIRST_KEY_INDEX = 2;
	function transformArguments(keys, side, options) {
	    return (0, generic_transformers_1.transformZMPopArguments)(['ZMPOP'], keys, side, options);
	}
	ZMPOP.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply === null ? null : {
	        key: reply[0],
	        elements: reply[1].map(generic_transformers_1.transformSortedSetMemberReply)
	    };
	}
	ZMPOP.transformReply = transformReply;
	return ZMPOP;
}

var hasRequiredBZMPOP;

function requireBZMPOP () {
	if (hasRequiredBZMPOP) return BZMPOP;
	hasRequiredBZMPOP = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 3;
		function transformArguments(timeout, keys, side, options) {
		    return (0, generic_transformers_1.transformZMPopArguments)(['BZMPOP', timeout.toString()], keys, side, options);
		}
		exports.transformArguments = transformArguments;
		var ZMPOP_1 = requireZMPOP();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return ZMPOP_1.transformReply; } }); 
	} (BZMPOP));
	return BZMPOP;
}

var BZPOPMAX = {};

var hasRequiredBZPOPMAX;

function requireBZPOPMAX () {
	if (hasRequiredBZPOPMAX) return BZPOPMAX;
	hasRequiredBZPOPMAX = 1;
	Object.defineProperty(BZPOPMAX, "__esModule", { value: true });
	BZPOPMAX.transformReply = BZPOPMAX.transformArguments = BZPOPMAX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	BZPOPMAX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, timeout) {
	    const args = (0, generic_transformers_1.pushVerdictArguments)(['BZPOPMAX'], key);
	    args.push(timeout.toString());
	    return args;
	}
	BZPOPMAX.transformArguments = transformArguments;
	function transformReply(reply) {
	    if (!reply)
	        return null;
	    return {
	        key: reply[0],
	        value: reply[1],
	        score: (0, generic_transformers_1.transformNumberInfinityReply)(reply[2])
	    };
	}
	BZPOPMAX.transformReply = transformReply;
	return BZPOPMAX;
}

var BZPOPMIN = {};

var hasRequiredBZPOPMIN;

function requireBZPOPMIN () {
	if (hasRequiredBZPOPMIN) return BZPOPMIN;
	hasRequiredBZPOPMIN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, timeout) {
		    const args = (0, generic_transformers_1.pushVerdictArguments)(['BZPOPMIN'], key);
		    args.push(timeout.toString());
		    return args;
		}
		exports.transformArguments = transformArguments;
		var BZPOPMAX_1 = requireBZPOPMAX();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return BZPOPMAX_1.transformReply; } }); 
	} (BZPOPMIN));
	return BZPOPMIN;
}

var COPY = {};

var hasRequiredCOPY;

function requireCOPY () {
	if (hasRequiredCOPY) return COPY;
	hasRequiredCOPY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(source, destination, options) {
		    const args = ['COPY', source, destination];
		    if (options?.destinationDb) {
		        args.push('DB', options.destinationDb.toString());
		    }
		    if (options?.replace) {
		        args.push('REPLACE');
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (COPY));
	return COPY;
}

var DECR = {};

var hasRequiredDECR;

function requireDECR () {
	if (hasRequiredDECR) return DECR;
	hasRequiredDECR = 1;
	Object.defineProperty(DECR, "__esModule", { value: true });
	DECR.transformArguments = DECR.FIRST_KEY_INDEX = void 0;
	DECR.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['DECR', key];
	}
	DECR.transformArguments = transformArguments;
	return DECR;
}

var DECRBY$1 = {};

var hasRequiredDECRBY$1;

function requireDECRBY$1 () {
	if (hasRequiredDECRBY$1) return DECRBY$1;
	hasRequiredDECRBY$1 = 1;
	Object.defineProperty(DECRBY$1, "__esModule", { value: true });
	DECRBY$1.transformArguments = DECRBY$1.FIRST_KEY_INDEX = void 0;
	DECRBY$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, decrement) {
	    return ['DECRBY', key, decrement.toString()];
	}
	DECRBY$1.transformArguments = transformArguments;
	return DECRBY$1;
}

var DEL$3 = {};

var hasRequiredDEL$3;

function requireDEL$3 () {
	if (hasRequiredDEL$3) return DEL$3;
	hasRequiredDEL$3 = 1;
	Object.defineProperty(DEL$3, "__esModule", { value: true });
	DEL$3.transformArguments = DEL$3.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	DEL$3.FIRST_KEY_INDEX = 1;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['DEL'], keys);
	}
	DEL$3.transformArguments = transformArguments;
	return DEL$3;
}

var DUMP = {};

var hasRequiredDUMP;

function requireDUMP () {
	if (hasRequiredDUMP) return DUMP;
	hasRequiredDUMP = 1;
	Object.defineProperty(DUMP, "__esModule", { value: true });
	DUMP.transformArguments = DUMP.FIRST_KEY_INDEX = void 0;
	DUMP.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['DUMP', key];
	}
	DUMP.transformArguments = transformArguments;
	return DUMP;
}

var EVAL_RO = {};

var hasRequiredEVAL_RO;

function requireEVAL_RO () {
	if (hasRequiredEVAL_RO) return EVAL_RO;
	hasRequiredEVAL_RO = 1;
	Object.defineProperty(EVAL_RO, "__esModule", { value: true });
	EVAL_RO.transformArguments = EVAL_RO.IS_READ_ONLY = EVAL_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	EVAL_RO.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	EVAL_RO.IS_READ_ONLY = true;
	function transformArguments(script, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['EVAL_RO', script], options);
	}
	EVAL_RO.transformArguments = transformArguments;
	return EVAL_RO;
}

var EVAL = {};

var hasRequiredEVAL;

function requireEVAL () {
	if (hasRequiredEVAL) return EVAL;
	hasRequiredEVAL = 1;
	Object.defineProperty(EVAL, "__esModule", { value: true });
	EVAL.transformArguments = EVAL.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	EVAL.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	function transformArguments(script, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['EVAL', script], options);
	}
	EVAL.transformArguments = transformArguments;
	return EVAL;
}

var EVALSHA_RO = {};

var hasRequiredEVALSHA_RO;

function requireEVALSHA_RO () {
	if (hasRequiredEVALSHA_RO) return EVALSHA_RO;
	hasRequiredEVALSHA_RO = 1;
	Object.defineProperty(EVALSHA_RO, "__esModule", { value: true });
	EVALSHA_RO.transformArguments = EVALSHA_RO.IS_READ_ONLY = EVALSHA_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	EVALSHA_RO.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	EVALSHA_RO.IS_READ_ONLY = true;
	function transformArguments(sha1, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['EVALSHA_RO', sha1], options);
	}
	EVALSHA_RO.transformArguments = transformArguments;
	return EVALSHA_RO;
}

var EVALSHA = {};

var hasRequiredEVALSHA;

function requireEVALSHA () {
	if (hasRequiredEVALSHA) return EVALSHA;
	hasRequiredEVALSHA = 1;
	Object.defineProperty(EVALSHA, "__esModule", { value: true });
	EVALSHA.transformArguments = EVALSHA.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	EVALSHA.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	function transformArguments(sha1, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['EVALSHA', sha1], options);
	}
	EVALSHA.transformArguments = transformArguments;
	return EVALSHA;
}

var EXISTS$2 = {};

var hasRequiredEXISTS$2;

function requireEXISTS$2 () {
	if (hasRequiredEXISTS$2) return EXISTS$2;
	hasRequiredEXISTS$2 = 1;
	Object.defineProperty(EXISTS$2, "__esModule", { value: true });
	EXISTS$2.transformArguments = EXISTS$2.IS_READ_ONLY = EXISTS$2.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	EXISTS$2.FIRST_KEY_INDEX = 1;
	EXISTS$2.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['EXISTS'], keys);
	}
	EXISTS$2.transformArguments = transformArguments;
	return EXISTS$2;
}

var EXPIRE = {};

var hasRequiredEXPIRE;

function requireEXPIRE () {
	if (hasRequiredEXPIRE) return EXPIRE;
	hasRequiredEXPIRE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, seconds, mode) {
		    const args = ['EXPIRE', key, seconds.toString()];
		    if (mode) {
		        args.push(mode);
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (EXPIRE));
	return EXPIRE;
}

var EXPIREAT = {};

var hasRequiredEXPIREAT;

function requireEXPIREAT () {
	if (hasRequiredEXPIREAT) return EXPIREAT;
	hasRequiredEXPIREAT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, timestamp, mode) {
		    const args = [
		        'EXPIREAT',
		        key,
		        (0, generic_transformers_1.transformEXAT)(timestamp)
		    ];
		    if (mode) {
		        args.push(mode);
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformBooleanReply; } }); 
	} (EXPIREAT));
	return EXPIREAT;
}

var EXPIRETIME = {};

var hasRequiredEXPIRETIME;

function requireEXPIRETIME () {
	if (hasRequiredEXPIRETIME) return EXPIRETIME;
	hasRequiredEXPIRETIME = 1;
	Object.defineProperty(EXPIRETIME, "__esModule", { value: true });
	EXPIRETIME.transformArguments = EXPIRETIME.FIRST_KEY_INDEX = void 0;
	EXPIRETIME.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['EXPIRETIME', key];
	}
	EXPIRETIME.transformArguments = transformArguments;
	return EXPIRETIME;
}

var FCALL_RO = {};

var hasRequiredFCALL_RO;

function requireFCALL_RO () {
	if (hasRequiredFCALL_RO) return FCALL_RO;
	hasRequiredFCALL_RO = 1;
	Object.defineProperty(FCALL_RO, "__esModule", { value: true });
	FCALL_RO.transformArguments = FCALL_RO.IS_READ_ONLY = FCALL_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	FCALL_RO.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	FCALL_RO.IS_READ_ONLY = true;
	function transformArguments(fn, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['FCALL_RO', fn], options);
	}
	FCALL_RO.transformArguments = transformArguments;
	return FCALL_RO;
}

var FCALL = {};

var hasRequiredFCALL;

function requireFCALL () {
	if (hasRequiredFCALL) return FCALL;
	hasRequiredFCALL = 1;
	Object.defineProperty(FCALL, "__esModule", { value: true });
	FCALL.transformArguments = FCALL.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	FCALL.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
	function transformArguments(fn, options) {
	    return (0, generic_transformers_1.pushEvalArguments)(['FCALL', fn], options);
	}
	FCALL.transformArguments = transformArguments;
	return FCALL;
}

var GEOADD = {};

var hasRequiredGEOADD;

function requireGEOADD () {
	if (hasRequiredGEOADD) return GEOADD;
	hasRequiredGEOADD = 1;
	Object.defineProperty(GEOADD, "__esModule", { value: true });
	GEOADD.transformArguments = GEOADD.FIRST_KEY_INDEX = void 0;
	GEOADD.FIRST_KEY_INDEX = 1;
	function transformArguments(key, toAdd, options) {
	    const args = ['GEOADD', key];
	    if (options?.NX) {
	        args.push('NX');
	    }
	    else if (options?.XX) {
	        args.push('XX');
	    }
	    if (options?.CH) {
	        args.push('CH');
	    }
	    for (const { longitude, latitude, member } of (Array.isArray(toAdd) ? toAdd : [toAdd])) {
	        args.push(longitude.toString(), latitude.toString(), member);
	    }
	    return args;
	}
	GEOADD.transformArguments = transformArguments;
	return GEOADD;
}

var GEODIST = {};

var hasRequiredGEODIST;

function requireGEODIST () {
	if (hasRequiredGEODIST) return GEODIST;
	hasRequiredGEODIST = 1;
	Object.defineProperty(GEODIST, "__esModule", { value: true });
	GEODIST.transformReply = GEODIST.transformArguments = GEODIST.IS_READ_ONLY = GEODIST.FIRST_KEY_INDEX = void 0;
	GEODIST.FIRST_KEY_INDEX = 1;
	GEODIST.IS_READ_ONLY = true;
	function transformArguments(key, member1, member2, unit) {
	    const args = ['GEODIST', key, member1, member2];
	    if (unit) {
	        args.push(unit);
	    }
	    return args;
	}
	GEODIST.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply === null ? null : Number(reply);
	}
	GEODIST.transformReply = transformReply;
	return GEODIST;
}

var GEOHASH = {};

var hasRequiredGEOHASH;

function requireGEOHASH () {
	if (hasRequiredGEOHASH) return GEOHASH;
	hasRequiredGEOHASH = 1;
	Object.defineProperty(GEOHASH, "__esModule", { value: true });
	GEOHASH.transformArguments = GEOHASH.IS_READ_ONLY = GEOHASH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEOHASH.FIRST_KEY_INDEX = 1;
	GEOHASH.IS_READ_ONLY = true;
	function transformArguments(key, member) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['GEOHASH', key], member);
	}
	GEOHASH.transformArguments = transformArguments;
	return GEOHASH;
}

var GEOPOS = {};

var hasRequiredGEOPOS;

function requireGEOPOS () {
	if (hasRequiredGEOPOS) return GEOPOS;
	hasRequiredGEOPOS = 1;
	Object.defineProperty(GEOPOS, "__esModule", { value: true });
	GEOPOS.transformReply = GEOPOS.transformArguments = GEOPOS.IS_READ_ONLY = GEOPOS.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEOPOS.FIRST_KEY_INDEX = 1;
	GEOPOS.IS_READ_ONLY = true;
	function transformArguments(key, member) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['GEOPOS', key], member);
	}
	GEOPOS.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(coordinates => coordinates === null ? null : {
	        longitude: coordinates[0],
	        latitude: coordinates[1]
	    });
	}
	GEOPOS.transformReply = transformReply;
	return GEOPOS;
}

var GEORADIUS_RO_WITH = {};

var GEORADIUS_RO = {};

var hasRequiredGEORADIUS_RO;

function requireGEORADIUS_RO () {
	if (hasRequiredGEORADIUS_RO) return GEORADIUS_RO;
	hasRequiredGEORADIUS_RO = 1;
	Object.defineProperty(GEORADIUS_RO, "__esModule", { value: true });
	GEORADIUS_RO.transformArguments = GEORADIUS_RO.IS_READ_ONLY = GEORADIUS_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEORADIUS_RO.FIRST_KEY_INDEX = 1;
	GEORADIUS_RO.IS_READ_ONLY = true;
	function transformArguments(key, coordinates, radius, unit, options) {
	    return (0, generic_transformers_1.pushGeoRadiusArguments)(['GEORADIUS_RO'], key, coordinates, radius, unit, options);
	}
	GEORADIUS_RO.transformArguments = transformArguments;
	return GEORADIUS_RO;
}

var hasRequiredGEORADIUS_RO_WITH;

function requireGEORADIUS_RO_WITH () {
	if (hasRequiredGEORADIUS_RO_WITH) return GEORADIUS_RO_WITH;
	hasRequiredGEORADIUS_RO_WITH = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const GEORADIUS_RO_1 = requireGEORADIUS_RO();
		var GEORADIUS_RO_2 = requireGEORADIUS_RO();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUS_RO_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUS_RO_2.IS_READ_ONLY; } });
		function transformArguments(key, coordinates, radius, unit, replyWith, options) {
		    const args = (0, GEORADIUS_RO_1.transformArguments)(key, coordinates, radius, unit, options);
		    args.push(...replyWith);
		    args.preserve = replyWith;
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } }); 
	} (GEORADIUS_RO_WITH));
	return GEORADIUS_RO_WITH;
}

var GEORADIUS_WITH = {};

var GEORADIUS = {};

var hasRequiredGEORADIUS;

function requireGEORADIUS () {
	if (hasRequiredGEORADIUS) return GEORADIUS;
	hasRequiredGEORADIUS = 1;
	Object.defineProperty(GEORADIUS, "__esModule", { value: true });
	GEORADIUS.transformArguments = GEORADIUS.IS_READ_ONLY = GEORADIUS.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEORADIUS.FIRST_KEY_INDEX = 1;
	GEORADIUS.IS_READ_ONLY = true;
	function transformArguments(key, coordinates, radius, unit, options) {
	    return (0, generic_transformers_1.pushGeoRadiusArguments)(['GEORADIUS'], key, coordinates, radius, unit, options);
	}
	GEORADIUS.transformArguments = transformArguments;
	return GEORADIUS;
}

var hasRequiredGEORADIUS_WITH;

function requireGEORADIUS_WITH () {
	if (hasRequiredGEORADIUS_WITH) return GEORADIUS_WITH;
	hasRequiredGEORADIUS_WITH = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const GEORADIUS_1 = requireGEORADIUS();
		var GEORADIUS_2 = requireGEORADIUS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUS_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUS_2.IS_READ_ONLY; } });
		function transformArguments(key, coordinates, radius, unit, replyWith, options) {
		    const args = (0, GEORADIUS_1.transformArguments)(key, coordinates, radius, unit, options);
		    args.push(...replyWith);
		    args.preserve = replyWith;
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } }); 
	} (GEORADIUS_WITH));
	return GEORADIUS_WITH;
}

var GEORADIUSBYMEMBER_RO_WITH = {};

var GEORADIUSBYMEMBER_RO = {};

var hasRequiredGEORADIUSBYMEMBER_RO;

function requireGEORADIUSBYMEMBER_RO () {
	if (hasRequiredGEORADIUSBYMEMBER_RO) return GEORADIUSBYMEMBER_RO;
	hasRequiredGEORADIUSBYMEMBER_RO = 1;
	Object.defineProperty(GEORADIUSBYMEMBER_RO, "__esModule", { value: true });
	GEORADIUSBYMEMBER_RO.transformArguments = GEORADIUSBYMEMBER_RO.IS_READ_ONLY = GEORADIUSBYMEMBER_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEORADIUSBYMEMBER_RO.FIRST_KEY_INDEX = 1;
	GEORADIUSBYMEMBER_RO.IS_READ_ONLY = true;
	function transformArguments(key, member, radius, unit, options) {
	    return (0, generic_transformers_1.pushGeoRadiusArguments)(['GEORADIUSBYMEMBER_RO'], key, member, radius, unit, options);
	}
	GEORADIUSBYMEMBER_RO.transformArguments = transformArguments;
	return GEORADIUSBYMEMBER_RO;
}

var hasRequiredGEORADIUSBYMEMBER_RO_WITH;

function requireGEORADIUSBYMEMBER_RO_WITH () {
	if (hasRequiredGEORADIUSBYMEMBER_RO_WITH) return GEORADIUSBYMEMBER_RO_WITH;
	hasRequiredGEORADIUSBYMEMBER_RO_WITH = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const GEORADIUSBYMEMBER_RO_1 = requireGEORADIUSBYMEMBER_RO();
		var GEORADIUSBYMEMBER_RO_2 = requireGEORADIUSBYMEMBER_RO();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_RO_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_RO_2.IS_READ_ONLY; } });
		function transformArguments(key, member, radius, unit, replyWith, options) {
		    const args = (0, GEORADIUSBYMEMBER_RO_1.transformArguments)(key, member, radius, unit, options);
		    args.push(...replyWith);
		    args.preserve = replyWith;
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } }); 
	} (GEORADIUSBYMEMBER_RO_WITH));
	return GEORADIUSBYMEMBER_RO_WITH;
}

var GEORADIUSBYMEMBER_WITH = {};

var GEORADIUSBYMEMBER = {};

var hasRequiredGEORADIUSBYMEMBER;

function requireGEORADIUSBYMEMBER () {
	if (hasRequiredGEORADIUSBYMEMBER) return GEORADIUSBYMEMBER;
	hasRequiredGEORADIUSBYMEMBER = 1;
	Object.defineProperty(GEORADIUSBYMEMBER, "__esModule", { value: true });
	GEORADIUSBYMEMBER.transformArguments = GEORADIUSBYMEMBER.IS_READ_ONLY = GEORADIUSBYMEMBER.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEORADIUSBYMEMBER.FIRST_KEY_INDEX = 1;
	GEORADIUSBYMEMBER.IS_READ_ONLY = true;
	function transformArguments(key, member, radius, unit, options) {
	    return (0, generic_transformers_1.pushGeoRadiusArguments)(['GEORADIUSBYMEMBER'], key, member, radius, unit, options);
	}
	GEORADIUSBYMEMBER.transformArguments = transformArguments;
	return GEORADIUSBYMEMBER;
}

var hasRequiredGEORADIUSBYMEMBER_WITH;

function requireGEORADIUSBYMEMBER_WITH () {
	if (hasRequiredGEORADIUSBYMEMBER_WITH) return GEORADIUSBYMEMBER_WITH;
	hasRequiredGEORADIUSBYMEMBER_WITH = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const GEORADIUSBYMEMBER_1 = requireGEORADIUSBYMEMBER();
		var GEORADIUSBYMEMBER_2 = requireGEORADIUSBYMEMBER();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_2.IS_READ_ONLY; } });
		function transformArguments(key, member, radius, unit, replyWith, options) {
		    const args = (0, GEORADIUSBYMEMBER_1.transformArguments)(key, member, radius, unit, options);
		    args.push(...replyWith);
		    args.preserve = replyWith;
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } }); 
	} (GEORADIUSBYMEMBER_WITH));
	return GEORADIUSBYMEMBER_WITH;
}

var GEORADIUSBYMEMBERSTORE = {};

var hasRequiredGEORADIUSBYMEMBERSTORE;

function requireGEORADIUSBYMEMBERSTORE () {
	if (hasRequiredGEORADIUSBYMEMBERSTORE) return GEORADIUSBYMEMBERSTORE;
	hasRequiredGEORADIUSBYMEMBERSTORE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		var GEORADIUSBYMEMBER_1 = requireGEORADIUSBYMEMBER();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_1.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_1.IS_READ_ONLY; } });
		function transformArguments(key, member, radius, unit, destination, options) {
		    return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(['GEORADIUSBYMEMBER'], key, member, radius, unit, destination, options);
		}
		exports.transformArguments = transformArguments; 
	} (GEORADIUSBYMEMBERSTORE));
	return GEORADIUSBYMEMBERSTORE;
}

var GEORADIUSSTORE = {};

var hasRequiredGEORADIUSSTORE;

function requireGEORADIUSSTORE () {
	if (hasRequiredGEORADIUSSTORE) return GEORADIUSSTORE;
	hasRequiredGEORADIUSSTORE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		var GEORADIUS_1 = requireGEORADIUS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUS_1.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUS_1.IS_READ_ONLY; } });
		function transformArguments(key, coordinates, radius, unit, destination, options) {
		    return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(['GEORADIUS'], key, coordinates, radius, unit, destination, options);
		}
		exports.transformArguments = transformArguments; 
	} (GEORADIUSSTORE));
	return GEORADIUSSTORE;
}

var GEOSEARCH_WITH = {};

var GEOSEARCH = {};

var hasRequiredGEOSEARCH;

function requireGEOSEARCH () {
	if (hasRequiredGEOSEARCH) return GEOSEARCH;
	hasRequiredGEOSEARCH = 1;
	Object.defineProperty(GEOSEARCH, "__esModule", { value: true });
	GEOSEARCH.transformArguments = GEOSEARCH.IS_READ_ONLY = GEOSEARCH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GEOSEARCH.FIRST_KEY_INDEX = 1;
	GEOSEARCH.IS_READ_ONLY = true;
	function transformArguments(key, from, by, options) {
	    return (0, generic_transformers_1.pushGeoSearchArguments)(['GEOSEARCH'], key, from, by, options);
	}
	GEOSEARCH.transformArguments = transformArguments;
	return GEOSEARCH;
}

var hasRequiredGEOSEARCH_WITH;

function requireGEOSEARCH_WITH () {
	if (hasRequiredGEOSEARCH_WITH) return GEOSEARCH_WITH;
	hasRequiredGEOSEARCH_WITH = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const GEOSEARCH_1 = requireGEOSEARCH();
		var GEOSEARCH_2 = requireGEOSEARCH();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEOSEARCH_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEOSEARCH_2.IS_READ_ONLY; } });
		function transformArguments(key, from, by, replyWith, options) {
		    const args = (0, GEOSEARCH_1.transformArguments)(key, from, by, options);
		    args.push(...replyWith);
		    args.preserve = replyWith;
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } }); 
	} (GEOSEARCH_WITH));
	return GEOSEARCH_WITH;
}

var GEOSEARCHSTORE = {};

var hasRequiredGEOSEARCHSTORE;

function requireGEOSEARCHSTORE () {
	if (hasRequiredGEOSEARCHSTORE) return GEOSEARCHSTORE;
	hasRequiredGEOSEARCHSTORE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		var GEOSEARCH_1 = requireGEOSEARCH();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEOSEARCH_1.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEOSEARCH_1.IS_READ_ONLY; } });
		function transformArguments(destination, source, from, by, options) {
		    const args = (0, generic_transformers_1.pushGeoSearchArguments)(['GEOSEARCHSTORE', destination], source, from, by, options);
		    if (options?.STOREDIST) {
		        args.push('STOREDIST');
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		function transformReply(reply) {
		    if (typeof reply !== 'number') {
		        throw new TypeError(`https://github.com/redis/redis/issues/9261`);
		    }
		    return reply;
		}
		exports.transformReply = transformReply; 
	} (GEOSEARCHSTORE));
	return GEOSEARCHSTORE;
}

var GET$2 = {};

var hasRequiredGET$2;

function requireGET$2 () {
	if (hasRequiredGET$2) return GET$2;
	hasRequiredGET$2 = 1;
	Object.defineProperty(GET$2, "__esModule", { value: true });
	GET$2.transformArguments = GET$2.IS_READ_ONLY = GET$2.FIRST_KEY_INDEX = void 0;
	GET$2.FIRST_KEY_INDEX = 1;
	GET$2.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['GET', key];
	}
	GET$2.transformArguments = transformArguments;
	return GET$2;
}

var GETBIT = {};

var hasRequiredGETBIT;

function requireGETBIT () {
	if (hasRequiredGETBIT) return GETBIT;
	hasRequiredGETBIT = 1;
	Object.defineProperty(GETBIT, "__esModule", { value: true });
	GETBIT.transformArguments = GETBIT.IS_READ_ONLY = GETBIT.FIRST_KEY_INDEX = void 0;
	GETBIT.FIRST_KEY_INDEX = 1;
	GETBIT.IS_READ_ONLY = true;
	function transformArguments(key, offset) {
	    return ['GETBIT', key, offset.toString()];
	}
	GETBIT.transformArguments = transformArguments;
	return GETBIT;
}

var GETDEL = {};

var hasRequiredGETDEL;

function requireGETDEL () {
	if (hasRequiredGETDEL) return GETDEL;
	hasRequiredGETDEL = 1;
	Object.defineProperty(GETDEL, "__esModule", { value: true });
	GETDEL.transformArguments = GETDEL.FIRST_KEY_INDEX = void 0;
	GETDEL.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['GETDEL', key];
	}
	GETDEL.transformArguments = transformArguments;
	return GETDEL;
}

var GETEX = {};

var hasRequiredGETEX;

function requireGETEX () {
	if (hasRequiredGETEX) return GETEX;
	hasRequiredGETEX = 1;
	Object.defineProperty(GETEX, "__esModule", { value: true });
	GETEX.transformArguments = GETEX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	GETEX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, mode) {
	    const args = ['GETEX', key];
	    if ('EX' in mode) {
	        args.push('EX', mode.EX.toString());
	    }
	    else if ('PX' in mode) {
	        args.push('PX', mode.PX.toString());
	    }
	    else if ('EXAT' in mode) {
	        args.push('EXAT', (0, generic_transformers_1.transformEXAT)(mode.EXAT));
	    }
	    else if ('PXAT' in mode) {
	        args.push('PXAT', (0, generic_transformers_1.transformPXAT)(mode.PXAT));
	    }
	    else { // PERSIST
	        args.push('PERSIST');
	    }
	    return args;
	}
	GETEX.transformArguments = transformArguments;
	return GETEX;
}

var GETRANGE = {};

var hasRequiredGETRANGE;

function requireGETRANGE () {
	if (hasRequiredGETRANGE) return GETRANGE;
	hasRequiredGETRANGE = 1;
	Object.defineProperty(GETRANGE, "__esModule", { value: true });
	GETRANGE.transformArguments = GETRANGE.IS_READ_ONLY = GETRANGE.FIRST_KEY_INDEX = void 0;
	GETRANGE.FIRST_KEY_INDEX = 1;
	GETRANGE.IS_READ_ONLY = true;
	function transformArguments(key, start, end) {
	    return ['GETRANGE', key, start.toString(), end.toString()];
	}
	GETRANGE.transformArguments = transformArguments;
	return GETRANGE;
}

var GETSET = {};

var hasRequiredGETSET;

function requireGETSET () {
	if (hasRequiredGETSET) return GETSET;
	hasRequiredGETSET = 1;
	Object.defineProperty(GETSET, "__esModule", { value: true });
	GETSET.transformArguments = GETSET.FIRST_KEY_INDEX = void 0;
	GETSET.FIRST_KEY_INDEX = 1;
	function transformArguments(key, value) {
	    return ['GETSET', key, value];
	}
	GETSET.transformArguments = transformArguments;
	return GETSET;
}

var HDEL = {};

var hasRequiredHDEL;

function requireHDEL () {
	if (hasRequiredHDEL) return HDEL;
	hasRequiredHDEL = 1;
	Object.defineProperty(HDEL, "__esModule", { value: true });
	HDEL.transformArguments = HDEL.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	HDEL.FIRST_KEY_INDEX = 1;
	function transformArguments(key, field) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['HDEL', key], field);
	}
	HDEL.transformArguments = transformArguments;
	return HDEL;
}

var HEXISTS = {};

var hasRequiredHEXISTS;

function requireHEXISTS () {
	if (hasRequiredHEXISTS) return HEXISTS;
	hasRequiredHEXISTS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, field) {
		    return ['HEXISTS', key, field];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (HEXISTS));
	return HEXISTS;
}

var HGET = {};

var hasRequiredHGET;

function requireHGET () {
	if (hasRequiredHGET) return HGET;
	hasRequiredHGET = 1;
	Object.defineProperty(HGET, "__esModule", { value: true });
	HGET.transformArguments = HGET.IS_READ_ONLY = HGET.FIRST_KEY_INDEX = void 0;
	HGET.FIRST_KEY_INDEX = 1;
	HGET.IS_READ_ONLY = true;
	function transformArguments(key, field) {
	    return ['HGET', key, field];
	}
	HGET.transformArguments = transformArguments;
	return HGET;
}

var HGETALL = {};

var hasRequiredHGETALL;

function requireHGETALL () {
	if (hasRequiredHGETALL) return HGETALL;
	hasRequiredHGETALL = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.TRANSFORM_LEGACY_REPLY = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		exports.TRANSFORM_LEGACY_REPLY = true;
		function transformArguments(key) {
		    return ['HGETALL', key];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformTuplesReply; } }); 
	} (HGETALL));
	return HGETALL;
}

var HINCRBY = {};

var hasRequiredHINCRBY;

function requireHINCRBY () {
	if (hasRequiredHINCRBY) return HINCRBY;
	hasRequiredHINCRBY = 1;
	Object.defineProperty(HINCRBY, "__esModule", { value: true });
	HINCRBY.transformArguments = HINCRBY.FIRST_KEY_INDEX = void 0;
	HINCRBY.FIRST_KEY_INDEX = 1;
	function transformArguments(key, field, increment) {
	    return ['HINCRBY', key, field, increment.toString()];
	}
	HINCRBY.transformArguments = transformArguments;
	return HINCRBY;
}

var HINCRBYFLOAT = {};

var hasRequiredHINCRBYFLOAT;

function requireHINCRBYFLOAT () {
	if (hasRequiredHINCRBYFLOAT) return HINCRBYFLOAT;
	hasRequiredHINCRBYFLOAT = 1;
	Object.defineProperty(HINCRBYFLOAT, "__esModule", { value: true });
	HINCRBYFLOAT.transformArguments = HINCRBYFLOAT.FIRST_KEY_INDEX = void 0;
	HINCRBYFLOAT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, field, increment) {
	    return ['HINCRBYFLOAT', key, field, increment.toString()];
	}
	HINCRBYFLOAT.transformArguments = transformArguments;
	return HINCRBYFLOAT;
}

var HKEYS = {};

var hasRequiredHKEYS;

function requireHKEYS () {
	if (hasRequiredHKEYS) return HKEYS;
	hasRequiredHKEYS = 1;
	Object.defineProperty(HKEYS, "__esModule", { value: true });
	HKEYS.transformArguments = HKEYS.FIRST_KEY_INDEX = void 0;
	HKEYS.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['HKEYS', key];
	}
	HKEYS.transformArguments = transformArguments;
	return HKEYS;
}

var HLEN = {};

var hasRequiredHLEN;

function requireHLEN () {
	if (hasRequiredHLEN) return HLEN;
	hasRequiredHLEN = 1;
	Object.defineProperty(HLEN, "__esModule", { value: true });
	HLEN.transformArguments = HLEN.FIRST_KEY_INDEX = void 0;
	HLEN.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['HLEN', key];
	}
	HLEN.transformArguments = transformArguments;
	return HLEN;
}

var HMGET = {};

var hasRequiredHMGET;

function requireHMGET () {
	if (hasRequiredHMGET) return HMGET;
	hasRequiredHMGET = 1;
	Object.defineProperty(HMGET, "__esModule", { value: true });
	HMGET.transformArguments = HMGET.IS_READ_ONLY = HMGET.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	HMGET.FIRST_KEY_INDEX = 1;
	HMGET.IS_READ_ONLY = true;
	function transformArguments(key, fields) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['HMGET', key], fields);
	}
	HMGET.transformArguments = transformArguments;
	return HMGET;
}

var HRANDFIELD_COUNT_WITHVALUES = {};

var HRANDFIELD_COUNT = {};

var HRANDFIELD = {};

var hasRequiredHRANDFIELD;

function requireHRANDFIELD () {
	if (hasRequiredHRANDFIELD) return HRANDFIELD;
	hasRequiredHRANDFIELD = 1;
	Object.defineProperty(HRANDFIELD, "__esModule", { value: true });
	HRANDFIELD.transformArguments = HRANDFIELD.IS_READ_ONLY = HRANDFIELD.FIRST_KEY_INDEX = void 0;
	HRANDFIELD.FIRST_KEY_INDEX = 1;
	HRANDFIELD.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['HRANDFIELD', key];
	}
	HRANDFIELD.transformArguments = transformArguments;
	return HRANDFIELD;
}

var hasRequiredHRANDFIELD_COUNT;

function requireHRANDFIELD_COUNT () {
	if (hasRequiredHRANDFIELD_COUNT) return HRANDFIELD_COUNT;
	hasRequiredHRANDFIELD_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const HRANDFIELD_1 = requireHRANDFIELD();
		var HRANDFIELD_2 = requireHRANDFIELD();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return HRANDFIELD_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return HRANDFIELD_2.IS_READ_ONLY; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, HRANDFIELD_1.transformArguments)(key),
		        count.toString()
		    ];
		}
		exports.transformArguments = transformArguments; 
	} (HRANDFIELD_COUNT));
	return HRANDFIELD_COUNT;
}

var hasRequiredHRANDFIELD_COUNT_WITHVALUES;

function requireHRANDFIELD_COUNT_WITHVALUES () {
	if (hasRequiredHRANDFIELD_COUNT_WITHVALUES) return HRANDFIELD_COUNT_WITHVALUES;
	hasRequiredHRANDFIELD_COUNT_WITHVALUES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const HRANDFIELD_COUNT_1 = requireHRANDFIELD_COUNT();
		var HRANDFIELD_COUNT_2 = requireHRANDFIELD_COUNT();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return HRANDFIELD_COUNT_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return HRANDFIELD_COUNT_2.IS_READ_ONLY; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, HRANDFIELD_COUNT_1.transformArguments)(key, count),
		        'WITHVALUES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformTuplesReply; } }); 
	} (HRANDFIELD_COUNT_WITHVALUES));
	return HRANDFIELD_COUNT_WITHVALUES;
}

var HSCAN = {};

var hasRequiredHSCAN;

function requireHSCAN () {
	if (hasRequiredHSCAN) return HSCAN;
	hasRequiredHSCAN = 1;
	Object.defineProperty(HSCAN, "__esModule", { value: true });
	HSCAN.transformReply = HSCAN.transformArguments = HSCAN.IS_READ_ONLY = HSCAN.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	HSCAN.FIRST_KEY_INDEX = 1;
	HSCAN.IS_READ_ONLY = true;
	function transformArguments(key, cursor, options) {
	    return (0, generic_transformers_1.pushScanArguments)([
	        'HSCAN',
	        key
	    ], cursor, options);
	}
	HSCAN.transformArguments = transformArguments;
	function transformReply([cursor, rawTuples]) {
	    const parsedTuples = [];
	    for (let i = 0; i < rawTuples.length; i += 2) {
	        parsedTuples.push({
	            field: rawTuples[i],
	            value: rawTuples[i + 1]
	        });
	    }
	    return {
	        cursor: Number(cursor),
	        tuples: parsedTuples
	    };
	}
	HSCAN.transformReply = transformReply;
	return HSCAN;
}

var HSET = {};

var hasRequiredHSET;

function requireHSET () {
	if (hasRequiredHSET) return HSET;
	hasRequiredHSET = 1;
	Object.defineProperty(HSET, "__esModule", { value: true });
	HSET.transformArguments = HSET.FIRST_KEY_INDEX = void 0;
	HSET.FIRST_KEY_INDEX = 1;
	function transformArguments(...[key, value, fieldValue]) {
	    const args = ['HSET', key];
	    if (typeof value === 'string' || typeof value === 'number' || Buffer.isBuffer(value)) {
	        args.push(convertValue(value), convertValue(fieldValue));
	    }
	    else if (value instanceof Map) {
	        pushMap(args, value);
	    }
	    else if (Array.isArray(value)) {
	        pushTuples(args, value);
	    }
	    else {
	        pushObject(args, value);
	    }
	    return args;
	}
	HSET.transformArguments = transformArguments;
	function pushMap(args, map) {
	    for (const [key, value] of map.entries()) {
	        args.push(convertValue(key), convertValue(value));
	    }
	}
	function pushTuples(args, tuples) {
	    for (const tuple of tuples) {
	        if (Array.isArray(tuple)) {
	            pushTuples(args, tuple);
	            continue;
	        }
	        args.push(convertValue(tuple));
	    }
	}
	function pushObject(args, object) {
	    for (const key of Object.keys(object)) {
	        args.push(convertValue(key), convertValue(object[key]));
	    }
	}
	function convertValue(value) {
	    return typeof value === 'number' ?
	        value.toString() :
	        value;
	}
	return HSET;
}

var HSETNX = {};

var hasRequiredHSETNX;

function requireHSETNX () {
	if (hasRequiredHSETNX) return HSETNX;
	hasRequiredHSETNX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, field, value) {
		    return ['HSETNX', key, field, value];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (HSETNX));
	return HSETNX;
}

var HSTRLEN = {};

var hasRequiredHSTRLEN;

function requireHSTRLEN () {
	if (hasRequiredHSTRLEN) return HSTRLEN;
	hasRequiredHSTRLEN = 1;
	Object.defineProperty(HSTRLEN, "__esModule", { value: true });
	HSTRLEN.transformArguments = HSTRLEN.FIRST_KEY_INDEX = void 0;
	HSTRLEN.FIRST_KEY_INDEX = 1;
	function transformArguments(key, field) {
	    return ['HSTRLEN', key, field];
	}
	HSTRLEN.transformArguments = transformArguments;
	return HSTRLEN;
}

var HVALS = {};

var hasRequiredHVALS;

function requireHVALS () {
	if (hasRequiredHVALS) return HVALS;
	hasRequiredHVALS = 1;
	Object.defineProperty(HVALS, "__esModule", { value: true });
	HVALS.transformArguments = HVALS.FIRST_KEY_INDEX = void 0;
	HVALS.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['HVALS', key];
	}
	HVALS.transformArguments = transformArguments;
	return HVALS;
}

var INCR = {};

var hasRequiredINCR;

function requireINCR () {
	if (hasRequiredINCR) return INCR;
	hasRequiredINCR = 1;
	Object.defineProperty(INCR, "__esModule", { value: true });
	INCR.transformArguments = INCR.FIRST_KEY_INDEX = void 0;
	INCR.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['INCR', key];
	}
	INCR.transformArguments = transformArguments;
	return INCR;
}

var INCRBY$3 = {};

var hasRequiredINCRBY$3;

function requireINCRBY$3 () {
	if (hasRequiredINCRBY$3) return INCRBY$3;
	hasRequiredINCRBY$3 = 1;
	Object.defineProperty(INCRBY$3, "__esModule", { value: true });
	INCRBY$3.transformArguments = INCRBY$3.FIRST_KEY_INDEX = void 0;
	INCRBY$3.FIRST_KEY_INDEX = 1;
	function transformArguments(key, increment) {
	    return ['INCRBY', key, increment.toString()];
	}
	INCRBY$3.transformArguments = transformArguments;
	return INCRBY$3;
}

var INCRBYFLOAT = {};

var hasRequiredINCRBYFLOAT;

function requireINCRBYFLOAT () {
	if (hasRequiredINCRBYFLOAT) return INCRBYFLOAT;
	hasRequiredINCRBYFLOAT = 1;
	Object.defineProperty(INCRBYFLOAT, "__esModule", { value: true });
	INCRBYFLOAT.transformArguments = INCRBYFLOAT.FIRST_KEY_INDEX = void 0;
	INCRBYFLOAT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, increment) {
	    return ['INCRBYFLOAT', key, increment.toString()];
	}
	INCRBYFLOAT.transformArguments = transformArguments;
	return INCRBYFLOAT;
}

var LCS_IDX_WITHMATCHLEN = {};

var LCS = {};

var hasRequiredLCS;

function requireLCS () {
	if (hasRequiredLCS) return LCS;
	hasRequiredLCS = 1;
	Object.defineProperty(LCS, "__esModule", { value: true });
	LCS.transformArguments = LCS.IS_READ_ONLY = LCS.FIRST_KEY_INDEX = void 0;
	LCS.FIRST_KEY_INDEX = 1;
	LCS.IS_READ_ONLY = true;
	function transformArguments(key1, key2) {
	    return [
	        'LCS',
	        key1,
	        key2
	    ];
	}
	LCS.transformArguments = transformArguments;
	return LCS;
}

var hasRequiredLCS_IDX_WITHMATCHLEN;

function requireLCS_IDX_WITHMATCHLEN () {
	if (hasRequiredLCS_IDX_WITHMATCHLEN) return LCS_IDX_WITHMATCHLEN;
	hasRequiredLCS_IDX_WITHMATCHLEN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		const LCS_1 = requireLCS();
		var LCS_2 = requireLCS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return LCS_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return LCS_2.IS_READ_ONLY; } });
		function transformArguments(key1, key2) {
		    const args = (0, LCS_1.transformArguments)(key1, key2);
		    args.push('IDX', 'WITHMATCHLEN');
		    return args;
		}
		exports.transformArguments = transformArguments;
		function transformReply(reply) {
		    return {
		        matches: reply[1].map(([key1, key2, length]) => ({
		            key1: (0, generic_transformers_1.transformRangeReply)(key1),
		            key2: (0, generic_transformers_1.transformRangeReply)(key2),
		            length
		        })),
		        length: reply[3]
		    };
		}
		exports.transformReply = transformReply; 
	} (LCS_IDX_WITHMATCHLEN));
	return LCS_IDX_WITHMATCHLEN;
}

var LCS_IDX = {};

var hasRequiredLCS_IDX;

function requireLCS_IDX () {
	if (hasRequiredLCS_IDX) return LCS_IDX;
	hasRequiredLCS_IDX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		const LCS_1 = requireLCS();
		var LCS_2 = requireLCS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return LCS_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return LCS_2.IS_READ_ONLY; } });
		function transformArguments(key1, key2) {
		    const args = (0, LCS_1.transformArguments)(key1, key2);
		    args.push('IDX');
		    return args;
		}
		exports.transformArguments = transformArguments;
		function transformReply(reply) {
		    return {
		        matches: reply[1].map(([key1, key2]) => ({
		            key1: (0, generic_transformers_1.transformRangeReply)(key1),
		            key2: (0, generic_transformers_1.transformRangeReply)(key2)
		        })),
		        length: reply[3]
		    };
		}
		exports.transformReply = transformReply; 
	} (LCS_IDX));
	return LCS_IDX;
}

var LCS_LEN = {};

var hasRequiredLCS_LEN;

function requireLCS_LEN () {
	if (hasRequiredLCS_LEN) return LCS_LEN;
	hasRequiredLCS_LEN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const LCS_1 = requireLCS();
		var LCS_2 = requireLCS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return LCS_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return LCS_2.IS_READ_ONLY; } });
		function transformArguments(key1, key2) {
		    const args = (0, LCS_1.transformArguments)(key1, key2);
		    args.push('LEN');
		    return args;
		}
		exports.transformArguments = transformArguments; 
	} (LCS_LEN));
	return LCS_LEN;
}

var LINDEX = {};

var hasRequiredLINDEX;

function requireLINDEX () {
	if (hasRequiredLINDEX) return LINDEX;
	hasRequiredLINDEX = 1;
	Object.defineProperty(LINDEX, "__esModule", { value: true });
	LINDEX.transformArguments = LINDEX.IS_READ_ONLY = LINDEX.FIRST_KEY_INDEX = void 0;
	LINDEX.FIRST_KEY_INDEX = 1;
	LINDEX.IS_READ_ONLY = true;
	function transformArguments(key, index) {
	    return ['LINDEX', key, index.toString()];
	}
	LINDEX.transformArguments = transformArguments;
	return LINDEX;
}

var LINSERT = {};

var hasRequiredLINSERT;

function requireLINSERT () {
	if (hasRequiredLINSERT) return LINSERT;
	hasRequiredLINSERT = 1;
	Object.defineProperty(LINSERT, "__esModule", { value: true });
	LINSERT.transformArguments = LINSERT.FIRST_KEY_INDEX = void 0;
	LINSERT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, position, pivot, element) {
	    return [
	        'LINSERT',
	        key,
	        position,
	        pivot,
	        element
	    ];
	}
	LINSERT.transformArguments = transformArguments;
	return LINSERT;
}

var LLEN = {};

var hasRequiredLLEN;

function requireLLEN () {
	if (hasRequiredLLEN) return LLEN;
	hasRequiredLLEN = 1;
	Object.defineProperty(LLEN, "__esModule", { value: true });
	LLEN.transformArguments = LLEN.IS_READ_ONLY = LLEN.FIRST_KEY_INDEX = void 0;
	LLEN.FIRST_KEY_INDEX = 1;
	LLEN.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['LLEN', key];
	}
	LLEN.transformArguments = transformArguments;
	return LLEN;
}

var LMOVE = {};

var hasRequiredLMOVE;

function requireLMOVE () {
	if (hasRequiredLMOVE) return LMOVE;
	hasRequiredLMOVE = 1;
	Object.defineProperty(LMOVE, "__esModule", { value: true });
	LMOVE.transformArguments = LMOVE.FIRST_KEY_INDEX = void 0;
	LMOVE.FIRST_KEY_INDEX = 1;
	function transformArguments(source, destination, sourceSide, destinationSide) {
	    return [
	        'LMOVE',
	        source,
	        destination,
	        sourceSide,
	        destinationSide,
	    ];
	}
	LMOVE.transformArguments = transformArguments;
	return LMOVE;
}

var LPOP_COUNT = {};

var hasRequiredLPOP_COUNT;

function requireLPOP_COUNT () {
	if (hasRequiredLPOP_COUNT) return LPOP_COUNT;
	hasRequiredLPOP_COUNT = 1;
	Object.defineProperty(LPOP_COUNT, "__esModule", { value: true });
	LPOP_COUNT.transformArguments = LPOP_COUNT.FIRST_KEY_INDEX = void 0;
	LPOP_COUNT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, count) {
	    return ['LPOP', key, count.toString()];
	}
	LPOP_COUNT.transformArguments = transformArguments;
	return LPOP_COUNT;
}

var LPOP = {};

var hasRequiredLPOP;

function requireLPOP () {
	if (hasRequiredLPOP) return LPOP;
	hasRequiredLPOP = 1;
	Object.defineProperty(LPOP, "__esModule", { value: true });
	LPOP.transformArguments = LPOP.FIRST_KEY_INDEX = void 0;
	LPOP.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['LPOP', key];
	}
	LPOP.transformArguments = transformArguments;
	return LPOP;
}

var LPOS_COUNT = {};

var LPOS = {};

var hasRequiredLPOS;

function requireLPOS () {
	if (hasRequiredLPOS) return LPOS;
	hasRequiredLPOS = 1;
	Object.defineProperty(LPOS, "__esModule", { value: true });
	LPOS.transformArguments = LPOS.IS_READ_ONLY = LPOS.FIRST_KEY_INDEX = void 0;
	LPOS.FIRST_KEY_INDEX = 1;
	LPOS.IS_READ_ONLY = true;
	function transformArguments(key, element, options) {
	    const args = ['LPOS', key, element];
	    if (typeof options?.RANK === 'number') {
	        args.push('RANK', options.RANK.toString());
	    }
	    if (typeof options?.MAXLEN === 'number') {
	        args.push('MAXLEN', options.MAXLEN.toString());
	    }
	    return args;
	}
	LPOS.transformArguments = transformArguments;
	return LPOS;
}

var hasRequiredLPOS_COUNT;

function requireLPOS_COUNT () {
	if (hasRequiredLPOS_COUNT) return LPOS_COUNT;
	hasRequiredLPOS_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		var LPOS_1 = requireLPOS();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return LPOS_1.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return LPOS_1.IS_READ_ONLY; } });
		function transformArguments(key, element, count, options) {
		    const args = ['LPOS', key, element];
		    if (typeof options?.RANK === 'number') {
		        args.push('RANK', options.RANK.toString());
		    }
		    args.push('COUNT', count.toString());
		    if (typeof options?.MAXLEN === 'number') {
		        args.push('MAXLEN', options.MAXLEN.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments; 
	} (LPOS_COUNT));
	return LPOS_COUNT;
}

var LPUSH = {};

var hasRequiredLPUSH;

function requireLPUSH () {
	if (hasRequiredLPUSH) return LPUSH;
	hasRequiredLPUSH = 1;
	Object.defineProperty(LPUSH, "__esModule", { value: true });
	LPUSH.transformArguments = LPUSH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	LPUSH.FIRST_KEY_INDEX = 1;
	function transformArguments(key, elements) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['LPUSH', key], elements);
	}
	LPUSH.transformArguments = transformArguments;
	return LPUSH;
}

var LPUSHX = {};

var hasRequiredLPUSHX;

function requireLPUSHX () {
	if (hasRequiredLPUSHX) return LPUSHX;
	hasRequiredLPUSHX = 1;
	Object.defineProperty(LPUSHX, "__esModule", { value: true });
	LPUSHX.transformArguments = LPUSHX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	LPUSHX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, element) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['LPUSHX', key], element);
	}
	LPUSHX.transformArguments = transformArguments;
	return LPUSHX;
}

var LRANGE = {};

var hasRequiredLRANGE;

function requireLRANGE () {
	if (hasRequiredLRANGE) return LRANGE;
	hasRequiredLRANGE = 1;
	Object.defineProperty(LRANGE, "__esModule", { value: true });
	LRANGE.transformArguments = LRANGE.IS_READ_ONLY = LRANGE.FIRST_KEY_INDEX = void 0;
	LRANGE.FIRST_KEY_INDEX = 1;
	LRANGE.IS_READ_ONLY = true;
	function transformArguments(key, start, stop) {
	    return [
	        'LRANGE',
	        key,
	        start.toString(),
	        stop.toString()
	    ];
	}
	LRANGE.transformArguments = transformArguments;
	return LRANGE;
}

var LREM = {};

var hasRequiredLREM;

function requireLREM () {
	if (hasRequiredLREM) return LREM;
	hasRequiredLREM = 1;
	Object.defineProperty(LREM, "__esModule", { value: true });
	LREM.transformArguments = LREM.FIRST_KEY_INDEX = void 0;
	LREM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, count, element) {
	    return [
	        'LREM',
	        key,
	        count.toString(),
	        element
	    ];
	}
	LREM.transformArguments = transformArguments;
	return LREM;
}

var LSET = {};

var hasRequiredLSET;

function requireLSET () {
	if (hasRequiredLSET) return LSET;
	hasRequiredLSET = 1;
	Object.defineProperty(LSET, "__esModule", { value: true });
	LSET.transformArguments = LSET.FIRST_KEY_INDEX = void 0;
	LSET.FIRST_KEY_INDEX = 1;
	function transformArguments(key, index, element) {
	    return [
	        'LSET',
	        key,
	        index.toString(),
	        element
	    ];
	}
	LSET.transformArguments = transformArguments;
	return LSET;
}

var LTRIM = {};

var hasRequiredLTRIM;

function requireLTRIM () {
	if (hasRequiredLTRIM) return LTRIM;
	hasRequiredLTRIM = 1;
	Object.defineProperty(LTRIM, "__esModule", { value: true });
	LTRIM.transformArguments = LTRIM.FIRST_KEY_INDEX = void 0;
	LTRIM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, start, stop) {
	    return [
	        'LTRIM',
	        key,
	        start.toString(),
	        stop.toString()
	    ];
	}
	LTRIM.transformArguments = transformArguments;
	return LTRIM;
}

var MGET$2 = {};

var hasRequiredMGET$2;

function requireMGET$2 () {
	if (hasRequiredMGET$2) return MGET$2;
	hasRequiredMGET$2 = 1;
	Object.defineProperty(MGET$2, "__esModule", { value: true });
	MGET$2.transformArguments = MGET$2.IS_READ_ONLY = MGET$2.FIRST_KEY_INDEX = void 0;
	MGET$2.FIRST_KEY_INDEX = 1;
	MGET$2.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return ['MGET', ...keys];
	}
	MGET$2.transformArguments = transformArguments;
	return MGET$2;
}

var MIGRATE = {};

var hasRequiredMIGRATE;

function requireMIGRATE () {
	if (hasRequiredMIGRATE) return MIGRATE;
	hasRequiredMIGRATE = 1;
	Object.defineProperty(MIGRATE, "__esModule", { value: true });
	MIGRATE.transformArguments = void 0;
	function transformArguments(host, port, key, destinationDb, timeout, options) {
	    const args = ['MIGRATE', host, port.toString()], isKeyArray = Array.isArray(key);
	    if (isKeyArray) {
	        args.push('');
	    }
	    else {
	        args.push(key);
	    }
	    args.push(destinationDb.toString(), timeout.toString());
	    if (options?.COPY) {
	        args.push('COPY');
	    }
	    if (options?.REPLACE) {
	        args.push('REPLACE');
	    }
	    if (options?.AUTH) {
	        if (options.AUTH.username) {
	            args.push('AUTH2', options.AUTH.username, options.AUTH.password);
	        }
	        else {
	            args.push('AUTH', options.AUTH.password);
	        }
	    }
	    if (isKeyArray) {
	        args.push('KEYS', ...key);
	    }
	    return args;
	}
	MIGRATE.transformArguments = transformArguments;
	return MIGRATE;
}

var MSET$1 = {};

var hasRequiredMSET$1;

function requireMSET$1 () {
	if (hasRequiredMSET$1) return MSET$1;
	hasRequiredMSET$1 = 1;
	Object.defineProperty(MSET$1, "__esModule", { value: true });
	MSET$1.transformArguments = MSET$1.FIRST_KEY_INDEX = void 0;
	MSET$1.FIRST_KEY_INDEX = 1;
	function transformArguments(toSet) {
	    const args = ['MSET'];
	    if (Array.isArray(toSet)) {
	        args.push(...toSet.flat());
	    }
	    else {
	        for (const key of Object.keys(toSet)) {
	            args.push(key, toSet[key]);
	        }
	    }
	    return args;
	}
	MSET$1.transformArguments = transformArguments;
	return MSET$1;
}

var MSETNX = {};

var hasRequiredMSETNX;

function requireMSETNX () {
	if (hasRequiredMSETNX) return MSETNX;
	hasRequiredMSETNX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(toSet) {
		    const args = ['MSETNX'];
		    if (Array.isArray(toSet)) {
		        args.push(...toSet.flat());
		    }
		    else {
		        for (const key of Object.keys(toSet)) {
		            args.push(key, toSet[key]);
		        }
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (MSETNX));
	return MSETNX;
}

var OBJECT_ENCODING = {};

var hasRequiredOBJECT_ENCODING;

function requireOBJECT_ENCODING () {
	if (hasRequiredOBJECT_ENCODING) return OBJECT_ENCODING;
	hasRequiredOBJECT_ENCODING = 1;
	Object.defineProperty(OBJECT_ENCODING, "__esModule", { value: true });
	OBJECT_ENCODING.transformArguments = OBJECT_ENCODING.IS_READ_ONLY = OBJECT_ENCODING.FIRST_KEY_INDEX = void 0;
	OBJECT_ENCODING.FIRST_KEY_INDEX = 2;
	OBJECT_ENCODING.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['OBJECT', 'ENCODING', key];
	}
	OBJECT_ENCODING.transformArguments = transformArguments;
	return OBJECT_ENCODING;
}

var OBJECT_FREQ = {};

var hasRequiredOBJECT_FREQ;

function requireOBJECT_FREQ () {
	if (hasRequiredOBJECT_FREQ) return OBJECT_FREQ;
	hasRequiredOBJECT_FREQ = 1;
	Object.defineProperty(OBJECT_FREQ, "__esModule", { value: true });
	OBJECT_FREQ.transformArguments = OBJECT_FREQ.IS_READ_ONLY = OBJECT_FREQ.FIRST_KEY_INDEX = void 0;
	OBJECT_FREQ.FIRST_KEY_INDEX = 2;
	OBJECT_FREQ.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['OBJECT', 'FREQ', key];
	}
	OBJECT_FREQ.transformArguments = transformArguments;
	return OBJECT_FREQ;
}

var OBJECT_IDLETIME = {};

var hasRequiredOBJECT_IDLETIME;

function requireOBJECT_IDLETIME () {
	if (hasRequiredOBJECT_IDLETIME) return OBJECT_IDLETIME;
	hasRequiredOBJECT_IDLETIME = 1;
	Object.defineProperty(OBJECT_IDLETIME, "__esModule", { value: true });
	OBJECT_IDLETIME.transformArguments = OBJECT_IDLETIME.IS_READ_ONLY = OBJECT_IDLETIME.FIRST_KEY_INDEX = void 0;
	OBJECT_IDLETIME.FIRST_KEY_INDEX = 2;
	OBJECT_IDLETIME.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['OBJECT', 'IDLETIME', key];
	}
	OBJECT_IDLETIME.transformArguments = transformArguments;
	return OBJECT_IDLETIME;
}

var OBJECT_REFCOUNT = {};

var hasRequiredOBJECT_REFCOUNT;

function requireOBJECT_REFCOUNT () {
	if (hasRequiredOBJECT_REFCOUNT) return OBJECT_REFCOUNT;
	hasRequiredOBJECT_REFCOUNT = 1;
	Object.defineProperty(OBJECT_REFCOUNT, "__esModule", { value: true });
	OBJECT_REFCOUNT.transformArguments = OBJECT_REFCOUNT.IS_READ_ONLY = OBJECT_REFCOUNT.FIRST_KEY_INDEX = void 0;
	OBJECT_REFCOUNT.FIRST_KEY_INDEX = 2;
	OBJECT_REFCOUNT.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['OBJECT', 'REFCOUNT', key];
	}
	OBJECT_REFCOUNT.transformArguments = transformArguments;
	return OBJECT_REFCOUNT;
}

var PERSIST = {};

var hasRequiredPERSIST;

function requirePERSIST () {
	if (hasRequiredPERSIST) return PERSIST;
	hasRequiredPERSIST = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key) {
		    return ['PERSIST', key];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (PERSIST));
	return PERSIST;
}

var PEXPIRE = {};

var hasRequiredPEXPIRE;

function requirePEXPIRE () {
	if (hasRequiredPEXPIRE) return PEXPIRE;
	hasRequiredPEXPIRE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, milliseconds, mode) {
		    const args = ['PEXPIRE', key, milliseconds.toString()];
		    if (mode) {
		        args.push(mode);
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (PEXPIRE));
	return PEXPIRE;
}

var PEXPIREAT = {};

var hasRequiredPEXPIREAT;

function requirePEXPIREAT () {
	if (hasRequiredPEXPIREAT) return PEXPIREAT;
	hasRequiredPEXPIREAT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, millisecondsTimestamp, mode) {
		    const args = [
		        'PEXPIREAT',
		        key,
		        (0, generic_transformers_1.transformPXAT)(millisecondsTimestamp)
		    ];
		    if (mode) {
		        args.push(mode);
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformBooleanReply; } }); 
	} (PEXPIREAT));
	return PEXPIREAT;
}

var PEXPIRETIME = {};

var hasRequiredPEXPIRETIME;

function requirePEXPIRETIME () {
	if (hasRequiredPEXPIRETIME) return PEXPIRETIME;
	hasRequiredPEXPIRETIME = 1;
	Object.defineProperty(PEXPIRETIME, "__esModule", { value: true });
	PEXPIRETIME.transformArguments = PEXPIRETIME.FIRST_KEY_INDEX = void 0;
	PEXPIRETIME.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['PEXPIRETIME', key];
	}
	PEXPIRETIME.transformArguments = transformArguments;
	return PEXPIRETIME;
}

var PFADD = {};

var hasRequiredPFADD;

function requirePFADD () {
	if (hasRequiredPFADD) return PFADD;
	hasRequiredPFADD = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, element) {
		    return (0, generic_transformers_1.pushVerdictArguments)(['PFADD', key], element);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformBooleanReply; } }); 
	} (PFADD));
	return PFADD;
}

var PFCOUNT = {};

var hasRequiredPFCOUNT;

function requirePFCOUNT () {
	if (hasRequiredPFCOUNT) return PFCOUNT;
	hasRequiredPFCOUNT = 1;
	Object.defineProperty(PFCOUNT, "__esModule", { value: true });
	PFCOUNT.transformArguments = PFCOUNT.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	PFCOUNT.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['PFCOUNT'], key);
	}
	PFCOUNT.transformArguments = transformArguments;
	return PFCOUNT;
}

var PFMERGE = {};

var hasRequiredPFMERGE;

function requirePFMERGE () {
	if (hasRequiredPFMERGE) return PFMERGE;
	hasRequiredPFMERGE = 1;
	Object.defineProperty(PFMERGE, "__esModule", { value: true });
	PFMERGE.transformArguments = PFMERGE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	PFMERGE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, source) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['PFMERGE', destination], source);
	}
	PFMERGE.transformArguments = transformArguments;
	return PFMERGE;
}

var PSETEX = {};

var hasRequiredPSETEX;

function requirePSETEX () {
	if (hasRequiredPSETEX) return PSETEX;
	hasRequiredPSETEX = 1;
	Object.defineProperty(PSETEX, "__esModule", { value: true });
	PSETEX.transformArguments = PSETEX.FIRST_KEY_INDEX = void 0;
	PSETEX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, milliseconds, value) {
	    return [
	        'PSETEX',
	        key,
	        milliseconds.toString(),
	        value
	    ];
	}
	PSETEX.transformArguments = transformArguments;
	return PSETEX;
}

var PTTL = {};

var hasRequiredPTTL;

function requirePTTL () {
	if (hasRequiredPTTL) return PTTL;
	hasRequiredPTTL = 1;
	Object.defineProperty(PTTL, "__esModule", { value: true });
	PTTL.transformArguments = PTTL.IS_READ_ONLY = PTTL.FIRST_KEY_INDEX = void 0;
	PTTL.FIRST_KEY_INDEX = 1;
	PTTL.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['PTTL', key];
	}
	PTTL.transformArguments = transformArguments;
	return PTTL;
}

var PUBLISH = {};

var hasRequiredPUBLISH;

function requirePUBLISH () {
	if (hasRequiredPUBLISH) return PUBLISH;
	hasRequiredPUBLISH = 1;
	Object.defineProperty(PUBLISH, "__esModule", { value: true });
	PUBLISH.transformArguments = PUBLISH.IS_READ_ONLY = void 0;
	PUBLISH.IS_READ_ONLY = true;
	function transformArguments(channel, message) {
	    return ['PUBLISH', channel, message];
	}
	PUBLISH.transformArguments = transformArguments;
	return PUBLISH;
}

var RENAME = {};

var hasRequiredRENAME;

function requireRENAME () {
	if (hasRequiredRENAME) return RENAME;
	hasRequiredRENAME = 1;
	Object.defineProperty(RENAME, "__esModule", { value: true });
	RENAME.transformArguments = RENAME.FIRST_KEY_INDEX = void 0;
	RENAME.FIRST_KEY_INDEX = 1;
	function transformArguments(key, newKey) {
	    return ['RENAME', key, newKey];
	}
	RENAME.transformArguments = transformArguments;
	return RENAME;
}

var RENAMENX = {};

var hasRequiredRENAMENX;

function requireRENAMENX () {
	if (hasRequiredRENAMENX) return RENAMENX;
	hasRequiredRENAMENX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, newKey) {
		    return ['RENAMENX', key, newKey];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (RENAMENX));
	return RENAMENX;
}

var RESTORE = {};

var hasRequiredRESTORE;

function requireRESTORE () {
	if (hasRequiredRESTORE) return RESTORE;
	hasRequiredRESTORE = 1;
	Object.defineProperty(RESTORE, "__esModule", { value: true });
	RESTORE.transformArguments = RESTORE.FIRST_KEY_INDEX = void 0;
	RESTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, ttl, serializedValue, options) {
	    const args = ['RESTORE', key, ttl.toString(), serializedValue];
	    if (options?.REPLACE) {
	        args.push('REPLACE');
	    }
	    if (options?.ABSTTL) {
	        args.push('ABSTTL');
	    }
	    if (options?.IDLETIME) {
	        args.push('IDLETIME', options.IDLETIME.toString());
	    }
	    if (options?.FREQ) {
	        args.push('FREQ', options.FREQ.toString());
	    }
	    return args;
	}
	RESTORE.transformArguments = transformArguments;
	return RESTORE;
}

var RPOP_COUNT = {};

var hasRequiredRPOP_COUNT;

function requireRPOP_COUNT () {
	if (hasRequiredRPOP_COUNT) return RPOP_COUNT;
	hasRequiredRPOP_COUNT = 1;
	Object.defineProperty(RPOP_COUNT, "__esModule", { value: true });
	RPOP_COUNT.transformArguments = RPOP_COUNT.FIRST_KEY_INDEX = void 0;
	RPOP_COUNT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, count) {
	    return ['RPOP', key, count.toString()];
	}
	RPOP_COUNT.transformArguments = transformArguments;
	return RPOP_COUNT;
}

var RPOP = {};

var hasRequiredRPOP;

function requireRPOP () {
	if (hasRequiredRPOP) return RPOP;
	hasRequiredRPOP = 1;
	Object.defineProperty(RPOP, "__esModule", { value: true });
	RPOP.transformArguments = RPOP.FIRST_KEY_INDEX = void 0;
	RPOP.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['RPOP', key];
	}
	RPOP.transformArguments = transformArguments;
	return RPOP;
}

var RPOPLPUSH = {};

var hasRequiredRPOPLPUSH;

function requireRPOPLPUSH () {
	if (hasRequiredRPOPLPUSH) return RPOPLPUSH;
	hasRequiredRPOPLPUSH = 1;
	Object.defineProperty(RPOPLPUSH, "__esModule", { value: true });
	RPOPLPUSH.transformArguments = RPOPLPUSH.FIRST_KEY_INDEX = void 0;
	RPOPLPUSH.FIRST_KEY_INDEX = 1;
	function transformArguments(source, destination) {
	    return ['RPOPLPUSH', source, destination];
	}
	RPOPLPUSH.transformArguments = transformArguments;
	return RPOPLPUSH;
}

var RPUSH = {};

var hasRequiredRPUSH;

function requireRPUSH () {
	if (hasRequiredRPUSH) return RPUSH;
	hasRequiredRPUSH = 1;
	Object.defineProperty(RPUSH, "__esModule", { value: true });
	RPUSH.transformArguments = RPUSH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	RPUSH.FIRST_KEY_INDEX = 1;
	function transformArguments(key, element) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['RPUSH', key], element);
	}
	RPUSH.transformArguments = transformArguments;
	return RPUSH;
}

var RPUSHX = {};

var hasRequiredRPUSHX;

function requireRPUSHX () {
	if (hasRequiredRPUSHX) return RPUSHX;
	hasRequiredRPUSHX = 1;
	Object.defineProperty(RPUSHX, "__esModule", { value: true });
	RPUSHX.transformArguments = RPUSHX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	RPUSHX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, element) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['RPUSHX', key], element);
	}
	RPUSHX.transformArguments = transformArguments;
	return RPUSHX;
}

var SADD = {};

var hasRequiredSADD;

function requireSADD () {
	if (hasRequiredSADD) return SADD;
	hasRequiredSADD = 1;
	Object.defineProperty(SADD, "__esModule", { value: true });
	SADD.transformArguments = SADD.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SADD.FIRST_KEY_INDEX = 1;
	function transformArguments(key, members) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SADD', key], members);
	}
	SADD.transformArguments = transformArguments;
	return SADD;
}

var SCARD = {};

var hasRequiredSCARD;

function requireSCARD () {
	if (hasRequiredSCARD) return SCARD;
	hasRequiredSCARD = 1;
	Object.defineProperty(SCARD, "__esModule", { value: true });
	SCARD.transformArguments = SCARD.FIRST_KEY_INDEX = void 0;
	SCARD.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['SCARD', key];
	}
	SCARD.transformArguments = transformArguments;
	return SCARD;
}

var SDIFF = {};

var hasRequiredSDIFF;

function requireSDIFF () {
	if (hasRequiredSDIFF) return SDIFF;
	hasRequiredSDIFF = 1;
	Object.defineProperty(SDIFF, "__esModule", { value: true });
	SDIFF.transformArguments = SDIFF.IS_READ_ONLY = SDIFF.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SDIFF.FIRST_KEY_INDEX = 1;
	SDIFF.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SDIFF'], keys);
	}
	SDIFF.transformArguments = transformArguments;
	return SDIFF;
}

var SDIFFSTORE = {};

var hasRequiredSDIFFSTORE;

function requireSDIFFSTORE () {
	if (hasRequiredSDIFFSTORE) return SDIFFSTORE;
	hasRequiredSDIFFSTORE = 1;
	Object.defineProperty(SDIFFSTORE, "__esModule", { value: true });
	SDIFFSTORE.transformArguments = SDIFFSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SDIFFSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SDIFFSTORE', destination], keys);
	}
	SDIFFSTORE.transformArguments = transformArguments;
	return SDIFFSTORE;
}

var SET$1 = {};

var hasRequiredSET$1;

function requireSET$1 () {
	if (hasRequiredSET$1) return SET$1;
	hasRequiredSET$1 = 1;
	Object.defineProperty(SET$1, "__esModule", { value: true });
	SET$1.transformArguments = SET$1.FIRST_KEY_INDEX = void 0;
	SET$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, value, options) {
	    const args = [
	        'SET',
	        key,
	        typeof value === 'number' ? value.toString() : value
	    ];
	    if (options?.EX !== undefined) {
	        args.push('EX', options.EX.toString());
	    }
	    else if (options?.PX !== undefined) {
	        args.push('PX', options.PX.toString());
	    }
	    else if (options?.EXAT !== undefined) {
	        args.push('EXAT', options.EXAT.toString());
	    }
	    else if (options?.PXAT !== undefined) {
	        args.push('PXAT', options.PXAT.toString());
	    }
	    else if (options?.KEEPTTL) {
	        args.push('KEEPTTL');
	    }
	    if (options?.NX) {
	        args.push('NX');
	    }
	    else if (options?.XX) {
	        args.push('XX');
	    }
	    if (options?.GET) {
	        args.push('GET');
	    }
	    return args;
	}
	SET$1.transformArguments = transformArguments;
	return SET$1;
}

var SETBIT = {};

var hasRequiredSETBIT;

function requireSETBIT () {
	if (hasRequiredSETBIT) return SETBIT;
	hasRequiredSETBIT = 1;
	Object.defineProperty(SETBIT, "__esModule", { value: true });
	SETBIT.transformArguments = SETBIT.FIRST_KEY_INDEX = void 0;
	SETBIT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, offset, value) {
	    return ['SETBIT', key, offset.toString(), value.toString()];
	}
	SETBIT.transformArguments = transformArguments;
	return SETBIT;
}

var SETEX = {};

var hasRequiredSETEX;

function requireSETEX () {
	if (hasRequiredSETEX) return SETEX;
	hasRequiredSETEX = 1;
	Object.defineProperty(SETEX, "__esModule", { value: true });
	SETEX.transformArguments = SETEX.FIRST_KEY_INDEX = void 0;
	SETEX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, seconds, value) {
	    return [
	        'SETEX',
	        key,
	        seconds.toString(),
	        value
	    ];
	}
	SETEX.transformArguments = transformArguments;
	return SETEX;
}

var SETNX = {};

var hasRequiredSETNX;

function requireSETNX () {
	if (hasRequiredSETNX) return SETNX;
	hasRequiredSETNX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, value) {
		    return ['SETNX', key, value];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (SETNX));
	return SETNX;
}

var SETRANGE = {};

var hasRequiredSETRANGE;

function requireSETRANGE () {
	if (hasRequiredSETRANGE) return SETRANGE;
	hasRequiredSETRANGE = 1;
	Object.defineProperty(SETRANGE, "__esModule", { value: true });
	SETRANGE.transformArguments = SETRANGE.FIRST_KEY_INDEX = void 0;
	SETRANGE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, offset, value) {
	    return ['SETRANGE', key, offset.toString(), value];
	}
	SETRANGE.transformArguments = transformArguments;
	return SETRANGE;
}

var SINTER = {};

var hasRequiredSINTER;

function requireSINTER () {
	if (hasRequiredSINTER) return SINTER;
	hasRequiredSINTER = 1;
	Object.defineProperty(SINTER, "__esModule", { value: true });
	SINTER.transformArguments = SINTER.IS_READ_ONLY = SINTER.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SINTER.FIRST_KEY_INDEX = 1;
	SINTER.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SINTER'], keys);
	}
	SINTER.transformArguments = transformArguments;
	return SINTER;
}

var SINTERCARD = {};

var hasRequiredSINTERCARD;

function requireSINTERCARD () {
	if (hasRequiredSINTERCARD) return SINTERCARD;
	hasRequiredSINTERCARD = 1;
	Object.defineProperty(SINTERCARD, "__esModule", { value: true });
	SINTERCARD.transformArguments = SINTERCARD.IS_READ_ONLY = SINTERCARD.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SINTERCARD.FIRST_KEY_INDEX = 2;
	SINTERCARD.IS_READ_ONLY = true;
	function transformArguments(keys, limit) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['SINTERCARD'], keys);
	    if (limit) {
	        args.push('LIMIT', limit.toString());
	    }
	    return args;
	}
	SINTERCARD.transformArguments = transformArguments;
	return SINTERCARD;
}

var SINTERSTORE = {};

var hasRequiredSINTERSTORE;

function requireSINTERSTORE () {
	if (hasRequiredSINTERSTORE) return SINTERSTORE;
	hasRequiredSINTERSTORE = 1;
	Object.defineProperty(SINTERSTORE, "__esModule", { value: true });
	SINTERSTORE.transformArguments = SINTERSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SINTERSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SINTERSTORE', destination], keys);
	}
	SINTERSTORE.transformArguments = transformArguments;
	return SINTERSTORE;
}

var SISMEMBER = {};

var hasRequiredSISMEMBER;

function requireSISMEMBER () {
	if (hasRequiredSISMEMBER) return SISMEMBER;
	hasRequiredSISMEMBER = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, member) {
		    return ['SISMEMBER', key, member];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (SISMEMBER));
	return SISMEMBER;
}

var SMEMBERS = {};

var hasRequiredSMEMBERS;

function requireSMEMBERS () {
	if (hasRequiredSMEMBERS) return SMEMBERS;
	hasRequiredSMEMBERS = 1;
	Object.defineProperty(SMEMBERS, "__esModule", { value: true });
	SMEMBERS.transformArguments = SMEMBERS.FIRST_KEY_INDEX = void 0;
	SMEMBERS.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['SMEMBERS', key];
	}
	SMEMBERS.transformArguments = transformArguments;
	return SMEMBERS;
}

var SMISMEMBER = {};

var hasRequiredSMISMEMBER;

function requireSMISMEMBER () {
	if (hasRequiredSMISMEMBER) return SMISMEMBER;
	hasRequiredSMISMEMBER = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, members) {
		    return ['SMISMEMBER', key, ...members];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanArrayReply; } }); 
	} (SMISMEMBER));
	return SMISMEMBER;
}

var SMOVE = {};

var hasRequiredSMOVE;

function requireSMOVE () {
	if (hasRequiredSMOVE) return SMOVE;
	hasRequiredSMOVE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(source, destination, member) {
		    return ['SMOVE', source, destination, member];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (SMOVE));
	return SMOVE;
}

var SORT_RO = {};

var hasRequiredSORT_RO;

function requireSORT_RO () {
	if (hasRequiredSORT_RO) return SORT_RO;
	hasRequiredSORT_RO = 1;
	Object.defineProperty(SORT_RO, "__esModule", { value: true });
	SORT_RO.transformArguments = SORT_RO.IS_READ_ONLY = SORT_RO.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SORT_RO.FIRST_KEY_INDEX = 1;
	SORT_RO.IS_READ_ONLY = true;
	function transformArguments(key, options) {
	    return (0, generic_transformers_1.pushSortArguments)(['SORT_RO', key], options);
	}
	SORT_RO.transformArguments = transformArguments;
	return SORT_RO;
}

var SORT_STORE = {};

var SORT = {};

var hasRequiredSORT;

function requireSORT () {
	if (hasRequiredSORT) return SORT;
	hasRequiredSORT = 1;
	Object.defineProperty(SORT, "__esModule", { value: true });
	SORT.transformArguments = SORT.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SORT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, options) {
	    return (0, generic_transformers_1.pushSortArguments)(['SORT', key], options);
	}
	SORT.transformArguments = transformArguments;
	return SORT;
}

var hasRequiredSORT_STORE;

function requireSORT_STORE () {
	if (hasRequiredSORT_STORE) return SORT_STORE;
	hasRequiredSORT_STORE = 1;
	Object.defineProperty(SORT_STORE, "__esModule", { value: true });
	SORT_STORE.transformArguments = SORT_STORE.FIRST_KEY_INDEX = void 0;
	const SORT_1 = requireSORT();
	SORT_STORE.FIRST_KEY_INDEX = 1;
	function transformArguments(source, destination, options) {
	    const args = (0, SORT_1.transformArguments)(source, options);
	    args.push('STORE', destination);
	    return args;
	}
	SORT_STORE.transformArguments = transformArguments;
	return SORT_STORE;
}

var SPOP = {};

var hasRequiredSPOP;

function requireSPOP () {
	if (hasRequiredSPOP) return SPOP;
	hasRequiredSPOP = 1;
	Object.defineProperty(SPOP, "__esModule", { value: true });
	SPOP.transformArguments = SPOP.FIRST_KEY_INDEX = void 0;
	SPOP.FIRST_KEY_INDEX = 1;
	function transformArguments(key, count) {
	    const args = ['SPOP', key];
	    if (typeof count === 'number') {
	        args.push(count.toString());
	    }
	    return args;
	}
	SPOP.transformArguments = transformArguments;
	return SPOP;
}

var SPUBLISH = {};

var hasRequiredSPUBLISH;

function requireSPUBLISH () {
	if (hasRequiredSPUBLISH) return SPUBLISH;
	hasRequiredSPUBLISH = 1;
	Object.defineProperty(SPUBLISH, "__esModule", { value: true });
	SPUBLISH.transformArguments = SPUBLISH.FIRST_KEY_INDEX = SPUBLISH.IS_READ_ONLY = void 0;
	SPUBLISH.IS_READ_ONLY = true;
	SPUBLISH.FIRST_KEY_INDEX = 1;
	function transformArguments(channel, message) {
	    return ['SPUBLISH', channel, message];
	}
	SPUBLISH.transformArguments = transformArguments;
	return SPUBLISH;
}

var SRANDMEMBER_COUNT = {};

var SRANDMEMBER = {};

var hasRequiredSRANDMEMBER;

function requireSRANDMEMBER () {
	if (hasRequiredSRANDMEMBER) return SRANDMEMBER;
	hasRequiredSRANDMEMBER = 1;
	Object.defineProperty(SRANDMEMBER, "__esModule", { value: true });
	SRANDMEMBER.transformArguments = SRANDMEMBER.FIRST_KEY_INDEX = void 0;
	SRANDMEMBER.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['SRANDMEMBER', key];
	}
	SRANDMEMBER.transformArguments = transformArguments;
	return SRANDMEMBER;
}

var hasRequiredSRANDMEMBER_COUNT;

function requireSRANDMEMBER_COUNT () {
	if (hasRequiredSRANDMEMBER_COUNT) return SRANDMEMBER_COUNT;
	hasRequiredSRANDMEMBER_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const SRANDMEMBER_1 = requireSRANDMEMBER();
		var SRANDMEMBER_2 = requireSRANDMEMBER();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return SRANDMEMBER_2.FIRST_KEY_INDEX; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, SRANDMEMBER_1.transformArguments)(key),
		        count.toString()
		    ];
		}
		exports.transformArguments = transformArguments; 
	} (SRANDMEMBER_COUNT));
	return SRANDMEMBER_COUNT;
}

var SREM = {};

var hasRequiredSREM;

function requireSREM () {
	if (hasRequiredSREM) return SREM;
	hasRequiredSREM = 1;
	Object.defineProperty(SREM, "__esModule", { value: true });
	SREM.transformArguments = SREM.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SREM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, members) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SREM', key], members);
	}
	SREM.transformArguments = transformArguments;
	return SREM;
}

var SSCAN = {};

var hasRequiredSSCAN;

function requireSSCAN () {
	if (hasRequiredSSCAN) return SSCAN;
	hasRequiredSSCAN = 1;
	Object.defineProperty(SSCAN, "__esModule", { value: true });
	SSCAN.transformReply = SSCAN.transformArguments = SSCAN.IS_READ_ONLY = SSCAN.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SSCAN.FIRST_KEY_INDEX = 1;
	SSCAN.IS_READ_ONLY = true;
	function transformArguments(key, cursor, options) {
	    return (0, generic_transformers_1.pushScanArguments)([
	        'SSCAN',
	        key,
	    ], cursor, options);
	}
	SSCAN.transformArguments = transformArguments;
	function transformReply([cursor, members]) {
	    return {
	        cursor: Number(cursor),
	        members
	    };
	}
	SSCAN.transformReply = transformReply;
	return SSCAN;
}

var STRLEN$1 = {};

var hasRequiredSTRLEN$1;

function requireSTRLEN$1 () {
	if (hasRequiredSTRLEN$1) return STRLEN$1;
	hasRequiredSTRLEN$1 = 1;
	Object.defineProperty(STRLEN$1, "__esModule", { value: true });
	STRLEN$1.transformArguments = STRLEN$1.IS_READ_ONLY = STRLEN$1.FIRST_KEY_INDEX = void 0;
	STRLEN$1.FIRST_KEY_INDEX = 1;
	STRLEN$1.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['STRLEN', key];
	}
	STRLEN$1.transformArguments = transformArguments;
	return STRLEN$1;
}

var SUNION = {};

var hasRequiredSUNION;

function requireSUNION () {
	if (hasRequiredSUNION) return SUNION;
	hasRequiredSUNION = 1;
	Object.defineProperty(SUNION, "__esModule", { value: true });
	SUNION.transformArguments = SUNION.IS_READ_ONLY = SUNION.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SUNION.FIRST_KEY_INDEX = 1;
	SUNION.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SUNION'], keys);
	}
	SUNION.transformArguments = transformArguments;
	return SUNION;
}

var SUNIONSTORE = {};

var hasRequiredSUNIONSTORE;

function requireSUNIONSTORE () {
	if (hasRequiredSUNIONSTORE) return SUNIONSTORE;
	hasRequiredSUNIONSTORE = 1;
	Object.defineProperty(SUNIONSTORE, "__esModule", { value: true });
	SUNIONSTORE.transformArguments = SUNIONSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SUNIONSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['SUNIONSTORE', destination], keys);
	}
	SUNIONSTORE.transformArguments = transformArguments;
	return SUNIONSTORE;
}

var TOUCH = {};

var hasRequiredTOUCH;

function requireTOUCH () {
	if (hasRequiredTOUCH) return TOUCH;
	hasRequiredTOUCH = 1;
	Object.defineProperty(TOUCH, "__esModule", { value: true });
	TOUCH.transformArguments = TOUCH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	TOUCH.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['TOUCH'], key);
	}
	TOUCH.transformArguments = transformArguments;
	return TOUCH;
}

var TTL = {};

var hasRequiredTTL;

function requireTTL () {
	if (hasRequiredTTL) return TTL;
	hasRequiredTTL = 1;
	Object.defineProperty(TTL, "__esModule", { value: true });
	TTL.transformArguments = TTL.IS_READ_ONLY = TTL.FIRST_KEY_INDEX = void 0;
	TTL.FIRST_KEY_INDEX = 1;
	TTL.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TTL', key];
	}
	TTL.transformArguments = transformArguments;
	return TTL;
}

var TYPE$1 = {};

var hasRequiredTYPE$1;

function requireTYPE$1 () {
	if (hasRequiredTYPE$1) return TYPE$1;
	hasRequiredTYPE$1 = 1;
	Object.defineProperty(TYPE$1, "__esModule", { value: true });
	TYPE$1.transformArguments = TYPE$1.IS_READ_ONLY = TYPE$1.FIRST_KEY_INDEX = void 0;
	TYPE$1.FIRST_KEY_INDEX = 1;
	TYPE$1.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TYPE', key];
	}
	TYPE$1.transformArguments = transformArguments;
	return TYPE$1;
}

var UNLINK = {};

var hasRequiredUNLINK;

function requireUNLINK () {
	if (hasRequiredUNLINK) return UNLINK;
	hasRequiredUNLINK = 1;
	Object.defineProperty(UNLINK, "__esModule", { value: true });
	UNLINK.transformArguments = UNLINK.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	UNLINK.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['UNLINK'], key);
	}
	UNLINK.transformArguments = transformArguments;
	return UNLINK;
}

var WATCH = {};

var hasRequiredWATCH;

function requireWATCH () {
	if (hasRequiredWATCH) return WATCH;
	hasRequiredWATCH = 1;
	Object.defineProperty(WATCH, "__esModule", { value: true });
	WATCH.transformArguments = WATCH.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	WATCH.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['WATCH'], key);
	}
	WATCH.transformArguments = transformArguments;
	return WATCH;
}

var XACK = {};

var hasRequiredXACK;

function requireXACK () {
	if (hasRequiredXACK) return XACK;
	hasRequiredXACK = 1;
	Object.defineProperty(XACK, "__esModule", { value: true });
	XACK.transformArguments = XACK.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	XACK.FIRST_KEY_INDEX = 1;
	function transformArguments(key, group, id) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['XACK', key, group], id);
	}
	XACK.transformArguments = transformArguments;
	return XACK;
}

var XADD = {};

var hasRequiredXADD;

function requireXADD () {
	if (hasRequiredXADD) return XADD;
	hasRequiredXADD = 1;
	Object.defineProperty(XADD, "__esModule", { value: true });
	XADD.transformArguments = XADD.FIRST_KEY_INDEX = void 0;
	XADD.FIRST_KEY_INDEX = 1;
	function transformArguments(key, id, message, options) {
	    const args = ['XADD', key];
	    if (options?.NOMKSTREAM) {
	        args.push('NOMKSTREAM');
	    }
	    if (options?.TRIM) {
	        if (options.TRIM.strategy) {
	            args.push(options.TRIM.strategy);
	        }
	        if (options.TRIM.strategyModifier) {
	            args.push(options.TRIM.strategyModifier);
	        }
	        args.push(options.TRIM.threshold.toString());
	        if (options.TRIM.limit) {
	            args.push('LIMIT', options.TRIM.limit.toString());
	        }
	    }
	    args.push(id);
	    for (const [key, value] of Object.entries(message)) {
	        args.push(key, value);
	    }
	    return args;
	}
	XADD.transformArguments = transformArguments;
	return XADD;
}

var XAUTOCLAIM_JUSTID = {};

var XAUTOCLAIM = {};

var hasRequiredXAUTOCLAIM;

function requireXAUTOCLAIM () {
	if (hasRequiredXAUTOCLAIM) return XAUTOCLAIM;
	hasRequiredXAUTOCLAIM = 1;
	Object.defineProperty(XAUTOCLAIM, "__esModule", { value: true });
	XAUTOCLAIM.transformReply = XAUTOCLAIM.transformArguments = XAUTOCLAIM.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	XAUTOCLAIM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, group, consumer, minIdleTime, start, options) {
	    const args = ['XAUTOCLAIM', key, group, consumer, minIdleTime.toString(), start];
	    if (options?.COUNT) {
	        args.push('COUNT', options.COUNT.toString());
	    }
	    return args;
	}
	XAUTOCLAIM.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        nextId: reply[0],
	        messages: (0, generic_transformers_1.transformStreamMessagesNullReply)(reply[1])
	    };
	}
	XAUTOCLAIM.transformReply = transformReply;
	return XAUTOCLAIM;
}

var hasRequiredXAUTOCLAIM_JUSTID;

function requireXAUTOCLAIM_JUSTID () {
	if (hasRequiredXAUTOCLAIM_JUSTID) return XAUTOCLAIM_JUSTID;
	hasRequiredXAUTOCLAIM_JUSTID = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const XAUTOCLAIM_1 = requireXAUTOCLAIM();
		var XAUTOCLAIM_2 = requireXAUTOCLAIM();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return XAUTOCLAIM_2.FIRST_KEY_INDEX; } });
		function transformArguments(...args) {
		    return [
		        ...(0, XAUTOCLAIM_1.transformArguments)(...args),
		        'JUSTID'
		    ];
		}
		exports.transformArguments = transformArguments;
		function transformReply(reply) {
		    return {
		        nextId: reply[0],
		        messages: reply[1]
		    };
		}
		exports.transformReply = transformReply; 
	} (XAUTOCLAIM_JUSTID));
	return XAUTOCLAIM_JUSTID;
}

var XCLAIM_JUSTID = {};

var XCLAIM = {};

var hasRequiredXCLAIM;

function requireXCLAIM () {
	if (hasRequiredXCLAIM) return XCLAIM;
	hasRequiredXCLAIM = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, group, consumer, minIdleTime, id, options) {
		    const args = (0, generic_transformers_1.pushVerdictArguments)(['XCLAIM', key, group, consumer, minIdleTime.toString()], id);
		    if (options?.IDLE) {
		        args.push('IDLE', options.IDLE.toString());
		    }
		    if (options?.TIME) {
		        args.push('TIME', (typeof options.TIME === 'number' ? options.TIME : options.TIME.getTime()).toString());
		    }
		    if (options?.RETRYCOUNT) {
		        args.push('RETRYCOUNT', options.RETRYCOUNT.toString());
		    }
		    if (options?.FORCE) {
		        args.push('FORCE');
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformStreamMessagesNullReply; } }); 
	} (XCLAIM));
	return XCLAIM;
}

var hasRequiredXCLAIM_JUSTID;

function requireXCLAIM_JUSTID () {
	if (hasRequiredXCLAIM_JUSTID) return XCLAIM_JUSTID;
	hasRequiredXCLAIM_JUSTID = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const XCLAIM_1 = requireXCLAIM();
		var XCLAIM_2 = requireXCLAIM();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return XCLAIM_2.FIRST_KEY_INDEX; } });
		function transformArguments(...args) {
		    return [
		        ...(0, XCLAIM_1.transformArguments)(...args),
		        'JUSTID'
		    ];
		}
		exports.transformArguments = transformArguments; 
	} (XCLAIM_JUSTID));
	return XCLAIM_JUSTID;
}

var XDEL = {};

var hasRequiredXDEL;

function requireXDEL () {
	if (hasRequiredXDEL) return XDEL;
	hasRequiredXDEL = 1;
	Object.defineProperty(XDEL, "__esModule", { value: true });
	XDEL.transformArguments = XDEL.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	XDEL.FIRST_KEY_INDEX = 1;
	function transformArguments(key, id) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['XDEL', key], id);
	}
	XDEL.transformArguments = transformArguments;
	return XDEL;
}

var XGROUP_CREATE = {};

var hasRequiredXGROUP_CREATE;

function requireXGROUP_CREATE () {
	if (hasRequiredXGROUP_CREATE) return XGROUP_CREATE;
	hasRequiredXGROUP_CREATE = 1;
	Object.defineProperty(XGROUP_CREATE, "__esModule", { value: true });
	XGROUP_CREATE.transformArguments = XGROUP_CREATE.FIRST_KEY_INDEX = void 0;
	XGROUP_CREATE.FIRST_KEY_INDEX = 2;
	function transformArguments(key, group, id, options) {
	    const args = ['XGROUP', 'CREATE', key, group, id];
	    if (options?.MKSTREAM) {
	        args.push('MKSTREAM');
	    }
	    return args;
	}
	XGROUP_CREATE.transformArguments = transformArguments;
	return XGROUP_CREATE;
}

var XGROUP_CREATECONSUMER = {};

var hasRequiredXGROUP_CREATECONSUMER;

function requireXGROUP_CREATECONSUMER () {
	if (hasRequiredXGROUP_CREATECONSUMER) return XGROUP_CREATECONSUMER;
	hasRequiredXGROUP_CREATECONSUMER = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 2;
		function transformArguments(key, group, consumer) {
		    return ['XGROUP', 'CREATECONSUMER', key, group, consumer];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (XGROUP_CREATECONSUMER));
	return XGROUP_CREATECONSUMER;
}

var XGROUP_DELCONSUMER = {};

var hasRequiredXGROUP_DELCONSUMER;

function requireXGROUP_DELCONSUMER () {
	if (hasRequiredXGROUP_DELCONSUMER) return XGROUP_DELCONSUMER;
	hasRequiredXGROUP_DELCONSUMER = 1;
	Object.defineProperty(XGROUP_DELCONSUMER, "__esModule", { value: true });
	XGROUP_DELCONSUMER.transformArguments = XGROUP_DELCONSUMER.FIRST_KEY_INDEX = void 0;
	XGROUP_DELCONSUMER.FIRST_KEY_INDEX = 2;
	function transformArguments(key, group, consumer) {
	    return ['XGROUP', 'DELCONSUMER', key, group, consumer];
	}
	XGROUP_DELCONSUMER.transformArguments = transformArguments;
	return XGROUP_DELCONSUMER;
}

var XGROUP_DESTROY = {};

var hasRequiredXGROUP_DESTROY;

function requireXGROUP_DESTROY () {
	if (hasRequiredXGROUP_DESTROY) return XGROUP_DESTROY;
	hasRequiredXGROUP_DESTROY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 2;
		function transformArguments(key, group) {
		    return ['XGROUP', 'DESTROY', key, group];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (XGROUP_DESTROY));
	return XGROUP_DESTROY;
}

var XGROUP_SETID = {};

var hasRequiredXGROUP_SETID;

function requireXGROUP_SETID () {
	if (hasRequiredXGROUP_SETID) return XGROUP_SETID;
	hasRequiredXGROUP_SETID = 1;
	Object.defineProperty(XGROUP_SETID, "__esModule", { value: true });
	XGROUP_SETID.transformArguments = XGROUP_SETID.FIRST_KEY_INDEX = void 0;
	XGROUP_SETID.FIRST_KEY_INDEX = 2;
	function transformArguments(key, group, id) {
	    return ['XGROUP', 'SETID', key, group, id];
	}
	XGROUP_SETID.transformArguments = transformArguments;
	return XGROUP_SETID;
}

var XINFO_CONSUMERS = {};

var hasRequiredXINFO_CONSUMERS;

function requireXINFO_CONSUMERS () {
	if (hasRequiredXINFO_CONSUMERS) return XINFO_CONSUMERS;
	hasRequiredXINFO_CONSUMERS = 1;
	Object.defineProperty(XINFO_CONSUMERS, "__esModule", { value: true });
	XINFO_CONSUMERS.transformReply = XINFO_CONSUMERS.transformArguments = XINFO_CONSUMERS.IS_READ_ONLY = XINFO_CONSUMERS.FIRST_KEY_INDEX = void 0;
	XINFO_CONSUMERS.FIRST_KEY_INDEX = 2;
	XINFO_CONSUMERS.IS_READ_ONLY = true;
	function transformArguments(key, group) {
	    return ['XINFO', 'CONSUMERS', key, group];
	}
	XINFO_CONSUMERS.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    return rawReply.map(consumer => ({
	        name: consumer[1],
	        pending: consumer[3],
	        idle: consumer[5],
	        inactive: consumer[7]
	    }));
	}
	XINFO_CONSUMERS.transformReply = transformReply;
	return XINFO_CONSUMERS;
}

var XINFO_GROUPS = {};

var hasRequiredXINFO_GROUPS;

function requireXINFO_GROUPS () {
	if (hasRequiredXINFO_GROUPS) return XINFO_GROUPS;
	hasRequiredXINFO_GROUPS = 1;
	Object.defineProperty(XINFO_GROUPS, "__esModule", { value: true });
	XINFO_GROUPS.transformReply = XINFO_GROUPS.transformArguments = XINFO_GROUPS.IS_READ_ONLY = XINFO_GROUPS.FIRST_KEY_INDEX = void 0;
	XINFO_GROUPS.FIRST_KEY_INDEX = 2;
	XINFO_GROUPS.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['XINFO', 'GROUPS', key];
	}
	XINFO_GROUPS.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    return rawReply.map(group => ({
	        name: group[1],
	        consumers: group[3],
	        pending: group[5],
	        lastDeliveredId: group[7]
	    }));
	}
	XINFO_GROUPS.transformReply = transformReply;
	return XINFO_GROUPS;
}

var XINFO_STREAM = {};

var hasRequiredXINFO_STREAM;

function requireXINFO_STREAM () {
	if (hasRequiredXINFO_STREAM) return XINFO_STREAM;
	hasRequiredXINFO_STREAM = 1;
	Object.defineProperty(XINFO_STREAM, "__esModule", { value: true });
	XINFO_STREAM.transformReply = XINFO_STREAM.transformArguments = XINFO_STREAM.IS_READ_ONLY = XINFO_STREAM.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	XINFO_STREAM.FIRST_KEY_INDEX = 2;
	XINFO_STREAM.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['XINFO', 'STREAM', key];
	}
	XINFO_STREAM.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const parsedReply = {};
	    for (let i = 0; i < rawReply.length; i += 2) {
	        switch (rawReply[i]) {
	            case 'length':
	                parsedReply.length = rawReply[i + 1];
	                break;
	            case 'radix-tree-keys':
	                parsedReply.radixTreeKeys = rawReply[i + 1];
	                break;
	            case 'radix-tree-nodes':
	                parsedReply.radixTreeNodes = rawReply[i + 1];
	                break;
	            case 'groups':
	                parsedReply.groups = rawReply[i + 1];
	                break;
	            case 'last-generated-id':
	                parsedReply.lastGeneratedId = rawReply[i + 1];
	                break;
	            case 'first-entry':
	                parsedReply.firstEntry = rawReply[i + 1] ? {
	                    id: rawReply[i + 1][0],
	                    message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
	                } : null;
	                break;
	            case 'last-entry':
	                parsedReply.lastEntry = rawReply[i + 1] ? {
	                    id: rawReply[i + 1][0],
	                    message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
	                } : null;
	                break;
	        }
	    }
	    return parsedReply;
	}
	XINFO_STREAM.transformReply = transformReply;
	return XINFO_STREAM;
}

var XLEN = {};

var hasRequiredXLEN;

function requireXLEN () {
	if (hasRequiredXLEN) return XLEN;
	hasRequiredXLEN = 1;
	Object.defineProperty(XLEN, "__esModule", { value: true });
	XLEN.transformArguments = XLEN.IS_READ_ONLY = XLEN.FIRST_KEY_INDEX = void 0;
	XLEN.FIRST_KEY_INDEX = 1;
	XLEN.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['XLEN', key];
	}
	XLEN.transformArguments = transformArguments;
	return XLEN;
}

var XPENDING_RANGE = {};

var hasRequiredXPENDING_RANGE;

function requireXPENDING_RANGE () {
	if (hasRequiredXPENDING_RANGE) return XPENDING_RANGE;
	hasRequiredXPENDING_RANGE = 1;
	Object.defineProperty(XPENDING_RANGE, "__esModule", { value: true });
	XPENDING_RANGE.transformReply = XPENDING_RANGE.transformArguments = XPENDING_RANGE.IS_READ_ONLY = XPENDING_RANGE.FIRST_KEY_INDEX = void 0;
	XPENDING_RANGE.FIRST_KEY_INDEX = 1;
	XPENDING_RANGE.IS_READ_ONLY = true;
	function transformArguments(key, group, start, end, count, options) {
	    const args = ['XPENDING', key, group];
	    if (options?.IDLE) {
	        args.push('IDLE', options.IDLE.toString());
	    }
	    args.push(start, end, count.toString());
	    if (options?.consumer) {
	        args.push(options.consumer);
	    }
	    return args;
	}
	XPENDING_RANGE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(([id, owner, millisecondsSinceLastDelivery, deliveriesCounter]) => ({
	        id,
	        owner,
	        millisecondsSinceLastDelivery,
	        deliveriesCounter
	    }));
	}
	XPENDING_RANGE.transformReply = transformReply;
	return XPENDING_RANGE;
}

var XPENDING = {};

var hasRequiredXPENDING;

function requireXPENDING () {
	if (hasRequiredXPENDING) return XPENDING;
	hasRequiredXPENDING = 1;
	Object.defineProperty(XPENDING, "__esModule", { value: true });
	XPENDING.transformReply = XPENDING.transformArguments = XPENDING.IS_READ_ONLY = XPENDING.FIRST_KEY_INDEX = void 0;
	XPENDING.FIRST_KEY_INDEX = 1;
	XPENDING.IS_READ_ONLY = true;
	function transformArguments(key, group) {
	    return ['XPENDING', key, group];
	}
	XPENDING.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        pending: reply[0],
	        firstId: reply[1],
	        lastId: reply[2],
	        consumers: reply[3] === null ? null : reply[3].map(([name, deliveriesCounter]) => ({
	            name,
	            deliveriesCounter: Number(deliveriesCounter)
	        }))
	    };
	}
	XPENDING.transformReply = transformReply;
	return XPENDING;
}

var XRANGE = {};

var hasRequiredXRANGE;

function requireXRANGE () {
	if (hasRequiredXRANGE) return XRANGE;
	hasRequiredXRANGE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, start, end, options) {
		    const args = ['XRANGE', key, start, end];
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformStreamMessagesReply; } }); 
	} (XRANGE));
	return XRANGE;
}

var XREAD = {};

var hasRequiredXREAD;

function requireXREAD () {
	if (hasRequiredXREAD) return XREAD;
	hasRequiredXREAD = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const FIRST_KEY_INDEX = (streams) => {
		    return Array.isArray(streams) ? streams[0].key : streams.key;
		};
		exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
		exports.IS_READ_ONLY = true;
		function transformArguments(streams, options) {
		    const args = ['XREAD'];
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    if (typeof options?.BLOCK === 'number') {
		        args.push('BLOCK', options.BLOCK.toString());
		    }
		    args.push('STREAMS');
		    const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
		    for (let i = 0; i < streamsArray.length; i++) {
		        const stream = streamsArray[i];
		        args[argsLength + i] = stream.key;
		        args[argsLength + streamsArray.length + i] = stream.id;
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformStreamsMessagesReply; } }); 
	} (XREAD));
	return XREAD;
}

var XREADGROUP = {};

var hasRequiredXREADGROUP;

function requireXREADGROUP () {
	if (hasRequiredXREADGROUP) return XREADGROUP;
	hasRequiredXREADGROUP = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const FIRST_KEY_INDEX = (_group, _consumer, streams) => {
		    return Array.isArray(streams) ? streams[0].key : streams.key;
		};
		exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
		exports.IS_READ_ONLY = true;
		function transformArguments(group, consumer, streams, options) {
		    const args = ['XREADGROUP', 'GROUP', group, consumer];
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    if (typeof options?.BLOCK === 'number') {
		        args.push('BLOCK', options.BLOCK.toString());
		    }
		    if (options?.NOACK) {
		        args.push('NOACK');
		    }
		    args.push('STREAMS');
		    const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
		    for (let i = 0; i < streamsArray.length; i++) {
		        const stream = streamsArray[i];
		        args[argsLength + i] = stream.key;
		        args[argsLength + streamsArray.length + i] = stream.id;
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformStreamsMessagesReply; } }); 
	} (XREADGROUP));
	return XREADGROUP;
}

var XREVRANGE = {};

var hasRequiredXREVRANGE;

function requireXREVRANGE () {
	if (hasRequiredXREVRANGE) return XREVRANGE;
	hasRequiredXREVRANGE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, start, end, options) {
		    const args = ['XREVRANGE', key, start, end];
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformStreamMessagesReply; } }); 
	} (XREVRANGE));
	return XREVRANGE;
}

var XSETID = {};

var hasRequiredXSETID;

function requireXSETID () {
	if (hasRequiredXSETID) return XSETID;
	hasRequiredXSETID = 1;
	Object.defineProperty(XSETID, "__esModule", { value: true });
	XSETID.transformArguments = XSETID.FIRST_KEY_INDEX = void 0;
	XSETID.FIRST_KEY_INDEX = 1;
	function transformArguments(key, lastId, options) {
	    const args = ['XSETID', key, lastId];
	    if (options?.ENTRIESADDED) {
	        args.push('ENTRIESADDED', options.ENTRIESADDED.toString());
	    }
	    if (options?.MAXDELETEDID) {
	        args.push('MAXDELETEDID', options.MAXDELETEDID);
	    }
	    return args;
	}
	XSETID.transformArguments = transformArguments;
	return XSETID;
}

var XTRIM = {};

var hasRequiredXTRIM;

function requireXTRIM () {
	if (hasRequiredXTRIM) return XTRIM;
	hasRequiredXTRIM = 1;
	Object.defineProperty(XTRIM, "__esModule", { value: true });
	XTRIM.transformArguments = XTRIM.FIRST_KEY_INDEX = void 0;
	XTRIM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, strategy, threshold, options) {
	    const args = ['XTRIM', key, strategy];
	    if (options?.strategyModifier) {
	        args.push(options.strategyModifier);
	    }
	    args.push(threshold.toString());
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.toString());
	    }
	    return args;
	}
	XTRIM.transformArguments = transformArguments;
	return XTRIM;
}

var ZADD = {};

var hasRequiredZADD;

function requireZADD () {
	if (hasRequiredZADD) return ZADD;
	hasRequiredZADD = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, members, options) {
		    const args = ['ZADD', key];
		    if (options?.NX) {
		        args.push('NX');
		    }
		    else {
		        if (options?.XX) {
		            args.push('XX');
		        }
		        if (options?.GT) {
		            args.push('GT');
		        }
		        else if (options?.LT) {
		            args.push('LT');
		        }
		    }
		    if (options?.CH) {
		        args.push('CH');
		    }
		    if (options?.INCR) {
		        args.push('INCR');
		    }
		    for (const { score, value } of (Array.isArray(members) ? members : [members])) {
		        args.push((0, generic_transformers_1.transformNumberInfinityArgument)(score), value);
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformNumberInfinityReply; } }); 
	} (ZADD));
	return ZADD;
}

var ZCARD = {};

var hasRequiredZCARD;

function requireZCARD () {
	if (hasRequiredZCARD) return ZCARD;
	hasRequiredZCARD = 1;
	Object.defineProperty(ZCARD, "__esModule", { value: true });
	ZCARD.transformArguments = ZCARD.IS_READ_ONLY = ZCARD.FIRST_KEY_INDEX = void 0;
	ZCARD.FIRST_KEY_INDEX = 1;
	ZCARD.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['ZCARD', key];
	}
	ZCARD.transformArguments = transformArguments;
	return ZCARD;
}

var ZCOUNT = {};

var hasRequiredZCOUNT;

function requireZCOUNT () {
	if (hasRequiredZCOUNT) return ZCOUNT;
	hasRequiredZCOUNT = 1;
	Object.defineProperty(ZCOUNT, "__esModule", { value: true });
	ZCOUNT.transformArguments = ZCOUNT.IS_READ_ONLY = ZCOUNT.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZCOUNT.FIRST_KEY_INDEX = 1;
	ZCOUNT.IS_READ_ONLY = true;
	function transformArguments(key, min, max) {
	    return [
	        'ZCOUNT',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	}
	ZCOUNT.transformArguments = transformArguments;
	return ZCOUNT;
}

var ZDIFF_WITHSCORES = {};

var ZDIFF = {};

var hasRequiredZDIFF;

function requireZDIFF () {
	if (hasRequiredZDIFF) return ZDIFF;
	hasRequiredZDIFF = 1;
	Object.defineProperty(ZDIFF, "__esModule", { value: true });
	ZDIFF.transformArguments = ZDIFF.IS_READ_ONLY = ZDIFF.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZDIFF.FIRST_KEY_INDEX = 2;
	ZDIFF.IS_READ_ONLY = true;
	function transformArguments(keys) {
	    return (0, generic_transformers_1.pushVerdictArgument)(['ZDIFF'], keys);
	}
	ZDIFF.transformArguments = transformArguments;
	return ZDIFF;
}

var hasRequiredZDIFF_WITHSCORES;

function requireZDIFF_WITHSCORES () {
	if (hasRequiredZDIFF_WITHSCORES) return ZDIFF_WITHSCORES;
	hasRequiredZDIFF_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZDIFF_1 = requireZDIFF();
		var ZDIFF_2 = requireZDIFF();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZDIFF_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZDIFF_2.IS_READ_ONLY; } });
		function transformArguments(...args) {
		    return [
		        ...(0, ZDIFF_1.transformArguments)(...args),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZDIFF_WITHSCORES));
	return ZDIFF_WITHSCORES;
}

var ZDIFFSTORE = {};

var hasRequiredZDIFFSTORE;

function requireZDIFFSTORE () {
	if (hasRequiredZDIFFSTORE) return ZDIFFSTORE;
	hasRequiredZDIFFSTORE = 1;
	Object.defineProperty(ZDIFFSTORE, "__esModule", { value: true });
	ZDIFFSTORE.transformArguments = ZDIFFSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZDIFFSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys) {
	    return (0, generic_transformers_1.pushVerdictArgument)(['ZDIFFSTORE', destination], keys);
	}
	ZDIFFSTORE.transformArguments = transformArguments;
	return ZDIFFSTORE;
}

var ZINCRBY = {};

var hasRequiredZINCRBY;

function requireZINCRBY () {
	if (hasRequiredZINCRBY) return ZINCRBY;
	hasRequiredZINCRBY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, increment, member) {
		    return [
		        'ZINCRBY',
		        key,
		        (0, generic_transformers_1.transformNumberInfinityArgument)(increment),
		        member
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformNumberInfinityReply; } }); 
	} (ZINCRBY));
	return ZINCRBY;
}

var ZINTER_WITHSCORES = {};

var ZINTER = {};

var hasRequiredZINTER;

function requireZINTER () {
	if (hasRequiredZINTER) return ZINTER;
	hasRequiredZINTER = 1;
	Object.defineProperty(ZINTER, "__esModule", { value: true });
	ZINTER.transformArguments = ZINTER.IS_READ_ONLY = ZINTER.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZINTER.FIRST_KEY_INDEX = 2;
	ZINTER.IS_READ_ONLY = true;
	function transformArguments(keys, options) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZINTER'], keys);
	    if (options?.WEIGHTS) {
	        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
	    }
	    if (options?.AGGREGATE) {
	        args.push('AGGREGATE', options.AGGREGATE);
	    }
	    return args;
	}
	ZINTER.transformArguments = transformArguments;
	return ZINTER;
}

var hasRequiredZINTER_WITHSCORES;

function requireZINTER_WITHSCORES () {
	if (hasRequiredZINTER_WITHSCORES) return ZINTER_WITHSCORES;
	hasRequiredZINTER_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZINTER_1 = requireZINTER();
		var ZINTER_2 = requireZINTER();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZINTER_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZINTER_2.IS_READ_ONLY; } });
		function transformArguments(...args) {
		    return [
		        ...(0, ZINTER_1.transformArguments)(...args),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZINTER_WITHSCORES));
	return ZINTER_WITHSCORES;
}

var ZINTERCARD = {};

var hasRequiredZINTERCARD;

function requireZINTERCARD () {
	if (hasRequiredZINTERCARD) return ZINTERCARD;
	hasRequiredZINTERCARD = 1;
	Object.defineProperty(ZINTERCARD, "__esModule", { value: true });
	ZINTERCARD.transformArguments = ZINTERCARD.IS_READ_ONLY = ZINTERCARD.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZINTERCARD.FIRST_KEY_INDEX = 2;
	ZINTERCARD.IS_READ_ONLY = true;
	function transformArguments(keys, limit) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZINTERCARD'], keys);
	    if (limit) {
	        args.push('LIMIT', limit.toString());
	    }
	    return args;
	}
	ZINTERCARD.transformArguments = transformArguments;
	return ZINTERCARD;
}

var ZINTERSTORE = {};

var hasRequiredZINTERSTORE;

function requireZINTERSTORE () {
	if (hasRequiredZINTERSTORE) return ZINTERSTORE;
	hasRequiredZINTERSTORE = 1;
	Object.defineProperty(ZINTERSTORE, "__esModule", { value: true });
	ZINTERSTORE.transformArguments = ZINTERSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZINTERSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys, options) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZINTERSTORE', destination], keys);
	    if (options?.WEIGHTS) {
	        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
	    }
	    if (options?.AGGREGATE) {
	        args.push('AGGREGATE', options.AGGREGATE);
	    }
	    return args;
	}
	ZINTERSTORE.transformArguments = transformArguments;
	return ZINTERSTORE;
}

var ZLEXCOUNT = {};

var hasRequiredZLEXCOUNT;

function requireZLEXCOUNT () {
	if (hasRequiredZLEXCOUNT) return ZLEXCOUNT;
	hasRequiredZLEXCOUNT = 1;
	Object.defineProperty(ZLEXCOUNT, "__esModule", { value: true });
	ZLEXCOUNT.transformArguments = ZLEXCOUNT.IS_READ_ONLY = ZLEXCOUNT.FIRST_KEY_INDEX = void 0;
	ZLEXCOUNT.FIRST_KEY_INDEX = 1;
	ZLEXCOUNT.IS_READ_ONLY = true;
	function transformArguments(key, min, max) {
	    return [
	        'ZLEXCOUNT',
	        key,
	        min,
	        max
	    ];
	}
	ZLEXCOUNT.transformArguments = transformArguments;
	return ZLEXCOUNT;
}

var ZMSCORE = {};

var hasRequiredZMSCORE;

function requireZMSCORE () {
	if (hasRequiredZMSCORE) return ZMSCORE;
	hasRequiredZMSCORE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, member) {
		    return (0, generic_transformers_1.pushVerdictArguments)(['ZMSCORE', key], member);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformNumberInfinityNullArrayReply; } }); 
	} (ZMSCORE));
	return ZMSCORE;
}

var ZPOPMAX_COUNT = {};

var ZPOPMAX = {};

var hasRequiredZPOPMAX;

function requireZPOPMAX () {
	if (hasRequiredZPOPMAX) return ZPOPMAX;
	hasRequiredZPOPMAX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key) {
		    return [
		        'ZPOPMAX',
		        key
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetMemberNullReply; } }); 
	} (ZPOPMAX));
	return ZPOPMAX;
}

var hasRequiredZPOPMAX_COUNT;

function requireZPOPMAX_COUNT () {
	if (hasRequiredZPOPMAX_COUNT) return ZPOPMAX_COUNT;
	hasRequiredZPOPMAX_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const ZPOPMAX_1 = requireZPOPMAX();
		var ZPOPMAX_2 = requireZPOPMAX();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZPOPMAX_2.FIRST_KEY_INDEX; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, ZPOPMAX_1.transformArguments)(key),
		        count.toString()
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZPOPMAX_COUNT));
	return ZPOPMAX_COUNT;
}

var ZPOPMIN_COUNT = {};

var ZPOPMIN = {};

var hasRequiredZPOPMIN;

function requireZPOPMIN () {
	if (hasRequiredZPOPMIN) return ZPOPMIN;
	hasRequiredZPOPMIN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key) {
		    return [
		        'ZPOPMIN',
		        key
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetMemberNullReply; } }); 
	} (ZPOPMIN));
	return ZPOPMIN;
}

var hasRequiredZPOPMIN_COUNT;

function requireZPOPMIN_COUNT () {
	if (hasRequiredZPOPMIN_COUNT) return ZPOPMIN_COUNT;
	hasRequiredZPOPMIN_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const ZPOPMIN_1 = requireZPOPMIN();
		var ZPOPMIN_2 = requireZPOPMIN();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZPOPMIN_2.FIRST_KEY_INDEX; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, ZPOPMIN_1.transformArguments)(key),
		        count.toString()
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZPOPMIN_COUNT));
	return ZPOPMIN_COUNT;
}

var ZRANDMEMBER_COUNT_WITHSCORES = {};

var ZRANDMEMBER_COUNT = {};

var ZRANDMEMBER = {};

var hasRequiredZRANDMEMBER;

function requireZRANDMEMBER () {
	if (hasRequiredZRANDMEMBER) return ZRANDMEMBER;
	hasRequiredZRANDMEMBER = 1;
	Object.defineProperty(ZRANDMEMBER, "__esModule", { value: true });
	ZRANDMEMBER.transformArguments = ZRANDMEMBER.IS_READ_ONLY = ZRANDMEMBER.FIRST_KEY_INDEX = void 0;
	ZRANDMEMBER.FIRST_KEY_INDEX = 1;
	ZRANDMEMBER.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['ZRANDMEMBER', key];
	}
	ZRANDMEMBER.transformArguments = transformArguments;
	return ZRANDMEMBER;
}

var hasRequiredZRANDMEMBER_COUNT;

function requireZRANDMEMBER_COUNT () {
	if (hasRequiredZRANDMEMBER_COUNT) return ZRANDMEMBER_COUNT;
	hasRequiredZRANDMEMBER_COUNT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZRANDMEMBER_1 = requireZRANDMEMBER();
		var ZRANDMEMBER_2 = requireZRANDMEMBER();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZRANDMEMBER_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZRANDMEMBER_2.IS_READ_ONLY; } });
		function transformArguments(key, count) {
		    return [
		        ...(0, ZRANDMEMBER_1.transformArguments)(key),
		        count.toString()
		    ];
		}
		exports.transformArguments = transformArguments; 
	} (ZRANDMEMBER_COUNT));
	return ZRANDMEMBER_COUNT;
}

var hasRequiredZRANDMEMBER_COUNT_WITHSCORES;

function requireZRANDMEMBER_COUNT_WITHSCORES () {
	if (hasRequiredZRANDMEMBER_COUNT_WITHSCORES) return ZRANDMEMBER_COUNT_WITHSCORES;
	hasRequiredZRANDMEMBER_COUNT_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZRANDMEMBER_COUNT_1 = requireZRANDMEMBER_COUNT();
		var ZRANDMEMBER_COUNT_2 = requireZRANDMEMBER_COUNT();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZRANDMEMBER_COUNT_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZRANDMEMBER_COUNT_2.IS_READ_ONLY; } });
		function transformArguments(...args) {
		    return [
		        ...(0, ZRANDMEMBER_COUNT_1.transformArguments)(...args),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZRANDMEMBER_COUNT_WITHSCORES));
	return ZRANDMEMBER_COUNT_WITHSCORES;
}

var ZRANGE_WITHSCORES = {};

var ZRANGE = {};

var hasRequiredZRANGE;

function requireZRANGE () {
	if (hasRequiredZRANGE) return ZRANGE;
	hasRequiredZRANGE = 1;
	Object.defineProperty(ZRANGE, "__esModule", { value: true });
	ZRANGE.transformArguments = ZRANGE.IS_READ_ONLY = ZRANGE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZRANGE.FIRST_KEY_INDEX = 1;
	ZRANGE.IS_READ_ONLY = true;
	function transformArguments(key, min, max, options) {
	    const args = [
	        'ZRANGE',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	    switch (options?.BY) {
	        case 'SCORE':
	            args.push('BYSCORE');
	            break;
	        case 'LEX':
	            args.push('BYLEX');
	            break;
	    }
	    if (options?.REV) {
	        args.push('REV');
	    }
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
	    }
	    return args;
	}
	ZRANGE.transformArguments = transformArguments;
	return ZRANGE;
}

var hasRequiredZRANGE_WITHSCORES;

function requireZRANGE_WITHSCORES () {
	if (hasRequiredZRANGE_WITHSCORES) return ZRANGE_WITHSCORES;
	hasRequiredZRANGE_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZRANGE_1 = requireZRANGE();
		var ZRANGE_2 = requireZRANGE();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZRANGE_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZRANGE_2.IS_READ_ONLY; } });
		function transformArguments(...args) {
		    return [
		        ...(0, ZRANGE_1.transformArguments)(...args),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZRANGE_WITHSCORES));
	return ZRANGE_WITHSCORES;
}

var ZRANGEBYLEX = {};

var hasRequiredZRANGEBYLEX;

function requireZRANGEBYLEX () {
	if (hasRequiredZRANGEBYLEX) return ZRANGEBYLEX;
	hasRequiredZRANGEBYLEX = 1;
	Object.defineProperty(ZRANGEBYLEX, "__esModule", { value: true });
	ZRANGEBYLEX.transformArguments = ZRANGEBYLEX.IS_READ_ONLY = ZRANGEBYLEX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZRANGEBYLEX.FIRST_KEY_INDEX = 1;
	ZRANGEBYLEX.IS_READ_ONLY = true;
	function transformArguments(key, min, max, options) {
	    const args = [
	        'ZRANGEBYLEX',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
	    }
	    return args;
	}
	ZRANGEBYLEX.transformArguments = transformArguments;
	return ZRANGEBYLEX;
}

var ZRANGEBYSCORE_WITHSCORES = {};

var ZRANGEBYSCORE = {};

var hasRequiredZRANGEBYSCORE;

function requireZRANGEBYSCORE () {
	if (hasRequiredZRANGEBYSCORE) return ZRANGEBYSCORE;
	hasRequiredZRANGEBYSCORE = 1;
	Object.defineProperty(ZRANGEBYSCORE, "__esModule", { value: true });
	ZRANGEBYSCORE.transformArguments = ZRANGEBYSCORE.IS_READ_ONLY = ZRANGEBYSCORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZRANGEBYSCORE.FIRST_KEY_INDEX = 1;
	ZRANGEBYSCORE.IS_READ_ONLY = true;
	function transformArguments(key, min, max, options) {
	    const args = [
	        'ZRANGEBYSCORE',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
	    }
	    return args;
	}
	ZRANGEBYSCORE.transformArguments = transformArguments;
	return ZRANGEBYSCORE;
}

var hasRequiredZRANGEBYSCORE_WITHSCORES;

function requireZRANGEBYSCORE_WITHSCORES () {
	if (hasRequiredZRANGEBYSCORE_WITHSCORES) return ZRANGEBYSCORE_WITHSCORES;
	hasRequiredZRANGEBYSCORE_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZRANGEBYSCORE_1 = requireZRANGEBYSCORE();
		var ZRANGEBYSCORE_2 = requireZRANGEBYSCORE();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZRANGEBYSCORE_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZRANGEBYSCORE_2.IS_READ_ONLY; } });
		function transformArguments(key, min, max, options) {
		    return [
		        ...(0, ZRANGEBYSCORE_1.transformArguments)(key, min, max, options),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZRANGEBYSCORE_WITHSCORES));
	return ZRANGEBYSCORE_WITHSCORES;
}

var ZRANGESTORE = {};

var hasRequiredZRANGESTORE;

function requireZRANGESTORE () {
	if (hasRequiredZRANGESTORE) return ZRANGESTORE;
	hasRequiredZRANGESTORE = 1;
	Object.defineProperty(ZRANGESTORE, "__esModule", { value: true });
	ZRANGESTORE.transformReply = ZRANGESTORE.transformArguments = ZRANGESTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZRANGESTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(dst, src, min, max, options) {
	    const args = [
	        'ZRANGESTORE',
	        dst,
	        src,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	    switch (options?.BY) {
	        case 'SCORE':
	            args.push('BYSCORE');
	            break;
	        case 'LEX':
	            args.push('BYLEX');
	            break;
	    }
	    if (options?.REV) {
	        args.push('REV');
	    }
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
	    }
	    if (options?.WITHSCORES) {
	        args.push('WITHSCORES');
	    }
	    return args;
	}
	ZRANGESTORE.transformArguments = transformArguments;
	function transformReply(reply) {
	    if (typeof reply !== 'number') {
	        throw new TypeError(`Upgrade to Redis 6.2.5 and up (https://github.com/redis/redis/pull/9089)`);
	    }
	    return reply;
	}
	ZRANGESTORE.transformReply = transformReply;
	return ZRANGESTORE;
}

var ZRANK = {};

var hasRequiredZRANK;

function requireZRANK () {
	if (hasRequiredZRANK) return ZRANK;
	hasRequiredZRANK = 1;
	Object.defineProperty(ZRANK, "__esModule", { value: true });
	ZRANK.transformArguments = ZRANK.IS_READ_ONLY = ZRANK.FIRST_KEY_INDEX = void 0;
	ZRANK.FIRST_KEY_INDEX = 1;
	ZRANK.IS_READ_ONLY = true;
	function transformArguments(key, member) {
	    return ['ZRANK', key, member];
	}
	ZRANK.transformArguments = transformArguments;
	return ZRANK;
}

var ZREM = {};

var hasRequiredZREM;

function requireZREM () {
	if (hasRequiredZREM) return ZREM;
	hasRequiredZREM = 1;
	Object.defineProperty(ZREM, "__esModule", { value: true });
	ZREM.transformArguments = ZREM.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZREM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, member) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['ZREM', key], member);
	}
	ZREM.transformArguments = transformArguments;
	return ZREM;
}

var ZREMRANGEBYLEX = {};

var hasRequiredZREMRANGEBYLEX;

function requireZREMRANGEBYLEX () {
	if (hasRequiredZREMRANGEBYLEX) return ZREMRANGEBYLEX;
	hasRequiredZREMRANGEBYLEX = 1;
	Object.defineProperty(ZREMRANGEBYLEX, "__esModule", { value: true });
	ZREMRANGEBYLEX.transformArguments = ZREMRANGEBYLEX.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZREMRANGEBYLEX.FIRST_KEY_INDEX = 1;
	function transformArguments(key, min, max) {
	    return [
	        'ZREMRANGEBYLEX',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	}
	ZREMRANGEBYLEX.transformArguments = transformArguments;
	return ZREMRANGEBYLEX;
}

var ZREMRANGEBYRANK = {};

var hasRequiredZREMRANGEBYRANK;

function requireZREMRANGEBYRANK () {
	if (hasRequiredZREMRANGEBYRANK) return ZREMRANGEBYRANK;
	hasRequiredZREMRANGEBYRANK = 1;
	Object.defineProperty(ZREMRANGEBYRANK, "__esModule", { value: true });
	ZREMRANGEBYRANK.transformArguments = ZREMRANGEBYRANK.FIRST_KEY_INDEX = void 0;
	ZREMRANGEBYRANK.FIRST_KEY_INDEX = 1;
	function transformArguments(key, start, stop) {
	    return ['ZREMRANGEBYRANK', key, start.toString(), stop.toString()];
	}
	ZREMRANGEBYRANK.transformArguments = transformArguments;
	return ZREMRANGEBYRANK;
}

var ZREMRANGEBYSCORE = {};

var hasRequiredZREMRANGEBYSCORE;

function requireZREMRANGEBYSCORE () {
	if (hasRequiredZREMRANGEBYSCORE) return ZREMRANGEBYSCORE;
	hasRequiredZREMRANGEBYSCORE = 1;
	Object.defineProperty(ZREMRANGEBYSCORE, "__esModule", { value: true });
	ZREMRANGEBYSCORE.transformArguments = ZREMRANGEBYSCORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZREMRANGEBYSCORE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, min, max) {
	    return [
	        'ZREMRANGEBYSCORE',
	        key,
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
	        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
	    ];
	}
	ZREMRANGEBYSCORE.transformArguments = transformArguments;
	return ZREMRANGEBYSCORE;
}

var ZREVRANK = {};

var hasRequiredZREVRANK;

function requireZREVRANK () {
	if (hasRequiredZREVRANK) return ZREVRANK;
	hasRequiredZREVRANK = 1;
	Object.defineProperty(ZREVRANK, "__esModule", { value: true });
	ZREVRANK.transformArguments = ZREVRANK.IS_READ_ONLY = ZREVRANK.FIRST_KEY_INDEX = void 0;
	ZREVRANK.FIRST_KEY_INDEX = 1;
	ZREVRANK.IS_READ_ONLY = true;
	function transformArguments(key, member) {
	    return ['ZREVRANK', key, member];
	}
	ZREVRANK.transformArguments = transformArguments;
	return ZREVRANK;
}

var ZSCAN = {};

var hasRequiredZSCAN;

function requireZSCAN () {
	if (hasRequiredZSCAN) return ZSCAN;
	hasRequiredZSCAN = 1;
	Object.defineProperty(ZSCAN, "__esModule", { value: true });
	ZSCAN.transformReply = ZSCAN.transformArguments = ZSCAN.IS_READ_ONLY = ZSCAN.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZSCAN.FIRST_KEY_INDEX = 1;
	ZSCAN.IS_READ_ONLY = true;
	function transformArguments(key, cursor, options) {
	    return (0, generic_transformers_1.pushScanArguments)([
	        'ZSCAN',
	        key
	    ], cursor, options);
	}
	ZSCAN.transformArguments = transformArguments;
	function transformReply([cursor, rawMembers]) {
	    const parsedMembers = [];
	    for (let i = 0; i < rawMembers.length; i += 2) {
	        parsedMembers.push({
	            value: rawMembers[i],
	            score: (0, generic_transformers_1.transformNumberInfinityReply)(rawMembers[i + 1])
	        });
	    }
	    return {
	        cursor: Number(cursor),
	        members: parsedMembers
	    };
	}
	ZSCAN.transformReply = transformReply;
	return ZSCAN;
}

var ZSCORE = {};

var hasRequiredZSCORE;

function requireZSCORE () {
	if (hasRequiredZSCORE) return ZSCORE;
	hasRequiredZSCORE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, member) {
		    return ['ZSCORE', key, member];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformNumberInfinityNullReply; } }); 
	} (ZSCORE));
	return ZSCORE;
}

var ZUNION_WITHSCORES = {};

var ZUNION = {};

var hasRequiredZUNION;

function requireZUNION () {
	if (hasRequiredZUNION) return ZUNION;
	hasRequiredZUNION = 1;
	Object.defineProperty(ZUNION, "__esModule", { value: true });
	ZUNION.transformArguments = ZUNION.IS_READ_ONLY = ZUNION.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZUNION.FIRST_KEY_INDEX = 2;
	ZUNION.IS_READ_ONLY = true;
	function transformArguments(keys, options) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZUNION'], keys);
	    if (options?.WEIGHTS) {
	        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
	    }
	    if (options?.AGGREGATE) {
	        args.push('AGGREGATE', options.AGGREGATE);
	    }
	    return args;
	}
	ZUNION.transformArguments = transformArguments;
	return ZUNION;
}

var hasRequiredZUNION_WITHSCORES;

function requireZUNION_WITHSCORES () {
	if (hasRequiredZUNION_WITHSCORES) return ZUNION_WITHSCORES;
	hasRequiredZUNION_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const ZUNION_1 = requireZUNION();
		var ZUNION_2 = requireZUNION();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return ZUNION_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return ZUNION_2.IS_READ_ONLY; } });
		function transformArguments(...args) {
		    return [
		        ...(0, ZUNION_1.transformArguments)(...args),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformSortedSetWithScoresReply; } }); 
	} (ZUNION_WITHSCORES));
	return ZUNION_WITHSCORES;
}

var ZUNIONSTORE = {};

var hasRequiredZUNIONSTORE;

function requireZUNIONSTORE () {
	if (hasRequiredZUNIONSTORE) return ZUNIONSTORE;
	hasRequiredZUNIONSTORE = 1;
	Object.defineProperty(ZUNIONSTORE, "__esModule", { value: true });
	ZUNIONSTORE.transformArguments = ZUNIONSTORE.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ZUNIONSTORE.FIRST_KEY_INDEX = 1;
	function transformArguments(destination, keys, options) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZUNIONSTORE', destination], keys);
	    if (options?.WEIGHTS) {
	        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
	    }
	    if (options?.AGGREGATE) {
	        args.push('AGGREGATE', options.AGGREGATE);
	    }
	    return args;
	}
	ZUNIONSTORE.transformArguments = transformArguments;
	return ZUNIONSTORE;
}

var hasRequiredCommands$6;

function requireCommands$6 () {
	if (hasRequiredCommands$6) return commands$5;
	hasRequiredCommands$6 = 1;
	Object.defineProperty(commands$5, "__esModule", { value: true });
	const APPEND = requireAPPEND();
	const BITCOUNT = requireBITCOUNT();
	const BITFIELD_RO = requireBITFIELD_RO();
	const BITFIELD = requireBITFIELD();
	const BITOP = requireBITOP();
	const BITPOS = requireBITPOS();
	const BLMOVE = requireBLMOVE();
	const BLMPOP = requireBLMPOP();
	const BLPOP = requireBLPOP();
	const BRPOP = requireBRPOP();
	const BRPOPLPUSH = requireBRPOPLPUSH();
	const BZMPOP = requireBZMPOP();
	const BZPOPMAX = requireBZPOPMAX();
	const BZPOPMIN = requireBZPOPMIN();
	const COPY = requireCOPY();
	const DECR = requireDECR();
	const DECRBY = requireDECRBY$1();
	const DEL = requireDEL$3();
	const DUMP = requireDUMP();
	const EVAL_RO = requireEVAL_RO();
	const EVAL = requireEVAL();
	const EVALSHA_RO = requireEVALSHA_RO();
	const EVALSHA = requireEVALSHA();
	const EXISTS = requireEXISTS$2();
	const EXPIRE = requireEXPIRE();
	const EXPIREAT = requireEXPIREAT();
	const EXPIRETIME = requireEXPIRETIME();
	const FCALL_RO = requireFCALL_RO();
	const FCALL = requireFCALL();
	const GEOADD = requireGEOADD();
	const GEODIST = requireGEODIST();
	const GEOHASH = requireGEOHASH();
	const GEOPOS = requireGEOPOS();
	const GEORADIUS_RO_WITH = requireGEORADIUS_RO_WITH();
	const GEORADIUS_RO = requireGEORADIUS_RO();
	const GEORADIUS_WITH = requireGEORADIUS_WITH();
	const GEORADIUS = requireGEORADIUS();
	const GEORADIUSBYMEMBER_RO_WITH = requireGEORADIUSBYMEMBER_RO_WITH();
	const GEORADIUSBYMEMBER_RO = requireGEORADIUSBYMEMBER_RO();
	const GEORADIUSBYMEMBER_WITH = requireGEORADIUSBYMEMBER_WITH();
	const GEORADIUSBYMEMBER = requireGEORADIUSBYMEMBER();
	const GEORADIUSBYMEMBERSTORE = requireGEORADIUSBYMEMBERSTORE();
	const GEORADIUSSTORE = requireGEORADIUSSTORE();
	const GEOSEARCH_WITH = requireGEOSEARCH_WITH();
	const GEOSEARCH = requireGEOSEARCH();
	const GEOSEARCHSTORE = requireGEOSEARCHSTORE();
	const GET = requireGET$2();
	const GETBIT = requireGETBIT();
	const GETDEL = requireGETDEL();
	const GETEX = requireGETEX();
	const GETRANGE = requireGETRANGE();
	const GETSET = requireGETSET();
	const HDEL = requireHDEL();
	const HEXISTS = requireHEXISTS();
	const HGET = requireHGET();
	const HGETALL = requireHGETALL();
	const HINCRBY = requireHINCRBY();
	const HINCRBYFLOAT = requireHINCRBYFLOAT();
	const HKEYS = requireHKEYS();
	const HLEN = requireHLEN();
	const HMGET = requireHMGET();
	const HRANDFIELD_COUNT_WITHVALUES = requireHRANDFIELD_COUNT_WITHVALUES();
	const HRANDFIELD_COUNT = requireHRANDFIELD_COUNT();
	const HRANDFIELD = requireHRANDFIELD();
	const HSCAN = requireHSCAN();
	const HSET = requireHSET();
	const HSETNX = requireHSETNX();
	const HSTRLEN = requireHSTRLEN();
	const HVALS = requireHVALS();
	const INCR = requireINCR();
	const INCRBY = requireINCRBY$3();
	const INCRBYFLOAT = requireINCRBYFLOAT();
	const LCS_IDX_WITHMATCHLEN = requireLCS_IDX_WITHMATCHLEN();
	const LCS_IDX = requireLCS_IDX();
	const LCS_LEN = requireLCS_LEN();
	const LCS = requireLCS();
	const LINDEX = requireLINDEX();
	const LINSERT = requireLINSERT();
	const LLEN = requireLLEN();
	const LMOVE = requireLMOVE();
	const LMPOP = requireLMPOP();
	const LPOP_COUNT = requireLPOP_COUNT();
	const LPOP = requireLPOP();
	const LPOS_COUNT = requireLPOS_COUNT();
	const LPOS = requireLPOS();
	const LPUSH = requireLPUSH();
	const LPUSHX = requireLPUSHX();
	const LRANGE = requireLRANGE();
	const LREM = requireLREM();
	const LSET = requireLSET();
	const LTRIM = requireLTRIM();
	const MGET = requireMGET$2();
	const MIGRATE = requireMIGRATE();
	const MSET = requireMSET$1();
	const MSETNX = requireMSETNX();
	const OBJECT_ENCODING = requireOBJECT_ENCODING();
	const OBJECT_FREQ = requireOBJECT_FREQ();
	const OBJECT_IDLETIME = requireOBJECT_IDLETIME();
	const OBJECT_REFCOUNT = requireOBJECT_REFCOUNT();
	const PERSIST = requirePERSIST();
	const PEXPIRE = requirePEXPIRE();
	const PEXPIREAT = requirePEXPIREAT();
	const PEXPIRETIME = requirePEXPIRETIME();
	const PFADD = requirePFADD();
	const PFCOUNT = requirePFCOUNT();
	const PFMERGE = requirePFMERGE();
	const PSETEX = requirePSETEX();
	const PTTL = requirePTTL();
	const PUBLISH = requirePUBLISH();
	const RENAME = requireRENAME();
	const RENAMENX = requireRENAMENX();
	const RESTORE = requireRESTORE();
	const RPOP_COUNT = requireRPOP_COUNT();
	const RPOP = requireRPOP();
	const RPOPLPUSH = requireRPOPLPUSH();
	const RPUSH = requireRPUSH();
	const RPUSHX = requireRPUSHX();
	const SADD = requireSADD();
	const SCARD = requireSCARD();
	const SDIFF = requireSDIFF();
	const SDIFFSTORE = requireSDIFFSTORE();
	const SET = requireSET$1();
	const SETBIT = requireSETBIT();
	const SETEX = requireSETEX();
	const SETNX = requireSETNX();
	const SETRANGE = requireSETRANGE();
	const SINTER = requireSINTER();
	const SINTERCARD = requireSINTERCARD();
	const SINTERSTORE = requireSINTERSTORE();
	const SISMEMBER = requireSISMEMBER();
	const SMEMBERS = requireSMEMBERS();
	const SMISMEMBER = requireSMISMEMBER();
	const SMOVE = requireSMOVE();
	const SORT_RO = requireSORT_RO();
	const SORT_STORE = requireSORT_STORE();
	const SORT = requireSORT();
	const SPOP = requireSPOP();
	const SPUBLISH = requireSPUBLISH();
	const SRANDMEMBER_COUNT = requireSRANDMEMBER_COUNT();
	const SRANDMEMBER = requireSRANDMEMBER();
	const SREM = requireSREM();
	const SSCAN = requireSSCAN();
	const STRLEN = requireSTRLEN$1();
	const SUNION = requireSUNION();
	const SUNIONSTORE = requireSUNIONSTORE();
	const TOUCH = requireTOUCH();
	const TTL = requireTTL();
	const TYPE = requireTYPE$1();
	const UNLINK = requireUNLINK();
	const WATCH = requireWATCH();
	const XACK = requireXACK();
	const XADD = requireXADD();
	const XAUTOCLAIM_JUSTID = requireXAUTOCLAIM_JUSTID();
	const XAUTOCLAIM = requireXAUTOCLAIM();
	const XCLAIM_JUSTID = requireXCLAIM_JUSTID();
	const XCLAIM = requireXCLAIM();
	const XDEL = requireXDEL();
	const XGROUP_CREATE = requireXGROUP_CREATE();
	const XGROUP_CREATECONSUMER = requireXGROUP_CREATECONSUMER();
	const XGROUP_DELCONSUMER = requireXGROUP_DELCONSUMER();
	const XGROUP_DESTROY = requireXGROUP_DESTROY();
	const XGROUP_SETID = requireXGROUP_SETID();
	const XINFO_CONSUMERS = requireXINFO_CONSUMERS();
	const XINFO_GROUPS = requireXINFO_GROUPS();
	const XINFO_STREAM = requireXINFO_STREAM();
	const XLEN = requireXLEN();
	const XPENDING_RANGE = requireXPENDING_RANGE();
	const XPENDING = requireXPENDING();
	const XRANGE = requireXRANGE();
	const XREAD = requireXREAD();
	const XREADGROUP = requireXREADGROUP();
	const XREVRANGE = requireXREVRANGE();
	const XSETID = requireXSETID();
	const XTRIM = requireXTRIM();
	const ZADD = requireZADD();
	const ZCARD = requireZCARD();
	const ZCOUNT = requireZCOUNT();
	const ZDIFF_WITHSCORES = requireZDIFF_WITHSCORES();
	const ZDIFF = requireZDIFF();
	const ZDIFFSTORE = requireZDIFFSTORE();
	const ZINCRBY = requireZINCRBY();
	const ZINTER_WITHSCORES = requireZINTER_WITHSCORES();
	const ZINTER = requireZINTER();
	const ZINTERCARD = requireZINTERCARD();
	const ZINTERSTORE = requireZINTERSTORE();
	const ZLEXCOUNT = requireZLEXCOUNT();
	const ZMPOP = requireZMPOP();
	const ZMSCORE = requireZMSCORE();
	const ZPOPMAX_COUNT = requireZPOPMAX_COUNT();
	const ZPOPMAX = requireZPOPMAX();
	const ZPOPMIN_COUNT = requireZPOPMIN_COUNT();
	const ZPOPMIN = requireZPOPMIN();
	const ZRANDMEMBER_COUNT_WITHSCORES = requireZRANDMEMBER_COUNT_WITHSCORES();
	const ZRANDMEMBER_COUNT = requireZRANDMEMBER_COUNT();
	const ZRANDMEMBER = requireZRANDMEMBER();
	const ZRANGE_WITHSCORES = requireZRANGE_WITHSCORES();
	const ZRANGE = requireZRANGE();
	const ZRANGEBYLEX = requireZRANGEBYLEX();
	const ZRANGEBYSCORE_WITHSCORES = requireZRANGEBYSCORE_WITHSCORES();
	const ZRANGEBYSCORE = requireZRANGEBYSCORE();
	const ZRANGESTORE = requireZRANGESTORE();
	const ZRANK = requireZRANK();
	const ZREM = requireZREM();
	const ZREMRANGEBYLEX = requireZREMRANGEBYLEX();
	const ZREMRANGEBYRANK = requireZREMRANGEBYRANK();
	const ZREMRANGEBYSCORE = requireZREMRANGEBYSCORE();
	const ZREVRANK = requireZREVRANK();
	const ZSCAN = requireZSCAN();
	const ZSCORE = requireZSCORE();
	const ZUNION_WITHSCORES = requireZUNION_WITHSCORES();
	const ZUNION = requireZUNION();
	const ZUNIONSTORE = requireZUNIONSTORE();
	commands$5.default = {
	    APPEND,
	    append: APPEND,
	    BITCOUNT,
	    bitCount: BITCOUNT,
	    BITFIELD_RO,
	    bitFieldRo: BITFIELD_RO,
	    BITFIELD,
	    bitField: BITFIELD,
	    BITOP,
	    bitOp: BITOP,
	    BITPOS,
	    bitPos: BITPOS,
	    BLMOVE,
	    blMove: BLMOVE,
	    BLMPOP,
	    blmPop: BLMPOP,
	    BLPOP,
	    blPop: BLPOP,
	    BRPOP,
	    brPop: BRPOP,
	    BRPOPLPUSH,
	    brPopLPush: BRPOPLPUSH,
	    BZMPOP,
	    bzmPop: BZMPOP,
	    BZPOPMAX,
	    bzPopMax: BZPOPMAX,
	    BZPOPMIN,
	    bzPopMin: BZPOPMIN,
	    COPY,
	    copy: COPY,
	    DECR,
	    decr: DECR,
	    DECRBY,
	    decrBy: DECRBY,
	    DEL,
	    del: DEL,
	    DUMP,
	    dump: DUMP,
	    EVAL_RO,
	    evalRo: EVAL_RO,
	    EVAL,
	    eval: EVAL,
	    EVALSHA,
	    evalSha: EVALSHA,
	    EVALSHA_RO,
	    evalShaRo: EVALSHA_RO,
	    EXISTS,
	    exists: EXISTS,
	    EXPIRE,
	    expire: EXPIRE,
	    EXPIREAT,
	    expireAt: EXPIREAT,
	    EXPIRETIME,
	    expireTime: EXPIRETIME,
	    FCALL_RO,
	    fCallRo: FCALL_RO,
	    FCALL,
	    fCall: FCALL,
	    GEOADD,
	    geoAdd: GEOADD,
	    GEODIST,
	    geoDist: GEODIST,
	    GEOHASH,
	    geoHash: GEOHASH,
	    GEOPOS,
	    geoPos: GEOPOS,
	    GEORADIUS_RO_WITH,
	    geoRadiusRoWith: GEORADIUS_RO_WITH,
	    GEORADIUS_RO,
	    geoRadiusRo: GEORADIUS_RO,
	    GEORADIUS_WITH,
	    geoRadiusWith: GEORADIUS_WITH,
	    GEORADIUS,
	    geoRadius: GEORADIUS,
	    GEORADIUSBYMEMBER_RO_WITH,
	    geoRadiusByMemberRoWith: GEORADIUSBYMEMBER_RO_WITH,
	    GEORADIUSBYMEMBER_RO,
	    geoRadiusByMemberRo: GEORADIUSBYMEMBER_RO,
	    GEORADIUSBYMEMBER_WITH,
	    geoRadiusByMemberWith: GEORADIUSBYMEMBER_WITH,
	    GEORADIUSBYMEMBER,
	    geoRadiusByMember: GEORADIUSBYMEMBER,
	    GEORADIUSBYMEMBERSTORE,
	    geoRadiusByMemberStore: GEORADIUSBYMEMBERSTORE,
	    GEORADIUSSTORE,
	    geoRadiusStore: GEORADIUSSTORE,
	    GEOSEARCH_WITH,
	    geoSearchWith: GEOSEARCH_WITH,
	    GEOSEARCH,
	    geoSearch: GEOSEARCH,
	    GEOSEARCHSTORE,
	    geoSearchStore: GEOSEARCHSTORE,
	    GET,
	    get: GET,
	    GETBIT,
	    getBit: GETBIT,
	    GETDEL,
	    getDel: GETDEL,
	    GETEX,
	    getEx: GETEX,
	    GETRANGE,
	    getRange: GETRANGE,
	    GETSET,
	    getSet: GETSET,
	    HDEL,
	    hDel: HDEL,
	    HEXISTS,
	    hExists: HEXISTS,
	    HGET,
	    hGet: HGET,
	    HGETALL,
	    hGetAll: HGETALL,
	    HINCRBY,
	    hIncrBy: HINCRBY,
	    HINCRBYFLOAT,
	    hIncrByFloat: HINCRBYFLOAT,
	    HKEYS,
	    hKeys: HKEYS,
	    HLEN,
	    hLen: HLEN,
	    HMGET,
	    hmGet: HMGET,
	    HRANDFIELD_COUNT_WITHVALUES,
	    hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
	    HRANDFIELD_COUNT,
	    hRandFieldCount: HRANDFIELD_COUNT,
	    HRANDFIELD,
	    hRandField: HRANDFIELD,
	    HSCAN,
	    hScan: HSCAN,
	    HSET,
	    hSet: HSET,
	    HSETNX,
	    hSetNX: HSETNX,
	    HSTRLEN,
	    hStrLen: HSTRLEN,
	    HVALS,
	    hVals: HVALS,
	    INCR,
	    incr: INCR,
	    INCRBY,
	    incrBy: INCRBY,
	    INCRBYFLOAT,
	    incrByFloat: INCRBYFLOAT,
	    LCS_IDX_WITHMATCHLEN,
	    lcsIdxWithMatchLen: LCS_IDX_WITHMATCHLEN,
	    LCS_IDX,
	    lcsIdx: LCS_IDX,
	    LCS_LEN,
	    lcsLen: LCS_LEN,
	    LCS,
	    lcs: LCS,
	    LINDEX,
	    lIndex: LINDEX,
	    LINSERT,
	    lInsert: LINSERT,
	    LLEN,
	    lLen: LLEN,
	    LMOVE,
	    lMove: LMOVE,
	    LMPOP,
	    lmPop: LMPOP,
	    LPOP_COUNT,
	    lPopCount: LPOP_COUNT,
	    LPOP,
	    lPop: LPOP,
	    LPOS_COUNT,
	    lPosCount: LPOS_COUNT,
	    LPOS,
	    lPos: LPOS,
	    LPUSH,
	    lPush: LPUSH,
	    LPUSHX,
	    lPushX: LPUSHX,
	    LRANGE,
	    lRange: LRANGE,
	    LREM,
	    lRem: LREM,
	    LSET,
	    lSet: LSET,
	    LTRIM,
	    lTrim: LTRIM,
	    MGET,
	    mGet: MGET,
	    MIGRATE,
	    migrate: MIGRATE,
	    MSET,
	    mSet: MSET,
	    MSETNX,
	    mSetNX: MSETNX,
	    OBJECT_ENCODING,
	    objectEncoding: OBJECT_ENCODING,
	    OBJECT_FREQ,
	    objectFreq: OBJECT_FREQ,
	    OBJECT_IDLETIME,
	    objectIdleTime: OBJECT_IDLETIME,
	    OBJECT_REFCOUNT,
	    objectRefCount: OBJECT_REFCOUNT,
	    PERSIST,
	    persist: PERSIST,
	    PEXPIRE,
	    pExpire: PEXPIRE,
	    PEXPIREAT,
	    pExpireAt: PEXPIREAT,
	    PEXPIRETIME,
	    pExpireTime: PEXPIRETIME,
	    PFADD,
	    pfAdd: PFADD,
	    PFCOUNT,
	    pfCount: PFCOUNT,
	    PFMERGE,
	    pfMerge: PFMERGE,
	    PSETEX,
	    pSetEx: PSETEX,
	    PTTL,
	    pTTL: PTTL,
	    PUBLISH,
	    publish: PUBLISH,
	    RENAME,
	    rename: RENAME,
	    RENAMENX,
	    renameNX: RENAMENX,
	    RESTORE,
	    restore: RESTORE,
	    RPOP_COUNT,
	    rPopCount: RPOP_COUNT,
	    RPOP,
	    rPop: RPOP,
	    RPOPLPUSH,
	    rPopLPush: RPOPLPUSH,
	    RPUSH,
	    rPush: RPUSH,
	    RPUSHX,
	    rPushX: RPUSHX,
	    SADD,
	    sAdd: SADD,
	    SCARD,
	    sCard: SCARD,
	    SDIFF,
	    sDiff: SDIFF,
	    SDIFFSTORE,
	    sDiffStore: SDIFFSTORE,
	    SINTER,
	    sInter: SINTER,
	    SINTERCARD,
	    sInterCard: SINTERCARD,
	    SINTERSTORE,
	    sInterStore: SINTERSTORE,
	    SET,
	    set: SET,
	    SETBIT,
	    setBit: SETBIT,
	    SETEX,
	    setEx: SETEX,
	    SETNX,
	    setNX: SETNX,
	    SETRANGE,
	    setRange: SETRANGE,
	    SISMEMBER,
	    sIsMember: SISMEMBER,
	    SMEMBERS,
	    sMembers: SMEMBERS,
	    SMISMEMBER,
	    smIsMember: SMISMEMBER,
	    SMOVE,
	    sMove: SMOVE,
	    SORT_RO,
	    sortRo: SORT_RO,
	    SORT_STORE,
	    sortStore: SORT_STORE,
	    SORT,
	    sort: SORT,
	    SPOP,
	    sPop: SPOP,
	    SPUBLISH,
	    sPublish: SPUBLISH,
	    SRANDMEMBER_COUNT,
	    sRandMemberCount: SRANDMEMBER_COUNT,
	    SRANDMEMBER,
	    sRandMember: SRANDMEMBER,
	    SREM,
	    sRem: SREM,
	    SSCAN,
	    sScan: SSCAN,
	    STRLEN,
	    strLen: STRLEN,
	    SUNION,
	    sUnion: SUNION,
	    SUNIONSTORE,
	    sUnionStore: SUNIONSTORE,
	    TOUCH,
	    touch: TOUCH,
	    TTL,
	    ttl: TTL,
	    TYPE,
	    type: TYPE,
	    UNLINK,
	    unlink: UNLINK,
	    WATCH,
	    watch: WATCH,
	    XACK,
	    xAck: XACK,
	    XADD,
	    xAdd: XADD,
	    XAUTOCLAIM_JUSTID,
	    xAutoClaimJustId: XAUTOCLAIM_JUSTID,
	    XAUTOCLAIM,
	    xAutoClaim: XAUTOCLAIM,
	    XCLAIM,
	    xClaim: XCLAIM,
	    XCLAIM_JUSTID,
	    xClaimJustId: XCLAIM_JUSTID,
	    XDEL,
	    xDel: XDEL,
	    XGROUP_CREATE,
	    xGroupCreate: XGROUP_CREATE,
	    XGROUP_CREATECONSUMER,
	    xGroupCreateConsumer: XGROUP_CREATECONSUMER,
	    XGROUP_DELCONSUMER,
	    xGroupDelConsumer: XGROUP_DELCONSUMER,
	    XGROUP_DESTROY,
	    xGroupDestroy: XGROUP_DESTROY,
	    XGROUP_SETID,
	    xGroupSetId: XGROUP_SETID,
	    XINFO_CONSUMERS,
	    xInfoConsumers: XINFO_CONSUMERS,
	    XINFO_GROUPS,
	    xInfoGroups: XINFO_GROUPS,
	    XINFO_STREAM,
	    xInfoStream: XINFO_STREAM,
	    XLEN,
	    xLen: XLEN,
	    XPENDING_RANGE,
	    xPendingRange: XPENDING_RANGE,
	    XPENDING,
	    xPending: XPENDING,
	    XRANGE,
	    xRange: XRANGE,
	    XREAD,
	    xRead: XREAD,
	    XREADGROUP,
	    xReadGroup: XREADGROUP,
	    XREVRANGE,
	    xRevRange: XREVRANGE,
	    XSETID,
	    xSetId: XSETID,
	    XTRIM,
	    xTrim: XTRIM,
	    ZADD,
	    zAdd: ZADD,
	    ZCARD,
	    zCard: ZCARD,
	    ZCOUNT,
	    zCount: ZCOUNT,
	    ZDIFF_WITHSCORES,
	    zDiffWithScores: ZDIFF_WITHSCORES,
	    ZDIFF,
	    zDiff: ZDIFF,
	    ZDIFFSTORE,
	    zDiffStore: ZDIFFSTORE,
	    ZINCRBY,
	    zIncrBy: ZINCRBY,
	    ZINTER_WITHSCORES,
	    zInterWithScores: ZINTER_WITHSCORES,
	    ZINTER,
	    zInter: ZINTER,
	    ZINTERCARD,
	    zInterCard: ZINTERCARD,
	    ZINTERSTORE,
	    zInterStore: ZINTERSTORE,
	    ZLEXCOUNT,
	    zLexCount: ZLEXCOUNT,
	    ZMPOP,
	    zmPop: ZMPOP,
	    ZMSCORE,
	    zmScore: ZMSCORE,
	    ZPOPMAX_COUNT,
	    zPopMaxCount: ZPOPMAX_COUNT,
	    ZPOPMAX,
	    zPopMax: ZPOPMAX,
	    ZPOPMIN_COUNT,
	    zPopMinCount: ZPOPMIN_COUNT,
	    ZPOPMIN,
	    zPopMin: ZPOPMIN,
	    ZRANDMEMBER_COUNT_WITHSCORES,
	    zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
	    ZRANDMEMBER_COUNT,
	    zRandMemberCount: ZRANDMEMBER_COUNT,
	    ZRANDMEMBER,
	    zRandMember: ZRANDMEMBER,
	    ZRANGE_WITHSCORES,
	    zRangeWithScores: ZRANGE_WITHSCORES,
	    ZRANGE,
	    zRange: ZRANGE,
	    ZRANGEBYLEX,
	    zRangeByLex: ZRANGEBYLEX,
	    ZRANGEBYSCORE_WITHSCORES,
	    zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
	    ZRANGEBYSCORE,
	    zRangeByScore: ZRANGEBYSCORE,
	    ZRANGESTORE,
	    zRangeStore: ZRANGESTORE,
	    ZRANK,
	    zRank: ZRANK,
	    ZREM,
	    zRem: ZREM,
	    ZREMRANGEBYLEX,
	    zRemRangeByLex: ZREMRANGEBYLEX,
	    ZREMRANGEBYRANK,
	    zRemRangeByRank: ZREMRANGEBYRANK,
	    ZREMRANGEBYSCORE,
	    zRemRangeByScore: ZREMRANGEBYSCORE,
	    ZREVRANK,
	    zRevRank: ZREVRANK,
	    ZSCAN,
	    zScan: ZSCAN,
	    ZSCORE,
	    zScore: ZSCORE,
	    ZUNION_WITHSCORES,
	    zUnionWithScores: ZUNION_WITHSCORES,
	    ZUNION,
	    zUnion: ZUNION,
	    ZUNIONSTORE,
	    zUnionStore: ZUNIONSTORE
	};
	return commands$5;
}

var ACL_CAT = {};

var hasRequiredACL_CAT;

function requireACL_CAT () {
	if (hasRequiredACL_CAT) return ACL_CAT;
	hasRequiredACL_CAT = 1;
	Object.defineProperty(ACL_CAT, "__esModule", { value: true });
	ACL_CAT.transformArguments = void 0;
	function transformArguments(categoryName) {
	    const args = ['ACL', 'CAT'];
	    if (categoryName) {
	        args.push(categoryName);
	    }
	    return args;
	}
	ACL_CAT.transformArguments = transformArguments;
	return ACL_CAT;
}

var ACL_DELUSER = {};

var hasRequiredACL_DELUSER;

function requireACL_DELUSER () {
	if (hasRequiredACL_DELUSER) return ACL_DELUSER;
	hasRequiredACL_DELUSER = 1;
	Object.defineProperty(ACL_DELUSER, "__esModule", { value: true });
	ACL_DELUSER.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(username) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['ACL', 'DELUSER'], username);
	}
	ACL_DELUSER.transformArguments = transformArguments;
	return ACL_DELUSER;
}

var ACL_DRYRUN = {};

var hasRequiredACL_DRYRUN;

function requireACL_DRYRUN () {
	if (hasRequiredACL_DRYRUN) return ACL_DRYRUN;
	hasRequiredACL_DRYRUN = 1;
	Object.defineProperty(ACL_DRYRUN, "__esModule", { value: true });
	ACL_DRYRUN.transformArguments = ACL_DRYRUN.IS_READ_ONLY = void 0;
	ACL_DRYRUN.IS_READ_ONLY = true;
	function transformArguments(username, command) {
	    return [
	        'ACL',
	        'DRYRUN',
	        username,
	        ...command
	    ];
	}
	ACL_DRYRUN.transformArguments = transformArguments;
	return ACL_DRYRUN;
}

var ACL_GENPASS = {};

var hasRequiredACL_GENPASS;

function requireACL_GENPASS () {
	if (hasRequiredACL_GENPASS) return ACL_GENPASS;
	hasRequiredACL_GENPASS = 1;
	Object.defineProperty(ACL_GENPASS, "__esModule", { value: true });
	ACL_GENPASS.transformArguments = void 0;
	function transformArguments(bits) {
	    const args = ['ACL', 'GENPASS'];
	    if (bits) {
	        args.push(bits.toString());
	    }
	    return args;
	}
	ACL_GENPASS.transformArguments = transformArguments;
	return ACL_GENPASS;
}

var ACL_GETUSER = {};

var hasRequiredACL_GETUSER;

function requireACL_GETUSER () {
	if (hasRequiredACL_GETUSER) return ACL_GETUSER;
	hasRequiredACL_GETUSER = 1;
	Object.defineProperty(ACL_GETUSER, "__esModule", { value: true });
	ACL_GETUSER.transformReply = ACL_GETUSER.transformArguments = void 0;
	function transformArguments(username) {
	    return ['ACL', 'GETUSER', username];
	}
	ACL_GETUSER.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        flags: reply[1],
	        passwords: reply[3],
	        commands: reply[5],
	        keys: reply[7],
	        channels: reply[9],
	        selectors: reply[11]
	    };
	}
	ACL_GETUSER.transformReply = transformReply;
	return ACL_GETUSER;
}

var ACL_LIST = {};

var hasRequiredACL_LIST;

function requireACL_LIST () {
	if (hasRequiredACL_LIST) return ACL_LIST;
	hasRequiredACL_LIST = 1;
	Object.defineProperty(ACL_LIST, "__esModule", { value: true });
	ACL_LIST.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'LIST'];
	}
	ACL_LIST.transformArguments = transformArguments;
	return ACL_LIST;
}

var ACL_LOAD = {};

var hasRequiredACL_LOAD;

function requireACL_LOAD () {
	if (hasRequiredACL_LOAD) return ACL_LOAD;
	hasRequiredACL_LOAD = 1;
	Object.defineProperty(ACL_LOAD, "__esModule", { value: true });
	ACL_LOAD.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'LOAD'];
	}
	ACL_LOAD.transformArguments = transformArguments;
	return ACL_LOAD;
}

var ACL_LOG_RESET = {};

var hasRequiredACL_LOG_RESET;

function requireACL_LOG_RESET () {
	if (hasRequiredACL_LOG_RESET) return ACL_LOG_RESET;
	hasRequiredACL_LOG_RESET = 1;
	Object.defineProperty(ACL_LOG_RESET, "__esModule", { value: true });
	ACL_LOG_RESET.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'LOG', 'RESET'];
	}
	ACL_LOG_RESET.transformArguments = transformArguments;
	return ACL_LOG_RESET;
}

var ACL_LOG = {};

var hasRequiredACL_LOG;

function requireACL_LOG () {
	if (hasRequiredACL_LOG) return ACL_LOG;
	hasRequiredACL_LOG = 1;
	Object.defineProperty(ACL_LOG, "__esModule", { value: true });
	ACL_LOG.transformReply = ACL_LOG.transformArguments = void 0;
	function transformArguments(count) {
	    const args = ['ACL', 'LOG'];
	    if (count) {
	        args.push(count.toString());
	    }
	    return args;
	}
	ACL_LOG.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(log => ({
	        count: log[1],
	        reason: log[3],
	        context: log[5],
	        object: log[7],
	        username: log[9],
	        ageSeconds: Number(log[11]),
	        clientInfo: log[13]
	    }));
	}
	ACL_LOG.transformReply = transformReply;
	return ACL_LOG;
}

var ACL_SAVE = {};

var hasRequiredACL_SAVE;

function requireACL_SAVE () {
	if (hasRequiredACL_SAVE) return ACL_SAVE;
	hasRequiredACL_SAVE = 1;
	Object.defineProperty(ACL_SAVE, "__esModule", { value: true });
	ACL_SAVE.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'SAVE'];
	}
	ACL_SAVE.transformArguments = transformArguments;
	return ACL_SAVE;
}

var ACL_SETUSER = {};

var hasRequiredACL_SETUSER;

function requireACL_SETUSER () {
	if (hasRequiredACL_SETUSER) return ACL_SETUSER;
	hasRequiredACL_SETUSER = 1;
	Object.defineProperty(ACL_SETUSER, "__esModule", { value: true });
	ACL_SETUSER.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(username, rule) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['ACL', 'SETUSER', username], rule);
	}
	ACL_SETUSER.transformArguments = transformArguments;
	return ACL_SETUSER;
}

var ACL_USERS = {};

var hasRequiredACL_USERS;

function requireACL_USERS () {
	if (hasRequiredACL_USERS) return ACL_USERS;
	hasRequiredACL_USERS = 1;
	Object.defineProperty(ACL_USERS, "__esModule", { value: true });
	ACL_USERS.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'USERS'];
	}
	ACL_USERS.transformArguments = transformArguments;
	return ACL_USERS;
}

var ACL_WHOAMI = {};

var hasRequiredACL_WHOAMI;

function requireACL_WHOAMI () {
	if (hasRequiredACL_WHOAMI) return ACL_WHOAMI;
	hasRequiredACL_WHOAMI = 1;
	Object.defineProperty(ACL_WHOAMI, "__esModule", { value: true });
	ACL_WHOAMI.transformArguments = void 0;
	function transformArguments() {
	    return ['ACL', 'WHOAMI'];
	}
	ACL_WHOAMI.transformArguments = transformArguments;
	return ACL_WHOAMI;
}

var ASKING = {};

var hasRequiredASKING;

function requireASKING () {
	if (hasRequiredASKING) return ASKING;
	hasRequiredASKING = 1;
	Object.defineProperty(ASKING, "__esModule", { value: true });
	ASKING.transformArguments = void 0;
	function transformArguments() {
	    return ['ASKING'];
	}
	ASKING.transformArguments = transformArguments;
	return ASKING;
}

var AUTH = {};

var hasRequiredAUTH;

function requireAUTH () {
	if (hasRequiredAUTH) return AUTH;
	hasRequiredAUTH = 1;
	Object.defineProperty(AUTH, "__esModule", { value: true });
	AUTH.transformArguments = void 0;
	function transformArguments({ username, password }) {
	    if (!username) {
	        return ['AUTH', password];
	    }
	    return ['AUTH', username, password];
	}
	AUTH.transformArguments = transformArguments;
	return AUTH;
}

var BGREWRITEAOF = {};

var hasRequiredBGREWRITEAOF;

function requireBGREWRITEAOF () {
	if (hasRequiredBGREWRITEAOF) return BGREWRITEAOF;
	hasRequiredBGREWRITEAOF = 1;
	Object.defineProperty(BGREWRITEAOF, "__esModule", { value: true });
	BGREWRITEAOF.transformArguments = void 0;
	function transformArguments() {
	    return ['BGREWRITEAOF'];
	}
	BGREWRITEAOF.transformArguments = transformArguments;
	return BGREWRITEAOF;
}

var BGSAVE = {};

var hasRequiredBGSAVE;

function requireBGSAVE () {
	if (hasRequiredBGSAVE) return BGSAVE;
	hasRequiredBGSAVE = 1;
	Object.defineProperty(BGSAVE, "__esModule", { value: true });
	BGSAVE.transformArguments = void 0;
	function transformArguments(options) {
	    const args = ['BGSAVE'];
	    if (options?.SCHEDULE) {
	        args.push('SCHEDULE');
	    }
	    return args;
	}
	BGSAVE.transformArguments = transformArguments;
	return BGSAVE;
}

var CLIENT_CACHING = {};

var hasRequiredCLIENT_CACHING;

function requireCLIENT_CACHING () {
	if (hasRequiredCLIENT_CACHING) return CLIENT_CACHING;
	hasRequiredCLIENT_CACHING = 1;
	Object.defineProperty(CLIENT_CACHING, "__esModule", { value: true });
	CLIENT_CACHING.transformArguments = void 0;
	function transformArguments(value) {
	    return [
	        'CLIENT',
	        'CACHING',
	        value ? 'YES' : 'NO'
	    ];
	}
	CLIENT_CACHING.transformArguments = transformArguments;
	return CLIENT_CACHING;
}

var CLIENT_GETNAME = {};

var hasRequiredCLIENT_GETNAME;

function requireCLIENT_GETNAME () {
	if (hasRequiredCLIENT_GETNAME) return CLIENT_GETNAME;
	hasRequiredCLIENT_GETNAME = 1;
	Object.defineProperty(CLIENT_GETNAME, "__esModule", { value: true });
	CLIENT_GETNAME.transformArguments = void 0;
	function transformArguments() {
	    return ['CLIENT', 'GETNAME'];
	}
	CLIENT_GETNAME.transformArguments = transformArguments;
	return CLIENT_GETNAME;
}

var CLIENT_GETREDIR = {};

var hasRequiredCLIENT_GETREDIR;

function requireCLIENT_GETREDIR () {
	if (hasRequiredCLIENT_GETREDIR) return CLIENT_GETREDIR;
	hasRequiredCLIENT_GETREDIR = 1;
	Object.defineProperty(CLIENT_GETREDIR, "__esModule", { value: true });
	CLIENT_GETREDIR.transformArguments = void 0;
	function transformArguments() {
	    return ['CLIENT', 'GETREDIR'];
	}
	CLIENT_GETREDIR.transformArguments = transformArguments;
	return CLIENT_GETREDIR;
}

var CLIENT_ID = {};

var hasRequiredCLIENT_ID;

function requireCLIENT_ID () {
	if (hasRequiredCLIENT_ID) return CLIENT_ID;
	hasRequiredCLIENT_ID = 1;
	Object.defineProperty(CLIENT_ID, "__esModule", { value: true });
	CLIENT_ID.transformArguments = CLIENT_ID.IS_READ_ONLY = void 0;
	CLIENT_ID.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['CLIENT', 'ID'];
	}
	CLIENT_ID.transformArguments = transformArguments;
	return CLIENT_ID;
}

var CLIENT_KILL = {};

var hasRequiredCLIENT_KILL;

function requireCLIENT_KILL () {
	if (hasRequiredCLIENT_KILL) return CLIENT_KILL;
	hasRequiredCLIENT_KILL = 1;
	Object.defineProperty(CLIENT_KILL, "__esModule", { value: true });
	CLIENT_KILL.transformArguments = CLIENT_KILL.ClientKillFilters = void 0;
	var ClientKillFilters;
	(function (ClientKillFilters) {
	    ClientKillFilters["ADDRESS"] = "ADDR";
	    ClientKillFilters["LOCAL_ADDRESS"] = "LADDR";
	    ClientKillFilters["ID"] = "ID";
	    ClientKillFilters["TYPE"] = "TYPE";
	    ClientKillFilters["USER"] = "USER";
	    ClientKillFilters["SKIP_ME"] = "SKIPME";
	})(ClientKillFilters || (CLIENT_KILL.ClientKillFilters = ClientKillFilters = {}));
	function transformArguments(filters) {
	    const args = ['CLIENT', 'KILL'];
	    if (Array.isArray(filters)) {
	        for (const filter of filters) {
	            pushFilter(args, filter);
	        }
	    }
	    else {
	        pushFilter(args, filters);
	    }
	    return args;
	}
	CLIENT_KILL.transformArguments = transformArguments;
	function pushFilter(args, filter) {
	    if (filter === ClientKillFilters.SKIP_ME) {
	        args.push('SKIPME');
	        return;
	    }
	    args.push(filter.filter);
	    switch (filter.filter) {
	        case ClientKillFilters.ADDRESS:
	            args.push(filter.address);
	            break;
	        case ClientKillFilters.LOCAL_ADDRESS:
	            args.push(filter.localAddress);
	            break;
	        case ClientKillFilters.ID:
	            args.push(typeof filter.id === 'number' ?
	                filter.id.toString() :
	                filter.id);
	            break;
	        case ClientKillFilters.TYPE:
	            args.push(filter.type);
	            break;
	        case ClientKillFilters.USER:
	            args.push(filter.username);
	            break;
	        case ClientKillFilters.SKIP_ME:
	            args.push(filter.skipMe ? 'yes' : 'no');
	            break;
	    }
	}
	return CLIENT_KILL;
}

var CLIENT_LIST = {};

var CLIENT_INFO = {};

var hasRequiredCLIENT_INFO;

function requireCLIENT_INFO () {
	if (hasRequiredCLIENT_INFO) return CLIENT_INFO;
	hasRequiredCLIENT_INFO = 1;
	Object.defineProperty(CLIENT_INFO, "__esModule", { value: true });
	CLIENT_INFO.transformReply = CLIENT_INFO.transformArguments = CLIENT_INFO.IS_READ_ONLY = void 0;
	CLIENT_INFO.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['CLIENT', 'INFO'];
	}
	CLIENT_INFO.transformArguments = transformArguments;
	const CLIENT_INFO_REGEX = /([^\s=]+)=([^\s]*)/g;
	function transformReply(rawReply) {
	    const map = {};
	    for (const item of rawReply.matchAll(CLIENT_INFO_REGEX)) {
	        map[item[1]] = item[2];
	    }
	    const reply = {
	        id: Number(map.id),
	        addr: map.addr,
	        fd: Number(map.fd),
	        name: map.name,
	        age: Number(map.age),
	        idle: Number(map.idle),
	        flags: map.flags,
	        db: Number(map.db),
	        sub: Number(map.sub),
	        psub: Number(map.psub),
	        multi: Number(map.multi),
	        qbuf: Number(map.qbuf),
	        qbufFree: Number(map['qbuf-free']),
	        argvMem: Number(map['argv-mem']),
	        obl: Number(map.obl),
	        oll: Number(map.oll),
	        omem: Number(map.omem),
	        totMem: Number(map['tot-mem']),
	        events: map.events,
	        cmd: map.cmd,
	        user: map.user,
	        libName: map['lib-name'],
	        libVer: map['lib-ver'],
	    };
	    if (map.laddr !== undefined) {
	        reply.laddr = map.laddr;
	    }
	    if (map.redir !== undefined) {
	        reply.redir = Number(map.redir);
	    }
	    if (map.ssub !== undefined) {
	        reply.ssub = Number(map.ssub);
	    }
	    if (map['multi-mem'] !== undefined) {
	        reply.multiMem = Number(map['multi-mem']);
	    }
	    if (map.resp !== undefined) {
	        reply.resp = Number(map.resp);
	    }
	    return reply;
	}
	CLIENT_INFO.transformReply = transformReply;
	return CLIENT_INFO;
}

var hasRequiredCLIENT_LIST;

function requireCLIENT_LIST () {
	if (hasRequiredCLIENT_LIST) return CLIENT_LIST;
	hasRequiredCLIENT_LIST = 1;
	Object.defineProperty(CLIENT_LIST, "__esModule", { value: true });
	CLIENT_LIST.transformReply = CLIENT_LIST.transformArguments = CLIENT_LIST.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	const CLIENT_INFO_1 = requireCLIENT_INFO();
	CLIENT_LIST.IS_READ_ONLY = true;
	function transformArguments(filter) {
	    let args = ['CLIENT', 'LIST'];
	    if (filter) {
	        if (filter.TYPE !== undefined) {
	            args.push('TYPE', filter.TYPE);
	        }
	        else {
	            args.push('ID');
	            args = (0, generic_transformers_1.pushVerdictArguments)(args, filter.ID);
	        }
	    }
	    return args;
	}
	CLIENT_LIST.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const split = rawReply.split('\n'), length = split.length - 1, reply = [];
	    for (let i = 0; i < length; i++) {
	        reply.push((0, CLIENT_INFO_1.transformReply)(split[i]));
	    }
	    return reply;
	}
	CLIENT_LIST.transformReply = transformReply;
	return CLIENT_LIST;
}

var CLIENT_NOEVICT = {};

var hasRequiredCLIENT_NOEVICT;

function requireCLIENT_NOEVICT () {
	if (hasRequiredCLIENT_NOEVICT) return CLIENT_NOEVICT;
	hasRequiredCLIENT_NOEVICT = 1;
	Object.defineProperty(CLIENT_NOEVICT, "__esModule", { value: true });
	CLIENT_NOEVICT.transformArguments = void 0;
	function transformArguments(value) {
	    return [
	        'CLIENT',
	        'NO-EVICT',
	        value ? 'ON' : 'OFF'
	    ];
	}
	CLIENT_NOEVICT.transformArguments = transformArguments;
	return CLIENT_NOEVICT;
}

var CLIENT_NOTOUCH = {};

var hasRequiredCLIENT_NOTOUCH;

function requireCLIENT_NOTOUCH () {
	if (hasRequiredCLIENT_NOTOUCH) return CLIENT_NOTOUCH;
	hasRequiredCLIENT_NOTOUCH = 1;
	Object.defineProperty(CLIENT_NOTOUCH, "__esModule", { value: true });
	CLIENT_NOTOUCH.transformArguments = void 0;
	function transformArguments(value) {
	    return [
	        'CLIENT',
	        'NO-TOUCH',
	        value ? 'ON' : 'OFF'
	    ];
	}
	CLIENT_NOTOUCH.transformArguments = transformArguments;
	return CLIENT_NOTOUCH;
}

var CLIENT_PAUSE = {};

var hasRequiredCLIENT_PAUSE;

function requireCLIENT_PAUSE () {
	if (hasRequiredCLIENT_PAUSE) return CLIENT_PAUSE;
	hasRequiredCLIENT_PAUSE = 1;
	Object.defineProperty(CLIENT_PAUSE, "__esModule", { value: true });
	CLIENT_PAUSE.transformArguments = void 0;
	function transformArguments(timeout, mode) {
	    const args = [
	        'CLIENT',
	        'PAUSE',
	        timeout.toString()
	    ];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	CLIENT_PAUSE.transformArguments = transformArguments;
	return CLIENT_PAUSE;
}

var CLIENT_SETNAME = {};

var hasRequiredCLIENT_SETNAME;

function requireCLIENT_SETNAME () {
	if (hasRequiredCLIENT_SETNAME) return CLIENT_SETNAME;
	hasRequiredCLIENT_SETNAME = 1;
	Object.defineProperty(CLIENT_SETNAME, "__esModule", { value: true });
	CLIENT_SETNAME.transformArguments = void 0;
	function transformArguments(name) {
	    return ['CLIENT', 'SETNAME', name];
	}
	CLIENT_SETNAME.transformArguments = transformArguments;
	return CLIENT_SETNAME;
}

var CLIENT_TRACKING = {};

var hasRequiredCLIENT_TRACKING;

function requireCLIENT_TRACKING () {
	if (hasRequiredCLIENT_TRACKING) return CLIENT_TRACKING;
	hasRequiredCLIENT_TRACKING = 1;
	Object.defineProperty(CLIENT_TRACKING, "__esModule", { value: true });
	CLIENT_TRACKING.transformArguments = void 0;
	function transformArguments(mode, options) {
	    const args = [
	        'CLIENT',
	        'TRACKING',
	        mode ? 'ON' : 'OFF'
	    ];
	    if (mode) {
	        if (options?.REDIRECT) {
	            args.push('REDIRECT', options.REDIRECT.toString());
	        }
	        if (isBroadcast(options)) {
	            args.push('BCAST');
	            if (options?.PREFIX) {
	                if (Array.isArray(options.PREFIX)) {
	                    for (const prefix of options.PREFIX) {
	                        args.push('PREFIX', prefix);
	                    }
	                }
	                else {
	                    args.push('PREFIX', options.PREFIX);
	                }
	            }
	        }
	        else if (isOptIn(options)) {
	            args.push('OPTIN');
	        }
	        else if (isOptOut(options)) {
	            args.push('OPTOUT');
	        }
	        if (options?.NOLOOP) {
	            args.push('NOLOOP');
	        }
	    }
	    return args;
	}
	CLIENT_TRACKING.transformArguments = transformArguments;
	function isBroadcast(options) {
	    return options?.BCAST === true;
	}
	function isOptIn(options) {
	    return options?.OPTIN === true;
	}
	function isOptOut(options) {
	    return options?.OPTOUT === true;
	}
	return CLIENT_TRACKING;
}

var CLIENT_TRACKINGINFO = {};

var hasRequiredCLIENT_TRACKINGINFO;

function requireCLIENT_TRACKINGINFO () {
	if (hasRequiredCLIENT_TRACKINGINFO) return CLIENT_TRACKINGINFO;
	hasRequiredCLIENT_TRACKINGINFO = 1;
	Object.defineProperty(CLIENT_TRACKINGINFO, "__esModule", { value: true });
	CLIENT_TRACKINGINFO.transformReply = CLIENT_TRACKINGINFO.transformArguments = void 0;
	function transformArguments() {
	    return ['CLIENT', 'TRACKINGINFO'];
	}
	CLIENT_TRACKINGINFO.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        flags: new Set(reply[1]),
	        redirect: reply[3],
	        prefixes: reply[5]
	    };
	}
	CLIENT_TRACKINGINFO.transformReply = transformReply;
	return CLIENT_TRACKINGINFO;
}

var CLIENT_UNPAUSE = {};

var hasRequiredCLIENT_UNPAUSE;

function requireCLIENT_UNPAUSE () {
	if (hasRequiredCLIENT_UNPAUSE) return CLIENT_UNPAUSE;
	hasRequiredCLIENT_UNPAUSE = 1;
	Object.defineProperty(CLIENT_UNPAUSE, "__esModule", { value: true });
	CLIENT_UNPAUSE.transformArguments = void 0;
	function transformArguments() {
	    return ['CLIENT', 'UNPAUSE'];
	}
	CLIENT_UNPAUSE.transformArguments = transformArguments;
	return CLIENT_UNPAUSE;
}

var CLUSTER_ADDSLOTS = {};

var hasRequiredCLUSTER_ADDSLOTS;

function requireCLUSTER_ADDSLOTS () {
	if (hasRequiredCLUSTER_ADDSLOTS) return CLUSTER_ADDSLOTS;
	hasRequiredCLUSTER_ADDSLOTS = 1;
	Object.defineProperty(CLUSTER_ADDSLOTS, "__esModule", { value: true });
	CLUSTER_ADDSLOTS.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(slots) {
	    return (0, generic_transformers_1.pushVerdictNumberArguments)(['CLUSTER', 'ADDSLOTS'], slots);
	}
	CLUSTER_ADDSLOTS.transformArguments = transformArguments;
	return CLUSTER_ADDSLOTS;
}

var CLUSTER_ADDSLOTSRANGE = {};

var hasRequiredCLUSTER_ADDSLOTSRANGE;

function requireCLUSTER_ADDSLOTSRANGE () {
	if (hasRequiredCLUSTER_ADDSLOTSRANGE) return CLUSTER_ADDSLOTSRANGE;
	hasRequiredCLUSTER_ADDSLOTSRANGE = 1;
	Object.defineProperty(CLUSTER_ADDSLOTSRANGE, "__esModule", { value: true });
	CLUSTER_ADDSLOTSRANGE.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(ranges) {
	    return (0, generic_transformers_1.pushSlotRangesArguments)(['CLUSTER', 'ADDSLOTSRANGE'], ranges);
	}
	CLUSTER_ADDSLOTSRANGE.transformArguments = transformArguments;
	return CLUSTER_ADDSLOTSRANGE;
}

var CLUSTER_BUMPEPOCH = {};

var hasRequiredCLUSTER_BUMPEPOCH;

function requireCLUSTER_BUMPEPOCH () {
	if (hasRequiredCLUSTER_BUMPEPOCH) return CLUSTER_BUMPEPOCH;
	hasRequiredCLUSTER_BUMPEPOCH = 1;
	Object.defineProperty(CLUSTER_BUMPEPOCH, "__esModule", { value: true });
	CLUSTER_BUMPEPOCH.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'BUMPEPOCH'];
	}
	CLUSTER_BUMPEPOCH.transformArguments = transformArguments;
	return CLUSTER_BUMPEPOCH;
}

var CLUSTER_COUNTFAILUREREPORTS = {};

var hasRequiredCLUSTER_COUNTFAILUREREPORTS;

function requireCLUSTER_COUNTFAILUREREPORTS () {
	if (hasRequiredCLUSTER_COUNTFAILUREREPORTS) return CLUSTER_COUNTFAILUREREPORTS;
	hasRequiredCLUSTER_COUNTFAILUREREPORTS = 1;
	Object.defineProperty(CLUSTER_COUNTFAILUREREPORTS, "__esModule", { value: true });
	CLUSTER_COUNTFAILUREREPORTS.transformArguments = void 0;
	function transformArguments(nodeId) {
	    return ['CLUSTER', 'COUNT-FAILURE-REPORTS', nodeId];
	}
	CLUSTER_COUNTFAILUREREPORTS.transformArguments = transformArguments;
	return CLUSTER_COUNTFAILUREREPORTS;
}

var CLUSTER_COUNTKEYSINSLOT = {};

var hasRequiredCLUSTER_COUNTKEYSINSLOT;

function requireCLUSTER_COUNTKEYSINSLOT () {
	if (hasRequiredCLUSTER_COUNTKEYSINSLOT) return CLUSTER_COUNTKEYSINSLOT;
	hasRequiredCLUSTER_COUNTKEYSINSLOT = 1;
	Object.defineProperty(CLUSTER_COUNTKEYSINSLOT, "__esModule", { value: true });
	CLUSTER_COUNTKEYSINSLOT.transformArguments = void 0;
	function transformArguments(slot) {
	    return ['CLUSTER', 'COUNTKEYSINSLOT', slot.toString()];
	}
	CLUSTER_COUNTKEYSINSLOT.transformArguments = transformArguments;
	return CLUSTER_COUNTKEYSINSLOT;
}

var CLUSTER_DELSLOTS = {};

var hasRequiredCLUSTER_DELSLOTS;

function requireCLUSTER_DELSLOTS () {
	if (hasRequiredCLUSTER_DELSLOTS) return CLUSTER_DELSLOTS;
	hasRequiredCLUSTER_DELSLOTS = 1;
	Object.defineProperty(CLUSTER_DELSLOTS, "__esModule", { value: true });
	CLUSTER_DELSLOTS.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(slots) {
	    return (0, generic_transformers_1.pushVerdictNumberArguments)(['CLUSTER', 'DELSLOTS'], slots);
	}
	CLUSTER_DELSLOTS.transformArguments = transformArguments;
	return CLUSTER_DELSLOTS;
}

var CLUSTER_DELSLOTSRANGE = {};

var hasRequiredCLUSTER_DELSLOTSRANGE;

function requireCLUSTER_DELSLOTSRANGE () {
	if (hasRequiredCLUSTER_DELSLOTSRANGE) return CLUSTER_DELSLOTSRANGE;
	hasRequiredCLUSTER_DELSLOTSRANGE = 1;
	Object.defineProperty(CLUSTER_DELSLOTSRANGE, "__esModule", { value: true });
	CLUSTER_DELSLOTSRANGE.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(ranges) {
	    return (0, generic_transformers_1.pushSlotRangesArguments)(['CLUSTER', 'DELSLOTSRANGE'], ranges);
	}
	CLUSTER_DELSLOTSRANGE.transformArguments = transformArguments;
	return CLUSTER_DELSLOTSRANGE;
}

var CLUSTER_FAILOVER = {};

var hasRequiredCLUSTER_FAILOVER;

function requireCLUSTER_FAILOVER () {
	if (hasRequiredCLUSTER_FAILOVER) return CLUSTER_FAILOVER;
	hasRequiredCLUSTER_FAILOVER = 1;
	Object.defineProperty(CLUSTER_FAILOVER, "__esModule", { value: true });
	CLUSTER_FAILOVER.transformArguments = CLUSTER_FAILOVER.FailoverModes = void 0;
	var FailoverModes;
	(function (FailoverModes) {
	    FailoverModes["FORCE"] = "FORCE";
	    FailoverModes["TAKEOVER"] = "TAKEOVER";
	})(FailoverModes || (CLUSTER_FAILOVER.FailoverModes = FailoverModes = {}));
	function transformArguments(mode) {
	    const args = ['CLUSTER', 'FAILOVER'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	CLUSTER_FAILOVER.transformArguments = transformArguments;
	return CLUSTER_FAILOVER;
}

var CLUSTER_FLUSHSLOTS = {};

var hasRequiredCLUSTER_FLUSHSLOTS;

function requireCLUSTER_FLUSHSLOTS () {
	if (hasRequiredCLUSTER_FLUSHSLOTS) return CLUSTER_FLUSHSLOTS;
	hasRequiredCLUSTER_FLUSHSLOTS = 1;
	Object.defineProperty(CLUSTER_FLUSHSLOTS, "__esModule", { value: true });
	CLUSTER_FLUSHSLOTS.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'FLUSHSLOTS'];
	}
	CLUSTER_FLUSHSLOTS.transformArguments = transformArguments;
	return CLUSTER_FLUSHSLOTS;
}

var CLUSTER_FORGET = {};

var hasRequiredCLUSTER_FORGET;

function requireCLUSTER_FORGET () {
	if (hasRequiredCLUSTER_FORGET) return CLUSTER_FORGET;
	hasRequiredCLUSTER_FORGET = 1;
	Object.defineProperty(CLUSTER_FORGET, "__esModule", { value: true });
	CLUSTER_FORGET.transformArguments = void 0;
	function transformArguments(nodeId) {
	    return ['CLUSTER', 'FORGET', nodeId];
	}
	CLUSTER_FORGET.transformArguments = transformArguments;
	return CLUSTER_FORGET;
}

var CLUSTER_GETKEYSINSLOT = {};

var hasRequiredCLUSTER_GETKEYSINSLOT;

function requireCLUSTER_GETKEYSINSLOT () {
	if (hasRequiredCLUSTER_GETKEYSINSLOT) return CLUSTER_GETKEYSINSLOT;
	hasRequiredCLUSTER_GETKEYSINSLOT = 1;
	Object.defineProperty(CLUSTER_GETKEYSINSLOT, "__esModule", { value: true });
	CLUSTER_GETKEYSINSLOT.transformArguments = void 0;
	function transformArguments(slot, count) {
	    return ['CLUSTER', 'GETKEYSINSLOT', slot.toString(), count.toString()];
	}
	CLUSTER_GETKEYSINSLOT.transformArguments = transformArguments;
	return CLUSTER_GETKEYSINSLOT;
}

var CLUSTER_INFO = {};

var hasRequiredCLUSTER_INFO;

function requireCLUSTER_INFO () {
	if (hasRequiredCLUSTER_INFO) return CLUSTER_INFO;
	hasRequiredCLUSTER_INFO = 1;
	Object.defineProperty(CLUSTER_INFO, "__esModule", { value: true });
	CLUSTER_INFO.extractLineValue = CLUSTER_INFO.transformReply = CLUSTER_INFO.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'INFO'];
	}
	CLUSTER_INFO.transformArguments = transformArguments;
	function transformReply(reply) {
	    const lines = reply.split('\r\n');
	    return {
	        state: extractLineValue(lines[0]),
	        slots: {
	            assigned: Number(extractLineValue(lines[1])),
	            ok: Number(extractLineValue(lines[2])),
	            pfail: Number(extractLineValue(lines[3])),
	            fail: Number(extractLineValue(lines[4]))
	        },
	        knownNodes: Number(extractLineValue(lines[5])),
	        size: Number(extractLineValue(lines[6])),
	        currentEpoch: Number(extractLineValue(lines[7])),
	        myEpoch: Number(extractLineValue(lines[8])),
	        stats: {
	            messagesSent: Number(extractLineValue(lines[9])),
	            messagesReceived: Number(extractLineValue(lines[10]))
	        }
	    };
	}
	CLUSTER_INFO.transformReply = transformReply;
	function extractLineValue(line) {
	    return line.substring(line.indexOf(':') + 1);
	}
	CLUSTER_INFO.extractLineValue = extractLineValue;
	return CLUSTER_INFO;
}

var CLUSTER_KEYSLOT = {};

var hasRequiredCLUSTER_KEYSLOT;

function requireCLUSTER_KEYSLOT () {
	if (hasRequiredCLUSTER_KEYSLOT) return CLUSTER_KEYSLOT;
	hasRequiredCLUSTER_KEYSLOT = 1;
	Object.defineProperty(CLUSTER_KEYSLOT, "__esModule", { value: true });
	CLUSTER_KEYSLOT.transformArguments = void 0;
	function transformArguments(key) {
	    return ['CLUSTER', 'KEYSLOT', key];
	}
	CLUSTER_KEYSLOT.transformArguments = transformArguments;
	return CLUSTER_KEYSLOT;
}

var CLUSTER_LINKS = {};

var hasRequiredCLUSTER_LINKS;

function requireCLUSTER_LINKS () {
	if (hasRequiredCLUSTER_LINKS) return CLUSTER_LINKS;
	hasRequiredCLUSTER_LINKS = 1;
	Object.defineProperty(CLUSTER_LINKS, "__esModule", { value: true });
	CLUSTER_LINKS.transformReply = CLUSTER_LINKS.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'LINKS'];
	}
	CLUSTER_LINKS.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(peerLink => ({
	        direction: peerLink[1],
	        node: peerLink[3],
	        createTime: Number(peerLink[5]),
	        events: peerLink[7],
	        sendBufferAllocated: Number(peerLink[9]),
	        sendBufferUsed: Number(peerLink[11])
	    }));
	}
	CLUSTER_LINKS.transformReply = transformReply;
	return CLUSTER_LINKS;
}

var CLUSTER_MEET = {};

var hasRequiredCLUSTER_MEET;

function requireCLUSTER_MEET () {
	if (hasRequiredCLUSTER_MEET) return CLUSTER_MEET;
	hasRequiredCLUSTER_MEET = 1;
	Object.defineProperty(CLUSTER_MEET, "__esModule", { value: true });
	CLUSTER_MEET.transformArguments = void 0;
	function transformArguments(ip, port) {
	    return ['CLUSTER', 'MEET', ip, port.toString()];
	}
	CLUSTER_MEET.transformArguments = transformArguments;
	return CLUSTER_MEET;
}

var CLUSTER_MYID = {};

var hasRequiredCLUSTER_MYID;

function requireCLUSTER_MYID () {
	if (hasRequiredCLUSTER_MYID) return CLUSTER_MYID;
	hasRequiredCLUSTER_MYID = 1;
	Object.defineProperty(CLUSTER_MYID, "__esModule", { value: true });
	CLUSTER_MYID.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'MYID'];
	}
	CLUSTER_MYID.transformArguments = transformArguments;
	return CLUSTER_MYID;
}

var CLUSTER_MYSHARDID = {};

var hasRequiredCLUSTER_MYSHARDID;

function requireCLUSTER_MYSHARDID () {
	if (hasRequiredCLUSTER_MYSHARDID) return CLUSTER_MYSHARDID;
	hasRequiredCLUSTER_MYSHARDID = 1;
	Object.defineProperty(CLUSTER_MYSHARDID, "__esModule", { value: true });
	CLUSTER_MYSHARDID.transformArguments = CLUSTER_MYSHARDID.IS_READ_ONLY = void 0;
	CLUSTER_MYSHARDID.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['CLUSTER', 'MYSHARDID'];
	}
	CLUSTER_MYSHARDID.transformArguments = transformArguments;
	return CLUSTER_MYSHARDID;
}

var CLUSTER_NODES = {};

var hasRequiredCLUSTER_NODES;

function requireCLUSTER_NODES () {
	if (hasRequiredCLUSTER_NODES) return CLUSTER_NODES;
	hasRequiredCLUSTER_NODES = 1;
	Object.defineProperty(CLUSTER_NODES, "__esModule", { value: true });
	CLUSTER_NODES.transformReply = CLUSTER_NODES.RedisClusterNodeLinkStates = CLUSTER_NODES.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'NODES'];
	}
	CLUSTER_NODES.transformArguments = transformArguments;
	var RedisClusterNodeLinkStates;
	(function (RedisClusterNodeLinkStates) {
	    RedisClusterNodeLinkStates["CONNECTED"] = "connected";
	    RedisClusterNodeLinkStates["DISCONNECTED"] = "disconnected";
	})(RedisClusterNodeLinkStates || (CLUSTER_NODES.RedisClusterNodeLinkStates = RedisClusterNodeLinkStates = {}));
	function transformReply(reply) {
	    const lines = reply.split('\n');
	    lines.pop(); // last line is empty
	    const mastersMap = new Map(), replicasMap = new Map();
	    for (const line of lines) {
	        const [id, address, flags, masterId, pingSent, pongRecv, configEpoch, linkState, ...slots] = line.split(' '), node = {
	            id,
	            address,
	            ...transformNodeAddress(address),
	            flags: flags.split(','),
	            pingSent: Number(pingSent),
	            pongRecv: Number(pongRecv),
	            configEpoch: Number(configEpoch),
	            linkState: linkState
	        };
	        if (masterId === '-') {
	            let replicas = replicasMap.get(id);
	            if (!replicas) {
	                replicas = [];
	                replicasMap.set(id, replicas);
	            }
	            mastersMap.set(id, {
	                ...node,
	                slots: slots.map(slot => {
	                    // TODO: importing & exporting (https://redis.io/commands/cluster-nodes#special-slot-entries)
	                    const [fromString, toString] = slot.split('-', 2), from = Number(fromString);
	                    return {
	                        from,
	                        to: toString ? Number(toString) : from
	                    };
	                }),
	                replicas
	            });
	        }
	        else {
	            const replicas = replicasMap.get(masterId);
	            if (!replicas) {
	                replicasMap.set(masterId, [node]);
	            }
	            else {
	                replicas.push(node);
	            }
	        }
	    }
	    return [...mastersMap.values()];
	}
	CLUSTER_NODES.transformReply = transformReply;
	function transformNodeAddress(address) {
	    const indexOfColon = address.lastIndexOf(':'), indexOfAt = address.indexOf('@', indexOfColon), host = address.substring(0, indexOfColon);
	    if (indexOfAt === -1) {
	        return {
	            host,
	            port: Number(address.substring(indexOfColon + 1)),
	            cport: null
	        };
	    }
	    return {
	        host: address.substring(0, indexOfColon),
	        port: Number(address.substring(indexOfColon + 1, indexOfAt)),
	        cport: Number(address.substring(indexOfAt + 1))
	    };
	}
	return CLUSTER_NODES;
}

var CLUSTER_REPLICAS = {};

var hasRequiredCLUSTER_REPLICAS;

function requireCLUSTER_REPLICAS () {
	if (hasRequiredCLUSTER_REPLICAS) return CLUSTER_REPLICAS;
	hasRequiredCLUSTER_REPLICAS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = void 0;
		function transformArguments(nodeId) {
		    return ['CLUSTER', 'REPLICAS', nodeId];
		}
		exports.transformArguments = transformArguments;
		var CLUSTER_NODES_1 = requireCLUSTER_NODES();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return CLUSTER_NODES_1.transformReply; } }); 
	} (CLUSTER_REPLICAS));
	return CLUSTER_REPLICAS;
}

var CLUSTER_REPLICATE = {};

var hasRequiredCLUSTER_REPLICATE;

function requireCLUSTER_REPLICATE () {
	if (hasRequiredCLUSTER_REPLICATE) return CLUSTER_REPLICATE;
	hasRequiredCLUSTER_REPLICATE = 1;
	Object.defineProperty(CLUSTER_REPLICATE, "__esModule", { value: true });
	CLUSTER_REPLICATE.transformArguments = void 0;
	function transformArguments(nodeId) {
	    return ['CLUSTER', 'REPLICATE', nodeId];
	}
	CLUSTER_REPLICATE.transformArguments = transformArguments;
	return CLUSTER_REPLICATE;
}

var CLUSTER_RESET = {};

var hasRequiredCLUSTER_RESET;

function requireCLUSTER_RESET () {
	if (hasRequiredCLUSTER_RESET) return CLUSTER_RESET;
	hasRequiredCLUSTER_RESET = 1;
	Object.defineProperty(CLUSTER_RESET, "__esModule", { value: true });
	CLUSTER_RESET.transformArguments = void 0;
	function transformArguments(mode) {
	    const args = ['CLUSTER', 'RESET'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	CLUSTER_RESET.transformArguments = transformArguments;
	return CLUSTER_RESET;
}

var CLUSTER_SAVECONFIG = {};

var hasRequiredCLUSTER_SAVECONFIG;

function requireCLUSTER_SAVECONFIG () {
	if (hasRequiredCLUSTER_SAVECONFIG) return CLUSTER_SAVECONFIG;
	hasRequiredCLUSTER_SAVECONFIG = 1;
	Object.defineProperty(CLUSTER_SAVECONFIG, "__esModule", { value: true });
	CLUSTER_SAVECONFIG.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'SAVECONFIG'];
	}
	CLUSTER_SAVECONFIG.transformArguments = transformArguments;
	return CLUSTER_SAVECONFIG;
}

var CLUSTER_SETCONFIGEPOCH = {};

var hasRequiredCLUSTER_SETCONFIGEPOCH;

function requireCLUSTER_SETCONFIGEPOCH () {
	if (hasRequiredCLUSTER_SETCONFIGEPOCH) return CLUSTER_SETCONFIGEPOCH;
	hasRequiredCLUSTER_SETCONFIGEPOCH = 1;
	Object.defineProperty(CLUSTER_SETCONFIGEPOCH, "__esModule", { value: true });
	CLUSTER_SETCONFIGEPOCH.transformArguments = void 0;
	function transformArguments(configEpoch) {
	    return ['CLUSTER', 'SET-CONFIG-EPOCH', configEpoch.toString()];
	}
	CLUSTER_SETCONFIGEPOCH.transformArguments = transformArguments;
	return CLUSTER_SETCONFIGEPOCH;
}

var CLUSTER_SETSLOT = {};

var hasRequiredCLUSTER_SETSLOT;

function requireCLUSTER_SETSLOT () {
	if (hasRequiredCLUSTER_SETSLOT) return CLUSTER_SETSLOT;
	hasRequiredCLUSTER_SETSLOT = 1;
	Object.defineProperty(CLUSTER_SETSLOT, "__esModule", { value: true });
	CLUSTER_SETSLOT.transformArguments = CLUSTER_SETSLOT.ClusterSlotStates = void 0;
	var ClusterSlotStates;
	(function (ClusterSlotStates) {
	    ClusterSlotStates["IMPORTING"] = "IMPORTING";
	    ClusterSlotStates["MIGRATING"] = "MIGRATING";
	    ClusterSlotStates["STABLE"] = "STABLE";
	    ClusterSlotStates["NODE"] = "NODE";
	})(ClusterSlotStates || (CLUSTER_SETSLOT.ClusterSlotStates = ClusterSlotStates = {}));
	function transformArguments(slot, state, nodeId) {
	    const args = ['CLUSTER', 'SETSLOT', slot.toString(), state];
	    if (nodeId) {
	        args.push(nodeId);
	    }
	    return args;
	}
	CLUSTER_SETSLOT.transformArguments = transformArguments;
	return CLUSTER_SETSLOT;
}

var CLUSTER_SLOTS = {};

var hasRequiredCLUSTER_SLOTS;

function requireCLUSTER_SLOTS () {
	if (hasRequiredCLUSTER_SLOTS) return CLUSTER_SLOTS;
	hasRequiredCLUSTER_SLOTS = 1;
	Object.defineProperty(CLUSTER_SLOTS, "__esModule", { value: true });
	CLUSTER_SLOTS.transformReply = CLUSTER_SLOTS.transformArguments = void 0;
	function transformArguments() {
	    return ['CLUSTER', 'SLOTS'];
	}
	CLUSTER_SLOTS.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(([from, to, master, ...replicas]) => {
	        return {
	            from,
	            to,
	            master: transformNode(master),
	            replicas: replicas.map(transformNode)
	        };
	    });
	}
	CLUSTER_SLOTS.transformReply = transformReply;
	function transformNode([ip, port, id]) {
	    return {
	        ip,
	        port,
	        id
	    };
	}
	return CLUSTER_SLOTS;
}

var COMMAND_COUNT = {};

var hasRequiredCOMMAND_COUNT;

function requireCOMMAND_COUNT () {
	if (hasRequiredCOMMAND_COUNT) return COMMAND_COUNT;
	hasRequiredCOMMAND_COUNT = 1;
	Object.defineProperty(COMMAND_COUNT, "__esModule", { value: true });
	COMMAND_COUNT.transformArguments = COMMAND_COUNT.IS_READ_ONLY = void 0;
	COMMAND_COUNT.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['COMMAND', 'COUNT'];
	}
	COMMAND_COUNT.transformArguments = transformArguments;
	return COMMAND_COUNT;
}

var COMMAND_GETKEYS = {};

var hasRequiredCOMMAND_GETKEYS;

function requireCOMMAND_GETKEYS () {
	if (hasRequiredCOMMAND_GETKEYS) return COMMAND_GETKEYS;
	hasRequiredCOMMAND_GETKEYS = 1;
	Object.defineProperty(COMMAND_GETKEYS, "__esModule", { value: true });
	COMMAND_GETKEYS.transformArguments = COMMAND_GETKEYS.IS_READ_ONLY = void 0;
	COMMAND_GETKEYS.IS_READ_ONLY = true;
	function transformArguments(args) {
	    return ['COMMAND', 'GETKEYS', ...args];
	}
	COMMAND_GETKEYS.transformArguments = transformArguments;
	return COMMAND_GETKEYS;
}

var COMMAND_GETKEYSANDFLAGS = {};

var hasRequiredCOMMAND_GETKEYSANDFLAGS;

function requireCOMMAND_GETKEYSANDFLAGS () {
	if (hasRequiredCOMMAND_GETKEYSANDFLAGS) return COMMAND_GETKEYSANDFLAGS;
	hasRequiredCOMMAND_GETKEYSANDFLAGS = 1;
	Object.defineProperty(COMMAND_GETKEYSANDFLAGS, "__esModule", { value: true });
	COMMAND_GETKEYSANDFLAGS.transformReply = COMMAND_GETKEYSANDFLAGS.transformArguments = COMMAND_GETKEYSANDFLAGS.IS_READ_ONLY = void 0;
	COMMAND_GETKEYSANDFLAGS.IS_READ_ONLY = true;
	function transformArguments(args) {
	    return ['COMMAND', 'GETKEYSANDFLAGS', ...args];
	}
	COMMAND_GETKEYSANDFLAGS.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(([key, flags]) => ({
	        key,
	        flags
	    }));
	}
	COMMAND_GETKEYSANDFLAGS.transformReply = transformReply;
	return COMMAND_GETKEYSANDFLAGS;
}

var COMMAND_INFO = {};

var hasRequiredCOMMAND_INFO;

function requireCOMMAND_INFO () {
	if (hasRequiredCOMMAND_INFO) return COMMAND_INFO;
	hasRequiredCOMMAND_INFO = 1;
	Object.defineProperty(COMMAND_INFO, "__esModule", { value: true });
	COMMAND_INFO.transformReply = COMMAND_INFO.transformArguments = COMMAND_INFO.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	COMMAND_INFO.IS_READ_ONLY = true;
	function transformArguments(commands) {
	    return ['COMMAND', 'INFO', ...commands];
	}
	COMMAND_INFO.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(command => command ? (0, generic_transformers_1.transformCommandReply)(command) : null);
	}
	COMMAND_INFO.transformReply = transformReply;
	return COMMAND_INFO;
}

var COMMAND_LIST = {};

var hasRequiredCOMMAND_LIST;

function requireCOMMAND_LIST () {
	if (hasRequiredCOMMAND_LIST) return COMMAND_LIST;
	hasRequiredCOMMAND_LIST = 1;
	Object.defineProperty(COMMAND_LIST, "__esModule", { value: true });
	COMMAND_LIST.transformArguments = COMMAND_LIST.FilterBy = COMMAND_LIST.IS_READ_ONLY = void 0;
	COMMAND_LIST.IS_READ_ONLY = true;
	var FilterBy;
	(function (FilterBy) {
	    FilterBy["MODULE"] = "MODULE";
	    FilterBy["ACLCAT"] = "ACLCAT";
	    FilterBy["PATTERN"] = "PATTERN";
	})(FilterBy || (COMMAND_LIST.FilterBy = FilterBy = {}));
	function transformArguments(filter) {
	    const args = ['COMMAND', 'LIST'];
	    if (filter) {
	        args.push('FILTERBY', filter.filterBy, filter.value);
	    }
	    return args;
	}
	COMMAND_LIST.transformArguments = transformArguments;
	return COMMAND_LIST;
}

var COMMAND = {};

var hasRequiredCOMMAND;

function requireCOMMAND () {
	if (hasRequiredCOMMAND) return COMMAND;
	hasRequiredCOMMAND = 1;
	Object.defineProperty(COMMAND, "__esModule", { value: true });
	COMMAND.transformReply = COMMAND.transformArguments = COMMAND.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	COMMAND.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['COMMAND'];
	}
	COMMAND.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(generic_transformers_1.transformCommandReply);
	}
	COMMAND.transformReply = transformReply;
	return COMMAND;
}

var CONFIG_GET$2 = {};

var hasRequiredCONFIG_GET$2;

function requireCONFIG_GET$2 () {
	if (hasRequiredCONFIG_GET$2) return CONFIG_GET$2;
	hasRequiredCONFIG_GET$2 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = void 0;
		function transformArguments(parameter) {
		    return ['CONFIG', 'GET', parameter];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformTuplesReply; } }); 
	} (CONFIG_GET$2));
	return CONFIG_GET$2;
}

var CONFIG_RESETSTAT = {};

var hasRequiredCONFIG_RESETSTAT;

function requireCONFIG_RESETSTAT () {
	if (hasRequiredCONFIG_RESETSTAT) return CONFIG_RESETSTAT;
	hasRequiredCONFIG_RESETSTAT = 1;
	Object.defineProperty(CONFIG_RESETSTAT, "__esModule", { value: true });
	CONFIG_RESETSTAT.transformArguments = void 0;
	function transformArguments() {
	    return ['CONFIG', 'RESETSTAT'];
	}
	CONFIG_RESETSTAT.transformArguments = transformArguments;
	return CONFIG_RESETSTAT;
}

var CONFIG_REWRITE = {};

var hasRequiredCONFIG_REWRITE;

function requireCONFIG_REWRITE () {
	if (hasRequiredCONFIG_REWRITE) return CONFIG_REWRITE;
	hasRequiredCONFIG_REWRITE = 1;
	Object.defineProperty(CONFIG_REWRITE, "__esModule", { value: true });
	CONFIG_REWRITE.transformArguments = void 0;
	function transformArguments() {
	    return ['CONFIG', 'REWRITE'];
	}
	CONFIG_REWRITE.transformArguments = transformArguments;
	return CONFIG_REWRITE;
}

var CONFIG_SET$2 = {};

var hasRequiredCONFIG_SET$2;

function requireCONFIG_SET$2 () {
	if (hasRequiredCONFIG_SET$2) return CONFIG_SET$2;
	hasRequiredCONFIG_SET$2 = 1;
	Object.defineProperty(CONFIG_SET$2, "__esModule", { value: true });
	CONFIG_SET$2.transformArguments = void 0;
	function transformArguments(...[parameterOrConfig, value]) {
	    const args = ['CONFIG', 'SET'];
	    if (typeof parameterOrConfig === 'string') {
	        args.push(parameterOrConfig, value);
	    }
	    else {
	        for (const [key, value] of Object.entries(parameterOrConfig)) {
	            args.push(key, value);
	        }
	    }
	    return args;
	}
	CONFIG_SET$2.transformArguments = transformArguments;
	return CONFIG_SET$2;
}

var DBSIZE = {};

var hasRequiredDBSIZE;

function requireDBSIZE () {
	if (hasRequiredDBSIZE) return DBSIZE;
	hasRequiredDBSIZE = 1;
	Object.defineProperty(DBSIZE, "__esModule", { value: true });
	DBSIZE.transformArguments = DBSIZE.IS_READ_ONLY = void 0;
	DBSIZE.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['DBSIZE'];
	}
	DBSIZE.transformArguments = transformArguments;
	return DBSIZE;
}

var DISCARD = {};

var hasRequiredDISCARD;

function requireDISCARD () {
	if (hasRequiredDISCARD) return DISCARD;
	hasRequiredDISCARD = 1;
	Object.defineProperty(DISCARD, "__esModule", { value: true });
	DISCARD.transformArguments = void 0;
	function transformArguments() {
	    return ['DISCARD'];
	}
	DISCARD.transformArguments = transformArguments;
	return DISCARD;
}

var ECHO = {};

var hasRequiredECHO;

function requireECHO () {
	if (hasRequiredECHO) return ECHO;
	hasRequiredECHO = 1;
	Object.defineProperty(ECHO, "__esModule", { value: true });
	ECHO.transformArguments = ECHO.IS_READ_ONLY = void 0;
	ECHO.IS_READ_ONLY = true;
	function transformArguments(message) {
	    return ['ECHO', message];
	}
	ECHO.transformArguments = transformArguments;
	return ECHO;
}

var FAILOVER = {};

var hasRequiredFAILOVER;

function requireFAILOVER () {
	if (hasRequiredFAILOVER) return FAILOVER;
	hasRequiredFAILOVER = 1;
	Object.defineProperty(FAILOVER, "__esModule", { value: true });
	FAILOVER.transformArguments = void 0;
	function transformArguments(options) {
	    const args = ['FAILOVER'];
	    if (options?.TO) {
	        args.push('TO', options.TO.host, options.TO.port.toString());
	        if (options.TO.FORCE) {
	            args.push('FORCE');
	        }
	    }
	    if (options?.ABORT) {
	        args.push('ABORT');
	    }
	    if (options?.TIMEOUT) {
	        args.push('TIMEOUT', options.TIMEOUT.toString());
	    }
	    return args;
	}
	FAILOVER.transformArguments = transformArguments;
	return FAILOVER;
}

var FLUSHALL = {};

var hasRequiredFLUSHALL;

function requireFLUSHALL () {
	if (hasRequiredFLUSHALL) return FLUSHALL;
	hasRequiredFLUSHALL = 1;
	Object.defineProperty(FLUSHALL, "__esModule", { value: true });
	FLUSHALL.transformArguments = FLUSHALL.RedisFlushModes = void 0;
	var RedisFlushModes;
	(function (RedisFlushModes) {
	    RedisFlushModes["ASYNC"] = "ASYNC";
	    RedisFlushModes["SYNC"] = "SYNC";
	})(RedisFlushModes || (FLUSHALL.RedisFlushModes = RedisFlushModes = {}));
	function transformArguments(mode) {
	    const args = ['FLUSHALL'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	FLUSHALL.transformArguments = transformArguments;
	return FLUSHALL;
}

var FLUSHDB = {};

var hasRequiredFLUSHDB;

function requireFLUSHDB () {
	if (hasRequiredFLUSHDB) return FLUSHDB;
	hasRequiredFLUSHDB = 1;
	Object.defineProperty(FLUSHDB, "__esModule", { value: true });
	FLUSHDB.transformArguments = void 0;
	function transformArguments(mode) {
	    const args = ['FLUSHDB'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	FLUSHDB.transformArguments = transformArguments;
	return FLUSHDB;
}

var FUNCTION_DELETE = {};

var hasRequiredFUNCTION_DELETE;

function requireFUNCTION_DELETE () {
	if (hasRequiredFUNCTION_DELETE) return FUNCTION_DELETE;
	hasRequiredFUNCTION_DELETE = 1;
	Object.defineProperty(FUNCTION_DELETE, "__esModule", { value: true });
	FUNCTION_DELETE.transformArguments = void 0;
	function transformArguments(library) {
	    return ['FUNCTION', 'DELETE', library];
	}
	FUNCTION_DELETE.transformArguments = transformArguments;
	return FUNCTION_DELETE;
}

var FUNCTION_DUMP = {};

var hasRequiredFUNCTION_DUMP;

function requireFUNCTION_DUMP () {
	if (hasRequiredFUNCTION_DUMP) return FUNCTION_DUMP;
	hasRequiredFUNCTION_DUMP = 1;
	Object.defineProperty(FUNCTION_DUMP, "__esModule", { value: true });
	FUNCTION_DUMP.transformArguments = void 0;
	function transformArguments() {
	    return ['FUNCTION', 'DUMP'];
	}
	FUNCTION_DUMP.transformArguments = transformArguments;
	return FUNCTION_DUMP;
}

var FUNCTION_FLUSH = {};

var hasRequiredFUNCTION_FLUSH;

function requireFUNCTION_FLUSH () {
	if (hasRequiredFUNCTION_FLUSH) return FUNCTION_FLUSH;
	hasRequiredFUNCTION_FLUSH = 1;
	Object.defineProperty(FUNCTION_FLUSH, "__esModule", { value: true });
	FUNCTION_FLUSH.transformArguments = void 0;
	function transformArguments(mode) {
	    const args = ['FUNCTION', 'FLUSH'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	FUNCTION_FLUSH.transformArguments = transformArguments;
	return FUNCTION_FLUSH;
}

var FUNCTION_KILL = {};

var hasRequiredFUNCTION_KILL;

function requireFUNCTION_KILL () {
	if (hasRequiredFUNCTION_KILL) return FUNCTION_KILL;
	hasRequiredFUNCTION_KILL = 1;
	Object.defineProperty(FUNCTION_KILL, "__esModule", { value: true });
	FUNCTION_KILL.transformArguments = void 0;
	function transformArguments() {
	    return ['FUNCTION', 'KILL'];
	}
	FUNCTION_KILL.transformArguments = transformArguments;
	return FUNCTION_KILL;
}

var FUNCTION_LIST_WITHCODE = {};

var FUNCTION_LIST = {};

var hasRequiredFUNCTION_LIST;

function requireFUNCTION_LIST () {
	if (hasRequiredFUNCTION_LIST) return FUNCTION_LIST;
	hasRequiredFUNCTION_LIST = 1;
	Object.defineProperty(FUNCTION_LIST, "__esModule", { value: true });
	FUNCTION_LIST.transformReply = FUNCTION_LIST.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(pattern) {
	    const args = ['FUNCTION', 'LIST'];
	    if (pattern) {
	        args.push(pattern);
	    }
	    return args;
	}
	FUNCTION_LIST.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(generic_transformers_1.transformFunctionListItemReply);
	}
	FUNCTION_LIST.transformReply = transformReply;
	return FUNCTION_LIST;
}

var hasRequiredFUNCTION_LIST_WITHCODE;

function requireFUNCTION_LIST_WITHCODE () {
	if (hasRequiredFUNCTION_LIST_WITHCODE) return FUNCTION_LIST_WITHCODE;
	hasRequiredFUNCTION_LIST_WITHCODE = 1;
	Object.defineProperty(FUNCTION_LIST_WITHCODE, "__esModule", { value: true });
	FUNCTION_LIST_WITHCODE.transformReply = FUNCTION_LIST_WITHCODE.transformArguments = void 0;
	const FUNCTION_LIST_1 = requireFUNCTION_LIST();
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(pattern) {
	    const args = (0, FUNCTION_LIST_1.transformArguments)(pattern);
	    args.push('WITHCODE');
	    return args;
	}
	FUNCTION_LIST_WITHCODE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(library => ({
	        ...(0, generic_transformers_1.transformFunctionListItemReply)(library),
	        libraryCode: library[7]
	    }));
	}
	FUNCTION_LIST_WITHCODE.transformReply = transformReply;
	return FUNCTION_LIST_WITHCODE;
}

var FUNCTION_LOAD = {};

var hasRequiredFUNCTION_LOAD;

function requireFUNCTION_LOAD () {
	if (hasRequiredFUNCTION_LOAD) return FUNCTION_LOAD;
	hasRequiredFUNCTION_LOAD = 1;
	Object.defineProperty(FUNCTION_LOAD, "__esModule", { value: true });
	FUNCTION_LOAD.transformArguments = void 0;
	function transformArguments(code, options) {
	    const args = ['FUNCTION', 'LOAD'];
	    if (options?.REPLACE) {
	        args.push('REPLACE');
	    }
	    args.push(code);
	    return args;
	}
	FUNCTION_LOAD.transformArguments = transformArguments;
	return FUNCTION_LOAD;
}

var FUNCTION_RESTORE = {};

var hasRequiredFUNCTION_RESTORE;

function requireFUNCTION_RESTORE () {
	if (hasRequiredFUNCTION_RESTORE) return FUNCTION_RESTORE;
	hasRequiredFUNCTION_RESTORE = 1;
	Object.defineProperty(FUNCTION_RESTORE, "__esModule", { value: true });
	FUNCTION_RESTORE.transformArguments = void 0;
	function transformArguments(dump, mode) {
	    const args = ['FUNCTION', 'RESTORE', dump];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	FUNCTION_RESTORE.transformArguments = transformArguments;
	return FUNCTION_RESTORE;
}

var FUNCTION_STATS = {};

var hasRequiredFUNCTION_STATS;

function requireFUNCTION_STATS () {
	if (hasRequiredFUNCTION_STATS) return FUNCTION_STATS;
	hasRequiredFUNCTION_STATS = 1;
	Object.defineProperty(FUNCTION_STATS, "__esModule", { value: true });
	FUNCTION_STATS.transformReply = FUNCTION_STATS.transformArguments = void 0;
	function transformArguments() {
	    return ['FUNCTION', 'STATS'];
	}
	FUNCTION_STATS.transformArguments = transformArguments;
	function transformReply(reply) {
	    const engines = Object.create(null);
	    for (let i = 0; i < reply[3].length; i++) {
	        engines[reply[3][i]] = {
	            librariesCount: reply[3][++i][1],
	            functionsCount: reply[3][i][3]
	        };
	    }
	    return {
	        runningScript: reply[1] === null ? null : {
	            name: reply[1][1],
	            command: reply[1][3],
	            durationMs: reply[1][5]
	        },
	        engines
	    };
	}
	FUNCTION_STATS.transformReply = transformReply;
	return FUNCTION_STATS;
}

var HELLO = {};

var hasRequiredHELLO;

function requireHELLO () {
	if (hasRequiredHELLO) return HELLO;
	hasRequiredHELLO = 1;
	Object.defineProperty(HELLO, "__esModule", { value: true });
	HELLO.transformReply = HELLO.transformArguments = void 0;
	function transformArguments(options) {
	    const args = ['HELLO'];
	    if (options) {
	        args.push(options.protover.toString());
	        if (options.auth) {
	            args.push('AUTH', options.auth.username, options.auth.password);
	        }
	        if (options.clientName) {
	            args.push('SETNAME', options.clientName);
	        }
	    }
	    return args;
	}
	HELLO.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        server: reply[1],
	        version: reply[3],
	        proto: reply[5],
	        id: reply[7],
	        mode: reply[9],
	        role: reply[11],
	        modules: reply[13]
	    };
	}
	HELLO.transformReply = transformReply;
	return HELLO;
}

var INFO$7 = {};

var hasRequiredINFO$7;

function requireINFO$7 () {
	if (hasRequiredINFO$7) return INFO$7;
	hasRequiredINFO$7 = 1;
	Object.defineProperty(INFO$7, "__esModule", { value: true });
	INFO$7.transformArguments = INFO$7.IS_READ_ONLY = void 0;
	INFO$7.IS_READ_ONLY = true;
	function transformArguments(section) {
	    const args = ['INFO'];
	    if (section) {
	        args.push(section);
	    }
	    return args;
	}
	INFO$7.transformArguments = transformArguments;
	return INFO$7;
}

var KEYS = {};

var hasRequiredKEYS;

function requireKEYS () {
	if (hasRequiredKEYS) return KEYS;
	hasRequiredKEYS = 1;
	Object.defineProperty(KEYS, "__esModule", { value: true });
	KEYS.transformArguments = void 0;
	function transformArguments(pattern) {
	    return ['KEYS', pattern];
	}
	KEYS.transformArguments = transformArguments;
	return KEYS;
}

var LASTSAVE = {};

var hasRequiredLASTSAVE;

function requireLASTSAVE () {
	if (hasRequiredLASTSAVE) return LASTSAVE;
	hasRequiredLASTSAVE = 1;
	Object.defineProperty(LASTSAVE, "__esModule", { value: true });
	LASTSAVE.transformReply = LASTSAVE.transformArguments = LASTSAVE.IS_READ_ONLY = void 0;
	LASTSAVE.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['LASTSAVE'];
	}
	LASTSAVE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return new Date(reply);
	}
	LASTSAVE.transformReply = transformReply;
	return LASTSAVE;
}

var LATENCY_DOCTOR = {};

var hasRequiredLATENCY_DOCTOR;

function requireLATENCY_DOCTOR () {
	if (hasRequiredLATENCY_DOCTOR) return LATENCY_DOCTOR;
	hasRequiredLATENCY_DOCTOR = 1;
	Object.defineProperty(LATENCY_DOCTOR, "__esModule", { value: true });
	LATENCY_DOCTOR.transformArguments = void 0;
	function transformArguments() {
	    return ['LATENCY', 'DOCTOR'];
	}
	LATENCY_DOCTOR.transformArguments = transformArguments;
	return LATENCY_DOCTOR;
}

var LATENCY_GRAPH = {};

var hasRequiredLATENCY_GRAPH;

function requireLATENCY_GRAPH () {
	if (hasRequiredLATENCY_GRAPH) return LATENCY_GRAPH;
	hasRequiredLATENCY_GRAPH = 1;
	Object.defineProperty(LATENCY_GRAPH, "__esModule", { value: true });
	LATENCY_GRAPH.transformArguments = void 0;
	function transformArguments(event) {
	    return ['LATENCY', 'GRAPH', event];
	}
	LATENCY_GRAPH.transformArguments = transformArguments;
	return LATENCY_GRAPH;
}

var LATENCY_HISTORY = {};

var hasRequiredLATENCY_HISTORY;

function requireLATENCY_HISTORY () {
	if (hasRequiredLATENCY_HISTORY) return LATENCY_HISTORY;
	hasRequiredLATENCY_HISTORY = 1;
	Object.defineProperty(LATENCY_HISTORY, "__esModule", { value: true });
	LATENCY_HISTORY.transformArguments = void 0;
	function transformArguments(event) {
	    return ['LATENCY', 'HISTORY', event];
	}
	LATENCY_HISTORY.transformArguments = transformArguments;
	return LATENCY_HISTORY;
}

var LATENCY_LATEST = {};

var hasRequiredLATENCY_LATEST;

function requireLATENCY_LATEST () {
	if (hasRequiredLATENCY_LATEST) return LATENCY_LATEST;
	hasRequiredLATENCY_LATEST = 1;
	Object.defineProperty(LATENCY_LATEST, "__esModule", { value: true });
	LATENCY_LATEST.transformArguments = void 0;
	function transformArguments() {
	    return ['LATENCY', 'LATEST'];
	}
	LATENCY_LATEST.transformArguments = transformArguments;
	return LATENCY_LATEST;
}

var LOLWUT = {};

var hasRequiredLOLWUT;

function requireLOLWUT () {
	if (hasRequiredLOLWUT) return LOLWUT;
	hasRequiredLOLWUT = 1;
	Object.defineProperty(LOLWUT, "__esModule", { value: true });
	LOLWUT.transformArguments = LOLWUT.IS_READ_ONLY = void 0;
	LOLWUT.IS_READ_ONLY = true;
	function transformArguments(version, ...optionalArguments) {
	    const args = ['LOLWUT'];
	    if (version) {
	        args.push('VERSION', version.toString(), ...optionalArguments.map(String));
	    }
	    return args;
	}
	LOLWUT.transformArguments = transformArguments;
	return LOLWUT;
}

var MEMORY_DOCTOR = {};

var hasRequiredMEMORY_DOCTOR;

function requireMEMORY_DOCTOR () {
	if (hasRequiredMEMORY_DOCTOR) return MEMORY_DOCTOR;
	hasRequiredMEMORY_DOCTOR = 1;
	Object.defineProperty(MEMORY_DOCTOR, "__esModule", { value: true });
	MEMORY_DOCTOR.transformArguments = void 0;
	function transformArguments() {
	    return ['MEMORY', 'DOCTOR'];
	}
	MEMORY_DOCTOR.transformArguments = transformArguments;
	return MEMORY_DOCTOR;
}

var MEMORY_MALLOCSTATS = {};

var hasRequiredMEMORY_MALLOCSTATS;

function requireMEMORY_MALLOCSTATS () {
	if (hasRequiredMEMORY_MALLOCSTATS) return MEMORY_MALLOCSTATS;
	hasRequiredMEMORY_MALLOCSTATS = 1;
	Object.defineProperty(MEMORY_MALLOCSTATS, "__esModule", { value: true });
	MEMORY_MALLOCSTATS.transformArguments = void 0;
	function transformArguments() {
	    return ['MEMORY', 'MALLOC-STATS'];
	}
	MEMORY_MALLOCSTATS.transformArguments = transformArguments;
	return MEMORY_MALLOCSTATS;
}

var MEMORY_PURGE = {};

var hasRequiredMEMORY_PURGE;

function requireMEMORY_PURGE () {
	if (hasRequiredMEMORY_PURGE) return MEMORY_PURGE;
	hasRequiredMEMORY_PURGE = 1;
	Object.defineProperty(MEMORY_PURGE, "__esModule", { value: true });
	MEMORY_PURGE.transformArguments = void 0;
	function transformArguments() {
	    return ['MEMORY', 'PURGE'];
	}
	MEMORY_PURGE.transformArguments = transformArguments;
	return MEMORY_PURGE;
}

var MEMORY_STATS = {};

var hasRequiredMEMORY_STATS;

function requireMEMORY_STATS () {
	if (hasRequiredMEMORY_STATS) return MEMORY_STATS;
	hasRequiredMEMORY_STATS = 1;
	Object.defineProperty(MEMORY_STATS, "__esModule", { value: true });
	MEMORY_STATS.transformReply = MEMORY_STATS.transformArguments = void 0;
	function transformArguments() {
	    return ['MEMORY', 'STATS'];
	}
	MEMORY_STATS.transformArguments = transformArguments;
	const FIELDS_MAPPING = {
	    'peak.allocated': 'peakAllocated',
	    'total.allocated': 'totalAllocated',
	    'startup.allocated': 'startupAllocated',
	    'replication.backlog': 'replicationBacklog',
	    'clients.slaves': 'clientsReplicas',
	    'clients.normal': 'clientsNormal',
	    'aof.buffer': 'aofBuffer',
	    'lua.caches': 'luaCaches',
	    'overhead.total': 'overheadTotal',
	    'keys.count': 'keysCount',
	    'keys.bytes-per-key': 'keysBytesPerKey',
	    'dataset.bytes': 'datasetBytes',
	    'dataset.percentage': 'datasetPercentage',
	    'peak.percentage': 'peakPercentage',
	    'allocator.allocated': 'allocatorAllocated',
	    'allocator.active': 'allocatorActive',
	    'allocator.resident': 'allocatorResident',
	    'allocator-fragmentation.ratio': 'allocatorFragmentationRatio',
	    'allocator-fragmentation.bytes': 'allocatorFragmentationBytes',
	    'allocator-rss.ratio': 'allocatorRssRatio',
	    'allocator-rss.bytes': 'allocatorRssBytes',
	    'rss-overhead.ratio': 'rssOverheadRatio',
	    'rss-overhead.bytes': 'rssOverheadBytes',
	    'fragmentation': 'fragmentation',
	    'fragmentation.bytes': 'fragmentationBytes'
	}, DB_FIELDS_MAPPING = {
	    'overhead.hashtable.main': 'overheadHashtableMain',
	    'overhead.hashtable.expires': 'overheadHashtableExpires'
	};
	function transformReply(rawReply) {
	    const reply = {
	        db: {}
	    };
	    for (let i = 0; i < rawReply.length; i += 2) {
	        const key = rawReply[i];
	        if (key.startsWith('db.')) {
	            const dbTuples = rawReply[i + 1], db = {};
	            for (let j = 0; j < dbTuples.length; j += 2) {
	                db[DB_FIELDS_MAPPING[dbTuples[j]]] = dbTuples[j + 1];
	            }
	            reply.db[key.substring(3)] = db;
	            continue;
	        }
	        reply[FIELDS_MAPPING[key]] = Number(rawReply[i + 1]);
	    }
	    return reply;
	}
	MEMORY_STATS.transformReply = transformReply;
	return MEMORY_STATS;
}

var MEMORY_USAGE = {};

var hasRequiredMEMORY_USAGE;

function requireMEMORY_USAGE () {
	if (hasRequiredMEMORY_USAGE) return MEMORY_USAGE;
	hasRequiredMEMORY_USAGE = 1;
	Object.defineProperty(MEMORY_USAGE, "__esModule", { value: true });
	MEMORY_USAGE.transformArguments = MEMORY_USAGE.IS_READ_ONLY = MEMORY_USAGE.FIRST_KEY_INDEX = void 0;
	MEMORY_USAGE.FIRST_KEY_INDEX = 1;
	MEMORY_USAGE.IS_READ_ONLY = true;
	function transformArguments(key, options) {
	    const args = ['MEMORY', 'USAGE', key];
	    if (options?.SAMPLES) {
	        args.push('SAMPLES', options.SAMPLES.toString());
	    }
	    return args;
	}
	MEMORY_USAGE.transformArguments = transformArguments;
	return MEMORY_USAGE;
}

var MODULE_LIST = {};

var hasRequiredMODULE_LIST;

function requireMODULE_LIST () {
	if (hasRequiredMODULE_LIST) return MODULE_LIST;
	hasRequiredMODULE_LIST = 1;
	Object.defineProperty(MODULE_LIST, "__esModule", { value: true });
	MODULE_LIST.transformArguments = void 0;
	function transformArguments() {
	    return ['MODULE', 'LIST'];
	}
	MODULE_LIST.transformArguments = transformArguments;
	return MODULE_LIST;
}

var MODULE_LOAD = {};

var hasRequiredMODULE_LOAD;

function requireMODULE_LOAD () {
	if (hasRequiredMODULE_LOAD) return MODULE_LOAD;
	hasRequiredMODULE_LOAD = 1;
	Object.defineProperty(MODULE_LOAD, "__esModule", { value: true });
	MODULE_LOAD.transformArguments = void 0;
	function transformArguments(path, moduleArgs) {
	    const args = ['MODULE', 'LOAD', path];
	    if (moduleArgs) {
	        args.push(...moduleArgs);
	    }
	    return args;
	}
	MODULE_LOAD.transformArguments = transformArguments;
	return MODULE_LOAD;
}

var MODULE_UNLOAD = {};

var hasRequiredMODULE_UNLOAD;

function requireMODULE_UNLOAD () {
	if (hasRequiredMODULE_UNLOAD) return MODULE_UNLOAD;
	hasRequiredMODULE_UNLOAD = 1;
	Object.defineProperty(MODULE_UNLOAD, "__esModule", { value: true });
	MODULE_UNLOAD.transformArguments = void 0;
	function transformArguments(name) {
	    return ['MODULE', 'UNLOAD', name];
	}
	MODULE_UNLOAD.transformArguments = transformArguments;
	return MODULE_UNLOAD;
}

var MOVE = {};

var hasRequiredMOVE;

function requireMOVE () {
	if (hasRequiredMOVE) return MOVE;
	hasRequiredMOVE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, db) {
		    return ['MOVE', key, db.toString()];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (MOVE));
	return MOVE;
}

var PING = {};

var hasRequiredPING;

function requirePING () {
	if (hasRequiredPING) return PING;
	hasRequiredPING = 1;
	Object.defineProperty(PING, "__esModule", { value: true });
	PING.transformArguments = void 0;
	function transformArguments(message) {
	    const args = ['PING'];
	    if (message) {
	        args.push(message);
	    }
	    return args;
	}
	PING.transformArguments = transformArguments;
	return PING;
}

var PUBSUB_CHANNELS = {};

var hasRequiredPUBSUB_CHANNELS;

function requirePUBSUB_CHANNELS () {
	if (hasRequiredPUBSUB_CHANNELS) return PUBSUB_CHANNELS;
	hasRequiredPUBSUB_CHANNELS = 1;
	Object.defineProperty(PUBSUB_CHANNELS, "__esModule", { value: true });
	PUBSUB_CHANNELS.transformArguments = PUBSUB_CHANNELS.IS_READ_ONLY = void 0;
	PUBSUB_CHANNELS.IS_READ_ONLY = true;
	function transformArguments(pattern) {
	    const args = ['PUBSUB', 'CHANNELS'];
	    if (pattern) {
	        args.push(pattern);
	    }
	    return args;
	}
	PUBSUB_CHANNELS.transformArguments = transformArguments;
	return PUBSUB_CHANNELS;
}

var PUBSUB_NUMPAT = {};

var hasRequiredPUBSUB_NUMPAT;

function requirePUBSUB_NUMPAT () {
	if (hasRequiredPUBSUB_NUMPAT) return PUBSUB_NUMPAT;
	hasRequiredPUBSUB_NUMPAT = 1;
	Object.defineProperty(PUBSUB_NUMPAT, "__esModule", { value: true });
	PUBSUB_NUMPAT.transformArguments = PUBSUB_NUMPAT.IS_READ_ONLY = void 0;
	PUBSUB_NUMPAT.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['PUBSUB', 'NUMPAT'];
	}
	PUBSUB_NUMPAT.transformArguments = transformArguments;
	return PUBSUB_NUMPAT;
}

var PUBSUB_NUMSUB = {};

var hasRequiredPUBSUB_NUMSUB;

function requirePUBSUB_NUMSUB () {
	if (hasRequiredPUBSUB_NUMSUB) return PUBSUB_NUMSUB;
	hasRequiredPUBSUB_NUMSUB = 1;
	Object.defineProperty(PUBSUB_NUMSUB, "__esModule", { value: true });
	PUBSUB_NUMSUB.transformReply = PUBSUB_NUMSUB.transformArguments = PUBSUB_NUMSUB.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	PUBSUB_NUMSUB.IS_READ_ONLY = true;
	function transformArguments(channels) {
	    const args = ['PUBSUB', 'NUMSUB'];
	    if (channels)
	        return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
	    return args;
	}
	PUBSUB_NUMSUB.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const transformedReply = Object.create(null);
	    for (let i = 0; i < rawReply.length; i += 2) {
	        transformedReply[rawReply[i]] = rawReply[i + 1];
	    }
	    return transformedReply;
	}
	PUBSUB_NUMSUB.transformReply = transformReply;
	return PUBSUB_NUMSUB;
}

var PUBSUB_SHARDCHANNELS = {};

var hasRequiredPUBSUB_SHARDCHANNELS;

function requirePUBSUB_SHARDCHANNELS () {
	if (hasRequiredPUBSUB_SHARDCHANNELS) return PUBSUB_SHARDCHANNELS;
	hasRequiredPUBSUB_SHARDCHANNELS = 1;
	Object.defineProperty(PUBSUB_SHARDCHANNELS, "__esModule", { value: true });
	PUBSUB_SHARDCHANNELS.transformArguments = PUBSUB_SHARDCHANNELS.IS_READ_ONLY = void 0;
	PUBSUB_SHARDCHANNELS.IS_READ_ONLY = true;
	function transformArguments(pattern) {
	    const args = ['PUBSUB', 'SHARDCHANNELS'];
	    if (pattern)
	        args.push(pattern);
	    return args;
	}
	PUBSUB_SHARDCHANNELS.transformArguments = transformArguments;
	return PUBSUB_SHARDCHANNELS;
}

var PUBSUB_SHARDNUMSUB = {};

var hasRequiredPUBSUB_SHARDNUMSUB;

function requirePUBSUB_SHARDNUMSUB () {
	if (hasRequiredPUBSUB_SHARDNUMSUB) return PUBSUB_SHARDNUMSUB;
	hasRequiredPUBSUB_SHARDNUMSUB = 1;
	Object.defineProperty(PUBSUB_SHARDNUMSUB, "__esModule", { value: true });
	PUBSUB_SHARDNUMSUB.transformReply = PUBSUB_SHARDNUMSUB.transformArguments = PUBSUB_SHARDNUMSUB.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	PUBSUB_SHARDNUMSUB.IS_READ_ONLY = true;
	function transformArguments(channels) {
	    const args = ['PUBSUB', 'SHARDNUMSUB'];
	    if (channels)
	        return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
	    return args;
	}
	PUBSUB_SHARDNUMSUB.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const transformedReply = Object.create(null);
	    for (let i = 0; i < rawReply.length; i += 2) {
	        transformedReply[rawReply[i]] = rawReply[i + 1];
	    }
	    return transformedReply;
	}
	PUBSUB_SHARDNUMSUB.transformReply = transformReply;
	return PUBSUB_SHARDNUMSUB;
}

var RANDOMKEY = {};

var hasRequiredRANDOMKEY;

function requireRANDOMKEY () {
	if (hasRequiredRANDOMKEY) return RANDOMKEY;
	hasRequiredRANDOMKEY = 1;
	Object.defineProperty(RANDOMKEY, "__esModule", { value: true });
	RANDOMKEY.transformArguments = RANDOMKEY.IS_READ_ONLY = void 0;
	RANDOMKEY.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['RANDOMKEY'];
	}
	RANDOMKEY.transformArguments = transformArguments;
	return RANDOMKEY;
}

var READONLY = {};

var hasRequiredREADONLY;

function requireREADONLY () {
	if (hasRequiredREADONLY) return READONLY;
	hasRequiredREADONLY = 1;
	Object.defineProperty(READONLY, "__esModule", { value: true });
	READONLY.transformArguments = void 0;
	function transformArguments() {
	    return ['READONLY'];
	}
	READONLY.transformArguments = transformArguments;
	return READONLY;
}

var READWRITE = {};

var hasRequiredREADWRITE;

function requireREADWRITE () {
	if (hasRequiredREADWRITE) return READWRITE;
	hasRequiredREADWRITE = 1;
	Object.defineProperty(READWRITE, "__esModule", { value: true });
	READWRITE.transformArguments = void 0;
	function transformArguments() {
	    return ['READWRITE'];
	}
	READWRITE.transformArguments = transformArguments;
	return READWRITE;
}

var REPLICAOF = {};

var hasRequiredREPLICAOF;

function requireREPLICAOF () {
	if (hasRequiredREPLICAOF) return REPLICAOF;
	hasRequiredREPLICAOF = 1;
	Object.defineProperty(REPLICAOF, "__esModule", { value: true });
	REPLICAOF.transformArguments = void 0;
	function transformArguments(host, port) {
	    return ['REPLICAOF', host, port.toString()];
	}
	REPLICAOF.transformArguments = transformArguments;
	return REPLICAOF;
}

var RESTOREASKING = {};

var hasRequiredRESTOREASKING;

function requireRESTOREASKING () {
	if (hasRequiredRESTOREASKING) return RESTOREASKING;
	hasRequiredRESTOREASKING = 1;
	Object.defineProperty(RESTOREASKING, "__esModule", { value: true });
	RESTOREASKING.transformArguments = void 0;
	function transformArguments() {
	    return ['RESTORE-ASKING'];
	}
	RESTOREASKING.transformArguments = transformArguments;
	return RESTOREASKING;
}

var ROLE = {};

var hasRequiredROLE;

function requireROLE () {
	if (hasRequiredROLE) return ROLE;
	hasRequiredROLE = 1;
	Object.defineProperty(ROLE, "__esModule", { value: true });
	ROLE.transformReply = ROLE.transformArguments = ROLE.IS_READ_ONLY = void 0;
	ROLE.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['ROLE'];
	}
	ROLE.transformArguments = transformArguments;
	function transformReply(reply) {
	    switch (reply[0]) {
	        case 'master':
	            return {
	                role: 'master',
	                replicationOffest: reply[1],
	                replicas: reply[2].map(([ip, port, replicationOffest]) => ({
	                    ip,
	                    port: Number(port),
	                    replicationOffest: Number(replicationOffest)
	                }))
	            };
	        case 'slave':
	            return {
	                role: 'slave',
	                master: {
	                    ip: reply[1],
	                    port: reply[2]
	                },
	                state: reply[3],
	                dataReceived: reply[4]
	            };
	        case 'sentinel':
	            return {
	                role: 'sentinel',
	                masterNames: reply[1]
	            };
	    }
	}
	ROLE.transformReply = transformReply;
	return ROLE;
}

var SAVE = {};

var hasRequiredSAVE;

function requireSAVE () {
	if (hasRequiredSAVE) return SAVE;
	hasRequiredSAVE = 1;
	Object.defineProperty(SAVE, "__esModule", { value: true });
	SAVE.transformArguments = void 0;
	function transformArguments() {
	    return ['SAVE'];
	}
	SAVE.transformArguments = transformArguments;
	return SAVE;
}

var SCAN = {};

var hasRequiredSCAN;

function requireSCAN () {
	if (hasRequiredSCAN) return SCAN;
	hasRequiredSCAN = 1;
	Object.defineProperty(SCAN, "__esModule", { value: true });
	SCAN.transformReply = SCAN.transformArguments = SCAN.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	SCAN.IS_READ_ONLY = true;
	function transformArguments(cursor, options) {
	    const args = (0, generic_transformers_1.pushScanArguments)(['SCAN'], cursor, options);
	    if (options?.TYPE) {
	        args.push('TYPE', options.TYPE);
	    }
	    return args;
	}
	SCAN.transformArguments = transformArguments;
	function transformReply([cursor, keys]) {
	    return {
	        cursor: Number(cursor),
	        keys
	    };
	}
	SCAN.transformReply = transformReply;
	return SCAN;
}

var SCRIPT_DEBUG = {};

var hasRequiredSCRIPT_DEBUG;

function requireSCRIPT_DEBUG () {
	if (hasRequiredSCRIPT_DEBUG) return SCRIPT_DEBUG;
	hasRequiredSCRIPT_DEBUG = 1;
	Object.defineProperty(SCRIPT_DEBUG, "__esModule", { value: true });
	SCRIPT_DEBUG.transformArguments = void 0;
	function transformArguments(mode) {
	    return ['SCRIPT', 'DEBUG', mode];
	}
	SCRIPT_DEBUG.transformArguments = transformArguments;
	return SCRIPT_DEBUG;
}

var SCRIPT_EXISTS = {};

var hasRequiredSCRIPT_EXISTS;

function requireSCRIPT_EXISTS () {
	if (hasRequiredSCRIPT_EXISTS) return SCRIPT_EXISTS;
	hasRequiredSCRIPT_EXISTS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		function transformArguments(sha1) {
		    return (0, generic_transformers_1.pushVerdictArguments)(['SCRIPT', 'EXISTS'], sha1);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformBooleanArrayReply; } }); 
	} (SCRIPT_EXISTS));
	return SCRIPT_EXISTS;
}

var SCRIPT_FLUSH = {};

var hasRequiredSCRIPT_FLUSH;

function requireSCRIPT_FLUSH () {
	if (hasRequiredSCRIPT_FLUSH) return SCRIPT_FLUSH;
	hasRequiredSCRIPT_FLUSH = 1;
	Object.defineProperty(SCRIPT_FLUSH, "__esModule", { value: true });
	SCRIPT_FLUSH.transformArguments = void 0;
	function transformArguments(mode) {
	    const args = ['SCRIPT', 'FLUSH'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	SCRIPT_FLUSH.transformArguments = transformArguments;
	return SCRIPT_FLUSH;
}

var SCRIPT_KILL = {};

var hasRequiredSCRIPT_KILL;

function requireSCRIPT_KILL () {
	if (hasRequiredSCRIPT_KILL) return SCRIPT_KILL;
	hasRequiredSCRIPT_KILL = 1;
	Object.defineProperty(SCRIPT_KILL, "__esModule", { value: true });
	SCRIPT_KILL.transformArguments = void 0;
	function transformArguments() {
	    return ['SCRIPT', 'KILL'];
	}
	SCRIPT_KILL.transformArguments = transformArguments;
	return SCRIPT_KILL;
}

var SCRIPT_LOAD = {};

var hasRequiredSCRIPT_LOAD;

function requireSCRIPT_LOAD () {
	if (hasRequiredSCRIPT_LOAD) return SCRIPT_LOAD;
	hasRequiredSCRIPT_LOAD = 1;
	Object.defineProperty(SCRIPT_LOAD, "__esModule", { value: true });
	SCRIPT_LOAD.transformArguments = void 0;
	function transformArguments(script) {
	    return ['SCRIPT', 'LOAD', script];
	}
	SCRIPT_LOAD.transformArguments = transformArguments;
	return SCRIPT_LOAD;
}

var SHUTDOWN = {};

var hasRequiredSHUTDOWN;

function requireSHUTDOWN () {
	if (hasRequiredSHUTDOWN) return SHUTDOWN;
	hasRequiredSHUTDOWN = 1;
	Object.defineProperty(SHUTDOWN, "__esModule", { value: true });
	SHUTDOWN.transformArguments = void 0;
	function transformArguments(mode) {
	    const args = ['SHUTDOWN'];
	    if (mode) {
	        args.push(mode);
	    }
	    return args;
	}
	SHUTDOWN.transformArguments = transformArguments;
	return SHUTDOWN;
}

var SWAPDB = {};

var hasRequiredSWAPDB;

function requireSWAPDB () {
	if (hasRequiredSWAPDB) return SWAPDB;
	hasRequiredSWAPDB = 1;
	Object.defineProperty(SWAPDB, "__esModule", { value: true });
	SWAPDB.transformArguments = void 0;
	function transformArguments(index1, index2) {
	    return ['SWAPDB', index1.toString(), index2.toString()];
	}
	SWAPDB.transformArguments = transformArguments;
	return SWAPDB;
}

var TIME = {};

var hasRequiredTIME;

function requireTIME () {
	if (hasRequiredTIME) return TIME;
	hasRequiredTIME = 1;
	Object.defineProperty(TIME, "__esModule", { value: true });
	TIME.transformReply = TIME.transformArguments = void 0;
	function transformArguments() {
	    return ['TIME'];
	}
	TIME.transformArguments = transformArguments;
	function transformReply(reply) {
	    const seconds = Number(reply[0]), microseconds = Number(reply[1]), d = new Date(seconds * 1000 + microseconds / 1000);
	    d.microseconds = microseconds;
	    return d;
	}
	TIME.transformReply = transformReply;
	return TIME;
}

var UNWATCH = {};

var hasRequiredUNWATCH;

function requireUNWATCH () {
	if (hasRequiredUNWATCH) return UNWATCH;
	hasRequiredUNWATCH = 1;
	Object.defineProperty(UNWATCH, "__esModule", { value: true });
	UNWATCH.transformArguments = void 0;
	function transformArguments() {
	    return ['UNWATCH'];
	}
	UNWATCH.transformArguments = transformArguments;
	return UNWATCH;
}

var WAIT = {};

var hasRequiredWAIT;

function requireWAIT () {
	if (hasRequiredWAIT) return WAIT;
	hasRequiredWAIT = 1;
	Object.defineProperty(WAIT, "__esModule", { value: true });
	WAIT.transformArguments = WAIT.FIRST_KEY_INDEX = void 0;
	WAIT.FIRST_KEY_INDEX = 1;
	function transformArguments(numberOfReplicas, timeout) {
	    return ['WAIT', numberOfReplicas.toString(), timeout.toString()];
	}
	WAIT.transformArguments = transformArguments;
	return WAIT;
}

var hasRequiredCommands$5;

function requireCommands$5 () {
	if (hasRequiredCommands$5) return commands$6;
	hasRequiredCommands$5 = 1;
	Object.defineProperty(commands$6, "__esModule", { value: true });
	const commands_1 = requireCommands$6();
	const ACL_CAT = requireACL_CAT();
	const ACL_DELUSER = requireACL_DELUSER();
	const ACL_DRYRUN = requireACL_DRYRUN();
	const ACL_GENPASS = requireACL_GENPASS();
	const ACL_GETUSER = requireACL_GETUSER();
	const ACL_LIST = requireACL_LIST();
	const ACL_LOAD = requireACL_LOAD();
	const ACL_LOG_RESET = requireACL_LOG_RESET();
	const ACL_LOG = requireACL_LOG();
	const ACL_SAVE = requireACL_SAVE();
	const ACL_SETUSER = requireACL_SETUSER();
	const ACL_USERS = requireACL_USERS();
	const ACL_WHOAMI = requireACL_WHOAMI();
	const ASKING = requireASKING();
	const AUTH = requireAUTH();
	const BGREWRITEAOF = requireBGREWRITEAOF();
	const BGSAVE = requireBGSAVE();
	const CLIENT_CACHING = requireCLIENT_CACHING();
	const CLIENT_GETNAME = requireCLIENT_GETNAME();
	const CLIENT_GETREDIR = requireCLIENT_GETREDIR();
	const CLIENT_ID = requireCLIENT_ID();
	const CLIENT_KILL = requireCLIENT_KILL();
	const CLIENT_LIST = requireCLIENT_LIST();
	const CLIENT_NO_EVICT = requireCLIENT_NOEVICT();
	const CLIENT_NO_TOUCH = requireCLIENT_NOTOUCH();
	const CLIENT_PAUSE = requireCLIENT_PAUSE();
	const CLIENT_SETNAME = requireCLIENT_SETNAME();
	const CLIENT_TRACKING = requireCLIENT_TRACKING();
	const CLIENT_TRACKINGINFO = requireCLIENT_TRACKINGINFO();
	const CLIENT_UNPAUSE = requireCLIENT_UNPAUSE();
	const CLIENT_INFO = requireCLIENT_INFO();
	const CLUSTER_ADDSLOTS = requireCLUSTER_ADDSLOTS();
	const CLUSTER_ADDSLOTSRANGE = requireCLUSTER_ADDSLOTSRANGE();
	const CLUSTER_BUMPEPOCH = requireCLUSTER_BUMPEPOCH();
	const CLUSTER_COUNT_FAILURE_REPORTS = requireCLUSTER_COUNTFAILUREREPORTS();
	const CLUSTER_COUNTKEYSINSLOT = requireCLUSTER_COUNTKEYSINSLOT();
	const CLUSTER_DELSLOTS = requireCLUSTER_DELSLOTS();
	const CLUSTER_DELSLOTSRANGE = requireCLUSTER_DELSLOTSRANGE();
	const CLUSTER_FAILOVER = requireCLUSTER_FAILOVER();
	const CLUSTER_FLUSHSLOTS = requireCLUSTER_FLUSHSLOTS();
	const CLUSTER_FORGET = requireCLUSTER_FORGET();
	const CLUSTER_GETKEYSINSLOT = requireCLUSTER_GETKEYSINSLOT();
	const CLUSTER_INFO = requireCLUSTER_INFO();
	const CLUSTER_KEYSLOT = requireCLUSTER_KEYSLOT();
	const CLUSTER_LINKS = requireCLUSTER_LINKS();
	const CLUSTER_MEET = requireCLUSTER_MEET();
	const CLUSTER_MYID = requireCLUSTER_MYID();
	const CLUSTER_MYSHARDID = requireCLUSTER_MYSHARDID();
	const CLUSTER_NODES = requireCLUSTER_NODES();
	const CLUSTER_REPLICAS = requireCLUSTER_REPLICAS();
	const CLUSTER_REPLICATE = requireCLUSTER_REPLICATE();
	const CLUSTER_RESET = requireCLUSTER_RESET();
	const CLUSTER_SAVECONFIG = requireCLUSTER_SAVECONFIG();
	const CLUSTER_SET_CONFIG_EPOCH = requireCLUSTER_SETCONFIGEPOCH();
	const CLUSTER_SETSLOT = requireCLUSTER_SETSLOT();
	const CLUSTER_SLOTS = requireCLUSTER_SLOTS();
	const COMMAND_COUNT = requireCOMMAND_COUNT();
	const COMMAND_GETKEYS = requireCOMMAND_GETKEYS();
	const COMMAND_GETKEYSANDFLAGS = requireCOMMAND_GETKEYSANDFLAGS();
	const COMMAND_INFO = requireCOMMAND_INFO();
	const COMMAND_LIST = requireCOMMAND_LIST();
	const COMMAND = requireCOMMAND();
	const CONFIG_GET = requireCONFIG_GET$2();
	const CONFIG_RESETASTAT = requireCONFIG_RESETSTAT();
	const CONFIG_REWRITE = requireCONFIG_REWRITE();
	const CONFIG_SET = requireCONFIG_SET$2();
	const DBSIZE = requireDBSIZE();
	const DISCARD = requireDISCARD();
	const ECHO = requireECHO();
	const FAILOVER = requireFAILOVER();
	const FLUSHALL = requireFLUSHALL();
	const FLUSHDB = requireFLUSHDB();
	const FUNCTION_DELETE = requireFUNCTION_DELETE();
	const FUNCTION_DUMP = requireFUNCTION_DUMP();
	const FUNCTION_FLUSH = requireFUNCTION_FLUSH();
	const FUNCTION_KILL = requireFUNCTION_KILL();
	const FUNCTION_LIST_WITHCODE = requireFUNCTION_LIST_WITHCODE();
	const FUNCTION_LIST = requireFUNCTION_LIST();
	const FUNCTION_LOAD = requireFUNCTION_LOAD();
	const FUNCTION_RESTORE = requireFUNCTION_RESTORE();
	const FUNCTION_STATS = requireFUNCTION_STATS();
	const HELLO = requireHELLO();
	const INFO = requireINFO$7();
	const KEYS = requireKEYS();
	const LASTSAVE = requireLASTSAVE();
	const LATENCY_DOCTOR = requireLATENCY_DOCTOR();
	const LATENCY_GRAPH = requireLATENCY_GRAPH();
	const LATENCY_HISTORY = requireLATENCY_HISTORY();
	const LATENCY_LATEST = requireLATENCY_LATEST();
	const LOLWUT = requireLOLWUT();
	const MEMORY_DOCTOR = requireMEMORY_DOCTOR();
	const MEMORY_MALLOC_STATS = requireMEMORY_MALLOCSTATS();
	const MEMORY_PURGE = requireMEMORY_PURGE();
	const MEMORY_STATS = requireMEMORY_STATS();
	const MEMORY_USAGE = requireMEMORY_USAGE();
	const MODULE_LIST = requireMODULE_LIST();
	const MODULE_LOAD = requireMODULE_LOAD();
	const MODULE_UNLOAD = requireMODULE_UNLOAD();
	const MOVE = requireMOVE();
	const PING = requirePING();
	const PUBSUB_CHANNELS = requirePUBSUB_CHANNELS();
	const PUBSUB_NUMPAT = requirePUBSUB_NUMPAT();
	const PUBSUB_NUMSUB = requirePUBSUB_NUMSUB();
	const PUBSUB_SHARDCHANNELS = requirePUBSUB_SHARDCHANNELS();
	const PUBSUB_SHARDNUMSUB = requirePUBSUB_SHARDNUMSUB();
	const RANDOMKEY = requireRANDOMKEY();
	const READONLY = requireREADONLY();
	const READWRITE = requireREADWRITE();
	const REPLICAOF = requireREPLICAOF();
	const RESTORE_ASKING = requireRESTOREASKING();
	const ROLE = requireROLE();
	const SAVE = requireSAVE();
	const SCAN = requireSCAN();
	const SCRIPT_DEBUG = requireSCRIPT_DEBUG();
	const SCRIPT_EXISTS = requireSCRIPT_EXISTS();
	const SCRIPT_FLUSH = requireSCRIPT_FLUSH();
	const SCRIPT_KILL = requireSCRIPT_KILL();
	const SCRIPT_LOAD = requireSCRIPT_LOAD();
	const SHUTDOWN = requireSHUTDOWN();
	const SWAPDB = requireSWAPDB();
	const TIME = requireTIME();
	const UNWATCH = requireUNWATCH();
	const WAIT = requireWAIT();
	commands$6.default = {
	    ...commands_1.default,
	    ACL_CAT,
	    aclCat: ACL_CAT,
	    ACL_DELUSER,
	    aclDelUser: ACL_DELUSER,
	    ACL_DRYRUN,
	    aclDryRun: ACL_DRYRUN,
	    ACL_GENPASS,
	    aclGenPass: ACL_GENPASS,
	    ACL_GETUSER,
	    aclGetUser: ACL_GETUSER,
	    ACL_LIST,
	    aclList: ACL_LIST,
	    ACL_LOAD,
	    aclLoad: ACL_LOAD,
	    ACL_LOG_RESET,
	    aclLogReset: ACL_LOG_RESET,
	    ACL_LOG,
	    aclLog: ACL_LOG,
	    ACL_SAVE,
	    aclSave: ACL_SAVE,
	    ACL_SETUSER,
	    aclSetUser: ACL_SETUSER,
	    ACL_USERS,
	    aclUsers: ACL_USERS,
	    ACL_WHOAMI,
	    aclWhoAmI: ACL_WHOAMI,
	    ASKING,
	    asking: ASKING,
	    AUTH,
	    auth: AUTH,
	    BGREWRITEAOF,
	    bgRewriteAof: BGREWRITEAOF,
	    BGSAVE,
	    bgSave: BGSAVE,
	    CLIENT_CACHING,
	    clientCaching: CLIENT_CACHING,
	    CLIENT_GETNAME,
	    clientGetName: CLIENT_GETNAME,
	    CLIENT_GETREDIR,
	    clientGetRedir: CLIENT_GETREDIR,
	    CLIENT_ID,
	    clientId: CLIENT_ID,
	    CLIENT_KILL,
	    clientKill: CLIENT_KILL,
	    'CLIENT_NO-EVICT': CLIENT_NO_EVICT,
	    clientNoEvict: CLIENT_NO_EVICT,
	    'CLIENT_NO-TOUCH': CLIENT_NO_TOUCH,
	    clientNoTouch: CLIENT_NO_TOUCH,
	    CLIENT_LIST,
	    clientList: CLIENT_LIST,
	    CLIENT_PAUSE,
	    clientPause: CLIENT_PAUSE,
	    CLIENT_SETNAME,
	    clientSetName: CLIENT_SETNAME,
	    CLIENT_TRACKING,
	    clientTracking: CLIENT_TRACKING,
	    CLIENT_TRACKINGINFO,
	    clientTrackingInfo: CLIENT_TRACKINGINFO,
	    CLIENT_UNPAUSE,
	    clientUnpause: CLIENT_UNPAUSE,
	    CLIENT_INFO,
	    clientInfo: CLIENT_INFO,
	    CLUSTER_ADDSLOTS,
	    clusterAddSlots: CLUSTER_ADDSLOTS,
	    CLUSTER_ADDSLOTSRANGE,
	    clusterAddSlotsRange: CLUSTER_ADDSLOTSRANGE,
	    CLUSTER_BUMPEPOCH,
	    clusterBumpEpoch: CLUSTER_BUMPEPOCH,
	    CLUSTER_COUNT_FAILURE_REPORTS,
	    clusterCountFailureReports: CLUSTER_COUNT_FAILURE_REPORTS,
	    CLUSTER_COUNTKEYSINSLOT,
	    clusterCountKeysInSlot: CLUSTER_COUNTKEYSINSLOT,
	    CLUSTER_DELSLOTS,
	    clusterDelSlots: CLUSTER_DELSLOTS,
	    CLUSTER_DELSLOTSRANGE,
	    clusterDelSlotsRange: CLUSTER_DELSLOTSRANGE,
	    CLUSTER_FAILOVER,
	    clusterFailover: CLUSTER_FAILOVER,
	    CLUSTER_FLUSHSLOTS,
	    clusterFlushSlots: CLUSTER_FLUSHSLOTS,
	    CLUSTER_FORGET,
	    clusterForget: CLUSTER_FORGET,
	    CLUSTER_GETKEYSINSLOT,
	    clusterGetKeysInSlot: CLUSTER_GETKEYSINSLOT,
	    CLUSTER_INFO,
	    clusterInfo: CLUSTER_INFO,
	    CLUSTER_KEYSLOT,
	    clusterKeySlot: CLUSTER_KEYSLOT,
	    CLUSTER_LINKS,
	    clusterLinks: CLUSTER_LINKS,
	    CLUSTER_MEET,
	    clusterMeet: CLUSTER_MEET,
	    CLUSTER_MYID,
	    clusterMyId: CLUSTER_MYID,
	    CLUSTER_MYSHARDID,
	    clusterMyShardId: CLUSTER_MYSHARDID,
	    CLUSTER_NODES,
	    clusterNodes: CLUSTER_NODES,
	    CLUSTER_REPLICAS,
	    clusterReplicas: CLUSTER_REPLICAS,
	    CLUSTER_REPLICATE,
	    clusterReplicate: CLUSTER_REPLICATE,
	    CLUSTER_RESET,
	    clusterReset: CLUSTER_RESET,
	    CLUSTER_SAVECONFIG,
	    clusterSaveConfig: CLUSTER_SAVECONFIG,
	    CLUSTER_SET_CONFIG_EPOCH,
	    clusterSetConfigEpoch: CLUSTER_SET_CONFIG_EPOCH,
	    CLUSTER_SETSLOT,
	    clusterSetSlot: CLUSTER_SETSLOT,
	    CLUSTER_SLOTS,
	    clusterSlots: CLUSTER_SLOTS,
	    COMMAND_COUNT,
	    commandCount: COMMAND_COUNT,
	    COMMAND_GETKEYS,
	    commandGetKeys: COMMAND_GETKEYS,
	    COMMAND_GETKEYSANDFLAGS,
	    commandGetKeysAndFlags: COMMAND_GETKEYSANDFLAGS,
	    COMMAND_INFO,
	    commandInfo: COMMAND_INFO,
	    COMMAND_LIST,
	    commandList: COMMAND_LIST,
	    COMMAND,
	    command: COMMAND,
	    CONFIG_GET,
	    configGet: CONFIG_GET,
	    CONFIG_RESETASTAT,
	    configResetStat: CONFIG_RESETASTAT,
	    CONFIG_REWRITE,
	    configRewrite: CONFIG_REWRITE,
	    CONFIG_SET,
	    configSet: CONFIG_SET,
	    DBSIZE,
	    dbSize: DBSIZE,
	    DISCARD,
	    discard: DISCARD,
	    ECHO,
	    echo: ECHO,
	    FAILOVER,
	    failover: FAILOVER,
	    FLUSHALL,
	    flushAll: FLUSHALL,
	    FLUSHDB,
	    flushDb: FLUSHDB,
	    FUNCTION_DELETE,
	    functionDelete: FUNCTION_DELETE,
	    FUNCTION_DUMP,
	    functionDump: FUNCTION_DUMP,
	    FUNCTION_FLUSH,
	    functionFlush: FUNCTION_FLUSH,
	    FUNCTION_KILL,
	    functionKill: FUNCTION_KILL,
	    FUNCTION_LIST_WITHCODE,
	    functionListWithCode: FUNCTION_LIST_WITHCODE,
	    FUNCTION_LIST,
	    functionList: FUNCTION_LIST,
	    FUNCTION_LOAD,
	    functionLoad: FUNCTION_LOAD,
	    FUNCTION_RESTORE,
	    functionRestore: FUNCTION_RESTORE,
	    FUNCTION_STATS,
	    functionStats: FUNCTION_STATS,
	    HELLO,
	    hello: HELLO,
	    INFO,
	    info: INFO,
	    KEYS,
	    keys: KEYS,
	    LASTSAVE,
	    lastSave: LASTSAVE,
	    LATENCY_DOCTOR,
	    latencyDoctor: LATENCY_DOCTOR,
	    LATENCY_GRAPH,
	    latencyGraph: LATENCY_GRAPH,
	    LATENCY_HISTORY,
	    latencyHistory: LATENCY_HISTORY,
	    LATENCY_LATEST,
	    latencyLatest: LATENCY_LATEST,
	    LOLWUT,
	    lolwut: LOLWUT,
	    MEMORY_DOCTOR,
	    memoryDoctor: MEMORY_DOCTOR,
	    'MEMORY_MALLOC-STATS': MEMORY_MALLOC_STATS,
	    memoryMallocStats: MEMORY_MALLOC_STATS,
	    MEMORY_PURGE,
	    memoryPurge: MEMORY_PURGE,
	    MEMORY_STATS,
	    memoryStats: MEMORY_STATS,
	    MEMORY_USAGE,
	    memoryUsage: MEMORY_USAGE,
	    MODULE_LIST,
	    moduleList: MODULE_LIST,
	    MODULE_LOAD,
	    moduleLoad: MODULE_LOAD,
	    MODULE_UNLOAD,
	    moduleUnload: MODULE_UNLOAD,
	    MOVE,
	    move: MOVE,
	    PING,
	    ping: PING,
	    PUBSUB_CHANNELS,
	    pubSubChannels: PUBSUB_CHANNELS,
	    PUBSUB_NUMPAT,
	    pubSubNumPat: PUBSUB_NUMPAT,
	    PUBSUB_NUMSUB,
	    pubSubNumSub: PUBSUB_NUMSUB,
	    PUBSUB_SHARDCHANNELS,
	    pubSubShardChannels: PUBSUB_SHARDCHANNELS,
	    PUBSUB_SHARDNUMSUB,
	    pubSubShardNumSub: PUBSUB_SHARDNUMSUB,
	    RANDOMKEY,
	    randomKey: RANDOMKEY,
	    READONLY,
	    readonly: READONLY,
	    READWRITE,
	    readwrite: READWRITE,
	    REPLICAOF,
	    replicaOf: REPLICAOF,
	    'RESTORE-ASKING': RESTORE_ASKING,
	    restoreAsking: RESTORE_ASKING,
	    ROLE,
	    role: ROLE,
	    SAVE,
	    save: SAVE,
	    SCAN,
	    scan: SCAN,
	    SCRIPT_DEBUG,
	    scriptDebug: SCRIPT_DEBUG,
	    SCRIPT_EXISTS,
	    scriptExists: SCRIPT_EXISTS,
	    SCRIPT_FLUSH,
	    scriptFlush: SCRIPT_FLUSH,
	    SCRIPT_KILL,
	    scriptKill: SCRIPT_KILL,
	    SCRIPT_LOAD,
	    scriptLoad: SCRIPT_LOAD,
	    SHUTDOWN,
	    shutdown: SHUTDOWN,
	    SWAPDB,
	    swapDb: SWAPDB,
	    TIME,
	    time: TIME,
	    UNWATCH,
	    unwatch: UNWATCH,
	    WAIT,
	    wait: WAIT
	};
	return commands$6;
}

var socket = {};

var errors$1 = {};

var hasRequiredErrors$1;

function requireErrors$1 () {
	if (hasRequiredErrors$1) return errors$1;
	hasRequiredErrors$1 = 1;
	Object.defineProperty(errors$1, "__esModule", { value: true });
	errors$1.MultiErrorReply = errors$1.ErrorReply = errors$1.ReconnectStrategyError = errors$1.RootNodesUnavailableError = errors$1.SocketClosedUnexpectedlyError = errors$1.DisconnectsClientError = errors$1.ClientOfflineError = errors$1.ClientClosedError = errors$1.ConnectionTimeoutError = errors$1.WatchError = errors$1.AbortError = void 0;
	class AbortError extends Error {
	    constructor() {
	        super('The command was aborted');
	    }
	}
	errors$1.AbortError = AbortError;
	class WatchError extends Error {
	    constructor() {
	        super('One (or more) of the watched keys has been changed');
	    }
	}
	errors$1.WatchError = WatchError;
	class ConnectionTimeoutError extends Error {
	    constructor() {
	        super('Connection timeout');
	    }
	}
	errors$1.ConnectionTimeoutError = ConnectionTimeoutError;
	class ClientClosedError extends Error {
	    constructor() {
	        super('The client is closed');
	    }
	}
	errors$1.ClientClosedError = ClientClosedError;
	class ClientOfflineError extends Error {
	    constructor() {
	        super('The client is offline');
	    }
	}
	errors$1.ClientOfflineError = ClientOfflineError;
	class DisconnectsClientError extends Error {
	    constructor() {
	        super('Disconnects client');
	    }
	}
	errors$1.DisconnectsClientError = DisconnectsClientError;
	class SocketClosedUnexpectedlyError extends Error {
	    constructor() {
	        super('Socket closed unexpectedly');
	    }
	}
	errors$1.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;
	class RootNodesUnavailableError extends Error {
	    constructor() {
	        super('All the root nodes are unavailable');
	    }
	}
	errors$1.RootNodesUnavailableError = RootNodesUnavailableError;
	class ReconnectStrategyError extends Error {
	    constructor(originalError, socketError) {
	        super(originalError.message);
	        Object.defineProperty(this, "originalError", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        Object.defineProperty(this, "socketError", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        this.originalError = originalError;
	        this.socketError = socketError;
	    }
	}
	errors$1.ReconnectStrategyError = ReconnectStrategyError;
	class ErrorReply extends Error {
	    constructor(message) {
	        super(message);
	        this.stack = undefined;
	    }
	}
	errors$1.ErrorReply = ErrorReply;
	class MultiErrorReply extends ErrorReply {
	    constructor(replies, errorIndexes) {
	        super(`${errorIndexes.length} commands failed, see .replies and .errorIndexes for more information`);
	        Object.defineProperty(this, "replies", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        Object.defineProperty(this, "errorIndexes", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        this.replies = replies;
	        this.errorIndexes = errorIndexes;
	    }
	    *errors() {
	        for (const index of this.errorIndexes) {
	            yield this.replies[index];
	        }
	    }
	}
	errors$1.MultiErrorReply = MultiErrorReply;
	return errors$1;
}

var utils$1 = {};

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	Object.defineProperty(utils$1, "__esModule", { value: true });
	utils$1.promiseTimeout = void 0;
	function promiseTimeout(ms) {
	    return new Promise(resolve => setTimeout(resolve, ms));
	}
	utils$1.promiseTimeout = promiseTimeout;
	return utils$1;
}

var hasRequiredSocket;

function requireSocket () {
	if (hasRequiredSocket) return socket;
	hasRequiredSocket = 1;
	var __classPrivateFieldGet = (socket && socket.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (socket && socket.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _RedisSocket_instances, _a, _RedisSocket_initiateOptions, _RedisSocket_isTlsSocket, _RedisSocket_initiator, _RedisSocket_options, _RedisSocket_socket, _RedisSocket_isOpen, _RedisSocket_isReady, _RedisSocket_writableNeedDrain, _RedisSocket_isSocketUnrefed, _RedisSocket_reconnectStrategy, _RedisSocket_shouldReconnect, _RedisSocket_connect, _RedisSocket_createSocket, _RedisSocket_createNetSocket, _RedisSocket_createTlsSocket, _RedisSocket_onSocketError, _RedisSocket_disconnect, _RedisSocket_isCorked;
	Object.defineProperty(socket, "__esModule", { value: true });
	const events_1 = require$$0;
	const net = require$$1;
	const tls = require$$2;
	const errors_1 = requireErrors$1();
	const utils_1 = requireUtils$1();
	class RedisSocket extends events_1.EventEmitter {
	    get isOpen() {
	        return __classPrivateFieldGet(this, _RedisSocket_isOpen, "f");
	    }
	    get isReady() {
	        return __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
	    }
	    get writableNeedDrain() {
	        return __classPrivateFieldGet(this, _RedisSocket_writableNeedDrain, "f");
	    }
	    constructor(initiator, options) {
	        super();
	        _RedisSocket_instances.add(this);
	        _RedisSocket_initiator.set(this, void 0);
	        _RedisSocket_options.set(this, void 0);
	        _RedisSocket_socket.set(this, void 0);
	        _RedisSocket_isOpen.set(this, false);
	        _RedisSocket_isReady.set(this, false);
	        // `writable.writableNeedDrain` was added in v15.2.0 and therefore can't be used
	        // https://nodejs.org/api/stream.html#stream_writable_writableneeddrain
	        _RedisSocket_writableNeedDrain.set(this, false);
	        _RedisSocket_isSocketUnrefed.set(this, false);
	        _RedisSocket_isCorked.set(this, false);
	        __classPrivateFieldSet(this, _RedisSocket_initiator, initiator, "f");
	        __classPrivateFieldSet(this, _RedisSocket_options, __classPrivateFieldGet(_a, _a, "m", _RedisSocket_initiateOptions).call(_a, options), "f");
	    }
	    async connect() {
	        if (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
	            throw new Error('Socket already opened');
	        }
	        __classPrivateFieldSet(this, _RedisSocket_isOpen, true, "f");
	        return __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this);
	    }
	    writeCommand(args) {
	        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
	            throw new errors_1.ClientClosedError();
	        }
	        for (const toWrite of args) {
	            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, !__classPrivateFieldGet(this, _RedisSocket_socket, "f").write(toWrite), "f");
	        }
	    }
	    disconnect() {
	        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
	            throw new errors_1.ClientClosedError();
	        }
	        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
	        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
	    }
	    async quit(fn) {
	        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
	            throw new errors_1.ClientClosedError();
	        }
	        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
	        const reply = await fn();
	        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
	        return reply;
	    }
	    cork() {
	        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f") || __classPrivateFieldGet(this, _RedisSocket_isCorked, "f")) {
	            return;
	        }
	        __classPrivateFieldGet(this, _RedisSocket_socket, "f").cork();
	        __classPrivateFieldSet(this, _RedisSocket_isCorked, true, "f");
	        setImmediate(() => {
	            __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.uncork();
	            __classPrivateFieldSet(this, _RedisSocket_isCorked, false, "f");
	        });
	    }
	    ref() {
	        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, false, "f");
	        __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.ref();
	    }
	    unref() {
	        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, true, "f");
	        __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.unref();
	    }
	}
	_a = RedisSocket, _RedisSocket_initiator = new WeakMap(), _RedisSocket_options = new WeakMap(), _RedisSocket_socket = new WeakMap(), _RedisSocket_isOpen = new WeakMap(), _RedisSocket_isReady = new WeakMap(), _RedisSocket_writableNeedDrain = new WeakMap(), _RedisSocket_isSocketUnrefed = new WeakMap(), _RedisSocket_isCorked = new WeakMap(), _RedisSocket_instances = new WeakSet(), _RedisSocket_initiateOptions = function _RedisSocket_initiateOptions(options) {
	    var _b, _c;
	    options ?? (options = {});
	    if (!options.path) {
	        (_b = options).port ?? (_b.port = 6379);
	        (_c = options).host ?? (_c.host = 'localhost');
	    }
	    options.connectTimeout ?? (options.connectTimeout = 5000);
	    options.keepAlive ?? (options.keepAlive = 5000);
	    options.noDelay ?? (options.noDelay = true);
	    return options;
	}, _RedisSocket_isTlsSocket = function _RedisSocket_isTlsSocket(options) {
	    return options.tls === true;
	}, _RedisSocket_reconnectStrategy = function _RedisSocket_reconnectStrategy(retries, cause) {
	    if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === false) {
	        return false;
	    }
	    else if (typeof __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === 'number') {
	        return __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy;
	    }
	    else if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy) {
	        try {
	            const retryIn = __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy(retries, cause);
	            if (retryIn !== false && !(retryIn instanceof Error) && typeof retryIn !== 'number') {
	                throw new TypeError(`Reconnect strategy should return \`false | Error | number\`, got ${retryIn} instead`);
	            }
	            return retryIn;
	        }
	        catch (err) {
	            this.emit('error', err);
	        }
	    }
	    return Math.min(retries * 50, 500);
	}, _RedisSocket_shouldReconnect = function _RedisSocket_shouldReconnect(retries, cause) {
	    const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_reconnectStrategy).call(this, retries, cause);
	    if (retryIn === false) {
	        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
	        this.emit('error', cause);
	        return cause;
	    }
	    else if (retryIn instanceof Error) {
	        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
	        this.emit('error', cause);
	        return new errors_1.ReconnectStrategyError(retryIn, cause);
	    }
	    return retryIn;
	}, _RedisSocket_connect = async function _RedisSocket_connect() {
	    let retries = 0;
	    do {
	        try {
	            __classPrivateFieldSet(this, _RedisSocket_socket, await __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createSocket).call(this), "f");
	            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
	            this.emit('connect');
	            try {
	                await __classPrivateFieldGet(this, _RedisSocket_initiator, "f").call(this);
	            }
	            catch (err) {
	                __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
	                __classPrivateFieldSet(this, _RedisSocket_socket, undefined, "f");
	                throw err;
	            }
	            __classPrivateFieldSet(this, _RedisSocket_isReady, true, "f");
	            this.emit('ready');
	        }
	        catch (err) {
	            const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, retries++, err);
	            if (typeof retryIn !== 'number') {
	                throw retryIn;
	            }
	            this.emit('error', err);
	            await (0, utils_1.promiseTimeout)(retryIn);
	            this.emit('reconnecting');
	        }
	    } while (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && !__classPrivateFieldGet(this, _RedisSocket_isReady, "f"));
	}, _RedisSocket_createSocket = function _RedisSocket_createSocket() {
	    return new Promise((resolve, reject) => {
	        const { connectEvent, socket } = __classPrivateFieldGet(_a, _a, "m", _RedisSocket_isTlsSocket).call(_a, __classPrivateFieldGet(this, _RedisSocket_options, "f")) ?
	            __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createTlsSocket).call(this) :
	            __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createNetSocket).call(this);
	        if (__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout) {
	            socket.setTimeout(__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout, () => socket.destroy(new errors_1.ConnectionTimeoutError()));
	        }
	        if (__classPrivateFieldGet(this, _RedisSocket_isSocketUnrefed, "f")) {
	            socket.unref();
	        }
	        socket
	            .setNoDelay(__classPrivateFieldGet(this, _RedisSocket_options, "f").noDelay)
	            .once('error', reject)
	            .once(connectEvent, () => {
	            socket
	                .setTimeout(0)
	                // https://github.com/nodejs/node/issues/31663
	                .setKeepAlive(__classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive !== false, __classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive || 0)
	                .off('error', reject)
	                .once('error', (err) => __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, err))
	                .once('close', hadError => {
	                if (!hadError && __classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && __classPrivateFieldGet(this, _RedisSocket_socket, "f") === socket) {
	                    __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, new errors_1.SocketClosedUnexpectedlyError());
	                }
	            })
	                .on('drain', () => {
	                __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
	                this.emit('drain');
	            })
	                .on('data', data => this.emit('data', data));
	            resolve(socket);
	        });
	    });
	}, _RedisSocket_createNetSocket = function _RedisSocket_createNetSocket() {
	    return {
	        connectEvent: 'connect',
	        socket: net.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f")) // TODO
	    };
	}, _RedisSocket_createTlsSocket = function _RedisSocket_createTlsSocket() {
	    return {
	        connectEvent: 'secureConnect',
	        socket: tls.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f")) // TODO
	    };
	}, _RedisSocket_onSocketError = function _RedisSocket_onSocketError(err) {
	    const wasReady = __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
	    __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
	    this.emit('error', err);
	    if (!wasReady || !__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") || typeof __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, 0, err) !== 'number')
	        return;
	    this.emit('reconnecting');
	    __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this).catch(() => {
	        // the error was already emitted, silently ignore it
	    });
	}, _RedisSocket_disconnect = function _RedisSocket_disconnect() {
	    __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
	    if (__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
	        __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
	        __classPrivateFieldSet(this, _RedisSocket_socket, undefined, "f");
	    }
	    this.emit('end');
	};
	socket.default = RedisSocket;
	return socket;
}

var commandsQueue = {};

var iterator;
var hasRequiredIterator;

function requireIterator () {
	if (hasRequiredIterator) return iterator;
	hasRequiredIterator = 1;
	iterator = function (Yallist) {
	  Yallist.prototype[Symbol.iterator] = function* () {
	    for (let walker = this.head; walker; walker = walker.next) {
	      yield walker.value;
	    }
	  };
	};
	return iterator;
}

var yallist;
var hasRequiredYallist;

function requireYallist () {
	if (hasRequiredYallist) return yallist;
	hasRequiredYallist = 1;
	yallist = Yallist;

	Yallist.Node = Node;
	Yallist.create = Yallist;

	function Yallist (list) {
	  var self = this;
	  if (!(self instanceof Yallist)) {
	    self = new Yallist();
	  }

	  self.tail = null;
	  self.head = null;
	  self.length = 0;

	  if (list && typeof list.forEach === 'function') {
	    list.forEach(function (item) {
	      self.push(item);
	    });
	  } else if (arguments.length > 0) {
	    for (var i = 0, l = arguments.length; i < l; i++) {
	      self.push(arguments[i]);
	    }
	  }

	  return self
	}

	Yallist.prototype.removeNode = function (node) {
	  if (node.list !== this) {
	    throw new Error('removing node which does not belong to this list')
	  }

	  var next = node.next;
	  var prev = node.prev;

	  if (next) {
	    next.prev = prev;
	  }

	  if (prev) {
	    prev.next = next;
	  }

	  if (node === this.head) {
	    this.head = next;
	  }
	  if (node === this.tail) {
	    this.tail = prev;
	  }

	  node.list.length--;
	  node.next = null;
	  node.prev = null;
	  node.list = null;

	  return next
	};

	Yallist.prototype.unshiftNode = function (node) {
	  if (node === this.head) {
	    return
	  }

	  if (node.list) {
	    node.list.removeNode(node);
	  }

	  var head = this.head;
	  node.list = this;
	  node.next = head;
	  if (head) {
	    head.prev = node;
	  }

	  this.head = node;
	  if (!this.tail) {
	    this.tail = node;
	  }
	  this.length++;
	};

	Yallist.prototype.pushNode = function (node) {
	  if (node === this.tail) {
	    return
	  }

	  if (node.list) {
	    node.list.removeNode(node);
	  }

	  var tail = this.tail;
	  node.list = this;
	  node.prev = tail;
	  if (tail) {
	    tail.next = node;
	  }

	  this.tail = node;
	  if (!this.head) {
	    this.head = node;
	  }
	  this.length++;
	};

	Yallist.prototype.push = function () {
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    push(this, arguments[i]);
	  }
	  return this.length
	};

	Yallist.prototype.unshift = function () {
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    unshift(this, arguments[i]);
	  }
	  return this.length
	};

	Yallist.prototype.pop = function () {
	  if (!this.tail) {
	    return undefined
	  }

	  var res = this.tail.value;
	  this.tail = this.tail.prev;
	  if (this.tail) {
	    this.tail.next = null;
	  } else {
	    this.head = null;
	  }
	  this.length--;
	  return res
	};

	Yallist.prototype.shift = function () {
	  if (!this.head) {
	    return undefined
	  }

	  var res = this.head.value;
	  this.head = this.head.next;
	  if (this.head) {
	    this.head.prev = null;
	  } else {
	    this.tail = null;
	  }
	  this.length--;
	  return res
	};

	Yallist.prototype.forEach = function (fn, thisp) {
	  thisp = thisp || this;
	  for (var walker = this.head, i = 0; walker !== null; i++) {
	    fn.call(thisp, walker.value, i, this);
	    walker = walker.next;
	  }
	};

	Yallist.prototype.forEachReverse = function (fn, thisp) {
	  thisp = thisp || this;
	  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
	    fn.call(thisp, walker.value, i, this);
	    walker = walker.prev;
	  }
	};

	Yallist.prototype.get = function (n) {
	  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
	    // abort out of the list early if we hit a cycle
	    walker = walker.next;
	  }
	  if (i === n && walker !== null) {
	    return walker.value
	  }
	};

	Yallist.prototype.getReverse = function (n) {
	  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
	    // abort out of the list early if we hit a cycle
	    walker = walker.prev;
	  }
	  if (i === n && walker !== null) {
	    return walker.value
	  }
	};

	Yallist.prototype.map = function (fn, thisp) {
	  thisp = thisp || this;
	  var res = new Yallist();
	  for (var walker = this.head; walker !== null;) {
	    res.push(fn.call(thisp, walker.value, this));
	    walker = walker.next;
	  }
	  return res
	};

	Yallist.prototype.mapReverse = function (fn, thisp) {
	  thisp = thisp || this;
	  var res = new Yallist();
	  for (var walker = this.tail; walker !== null;) {
	    res.push(fn.call(thisp, walker.value, this));
	    walker = walker.prev;
	  }
	  return res
	};

	Yallist.prototype.reduce = function (fn, initial) {
	  var acc;
	  var walker = this.head;
	  if (arguments.length > 1) {
	    acc = initial;
	  } else if (this.head) {
	    walker = this.head.next;
	    acc = this.head.value;
	  } else {
	    throw new TypeError('Reduce of empty list with no initial value')
	  }

	  for (var i = 0; walker !== null; i++) {
	    acc = fn(acc, walker.value, i);
	    walker = walker.next;
	  }

	  return acc
	};

	Yallist.prototype.reduceReverse = function (fn, initial) {
	  var acc;
	  var walker = this.tail;
	  if (arguments.length > 1) {
	    acc = initial;
	  } else if (this.tail) {
	    walker = this.tail.prev;
	    acc = this.tail.value;
	  } else {
	    throw new TypeError('Reduce of empty list with no initial value')
	  }

	  for (var i = this.length - 1; walker !== null; i--) {
	    acc = fn(acc, walker.value, i);
	    walker = walker.prev;
	  }

	  return acc
	};

	Yallist.prototype.toArray = function () {
	  var arr = new Array(this.length);
	  for (var i = 0, walker = this.head; walker !== null; i++) {
	    arr[i] = walker.value;
	    walker = walker.next;
	  }
	  return arr
	};

	Yallist.prototype.toArrayReverse = function () {
	  var arr = new Array(this.length);
	  for (var i = 0, walker = this.tail; walker !== null; i++) {
	    arr[i] = walker.value;
	    walker = walker.prev;
	  }
	  return arr
	};

	Yallist.prototype.slice = function (from, to) {
	  to = to || this.length;
	  if (to < 0) {
	    to += this.length;
	  }
	  from = from || 0;
	  if (from < 0) {
	    from += this.length;
	  }
	  var ret = new Yallist();
	  if (to < from || to < 0) {
	    return ret
	  }
	  if (from < 0) {
	    from = 0;
	  }
	  if (to > this.length) {
	    to = this.length;
	  }
	  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
	    walker = walker.next;
	  }
	  for (; walker !== null && i < to; i++, walker = walker.next) {
	    ret.push(walker.value);
	  }
	  return ret
	};

	Yallist.prototype.sliceReverse = function (from, to) {
	  to = to || this.length;
	  if (to < 0) {
	    to += this.length;
	  }
	  from = from || 0;
	  if (from < 0) {
	    from += this.length;
	  }
	  var ret = new Yallist();
	  if (to < from || to < 0) {
	    return ret
	  }
	  if (from < 0) {
	    from = 0;
	  }
	  if (to > this.length) {
	    to = this.length;
	  }
	  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
	    walker = walker.prev;
	  }
	  for (; walker !== null && i > from; i--, walker = walker.prev) {
	    ret.push(walker.value);
	  }
	  return ret
	};

	Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
	  if (start > this.length) {
	    start = this.length - 1;
	  }
	  if (start < 0) {
	    start = this.length + start;
	  }

	  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
	    walker = walker.next;
	  }

	  var ret = [];
	  for (var i = 0; walker && i < deleteCount; i++) {
	    ret.push(walker.value);
	    walker = this.removeNode(walker);
	  }
	  if (walker === null) {
	    walker = this.tail;
	  }

	  if (walker !== this.head && walker !== this.tail) {
	    walker = walker.prev;
	  }

	  for (var i = 0; i < nodes.length; i++) {
	    walker = insert(this, walker, nodes[i]);
	  }
	  return ret;
	};

	Yallist.prototype.reverse = function () {
	  var head = this.head;
	  var tail = this.tail;
	  for (var walker = head; walker !== null; walker = walker.prev) {
	    var p = walker.prev;
	    walker.prev = walker.next;
	    walker.next = p;
	  }
	  this.head = tail;
	  this.tail = head;
	  return this
	};

	function insert (self, node, value) {
	  var inserted = node === self.head ?
	    new Node(value, null, node, self) :
	    new Node(value, node, node.next, self);

	  if (inserted.next === null) {
	    self.tail = inserted;
	  }
	  if (inserted.prev === null) {
	    self.head = inserted;
	  }

	  self.length++;

	  return inserted
	}

	function push (self, item) {
	  self.tail = new Node(item, self.tail, null, self);
	  if (!self.head) {
	    self.head = self.tail;
	  }
	  self.length++;
	}

	function unshift (self, item) {
	  self.head = new Node(item, null, self.head, self);
	  if (!self.tail) {
	    self.tail = self.head;
	  }
	  self.length++;
	}

	function Node (value, prev, next, list) {
	  if (!(this instanceof Node)) {
	    return new Node(value, prev, next, list)
	  }

	  this.list = list;
	  this.value = value;

	  if (prev) {
	    prev.next = this;
	    this.prev = prev;
	  } else {
	    this.prev = null;
	  }

	  if (next) {
	    next.prev = this;
	    this.next = next;
	  } else {
	    this.next = null;
	  }
	}

	try {
	  // add if support for Symbol.iterator is present
	  requireIterator()(Yallist);
	} catch (er) {}
	return yallist;
}

var decoder = {};

var buffer = {};

var hasRequiredBuffer;

function requireBuffer () {
	if (hasRequiredBuffer) return buffer;
	hasRequiredBuffer = 1;
	Object.defineProperty(buffer, "__esModule", { value: true });
	class BufferComposer {
	    constructor() {
	        Object.defineProperty(this, "chunks", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: []
	        });
	    }
	    write(buffer) {
	        this.chunks.push(buffer);
	    }
	    end(buffer) {
	        this.write(buffer);
	        return Buffer.concat(this.chunks.splice(0));
	    }
	    reset() {
	        this.chunks = [];
	    }
	}
	buffer.default = BufferComposer;
	return buffer;
}

var string = {};

var hasRequiredString;

function requireString () {
	if (hasRequiredString) return string;
	hasRequiredString = 1;
	Object.defineProperty(string, "__esModule", { value: true });
	const string_decoder_1 = require$$0$1;
	class StringComposer {
	    constructor() {
	        Object.defineProperty(this, "decoder", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new string_decoder_1.StringDecoder()
	        });
	        Object.defineProperty(this, "string", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: ''
	        });
	    }
	    write(buffer) {
	        this.string += this.decoder.write(buffer);
	    }
	    end(buffer) {
	        const string = this.string + this.decoder.end(buffer);
	        this.string = '';
	        return string;
	    }
	    reset() {
	        this.string = '';
	    }
	}
	string.default = StringComposer;
	return string;
}

var hasRequiredDecoder;

function requireDecoder () {
	if (hasRequiredDecoder) return decoder;
	hasRequiredDecoder = 1;
	Object.defineProperty(decoder, "__esModule", { value: true });
	const errors_1 = requireErrors$1();
	const buffer_1 = requireBuffer();
	const string_1 = requireString();
	// RESP2 specification
	// https://redis.io/topics/protocol
	var Types;
	(function (Types) {
	    Types[Types["SIMPLE_STRING"] = 43] = "SIMPLE_STRING";
	    Types[Types["ERROR"] = 45] = "ERROR";
	    Types[Types["INTEGER"] = 58] = "INTEGER";
	    Types[Types["BULK_STRING"] = 36] = "BULK_STRING";
	    Types[Types["ARRAY"] = 42] = "ARRAY"; // *
	})(Types || (Types = {}));
	var ASCII;
	(function (ASCII) {
	    ASCII[ASCII["CR"] = 13] = "CR";
	    ASCII[ASCII["ZERO"] = 48] = "ZERO";
	    ASCII[ASCII["MINUS"] = 45] = "MINUS";
	})(ASCII || (ASCII = {}));
	// Using TypeScript `private` and not the build-in `#` to avoid __classPrivateFieldGet and __classPrivateFieldSet
	class RESP2Decoder {
	    constructor(options) {
	        Object.defineProperty(this, "options", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: options
	        });
	        Object.defineProperty(this, "cursor", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: 0
	        });
	        Object.defineProperty(this, "type", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        Object.defineProperty(this, "bufferComposer", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new buffer_1.default()
	        });
	        Object.defineProperty(this, "stringComposer", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new string_1.default()
	        });
	        Object.defineProperty(this, "currentStringComposer", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.stringComposer
	        });
	        Object.defineProperty(this, "integer", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: 0
	        });
	        Object.defineProperty(this, "isNegativeInteger", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        Object.defineProperty(this, "bulkStringRemainingLength", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        Object.defineProperty(this, "arraysInProcess", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, "initializeArray", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: false
	        });
	        Object.defineProperty(this, "arrayItemType", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	    }
	    reset() {
	        this.cursor = 0;
	        this.type = undefined;
	        this.bufferComposer.reset();
	        this.stringComposer.reset();
	        this.currentStringComposer = this.stringComposer;
	    }
	    write(chunk) {
	        while (this.cursor < chunk.length) {
	            if (!this.type) {
	                this.currentStringComposer = this.options.returnStringsAsBuffers() ?
	                    this.bufferComposer :
	                    this.stringComposer;
	                this.type = chunk[this.cursor];
	                if (++this.cursor >= chunk.length)
	                    break;
	            }
	            const reply = this.parseType(chunk, this.type);
	            if (reply === undefined)
	                break;
	            this.type = undefined;
	            this.options.onReply(reply);
	        }
	        this.cursor -= chunk.length;
	    }
	    parseType(chunk, type, arraysToKeep) {
	        switch (type) {
	            case Types.SIMPLE_STRING:
	                return this.parseSimpleString(chunk);
	            case Types.ERROR:
	                return this.parseError(chunk);
	            case Types.INTEGER:
	                return this.parseInteger(chunk);
	            case Types.BULK_STRING:
	                return this.parseBulkString(chunk);
	            case Types.ARRAY:
	                return this.parseArray(chunk, arraysToKeep);
	        }
	    }
	    compose(chunk, composer) {
	        for (let i = this.cursor; i < chunk.length; i++) {
	            if (chunk[i] === ASCII.CR) {
	                const reply = composer.end(chunk.subarray(this.cursor, i));
	                this.cursor = i + 2;
	                return reply;
	            }
	        }
	        const toWrite = chunk.subarray(this.cursor);
	        composer.write(toWrite);
	        this.cursor = chunk.length;
	    }
	    parseSimpleString(chunk) {
	        return this.compose(chunk, this.currentStringComposer);
	    }
	    parseError(chunk) {
	        const message = this.compose(chunk, this.stringComposer);
	        if (message !== undefined) {
	            return new errors_1.ErrorReply(message);
	        }
	    }
	    parseInteger(chunk) {
	        if (this.isNegativeInteger === undefined) {
	            this.isNegativeInteger = chunk[this.cursor] === ASCII.MINUS;
	            if (this.isNegativeInteger && ++this.cursor === chunk.length)
	                return;
	        }
	        do {
	            const byte = chunk[this.cursor];
	            if (byte === ASCII.CR) {
	                const integer = this.isNegativeInteger ? -this.integer : this.integer;
	                this.integer = 0;
	                this.isNegativeInteger = undefined;
	                this.cursor += 2;
	                return integer;
	            }
	            this.integer = this.integer * 10 + byte - ASCII.ZERO;
	        } while (++this.cursor < chunk.length);
	    }
	    parseBulkString(chunk) {
	        if (this.bulkStringRemainingLength === undefined) {
	            const length = this.parseInteger(chunk);
	            if (length === undefined)
	                return;
	            if (length === -1)
	                return null;
	            this.bulkStringRemainingLength = length;
	            if (this.cursor >= chunk.length)
	                return;
	        }
	        const end = this.cursor + this.bulkStringRemainingLength;
	        if (chunk.length >= end) {
	            const reply = this.currentStringComposer.end(chunk.subarray(this.cursor, end));
	            this.bulkStringRemainingLength = undefined;
	            this.cursor = end + 2;
	            return reply;
	        }
	        const toWrite = chunk.subarray(this.cursor);
	        this.currentStringComposer.write(toWrite);
	        this.bulkStringRemainingLength -= toWrite.length;
	        this.cursor = chunk.length;
	    }
	    parseArray(chunk, arraysToKeep = 0) {
	        if (this.initializeArray || this.arraysInProcess.length === arraysToKeep) {
	            const length = this.parseInteger(chunk);
	            if (length === undefined) {
	                this.initializeArray = true;
	                return undefined;
	            }
	            this.initializeArray = false;
	            this.arrayItemType = undefined;
	            if (length === -1) {
	                return this.returnArrayReply(null, arraysToKeep, chunk);
	            }
	            else if (length === 0) {
	                return this.returnArrayReply([], arraysToKeep, chunk);
	            }
	            this.arraysInProcess.push({
	                array: new Array(length),
	                pushCounter: 0
	            });
	        }
	        while (this.cursor < chunk.length) {
	            if (!this.arrayItemType) {
	                this.arrayItemType = chunk[this.cursor];
	                if (++this.cursor >= chunk.length)
	                    break;
	            }
	            const item = this.parseType(chunk, this.arrayItemType, arraysToKeep + 1);
	            if (item === undefined)
	                break;
	            this.arrayItemType = undefined;
	            const reply = this.pushArrayItem(item, arraysToKeep);
	            if (reply !== undefined)
	                return reply;
	        }
	    }
	    returnArrayReply(reply, arraysToKeep, chunk) {
	        if (this.arraysInProcess.length <= arraysToKeep)
	            return reply;
	        return this.pushArrayItem(reply, arraysToKeep, chunk);
	    }
	    pushArrayItem(item, arraysToKeep, chunk) {
	        const to = this.arraysInProcess[this.arraysInProcess.length - 1];
	        to.array[to.pushCounter] = item;
	        if (++to.pushCounter === to.array.length) {
	            return this.returnArrayReply(this.arraysInProcess.pop().array, arraysToKeep, chunk);
	        }
	        else if (chunk && chunk.length > this.cursor) {
	            return this.parseArray(chunk, arraysToKeep);
	        }
	    }
	}
	decoder.default = RESP2Decoder;
	return decoder;
}

var encoder = {};

var hasRequiredEncoder;

function requireEncoder () {
	if (hasRequiredEncoder) return encoder;
	hasRequiredEncoder = 1;
	Object.defineProperty(encoder, "__esModule", { value: true });
	const CRLF = '\r\n';
	function encodeCommand(args) {
	    const toWrite = [];
	    let strings = '*' + args.length + CRLF;
	    for (let i = 0; i < args.length; i++) {
	        const arg = args[i];
	        if (typeof arg === 'string') {
	            strings += '$' + Buffer.byteLength(arg) + CRLF + arg + CRLF;
	        }
	        else if (arg instanceof Buffer) {
	            toWrite.push(strings + '$' + arg.length.toString() + CRLF, arg);
	            strings = CRLF;
	        }
	        else {
	            throw new TypeError('Invalid argument type');
	        }
	    }
	    toWrite.push(strings);
	    return toWrite;
	}
	encoder.default = encodeCommand;
	return encoder;
}

var pubSub = {};

var hasRequiredPubSub;

function requirePubSub () {
	if (hasRequiredPubSub) return pubSub;
	hasRequiredPubSub = 1;
	var __classPrivateFieldGet = (pubSub && pubSub.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (pubSub && pubSub.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _PubSub_instances, _a, _PubSub_channelsArray, _PubSub_listenersSet, _PubSub_subscribing, _PubSub_isActive, _PubSub_listeners, _PubSub_extendChannelListeners, _PubSub_unsubscribeCommand, _PubSub_updateIsActive, _PubSub_emitPubSubMessage;
	Object.defineProperty(pubSub, "__esModule", { value: true });
	pubSub.PubSub = pubSub.PubSubType = void 0;
	var PubSubType;
	(function (PubSubType) {
	    PubSubType["CHANNELS"] = "CHANNELS";
	    PubSubType["PATTERNS"] = "PATTERNS";
	    PubSubType["SHARDED"] = "SHARDED";
	})(PubSubType || (pubSub.PubSubType = PubSubType = {}));
	const COMMANDS = {
	    [PubSubType.CHANNELS]: {
	        subscribe: Buffer.from('subscribe'),
	        unsubscribe: Buffer.from('unsubscribe'),
	        message: Buffer.from('message')
	    },
	    [PubSubType.PATTERNS]: {
	        subscribe: Buffer.from('psubscribe'),
	        unsubscribe: Buffer.from('punsubscribe'),
	        message: Buffer.from('pmessage')
	    },
	    [PubSubType.SHARDED]: {
	        subscribe: Buffer.from('ssubscribe'),
	        unsubscribe: Buffer.from('sunsubscribe'),
	        message: Buffer.from('smessage')
	    }
	};
	class PubSub {
	    constructor() {
	        _PubSub_instances.add(this);
	        _PubSub_subscribing.set(this, 0);
	        _PubSub_isActive.set(this, false);
	        _PubSub_listeners.set(this, {
	            [PubSubType.CHANNELS]: new Map(),
	            [PubSubType.PATTERNS]: new Map(),
	            [PubSubType.SHARDED]: new Map()
	        });
	    }
	    static isStatusReply(reply) {
	        return (COMMANDS[PubSubType.CHANNELS].subscribe.equals(reply[0]) ||
	            COMMANDS[PubSubType.CHANNELS].unsubscribe.equals(reply[0]) ||
	            COMMANDS[PubSubType.PATTERNS].subscribe.equals(reply[0]) ||
	            COMMANDS[PubSubType.PATTERNS].unsubscribe.equals(reply[0]) ||
	            COMMANDS[PubSubType.SHARDED].subscribe.equals(reply[0]));
	    }
	    static isShardedUnsubscribe(reply) {
	        return COMMANDS[PubSubType.SHARDED].unsubscribe.equals(reply[0]);
	    }
	    get isActive() {
	        return __classPrivateFieldGet(this, _PubSub_isActive, "f");
	    }
	    subscribe(type, channels, listener, returnBuffers) {
	        var _b;
	        const args = [COMMANDS[type].subscribe], channelsArray = __classPrivateFieldGet(_a, _a, "m", _PubSub_channelsArray).call(_a, channels);
	        for (const channel of channelsArray) {
	            let channelListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
	            if (!channelListeners || channelListeners.unsubscribing) {
	                args.push(channel);
	            }
	        }
	        if (args.length === 1) {
	            // all channels are already subscribed, add listeners without issuing a command
	            for (const channel of channelsArray) {
	                __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel), returnBuffers).add(listener);
	            }
	            return;
	        }
	        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
	        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
	        return {
	            args,
	            channelsCounter: args.length - 1,
	            resolve: () => {
	                var _b;
	                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
	                for (const channel of channelsArray) {
	                    let listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
	                    if (!listeners) {
	                        listeners = {
	                            unsubscribing: false,
	                            buffers: new Set(),
	                            strings: new Set()
	                        };
	                        __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
	                    }
	                    __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, listeners, returnBuffers).add(listener);
	                }
	            },
	            reject: () => {
	                var _b;
	                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
	                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
	            }
	        };
	    }
	    extendChannelListeners(type, channel, listeners) {
	        var _b;
	        if (!__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, listeners))
	            return;
	        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
	        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
	        return {
	            args: [
	                COMMANDS[type].subscribe,
	                channel
	            ],
	            channelsCounter: 1,
	            resolve: () => { var _b, _c; return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b; },
	            reject: () => {
	                var _b;
	                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
	                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
	            }
	        };
	    }
	    extendTypeListeners(type, listeners) {
	        var _b;
	        const args = [COMMANDS[type].subscribe];
	        for (const [channel, channelListeners] of listeners) {
	            if (__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, channelListeners)) {
	                args.push(channel);
	            }
	        }
	        if (args.length === 1)
	            return;
	        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
	        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
	        return {
	            args,
	            channelsCounter: args.length - 1,
	            resolve: () => { var _b, _c; return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b; },
	            reject: () => {
	                var _b;
	                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
	                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
	            }
	        };
	    }
	    unsubscribe(type, channels, listener, returnBuffers) {
	        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
	        if (!channels) {
	            return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, [COMMANDS[type].unsubscribe], 
	            // cannot use `this.#subscribed` because there might be some `SUBSCRIBE` commands in the queue
	            // cannot use `this.#subscribed + this.#subscribing` because some `SUBSCRIBE` commands might fail
	            NaN, () => listeners.clear());
	        }
	        const channelsArray = __classPrivateFieldGet(_a, _a, "m", _PubSub_channelsArray).call(_a, channels);
	        if (!listener) {
	            return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, [COMMANDS[type].unsubscribe, ...channelsArray], channelsArray.length, () => {
	                for (const channel of channelsArray) {
	                    listeners.delete(channel);
	                }
	            });
	        }
	        const args = [COMMANDS[type].unsubscribe];
	        for (const channel of channelsArray) {
	            const sets = listeners.get(channel);
	            if (sets) {
	                let current, other;
	                if (returnBuffers) {
	                    current = sets.buffers;
	                    other = sets.strings;
	                }
	                else {
	                    current = sets.strings;
	                    other = sets.buffers;
	                }
	                const currentSize = current.has(listener) ? current.size - 1 : current.size;
	                if (currentSize !== 0 || other.size !== 0)
	                    continue;
	                sets.unsubscribing = true;
	            }
	            args.push(channel);
	        }
	        if (args.length === 1) {
	            // all channels has other listeners,
	            // delete the listeners without issuing a command
	            for (const channel of channelsArray) {
	                __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, listeners.get(channel), returnBuffers).delete(listener);
	            }
	            return;
	        }
	        return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, args, args.length - 1, () => {
	            for (const channel of channelsArray) {
	                const sets = listeners.get(channel);
	                if (!sets)
	                    continue;
	                (returnBuffers ? sets.buffers : sets.strings).delete(listener);
	                if (sets.buffers.size === 0 && sets.strings.size === 0) {
	                    listeners.delete(channel);
	                }
	            }
	        });
	    }
	    reset() {
	        __classPrivateFieldSet(this, _PubSub_isActive, false, "f");
	        __classPrivateFieldSet(this, _PubSub_subscribing, 0, "f");
	    }
	    resubscribe() {
	        var _b;
	        const commands = [];
	        for (const [type, listeners] of Object.entries(__classPrivateFieldGet(this, _PubSub_listeners, "f"))) {
	            if (!listeners.size)
	                continue;
	            __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
	            __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
	            const callback = () => { var _b, _c; return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b; };
	            commands.push({
	                args: [
	                    COMMANDS[type].subscribe,
	                    ...listeners.keys()
	                ],
	                channelsCounter: listeners.size,
	                resolve: callback,
	                reject: callback
	            });
	        }
	        return commands;
	    }
	    handleMessageReply(reply) {
	        if (COMMANDS[PubSubType.CHANNELS].message.equals(reply[0])) {
	            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.CHANNELS, reply[2], reply[1]);
	            return true;
	        }
	        else if (COMMANDS[PubSubType.PATTERNS].message.equals(reply[0])) {
	            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.PATTERNS, reply[3], reply[2], reply[1]);
	            return true;
	        }
	        else if (COMMANDS[PubSubType.SHARDED].message.equals(reply[0])) {
	            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.SHARDED, reply[2], reply[1]);
	            return true;
	        }
	        return false;
	    }
	    removeShardedListeners(channel) {
	        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].get(channel);
	        __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].delete(channel);
	        __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
	        return listeners;
	    }
	    getTypeListeners(type) {
	        return __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
	    }
	}
	pubSub.PubSub = PubSub;
	_a = PubSub, _PubSub_subscribing = new WeakMap(), _PubSub_isActive = new WeakMap(), _PubSub_listeners = new WeakMap(), _PubSub_instances = new WeakSet(), _PubSub_channelsArray = function _PubSub_channelsArray(channels) {
	    return (Array.isArray(channels) ? channels : [channels]);
	}, _PubSub_listenersSet = function _PubSub_listenersSet(listeners, returnBuffers) {
	    return (returnBuffers ? listeners.buffers : listeners.strings);
	}, _PubSub_extendChannelListeners = function _PubSub_extendChannelListeners(type, channel, listeners) {
	    const existingListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
	    if (!existingListeners) {
	        __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
	        return true;
	    }
	    for (const listener of listeners.buffers) {
	        existingListeners.buffers.add(listener);
	    }
	    for (const listener of listeners.strings) {
	        existingListeners.strings.add(listener);
	    }
	    return false;
	}, _PubSub_unsubscribeCommand = function _PubSub_unsubscribeCommand(args, channelsCounter, removeListeners) {
	    return {
	        args,
	        channelsCounter,
	        resolve: () => {
	            removeListeners();
	            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
	        },
	        reject: undefined // use the same structure as `subscribe`
	    };
	}, _PubSub_updateIsActive = function _PubSub_updateIsActive() {
	    __classPrivateFieldSet(this, _PubSub_isActive, (__classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.CHANNELS].size !== 0 ||
	        __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.PATTERNS].size !== 0 ||
	        __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].size !== 0 ||
	        __classPrivateFieldGet(this, _PubSub_subscribing, "f") !== 0), "f");
	}, _PubSub_emitPubSubMessage = function _PubSub_emitPubSubMessage(type, message, channel, pattern) {
	    const keyString = (pattern ?? channel).toString(), listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(keyString);
	    if (!listeners)
	        return;
	    for (const listener of listeners.buffers) {
	        listener(message, channel);
	    }
	    if (!listeners.strings.size)
	        return;
	    const channelString = pattern ? channel.toString() : keyString, messageString = channelString === '__redis__:invalidate' ?
	        // https://github.com/redis/redis/pull/7469
	        // https://github.com/redis/redis/issues/7463
	        (message === null ? null : message.map(x => x.toString())) :
	        message.toString();
	    for (const listener of listeners.strings) {
	        listener(messageString, channelString);
	    }
	};
	return pubSub;
}

var hasRequiredCommandsQueue;

function requireCommandsQueue () {
	if (hasRequiredCommandsQueue) return commandsQueue;
	hasRequiredCommandsQueue = 1;
	var __classPrivateFieldGet = (commandsQueue && commandsQueue.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (commandsQueue && commandsQueue.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _RedisCommandsQueue_instances, _a, _RedisCommandsQueue_flushQueue, _RedisCommandsQueue_maxLength, _RedisCommandsQueue_waitingToBeSent, _RedisCommandsQueue_waitingForReply, _RedisCommandsQueue_onShardedChannelMoved, _RedisCommandsQueue_pubSub, _RedisCommandsQueue_chainInExecution, _RedisCommandsQueue_decoder, _RedisCommandsQueue_pushPubSubCommand;
	Object.defineProperty(commandsQueue, "__esModule", { value: true });
	const LinkedList = requireYallist();
	const errors_1 = requireErrors$1();
	const decoder_1 = requireDecoder();
	const encoder_1 = requireEncoder();
	const pub_sub_1 = requirePubSub();
	const PONG = Buffer.from('pong');
	class RedisCommandsQueue {
	    get isPubSubActive() {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
	    }
	    constructor(maxLength, onShardedChannelMoved) {
	        _RedisCommandsQueue_instances.add(this);
	        _RedisCommandsQueue_maxLength.set(this, void 0);
	        _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());
	        _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());
	        _RedisCommandsQueue_onShardedChannelMoved.set(this, void 0);
	        _RedisCommandsQueue_pubSub.set(this, new pub_sub_1.PubSub());
	        _RedisCommandsQueue_chainInExecution.set(this, void 0);
	        _RedisCommandsQueue_decoder.set(this, new decoder_1.default({
	            returnStringsAsBuffers: () => {
	                return !!__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head?.value.returnBuffers ||
	                    __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
	            },
	            onReply: reply => {
	                if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive && Array.isArray(reply)) {
	                    if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").handleMessageReply(reply))
	                        return;
	                    const isShardedUnsubscribe = pub_sub_1.PubSub.isShardedUnsubscribe(reply);
	                    if (isShardedUnsubscribe && !__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
	                        const channel = reply[1].toString();
	                        __classPrivateFieldGet(this, _RedisCommandsQueue_onShardedChannelMoved, "f").call(this, channel, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").removeShardedListeners(channel));
	                        return;
	                    }
	                    else if (isShardedUnsubscribe || pub_sub_1.PubSub.isStatusReply(reply)) {
	                        const head = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head.value;
	                        if ((Number.isNaN(head.channelsCounter) && reply[2] === 0) ||
	                            --head.channelsCounter === 0) {
	                            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift().resolve();
	                        }
	                        return;
	                    }
	                    if (PONG.equals(reply[0])) {
	                        const { resolve, returnBuffers } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift(), buffer = (reply[1].length === 0 ? reply[0] : reply[1]);
	                        resolve(returnBuffers ? buffer : buffer.toString());
	                        return;
	                    }
	                }
	                const { resolve, reject } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();
	                if (reply instanceof errors_1.ErrorReply) {
	                    reject(reply);
	                }
	                else {
	                    resolve(reply);
	                }
	            }
	        }));
	        __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
	        __classPrivateFieldSet(this, _RedisCommandsQueue_onShardedChannelMoved, onShardedChannelMoved, "f");
	    }
	    addCommand(args, options) {
	        if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
	            return Promise.reject(new Error('The queue is full'));
	        }
	        else if (options?.signal?.aborted) {
	            return Promise.reject(new errors_1.AbortError());
	        }
	        return new Promise((resolve, reject) => {
	            const node = new LinkedList.Node({
	                args,
	                chainId: options?.chainId,
	                returnBuffers: options?.returnBuffers,
	                resolve,
	                reject
	            });
	            if (options?.signal) {
	                const listener = () => {
	                    __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);
	                    node.value.reject(new errors_1.AbortError());
	                };
	                node.value.abort = {
	                    signal: options.signal,
	                    listener
	                };
	                // AbortSignal type is incorrent
	                options.signal.addEventListener('abort', listener, {
	                    once: true
	                });
	            }
	            if (options?.asap) {
	                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
	            }
	            else {
	                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
	            }
	        });
	    }
	    subscribe(type, channels, listener, returnBuffers) {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").subscribe(type, channels, listener, returnBuffers));
	    }
	    unsubscribe(type, channels, listener, returnBuffers) {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").unsubscribe(type, channels, listener, returnBuffers));
	    }
	    resubscribe() {
	        const commands = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").resubscribe();
	        if (!commands.length)
	            return;
	        return Promise.all(commands.map(command => __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command)));
	    }
	    extendPubSubChannelListeners(type, channel, listeners) {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendChannelListeners(type, channel, listeners));
	    }
	    extendPubSubListeners(type, listeners) {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendTypeListeners(type, listeners));
	    }
	    getPubSubListeners(type) {
	        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").getTypeListeners(type);
	    }
	    getCommandToSend() {
	        const toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
	        if (!toSend)
	            return;
	        let encoded;
	        try {
	            encoded = (0, encoder_1.default)(toSend.args);
	        }
	        catch (err) {
	            toSend.reject(err);
	            return;
	        }
	        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
	            resolve: toSend.resolve,
	            reject: toSend.reject,
	            channelsCounter: toSend.channelsCounter,
	            returnBuffers: toSend.returnBuffers
	        });
	        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend.chainId, "f");
	        return encoded;
	    }
	    onReplyChunk(chunk) {
	        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").write(chunk);
	    }
	    flushWaitingForReply(err) {
	        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
	        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
	        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
	        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f"))
	            return;
	        while (__classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head?.value.chainId === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
	            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
	        }
	        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, undefined, "f");
	    }
	    flushAll(err) {
	        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
	        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
	        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
	        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
	    }
	}
	_a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = new WeakMap(), _RedisCommandsQueue_waitingToBeSent = new WeakMap(), _RedisCommandsQueue_waitingForReply = new WeakMap(), _RedisCommandsQueue_onShardedChannelMoved = new WeakMap(), _RedisCommandsQueue_pubSub = new WeakMap(), _RedisCommandsQueue_chainInExecution = new WeakMap(), _RedisCommandsQueue_decoder = new WeakMap(), _RedisCommandsQueue_instances = new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue(queue, err) {
	    while (queue.length) {
	        queue.shift().reject(err);
	    }
	}, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand(command) {
	    if (command === undefined)
	        return;
	    return new Promise((resolve, reject) => {
	        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").push({
	            args: command.args,
	            channelsCounter: command.channelsCounter,
	            returnBuffers: true,
	            resolve: () => {
	                command.resolve();
	                resolve();
	            },
	            reject: err => {
	                command.reject?.();
	                reject(err);
	            }
	        });
	    });
	};
	commandsQueue.default = RedisCommandsQueue;
	return commandsQueue;
}

var multiCommand$2 = {};

var multiCommand$1 = {};

var commander = {};

var commandOptions = {};

var hasRequiredCommandOptions;

function requireCommandOptions () {
	if (hasRequiredCommandOptions) return commandOptions;
	hasRequiredCommandOptions = 1;
	Object.defineProperty(commandOptions, "__esModule", { value: true });
	commandOptions.isCommandOptions = commandOptions.commandOptions = void 0;
	const symbol = Symbol('Command Options');
	function commandOptions$1(options) {
	    options[symbol] = true;
	    return options;
	}
	commandOptions.commandOptions = commandOptions$1;
	function isCommandOptions(options) {
	    return options?.[symbol] === true;
	}
	commandOptions.isCommandOptions = isCommandOptions;
	return commandOptions;
}

var hasRequiredCommander;

function requireCommander () {
	if (hasRequiredCommander) return commander;
	hasRequiredCommander = 1;
	Object.defineProperty(commander, "__esModule", { value: true });
	commander.fCallArguments = commander.transformCommandReply = commander.transformLegacyCommandArguments = commander.transformCommandArguments = commander.attachExtensions = commander.attachCommands = void 0;
	const command_options_1 = requireCommandOptions();
	function attachCommands({ BaseClass, commands, executor }) {
	    for (const [name, command] of Object.entries(commands)) {
	        BaseClass.prototype[name] = function (...args) {
	            return executor.call(this, command, args, name);
	        };
	    }
	}
	commander.attachCommands = attachCommands;
	function attachExtensions(config) {
	    let Commander;
	    if (config.modules) {
	        Commander = attachWithNamespaces({
	            BaseClass: config.BaseClass,
	            namespaces: config.modules,
	            executor: config.modulesExecutor
	        });
	    }
	    if (config.functions) {
	        Commander = attachWithNamespaces({
	            BaseClass: Commander ?? config.BaseClass,
	            namespaces: config.functions,
	            executor: config.functionsExecutor
	        });
	    }
	    if (config.scripts) {
	        Commander ?? (Commander = class extends config.BaseClass {
	        });
	        attachCommands({
	            BaseClass: Commander,
	            commands: config.scripts,
	            executor: config.scriptsExecutor
	        });
	    }
	    return Commander ?? config.BaseClass;
	}
	commander.attachExtensions = attachExtensions;
	function attachWithNamespaces({ BaseClass, namespaces, executor }) {
	    const Commander = class extends BaseClass {
	        constructor(...args) {
	            super(...args);
	            for (const namespace of Object.keys(namespaces)) {
	                this[namespace] = Object.create(this[namespace], {
	                    self: {
	                        value: this
	                    }
	                });
	            }
	        }
	    };
	    for (const [namespace, commands] of Object.entries(namespaces)) {
	        Commander.prototype[namespace] = {};
	        for (const [name, command] of Object.entries(commands)) {
	            Commander.prototype[namespace][name] = function (...args) {
	                return executor.call(this.self, command, args, name);
	            };
	        }
	    }
	    return Commander;
	}
	function transformCommandArguments(command, args) {
	    let options;
	    if ((0, command_options_1.isCommandOptions)(args[0])) {
	        options = args[0];
	        args = args.slice(1);
	    }
	    return {
	        jsArgs: args,
	        args: command.transformArguments(...args),
	        options
	    };
	}
	commander.transformCommandArguments = transformCommandArguments;
	function transformLegacyCommandArguments(args) {
	    return args.flat().map(arg => {
	        return typeof arg === 'number' || arg instanceof Date ?
	            arg.toString() :
	            arg;
	    });
	}
	commander.transformLegacyCommandArguments = transformLegacyCommandArguments;
	function transformCommandReply(command, rawReply, preserved) {
	    if (!command.transformReply) {
	        return rawReply;
	    }
	    return command.transformReply(rawReply, preserved);
	}
	commander.transformCommandReply = transformCommandReply;
	function fCallArguments(name, fn, args) {
	    const actualArgs = [
	        fn.IS_READ_ONLY ? 'FCALL_RO' : 'FCALL',
	        name
	    ];
	    if (fn.NUMBER_OF_KEYS !== undefined) {
	        actualArgs.push(fn.NUMBER_OF_KEYS.toString());
	    }
	    actualArgs.push(...args);
	    return actualArgs;
	}
	commander.fCallArguments = fCallArguments;
	return commander;
}

var hasRequiredMultiCommand$2;

function requireMultiCommand$2 () {
	if (hasRequiredMultiCommand$2) return multiCommand$1;
	hasRequiredMultiCommand$2 = 1;
	Object.defineProperty(multiCommand$1, "__esModule", { value: true });
	const commander_1 = requireCommander();
	const errors_1 = requireErrors$1();
	class RedisMultiCommand {
	    constructor() {
	        Object.defineProperty(this, "queue", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, "scriptsInUse", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Set()
	        });
	    }
	    static generateChainId() {
	        return Symbol('RedisMultiCommand Chain Id');
	    }
	    addCommand(args, transformReply) {
	        this.queue.push({
	            args,
	            transformReply
	        });
	    }
	    addFunction(name, fn, args) {
	        const transformedArguments = (0, commander_1.fCallArguments)(name, fn, fn.transformArguments(...args));
	        this.queue.push({
	            args: transformedArguments,
	            transformReply: fn.transformReply
	        });
	        return transformedArguments;
	    }
	    addScript(script, args) {
	        const transformedArguments = [];
	        if (this.scriptsInUse.has(script.SHA1)) {
	            transformedArguments.push('EVALSHA', script.SHA1);
	        }
	        else {
	            this.scriptsInUse.add(script.SHA1);
	            transformedArguments.push('EVAL', script.SCRIPT);
	        }
	        if (script.NUMBER_OF_KEYS !== undefined) {
	            transformedArguments.push(script.NUMBER_OF_KEYS.toString());
	        }
	        const scriptArguments = script.transformArguments(...args);
	        transformedArguments.push(...scriptArguments);
	        if (scriptArguments.preserve) {
	            transformedArguments.preserve = scriptArguments.preserve;
	        }
	        this.addCommand(transformedArguments, script.transformReply);
	        return transformedArguments;
	    }
	    handleExecReplies(rawReplies) {
	        const execReply = rawReplies[rawReplies.length - 1];
	        if (execReply === null) {
	            throw new errors_1.WatchError();
	        }
	        return this.transformReplies(execReply);
	    }
	    transformReplies(rawReplies) {
	        const errorIndexes = [], replies = rawReplies.map((reply, i) => {
	            if (reply instanceof errors_1.ErrorReply) {
	                errorIndexes.push(i);
	                return reply;
	            }
	            const { transformReply, args } = this.queue[i];
	            return transformReply ? transformReply(reply, args.preserve) : reply;
	        });
	        if (errorIndexes.length)
	            throw new errors_1.MultiErrorReply(replies, errorIndexes);
	        return replies;
	    }
	}
	multiCommand$1.default = RedisMultiCommand;
	return multiCommand$1;
}

var hasRequiredMultiCommand$1;

function requireMultiCommand$1 () {
	if (hasRequiredMultiCommand$1) return multiCommand$2;
	hasRequiredMultiCommand$1 = 1;
	var __classPrivateFieldSet = (multiCommand$2 && multiCommand$2.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var __classPrivateFieldGet = (multiCommand$2 && multiCommand$2.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var _RedisClientMultiCommand_instances, _RedisClientMultiCommand_multi, _RedisClientMultiCommand_executor, _RedisClientMultiCommand_selectedDB, _RedisClientMultiCommand_legacyMode, _RedisClientMultiCommand_defineLegacyCommand;
	Object.defineProperty(multiCommand$2, "__esModule", { value: true });
	const commands_1 = requireCommands$5();
	const multi_command_1 = requireMultiCommand$2();
	const commander_1 = requireCommander();
	class RedisClientMultiCommand {
	    static extend(extensions) {
	        return (0, commander_1.attachExtensions)({
	            BaseClass: RedisClientMultiCommand,
	            modulesExecutor: RedisClientMultiCommand.prototype.commandsExecutor,
	            modules: extensions?.modules,
	            functionsExecutor: RedisClientMultiCommand.prototype.functionsExecutor,
	            functions: extensions?.functions,
	            scriptsExecutor: RedisClientMultiCommand.prototype.scriptsExecutor,
	            scripts: extensions?.scripts
	        });
	    }
	    constructor(executor, legacyMode = false) {
	        _RedisClientMultiCommand_instances.add(this);
	        _RedisClientMultiCommand_multi.set(this, new multi_command_1.default());
	        _RedisClientMultiCommand_executor.set(this, void 0);
	        Object.defineProperty(this, "v4", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: {}
	        });
	        _RedisClientMultiCommand_selectedDB.set(this, void 0);
	        Object.defineProperty(this, "select", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SELECT
	        });
	        Object.defineProperty(this, "EXEC", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.exec
	        });
	        __classPrivateFieldSet(this, _RedisClientMultiCommand_executor, executor, "f");
	        if (legacyMode) {
	            __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
	        }
	    }
	    commandsExecutor(command, args) {
	        return this.addCommand(command.transformArguments(...args), command.transformReply);
	    }
	    SELECT(db, transformReply) {
	        __classPrivateFieldSet(this, _RedisClientMultiCommand_selectedDB, db, "f");
	        return this.addCommand(['SELECT', db.toString()], transformReply);
	    }
	    addCommand(args, transformReply) {
	        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);
	        return this;
	    }
	    functionsExecutor(fn, args, name) {
	        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addFunction(name, fn, args);
	        return this;
	    }
	    scriptsExecutor(script, args) {
	        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);
	        return this;
	    }
	    async exec(execAsPipeline = false) {
	        if (execAsPipeline) {
	            return this.execAsPipeline();
	        }
	        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f"), multi_command_1.default.generateChainId()));
	    }
	    async execAsPipeline() {
	        if (__classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue.length === 0)
	            return [];
	        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f")));
	    }
	}
	_RedisClientMultiCommand_multi = new WeakMap(), _RedisClientMultiCommand_executor = new WeakMap(), _RedisClientMultiCommand_selectedDB = new WeakMap(), _RedisClientMultiCommand_instances = new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode() {
	    var _a, _b;
	    this.v4.addCommand = this.addCommand.bind(this);
	    this.addCommand = (...args) => {
	        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand((0, commander_1.transformLegacyCommandArguments)(args));
	        return this;
	    };
	    this.v4.exec = this.exec.bind(this);
	    this.exec = (callback) => {
	        this.v4.exec()
	            .then((reply) => {
	            if (!callback)
	                return;
	            callback(null, reply);
	        })
	            .catch((err) => {
	            if (!callback) {
	                // this.emit('error', err);
	                return;
	            }
	            callback(err);
	        });
	    };
	    for (const [name, command] of Object.entries(commands_1.default)) {
	        __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name, command);
	        (_a = this)[_b = name.toLowerCase()] ?? (_a[_b] = this[name]);
	    }
	}, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand(name, command) {
	    this.v4[name] = this[name].bind(this.v4);
	    this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ?
	        (...args) => {
	            __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand([name, ...(0, commander_1.transformLegacyCommandArguments)(args)], command.transformReply);
	            return this;
	        } :
	        (...args) => this.addCommand(name, ...args);
	};
	multiCommand$2.default = RedisClientMultiCommand;
	(0, commander_1.attachCommands)({
	    BaseClass: RedisClientMultiCommand,
	    commands: commands_1.default,
	    executor: RedisClientMultiCommand.prototype.commandsExecutor
	});
	return multiCommand$2;
}

var factoryValidator;
var hasRequiredFactoryValidator;

function requireFactoryValidator () {
	if (hasRequiredFactoryValidator) return factoryValidator;
	hasRequiredFactoryValidator = 1;
	factoryValidator = function(factory) {
	  if (typeof factory.create !== "function") {
	    throw new TypeError("factory.create must be a function");
	  }

	  if (typeof factory.destroy !== "function") {
	    throw new TypeError("factory.destroy must be a function");
	  }

	  if (
	    typeof factory.validate !== "undefined" &&
	    typeof factory.validate !== "function"
	  ) {
	    throw new TypeError("factory.validate must be a function");
	  }
	};
	return factoryValidator;
}

var PoolDefaults_1;
var hasRequiredPoolDefaults;

function requirePoolDefaults () {
	if (hasRequiredPoolDefaults) return PoolDefaults_1;
	hasRequiredPoolDefaults = 1;
	/**
	 * Create the default settings used by the pool
	 *
	 * @class
	 */
	class PoolDefaults {
	  constructor() {
	    this.fifo = true;
	    this.priorityRange = 1;

	    this.testOnBorrow = false;
	    this.testOnReturn = false;

	    this.autostart = true;

	    this.evictionRunIntervalMillis = 0;
	    this.numTestsPerEvictionRun = 3;
	    this.softIdleTimeoutMillis = -1;
	    this.idleTimeoutMillis = 30000;

	    // FIXME: no defaults!
	    this.acquireTimeoutMillis = null;
	    this.destroyTimeoutMillis = null;
	    this.maxWaitingClients = null;

	    this.min = null;
	    this.max = null;
	    // FIXME: this seems odd?
	    this.Promise = Promise;
	  }
	}

	PoolDefaults_1 = PoolDefaults;
	return PoolDefaults_1;
}

var PoolOptions_1;
var hasRequiredPoolOptions;

function requirePoolOptions () {
	if (hasRequiredPoolOptions) return PoolOptions_1;
	hasRequiredPoolOptions = 1;

	const PoolDefaults = requirePoolDefaults();

	class PoolOptions {
	  /**
	   * @param {Object} opts
	   *   configuration for the pool
	   * @param {Number} [opts.max=null]
	   *   Maximum number of items that can exist at the same time.  Default: 1.
	   *   Any further acquire requests will be pushed to the waiting list.
	   * @param {Number} [opts.min=null]
	   *   Minimum number of items in pool (including in-use). Default: 0.
	   *   When the pool is created, or a resource destroyed, this minimum will
	   *   be checked. If the pool resource count is below the minimum, a new
	   *   resource will be created and added to the pool.
	   * @param {Number} [opts.maxWaitingClients=null]
	   *   maximum number of queued requests allowed after which acquire calls will be rejected
	   * @param {Boolean} [opts.testOnBorrow=false]
	   *   should the pool validate resources before giving them to clients. Requires that
	   *   `factory.validate` is specified.
	   * @param {Boolean} [opts.testOnReturn=false]
	   *   should the pool validate resources before returning them to the pool.
	   * @param {Number} [opts.acquireTimeoutMillis=null]
	   *   Delay in milliseconds after which the an `acquire` call will fail. optional.
	   *   Default: undefined. Should be positive and non-zero
	   * @param {Number} [opts.destroyTimeoutMillis=null]
	   *   Delay in milliseconds after which the an `destroy` call will fail, causing it to emit a factoryDestroyError event. optional.
	   *   Default: undefined. Should be positive and non-zero
	   * @param {Number} [opts.priorityRange=1]
	   *   The range from 1 to be treated as a valid priority
	   * @param {Boolean} [opts.fifo=true]
	   *   Sets whether the pool has LIFO (last in, first out) behaviour with respect to idle objects.
	   *   if false then pool has FIFO behaviour
	   * @param {Boolean} [opts.autostart=true]
	   *   Should the pool start creating resources etc once the constructor is called
	   * @param {Number} [opts.evictionRunIntervalMillis=0]
	   *   How often to run eviction checks.  Default: 0 (does not run).
	   * @param {Number} [opts.numTestsPerEvictionRun=3]
	   *   Number of resources to check each eviction run.  Default: 3.
	   * @param {Number} [opts.softIdleTimeoutMillis=-1]
	   *   amount of time an object may sit idle in the pool before it is eligible
	   *   for eviction by the idle object evictor (if any), with the extra condition
	   *   that at least "min idle" object instances remain in the pool. Default -1 (nothing can get evicted)
	   * @param {Number} [opts.idleTimeoutMillis=30000]
	   *   the minimum amount of time that an object may sit idle in the pool before it is eligible for eviction
	   *   due to idle time. Supercedes "softIdleTimeoutMillis" Default: 30000
	   * @param {typeof Promise} [opts.Promise=Promise]
	   *   What promise implementation should the pool use, defaults to native promises.
	   */
	  constructor(opts) {
	    const poolDefaults = new PoolDefaults();

	    opts = opts || {};

	    this.fifo = typeof opts.fifo === "boolean" ? opts.fifo : poolDefaults.fifo;
	    this.priorityRange = opts.priorityRange || poolDefaults.priorityRange;

	    this.testOnBorrow =
	      typeof opts.testOnBorrow === "boolean"
	        ? opts.testOnBorrow
	        : poolDefaults.testOnBorrow;
	    this.testOnReturn =
	      typeof opts.testOnReturn === "boolean"
	        ? opts.testOnReturn
	        : poolDefaults.testOnReturn;

	    this.autostart =
	      typeof opts.autostart === "boolean"
	        ? opts.autostart
	        : poolDefaults.autostart;

	    if (opts.acquireTimeoutMillis) {
	      // @ts-ignore
	      this.acquireTimeoutMillis = parseInt(opts.acquireTimeoutMillis, 10);
	    }

	    if (opts.destroyTimeoutMillis) {
	      // @ts-ignore
	      this.destroyTimeoutMillis = parseInt(opts.destroyTimeoutMillis, 10);
	    }

	    if (opts.maxWaitingClients !== undefined) {
	      // @ts-ignore
	      this.maxWaitingClients = parseInt(opts.maxWaitingClients, 10);
	    }

	    // @ts-ignore
	    this.max = parseInt(opts.max, 10);
	    // @ts-ignore
	    this.min = parseInt(opts.min, 10);

	    this.max = Math.max(isNaN(this.max) ? 1 : this.max, 1);
	    this.min = Math.min(isNaN(this.min) ? 0 : this.min, this.max);

	    this.evictionRunIntervalMillis =
	      opts.evictionRunIntervalMillis || poolDefaults.evictionRunIntervalMillis;
	    this.numTestsPerEvictionRun =
	      opts.numTestsPerEvictionRun || poolDefaults.numTestsPerEvictionRun;
	    this.softIdleTimeoutMillis =
	      opts.softIdleTimeoutMillis || poolDefaults.softIdleTimeoutMillis;
	    this.idleTimeoutMillis =
	      opts.idleTimeoutMillis || poolDefaults.idleTimeoutMillis;

	    this.Promise = opts.Promise != null ? opts.Promise : poolDefaults.Promise;
	  }
	}

	PoolOptions_1 = PoolOptions;
	return PoolOptions_1;
}

var Deferred_1;
var hasRequiredDeferred;

function requireDeferred () {
	if (hasRequiredDeferred) return Deferred_1;
	hasRequiredDeferred = 1;

	/**
	 * This is apparently a bit like a Jquery deferred, hence the name
	 */

	class Deferred {
	  constructor(Promise) {
	    this._state = Deferred.PENDING;
	    this._resolve = undefined;
	    this._reject = undefined;

	    this._promise = new Promise((resolve, reject) => {
	      this._resolve = resolve;
	      this._reject = reject;
	    });
	  }

	  get state() {
	    return this._state;
	  }

	  get promise() {
	    return this._promise;
	  }

	  reject(reason) {
	    if (this._state !== Deferred.PENDING) {
	      return;
	    }
	    this._state = Deferred.REJECTED;
	    this._reject(reason);
	  }

	  resolve(value) {
	    if (this._state !== Deferred.PENDING) {
	      return;
	    }
	    this._state = Deferred.FULFILLED;
	    this._resolve(value);
	  }
	}

	// TODO: should these really live here? or be a seperate 'state' enum
	Deferred.PENDING = "PENDING";
	Deferred.FULFILLED = "FULFILLED";
	Deferred.REJECTED = "REJECTED";

	Deferred_1 = Deferred;
	return Deferred_1;
}

var errors;
var hasRequiredErrors;

function requireErrors () {
	if (hasRequiredErrors) return errors;
	hasRequiredErrors = 1;

	class ExtendableError extends Error {
	  constructor(message) {
	    super(message);
	    // @ts-ignore
	    this.name = this.constructor.name;
	    this.message = message;
	    if (typeof Error.captureStackTrace === "function") {
	      Error.captureStackTrace(this, this.constructor);
	    } else {
	      this.stack = new Error(message).stack;
	    }
	  }
	}

	/* eslint-disable no-useless-constructor */
	class TimeoutError extends ExtendableError {
	  constructor(m) {
	    super(m);
	  }
	}
	/* eslint-enable no-useless-constructor */

	errors = {
	  TimeoutError: TimeoutError
	};
	return errors;
}

var ResourceRequest_1;
var hasRequiredResourceRequest;

function requireResourceRequest () {
	if (hasRequiredResourceRequest) return ResourceRequest_1;
	hasRequiredResourceRequest = 1;

	const Deferred = requireDeferred();
	const errors = requireErrors();

	function fbind(fn, ctx) {
	  return function bound() {
	    return fn.apply(ctx, arguments);
	  };
	}

	/**
	 * Wraps a users request for a resource
	 * Basically a promise mashed in with a timeout
	 * @private
	 */
	class ResourceRequest extends Deferred {
	  /**
	   * [constructor description]
	   * @param  {Number} ttl     timeout
	   */
	  constructor(ttl, Promise) {
	    super(Promise);
	    this._creationTimestamp = Date.now();
	    this._timeout = null;

	    if (ttl !== undefined) {
	      this.setTimeout(ttl);
	    }
	  }

	  setTimeout(delay) {
	    if (this._state !== ResourceRequest.PENDING) {
	      return;
	    }
	    const ttl = parseInt(delay, 10);

	    if (isNaN(ttl) || ttl <= 0) {
	      throw new Error("delay must be a positive int");
	    }

	    const age = Date.now() - this._creationTimestamp;

	    if (this._timeout) {
	      this.removeTimeout();
	    }

	    this._timeout = setTimeout(
	      fbind(this._fireTimeout, this),
	      Math.max(ttl - age, 0)
	    );
	  }

	  removeTimeout() {
	    if (this._timeout) {
	      clearTimeout(this._timeout);
	    }
	    this._timeout = null;
	  }

	  _fireTimeout() {
	    this.reject(new errors.TimeoutError("ResourceRequest timed out"));
	  }

	  reject(reason) {
	    this.removeTimeout();
	    super.reject(reason);
	  }

	  resolve(value) {
	    this.removeTimeout();
	    super.resolve(value);
	  }
	}

	ResourceRequest_1 = ResourceRequest;
	return ResourceRequest_1;
}

var ResourceLoan_1;
var hasRequiredResourceLoan;

function requireResourceLoan () {
	if (hasRequiredResourceLoan) return ResourceLoan_1;
	hasRequiredResourceLoan = 1;

	const Deferred = requireDeferred();

	/**
	 * Plan is to maybe add tracking via Error objects
	 * and other fun stuff!
	 */

	class ResourceLoan extends Deferred {
	  /**
	   *
	   * @param  {any} pooledResource the PooledResource this loan belongs to
	   * @return {any}                [description]
	   */
	  constructor(pooledResource, Promise) {
	    super(Promise);
	    this._creationTimestamp = Date.now();
	    this.pooledResource = pooledResource;
	  }

	  reject() {
	    /**
	     * Loans can only be resolved at the moment
	     */
	  }
	}

	ResourceLoan_1 = ResourceLoan;
	return ResourceLoan_1;
}

var PooledResourceStateEnum_1;
var hasRequiredPooledResourceStateEnum;

function requirePooledResourceStateEnum () {
	if (hasRequiredPooledResourceStateEnum) return PooledResourceStateEnum_1;
	hasRequiredPooledResourceStateEnum = 1;

	const PooledResourceStateEnum = {
	  ALLOCATED: "ALLOCATED", // In use
	  IDLE: "IDLE", // In the queue, not in use.
	  INVALID: "INVALID", // Failed validation
	  RETURNING: "RETURNING", // Resource is in process of returning
	  VALIDATION: "VALIDATION" // Currently being tested
	};

	PooledResourceStateEnum_1 = PooledResourceStateEnum;
	return PooledResourceStateEnum_1;
}

var PooledResource_1;
var hasRequiredPooledResource;

function requirePooledResource () {
	if (hasRequiredPooledResource) return PooledResource_1;
	hasRequiredPooledResource = 1;

	const PooledResourceStateEnum = requirePooledResourceStateEnum();

	/**
	 * @class
	 * @private
	 */
	class PooledResource {
	  constructor(resource) {
	    this.creationTime = Date.now();
	    this.lastReturnTime = null;
	    this.lastBorrowTime = null;
	    this.lastIdleTime = null;
	    this.obj = resource;
	    this.state = PooledResourceStateEnum.IDLE;
	  }

	  // mark the resource as "allocated"
	  allocate() {
	    this.lastBorrowTime = Date.now();
	    this.state = PooledResourceStateEnum.ALLOCATED;
	  }

	  // mark the resource as "deallocated"
	  deallocate() {
	    this.lastReturnTime = Date.now();
	    this.state = PooledResourceStateEnum.IDLE;
	  }

	  invalidate() {
	    this.state = PooledResourceStateEnum.INVALID;
	  }

	  test() {
	    this.state = PooledResourceStateEnum.VALIDATION;
	  }

	  idle() {
	    this.lastIdleTime = Date.now();
	    this.state = PooledResourceStateEnum.IDLE;
	  }

	  returning() {
	    this.state = PooledResourceStateEnum.RETURNING;
	  }
	}

	PooledResource_1 = PooledResource;
	return PooledResource_1;
}

var DefaultEvictor_1;
var hasRequiredDefaultEvictor;

function requireDefaultEvictor () {
	if (hasRequiredDefaultEvictor) return DefaultEvictor_1;
	hasRequiredDefaultEvictor = 1;

	class DefaultEvictor {
	  evict(config, pooledResource, availableObjectsCount) {
	    const idleTime = Date.now() - pooledResource.lastIdleTime;

	    if (
	      config.softIdleTimeoutMillis > 0 &&
	      config.softIdleTimeoutMillis < idleTime &&
	      config.min < availableObjectsCount
	    ) {
	      return true;
	    }

	    if (config.idleTimeoutMillis < idleTime) {
	      return true;
	    }

	    return false;
	  }
	}

	DefaultEvictor_1 = DefaultEvictor;
	return DefaultEvictor_1;
}

var DoublyLinkedList_1;
var hasRequiredDoublyLinkedList;

function requireDoublyLinkedList () {
	if (hasRequiredDoublyLinkedList) return DoublyLinkedList_1;
	hasRequiredDoublyLinkedList = 1;

	/**
	 * A Doubly Linked List, because there aren't enough in the world...
	 * this is pretty much a direct JS port of the one wikipedia
	 * https://en.wikipedia.org/wiki/Doubly_linked_list
	 *
	 * For most usage 'insertBeginning' and 'insertEnd' should be enough
	 *
	 * nodes are expected to something like a POJSO like
	 * {
	 *   prev: null,
	 *   next: null,
	 *   something: 'whatever you like'
	 * }
	 */
	class DoublyLinkedList {
	  constructor() {
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }

	  insertBeginning(node) {
	    if (this.head === null) {
	      this.head = node;
	      this.tail = node;
	      node.prev = null;
	      node.next = null;
	      this.length++;
	    } else {
	      this.insertBefore(this.head, node);
	    }
	  }

	  insertEnd(node) {
	    if (this.tail === null) {
	      this.insertBeginning(node);
	    } else {
	      this.insertAfter(this.tail, node);
	    }
	  }

	  insertAfter(node, newNode) {
	    newNode.prev = node;
	    newNode.next = node.next;
	    if (node.next === null) {
	      this.tail = newNode;
	    } else {
	      node.next.prev = newNode;
	    }
	    node.next = newNode;
	    this.length++;
	  }

	  insertBefore(node, newNode) {
	    newNode.prev = node.prev;
	    newNode.next = node;
	    if (node.prev === null) {
	      this.head = newNode;
	    } else {
	      node.prev.next = newNode;
	    }
	    node.prev = newNode;
	    this.length++;
	  }

	  remove(node) {
	    if (node.prev === null) {
	      this.head = node.next;
	    } else {
	      node.prev.next = node.next;
	    }
	    if (node.next === null) {
	      this.tail = node.prev;
	    } else {
	      node.next.prev = node.prev;
	    }
	    node.prev = null;
	    node.next = null;
	    this.length--;
	  }

	  // FIXME: this should not live here and has become a dumping ground...
	  static createNode(data) {
	    return {
	      prev: null,
	      next: null,
	      data: data
	    };
	  }
	}

	DoublyLinkedList_1 = DoublyLinkedList;
	return DoublyLinkedList_1;
}

var DoublyLinkedListIterator_1;
var hasRequiredDoublyLinkedListIterator;

function requireDoublyLinkedListIterator () {
	if (hasRequiredDoublyLinkedListIterator) return DoublyLinkedListIterator_1;
	hasRequiredDoublyLinkedListIterator = 1;

	/**
	 * Creates an interator for a DoublyLinkedList starting at the given node
	 * It's internal cursor will remains relative to the last "iterated" node as that
	 * node moves through the list until it either iterates to the end of the list,
	 * or the the node it's tracking is removed from the list. Until the first 'next'
	 * call it tracks the head/tail of the linked list. This means that one can create
	 * an iterator on an empty list, then add nodes, and then the iterator will follow
	 * those nodes. Because the DoublyLinkedList nodes don't track their owning "list" and
	 * it's highly inefficient to walk the list for every iteration, the iterator won't know
	 * if the node has been detached from one List and added to another list, or if the iterator
	 *
	 * The created object is an es6 compatible iterator
	 */
	class DoublyLinkedListIterator {
	  /**
	   * @param  {Object} doublyLinkedList     a node that is part of a doublyLinkedList
	   * @param  {Boolean} [reverse=false]     is this a reverse iterator? default: false
	   */
	  constructor(doublyLinkedList, reverse) {
	    this._list = doublyLinkedList;
	    // NOTE: these key names are tied to the DoublyLinkedListIterator
	    this._direction = reverse === true ? "prev" : "next";
	    this._startPosition = reverse === true ? "tail" : "head";
	    this._started = false;
	    this._cursor = null;
	    this._done = false;
	  }

	  _start() {
	    this._cursor = this._list[this._startPosition];
	    this._started = true;
	  }

	  _advanceCursor() {
	    if (this._started === false) {
	      this._started = true;
	      this._cursor = this._list[this._startPosition];
	      return;
	    }
	    this._cursor = this._cursor[this._direction];
	  }

	  reset() {
	    this._done = false;
	    this._started = false;
	    this._cursor = null;
	  }

	  remove() {
	    if (
	      this._started === false ||
	      this._done === true ||
	      this._isCursorDetached()
	    ) {
	      return false;
	    }
	    this._list.remove(this._cursor);
	  }

	  next() {
	    if (this._done === true) {
	      return { done: true };
	    }

	    this._advanceCursor();

	    // if there is no node at the cursor or the node at the cursor is no longer part of
	    // a doubly linked list then we are done/finished/kaput
	    if (this._cursor === null || this._isCursorDetached()) {
	      this._done = true;
	      return { done: true };
	    }

	    return {
	      value: this._cursor,
	      done: false
	    };
	  }

	  /**
	   * Is the node detached from a list?
	   * NOTE: you can trick/bypass/confuse this check by removing a node from one DoublyLinkedList
	   * and adding it to another.
	   * TODO: We can make this smarter by checking the direction of travel and only checking
	   * the required next/prev/head/tail rather than all of them
	   * @return {Boolean}      [description]
	   */
	  _isCursorDetached() {
	    return (
	      this._cursor.prev === null &&
	      this._cursor.next === null &&
	      this._list.tail !== this._cursor &&
	      this._list.head !== this._cursor
	    );
	  }
	}

	DoublyLinkedListIterator_1 = DoublyLinkedListIterator;
	return DoublyLinkedListIterator_1;
}

var DequeIterator_1;
var hasRequiredDequeIterator;

function requireDequeIterator () {
	if (hasRequiredDequeIterator) return DequeIterator_1;
	hasRequiredDequeIterator = 1;

	const DoublyLinkedListIterator = requireDoublyLinkedListIterator();
	/**
	 * Thin wrapper around an underlying DDL iterator
	 */
	class DequeIterator extends DoublyLinkedListIterator {
	  next() {
	    const result = super.next();

	    // unwrap the node...
	    if (result.value) {
	      result.value = result.value.data;
	    }

	    return result;
	  }
	}

	DequeIterator_1 = DequeIterator;
	return DequeIterator_1;
}

var Deque_1;
var hasRequiredDeque;

function requireDeque () {
	if (hasRequiredDeque) return Deque_1;
	hasRequiredDeque = 1;

	const DoublyLinkedList = requireDoublyLinkedList();
	const DequeIterator = requireDequeIterator();
	/**
	 * DoublyLinkedList backed double ended queue
	 * implements just enough to keep the Pool
	 */
	class Deque {
	  constructor() {
	    this._list = new DoublyLinkedList();
	  }

	  /**
	   * removes and returns the first element from the queue
	   * @return {any} [description]
	   */
	  shift() {
	    if (this.length === 0) {
	      return undefined;
	    }

	    const node = this._list.head;
	    this._list.remove(node);

	    return node.data;
	  }

	  /**
	   * adds one elemts to the beginning of the queue
	   * @param  {any} element [description]
	   * @return {any}         [description]
	   */
	  unshift(element) {
	    const node = DoublyLinkedList.createNode(element);

	    this._list.insertBeginning(node);
	  }

	  /**
	   * adds one to the end of the queue
	   * @param  {any} element [description]
	   * @return {any}         [description]
	   */
	  push(element) {
	    const node = DoublyLinkedList.createNode(element);

	    this._list.insertEnd(node);
	  }

	  /**
	   * removes and returns the last element from the queue
	   */
	  pop() {
	    if (this.length === 0) {
	      return undefined;
	    }

	    const node = this._list.tail;
	    this._list.remove(node);

	    return node.data;
	  }

	  [Symbol.iterator]() {
	    return new DequeIterator(this._list);
	  }

	  iterator() {
	    return new DequeIterator(this._list);
	  }

	  reverseIterator() {
	    return new DequeIterator(this._list, true);
	  }

	  /**
	   * get a reference to the item at the head of the queue
	   * @return {any} [description]
	   */
	  get head() {
	    if (this.length === 0) {
	      return undefined;
	    }
	    const node = this._list.head;
	    return node.data;
	  }

	  /**
	   * get a reference to the item at the tail of the queue
	   * @return {any} [description]
	   */
	  get tail() {
	    if (this.length === 0) {
	      return undefined;
	    }
	    const node = this._list.tail;
	    return node.data;
	  }

	  get length() {
	    return this._list.length;
	  }
	}

	Deque_1 = Deque;
	return Deque_1;
}

var Queue_1;
var hasRequiredQueue;

function requireQueue () {
	if (hasRequiredQueue) return Queue_1;
	hasRequiredQueue = 1;

	const DoublyLinkedList = requireDoublyLinkedList();
	const Deque = requireDeque();

	/**
	 * Sort of a internal queue for holding the waiting
	 * resource requets for a given "priority".
	 * Also handles managing timeouts rejections on items (is this the best place for this?)
	 * This is the last point where we know which queue a resourceRequest is in
	 *
	 */
	class Queue extends Deque {
	  /**
	   * Adds the obj to the end of the list for this slot
	   * we completely override the parent method because we need access to the
	   * node for our rejection handler
	   * @param {any} resourceRequest [description]
	   */
	  push(resourceRequest) {
	    const node = DoublyLinkedList.createNode(resourceRequest);
	    resourceRequest.promise.catch(this._createTimeoutRejectionHandler(node));
	    this._list.insertEnd(node);
	  }

	  _createTimeoutRejectionHandler(node) {
	    return reason => {
	      if (reason.name === "TimeoutError") {
	        this._list.remove(node);
	      }
	    };
	  }
	}

	Queue_1 = Queue;
	return Queue_1;
}

var PriorityQueue_1;
var hasRequiredPriorityQueue;

function requirePriorityQueue () {
	if (hasRequiredPriorityQueue) return PriorityQueue_1;
	hasRequiredPriorityQueue = 1;

	const Queue = requireQueue();

	/**
	 * @class
	 * @private
	 */
	class PriorityQueue {
	  constructor(size) {
	    this._size = Math.max(+size | 0, 1);
	    /** @type {Queue[]} */
	    this._slots = [];
	    // initialize arrays to hold queue elements
	    for (let i = 0; i < this._size; i++) {
	      this._slots.push(new Queue());
	    }
	  }

	  get length() {
	    let _length = 0;
	    for (let i = 0, slots = this._slots.length; i < slots; i++) {
	      _length += this._slots[i].length;
	    }
	    return _length;
	  }

	  enqueue(obj, priority) {
	    // Convert to integer with a default value of 0.
	    priority = (priority && +priority | 0) || 0;

	    if (priority) {
	      if (priority < 0 || priority >= this._size) {
	        priority = this._size - 1;
	        // put obj at the end of the line
	      }
	    }
	    this._slots[priority].push(obj);
	  }

	  dequeue() {
	    for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
	      if (this._slots[i].length) {
	        return this._slots[i].shift();
	      }
	    }
	    return;
	  }

	  get head() {
	    for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
	      if (this._slots[i].length > 0) {
	        return this._slots[i].head;
	      }
	    }
	    return;
	  }

	  get tail() {
	    for (let i = this._slots.length - 1; i >= 0; i--) {
	      if (this._slots[i].length > 0) {
	        return this._slots[i].tail;
	      }
	    }
	    return;
	  }
	}

	PriorityQueue_1 = PriorityQueue;
	return PriorityQueue_1;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;

	function noop() {}

	/**
	 * Reflects a promise but does not expose any
	 * underlying value or rejection from that promise.
	 * @param  {Promise} promise [description]
	 * @return {Promise}         [description]
	 */
	utils.reflector = function(promise) {
	  return promise.then(noop, noop);
	};
	return utils;
}

var Pool_1;
var hasRequiredPool;

function requirePool () {
	if (hasRequiredPool) return Pool_1;
	hasRequiredPool = 1;

	const EventEmitter = require$$0.EventEmitter;

	const factoryValidator = requireFactoryValidator();
	const PoolOptions = requirePoolOptions();
	const ResourceRequest = requireResourceRequest();
	const ResourceLoan = requireResourceLoan();
	const PooledResource = requirePooledResource();
	requireDefaultEvictor();
	requireDeque();
	const Deferred = requireDeferred();
	requirePriorityQueue();
	requireDequeIterator();

	const reflector = requireUtils().reflector;

	/**
	 * TODO: move me
	 */
	const FACTORY_CREATE_ERROR = "factoryCreateError";
	const FACTORY_DESTROY_ERROR = "factoryDestroyError";

	class Pool extends EventEmitter {
	  /**
	   * Generate an Object pool with a specified `factory` and `config`.
	   *
	   * @param {typeof DefaultEvictor} Evictor
	   * @param {typeof Deque} Deque
	   * @param {typeof PriorityQueue} PriorityQueue
	   * @param {Object} factory
	   *   Factory to be used for generating and destroying the items.
	   * @param {Function} factory.create
	   *   Should create the item to be acquired,
	   *   and call it's first callback argument with the generated item as it's argument.
	   * @param {Function} factory.destroy
	   *   Should gently close any resources that the item is using.
	   *   Called before the items is destroyed.
	   * @param {Function} factory.validate
	   *   Test if a resource is still valid .Should return a promise that resolves to a boolean, true if resource is still valid and false
	   *   If it should be removed from pool.
	   * @param {Object} options
	   */
	  constructor(Evictor, Deque, PriorityQueue, factory, options) {
	    super();

	    factoryValidator(factory);

	    this._config = new PoolOptions(options);

	    // TODO: fix up this ugly glue-ing
	    this._Promise = this._config.Promise;

	    this._factory = factory;
	    this._draining = false;
	    this._started = false;
	    /**
	     * Holds waiting clients
	     * @type {PriorityQueue}
	     */
	    this._waitingClientsQueue = new PriorityQueue(this._config.priorityRange);

	    /**
	     * Collection of promises for resource creation calls made by the pool to factory.create
	     * @type {Set}
	     */
	    this._factoryCreateOperations = new Set();

	    /**
	     * Collection of promises for resource destruction calls made by the pool to factory.destroy
	     * @type {Set}
	     */
	    this._factoryDestroyOperations = new Set();

	    /**
	     * A queue/stack of pooledResources awaiting acquisition
	     * TODO: replace with LinkedList backed array
	     * @type {Deque}
	     */
	    this._availableObjects = new Deque();

	    /**
	     * Collection of references for any resource that are undergoing validation before being acquired
	     * @type {Set}
	     */
	    this._testOnBorrowResources = new Set();

	    /**
	     * Collection of references for any resource that are undergoing validation before being returned
	     * @type {Set}
	     */
	    this._testOnReturnResources = new Set();

	    /**
	     * Collection of promises for any validations currently in process
	     * @type {Set}
	     */
	    this._validationOperations = new Set();

	    /**
	     * All objects associated with this pool in any state (except destroyed)
	     * @type {Set}
	     */
	    this._allObjects = new Set();

	    /**
	     * Loans keyed by the borrowed resource
	     * @type {Map}
	     */
	    this._resourceLoans = new Map();

	    /**
	     * Infinitely looping iterator over available object
	     * @type {DequeIterator}
	     */
	    this._evictionIterator = this._availableObjects.iterator();

	    this._evictor = new Evictor();

	    /**
	     * handle for setTimeout for next eviction run
	     * @type {(number|null)}
	     */
	    this._scheduledEviction = null;

	    // create initial resources (if factory.min > 0)
	    if (this._config.autostart === true) {
	      this.start();
	    }
	  }

	  _destroy(pooledResource) {
	    // FIXME: do we need another state for "in destruction"?
	    pooledResource.invalidate();
	    this._allObjects.delete(pooledResource);
	    // NOTE: this maybe very bad promise usage?
	    const destroyPromise = this._factory.destroy(pooledResource.obj);
	    const wrappedDestroyPromise = this._config.destroyTimeoutMillis
	      ? this._Promise.resolve(this._applyDestroyTimeout(destroyPromise))
	      : this._Promise.resolve(destroyPromise);

	    this._trackOperation(
	      wrappedDestroyPromise,
	      this._factoryDestroyOperations
	    ).catch(reason => {
	      this.emit(FACTORY_DESTROY_ERROR, reason);
	    });

	    // TODO: maybe ensuring minimum pool size should live outside here
	    this._ensureMinimum();
	  }

	  _applyDestroyTimeout(promise) {
	    const timeoutPromise = new this._Promise((resolve, reject) => {
	      setTimeout(() => {
	        reject(new Error("destroy timed out"));
	      }, this._config.destroyTimeoutMillis).unref();
	    });
	    return this._Promise.race([timeoutPromise, promise]);
	  }

	  /**
	   * Attempt to move an available resource into test and then onto a waiting client
	   * @return {Boolean} could we move an available resource into test
	   */
	  _testOnBorrow() {
	    if (this._availableObjects.length < 1) {
	      return false;
	    }

	    const pooledResource = this._availableObjects.shift();
	    // Mark the resource as in test
	    pooledResource.test();
	    this._testOnBorrowResources.add(pooledResource);
	    const validationPromise = this._factory.validate(pooledResource.obj);
	    const wrappedValidationPromise = this._Promise.resolve(validationPromise);

	    this._trackOperation(
	      wrappedValidationPromise,
	      this._validationOperations
	    ).then(isValid => {
	      this._testOnBorrowResources.delete(pooledResource);

	      if (isValid === false) {
	        pooledResource.invalidate();
	        this._destroy(pooledResource);
	        this._dispense();
	        return;
	      }
	      this._dispatchPooledResourceToNextWaitingClient(pooledResource);
	    });

	    return true;
	  }

	  /**
	   * Attempt to move an available resource to a waiting client
	   * @return {Boolean} [description]
	   */
	  _dispatchResource() {
	    if (this._availableObjects.length < 1) {
	      return false;
	    }

	    const pooledResource = this._availableObjects.shift();
	    this._dispatchPooledResourceToNextWaitingClient(pooledResource);
	    return false;
	  }

	  /**
	   * Attempt to resolve an outstanding resource request using an available resource from
	   * the pool, or creating new ones
	   *
	   * @private
	   */
	  _dispense() {
	    /**
	     * Local variables for ease of reading/writing
	     * these don't (shouldn't) change across the execution of this fn
	     */
	    const numWaitingClients = this._waitingClientsQueue.length;

	    // If there aren't any waiting requests then there is nothing to do
	    // so lets short-circuit
	    if (numWaitingClients < 1) {
	      return;
	    }

	    const resourceShortfall =
	      numWaitingClients - this._potentiallyAllocableResourceCount;

	    const actualNumberOfResourcesToCreate = Math.min(
	      this.spareResourceCapacity,
	      resourceShortfall
	    );
	    for (let i = 0; actualNumberOfResourcesToCreate > i; i++) {
	      this._createResource();
	    }

	    // If we are doing test-on-borrow see how many more resources need to be moved into test
	    // to help satisfy waitingClients
	    if (this._config.testOnBorrow === true) {
	      // how many available resources do we need to shift into test
	      const desiredNumberOfResourcesToMoveIntoTest =
	        numWaitingClients - this._testOnBorrowResources.size;
	      const actualNumberOfResourcesToMoveIntoTest = Math.min(
	        this._availableObjects.length,
	        desiredNumberOfResourcesToMoveIntoTest
	      );
	      for (let i = 0; actualNumberOfResourcesToMoveIntoTest > i; i++) {
	        this._testOnBorrow();
	      }
	    }

	    // if we aren't testing-on-borrow then lets try to allocate what we can
	    if (this._config.testOnBorrow === false) {
	      const actualNumberOfResourcesToDispatch = Math.min(
	        this._availableObjects.length,
	        numWaitingClients
	      );
	      for (let i = 0; actualNumberOfResourcesToDispatch > i; i++) {
	        this._dispatchResource();
	      }
	    }
	  }

	  /**
	   * Dispatches a pooledResource to the next waiting client (if any) else
	   * puts the PooledResource back on the available list
	   * @param  {PooledResource} pooledResource [description]
	   * @return {Boolean}                [description]
	   */
	  _dispatchPooledResourceToNextWaitingClient(pooledResource) {
	    const clientResourceRequest = this._waitingClientsQueue.dequeue();
	    if (
	      clientResourceRequest === undefined ||
	      clientResourceRequest.state !== Deferred.PENDING
	    ) {
	      // While we were away either all the waiting clients timed out
	      // or were somehow fulfilled. put our pooledResource back.
	      this._addPooledResourceToAvailableObjects(pooledResource);
	      // TODO: do need to trigger anything before we leave?
	      return false;
	    }
	    const loan = new ResourceLoan(pooledResource, this._Promise);
	    this._resourceLoans.set(pooledResource.obj, loan);
	    pooledResource.allocate();
	    clientResourceRequest.resolve(pooledResource.obj);
	    return true;
	  }

	  /**
	   * tracks on operation using given set
	   * handles adding/removing from the set and resolve/rejects the value/reason
	   * @param  {Promise} operation
	   * @param  {Set} set       Set holding operations
	   * @return {Promise}       Promise that resolves once operation has been removed from set
	   */
	  _trackOperation(operation, set) {
	    set.add(operation);

	    return operation.then(
	      v => {
	        set.delete(operation);
	        return this._Promise.resolve(v);
	      },
	      e => {
	        set.delete(operation);
	        return this._Promise.reject(e);
	      }
	    );
	  }

	  /**
	   * @private
	   */
	  _createResource() {
	    // An attempt to create a resource
	    const factoryPromise = this._factory.create();
	    const wrappedFactoryPromise = this._Promise
	      .resolve(factoryPromise)
	      .then(resource => {
	        const pooledResource = new PooledResource(resource);
	        this._allObjects.add(pooledResource);
	        this._addPooledResourceToAvailableObjects(pooledResource);
	      });

	    this._trackOperation(wrappedFactoryPromise, this._factoryCreateOperations)
	      .then(() => {
	        this._dispense();
	        // Stop bluebird complaining about this side-effect only handler
	        // - a promise was created in a handler but was not returned from it
	        // https://goo.gl/rRqMUw
	        return null;
	      })
	      .catch(reason => {
	        this.emit(FACTORY_CREATE_ERROR, reason);
	        this._dispense();
	      });
	  }

	  /**
	   * @private
	   */
	  _ensureMinimum() {
	    if (this._draining === true) {
	      return;
	    }
	    const minShortfall = this._config.min - this._count;
	    for (let i = 0; i < minShortfall; i++) {
	      this._createResource();
	    }
	  }

	  _evict() {
	    const testsToRun = Math.min(
	      this._config.numTestsPerEvictionRun,
	      this._availableObjects.length
	    );
	    const evictionConfig = {
	      softIdleTimeoutMillis: this._config.softIdleTimeoutMillis,
	      idleTimeoutMillis: this._config.idleTimeoutMillis,
	      min: this._config.min
	    };
	    for (let testsHaveRun = 0; testsHaveRun < testsToRun; ) {
	      const iterationResult = this._evictionIterator.next();

	      // Safety check incase we could get stuck in infinite loop because we
	      // somehow emptied the array after checking its length.
	      if (iterationResult.done === true && this._availableObjects.length < 1) {
	        this._evictionIterator.reset();
	        return;
	      }
	      // If this happens it should just mean we reached the end of the
	      // list and can reset the cursor.
	      if (iterationResult.done === true && this._availableObjects.length > 0) {
	        this._evictionIterator.reset();
	        continue;
	      }

	      const resource = iterationResult.value;

	      const shouldEvict = this._evictor.evict(
	        evictionConfig,
	        resource,
	        this._availableObjects.length
	      );
	      testsHaveRun++;

	      if (shouldEvict === true) {
	        // take it out of the _availableObjects list
	        this._evictionIterator.remove();
	        this._destroy(resource);
	      }
	    }
	  }

	  _scheduleEvictorRun() {
	    // Start eviction if set
	    if (this._config.evictionRunIntervalMillis > 0) {
	      // @ts-ignore
	      this._scheduledEviction = setTimeout(() => {
	        this._evict();
	        this._scheduleEvictorRun();
	      }, this._config.evictionRunIntervalMillis).unref();
	    }
	  }

	  _descheduleEvictorRun() {
	    if (this._scheduledEviction) {
	      clearTimeout(this._scheduledEviction);
	    }
	    this._scheduledEviction = null;
	  }

	  start() {
	    if (this._draining === true) {
	      return;
	    }
	    if (this._started === true) {
	      return;
	    }
	    this._started = true;
	    this._scheduleEvictorRun();
	    this._ensureMinimum();
	  }

	  /**
	   * Request a new resource. The callback will be called,
	   * when a new resource is available, passing the resource to the callback.
	   * TODO: should we add a seperate "acquireWithPriority" function
	   *
	   * @param {Number} [priority=0]
	   *   Optional.  Integer between 0 and (priorityRange - 1).  Specifies the priority
	   *   of the caller if there are no available resources.  Lower numbers mean higher
	   *   priority.
	   *
	   * @returns {Promise}
	   */
	  acquire(priority) {
	    if (this._started === false && this._config.autostart === false) {
	      this.start();
	    }

	    if (this._draining) {
	      return this._Promise.reject(
	        new Error("pool is draining and cannot accept work")
	      );
	    }

	    // TODO: should we defer this check till after this event loop incase "the situation" changes in the meantime
	    if (
	      this.spareResourceCapacity < 1 &&
	      this._availableObjects.length < 1 &&
	      this._config.maxWaitingClients !== undefined &&
	      this._waitingClientsQueue.length >= this._config.maxWaitingClients
	    ) {
	      return this._Promise.reject(
	        new Error("max waitingClients count exceeded")
	      );
	    }

	    const resourceRequest = new ResourceRequest(
	      this._config.acquireTimeoutMillis,
	      this._Promise
	    );
	    this._waitingClientsQueue.enqueue(resourceRequest, priority);
	    this._dispense();

	    return resourceRequest.promise;
	  }

	  /**
	   * [use method, aquires a resource, passes the resource to a user supplied function and releases it]
	   * @param  {Function} fn [a function that accepts a resource and returns a promise that resolves/rejects once it has finished using the resource]
	   * @return {Promise}      [resolves once the resource is released to the pool]
	   */
	  use(fn, priority) {
	    return this.acquire(priority).then(resource => {
	      return fn(resource).then(
	        result => {
	          this.release(resource);
	          return result;
	        },
	        err => {
	          this.destroy(resource);
	          throw err;
	        }
	      );
	    });
	  }

	  /**
	   * Check if resource is currently on loan from the pool
	   *
	   * @param {Function} resource
	   *    Resource for checking.
	   *
	   * @returns {Boolean}
	   *  True if resource belongs to this pool and false otherwise
	   */
	  isBorrowedResource(resource) {
	    return this._resourceLoans.has(resource);
	  }

	  /**
	   * Return the resource to the pool when it is no longer required.
	   *
	   * @param {Object} resource
	   *   The acquired object to be put back to the pool.
	   */
	  release(resource) {
	    // check for an outstanding loan
	    const loan = this._resourceLoans.get(resource);

	    if (loan === undefined) {
	      return this._Promise.reject(
	        new Error("Resource not currently part of this pool")
	      );
	    }

	    this._resourceLoans.delete(resource);
	    loan.resolve();
	    const pooledResource = loan.pooledResource;

	    pooledResource.deallocate();
	    this._addPooledResourceToAvailableObjects(pooledResource);

	    this._dispense();
	    return this._Promise.resolve();
	  }

	  /**
	   * Request the resource to be destroyed. The factory's destroy handler
	   * will also be called.
	   *
	   * This should be called within an acquire() block as an alternative to release().
	   *
	   * @param {Object} resource
	   *   The acquired resource to be destoyed.
	   */
	  destroy(resource) {
	    // check for an outstanding loan
	    const loan = this._resourceLoans.get(resource);

	    if (loan === undefined) {
	      return this._Promise.reject(
	        new Error("Resource not currently part of this pool")
	      );
	    }

	    this._resourceLoans.delete(resource);
	    loan.resolve();
	    const pooledResource = loan.pooledResource;

	    pooledResource.deallocate();
	    this._destroy(pooledResource);

	    this._dispense();
	    return this._Promise.resolve();
	  }

	  _addPooledResourceToAvailableObjects(pooledResource) {
	    pooledResource.idle();
	    if (this._config.fifo === true) {
	      this._availableObjects.push(pooledResource);
	    } else {
	      this._availableObjects.unshift(pooledResource);
	    }
	  }

	  /**
	   * Disallow any new acquire calls and let the request backlog dissapate.
	   * The Pool will no longer attempt to maintain a "min" number of resources
	   * and will only make new resources on demand.
	   * Resolves once all resource requests are fulfilled and all resources are returned to pool and available...
	   * Should probably be called "drain work"
	   * @returns {Promise}
	   */
	  drain() {
	    this._draining = true;
	    return this.__allResourceRequestsSettled()
	      .then(() => {
	        return this.__allResourcesReturned();
	      })
	      .then(() => {
	        this._descheduleEvictorRun();
	      });
	  }

	  __allResourceRequestsSettled() {
	    if (this._waitingClientsQueue.length > 0) {
	      // wait for last waiting client to be settled
	      // FIXME: what if they can "resolve" out of order....?
	      return reflector(this._waitingClientsQueue.tail.promise);
	    }
	    return this._Promise.resolve();
	  }

	  // FIXME: this is a horrific mess
	  __allResourcesReturned() {
	    const ps = Array.from(this._resourceLoans.values())
	      .map(loan => loan.promise)
	      .map(reflector);
	    return this._Promise.all(ps);
	  }

	  /**
	   * Forcibly destroys all available resources regardless of timeout.  Intended to be
	   * invoked as part of a drain.  Does not prevent the creation of new
	   * resources as a result of subsequent calls to acquire.
	   *
	   * Note that if factory.min > 0 and the pool isn't "draining", the pool will destroy all idle resources
	   * in the pool, but replace them with newly created resources up to the
	   * specified factory.min value.  If this is not desired, set factory.min
	   * to zero before calling clear()
	   *
	   */
	  clear() {
	    const reflectedCreatePromises = Array.from(
	      this._factoryCreateOperations
	    ).map(reflector);

	    // wait for outstanding factory.create to complete
	    return this._Promise.all(reflectedCreatePromises).then(() => {
	      // Destroy existing resources
	      // @ts-ignore
	      for (const resource of this._availableObjects) {
	        this._destroy(resource);
	      }
	      const reflectedDestroyPromises = Array.from(
	        this._factoryDestroyOperations
	      ).map(reflector);
	      return reflector(this._Promise.all(reflectedDestroyPromises));
	    });
	  }

	  /**
	   * Waits until the pool is ready.
	   * We define ready by checking if the current resource number is at least
	   * the minimum number defined.
	   * @returns {Promise} that resolves when the minimum number is ready.
	   */
	  ready() {
	    return new this._Promise(resolve => {
	      const isReady = () => {
	        if (this.available >= this.min) {
	          resolve();
	        } else {
	          setTimeout(isReady, 100);
	        }
	      };

	      isReady();
	    });
	  }

	  /**
	   * How many resources are available to allocated
	   * (includes resources that have not been tested and may faul validation)
	   * NOTE: internal for now as the name is awful and might not be useful to anyone
	   * @return {Number} number of resources the pool has to allocate
	   */
	  get _potentiallyAllocableResourceCount() {
	    return (
	      this._availableObjects.length +
	      this._testOnBorrowResources.size +
	      this._testOnReturnResources.size +
	      this._factoryCreateOperations.size
	    );
	  }

	  /**
	   * The combined count of the currently created objects and those in the
	   * process of being created
	   * Does NOT include resources in the process of being destroyed
	   * sort of legacy...
	   * @return {Number}
	   */
	  get _count() {
	    return this._allObjects.size + this._factoryCreateOperations.size;
	  }

	  /**
	   * How many more resources does the pool have room for
	   * @return {Number} number of resources the pool could create before hitting any limits
	   */
	  get spareResourceCapacity() {
	    return (
	      this._config.max -
	      (this._allObjects.size + this._factoryCreateOperations.size)
	    );
	  }

	  /**
	   * see _count above
	   * @return {Number} [description]
	   */
	  get size() {
	    return this._count;
	  }

	  /**
	   * number of available resources
	   * @return {Number} [description]
	   */
	  get available() {
	    return this._availableObjects.length;
	  }

	  /**
	   * number of resources that are currently acquired
	   * @return {Number} [description]
	   */
	  get borrowed() {
	    return this._resourceLoans.size;
	  }

	  /**
	   * number of waiting acquire calls
	   * @return {Number} [description]
	   */
	  get pending() {
	    return this._waitingClientsQueue.length;
	  }

	  /**
	   * maximum size of the pool
	   * @return {Number} [description]
	   */
	  get max() {
	    return this._config.max;
	  }

	  /**
	   * minimum size of the pool
	   * @return {Number} [description]
	   */
	  get min() {
	    return this._config.min;
	  }
	}

	Pool_1 = Pool;
	return Pool_1;
}

var genericPool;
var hasRequiredGenericPool;

function requireGenericPool () {
	if (hasRequiredGenericPool) return genericPool;
	hasRequiredGenericPool = 1;
	const Pool = requirePool();
	const Deque = requireDeque();
	const PriorityQueue = requirePriorityQueue();
	const DefaultEvictor = requireDefaultEvictor();
	genericPool = {
	  Pool: Pool,
	  Deque: Deque,
	  PriorityQueue: PriorityQueue,
	  DefaultEvictor: DefaultEvictor,
	  createPool: function(factory, config) {
	    return new Pool(DefaultEvictor, Deque, PriorityQueue, factory, config);
	  }
	};
	return genericPool;
}

var version = "1.5.16";
var require$$11 = {
	version: version};

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client$1;
	hasRequiredClient = 1;
	var __classPrivateFieldGet = (client$1 && client$1.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (client$1 && client$1.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _RedisClient_instances, _a, _RedisClient_options, _RedisClient_socket, _RedisClient_queue, _RedisClient_isolationPool, _RedisClient_v4, _RedisClient_selectedDB, _RedisClient_initiateOptions, _RedisClient_initiateQueue, _RedisClient_initiateSocket, _RedisClient_initiateIsolationPool, _RedisClient_legacyMode, _RedisClient_legacySendCommand, _RedisClient_defineLegacyCommand, _RedisClient_pingTimer, _RedisClient_setPingTimer, _RedisClient_sendCommand, _RedisClient_pubSubCommand, _RedisClient_tick, _RedisClient_addMultiCommands, _RedisClient_destroyIsolationPool;
	Object.defineProperty(client$1, "__esModule", { value: true });
	const commands_1 = requireCommands$5();
	const socket_1 = requireSocket();
	const commands_queue_1 = requireCommandsQueue();
	const multi_command_1 = requireMultiCommand$1();
	const events_1 = require$$0;
	const command_options_1 = requireCommandOptions();
	const commander_1 = requireCommander();
	const generic_pool_1 = requireGenericPool();
	const errors_1 = requireErrors$1();
	const url_1 = require$$9;
	const pub_sub_1 = requirePubSub();
	const package_json_1 = require$$11;
	class RedisClient extends events_1.EventEmitter {
	    static commandOptions(options) {
	        return (0, command_options_1.commandOptions)(options);
	    }
	    static extend(extensions) {
	        const Client = (0, commander_1.attachExtensions)({
	            BaseClass: _a,
	            modulesExecutor: _a.prototype.commandsExecutor,
	            modules: extensions?.modules,
	            functionsExecutor: _a.prototype.functionsExecuter,
	            functions: extensions?.functions,
	            scriptsExecutor: _a.prototype.scriptsExecuter,
	            scripts: extensions?.scripts
	        });
	        if (Client !== _a) {
	            Client.prototype.Multi = multi_command_1.default.extend(extensions);
	        }
	        return Client;
	    }
	    static create(options) {
	        return new (_a.extend(options))(options);
	    }
	    static parseURL(url) {
	        // https://www.iana.org/assignments/uri-schemes/prov/redis
	        const { hostname, port, protocol, username, password, pathname } = new url_1.URL(url), parsed = {
	            socket: {
	                host: hostname
	            }
	        };
	        if (protocol === 'rediss:') {
	            parsed.socket.tls = true;
	        }
	        else if (protocol !== 'redis:') {
	            throw new TypeError('Invalid protocol');
	        }
	        if (port) {
	            parsed.socket.port = Number(port);
	        }
	        if (username) {
	            parsed.username = decodeURIComponent(username);
	        }
	        if (password) {
	            parsed.password = decodeURIComponent(password);
	        }
	        if (pathname.length > 1) {
	            const database = Number(pathname.substring(1));
	            if (isNaN(database)) {
	                throw new TypeError('Invalid pathname');
	            }
	            parsed.database = database;
	        }
	        return parsed;
	    }
	    get options() {
	        return __classPrivateFieldGet(this, _RedisClient_options, "f");
	    }
	    get isOpen() {
	        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen;
	    }
	    get isReady() {
	        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isReady;
	    }
	    get isPubSubActive() {
	        return __classPrivateFieldGet(this, _RedisClient_queue, "f").isPubSubActive;
	    }
	    get v4() {
	        if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode) {
	            throw new Error('the client is not in "legacy mode"');
	        }
	        return __classPrivateFieldGet(this, _RedisClient_v4, "f");
	    }
	    constructor(options) {
	        super();
	        _RedisClient_instances.add(this);
	        Object.defineProperty(this, "commandOptions", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: _a.commandOptions
	        });
	        _RedisClient_options.set(this, void 0);
	        _RedisClient_socket.set(this, void 0);
	        _RedisClient_queue.set(this, void 0);
	        _RedisClient_isolationPool.set(this, void 0);
	        _RedisClient_v4.set(this, {});
	        _RedisClient_selectedDB.set(this, 0);
	        _RedisClient_pingTimer.set(this, void 0);
	        Object.defineProperty(this, "select", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SELECT
	        });
	        Object.defineProperty(this, "subscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SUBSCRIBE
	        });
	        Object.defineProperty(this, "unsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.UNSUBSCRIBE
	        });
	        Object.defineProperty(this, "pSubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.PSUBSCRIBE
	        });
	        Object.defineProperty(this, "pUnsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.PUNSUBSCRIBE
	        });
	        Object.defineProperty(this, "sSubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SSUBSCRIBE
	        });
	        Object.defineProperty(this, "sUnsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SUNSUBSCRIBE
	        });
	        Object.defineProperty(this, "quit", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.QUIT
	        });
	        Object.defineProperty(this, "multi", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.MULTI
	        });
	        __classPrivateFieldSet(this, _RedisClient_options, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateOptions).call(this, options), "f");
	        __classPrivateFieldSet(this, _RedisClient_queue, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateQueue).call(this), "f");
	        __classPrivateFieldSet(this, _RedisClient_socket, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateSocket).call(this), "f");
	        // should be initiated in connect, not here
	        // TODO: consider breaking in v5
	        __classPrivateFieldSet(this, _RedisClient_isolationPool, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacyMode).call(this);
	    }
	    duplicate(overrides) {
	        return new (Object.getPrototypeOf(this).constructor)({
	            ...__classPrivateFieldGet(this, _RedisClient_options, "f"),
	            ...overrides
	        });
	    }
	    async connect() {
	        // see comment in constructor
	        __classPrivateFieldSet(this, _RedisClient_isolationPool, __classPrivateFieldGet(this, _RedisClient_isolationPool, "f") ?? __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
	        await __classPrivateFieldGet(this, _RedisClient_socket, "f").connect();
	        return this;
	    }
	    async commandsExecutor(command, args) {
	        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
	        return (0, commander_1.transformCommandReply)(command, await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options), redisArgs.preserve);
	    }
	    sendCommand(args, options) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, args, options);
	    }
	    async functionsExecuter(fn, args, name) {
	        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
	        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, redisArgs, options), redisArgs.preserve);
	    }
	    executeFunction(name, fn, args, options) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.fCallArguments)(name, fn, args), options);
	    }
	    async scriptsExecuter(script, args) {
	        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
	        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, redisArgs, options), redisArgs.preserve);
	    }
	    async executeScript(script, args, options) {
	        const redisArgs = ['EVALSHA', script.SHA1];
	        if (script.NUMBER_OF_KEYS !== undefined) {
	            redisArgs.push(script.NUMBER_OF_KEYS.toString());
	        }
	        redisArgs.push(...args);
	        try {
	            return await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
	        }
	        catch (err) {
	            if (!err?.message?.startsWith?.('NOSCRIPT')) {
	                throw err;
	            }
	            redisArgs[0] = 'EVAL';
	            redisArgs[1] = script.SCRIPT;
	            return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
	        }
	    }
	    async SELECT(options, db) {
	        if (!(0, command_options_1.isCommandOptions)(options)) {
	            db = options;
	            options = null;
	        }
	        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ['SELECT', db.toString()], options);
	        __classPrivateFieldSet(this, _RedisClient_selectedDB, db, "f");
	    }
	    SUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
	    }
	    UNSUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
	    }
	    PSUBSCRIBE(patterns, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
	    }
	    PUNSUBSCRIBE(patterns, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
	    }
	    SSUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
	    }
	    SUNSUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
	    }
	    getPubSubListeners(type) {
	        return __classPrivateFieldGet(this, _RedisClient_queue, "f").getPubSubListeners(type);
	    }
	    extendPubSubChannelListeners(type, channel, listeners) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubChannelListeners(type, channel, listeners));
	    }
	    extendPubSubListeners(type, listeners) {
	        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubListeners(type, listeners));
	    }
	    QUIT() {
	        return __classPrivateFieldGet(this, _RedisClient_socket, "f").quit(async () => {
	            if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"))
	                clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
	            const quitPromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(['QUIT']);
	            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
	            const [reply] = await Promise.all([
	                quitPromise,
	                __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this)
	            ]);
	            return reply;
	        });
	    }
	    executeIsolated(fn) {
	        if (!__classPrivateFieldGet(this, _RedisClient_isolationPool, "f"))
	            return Promise.reject(new errors_1.ClientClosedError());
	        return __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").use(fn);
	    }
	    MULTI() {
	        return new this.Multi(this.multiExecutor.bind(this), __classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode);
	    }
	    async multiExecutor(commands, selectedDB, chainId) {
	        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
	            return Promise.reject(new errors_1.ClientClosedError());
	        }
	        const promise = chainId ?
	            // if `chainId` has a value, it's a `MULTI` (and not "pipeline") - need to add the `MULTI` and `EXEC` commands
	            Promise.all([
	                __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(['MULTI'], { chainId }),
	                __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands, chainId),
	                __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(['EXEC'], { chainId })
	            ]) :
	            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands);
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
	        const results = await promise;
	        if (selectedDB !== undefined) {
	            __classPrivateFieldSet(this, _RedisClient_selectedDB, selectedDB, "f");
	        }
	        return results;
	    }
	    async *scanIterator(options) {
	        let cursor = 0;
	        do {
	            const reply = await this.scan(cursor, options);
	            cursor = reply.cursor;
	            for (const key of reply.keys) {
	                yield key;
	            }
	        } while (cursor !== 0);
	    }
	    async *hScanIterator(key, options) {
	        let cursor = 0;
	        do {
	            const reply = await this.hScan(key, cursor, options);
	            cursor = reply.cursor;
	            for (const tuple of reply.tuples) {
	                yield tuple;
	            }
	        } while (cursor !== 0);
	    }
	    async *sScanIterator(key, options) {
	        let cursor = 0;
	        do {
	            const reply = await this.sScan(key, cursor, options);
	            cursor = reply.cursor;
	            for (const member of reply.members) {
	                yield member;
	            }
	        } while (cursor !== 0);
	    }
	    async *zScanIterator(key, options) {
	        let cursor = 0;
	        do {
	            const reply = await this.zScan(key, cursor, options);
	            cursor = reply.cursor;
	            for (const member of reply.members) {
	                yield member;
	            }
	        } while (cursor !== 0);
	    }
	    async disconnect() {
	        if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"))
	            clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
	        __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(new errors_1.DisconnectsClientError());
	        __classPrivateFieldGet(this, _RedisClient_socket, "f").disconnect();
	        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this);
	    }
	    ref() {
	        __classPrivateFieldGet(this, _RedisClient_socket, "f").ref();
	    }
	    unref() {
	        __classPrivateFieldGet(this, _RedisClient_socket, "f").unref();
	    }
	}
	_a = RedisClient, _RedisClient_options = new WeakMap(), _RedisClient_socket = new WeakMap(), _RedisClient_queue = new WeakMap(), _RedisClient_isolationPool = new WeakMap(), _RedisClient_v4 = new WeakMap(), _RedisClient_selectedDB = new WeakMap(), _RedisClient_pingTimer = new WeakMap(), _RedisClient_instances = new WeakSet(), _RedisClient_initiateOptions = function _RedisClient_initiateOptions(options) {
	    if (options?.url) {
	        const parsed = _a.parseURL(options.url);
	        if (options.socket) {
	            parsed.socket = Object.assign(options.socket, parsed.socket);
	        }
	        Object.assign(options, parsed);
	    }
	    if (options?.database) {
	        __classPrivateFieldSet(this, _RedisClient_selectedDB, options.database, "f");
	    }
	    return options;
	}, _RedisClient_initiateQueue = function _RedisClient_initiateQueue() {
	    return new commands_queue_1.default(__classPrivateFieldGet(this, _RedisClient_options, "f")?.commandsQueueMaxLength, (channel, listeners) => this.emit('sharded-channel-moved', channel, listeners));
	}, _RedisClient_initiateSocket = function _RedisClient_initiateSocket() {
	    const socketInitiator = async () => {
	        const promises = [];
	        if (__classPrivateFieldGet(this, _RedisClient_selectedDB, "f") !== 0) {
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(['SELECT', __classPrivateFieldGet(this, _RedisClient_selectedDB, "f").toString()], { asap: true }));
	        }
	        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.readonly) {
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.READONLY.transformArguments(), { asap: true }));
	        }
	        if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.disableClientInfo) {
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(['CLIENT', 'SETINFO', 'LIB-VER', package_json_1.version], { asap: true }).catch(err => {
	                if (!(err instanceof errors_1.ErrorReply)) {
	                    throw err;
	                }
	            }));
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
	                'CLIENT', 'SETINFO', 'LIB-NAME',
	                __classPrivateFieldGet(this, _RedisClient_options, "f")?.clientInfoTag ? `node-redis(${__classPrivateFieldGet(this, _RedisClient_options, "f").clientInfoTag})` : 'node-redis'
	            ], { asap: true }).catch(err => {
	                if (!(err instanceof errors_1.ErrorReply)) {
	                    throw err;
	                }
	            }));
	        }
	        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.name) {
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.CLIENT_SETNAME.transformArguments(__classPrivateFieldGet(this, _RedisClient_options, "f").name), { asap: true }));
	        }
	        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.username || __classPrivateFieldGet(this, _RedisClient_options, "f")?.password) {
	            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.AUTH.transformArguments({
	                username: __classPrivateFieldGet(this, _RedisClient_options, "f").username,
	                password: __classPrivateFieldGet(this, _RedisClient_options, "f").password ?? ''
	            }), { asap: true }));
	        }
	        const resubscribePromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").resubscribe();
	        if (resubscribePromise) {
	            promises.push(resubscribePromise);
	        }
	        if (promises.length) {
	            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this, true);
	            await Promise.all(promises);
	        }
	    };
	    return new socket_1.default(socketInitiator, __classPrivateFieldGet(this, _RedisClient_options, "f")?.socket)
	        .on('data', chunk => __classPrivateFieldGet(this, _RedisClient_queue, "f").onReplyChunk(chunk))
	        .on('error', err => {
	        this.emit('error', err);
	        if (__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen && !__classPrivateFieldGet(this, _RedisClient_options, "f")?.disableOfflineQueue) {
	            __classPrivateFieldGet(this, _RedisClient_queue, "f").flushWaitingForReply(err);
	        }
	        else {
	            __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(err);
	        }
	    })
	        .on('connect', () => {
	        this.emit('connect');
	    })
	        .on('ready', () => {
	        this.emit('ready');
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this);
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
	    })
	        .on('reconnecting', () => this.emit('reconnecting'))
	        .on('drain', () => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this))
	        .on('end', () => this.emit('end'));
	}, _RedisClient_initiateIsolationPool = function _RedisClient_initiateIsolationPool() {
	    return (0, generic_pool_1.createPool)({
	        create: async () => {
	            const duplicate = this.duplicate({
	                isolationPoolOptions: undefined
	            }).on('error', err => this.emit('error', err));
	            await duplicate.connect();
	            return duplicate;
	        },
	        destroy: client => client.disconnect()
	    }, __classPrivateFieldGet(this, _RedisClient_options, "f")?.isolationPoolOptions);
	}, _RedisClient_legacyMode = function _RedisClient_legacyMode() {
	    var _b, _c;
	    if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode)
	        return;
	    __classPrivateFieldGet(this, _RedisClient_v4, "f").sendCommand = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).bind(this);
	    this.sendCommand = (...args) => {
	        const result = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(this, ...args);
	        if (result) {
	            result.promise
	                .then(reply => result.callback(null, reply))
	                .catch(err => result.callback(err));
	        }
	    };
	    for (const [name, command] of Object.entries(commands_1.default)) {
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, name, command);
	        (_b = this)[_c = name.toLowerCase()] ?? (_b[_c] = this[name]);
	    }
	    // hard coded commands
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SELECT');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'select');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SUBSCRIBE');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'subscribe');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PSUBSCRIBE');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pSubscribe');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'UNSUBSCRIBE');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'unsubscribe');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PUNSUBSCRIBE');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pUnsubscribe');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'QUIT');
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'quit');
	}, _RedisClient_legacySendCommand = function _RedisClient_legacySendCommand(...args) {
	    const callback = typeof args[args.length - 1] === 'function' ?
	        args.pop() :
	        undefined;
	    const promise = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.transformLegacyCommandArguments)(args));
	    if (callback)
	        return {
	            promise,
	            callback
	        };
	    promise.catch(err => this.emit('error', err));
	}, _RedisClient_defineLegacyCommand = function _RedisClient_defineLegacyCommand(name, command) {
	    __classPrivateFieldGet(this, _RedisClient_v4, "f")[name] = this[name].bind(this);
	    this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ?
	        (...args) => {
	            const result = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(this, name, ...args);
	            if (result) {
	                result.promise
	                    .then(reply => result.callback(null, command.transformReply(reply)))
	                    .catch(err => result.callback(err));
	            }
	        } :
	        (...args) => this.sendCommand(name, ...args);
	}, _RedisClient_setPingTimer = function _RedisClient_setPingTimer() {
	    if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.pingInterval || !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
	        return;
	    clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
	    __classPrivateFieldSet(this, _RedisClient_pingTimer, setTimeout(() => {
	        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
	            return;
	        // using #sendCommand to support legacy mode
	        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ['PING'])
	            .then(reply => this.emit('ping-interval', reply))
	            .catch(err => this.emit('error', err))
	            .finally(() => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this));
	    }, __classPrivateFieldGet(this, _RedisClient_options, "f").pingInterval), "f");
	}, _RedisClient_sendCommand = function _RedisClient_sendCommand(args, options) {
	    if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
	        return Promise.reject(new errors_1.ClientClosedError());
	    }
	    else if (options?.isolated) {
	        return this.executeIsolated(isolatedClient => isolatedClient.sendCommand(args, {
	            ...options,
	            isolated: false
	        }));
	    }
	    else if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady && __classPrivateFieldGet(this, _RedisClient_options, "f")?.disableOfflineQueue) {
	        return Promise.reject(new errors_1.ClientOfflineError());
	    }
	    const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, options);
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
	    return promise;
	}, _RedisClient_pubSubCommand = function _RedisClient_pubSubCommand(promise) {
	    if (promise === undefined)
	        return Promise.resolve();
	    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
	    return promise;
	}, _RedisClient_tick = function _RedisClient_tick(force = false) {
	    if (__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain || (!force && !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)) {
	        return;
	    }
	    __classPrivateFieldGet(this, _RedisClient_socket, "f").cork();
	    while (!__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain) {
	        const args = __classPrivateFieldGet(this, _RedisClient_queue, "f").getCommandToSend();
	        if (args === undefined)
	            break;
	        __classPrivateFieldGet(this, _RedisClient_socket, "f").writeCommand(args);
	    }
	}, _RedisClient_addMultiCommands = function _RedisClient_addMultiCommands(commands, chainId) {
	    return Promise.all(commands.map(({ args }) => __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, { chainId })));
	}, _RedisClient_destroyIsolationPool = async function _RedisClient_destroyIsolationPool() {
	    await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").drain();
	    await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").clear();
	    __classPrivateFieldSet(this, _RedisClient_isolationPool, undefined, "f");
	};
	client$1.default = RedisClient;
	(0, commander_1.attachCommands)({
	    BaseClass: RedisClient,
	    commands: commands_1.default,
	    executor: RedisClient.prototype.commandsExecutor
	});
	RedisClient.prototype.Multi = multi_command_1.default;
	return client$1;
}

var cluster = {};

var clusterSlots = {};

var lib = {exports: {}};

/*
 * Copyright 2001-2010 Georges Menie (www.menie.org)
 * Copyright 2010 Salvatore Sanfilippo (adapted to Redis coding style)
 * Copyright 2015 Zihua Li (http://zihua.li) (ported to JavaScript)
 * Copyright 2016 Mike Diarmid (http://github.com/salakar) (re-write for performance, ~700% perf inc)
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the University of California, Berkeley nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib.exports;
	hasRequiredLib = 1;
	/* CRC16 implementation according to CCITT standards.
	 *
	 * Note by @antirez: this is actually the XMODEM CRC 16 algorithm, using the
	 * following parameters:
	 *
	 * Name                       : "XMODEM", also known as "ZMODEM", "CRC-16/ACORN"
	 * Width                      : 16 bit
	 * Poly                       : 1021 (That is actually x^16 + x^12 + x^5 + 1)
	 * Initialization             : 0000
	 * Reflect Input byte         : False
	 * Reflect Output CRC         : False
	 * Xor constant to output CRC : 0000
	 * Output for "123456789"     : 31C3
	 */

	var lookup = [
	  0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
	  0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
	  0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
	  0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
	  0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
	  0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
	  0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
	  0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
	  0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
	  0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
	  0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
	  0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
	  0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
	  0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
	  0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
	  0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
	  0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
	  0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
	  0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
	  0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
	  0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
	  0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
	  0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
	  0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
	  0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
	  0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
	  0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
	  0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
	  0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
	  0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
	  0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
	  0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
	];

	/**
	 * Convert a string to a UTF8 array - faster than via buffer
	 * @param str
	 * @returns {Array}
	 */
	var toUTF8Array = function toUTF8Array(str) {
	  var char;
	  var i = 0;
	  var p = 0;
	  var utf8 = [];
	  var len = str.length;

	  for (; i < len; i++) {
	    char = str.charCodeAt(i);
	    if (char < 128) {
	      utf8[p++] = char;
	    } else if (char < 2048) {
	      utf8[p++] = (char >> 6) | 192;
	      utf8[p++] = (char & 63) | 128;
	    } else if (
	        ((char & 0xFC00) === 0xD800) && (i + 1) < str.length &&
	        ((str.charCodeAt(i + 1) & 0xFC00) === 0xDC00)) {
	      char = 0x10000 + ((char & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
	      utf8[p++] = (char >> 18) | 240;
	      utf8[p++] = ((char >> 12) & 63) | 128;
	      utf8[p++] = ((char >> 6) & 63) | 128;
	      utf8[p++] = (char & 63) | 128;
	    } else {
	      utf8[p++] = (char >> 12) | 224;
	      utf8[p++] = ((char >> 6) & 63) | 128;
	      utf8[p++] = (char & 63) | 128;
	    }
	  }

	  return utf8;
	};

	/**
	 * Convert a string into a redis slot hash.
	 * @param str
	 * @returns {number}
	 */
	var generate = lib.exports = function generate(str) {
	  var char;
	  var i = 0;
	  var start = -1;
	  var result = 0;
	  var resultHash = 0;
	  var utf8 = typeof str === 'string' ? toUTF8Array(str) : str;
	  var len = utf8.length;

	  while (i < len) {
	    char = utf8[i++];
	    if (start === -1) {
	      if (char === 0x7B) {
	        start = i;
	      }
	    } else if (char !== 0x7D) {
	      resultHash = lookup[(char ^ (resultHash >> 8)) & 0xFF] ^ (resultHash << 8);
	    } else if (i - 1 !== start) {
	      return resultHash & 0x3FFF;
	    }

	    result = lookup[(char ^ (result >> 8)) & 0xFF] ^ (result << 8);
	  }

	  return result & 0x3FFF;
	};

	/**
	 * Convert an array of multiple strings into a redis slot hash.
	 * Returns -1 if one of the keys is not for the same slot as the others
	 * @param keys
	 * @returns {number}
	 */
	lib.exports.generateMulti = function generateMulti(keys) {
	  var i = 1;
	  var len = keys.length;
	  var base = generate(keys[0]);

	  while (i < len) {
	    if (generate(keys[i++]) !== base) return -1;
	  }

	  return base;
	};
	return lib.exports;
}

var hasRequiredClusterSlots;

function requireClusterSlots () {
	if (hasRequiredClusterSlots) return clusterSlots;
	hasRequiredClusterSlots = 1;
	var __classPrivateFieldGet = (clusterSlots && clusterSlots.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (clusterSlots && clusterSlots.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _RedisClusterSlots_instances, _a, _RedisClusterSlots_SLOTS, _RedisClusterSlots_options, _RedisClusterSlots_Client, _RedisClusterSlots_emit, _RedisClusterSlots_isOpen, _RedisClusterSlots_discoverWithRootNodes, _RedisClusterSlots_resetSlots, _RedisClusterSlots_discover, _RedisClusterSlots_getShards, _RedisClusterSlots_getNodeAddress, _RedisClusterSlots_clientOptionsDefaults, _RedisClusterSlots_initiateSlotNode, _RedisClusterSlots_createClient, _RedisClusterSlots_createNodeClient, _RedisClusterSlots_runningRediscoverPromise, _RedisClusterSlots_rediscover, _RedisClusterSlots_destroy, _RedisClusterSlots_execOnNodeClient, _RedisClusterSlots_iterateAllNodes, _RedisClusterSlots_randomNodeIterator, _RedisClusterSlots_slotNodesIterator, _RedisClusterSlots_initiatePubSubClient, _RedisClusterSlots_initiateShardedPubSubClient;
	Object.defineProperty(clusterSlots, "__esModule", { value: true });
	const client_1 = requireClient();
	const errors_1 = requireErrors$1();
	const util_1 = require$$2$1;
	const pub_sub_1 = requirePubSub();
	// We need to use 'require', because it's not possible with Typescript to import
	// function that are exported as 'module.exports = function`, without esModuleInterop
	// set to true.
	const calculateSlot = requireLib();
	class RedisClusterSlots {
	    get isOpen() {
	        return __classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f");
	    }
	    constructor(options, emit) {
	        _RedisClusterSlots_instances.add(this);
	        _RedisClusterSlots_options.set(this, void 0);
	        _RedisClusterSlots_Client.set(this, void 0);
	        _RedisClusterSlots_emit.set(this, void 0);
	        Object.defineProperty(this, "slots", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Array(__classPrivateFieldGet(_a, _a, "f", _RedisClusterSlots_SLOTS))
	        });
	        Object.defineProperty(this, "shards", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Array()
	        });
	        Object.defineProperty(this, "masters", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Array()
	        });
	        Object.defineProperty(this, "replicas", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Array()
	        });
	        Object.defineProperty(this, "nodeByAddress", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: new Map()
	        });
	        Object.defineProperty(this, "pubSubNode", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: void 0
	        });
	        _RedisClusterSlots_isOpen.set(this, false);
	        _RedisClusterSlots_runningRediscoverPromise.set(this, void 0);
	        _RedisClusterSlots_randomNodeIterator.set(this, void 0);
	        __classPrivateFieldSet(this, _RedisClusterSlots_options, options, "f");
	        __classPrivateFieldSet(this, _RedisClusterSlots_Client, client_1.default.extend(options), "f");
	        __classPrivateFieldSet(this, _RedisClusterSlots_emit, emit, "f");
	    }
	    async connect() {
	        if (__classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f")) {
	            throw new Error('Cluster already open');
	        }
	        __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, true, "f");
	        try {
	            await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
	        }
	        catch (err) {
	            __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
	            throw err;
	        }
	    }
	    nodeClient(node) {
	        return node.client ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node);
	    }
	    async rediscover(startWith) {
	        __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f") ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_rediscover).call(this, startWith)
	            .finally(() => __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, undefined, "f")), "f");
	        return __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f");
	    }
	    quit() {
	        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, client => client.quit());
	    }
	    disconnect() {
	        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, client => client.disconnect());
	    }
	    getClient(firstKey, isReadonly) {
	        if (!firstKey) {
	            return this.nodeClient(this.getRandomNode());
	        }
	        const slotNumber = calculateSlot(firstKey);
	        if (!isReadonly) {
	            return this.nodeClient(this.slots[slotNumber].master);
	        }
	        return this.nodeClient(this.getSlotRandomNode(slotNumber));
	    }
	    getRandomNode() {
	        __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f") ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_iterateAllNodes).call(this), "f");
	        return __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f").next().value;
	    }
	    getSlotRandomNode(slotNumber) {
	        const slot = this.slots[slotNumber];
	        if (!slot.replicas?.length) {
	            return slot.master;
	        }
	        slot.nodesIterator ?? (slot.nodesIterator = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_slotNodesIterator).call(this, slot));
	        return slot.nodesIterator.next().value;
	    }
	    getMasterByAddress(address) {
	        const master = this.nodeByAddress.get(address);
	        if (!master)
	            return;
	        return this.nodeClient(master);
	    }
	    getPubSubClient() {
	        return this.pubSubNode ?
	            this.pubSubNode.client :
	            __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this);
	    }
	    async executeUnsubscribeCommand(unsubscribe) {
	        const client = await this.getPubSubClient();
	        await unsubscribe(client);
	        if (!client.isPubSubActive && client.isOpen) {
	            await client.disconnect();
	            this.pubSubNode = undefined;
	        }
	    }
	    getShardedPubSubClient(channel) {
	        const { master } = this.slots[calculateSlot(channel)];
	        return master.pubSubClient ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateShardedPubSubClient).call(this, master);
	    }
	    async executeShardedUnsubscribeCommand(channel, unsubscribe) {
	        const { master } = this.slots[calculateSlot(channel)];
	        if (!master.pubSubClient)
	            return Promise.resolve();
	        const client = await master.pubSubClient;
	        await unsubscribe(client);
	        if (!client.isPubSubActive && client.isOpen) {
	            await client.disconnect();
	            master.pubSubClient = undefined;
	        }
	    }
	}
	_a = RedisClusterSlots, _RedisClusterSlots_options = new WeakMap(), _RedisClusterSlots_Client = new WeakMap(), _RedisClusterSlots_emit = new WeakMap(), _RedisClusterSlots_isOpen = new WeakMap(), _RedisClusterSlots_runningRediscoverPromise = new WeakMap(), _RedisClusterSlots_randomNodeIterator = new WeakMap(), _RedisClusterSlots_instances = new WeakSet(), _RedisClusterSlots_discoverWithRootNodes = async function _RedisClusterSlots_discoverWithRootNodes() {
	    let start = Math.floor(Math.random() * __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length);
	    for (let i = start; i < __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length; i++) {
	        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i]))
	            return;
	    }
	    for (let i = 0; i < start; i++) {
	        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i]))
	            return;
	    }
	    throw new errors_1.RootNodesUnavailableError();
	}, _RedisClusterSlots_resetSlots = function _RedisClusterSlots_resetSlots() {
	    this.slots = new Array(__classPrivateFieldGet(_a, _a, "f", _RedisClusterSlots_SLOTS));
	    this.shards = [];
	    this.masters = [];
	    this.replicas = [];
	    __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, undefined, "f");
	}, _RedisClusterSlots_discover = async function _RedisClusterSlots_discover(rootNode) {
	    const addressesInUse = new Set();
	    try {
	        const shards = await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getShards).call(this, rootNode), promises = [], eagerConnect = __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").minimizeConnections !== true;
	        __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
	        for (const { from, to, master, replicas } of shards) {
	            const shard = {
	                master: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, master, false, eagerConnect, addressesInUse, promises)
	            };
	            if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").useReplicas) {
	                shard.replicas = replicas.map(replica => __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, replica, true, eagerConnect, addressesInUse, promises));
	            }
	            this.shards.push(shard);
	            for (let i = from; i <= to; i++) {
	                this.slots[i] = shard;
	            }
	        }
	        if (this.pubSubNode && !addressesInUse.has(this.pubSubNode.address)) {
	            if (util_1.types.isPromise(this.pubSubNode.client)) {
	                promises.push(this.pubSubNode.client.then(client => client.disconnect()));
	                this.pubSubNode = undefined;
	            }
	            else {
	                promises.push(this.pubSubNode.client.disconnect());
	                const channelsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.CHANNELS), patternsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.PATTERNS);
	                if (channelsListeners.size || patternsListeners.size) {
	                    promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this, {
	                        [pub_sub_1.PubSubType.CHANNELS]: channelsListeners,
	                        [pub_sub_1.PubSubType.PATTERNS]: patternsListeners
	                    }));
	                }
	            }
	        }
	        for (const [address, node] of this.nodeByAddress.entries()) {
	            if (addressesInUse.has(address))
	                continue;
	            if (node.client) {
	                promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, node.client, client => client.disconnect()));
	            }
	            const { pubSubClient } = node;
	            if (pubSubClient) {
	                promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, pubSubClient, client => client.disconnect()));
	            }
	            this.nodeByAddress.delete(address);
	        }
	        await Promise.all(promises);
	        return true;
	    }
	    catch (err) {
	        __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err);
	        return false;
	    }
	}, _RedisClusterSlots_getShards = async function _RedisClusterSlots_getShards(rootNode) {
	    const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, rootNode, true));
	    client.on('error', err => __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err));
	    await client.connect();
	    try {
	        // using `CLUSTER SLOTS` and not `CLUSTER SHARDS` to support older versions
	        return await client.clusterSlots();
	    }
	    finally {
	        await client.disconnect();
	    }
	}, _RedisClusterSlots_getNodeAddress = function _RedisClusterSlots_getNodeAddress(address) {
	    switch (typeof __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap) {
	        case 'object':
	            return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap[address];
	        case 'function':
	            return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap(address);
	    }
	}, _RedisClusterSlots_clientOptionsDefaults = function _RedisClusterSlots_clientOptionsDefaults(options, disableReconnect) {
	    let result;
	    if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults) {
	        let socket;
	        if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket) {
	            socket = {
	                ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket,
	                ...options?.socket
	            };
	        }
	        else {
	            socket = options?.socket;
	        }
	        result = {
	            ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults,
	            ...options,
	            socket
	        };
	    }
	    else {
	        result = options;
	    }
	    if (disableReconnect) {
	        result ?? (result = {});
	        result.socket ?? (result.socket = {});
	        result.socket.reconnectStrategy = false;
	    }
	    return result;
	}, _RedisClusterSlots_initiateSlotNode = function _RedisClusterSlots_initiateSlotNode({ id, ip, port }, readonly, eagerConnent, addressesInUse, promises) {
	    const address = `${ip}:${port}`;
	    addressesInUse.add(address);
	    let node = this.nodeByAddress.get(address);
	    if (!node) {
	        node = {
	            id,
	            host: ip,
	            port,
	            address,
	            readonly,
	            client: undefined
	        };
	        if (eagerConnent) {
	            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node));
	        }
	        this.nodeByAddress.set(address, node);
	    }
	    (readonly ? this.replicas : this.masters).push(node);
	    return node;
	}, _RedisClusterSlots_createClient = async function _RedisClusterSlots_createClient(node, readonly = node.readonly) {
	    const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, {
	        socket: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, node.address) ?? {
	            host: node.host,
	            port: node.port
	        },
	        readonly
	    }));
	    client.on('error', err => __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err));
	    await client.connect();
	    return client;
	}, _RedisClusterSlots_createNodeClient = function _RedisClusterSlots_createNodeClient(node) {
	    const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node)
	        .then(client => {
	        node.client = client;
	        return client;
	    })
	        .catch(err => {
	        node.client = undefined;
	        throw err;
	    });
	    node.client = promise;
	    return promise;
	}, _RedisClusterSlots_rediscover = async function _RedisClusterSlots_rediscover(startWith) {
	    if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, startWith.options))
	        return;
	    return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
	}, _RedisClusterSlots_destroy = async function _RedisClusterSlots_destroy(fn) {
	    __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
	    const promises = [];
	    for (const { master, replicas } of this.shards) {
	        if (master.client) {
	            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.client, fn));
	        }
	        if (master.pubSubClient) {
	            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.pubSubClient, fn));
	        }
	        if (replicas) {
	            for (const { client } of replicas) {
	                if (client) {
	                    promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, client, fn));
	                }
	            }
	        }
	    }
	    if (this.pubSubNode) {
	        promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, this.pubSubNode.client, fn));
	        this.pubSubNode = undefined;
	    }
	    __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
	    this.nodeByAddress.clear();
	    await Promise.allSettled(promises);
	}, _RedisClusterSlots_execOnNodeClient = function _RedisClusterSlots_execOnNodeClient(client, fn) {
	    return util_1.types.isPromise(client) ?
	        client.then(fn) :
	        fn(client);
	}, _RedisClusterSlots_iterateAllNodes = function* _RedisClusterSlots_iterateAllNodes() {
	    let i = Math.floor(Math.random() * (this.masters.length + this.replicas.length));
	    if (i < this.masters.length) {
	        do {
	            yield this.masters[i];
	        } while (++i < this.masters.length);
	        for (const replica of this.replicas) {
	            yield replica;
	        }
	    }
	    else {
	        i -= this.masters.length;
	        do {
	            yield this.replicas[i];
	        } while (++i < this.replicas.length);
	    }
	    while (true) {
	        for (const master of this.masters) {
	            yield master;
	        }
	        for (const replica of this.replicas) {
	            yield replica;
	        }
	    }
	}, _RedisClusterSlots_slotNodesIterator = function* _RedisClusterSlots_slotNodesIterator(slot) {
	    let i = Math.floor(Math.random() * (1 + slot.replicas.length));
	    if (i < slot.replicas.length) {
	        do {
	            yield slot.replicas[i];
	        } while (++i < slot.replicas.length);
	    }
	    while (true) {
	        yield slot.master;
	        for (const replica of slot.replicas) {
	            yield replica;
	        }
	    }
	}, _RedisClusterSlots_initiatePubSubClient = async function _RedisClusterSlots_initiatePubSubClient(toResubscribe) {
	    const index = Math.floor(Math.random() * (this.masters.length + this.replicas.length)), node = index < this.masters.length ?
	        this.masters[index] :
	        this.replicas[index - this.masters.length];
	    this.pubSubNode = {
	        address: node.address,
	        client: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node, true)
	            .then(async (client) => {
	            if (toResubscribe) {
	                await Promise.all([
	                    client.extendPubSubListeners(pub_sub_1.PubSubType.CHANNELS, toResubscribe[pub_sub_1.PubSubType.CHANNELS]),
	                    client.extendPubSubListeners(pub_sub_1.PubSubType.PATTERNS, toResubscribe[pub_sub_1.PubSubType.PATTERNS])
	                ]);
	            }
	            this.pubSubNode.client = client;
	            return client;
	        })
	            .catch(err => {
	            this.pubSubNode = undefined;
	            throw err;
	        })
	    };
	    return this.pubSubNode.client;
	}, _RedisClusterSlots_initiateShardedPubSubClient = function _RedisClusterSlots_initiateShardedPubSubClient(master) {
	    const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, master, true)
	        .then(client => {
	        client.on('server-sunsubscribe', async (channel, listeners) => {
	            try {
	                await this.rediscover(client);
	                const redirectTo = await this.getShardedPubSubClient(channel);
	                redirectTo.extendPubSubChannelListeners(pub_sub_1.PubSubType.SHARDED, channel, listeners);
	            }
	            catch (err) {
	                __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'sharded-shannel-moved-error', err, channel, listeners);
	            }
	        });
	        master.pubSubClient = client;
	        return client;
	    })
	        .catch(err => {
	        master.pubSubClient = undefined;
	        throw err;
	    });
	    master.pubSubClient = promise;
	    return promise;
	};
	_RedisClusterSlots_SLOTS = { value: 16384 };
	clusterSlots.default = RedisClusterSlots;
	return clusterSlots;
}

var multiCommand = {};

var hasRequiredMultiCommand;

function requireMultiCommand () {
	if (hasRequiredMultiCommand) return multiCommand;
	hasRequiredMultiCommand = 1;
	var __classPrivateFieldSet = (multiCommand && multiCommand.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var __classPrivateFieldGet = (multiCommand && multiCommand.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var _RedisClusterMultiCommand_multi, _RedisClusterMultiCommand_executor, _RedisClusterMultiCommand_firstKey;
	Object.defineProperty(multiCommand, "__esModule", { value: true });
	const commands_1 = requireCommands$6();
	const multi_command_1 = requireMultiCommand$2();
	const commander_1 = requireCommander();
	const _1 = requireCluster();
	class RedisClusterMultiCommand {
	    static extend(extensions) {
	        return (0, commander_1.attachExtensions)({
	            BaseClass: RedisClusterMultiCommand,
	            modulesExecutor: RedisClusterMultiCommand.prototype.commandsExecutor,
	            modules: extensions?.modules,
	            functionsExecutor: RedisClusterMultiCommand.prototype.functionsExecutor,
	            functions: extensions?.functions,
	            scriptsExecutor: RedisClusterMultiCommand.prototype.scriptsExecutor,
	            scripts: extensions?.scripts
	        });
	    }
	    constructor(executor, firstKey) {
	        _RedisClusterMultiCommand_multi.set(this, new multi_command_1.default());
	        _RedisClusterMultiCommand_executor.set(this, void 0);
	        _RedisClusterMultiCommand_firstKey.set(this, void 0);
	        Object.defineProperty(this, "EXEC", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.exec
	        });
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_executor, executor, "f");
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
	    }
	    commandsExecutor(command, args) {
	        const transformedArguments = command.transformArguments(...args);
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(command, args, transformedArguments), "f");
	        return this.addCommand(undefined, transformedArguments, command.transformReply);
	    }
	    addCommand(firstKey, args, transformReply) {
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? firstKey, "f");
	        __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addCommand(args, transformReply);
	        return this;
	    }
	    functionsExecutor(fn, args, name) {
	        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addFunction(name, fn, args);
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(fn, args, transformedArguments), "f");
	        return this;
	    }
	    scriptsExecutor(script, args) {
	        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addScript(script, args);
	        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(script, args, transformedArguments), "f");
	        return this;
	    }
	    async exec(execAsPipeline = false) {
	        if (execAsPipeline) {
	            return this.execAsPipeline();
	        }
	        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f"), multi_command_1.default.generateChainId()));
	    }
	    async execAsPipeline() {
	        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")));
	    }
	}
	_RedisClusterMultiCommand_multi = new WeakMap(), _RedisClusterMultiCommand_executor = new WeakMap(), _RedisClusterMultiCommand_firstKey = new WeakMap();
	multiCommand.default = RedisClusterMultiCommand;
	(0, commander_1.attachCommands)({
	    BaseClass: RedisClusterMultiCommand,
	    commands: commands_1.default,
	    executor: RedisClusterMultiCommand.prototype.commandsExecutor
	});
	return multiCommand;
}

var hasRequiredCluster;

function requireCluster () {
	if (hasRequiredCluster) return cluster;
	hasRequiredCluster = 1;
	var __classPrivateFieldGet = (cluster && cluster.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var __classPrivateFieldSet = (cluster && cluster.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var _RedisCluster_instances, _RedisCluster_options, _RedisCluster_slots, _RedisCluster_Multi, _RedisCluster_execute;
	Object.defineProperty(cluster, "__esModule", { value: true });
	const commands_1 = requireCommands$6();
	const cluster_slots_1 = requireClusterSlots();
	const commander_1 = requireCommander();
	const events_1 = require$$0;
	const multi_command_1 = requireMultiCommand();
	const errors_1 = requireErrors$1();
	class RedisCluster extends events_1.EventEmitter {
	    static extractFirstKey(command, originalArgs, redisArgs) {
	        if (command.FIRST_KEY_INDEX === undefined) {
	            return undefined;
	        }
	        else if (typeof command.FIRST_KEY_INDEX === 'number') {
	            return redisArgs[command.FIRST_KEY_INDEX];
	        }
	        return command.FIRST_KEY_INDEX(...originalArgs);
	    }
	    static create(options) {
	        return new ((0, commander_1.attachExtensions)({
	            BaseClass: RedisCluster,
	            modulesExecutor: RedisCluster.prototype.commandsExecutor,
	            modules: options?.modules,
	            functionsExecutor: RedisCluster.prototype.functionsExecutor,
	            functions: options?.functions,
	            scriptsExecutor: RedisCluster.prototype.scriptsExecutor,
	            scripts: options?.scripts
	        }))(options);
	    }
	    get slots() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").slots;
	    }
	    get shards() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").shards;
	    }
	    get masters() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").masters;
	    }
	    get replicas() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").replicas;
	    }
	    get nodeByAddress() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeByAddress;
	    }
	    get pubSubNode() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").pubSubNode;
	    }
	    get isOpen() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").isOpen;
	    }
	    constructor(options) {
	        super();
	        _RedisCluster_instances.add(this);
	        _RedisCluster_options.set(this, void 0);
	        _RedisCluster_slots.set(this, void 0);
	        _RedisCluster_Multi.set(this, void 0);
	        Object.defineProperty(this, "multi", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.MULTI
	        });
	        Object.defineProperty(this, "subscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SUBSCRIBE
	        });
	        Object.defineProperty(this, "unsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.UNSUBSCRIBE
	        });
	        Object.defineProperty(this, "pSubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.PSUBSCRIBE
	        });
	        Object.defineProperty(this, "pUnsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.PUNSUBSCRIBE
	        });
	        Object.defineProperty(this, "sSubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SSUBSCRIBE
	        });
	        Object.defineProperty(this, "sUnsubscribe", {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: this.SUNSUBSCRIBE
	        });
	        __classPrivateFieldSet(this, _RedisCluster_options, options, "f");
	        __classPrivateFieldSet(this, _RedisCluster_slots, new cluster_slots_1.default(options, this.emit.bind(this)), "f");
	        __classPrivateFieldSet(this, _RedisCluster_Multi, multi_command_1.default.extend(options), "f");
	    }
	    duplicate(overrides) {
	        return new (Object.getPrototypeOf(this).constructor)({
	            ...__classPrivateFieldGet(this, _RedisCluster_options, "f"),
	            ...overrides
	        });
	    }
	    connect() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").connect();
	    }
	    async commandsExecutor(command, args) {
	        const { jsArgs, args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
	        return (0, commander_1.transformCommandReply)(command, await this.sendCommand(RedisCluster.extractFirstKey(command, jsArgs, redisArgs), command.IS_READ_ONLY, redisArgs, options), redisArgs.preserve);
	    }
	    async sendCommand(firstKey, isReadonly, args, options) {
	        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, isReadonly, client => client.sendCommand(args, options));
	    }
	    async functionsExecutor(fn, args, name) {
	        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
	        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, args, redisArgs, options), redisArgs.preserve);
	    }
	    async executeFunction(name, fn, originalArgs, redisArgs, options) {
	        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(fn, originalArgs, redisArgs), fn.IS_READ_ONLY, client => client.executeFunction(name, fn, redisArgs, options));
	    }
	    async scriptsExecutor(script, args) {
	        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
	        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, args, redisArgs, options), redisArgs.preserve);
	    }
	    async executeScript(script, originalArgs, redisArgs, options) {
	        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(script, originalArgs, redisArgs), script.IS_READ_ONLY, client => client.executeScript(script, redisArgs, options));
	    }
	    MULTI(routing) {
	        return new (__classPrivateFieldGet(this, _RedisCluster_Multi, "f"))((commands, firstKey, chainId) => {
	            return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, false, client => client.multiExecutor(commands, undefined, chainId));
	        }, routing);
	    }
	    async SUBSCRIBE(channels, listener, bufferMode) {
	        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient())
	            .SUBSCRIBE(channels, listener, bufferMode);
	    }
	    async UNSUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand(client => client.UNSUBSCRIBE(channels, listener, bufferMode));
	    }
	    async PSUBSCRIBE(patterns, listener, bufferMode) {
	        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient())
	            .PSUBSCRIBE(patterns, listener, bufferMode);
	    }
	    async PUNSUBSCRIBE(patterns, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand(client => client.PUNSUBSCRIBE(patterns, listener, bufferMode));
	    }
	    async SSUBSCRIBE(channels, listener, bufferMode) {
	        const maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections ?? 16, firstChannel = Array.isArray(channels) ? channels[0] : channels;
	        let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
	        for (let i = 0;; i++) {
	            try {
	                return await client.SSUBSCRIBE(channels, listener, bufferMode);
	            }
	            catch (err) {
	                if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
	                    throw err;
	                }
	                if (err.message.startsWith('MOVED')) {
	                    await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
	                    client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
	                    continue;
	                }
	                throw err;
	            }
	        }
	    }
	    SUNSUBSCRIBE(channels, listener, bufferMode) {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeShardedUnsubscribeCommand(Array.isArray(channels) ? channels[0] : channels, client => client.SUNSUBSCRIBE(channels, listener, bufferMode));
	    }
	    quit() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").quit();
	    }
	    disconnect() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").disconnect();
	    }
	    nodeClient(node) {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeClient(node);
	    }
	    getRandomNode() {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getRandomNode();
	    }
	    getSlotRandomNode(slot) {
	        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getSlotRandomNode(slot);
	    }
	    /**
	     * @deprecated use `.masters` instead
	     */
	    getMasters() {
	        return this.masters;
	    }
	    /**
	     * @deprecated use `.slots[<SLOT>]` instead
	     */
	    getSlotMaster(slot) {
	        return this.slots[slot].master;
	    }
	}
	_RedisCluster_options = new WeakMap(), _RedisCluster_slots = new WeakMap(), _RedisCluster_Multi = new WeakMap(), _RedisCluster_instances = new WeakSet(), _RedisCluster_execute = async function _RedisCluster_execute(firstKey, isReadonly, executor) {
	    const maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections ?? 16;
	    let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
	    for (let i = 0;; i++) {
	        try {
	            return await executor(client);
	        }
	        catch (err) {
	            if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
	                throw err;
	            }
	            if (err.message.startsWith('ASK')) {
	                const address = err.message.substring(err.message.lastIndexOf(' ') + 1);
	                let redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
	                if (!redirectTo) {
	                    await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
	                    redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
	                }
	                if (!redirectTo) {
	                    throw new Error(`Cannot find node ${address}`);
	                }
	                await redirectTo.asking();
	                client = redirectTo;
	                continue;
	            }
	            else if (err.message.startsWith('MOVED')) {
	                await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
	                client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
	                continue;
	            }
	            throw err;
	        }
	    }
	};
	cluster.default = RedisCluster;
	(0, commander_1.attachCommands)({
	    BaseClass: RedisCluster,
	    commands: commands_1.default,
	    executor: RedisCluster.prototype.commandsExecutor
	});
	return cluster;
}

var luaScript = {};

var hasRequiredLuaScript;

function requireLuaScript () {
	if (hasRequiredLuaScript) return luaScript;
	hasRequiredLuaScript = 1;
	Object.defineProperty(luaScript, "__esModule", { value: true });
	luaScript.scriptSha1 = luaScript.defineScript = void 0;
	const crypto_1 = require$$0$2;
	function defineScript(script) {
	    return {
	        ...script,
	        SHA1: scriptSha1(script.SCRIPT)
	    };
	}
	luaScript.defineScript = defineScript;
	function scriptSha1(script) {
	    return (0, crypto_1.createHash)('sha1').update(script).digest('hex');
	}
	luaScript.scriptSha1 = scriptSha1;
	return luaScript;
}

var hasRequiredDist$6;

function requireDist$6 () {
	if (hasRequiredDist$6) return dist$5;
	hasRequiredDist$6 = 1;
	(function (exports) {
		var __createBinding = (dist$5 && dist$5.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (dist$5 && dist$5.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.RedisFlushModes = exports.GeoReplyWith = exports.defineScript = exports.createCluster = exports.commandOptions = exports.createClient = void 0;
		const client_1 = requireClient();
		const cluster_1 = requireCluster();
		exports.createClient = client_1.default.create;
		exports.commandOptions = client_1.default.commandOptions;
		exports.createCluster = cluster_1.default.create;
		var lua_script_1 = requireLuaScript();
		Object.defineProperty(exports, "defineScript", { enumerable: true, get: function () { return lua_script_1.defineScript; } });
		__exportStar(requireErrors$1(), exports);
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "GeoReplyWith", { enumerable: true, get: function () { return generic_transformers_1.GeoReplyWith; } });
		var FLUSHALL_1 = requireFLUSHALL();
		Object.defineProperty(exports, "RedisFlushModes", { enumerable: true, get: function () { return FLUSHALL_1.RedisFlushModes; } }); 
	} (dist$5));
	return dist$5;
}

var dist$4 = {};

var commands$4 = {};

var bloom = {};

var ADD$4 = {};

var hasRequiredADD$4;

function requireADD$4 () {
	if (hasRequiredADD$4) return ADD$4;
	hasRequiredADD$4 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, item) {
		    return ['BF.ADD', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (ADD$4));
	return ADD$4;
}

var CARD = {};

var hasRequiredCARD;

function requireCARD () {
	if (hasRequiredCARD) return CARD;
	hasRequiredCARD = 1;
	Object.defineProperty(CARD, "__esModule", { value: true });
	CARD.transformArguments = CARD.IS_READ_ONLY = CARD.FIRST_KEY_INDEX = void 0;
	CARD.FIRST_KEY_INDEX = 1;
	CARD.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['BF.CARD', key];
	}
	CARD.transformArguments = transformArguments;
	return CARD;
}

var EXISTS$1 = {};

var hasRequiredEXISTS$1;

function requireEXISTS$1 () {
	if (hasRequiredEXISTS$1) return EXISTS$1;
	hasRequiredEXISTS$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, item) {
		    return ['BF.EXISTS', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (EXISTS$1));
	return EXISTS$1;
}

var INFO$6 = {};

var hasRequiredINFO$6;

function requireINFO$6 () {
	if (hasRequiredINFO$6) return INFO$6;
	hasRequiredINFO$6 = 1;
	Object.defineProperty(INFO$6, "__esModule", { value: true });
	INFO$6.transformReply = INFO$6.transformArguments = INFO$6.IS_READ_ONLY = INFO$6.FIRST_KEY_INDEX = void 0;
	INFO$6.FIRST_KEY_INDEX = 1;
	INFO$6.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['BF.INFO', key];
	}
	INFO$6.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        capacity: reply[1],
	        size: reply[3],
	        numberOfFilters: reply[5],
	        numberOfInsertedItems: reply[7],
	        expansionRate: reply[9]
	    };
	}
	INFO$6.transformReply = transformReply;
	return INFO$6;
}

var INSERT$1 = {};

var hasRequiredINSERT$1;

function requireINSERT$1 () {
	if (hasRequiredINSERT$1) return INSERT$1;
	hasRequiredINSERT$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, items, options) {
		    const args = ['BF.INSERT', key];
		    if (options?.CAPACITY) {
		        args.push('CAPACITY', options.CAPACITY.toString());
		    }
		    if (options?.ERROR) {
		        args.push('ERROR', options.ERROR.toString());
		    }
		    if (options?.EXPANSION) {
		        args.push('EXPANSION', options.EXPANSION.toString());
		    }
		    if (options?.NOCREATE) {
		        args.push('NOCREATE');
		    }
		    if (options?.NONSCALING) {
		        args.push('NONSCALING');
		    }
		    args.push('ITEMS');
		    return (0, generic_transformers_1.pushVerdictArguments)(args, items);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_2 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_2.transformBooleanArrayReply; } }); 
	} (INSERT$1));
	return INSERT$1;
}

var LOADCHUNK$1 = {};

var hasRequiredLOADCHUNK$1;

function requireLOADCHUNK$1 () {
	if (hasRequiredLOADCHUNK$1) return LOADCHUNK$1;
	hasRequiredLOADCHUNK$1 = 1;
	Object.defineProperty(LOADCHUNK$1, "__esModule", { value: true });
	LOADCHUNK$1.transformArguments = LOADCHUNK$1.FIRST_KEY_INDEX = void 0;
	LOADCHUNK$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, iteretor, chunk) {
	    return ['BF.LOADCHUNK', key, iteretor.toString(), chunk];
	}
	LOADCHUNK$1.transformArguments = transformArguments;
	return LOADCHUNK$1;
}

var MADD$1 = {};

var hasRequiredMADD$1;

function requireMADD$1 () {
	if (hasRequiredMADD$1) return MADD$1;
	hasRequiredMADD$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, items) {
		    return ['BF.MADD', key, ...items];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanArrayReply; } }); 
	} (MADD$1));
	return MADD$1;
}

var MEXISTS = {};

var hasRequiredMEXISTS;

function requireMEXISTS () {
	if (hasRequiredMEXISTS) return MEXISTS;
	hasRequiredMEXISTS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, items) {
		    return ['BF.MEXISTS', key, ...items];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanArrayReply; } }); 
	} (MEXISTS));
	return MEXISTS;
}

var RESERVE$2 = {};

var hasRequiredRESERVE$2;

function requireRESERVE$2 () {
	if (hasRequiredRESERVE$2) return RESERVE$2;
	hasRequiredRESERVE$2 = 1;
	Object.defineProperty(RESERVE$2, "__esModule", { value: true });
	RESERVE$2.transformArguments = RESERVE$2.FIRST_KEY_INDEX = void 0;
	RESERVE$2.FIRST_KEY_INDEX = 1;
	function transformArguments(key, errorRate, capacity, options) {
	    const args = ['BF.RESERVE', key, errorRate.toString(), capacity.toString()];
	    if (options?.EXPANSION) {
	        args.push('EXPANSION', options.EXPANSION.toString());
	    }
	    if (options?.NONSCALING) {
	        args.push('NONSCALING');
	    }
	    return args;
	}
	RESERVE$2.transformArguments = transformArguments;
	return RESERVE$2;
}

var SCANDUMP$1 = {};

var hasRequiredSCANDUMP$1;

function requireSCANDUMP$1 () {
	if (hasRequiredSCANDUMP$1) return SCANDUMP$1;
	hasRequiredSCANDUMP$1 = 1;
	Object.defineProperty(SCANDUMP$1, "__esModule", { value: true });
	SCANDUMP$1.transformReply = SCANDUMP$1.transformArguments = SCANDUMP$1.IS_READ_ONLY = SCANDUMP$1.FIRST_KEY_INDEX = void 0;
	SCANDUMP$1.FIRST_KEY_INDEX = 1;
	SCANDUMP$1.IS_READ_ONLY = true;
	function transformArguments(key, iterator) {
	    return ['BF.SCANDUMP', key, iterator.toString()];
	}
	SCANDUMP$1.transformArguments = transformArguments;
	function transformReply([iterator, chunk]) {
	    return {
	        iterator,
	        chunk
	    };
	}
	SCANDUMP$1.transformReply = transformReply;
	return SCANDUMP$1;
}

var hasRequiredBloom;

function requireBloom () {
	if (hasRequiredBloom) return bloom;
	hasRequiredBloom = 1;
	Object.defineProperty(bloom, "__esModule", { value: true });
	const ADD = requireADD$4();
	const CARD = requireCARD();
	const EXISTS = requireEXISTS$1();
	const INFO = requireINFO$6();
	const INSERT = requireINSERT$1();
	const LOADCHUNK = requireLOADCHUNK$1();
	const MADD = requireMADD$1();
	const MEXISTS = requireMEXISTS();
	const RESERVE = requireRESERVE$2();
	const SCANDUMP = requireSCANDUMP$1();
	bloom.default = {
	    ADD,
	    add: ADD,
	    CARD,
	    card: CARD,
	    EXISTS,
	    exists: EXISTS,
	    INFO,
	    info: INFO,
	    INSERT,
	    insert: INSERT,
	    LOADCHUNK,
	    loadChunk: LOADCHUNK,
	    MADD,
	    mAdd: MADD,
	    MEXISTS,
	    mExists: MEXISTS,
	    RESERVE,
	    reserve: RESERVE,
	    SCANDUMP,
	    scanDump: SCANDUMP
	};
	return bloom;
}

var countMinSketch = {};

var INCRBY$2 = {};

var hasRequiredINCRBY$2;

function requireINCRBY$2 () {
	if (hasRequiredINCRBY$2) return INCRBY$2;
	hasRequiredINCRBY$2 = 1;
	Object.defineProperty(INCRBY$2, "__esModule", { value: true });
	INCRBY$2.transformArguments = INCRBY$2.FIRST_KEY_INDEX = void 0;
	INCRBY$2.FIRST_KEY_INDEX = 1;
	function transformArguments(key, items) {
	    const args = ['CMS.INCRBY', key];
	    if (Array.isArray(items)) {
	        for (const item of items) {
	            pushIncrByItem(args, item);
	        }
	    }
	    else {
	        pushIncrByItem(args, items);
	    }
	    return args;
	}
	INCRBY$2.transformArguments = transformArguments;
	function pushIncrByItem(args, { item, incrementBy }) {
	    args.push(item, incrementBy.toString());
	}
	return INCRBY$2;
}

var INFO$5 = {};

var hasRequiredINFO$5;

function requireINFO$5 () {
	if (hasRequiredINFO$5) return INFO$5;
	hasRequiredINFO$5 = 1;
	Object.defineProperty(INFO$5, "__esModule", { value: true });
	INFO$5.transformReply = INFO$5.transformArguments = INFO$5.IS_READ_ONLY = INFO$5.FIRST_KEY_INDEX = void 0;
	INFO$5.FIRST_KEY_INDEX = 1;
	INFO$5.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['CMS.INFO', key];
	}
	INFO$5.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        width: reply[1],
	        depth: reply[3],
	        count: reply[5]
	    };
	}
	INFO$5.transformReply = transformReply;
	return INFO$5;
}

var INITBYDIM = {};

var hasRequiredINITBYDIM;

function requireINITBYDIM () {
	if (hasRequiredINITBYDIM) return INITBYDIM;
	hasRequiredINITBYDIM = 1;
	Object.defineProperty(INITBYDIM, "__esModule", { value: true });
	INITBYDIM.transformArguments = INITBYDIM.FIRST_KEY_INDEX = void 0;
	INITBYDIM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, width, depth) {
	    return ['CMS.INITBYDIM', key, width.toString(), depth.toString()];
	}
	INITBYDIM.transformArguments = transformArguments;
	return INITBYDIM;
}

var INITBYPROB = {};

var hasRequiredINITBYPROB;

function requireINITBYPROB () {
	if (hasRequiredINITBYPROB) return INITBYPROB;
	hasRequiredINITBYPROB = 1;
	Object.defineProperty(INITBYPROB, "__esModule", { value: true });
	INITBYPROB.transformArguments = INITBYPROB.FIRST_KEY_INDEX = void 0;
	INITBYPROB.FIRST_KEY_INDEX = 1;
	function transformArguments(key, error, probability) {
	    return ['CMS.INITBYPROB', key, error.toString(), probability.toString()];
	}
	INITBYPROB.transformArguments = transformArguments;
	return INITBYPROB;
}

var MERGE$2 = {};

var hasRequiredMERGE$2;

function requireMERGE$2 () {
	if (hasRequiredMERGE$2) return MERGE$2;
	hasRequiredMERGE$2 = 1;
	Object.defineProperty(MERGE$2, "__esModule", { value: true });
	MERGE$2.transformArguments = MERGE$2.FIRST_KEY_INDEX = void 0;
	MERGE$2.FIRST_KEY_INDEX = 1;
	function transformArguments(dest, src) {
	    const args = [
	        'CMS.MERGE',
	        dest,
	        src.length.toString()
	    ];
	    if (isStringSketches(src)) {
	        args.push(...src);
	    }
	    else {
	        for (const sketch of src) {
	            args.push(sketch.name);
	        }
	        args.push('WEIGHTS');
	        for (const sketch of src) {
	            args.push(sketch.weight.toString());
	        }
	    }
	    return args;
	}
	MERGE$2.transformArguments = transformArguments;
	function isStringSketches(src) {
	    return typeof src[0] === 'string';
	}
	return MERGE$2;
}

var QUERY$2 = {};

var hasRequiredQUERY$2;

function requireQUERY$2 () {
	if (hasRequiredQUERY$2) return QUERY$2;
	hasRequiredQUERY$2 = 1;
	Object.defineProperty(QUERY$2, "__esModule", { value: true });
	QUERY$2.transformArguments = QUERY$2.IS_READ_ONLY = QUERY$2.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	QUERY$2.FIRST_KEY_INDEX = 1;
	QUERY$2.IS_READ_ONLY = true;
	function transformArguments(key, items) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['CMS.QUERY', key], items);
	}
	QUERY$2.transformArguments = transformArguments;
	return QUERY$2;
}

var hasRequiredCountMinSketch;

function requireCountMinSketch () {
	if (hasRequiredCountMinSketch) return countMinSketch;
	hasRequiredCountMinSketch = 1;
	Object.defineProperty(countMinSketch, "__esModule", { value: true });
	const INCRBY = requireINCRBY$2();
	const INFO = requireINFO$5();
	const INITBYDIM = requireINITBYDIM();
	const INITBYPROB = requireINITBYPROB();
	const MERGE = requireMERGE$2();
	const QUERY = requireQUERY$2();
	countMinSketch.default = {
	    INCRBY,
	    incrBy: INCRBY,
	    INFO,
	    info: INFO,
	    INITBYDIM,
	    initByDim: INITBYDIM,
	    INITBYPROB,
	    initByProb: INITBYPROB,
	    MERGE,
	    merge: MERGE,
	    QUERY,
	    query: QUERY
	};
	return countMinSketch;
}

var cuckoo = {};

var ADD$3 = {};

var hasRequiredADD$3;

function requireADD$3 () {
	if (hasRequiredADD$3) return ADD$3;
	hasRequiredADD$3 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, item) {
		    return ['CF.ADD', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (ADD$3));
	return ADD$3;
}

var ADDNX = {};

var hasRequiredADDNX;

function requireADDNX () {
	if (hasRequiredADDNX) return ADDNX;
	hasRequiredADDNX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, item) {
		    return ['CF.ADDNX', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (ADDNX));
	return ADDNX;
}

var COUNT$1 = {};

var hasRequiredCOUNT$1;

function requireCOUNT$1 () {
	if (hasRequiredCOUNT$1) return COUNT$1;
	hasRequiredCOUNT$1 = 1;
	Object.defineProperty(COUNT$1, "__esModule", { value: true });
	COUNT$1.transformArguments = COUNT$1.FIRST_KEY_INDEX = void 0;
	COUNT$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, item) {
	    return ['CF.COUNT', key, item];
	}
	COUNT$1.transformArguments = transformArguments;
	return COUNT$1;
}

var DEL$2 = {};

var hasRequiredDEL$2;

function requireDEL$2 () {
	if (hasRequiredDEL$2) return DEL$2;
	hasRequiredDEL$2 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, item) {
		    return ['CF.DEL', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (DEL$2));
	return DEL$2;
}

var EXISTS = {};

var hasRequiredEXISTS;

function requireEXISTS () {
	if (hasRequiredEXISTS) return EXISTS;
	hasRequiredEXISTS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, item) {
		    return ['CF.EXISTS', key, item];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (EXISTS));
	return EXISTS;
}

var INFO$4 = {};

var hasRequiredINFO$4;

function requireINFO$4 () {
	if (hasRequiredINFO$4) return INFO$4;
	hasRequiredINFO$4 = 1;
	Object.defineProperty(INFO$4, "__esModule", { value: true });
	INFO$4.transformReply = INFO$4.transformArguments = INFO$4.IS_READ_ONLY = INFO$4.FIRST_KEY_INDEX = void 0;
	INFO$4.FIRST_KEY_INDEX = 1;
	INFO$4.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['CF.INFO', key];
	}
	INFO$4.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        size: reply[1],
	        numberOfBuckets: reply[3],
	        numberOfFilters: reply[5],
	        numberOfInsertedItems: reply[7],
	        numberOfDeletedItems: reply[9],
	        bucketSize: reply[11],
	        expansionRate: reply[13],
	        maxIteration: reply[15]
	    };
	}
	INFO$4.transformReply = transformReply;
	return INFO$4;
}

var INSERT = {};

var hasRequiredINSERT;

function requireINSERT () {
	if (hasRequiredINSERT) return INSERT;
	hasRequiredINSERT = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const _1 = requireCuckoo();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, items, options) {
		    return (0, _1.pushInsertOptions)(['CF.INSERT', key], items, options);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanArrayReply; } }); 
	} (INSERT));
	return INSERT;
}

var INSERTNX = {};

var hasRequiredINSERTNX;

function requireINSERTNX () {
	if (hasRequiredINSERTNX) return INSERTNX;
	hasRequiredINSERTNX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		const _1 = requireCuckoo();
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, items, options) {
		    return (0, _1.pushInsertOptions)(['CF.INSERTNX', key], items, options);
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanArrayReply; } }); 
	} (INSERTNX));
	return INSERTNX;
}

var LOADCHUNK = {};

var hasRequiredLOADCHUNK;

function requireLOADCHUNK () {
	if (hasRequiredLOADCHUNK) return LOADCHUNK;
	hasRequiredLOADCHUNK = 1;
	Object.defineProperty(LOADCHUNK, "__esModule", { value: true });
	LOADCHUNK.transformArguments = LOADCHUNK.FIRST_KEY_INDEX = void 0;
	LOADCHUNK.FIRST_KEY_INDEX = 1;
	function transformArguments(key, iterator, chunk) {
	    return ['CF.LOADCHUNK', key, iterator.toString(), chunk];
	}
	LOADCHUNK.transformArguments = transformArguments;
	return LOADCHUNK;
}

var RESERVE$1 = {};

var hasRequiredRESERVE$1;

function requireRESERVE$1 () {
	if (hasRequiredRESERVE$1) return RESERVE$1;
	hasRequiredRESERVE$1 = 1;
	Object.defineProperty(RESERVE$1, "__esModule", { value: true });
	RESERVE$1.transformArguments = RESERVE$1.FIRST_KEY_INDEX = void 0;
	RESERVE$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, capacity, options) {
	    const args = ['CF.RESERVE', key, capacity.toString()];
	    if (options?.BUCKETSIZE) {
	        args.push('BUCKETSIZE', options.BUCKETSIZE.toString());
	    }
	    if (options?.MAXITERATIONS) {
	        args.push('MAXITERATIONS', options.MAXITERATIONS.toString());
	    }
	    if (options?.EXPANSION) {
	        args.push('EXPANSION', options.EXPANSION.toString());
	    }
	    return args;
	}
	RESERVE$1.transformArguments = transformArguments;
	return RESERVE$1;
}

var SCANDUMP = {};

var hasRequiredSCANDUMP;

function requireSCANDUMP () {
	if (hasRequiredSCANDUMP) return SCANDUMP;
	hasRequiredSCANDUMP = 1;
	Object.defineProperty(SCANDUMP, "__esModule", { value: true });
	SCANDUMP.transformReply = SCANDUMP.transformArguments = SCANDUMP.FIRST_KEY_INDEX = void 0;
	SCANDUMP.FIRST_KEY_INDEX = 1;
	function transformArguments(key, iterator) {
	    return ['CF.SCANDUMP', key, iterator.toString()];
	}
	SCANDUMP.transformArguments = transformArguments;
	function transformReply([iterator, chunk]) {
	    return {
	        iterator,
	        chunk
	    };
	}
	SCANDUMP.transformReply = transformReply;
	return SCANDUMP;
}

var hasRequiredCuckoo;

function requireCuckoo () {
	if (hasRequiredCuckoo) return cuckoo;
	hasRequiredCuckoo = 1;
	Object.defineProperty(cuckoo, "__esModule", { value: true });
	cuckoo.pushInsertOptions = void 0;
	const ADD = requireADD$3();
	const ADDNX = requireADDNX();
	const COUNT = requireCOUNT$1();
	const DEL = requireDEL$2();
	const EXISTS = requireEXISTS();
	const INFO = requireINFO$4();
	const INSERT = requireINSERT();
	const INSERTNX = requireINSERTNX();
	const LOADCHUNK = requireLOADCHUNK();
	const RESERVE = requireRESERVE$1();
	const SCANDUMP = requireSCANDUMP();
	const generic_transformers_1 = requireGenericTransformers();
	cuckoo.default = {
	    ADD,
	    add: ADD,
	    ADDNX,
	    addNX: ADDNX,
	    COUNT,
	    count: COUNT,
	    DEL,
	    del: DEL,
	    EXISTS,
	    exists: EXISTS,
	    INFO,
	    info: INFO,
	    INSERT,
	    insert: INSERT,
	    INSERTNX,
	    insertNX: INSERTNX,
	    LOADCHUNK,
	    loadChunk: LOADCHUNK,
	    RESERVE,
	    reserve: RESERVE,
	    SCANDUMP,
	    scanDump: SCANDUMP
	};
	function pushInsertOptions(args, items, options) {
	    if (options?.CAPACITY) {
	        args.push('CAPACITY');
	        args.push(options.CAPACITY.toString());
	    }
	    if (options?.NOCREATE) {
	        args.push('NOCREATE');
	    }
	    args.push('ITEMS');
	    return (0, generic_transformers_1.pushVerdictArguments)(args, items);
	}
	cuckoo.pushInsertOptions = pushInsertOptions;
	return cuckoo;
}

var tDigest = {};

var ADD$2 = {};

var hasRequiredADD$2;

function requireADD$2 () {
	if (hasRequiredADD$2) return ADD$2;
	hasRequiredADD$2 = 1;
	Object.defineProperty(ADD$2, "__esModule", { value: true });
	ADD$2.transformArguments = ADD$2.FIRST_KEY_INDEX = void 0;
	ADD$2.FIRST_KEY_INDEX = 1;
	function transformArguments(key, values) {
	    const args = ['TDIGEST.ADD', key];
	    for (const item of values) {
	        args.push(item.toString());
	    }
	    return args;
	}
	ADD$2.transformArguments = transformArguments;
	return ADD$2;
}

var BYRANK = {};

var hasRequiredBYRANK;

function requireBYRANK () {
	if (hasRequiredBYRANK) return BYRANK;
	hasRequiredBYRANK = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, ranks) {
		    const args = ['TDIGEST.BYRANK', key];
		    for (const rank of ranks) {
		        args.push(rank.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoublesReply; } }); 
	} (BYRANK));
	return BYRANK;
}

var BYREVRANK = {};

var hasRequiredBYREVRANK;

function requireBYREVRANK () {
	if (hasRequiredBYREVRANK) return BYREVRANK;
	hasRequiredBYREVRANK = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, ranks) {
		    const args = ['TDIGEST.BYREVRANK', key];
		    for (const rank of ranks) {
		        args.push(rank.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoublesReply; } }); 
	} (BYREVRANK));
	return BYREVRANK;
}

var CDF = {};

var hasRequiredCDF;

function requireCDF () {
	if (hasRequiredCDF) return CDF;
	hasRequiredCDF = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, values) {
		    const args = ['TDIGEST.CDF', key];
		    for (const item of values) {
		        args.push(item.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoublesReply; } }); 
	} (CDF));
	return CDF;
}

var CREATE$2 = {};

var hasRequiredCREATE$2;

function requireCREATE$2 () {
	if (hasRequiredCREATE$2) return CREATE$2;
	hasRequiredCREATE$2 = 1;
	Object.defineProperty(CREATE$2, "__esModule", { value: true });
	CREATE$2.transformArguments = CREATE$2.FIRST_KEY_INDEX = void 0;
	const _1 = requireTDigest();
	CREATE$2.FIRST_KEY_INDEX = 1;
	function transformArguments(key, options) {
	    return (0, _1.pushCompressionArgument)(['TDIGEST.CREATE', key], options);
	}
	CREATE$2.transformArguments = transformArguments;
	return CREATE$2;
}

var INFO$3 = {};

var hasRequiredINFO$3;

function requireINFO$3 () {
	if (hasRequiredINFO$3) return INFO$3;
	hasRequiredINFO$3 = 1;
	Object.defineProperty(INFO$3, "__esModule", { value: true });
	INFO$3.transformReply = INFO$3.transformArguments = INFO$3.IS_READ_ONLY = INFO$3.FIRST_KEY_INDEX = void 0;
	INFO$3.FIRST_KEY_INDEX = 1;
	INFO$3.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return [
	        'TDIGEST.INFO',
	        key
	    ];
	}
	INFO$3.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        comperssion: reply[1],
	        capacity: reply[3],
	        mergedNodes: reply[5],
	        unmergedNodes: reply[7],
	        mergedWeight: Number(reply[9]),
	        unmergedWeight: Number(reply[11]),
	        totalCompression: reply[13]
	    };
	}
	INFO$3.transformReply = transformReply;
	return INFO$3;
}

var MAX = {};

var hasRequiredMAX;

function requireMAX () {
	if (hasRequiredMAX) return MAX;
	hasRequiredMAX = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key) {
		    return [
		        'TDIGEST.MAX',
		        key
		    ];
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoubleReply; } }); 
	} (MAX));
	return MAX;
}

var MERGE$1 = {};

var hasRequiredMERGE$1;

function requireMERGE$1 () {
	if (hasRequiredMERGE$1) return MERGE$1;
	hasRequiredMERGE$1 = 1;
	Object.defineProperty(MERGE$1, "__esModule", { value: true });
	MERGE$1.transformArguments = MERGE$1.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	const _1 = requireTDigest();
	MERGE$1.FIRST_KEY_INDEX = 1;
	function transformArguments(destKey, srcKeys, options) {
	    const args = (0, generic_transformers_1.pushVerdictArgument)(['TDIGEST.MERGE', destKey], srcKeys);
	    (0, _1.pushCompressionArgument)(args, options);
	    if (options?.OVERRIDE) {
	        args.push('OVERRIDE');
	    }
	    return args;
	}
	MERGE$1.transformArguments = transformArguments;
	return MERGE$1;
}

var MIN = {};

var hasRequiredMIN;

function requireMIN () {
	if (hasRequiredMIN) return MIN;
	hasRequiredMIN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key) {
		    return [
		        'TDIGEST.MIN',
		        key
		    ];
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoubleReply; } }); 
	} (MIN));
	return MIN;
}

var QUANTILE = {};

var hasRequiredQUANTILE;

function requireQUANTILE () {
	if (hasRequiredQUANTILE) return QUANTILE;
	hasRequiredQUANTILE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, quantiles) {
		    const args = [
		        'TDIGEST.QUANTILE',
		        key
		    ];
		    for (const quantile of quantiles) {
		        args.push(quantile.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoublesReply; } }); 
	} (QUANTILE));
	return QUANTILE;
}

var RANK = {};

var hasRequiredRANK;

function requireRANK () {
	if (hasRequiredRANK) return RANK;
	hasRequiredRANK = 1;
	Object.defineProperty(RANK, "__esModule", { value: true });
	RANK.transformArguments = RANK.IS_READ_ONLY = RANK.FIRST_KEY_INDEX = void 0;
	RANK.FIRST_KEY_INDEX = 1;
	RANK.IS_READ_ONLY = true;
	function transformArguments(key, values) {
	    const args = ['TDIGEST.RANK', key];
	    for (const item of values) {
	        args.push(item.toString());
	    }
	    return args;
	}
	RANK.transformArguments = transformArguments;
	return RANK;
}

var RESET = {};

var hasRequiredRESET;

function requireRESET () {
	if (hasRequiredRESET) return RESET;
	hasRequiredRESET = 1;
	Object.defineProperty(RESET, "__esModule", { value: true });
	RESET.transformArguments = RESET.FIRST_KEY_INDEX = void 0;
	RESET.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['TDIGEST.RESET', key];
	}
	RESET.transformArguments = transformArguments;
	return RESET;
}

var REVRANK = {};

var hasRequiredREVRANK;

function requireREVRANK () {
	if (hasRequiredREVRANK) return REVRANK;
	hasRequiredREVRANK = 1;
	Object.defineProperty(REVRANK, "__esModule", { value: true });
	REVRANK.transformArguments = REVRANK.IS_READ_ONLY = REVRANK.FIRST_KEY_INDEX = void 0;
	REVRANK.FIRST_KEY_INDEX = 1;
	REVRANK.IS_READ_ONLY = true;
	function transformArguments(key, values) {
	    const args = ['TDIGEST.REVRANK', key];
	    for (const item of values) {
	        args.push(item.toString());
	    }
	    return args;
	}
	REVRANK.transformArguments = transformArguments;
	return REVRANK;
}

var TRIMMED_MEAN = {};

var hasRequiredTRIMMED_MEAN;

function requireTRIMMED_MEAN () {
	if (hasRequiredTRIMMED_MEAN) return TRIMMED_MEAN;
	hasRequiredTRIMMED_MEAN = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, lowCutPercentile, highCutPercentile) {
		    return [
		        'TDIGEST.TRIMMED_MEAN',
		        key,
		        lowCutPercentile.toString(),
		        highCutPercentile.toString()
		    ];
		}
		exports.transformArguments = transformArguments;
		var _1 = requireTDigest();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformDoubleReply; } }); 
	} (TRIMMED_MEAN));
	return TRIMMED_MEAN;
}

var hasRequiredTDigest;

function requireTDigest () {
	if (hasRequiredTDigest) return tDigest;
	hasRequiredTDigest = 1;
	Object.defineProperty(tDigest, "__esModule", { value: true });
	tDigest.transformDoublesReply = tDigest.transformDoubleReply = tDigest.pushCompressionArgument = void 0;
	const ADD = requireADD$2();
	const BYRANK = requireBYRANK();
	const BYREVRANK = requireBYREVRANK();
	const CDF = requireCDF();
	const CREATE = requireCREATE$2();
	const INFO = requireINFO$3();
	const MAX = requireMAX();
	const MERGE = requireMERGE$1();
	const MIN = requireMIN();
	const QUANTILE = requireQUANTILE();
	const RANK = requireRANK();
	const RESET = requireRESET();
	const REVRANK = requireREVRANK();
	const TRIMMED_MEAN = requireTRIMMED_MEAN();
	tDigest.default = {
	    ADD,
	    add: ADD,
	    BYRANK,
	    byRank: BYRANK,
	    BYREVRANK,
	    byRevRank: BYREVRANK,
	    CDF,
	    cdf: CDF,
	    CREATE,
	    create: CREATE,
	    INFO,
	    info: INFO,
	    MAX,
	    max: MAX,
	    MERGE,
	    merge: MERGE,
	    MIN,
	    min: MIN,
	    QUANTILE,
	    quantile: QUANTILE,
	    RANK,
	    rank: RANK,
	    RESET,
	    reset: RESET,
	    REVRANK,
	    revRank: REVRANK,
	    TRIMMED_MEAN,
	    trimmedMean: TRIMMED_MEAN
	};
	function pushCompressionArgument(args, options) {
	    if (options?.COMPRESSION) {
	        args.push('COMPRESSION', options.COMPRESSION.toString());
	    }
	    return args;
	}
	tDigest.pushCompressionArgument = pushCompressionArgument;
	function transformDoubleReply(reply) {
	    switch (reply) {
	        case 'inf':
	            return Infinity;
	        case '-inf':
	            return -Infinity;
	        case 'nan':
	            return NaN;
	        default:
	            return parseFloat(reply);
	    }
	}
	tDigest.transformDoubleReply = transformDoubleReply;
	function transformDoublesReply(reply) {
	    return reply.map(transformDoubleReply);
	}
	tDigest.transformDoublesReply = transformDoublesReply;
	return tDigest;
}

var topK = {};

var ADD$1 = {};

var hasRequiredADD$1;

function requireADD$1 () {
	if (hasRequiredADD$1) return ADD$1;
	hasRequiredADD$1 = 1;
	Object.defineProperty(ADD$1, "__esModule", { value: true });
	ADD$1.transformArguments = ADD$1.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	ADD$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, items) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['TOPK.ADD', key], items);
	}
	ADD$1.transformArguments = transformArguments;
	return ADD$1;
}

var COUNT = {};

var hasRequiredCOUNT;

function requireCOUNT () {
	if (hasRequiredCOUNT) return COUNT;
	hasRequiredCOUNT = 1;
	Object.defineProperty(COUNT, "__esModule", { value: true });
	COUNT.transformArguments = COUNT.IS_READ_ONLY = COUNT.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	COUNT.FIRST_KEY_INDEX = 1;
	COUNT.IS_READ_ONLY = true;
	function transformArguments(key, items) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['TOPK.COUNT', key], items);
	}
	COUNT.transformArguments = transformArguments;
	return COUNT;
}

var INCRBY$1 = {};

var hasRequiredINCRBY$1;

function requireINCRBY$1 () {
	if (hasRequiredINCRBY$1) return INCRBY$1;
	hasRequiredINCRBY$1 = 1;
	Object.defineProperty(INCRBY$1, "__esModule", { value: true });
	INCRBY$1.transformArguments = INCRBY$1.FIRST_KEY_INDEX = void 0;
	INCRBY$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, items) {
	    const args = ['TOPK.INCRBY', key];
	    if (Array.isArray(items)) {
	        for (const item of items) {
	            pushIncrByItem(args, item);
	        }
	    }
	    else {
	        pushIncrByItem(args, items);
	    }
	    return args;
	}
	INCRBY$1.transformArguments = transformArguments;
	function pushIncrByItem(args, { item, incrementBy }) {
	    args.push(item, incrementBy.toString());
	}
	return INCRBY$1;
}

var INFO$2 = {};

var hasRequiredINFO$2;

function requireINFO$2 () {
	if (hasRequiredINFO$2) return INFO$2;
	hasRequiredINFO$2 = 1;
	Object.defineProperty(INFO$2, "__esModule", { value: true });
	INFO$2.transformReply = INFO$2.transformArguments = INFO$2.IS_READ_ONLY = INFO$2.FIRST_KEY_INDEX = void 0;
	INFO$2.FIRST_KEY_INDEX = 1;
	INFO$2.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TOPK.INFO', key];
	}
	INFO$2.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        k: reply[1],
	        width: reply[3],
	        depth: reply[5],
	        decay: Number(reply[7])
	    };
	}
	INFO$2.transformReply = transformReply;
	return INFO$2;
}

var LIST_WITHCOUNT = {};

var hasRequiredLIST_WITHCOUNT;

function requireLIST_WITHCOUNT () {
	if (hasRequiredLIST_WITHCOUNT) return LIST_WITHCOUNT;
	hasRequiredLIST_WITHCOUNT = 1;
	Object.defineProperty(LIST_WITHCOUNT, "__esModule", { value: true });
	LIST_WITHCOUNT.transformReply = LIST_WITHCOUNT.transformArguments = LIST_WITHCOUNT.IS_READ_ONLY = LIST_WITHCOUNT.FIRST_KEY_INDEX = void 0;
	LIST_WITHCOUNT.FIRST_KEY_INDEX = 1;
	LIST_WITHCOUNT.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TOPK.LIST', key, 'WITHCOUNT'];
	}
	LIST_WITHCOUNT.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const reply = [];
	    for (let i = 0; i < rawReply.length; i++) {
	        reply.push({
	            item: rawReply[i],
	            count: rawReply[++i]
	        });
	    }
	    return reply;
	}
	LIST_WITHCOUNT.transformReply = transformReply;
	return LIST_WITHCOUNT;
}

var LIST$1 = {};

var hasRequiredLIST$1;

function requireLIST$1 () {
	if (hasRequiredLIST$1) return LIST$1;
	hasRequiredLIST$1 = 1;
	Object.defineProperty(LIST$1, "__esModule", { value: true });
	LIST$1.transformArguments = LIST$1.IS_READ_ONLY = LIST$1.FIRST_KEY_INDEX = void 0;
	LIST$1.FIRST_KEY_INDEX = 1;
	LIST$1.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TOPK.LIST', key];
	}
	LIST$1.transformArguments = transformArguments;
	return LIST$1;
}

var QUERY$1 = {};

var hasRequiredQUERY$1;

function requireQUERY$1 () {
	if (hasRequiredQUERY$1) return QUERY$1;
	hasRequiredQUERY$1 = 1;
	Object.defineProperty(QUERY$1, "__esModule", { value: true });
	QUERY$1.transformArguments = QUERY$1.IS_READ_ONLY = QUERY$1.FIRST_KEY_INDEX = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	QUERY$1.FIRST_KEY_INDEX = 1;
	QUERY$1.IS_READ_ONLY = true;
	function transformArguments(key, items) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['TOPK.QUERY', key], items);
	}
	QUERY$1.transformArguments = transformArguments;
	return QUERY$1;
}

var RESERVE = {};

var hasRequiredRESERVE;

function requireRESERVE () {
	if (hasRequiredRESERVE) return RESERVE;
	hasRequiredRESERVE = 1;
	Object.defineProperty(RESERVE, "__esModule", { value: true });
	RESERVE.transformArguments = RESERVE.IS_READ_ONLY = RESERVE.FIRST_KEY_INDEX = void 0;
	RESERVE.FIRST_KEY_INDEX = 1;
	RESERVE.IS_READ_ONLY = true;
	function transformArguments(key, topK, options) {
	    const args = ['TOPK.RESERVE', key, topK.toString()];
	    if (options) {
	        args.push(options.width.toString(), options.depth.toString(), options.decay.toString());
	    }
	    return args;
	}
	RESERVE.transformArguments = transformArguments;
	return RESERVE;
}

var hasRequiredTopK;

function requireTopK () {
	if (hasRequiredTopK) return topK;
	hasRequiredTopK = 1;
	Object.defineProperty(topK, "__esModule", { value: true });
	const ADD = requireADD$1();
	const COUNT = requireCOUNT();
	const INCRBY = requireINCRBY$1();
	const INFO = requireINFO$2();
	const LIST_WITHCOUNT = requireLIST_WITHCOUNT();
	const LIST = requireLIST$1();
	const QUERY = requireQUERY$1();
	const RESERVE = requireRESERVE();
	topK.default = {
	    ADD,
	    add: ADD,
	    COUNT,
	    count: COUNT,
	    INCRBY,
	    incrBy: INCRBY,
	    INFO,
	    info: INFO,
	    LIST_WITHCOUNT,
	    listWithCount: LIST_WITHCOUNT,
	    LIST,
	    list: LIST,
	    QUERY,
	    query: QUERY,
	    RESERVE,
	    reserve: RESERVE
	};
	return topK;
}

var hasRequiredCommands$4;

function requireCommands$4 () {
	if (hasRequiredCommands$4) return commands$4;
	hasRequiredCommands$4 = 1;
	Object.defineProperty(commands$4, "__esModule", { value: true });
	const bloom_1 = requireBloom();
	const count_min_sketch_1 = requireCountMinSketch();
	const cuckoo_1 = requireCuckoo();
	const t_digest_1 = requireTDigest();
	const top_k_1 = requireTopK();
	commands$4.default = {
	    bf: bloom_1.default,
	    cms: count_min_sketch_1.default,
	    cf: cuckoo_1.default,
	    tDigest: t_digest_1.default,
	    topK: top_k_1.default
	};
	return commands$4;
}

var hasRequiredDist$5;

function requireDist$5 () {
	if (hasRequiredDist$5) return dist$4;
	hasRequiredDist$5 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var commands_1 = requireCommands$4();
		Object.defineProperty(exports, "default", { enumerable: true, get: function () { return commands_1.default; } }); 
	} (dist$4));
	return dist$4;
}

var dist$3 = {};

var commands$3 = {};

var CONFIG_GET$1 = {};

var hasRequiredCONFIG_GET$1;

function requireCONFIG_GET$1 () {
	if (hasRequiredCONFIG_GET$1) return CONFIG_GET$1;
	hasRequiredCONFIG_GET$1 = 1;
	Object.defineProperty(CONFIG_GET$1, "__esModule", { value: true });
	CONFIG_GET$1.transformArguments = CONFIG_GET$1.IS_READ_ONLY = void 0;
	CONFIG_GET$1.IS_READ_ONLY = true;
	function transformArguments(configKey) {
	    return ['GRAPH.CONFIG', 'GET', configKey];
	}
	CONFIG_GET$1.transformArguments = transformArguments;
	return CONFIG_GET$1;
}

var CONFIG_SET$1 = {};

var hasRequiredCONFIG_SET$1;

function requireCONFIG_SET$1 () {
	if (hasRequiredCONFIG_SET$1) return CONFIG_SET$1;
	hasRequiredCONFIG_SET$1 = 1;
	Object.defineProperty(CONFIG_SET$1, "__esModule", { value: true });
	CONFIG_SET$1.transformArguments = void 0;
	function transformArguments(configKey, value) {
	    return [
	        'GRAPH.CONFIG',
	        'SET',
	        configKey,
	        value.toString()
	    ];
	}
	CONFIG_SET$1.transformArguments = transformArguments;
	return CONFIG_SET$1;
}

var DELETE = {};

var hasRequiredDELETE;

function requireDELETE () {
	if (hasRequiredDELETE) return DELETE;
	hasRequiredDELETE = 1;
	Object.defineProperty(DELETE, "__esModule", { value: true });
	DELETE.transformArguments = DELETE.FIRST_KEY_INDEX = void 0;
	DELETE.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['GRAPH.DELETE', key];
	}
	DELETE.transformArguments = transformArguments;
	return DELETE;
}

var EXPLAIN$1 = {};

var hasRequiredEXPLAIN$1;

function requireEXPLAIN$1 () {
	if (hasRequiredEXPLAIN$1) return EXPLAIN$1;
	hasRequiredEXPLAIN$1 = 1;
	Object.defineProperty(EXPLAIN$1, "__esModule", { value: true });
	EXPLAIN$1.transformArguments = EXPLAIN$1.IS_READ_ONLY = EXPLAIN$1.FIRST_KEY_INDEX = void 0;
	EXPLAIN$1.FIRST_KEY_INDEX = 1;
	EXPLAIN$1.IS_READ_ONLY = true;
	function transformArguments(key, query) {
	    return ['GRAPH.EXPLAIN', key, query];
	}
	EXPLAIN$1.transformArguments = transformArguments;
	return EXPLAIN$1;
}

var LIST = {};

var hasRequiredLIST;

function requireLIST () {
	if (hasRequiredLIST) return LIST;
	hasRequiredLIST = 1;
	Object.defineProperty(LIST, "__esModule", { value: true });
	LIST.transformArguments = LIST.IS_READ_ONLY = void 0;
	LIST.IS_READ_ONLY = true;
	function transformArguments() {
	    return ['GRAPH.LIST'];
	}
	LIST.transformArguments = transformArguments;
	return LIST;
}

var PROFILE = {};

var hasRequiredPROFILE;

function requirePROFILE () {
	if (hasRequiredPROFILE) return PROFILE;
	hasRequiredPROFILE = 1;
	Object.defineProperty(PROFILE, "__esModule", { value: true });
	PROFILE.transformArguments = PROFILE.IS_READ_ONLY = PROFILE.FIRST_KEY_INDEX = void 0;
	PROFILE.FIRST_KEY_INDEX = 1;
	PROFILE.IS_READ_ONLY = true;
	function transformArguments(key, query) {
	    return ['GRAPH.PROFILE', key, query];
	}
	PROFILE.transformArguments = transformArguments;
	return PROFILE;
}

var QUERY = {};

var hasRequiredQUERY;

function requireQUERY () {
	if (hasRequiredQUERY) return QUERY;
	hasRequiredQUERY = 1;
	Object.defineProperty(QUERY, "__esModule", { value: true });
	QUERY.transformReply = QUERY.transformArguments = QUERY.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$3();
	QUERY.FIRST_KEY_INDEX = 1;
	function transformArguments(graph, query, options, compact) {
	    return (0, _1.pushQueryArguments)(['GRAPH.QUERY'], graph, query, options, compact);
	}
	QUERY.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.length === 1 ? {
	        headers: undefined,
	        data: undefined,
	        metadata: reply[0]
	    } : {
	        headers: reply[0],
	        data: reply[1],
	        metadata: reply[2]
	    };
	}
	QUERY.transformReply = transformReply;
	return QUERY;
}

var RO_QUERY = {};

var hasRequiredRO_QUERY;

function requireRO_QUERY () {
	if (hasRequiredRO_QUERY) return RO_QUERY;
	hasRequiredRO_QUERY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const _1 = requireCommands$3();
		var QUERY_1 = requireQUERY();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return QUERY_1.FIRST_KEY_INDEX; } });
		exports.IS_READ_ONLY = true;
		function transformArguments(graph, query, options, compact) {
		    return (0, _1.pushQueryArguments)(['GRAPH.RO_QUERY'], graph, query, options, compact);
		}
		exports.transformArguments = transformArguments;
		var QUERY_2 = requireQUERY();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return QUERY_2.transformReply; } }); 
	} (RO_QUERY));
	return RO_QUERY;
}

var SLOWLOG = {};

var hasRequiredSLOWLOG;

function requireSLOWLOG () {
	if (hasRequiredSLOWLOG) return SLOWLOG;
	hasRequiredSLOWLOG = 1;
	Object.defineProperty(SLOWLOG, "__esModule", { value: true });
	SLOWLOG.transformReply = SLOWLOG.transformArguments = SLOWLOG.FIRST_KEY_INDEX = SLOWLOG.IS_READ_ONLY = void 0;
	SLOWLOG.IS_READ_ONLY = true;
	SLOWLOG.FIRST_KEY_INDEX = 1;
	function transformArguments(key) {
	    return ['GRAPH.SLOWLOG', key];
	}
	SLOWLOG.transformArguments = transformArguments;
	function transformReply(logs) {
	    return logs.map(([timestamp, command, query, took]) => ({
	        timestamp: new Date(Number(timestamp) * 1000),
	        command,
	        query,
	        took: Number(took)
	    }));
	}
	SLOWLOG.transformReply = transformReply;
	return SLOWLOG;
}

var hasRequiredCommands$3;

function requireCommands$3 () {
	if (hasRequiredCommands$3) return commands$3;
	hasRequiredCommands$3 = 1;
	Object.defineProperty(commands$3, "__esModule", { value: true });
	commands$3.pushQueryArguments = void 0;
	const CONFIG_GET = requireCONFIG_GET$1();
	const CONFIG_SET = requireCONFIG_SET$1();
	const DELETE = requireDELETE();
	const EXPLAIN = requireEXPLAIN$1();
	const LIST = requireLIST();
	const PROFILE = requirePROFILE();
	const QUERY = requireQUERY();
	const RO_QUERY = requireRO_QUERY();
	const SLOWLOG = requireSLOWLOG();
	commands$3.default = {
	    CONFIG_GET,
	    configGet: CONFIG_GET,
	    CONFIG_SET,
	    configSet: CONFIG_SET,
	    DELETE,
	    delete: DELETE,
	    EXPLAIN,
	    explain: EXPLAIN,
	    LIST,
	    list: LIST,
	    PROFILE,
	    profile: PROFILE,
	    QUERY,
	    query: QUERY,
	    RO_QUERY,
	    roQuery: RO_QUERY,
	    SLOWLOG,
	    slowLog: SLOWLOG
	};
	function pushQueryArguments(args, graph, query, options, compact) {
	    args.push(graph);
	    if (typeof options === 'number') {
	        args.push(query);
	        pushTimeout(args, options);
	    }
	    else {
	        args.push(options?.params ?
	            `CYPHER ${queryParamsToString(options.params)} ${query}` :
	            query);
	        if (options?.TIMEOUT !== undefined) {
	            pushTimeout(args, options.TIMEOUT);
	        }
	    }
	    if (compact) {
	        args.push('--compact');
	    }
	    return args;
	}
	commands$3.pushQueryArguments = pushQueryArguments;
	function pushTimeout(args, timeout) {
	    args.push('TIMEOUT', timeout.toString());
	}
	function queryParamsToString(params) {
	    const parts = [];
	    for (const [key, value] of Object.entries(params)) {
	        parts.push(`${key}=${queryParamToString(value)}`);
	    }
	    return parts.join(' ');
	}
	function queryParamToString(param) {
	    if (param === null) {
	        return 'null';
	    }
	    switch (typeof param) {
	        case 'string':
	            return `"${param.replace(/["\\]/g, '\\$&')}"`;
	        case 'number':
	        case 'boolean':
	            return param.toString();
	    }
	    if (Array.isArray(param)) {
	        return `[${param.map(queryParamToString).join(',')}]`;
	    }
	    else if (typeof param === 'object') {
	        const body = [];
	        for (const [key, value] of Object.entries(param)) {
	            body.push(`${key}:${queryParamToString(value)}`);
	        }
	        return `{${body.join(',')}}`;
	    }
	    else {
	        throw new TypeError(`Unexpected param type ${typeof param} ${param}`);
	    }
	}
	return commands$3;
}

var graph = {};

var hasRequiredGraph;

function requireGraph () {
	if (hasRequiredGraph) return graph;
	hasRequiredGraph = 1;
	var __classPrivateFieldSet = (graph && graph.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	};
	var __classPrivateFieldGet = (graph && graph.__classPrivateFieldGet) || function (receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	var _Graph_instances, _Graph_client, _Graph_name, _Graph_metadata, _Graph_setMetadataPromise, _Graph_updateMetadata, _Graph_setMetadata, _Graph_cleanMetadataArray, _Graph_getMetadata, _Graph_getMetadataAsync, _Graph_parseReply, _Graph_parseValue, _Graph_parseEdge, _Graph_parseNode, _Graph_parseProperties;
	Object.defineProperty(graph, "__esModule", { value: true });
	// https://github.com/RedisGraph/RedisGraph/blob/master/src/resultset/formatters/resultset_formatter.h#L20
	var GraphValueTypes;
	(function (GraphValueTypes) {
	    GraphValueTypes[GraphValueTypes["UNKNOWN"] = 0] = "UNKNOWN";
	    GraphValueTypes[GraphValueTypes["NULL"] = 1] = "NULL";
	    GraphValueTypes[GraphValueTypes["STRING"] = 2] = "STRING";
	    GraphValueTypes[GraphValueTypes["INTEGER"] = 3] = "INTEGER";
	    GraphValueTypes[GraphValueTypes["BOOLEAN"] = 4] = "BOOLEAN";
	    GraphValueTypes[GraphValueTypes["DOUBLE"] = 5] = "DOUBLE";
	    GraphValueTypes[GraphValueTypes["ARRAY"] = 6] = "ARRAY";
	    GraphValueTypes[GraphValueTypes["EDGE"] = 7] = "EDGE";
	    GraphValueTypes[GraphValueTypes["NODE"] = 8] = "NODE";
	    GraphValueTypes[GraphValueTypes["PATH"] = 9] = "PATH";
	    GraphValueTypes[GraphValueTypes["MAP"] = 10] = "MAP";
	    GraphValueTypes[GraphValueTypes["POINT"] = 11] = "POINT";
	})(GraphValueTypes || (GraphValueTypes = {}));
	class Graph {
	    constructor(client, name) {
	        _Graph_instances.add(this);
	        _Graph_client.set(this, void 0);
	        _Graph_name.set(this, void 0);
	        _Graph_metadata.set(this, void 0);
	        _Graph_setMetadataPromise.set(this, void 0);
	        __classPrivateFieldSet(this, _Graph_client, client, "f");
	        __classPrivateFieldSet(this, _Graph_name, name, "f");
	    }
	    async query(query, options) {
	        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.query(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
	    }
	    async roQuery(query, options) {
	        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
	    }
	}
	_Graph_client = new WeakMap(), _Graph_name = new WeakMap(), _Graph_metadata = new WeakMap(), _Graph_setMetadataPromise = new WeakMap(), _Graph_instances = new WeakSet(), _Graph_updateMetadata = function _Graph_updateMetadata() {
	    __classPrivateFieldSet(this, _Graph_setMetadataPromise, __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f") ?? __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_setMetadata).call(this)
	        .finally(() => __classPrivateFieldSet(this, _Graph_setMetadataPromise, undefined, "f")), "f");
	    return __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f");
	}, _Graph_setMetadata = 
	// DO NOT use directly, use #updateMetadata instead
	async function _Graph_setMetadata() {
	    const [labels, relationshipTypes, propertyKeys] = await Promise.all([
	        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), 'CALL db.labels()'),
	        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), 'CALL db.relationshipTypes()'),
	        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), 'CALL db.propertyKeys()')
	    ]);
	    __classPrivateFieldSet(this, _Graph_metadata, {
	        labels: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, labels.data),
	        relationshipTypes: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, relationshipTypes.data),
	        propertyKeys: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, propertyKeys.data)
	    }, "f");
	    return __classPrivateFieldGet(this, _Graph_metadata, "f");
	}, _Graph_cleanMetadataArray = function _Graph_cleanMetadataArray(arr) {
	    return arr.map(([value]) => value);
	}, _Graph_getMetadata = function _Graph_getMetadata(key, id) {
	    return __classPrivateFieldGet(this, _Graph_metadata, "f")?.[key][id] ?? __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadataAsync).call(this, key, id);
	}, _Graph_getMetadataAsync = 
	// DO NOT use directly, use #getMetadata instead
	async function _Graph_getMetadataAsync(key, id) {
	    const value = (await __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_updateMetadata).call(this))[key][id];
	    if (value === undefined)
	        throw new Error(`Cannot find value from ${key}[${id}]`);
	    return value;
	}, _Graph_parseReply = async function _Graph_parseReply(reply) {
	    if (!reply.data)
	        return reply;
	    const promises = [], parsed = {
	        metadata: reply.metadata,
	        data: reply.data.map((row) => {
	            const data = {};
	            for (let i = 0; i < row.length; i++) {
	                data[reply.headers[i][1]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, row[i], promises);
	            }
	            return data;
	        })
	    };
	    if (promises.length)
	        await Promise.all(promises);
	    return parsed;
	}, _Graph_parseValue = function _Graph_parseValue([valueType, value], promises) {
	    switch (valueType) {
	        case GraphValueTypes.NULL:
	            return null;
	        case GraphValueTypes.STRING:
	        case GraphValueTypes.INTEGER:
	            return value;
	        case GraphValueTypes.BOOLEAN:
	            return value === 'true';
	        case GraphValueTypes.DOUBLE:
	            return parseFloat(value);
	        case GraphValueTypes.ARRAY:
	            return value.map(x => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, x, promises));
	        case GraphValueTypes.EDGE:
	            return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, value, promises);
	        case GraphValueTypes.NODE:
	            return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, value, promises);
	        case GraphValueTypes.PATH:
	            return {
	                nodes: value[0][1].map(([, node]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, node, promises)),
	                edges: value[1][1].map(([, edge]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, edge, promises))
	            };
	        case GraphValueTypes.MAP:
	            const map = {};
	            for (let i = 0; i < value.length; i++) {
	                map[value[i++]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, value[i], promises);
	            }
	            return map;
	        case GraphValueTypes.POINT:
	            return {
	                latitude: parseFloat(value[0]),
	                longitude: parseFloat(value[1])
	            };
	        default:
	            throw new Error(`unknown scalar type: ${valueType}`);
	    }
	}, _Graph_parseEdge = function _Graph_parseEdge([id, relationshipTypeId, sourceId, destinationId, properties], promises) {
	    const edge = {
	        id,
	        sourceId,
	        destinationId,
	        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
	    };
	    const relationshipType = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, 'relationshipTypes', relationshipTypeId);
	    if (relationshipType instanceof Promise) {
	        promises.push(relationshipType.then(value => edge.relationshipType = value));
	    }
	    else {
	        edge.relationshipType = relationshipType;
	    }
	    return edge;
	}, _Graph_parseNode = function _Graph_parseNode([id, labelIds, properties], promises) {
	    const labels = new Array(labelIds.length);
	    for (let i = 0; i < labelIds.length; i++) {
	        const value = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, 'labels', labelIds[i]);
	        if (value instanceof Promise) {
	            promises.push(value.then(value => labels[i] = value));
	        }
	        else {
	            labels[i] = value;
	        }
	    }
	    return {
	        id,
	        labels,
	        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
	    };
	}, _Graph_parseProperties = function _Graph_parseProperties(raw, promises) {
	    const parsed = {};
	    for (const [id, type, value] of raw) {
	        const parsedValue = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, [type, value], promises), key = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, 'propertyKeys', id);
	        if (key instanceof Promise) {
	            promises.push(key.then(key => parsed[key] = parsedValue));
	        }
	        else {
	            parsed[key] = parsedValue;
	        }
	    }
	    return parsed;
	};
	graph.default = Graph;
	return graph;
}

var hasRequiredDist$4;

function requireDist$4 () {
	if (hasRequiredDist$4) return dist$3;
	hasRequiredDist$4 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Graph = exports.default = void 0;
		var commands_1 = requireCommands$3();
		Object.defineProperty(exports, "default", { enumerable: true, get: function () { return commands_1.default; } });
		var graph_1 = requireGraph();
		Object.defineProperty(exports, "Graph", { enumerable: true, get: function () { return graph_1.default; } }); 
	} (dist$3));
	return dist$3;
}

var dist$2 = {};

var commands$2 = {};

var ARRAPPEND = {};

var hasRequiredARRAPPEND;

function requireARRAPPEND () {
	if (hasRequiredARRAPPEND) return ARRAPPEND;
	hasRequiredARRAPPEND = 1;
	Object.defineProperty(ARRAPPEND, "__esModule", { value: true });
	ARRAPPEND.transformArguments = ARRAPPEND.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	ARRAPPEND.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, ...jsons) {
	    const args = ['JSON.ARRAPPEND', key, path];
	    for (const json of jsons) {
	        args.push((0, _1.transformRedisJsonArgument)(json));
	    }
	    return args;
	}
	ARRAPPEND.transformArguments = transformArguments;
	return ARRAPPEND;
}

var ARRINDEX = {};

var hasRequiredARRINDEX;

function requireARRINDEX () {
	if (hasRequiredARRINDEX) return ARRINDEX;
	hasRequiredARRINDEX = 1;
	Object.defineProperty(ARRINDEX, "__esModule", { value: true });
	ARRINDEX.transformArguments = ARRINDEX.IS_READ_ONLY = ARRINDEX.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	ARRINDEX.FIRST_KEY_INDEX = 1;
	ARRINDEX.IS_READ_ONLY = true;
	function transformArguments(key, path, json, start, stop) {
	    const args = ['JSON.ARRINDEX', key, path, (0, _1.transformRedisJsonArgument)(json)];
	    if (start !== undefined && start !== null) {
	        args.push(start.toString());
	        if (stop !== undefined && stop !== null) {
	            args.push(stop.toString());
	        }
	    }
	    return args;
	}
	ARRINDEX.transformArguments = transformArguments;
	return ARRINDEX;
}

var ARRINSERT = {};

var hasRequiredARRINSERT;

function requireARRINSERT () {
	if (hasRequiredARRINSERT) return ARRINSERT;
	hasRequiredARRINSERT = 1;
	Object.defineProperty(ARRINSERT, "__esModule", { value: true });
	ARRINSERT.transformArguments = ARRINSERT.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	ARRINSERT.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, index, ...jsons) {
	    const args = ['JSON.ARRINSERT', key, path, index.toString()];
	    for (const json of jsons) {
	        args.push((0, _1.transformRedisJsonArgument)(json));
	    }
	    return args;
	}
	ARRINSERT.transformArguments = transformArguments;
	return ARRINSERT;
}

var ARRLEN = {};

var hasRequiredARRLEN;

function requireARRLEN () {
	if (hasRequiredARRLEN) return ARRLEN;
	hasRequiredARRLEN = 1;
	Object.defineProperty(ARRLEN, "__esModule", { value: true });
	ARRLEN.transformArguments = ARRLEN.IS_READ_ONLY = ARRLEN.FIRST_KEY_INDEX = void 0;
	ARRLEN.FIRST_KEY_INDEX = 1;
	ARRLEN.IS_READ_ONLY = true;
	function transformArguments(key, path) {
	    const args = ['JSON.ARRLEN', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	ARRLEN.transformArguments = transformArguments;
	return ARRLEN;
}

var ARRPOP = {};

var hasRequiredARRPOP;

function requireARRPOP () {
	if (hasRequiredARRPOP) return ARRPOP;
	hasRequiredARRPOP = 1;
	Object.defineProperty(ARRPOP, "__esModule", { value: true });
	ARRPOP.transformReply = ARRPOP.transformArguments = ARRPOP.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	ARRPOP.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, index) {
	    const args = ['JSON.ARRPOP', key];
	    if (path) {
	        args.push(path);
	        if (index !== undefined && index !== null) {
	            args.push(index.toString());
	        }
	    }
	    return args;
	}
	ARRPOP.transformArguments = transformArguments;
	function transformReply(reply) {
	    if (reply === null)
	        return null;
	    if (Array.isArray(reply)) {
	        return reply.map(_1.transformRedisJsonNullReply);
	    }
	    return (0, _1.transformRedisJsonNullReply)(reply);
	}
	ARRPOP.transformReply = transformReply;
	return ARRPOP;
}

var ARRTRIM = {};

var hasRequiredARRTRIM;

function requireARRTRIM () {
	if (hasRequiredARRTRIM) return ARRTRIM;
	hasRequiredARRTRIM = 1;
	Object.defineProperty(ARRTRIM, "__esModule", { value: true });
	ARRTRIM.transformArguments = ARRTRIM.FIRST_KEY_INDEX = void 0;
	ARRTRIM.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, start, stop) {
	    return ['JSON.ARRTRIM', key, path, start.toString(), stop.toString()];
	}
	ARRTRIM.transformArguments = transformArguments;
	return ARRTRIM;
}

var DEBUG_MEMORY = {};

var hasRequiredDEBUG_MEMORY;

function requireDEBUG_MEMORY () {
	if (hasRequiredDEBUG_MEMORY) return DEBUG_MEMORY;
	hasRequiredDEBUG_MEMORY = 1;
	Object.defineProperty(DEBUG_MEMORY, "__esModule", { value: true });
	DEBUG_MEMORY.transformArguments = DEBUG_MEMORY.FIRST_KEY_INDEX = void 0;
	DEBUG_MEMORY.FIRST_KEY_INDEX = 2;
	function transformArguments(key, path) {
	    const args = ['JSON.DEBUG', 'MEMORY', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	DEBUG_MEMORY.transformArguments = transformArguments;
	return DEBUG_MEMORY;
}

var DEL$1 = {};

var hasRequiredDEL$1;

function requireDEL$1 () {
	if (hasRequiredDEL$1) return DEL$1;
	hasRequiredDEL$1 = 1;
	Object.defineProperty(DEL$1, "__esModule", { value: true });
	DEL$1.transformArguments = DEL$1.FIRST_KEY_INDEX = void 0;
	DEL$1.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.DEL', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	DEL$1.transformArguments = transformArguments;
	return DEL$1;
}

var FORGET = {};

var hasRequiredFORGET;

function requireFORGET () {
	if (hasRequiredFORGET) return FORGET;
	hasRequiredFORGET = 1;
	Object.defineProperty(FORGET, "__esModule", { value: true });
	FORGET.transformArguments = FORGET.FIRST_KEY_INDEX = void 0;
	FORGET.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.FORGET', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	FORGET.transformArguments = transformArguments;
	return FORGET;
}

var GET$1 = {};

var hasRequiredGET$1;

function requireGET$1 () {
	if (hasRequiredGET$1) return GET$1;
	hasRequiredGET$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const generic_transformers_1 = requireGenericTransformers();
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(key, options) {
		    let args = ['JSON.GET', key];
		    if (options?.path) {
		        args = (0, generic_transformers_1.pushVerdictArguments)(args, options.path);
		    }
		    if (options?.INDENT) {
		        args.push('INDENT', options.INDENT);
		    }
		    if (options?.NEWLINE) {
		        args.push('NEWLINE', options.NEWLINE);
		    }
		    if (options?.SPACE) {
		        args.push('SPACE', options.SPACE);
		    }
		    if (options?.NOESCAPE) {
		        args.push('NOESCAPE');
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var _1 = requireCommands$2();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformRedisJsonNullReply; } }); 
	} (GET$1));
	return GET$1;
}

var MERGE = {};

var hasRequiredMERGE;

function requireMERGE () {
	if (hasRequiredMERGE) return MERGE;
	hasRequiredMERGE = 1;
	Object.defineProperty(MERGE, "__esModule", { value: true });
	MERGE.transformArguments = MERGE.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	MERGE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, json) {
	    return ['JSON.MERGE', key, path, (0, _1.transformRedisJsonArgument)(json)];
	}
	MERGE.transformArguments = transformArguments;
	return MERGE;
}

var MGET$1 = {};

var hasRequiredMGET$1;

function requireMGET$1 () {
	if (hasRequiredMGET$1) return MGET$1;
	hasRequiredMGET$1 = 1;
	Object.defineProperty(MGET$1, "__esModule", { value: true });
	MGET$1.transformReply = MGET$1.transformArguments = MGET$1.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	MGET$1.FIRST_KEY_INDEX = 1;
	function transformArguments(keys, path) {
	    return [
	        'JSON.MGET',
	        ...keys,
	        path
	    ];
	}
	MGET$1.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(_1.transformRedisJsonNullReply);
	}
	MGET$1.transformReply = transformReply;
	return MGET$1;
}

var MSET = {};

var hasRequiredMSET;

function requireMSET () {
	if (hasRequiredMSET) return MSET;
	hasRequiredMSET = 1;
	Object.defineProperty(MSET, "__esModule", { value: true });
	MSET.transformArguments = MSET.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	MSET.FIRST_KEY_INDEX = 1;
	function transformArguments(items) {
	    const args = new Array(1 + items.length * 3);
	    args[0] = 'JSON.MSET';
	    let argsIndex = 1;
	    for (let i = 0; i < items.length; i++) {
	        const item = items[i];
	        args[argsIndex++] = item.key;
	        args[argsIndex++] = item.path;
	        args[argsIndex++] = (0, _1.transformRedisJsonArgument)(item.value);
	    }
	    return args;
	}
	MSET.transformArguments = transformArguments;
	return MSET;
}

var NUMINCRBY = {};

var hasRequiredNUMINCRBY;

function requireNUMINCRBY () {
	if (hasRequiredNUMINCRBY) return NUMINCRBY;
	hasRequiredNUMINCRBY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, path, by) {
		    return ['JSON.NUMINCRBY', key, path, by.toString()];
		}
		exports.transformArguments = transformArguments;
		var _1 = requireCommands$2();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformNumbersReply; } }); 
	} (NUMINCRBY));
	return NUMINCRBY;
}

var NUMMULTBY = {};

var hasRequiredNUMMULTBY;

function requireNUMMULTBY () {
	if (hasRequiredNUMMULTBY) return NUMMULTBY;
	hasRequiredNUMMULTBY = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		function transformArguments(key, path, by) {
		    return ['JSON.NUMMULTBY', key, path, by.toString()];
		}
		exports.transformArguments = transformArguments;
		var _1 = requireCommands$2();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformNumbersReply; } }); 
	} (NUMMULTBY));
	return NUMMULTBY;
}

var OBJKEYS = {};

var hasRequiredOBJKEYS;

function requireOBJKEYS () {
	if (hasRequiredOBJKEYS) return OBJKEYS;
	hasRequiredOBJKEYS = 1;
	Object.defineProperty(OBJKEYS, "__esModule", { value: true });
	OBJKEYS.transformArguments = OBJKEYS.FIRST_KEY_INDEX = void 0;
	OBJKEYS.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.OBJKEYS', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	OBJKEYS.transformArguments = transformArguments;
	return OBJKEYS;
}

var OBJLEN = {};

var hasRequiredOBJLEN;

function requireOBJLEN () {
	if (hasRequiredOBJLEN) return OBJLEN;
	hasRequiredOBJLEN = 1;
	Object.defineProperty(OBJLEN, "__esModule", { value: true });
	OBJLEN.transformArguments = OBJLEN.FIRST_KEY_INDEX = void 0;
	OBJLEN.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.OBJLEN', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	OBJLEN.transformArguments = transformArguments;
	return OBJLEN;
}

var RESP = {};

var hasRequiredRESP;

function requireRESP () {
	if (hasRequiredRESP) return RESP;
	hasRequiredRESP = 1;
	Object.defineProperty(RESP, "__esModule", { value: true });
	RESP.transformArguments = RESP.FIRST_KEY_INDEX = void 0;
	RESP.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.RESP', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	RESP.transformArguments = transformArguments;
	return RESP;
}

var SET = {};

var hasRequiredSET;

function requireSET () {
	if (hasRequiredSET) return SET;
	hasRequiredSET = 1;
	Object.defineProperty(SET, "__esModule", { value: true });
	SET.transformArguments = SET.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	SET.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path, json, options) {
	    const args = ['JSON.SET', key, path, (0, _1.transformRedisJsonArgument)(json)];
	    if (options?.NX) {
	        args.push('NX');
	    }
	    else if (options?.XX) {
	        args.push('XX');
	    }
	    return args;
	}
	SET.transformArguments = transformArguments;
	return SET;
}

var STRAPPEND = {};

var hasRequiredSTRAPPEND;

function requireSTRAPPEND () {
	if (hasRequiredSTRAPPEND) return STRAPPEND;
	hasRequiredSTRAPPEND = 1;
	Object.defineProperty(STRAPPEND, "__esModule", { value: true });
	STRAPPEND.transformArguments = STRAPPEND.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$2();
	STRAPPEND.FIRST_KEY_INDEX = 1;
	function transformArguments(...[key, pathOrAppend, append]) {
	    const args = ['JSON.STRAPPEND', key];
	    if (append !== undefined && append !== null) {
	        args.push(pathOrAppend, (0, _1.transformRedisJsonArgument)(append));
	    }
	    else {
	        args.push((0, _1.transformRedisJsonArgument)(pathOrAppend));
	    }
	    return args;
	}
	STRAPPEND.transformArguments = transformArguments;
	return STRAPPEND;
}

var STRLEN = {};

var hasRequiredSTRLEN;

function requireSTRLEN () {
	if (hasRequiredSTRLEN) return STRLEN;
	hasRequiredSTRLEN = 1;
	Object.defineProperty(STRLEN, "__esModule", { value: true });
	STRLEN.transformArguments = STRLEN.IS_READ_ONLY = STRLEN.FIRST_KEY_INDEX = void 0;
	STRLEN.FIRST_KEY_INDEX = 1;
	STRLEN.IS_READ_ONLY = true;
	function transformArguments(key, path) {
	    const args = ['JSON.STRLEN', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	STRLEN.transformArguments = transformArguments;
	return STRLEN;
}

var TYPE = {};

var hasRequiredTYPE;

function requireTYPE () {
	if (hasRequiredTYPE) return TYPE;
	hasRequiredTYPE = 1;
	Object.defineProperty(TYPE, "__esModule", { value: true });
	TYPE.transformArguments = TYPE.FIRST_KEY_INDEX = void 0;
	TYPE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, path) {
	    const args = ['JSON.TYPE', key];
	    if (path) {
	        args.push(path);
	    }
	    return args;
	}
	TYPE.transformArguments = transformArguments;
	return TYPE;
}

var hasRequiredCommands$2;

function requireCommands$2 () {
	if (hasRequiredCommands$2) return commands$2;
	hasRequiredCommands$2 = 1;
	Object.defineProperty(commands$2, "__esModule", { value: true });
	commands$2.transformNumbersReply = commands$2.transformRedisJsonNullReply = commands$2.transformRedisJsonReply = commands$2.transformRedisJsonArgument = void 0;
	const ARRAPPEND = requireARRAPPEND();
	const ARRINDEX = requireARRINDEX();
	const ARRINSERT = requireARRINSERT();
	const ARRLEN = requireARRLEN();
	const ARRPOP = requireARRPOP();
	const ARRTRIM = requireARRTRIM();
	const DEBUG_MEMORY = requireDEBUG_MEMORY();
	const DEL = requireDEL$1();
	const FORGET = requireFORGET();
	const GET = requireGET$1();
	const MERGE = requireMERGE();
	const MGET = requireMGET$1();
	const MSET = requireMSET();
	const NUMINCRBY = requireNUMINCRBY();
	const NUMMULTBY = requireNUMMULTBY();
	const OBJKEYS = requireOBJKEYS();
	const OBJLEN = requireOBJLEN();
	const RESP = requireRESP();
	const SET = requireSET();
	const STRAPPEND = requireSTRAPPEND();
	const STRLEN = requireSTRLEN();
	const TYPE = requireTYPE();
	commands$2.default = {
	    ARRAPPEND,
	    arrAppend: ARRAPPEND,
	    ARRINDEX,
	    arrIndex: ARRINDEX,
	    ARRINSERT,
	    arrInsert: ARRINSERT,
	    ARRLEN,
	    arrLen: ARRLEN,
	    ARRPOP,
	    arrPop: ARRPOP,
	    ARRTRIM,
	    arrTrim: ARRTRIM,
	    DEBUG_MEMORY,
	    debugMemory: DEBUG_MEMORY,
	    DEL,
	    del: DEL,
	    FORGET,
	    forget: FORGET,
	    GET,
	    get: GET,
	    MERGE,
	    merge: MERGE,
	    MGET,
	    mGet: MGET,
	    MSET,
	    mSet: MSET,
	    NUMINCRBY,
	    numIncrBy: NUMINCRBY,
	    NUMMULTBY,
	    numMultBy: NUMMULTBY,
	    OBJKEYS,
	    objKeys: OBJKEYS,
	    OBJLEN,
	    objLen: OBJLEN,
	    RESP,
	    resp: RESP,
	    SET,
	    set: SET,
	    STRAPPEND,
	    strAppend: STRAPPEND,
	    STRLEN,
	    strLen: STRLEN,
	    TYPE,
	    type: TYPE
	};
	function transformRedisJsonArgument(json) {
	    return JSON.stringify(json);
	}
	commands$2.transformRedisJsonArgument = transformRedisJsonArgument;
	function transformRedisJsonReply(json) {
	    return JSON.parse(json);
	}
	commands$2.transformRedisJsonReply = transformRedisJsonReply;
	function transformRedisJsonNullReply(json) {
	    if (json === null)
	        return null;
	    return transformRedisJsonReply(json);
	}
	commands$2.transformRedisJsonNullReply = transformRedisJsonNullReply;
	function transformNumbersReply(reply) {
	    return JSON.parse(reply);
	}
	commands$2.transformNumbersReply = transformNumbersReply;
	return commands$2;
}

var hasRequiredDist$3;

function requireDist$3 () {
	if (hasRequiredDist$3) return dist$2;
	hasRequiredDist$3 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var commands_1 = requireCommands$2();
		Object.defineProperty(exports, "default", { enumerable: true, get: function () { return commands_1.default; } }); 
	} (dist$2));
	return dist$2;
}

var dist$1 = {};

var commands$1 = {};

var _LIST = {};

var hasRequired_LIST;

function require_LIST () {
	if (hasRequired_LIST) return _LIST;
	hasRequired_LIST = 1;
	Object.defineProperty(_LIST, "__esModule", { value: true });
	_LIST.transformArguments = void 0;
	function transformArguments() {
	    return ['FT._LIST'];
	}
	_LIST.transformArguments = transformArguments;
	return _LIST;
}

var ALTER$1 = {};

var hasRequiredALTER$1;

function requireALTER$1 () {
	if (hasRequiredALTER$1) return ALTER$1;
	hasRequiredALTER$1 = 1;
	Object.defineProperty(ALTER$1, "__esModule", { value: true });
	ALTER$1.transformArguments = void 0;
	const _1 = requireCommands$1();
	function transformArguments(index, schema) {
	    const args = ['FT.ALTER', index, 'SCHEMA', 'ADD'];
	    (0, _1.pushSchema)(args, schema);
	    return args;
	}
	ALTER$1.transformArguments = transformArguments;
	return ALTER$1;
}

var AGGREGATE_WITHCURSOR = {};

var AGGREGATE = {};

var hasRequiredAGGREGATE;

function requireAGGREGATE () {
	if (hasRequiredAGGREGATE) return AGGREGATE;
	hasRequiredAGGREGATE = 1;
	Object.defineProperty(AGGREGATE, "__esModule", { value: true });
	AGGREGATE.transformReply = AGGREGATE.pushAggregatehOptions = AGGREGATE.transformArguments = AGGREGATE.IS_READ_ONLY = AGGREGATE.FIRST_KEY_INDEX = AGGREGATE.AggregateGroupByReducers = AGGREGATE.AggregateSteps = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	const _1 = requireCommands$1();
	var AggregateSteps;
	(function (AggregateSteps) {
	    AggregateSteps["GROUPBY"] = "GROUPBY";
	    AggregateSteps["SORTBY"] = "SORTBY";
	    AggregateSteps["APPLY"] = "APPLY";
	    AggregateSteps["LIMIT"] = "LIMIT";
	    AggregateSteps["FILTER"] = "FILTER";
	})(AggregateSteps || (AGGREGATE.AggregateSteps = AggregateSteps = {}));
	var AggregateGroupByReducers;
	(function (AggregateGroupByReducers) {
	    AggregateGroupByReducers["COUNT"] = "COUNT";
	    AggregateGroupByReducers["COUNT_DISTINCT"] = "COUNT_DISTINCT";
	    AggregateGroupByReducers["COUNT_DISTINCTISH"] = "COUNT_DISTINCTISH";
	    AggregateGroupByReducers["SUM"] = "SUM";
	    AggregateGroupByReducers["MIN"] = "MIN";
	    AggregateGroupByReducers["MAX"] = "MAX";
	    AggregateGroupByReducers["AVG"] = "AVG";
	    AggregateGroupByReducers["STDDEV"] = "STDDEV";
	    AggregateGroupByReducers["QUANTILE"] = "QUANTILE";
	    AggregateGroupByReducers["TOLIST"] = "TOLIST";
	    AggregateGroupByReducers["TO_LIST"] = "TOLIST";
	    AggregateGroupByReducers["FIRST_VALUE"] = "FIRST_VALUE";
	    AggregateGroupByReducers["RANDOM_SAMPLE"] = "RANDOM_SAMPLE";
	})(AggregateGroupByReducers || (AGGREGATE.AggregateGroupByReducers = AggregateGroupByReducers = {}));
	AGGREGATE.FIRST_KEY_INDEX = 1;
	AGGREGATE.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    return pushAggregatehOptions(['FT.AGGREGATE', index, query], options);
	}
	AGGREGATE.transformArguments = transformArguments;
	function pushAggregatehOptions(args, options) {
	    if (options?.VERBATIM) {
	        args.push('VERBATIM');
	    }
	    if (options?.LOAD) {
	        args.push('LOAD');
	        (0, _1.pushArgumentsWithLength)(args, () => {
	            if (Array.isArray(options.LOAD)) {
	                for (const load of options.LOAD) {
	                    pushLoadField(args, load);
	                }
	            }
	            else {
	                pushLoadField(args, options.LOAD);
	            }
	        });
	    }
	    if (options?.STEPS) {
	        for (const step of options.STEPS) {
	            switch (step.type) {
	                case AggregateSteps.GROUPBY:
	                    args.push('GROUPBY');
	                    if (!step.properties) {
	                        args.push('0');
	                    }
	                    else {
	                        (0, generic_transformers_1.pushVerdictArgument)(args, step.properties);
	                    }
	                    if (Array.isArray(step.REDUCE)) {
	                        for (const reducer of step.REDUCE) {
	                            pushGroupByReducer(args, reducer);
	                        }
	                    }
	                    else {
	                        pushGroupByReducer(args, step.REDUCE);
	                    }
	                    break;
	                case AggregateSteps.SORTBY:
	                    (0, _1.pushSortByArguments)(args, 'SORTBY', step.BY);
	                    if (step.MAX) {
	                        args.push('MAX', step.MAX.toString());
	                    }
	                    break;
	                case AggregateSteps.APPLY:
	                    args.push('APPLY', step.expression, 'AS', step.AS);
	                    break;
	                case AggregateSteps.LIMIT:
	                    args.push('LIMIT', step.from.toString(), step.size.toString());
	                    break;
	                case AggregateSteps.FILTER:
	                    args.push('FILTER', step.expression);
	                    break;
	            }
	        }
	    }
	    (0, _1.pushParamsArgs)(args, options?.PARAMS);
	    if (options?.DIALECT) {
	        args.push('DIALECT', options.DIALECT.toString());
	    }
	    if (options?.TIMEOUT !== undefined) {
	        args.push('TIMEOUT', options.TIMEOUT.toString());
	    }
	    return args;
	}
	AGGREGATE.pushAggregatehOptions = pushAggregatehOptions;
	function pushLoadField(args, toLoad) {
	    if (typeof toLoad === 'string') {
	        args.push(toLoad);
	    }
	    else {
	        args.push(toLoad.identifier);
	        if (toLoad.AS) {
	            args.push('AS', toLoad.AS);
	        }
	    }
	}
	function pushGroupByReducer(args, reducer) {
	    args.push('REDUCE', reducer.type);
	    switch (reducer.type) {
	        case AggregateGroupByReducers.COUNT:
	            args.push('0');
	            break;
	        case AggregateGroupByReducers.COUNT_DISTINCT:
	        case AggregateGroupByReducers.COUNT_DISTINCTISH:
	        case AggregateGroupByReducers.SUM:
	        case AggregateGroupByReducers.MIN:
	        case AggregateGroupByReducers.MAX:
	        case AggregateGroupByReducers.AVG:
	        case AggregateGroupByReducers.STDDEV:
	        case AggregateGroupByReducers.TOLIST:
	            args.push('1', reducer.property);
	            break;
	        case AggregateGroupByReducers.QUANTILE:
	            args.push('2', reducer.property, reducer.quantile.toString());
	            break;
	        case AggregateGroupByReducers.FIRST_VALUE: {
	            (0, _1.pushArgumentsWithLength)(args, () => {
	                args.push(reducer.property);
	                if (reducer.BY) {
	                    args.push('BY');
	                    if (typeof reducer.BY === 'string') {
	                        args.push(reducer.BY);
	                    }
	                    else {
	                        args.push(reducer.BY.property);
	                        if (reducer.BY.direction) {
	                            args.push(reducer.BY.direction);
	                        }
	                    }
	                }
	            });
	            break;
	        }
	        case AggregateGroupByReducers.RANDOM_SAMPLE:
	            args.push('2', reducer.property, reducer.sampleSize.toString());
	            break;
	    }
	    if (reducer.AS) {
	        args.push('AS', reducer.AS);
	    }
	}
	function transformReply(rawReply) {
	    const results = [];
	    for (let i = 1; i < rawReply.length; i++) {
	        results.push((0, generic_transformers_1.transformTuplesReply)(rawReply[i]));
	    }
	    return {
	        total: rawReply[0],
	        results
	    };
	}
	AGGREGATE.transformReply = transformReply;
	return AGGREGATE;
}

var hasRequiredAGGREGATE_WITHCURSOR;

function requireAGGREGATE_WITHCURSOR () {
	if (hasRequiredAGGREGATE_WITHCURSOR) return AGGREGATE_WITHCURSOR;
	hasRequiredAGGREGATE_WITHCURSOR = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		const AGGREGATE_1 = requireAGGREGATE();
		var AGGREGATE_2 = requireAGGREGATE();
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return AGGREGATE_2.FIRST_KEY_INDEX; } });
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return AGGREGATE_2.IS_READ_ONLY; } });
		function transformArguments(index, query, options) {
		    const args = (0, AGGREGATE_1.transformArguments)(index, query, options);
		    args.push('WITHCURSOR');
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		function transformReply(reply) {
		    return {
		        ...(0, AGGREGATE_1.transformReply)(reply[0]),
		        cursor: reply[1]
		    };
		}
		exports.transformReply = transformReply; 
	} (AGGREGATE_WITHCURSOR));
	return AGGREGATE_WITHCURSOR;
}

var ALIASADD = {};

var hasRequiredALIASADD;

function requireALIASADD () {
	if (hasRequiredALIASADD) return ALIASADD;
	hasRequiredALIASADD = 1;
	Object.defineProperty(ALIASADD, "__esModule", { value: true });
	ALIASADD.transformArguments = void 0;
	function transformArguments(name, index) {
	    return ['FT.ALIASADD', name, index];
	}
	ALIASADD.transformArguments = transformArguments;
	return ALIASADD;
}

var ALIASDEL = {};

var hasRequiredALIASDEL;

function requireALIASDEL () {
	if (hasRequiredALIASDEL) return ALIASDEL;
	hasRequiredALIASDEL = 1;
	Object.defineProperty(ALIASDEL, "__esModule", { value: true });
	ALIASDEL.transformArguments = void 0;
	function transformArguments(name, index) {
	    return ['FT.ALIASDEL', name, index];
	}
	ALIASDEL.transformArguments = transformArguments;
	return ALIASDEL;
}

var ALIASUPDATE = {};

var hasRequiredALIASUPDATE;

function requireALIASUPDATE () {
	if (hasRequiredALIASUPDATE) return ALIASUPDATE;
	hasRequiredALIASUPDATE = 1;
	Object.defineProperty(ALIASUPDATE, "__esModule", { value: true });
	ALIASUPDATE.transformArguments = void 0;
	function transformArguments(name, index) {
	    return ['FT.ALIASUPDATE', name, index];
	}
	ALIASUPDATE.transformArguments = transformArguments;
	return ALIASUPDATE;
}

var CONFIG_GET = {};

var hasRequiredCONFIG_GET;

function requireCONFIG_GET () {
	if (hasRequiredCONFIG_GET) return CONFIG_GET;
	hasRequiredCONFIG_GET = 1;
	Object.defineProperty(CONFIG_GET, "__esModule", { value: true });
	CONFIG_GET.transformReply = CONFIG_GET.transformArguments = void 0;
	function transformArguments(option) {
	    return ['FT.CONFIG', 'GET', option];
	}
	CONFIG_GET.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    const transformedReply = Object.create(null);
	    for (const [key, value] of rawReply) {
	        transformedReply[key] = value;
	    }
	    return transformedReply;
	}
	CONFIG_GET.transformReply = transformReply;
	return CONFIG_GET;
}

var CONFIG_SET = {};

var hasRequiredCONFIG_SET;

function requireCONFIG_SET () {
	if (hasRequiredCONFIG_SET) return CONFIG_SET;
	hasRequiredCONFIG_SET = 1;
	Object.defineProperty(CONFIG_SET, "__esModule", { value: true });
	CONFIG_SET.transformArguments = void 0;
	function transformArguments(option, value) {
	    return ['FT.CONFIG', 'SET', option, value];
	}
	CONFIG_SET.transformArguments = transformArguments;
	return CONFIG_SET;
}

var CREATE$1 = {};

var hasRequiredCREATE$1;

function requireCREATE$1 () {
	if (hasRequiredCREATE$1) return CREATE$1;
	hasRequiredCREATE$1 = 1;
	Object.defineProperty(CREATE$1, "__esModule", { value: true });
	CREATE$1.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	const _1 = requireCommands$1();
	function transformArguments(index, schema, options) {
	    const args = ['FT.CREATE', index];
	    if (options?.ON) {
	        args.push('ON', options.ON);
	    }
	    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'PREFIX', options?.PREFIX);
	    if (options?.FILTER) {
	        args.push('FILTER', options.FILTER);
	    }
	    if (options?.LANGUAGE) {
	        args.push('LANGUAGE', options.LANGUAGE);
	    }
	    if (options?.LANGUAGE_FIELD) {
	        args.push('LANGUAGE_FIELD', options.LANGUAGE_FIELD);
	    }
	    if (options?.SCORE) {
	        args.push('SCORE', options.SCORE.toString());
	    }
	    if (options?.SCORE_FIELD) {
	        args.push('SCORE_FIELD', options.SCORE_FIELD);
	    }
	    // if (options?.PAYLOAD_FIELD) {
	    //     args.push('PAYLOAD_FIELD', options.PAYLOAD_FIELD);
	    // }
	    if (options?.MAXTEXTFIELDS) {
	        args.push('MAXTEXTFIELDS');
	    }
	    if (options?.TEMPORARY) {
	        args.push('TEMPORARY', options.TEMPORARY.toString());
	    }
	    if (options?.NOOFFSETS) {
	        args.push('NOOFFSETS');
	    }
	    if (options?.NOHL) {
	        args.push('NOHL');
	    }
	    if (options?.NOFIELDS) {
	        args.push('NOFIELDS');
	    }
	    if (options?.NOFREQS) {
	        args.push('NOFREQS');
	    }
	    if (options?.SKIPINITIALSCAN) {
	        args.push('SKIPINITIALSCAN');
	    }
	    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'STOPWORDS', options?.STOPWORDS);
	    args.push('SCHEMA');
	    (0, _1.pushSchema)(args, schema);
	    return args;
	}
	CREATE$1.transformArguments = transformArguments;
	return CREATE$1;
}

var CURSOR_DEL = {};

var hasRequiredCURSOR_DEL;

function requireCURSOR_DEL () {
	if (hasRequiredCURSOR_DEL) return CURSOR_DEL;
	hasRequiredCURSOR_DEL = 1;
	Object.defineProperty(CURSOR_DEL, "__esModule", { value: true });
	CURSOR_DEL.transformArguments = CURSOR_DEL.FIRST_KEY_INDEX = void 0;
	CURSOR_DEL.FIRST_KEY_INDEX = 1;
	function transformArguments(index, cursorId) {
	    return [
	        'FT.CURSOR',
	        'DEL',
	        index,
	        cursorId.toString()
	    ];
	}
	CURSOR_DEL.transformArguments = transformArguments;
	return CURSOR_DEL;
}

var CURSOR_READ = {};

var hasRequiredCURSOR_READ;

function requireCURSOR_READ () {
	if (hasRequiredCURSOR_READ) return CURSOR_READ;
	hasRequiredCURSOR_READ = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
		exports.FIRST_KEY_INDEX = 1;
		exports.IS_READ_ONLY = true;
		function transformArguments(index, cursor, options) {
		    const args = [
		        'FT.CURSOR',
		        'READ',
		        index,
		        cursor.toString()
		    ];
		    if (options?.COUNT) {
		        args.push('COUNT', options.COUNT.toString());
		    }
		    return args;
		}
		exports.transformArguments = transformArguments;
		var AGGREGATE_WITHCURSOR_1 = requireAGGREGATE_WITHCURSOR();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return AGGREGATE_WITHCURSOR_1.transformReply; } }); 
	} (CURSOR_READ));
	return CURSOR_READ;
}

var DICTADD = {};

var hasRequiredDICTADD;

function requireDICTADD () {
	if (hasRequiredDICTADD) return DICTADD;
	hasRequiredDICTADD = 1;
	Object.defineProperty(DICTADD, "__esModule", { value: true });
	DICTADD.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(dictionary, term) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['FT.DICTADD', dictionary], term);
	}
	DICTADD.transformArguments = transformArguments;
	return DICTADD;
}

var DICTDEL = {};

var hasRequiredDICTDEL;

function requireDICTDEL () {
	if (hasRequiredDICTDEL) return DICTDEL;
	hasRequiredDICTDEL = 1;
	Object.defineProperty(DICTDEL, "__esModule", { value: true });
	DICTDEL.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(dictionary, term) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['FT.DICTDEL', dictionary], term);
	}
	DICTDEL.transformArguments = transformArguments;
	return DICTDEL;
}

var DICTDUMP = {};

var hasRequiredDICTDUMP;

function requireDICTDUMP () {
	if (hasRequiredDICTDUMP) return DICTDUMP;
	hasRequiredDICTDUMP = 1;
	Object.defineProperty(DICTDUMP, "__esModule", { value: true });
	DICTDUMP.transformArguments = void 0;
	function transformArguments(dictionary) {
	    return ['FT.DICTDUMP', dictionary];
	}
	DICTDUMP.transformArguments = transformArguments;
	return DICTDUMP;
}

var DROPINDEX = {};

var hasRequiredDROPINDEX;

function requireDROPINDEX () {
	if (hasRequiredDROPINDEX) return DROPINDEX;
	hasRequiredDROPINDEX = 1;
	Object.defineProperty(DROPINDEX, "__esModule", { value: true });
	DROPINDEX.transformArguments = void 0;
	function transformArguments(index, options) {
	    const args = ['FT.DROPINDEX', index];
	    if (options?.DD) {
	        args.push('DD');
	    }
	    return args;
	}
	DROPINDEX.transformArguments = transformArguments;
	return DROPINDEX;
}

var EXPLAIN = {};

var hasRequiredEXPLAIN;

function requireEXPLAIN () {
	if (hasRequiredEXPLAIN) return EXPLAIN;
	hasRequiredEXPLAIN = 1;
	Object.defineProperty(EXPLAIN, "__esModule", { value: true });
	EXPLAIN.transformArguments = EXPLAIN.IS_READ_ONLY = void 0;
	const _1 = requireCommands$1();
	EXPLAIN.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    const args = ['FT.EXPLAIN', index, query];
	    (0, _1.pushParamsArgs)(args, options?.PARAMS);
	    if (options?.DIALECT) {
	        args.push('DIALECT', options.DIALECT.toString());
	    }
	    return args;
	}
	EXPLAIN.transformArguments = transformArguments;
	return EXPLAIN;
}

var EXPLAINCLI = {};

var hasRequiredEXPLAINCLI;

function requireEXPLAINCLI () {
	if (hasRequiredEXPLAINCLI) return EXPLAINCLI;
	hasRequiredEXPLAINCLI = 1;
	Object.defineProperty(EXPLAINCLI, "__esModule", { value: true });
	EXPLAINCLI.transformArguments = EXPLAINCLI.IS_READ_ONLY = void 0;
	EXPLAINCLI.IS_READ_ONLY = true;
	function transformArguments(index, query) {
	    return ['FT.EXPLAINCLI', index, query];
	}
	EXPLAINCLI.transformArguments = transformArguments;
	return EXPLAINCLI;
}

var INFO$1 = {};

var hasRequiredINFO$1;

function requireINFO$1 () {
	if (hasRequiredINFO$1) return INFO$1;
	hasRequiredINFO$1 = 1;
	Object.defineProperty(INFO$1, "__esModule", { value: true });
	INFO$1.transformReply = INFO$1.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(index) {
	    return ['FT.INFO', index];
	}
	INFO$1.transformArguments = transformArguments;
	function transformReply(rawReply) {
	    return {
	        indexName: rawReply[1],
	        indexOptions: rawReply[3],
	        indexDefinition: (0, generic_transformers_1.transformTuplesReply)(rawReply[5]),
	        attributes: rawReply[7].map(attribute => (0, generic_transformers_1.transformTuplesReply)(attribute)),
	        numDocs: rawReply[9],
	        maxDocId: rawReply[11],
	        numTerms: rawReply[13],
	        numRecords: rawReply[15],
	        invertedSzMb: rawReply[17],
	        vectorIndexSzMb: rawReply[19],
	        totalInvertedIndexBlocks: rawReply[21],
	        offsetVectorsSzMb: rawReply[23],
	        docTableSizeMb: rawReply[25],
	        sortableValuesSizeMb: rawReply[27],
	        keyTableSizeMb: rawReply[29],
	        recordsPerDocAvg: rawReply[31],
	        bytesPerRecordAvg: rawReply[33],
	        offsetsPerTermAvg: rawReply[35],
	        offsetBitsPerRecordAvg: rawReply[37],
	        hashIndexingFailures: rawReply[39],
	        indexing: rawReply[41],
	        percentIndexed: rawReply[43],
	        gcStats: {
	            bytesCollected: rawReply[45][1],
	            totalMsRun: rawReply[45][3],
	            totalCycles: rawReply[45][5],
	            averageCycleTimeMs: rawReply[45][7],
	            lastRunTimeMs: rawReply[45][9],
	            gcNumericTreesMissed: rawReply[45][11],
	            gcBlocksDenied: rawReply[45][13]
	        },
	        cursorStats: {
	            globalIdle: rawReply[47][1],
	            globalTotal: rawReply[47][3],
	            indexCapacity: rawReply[47][5],
	            idnexTotal: rawReply[47][7]
	        },
	        stopWords: rawReply[49]
	    };
	}
	INFO$1.transformReply = transformReply;
	return INFO$1;
}

var PROFILE_SEARCH = {};

var SEARCH = {};

var hasRequiredSEARCH;

function requireSEARCH () {
	if (hasRequiredSEARCH) return SEARCH;
	hasRequiredSEARCH = 1;
	Object.defineProperty(SEARCH, "__esModule", { value: true });
	SEARCH.transformReply = SEARCH.transformArguments = SEARCH.IS_READ_ONLY = SEARCH.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$1();
	SEARCH.FIRST_KEY_INDEX = 1;
	SEARCH.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    return (0, _1.pushSearchOptions)(['FT.SEARCH', index, query], options);
	}
	SEARCH.transformArguments = transformArguments;
	function transformReply(reply, withoutDocuments) {
	    const documents = [];
	    let i = 1;
	    while (i < reply.length) {
	        documents.push({
	            id: reply[i++],
	            value: withoutDocuments ? Object.create(null) : documentValue(reply[i++])
	        });
	    }
	    return {
	        total: reply[0],
	        documents
	    };
	}
	SEARCH.transformReply = transformReply;
	function documentValue(tuples) {
	    const message = Object.create(null);
	    let i = 0;
	    while (i < tuples.length) {
	        const key = tuples[i++], value = tuples[i++];
	        if (key === '$') { // might be a JSON reply
	            try {
	                Object.assign(message, JSON.parse(value));
	                continue;
	            }
	            catch {
	                // set as a regular property if not a valid JSON
	            }
	        }
	        message[key] = value;
	    }
	    return message;
	}
	return SEARCH;
}

var hasRequiredPROFILE_SEARCH;

function requirePROFILE_SEARCH () {
	if (hasRequiredPROFILE_SEARCH) return PROFILE_SEARCH;
	hasRequiredPROFILE_SEARCH = 1;
	Object.defineProperty(PROFILE_SEARCH, "__esModule", { value: true });
	PROFILE_SEARCH.transformReply = PROFILE_SEARCH.transformArguments = PROFILE_SEARCH.IS_READ_ONLY = void 0;
	const SEARCH_1 = requireSEARCH();
	const _1 = requireCommands$1();
	PROFILE_SEARCH.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    let args = ['FT.PROFILE', index, 'SEARCH'];
	    if (options?.LIMITED) {
	        args.push('LIMITED');
	    }
	    args.push('QUERY', query);
	    return (0, _1.pushSearchOptions)(args, options);
	}
	PROFILE_SEARCH.transformArguments = transformArguments;
	function transformReply(reply, withoutDocuments) {
	    return {
	        results: (0, SEARCH_1.transformReply)(reply[0], withoutDocuments),
	        profile: (0, _1.transformProfile)(reply[1])
	    };
	}
	PROFILE_SEARCH.transformReply = transformReply;
	return PROFILE_SEARCH;
}

var PROFILE_AGGREGATE = {};

var hasRequiredPROFILE_AGGREGATE;

function requirePROFILE_AGGREGATE () {
	if (hasRequiredPROFILE_AGGREGATE) return PROFILE_AGGREGATE;
	hasRequiredPROFILE_AGGREGATE = 1;
	Object.defineProperty(PROFILE_AGGREGATE, "__esModule", { value: true });
	PROFILE_AGGREGATE.transformReply = PROFILE_AGGREGATE.transformArguments = PROFILE_AGGREGATE.IS_READ_ONLY = void 0;
	const AGGREGATE_1 = requireAGGREGATE();
	const _1 = requireCommands$1();
	PROFILE_AGGREGATE.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    const args = ['FT.PROFILE', index, 'AGGREGATE'];
	    if (options?.LIMITED) {
	        args.push('LIMITED');
	    }
	    args.push('QUERY', query);
	    (0, AGGREGATE_1.pushAggregatehOptions)(args, options);
	    return args;
	}
	PROFILE_AGGREGATE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        results: (0, AGGREGATE_1.transformReply)(reply[0]),
	        profile: (0, _1.transformProfile)(reply[1])
	    };
	}
	PROFILE_AGGREGATE.transformReply = transformReply;
	return PROFILE_AGGREGATE;
}

var SEARCH_NOCONTENT = {};

var hasRequiredSEARCH_NOCONTENT;

function requireSEARCH_NOCONTENT () {
	if (hasRequiredSEARCH_NOCONTENT) return SEARCH_NOCONTENT;
	hasRequiredSEARCH_NOCONTENT = 1;
	Object.defineProperty(SEARCH_NOCONTENT, "__esModule", { value: true });
	SEARCH_NOCONTENT.transformReply = SEARCH_NOCONTENT.transformArguments = SEARCH_NOCONTENT.IS_READ_ONLY = SEARCH_NOCONTENT.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands$1();
	SEARCH_NOCONTENT.FIRST_KEY_INDEX = 1;
	SEARCH_NOCONTENT.IS_READ_ONLY = true;
	function transformArguments(index, query, options) {
	    return (0, _1.pushSearchOptions)(['FT.SEARCH', index, query, 'NOCONTENT'], options);
	}
	SEARCH_NOCONTENT.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        total: reply[0],
	        documents: reply.slice(1)
	    };
	}
	SEARCH_NOCONTENT.transformReply = transformReply;
	return SEARCH_NOCONTENT;
}

var SPELLCHECK = {};

var hasRequiredSPELLCHECK;

function requireSPELLCHECK () {
	if (hasRequiredSPELLCHECK) return SPELLCHECK;
	hasRequiredSPELLCHECK = 1;
	Object.defineProperty(SPELLCHECK, "__esModule", { value: true });
	SPELLCHECK.transformReply = SPELLCHECK.transformArguments = void 0;
	function transformArguments(index, query, options) {
	    const args = ['FT.SPELLCHECK', index, query];
	    if (options?.DISTANCE) {
	        args.push('DISTANCE', options.DISTANCE.toString());
	    }
	    if (options?.TERMS) {
	        if (Array.isArray(options.TERMS)) {
	            for (const term of options.TERMS) {
	                pushTerms(args, term);
	            }
	        }
	        else {
	            pushTerms(args, options.TERMS);
	        }
	    }
	    if (options?.DIALECT) {
	        args.push('DIALECT', options.DIALECT.toString());
	    }
	    return args;
	}
	SPELLCHECK.transformArguments = transformArguments;
	function pushTerms(args, { mode, dictionary }) {
	    args.push('TERMS', mode, dictionary);
	}
	function transformReply(rawReply) {
	    return rawReply.map(([, term, suggestions]) => ({
	        term,
	        suggestions: suggestions.map(([score, suggestion]) => ({
	            score: Number(score),
	            suggestion
	        }))
	    }));
	}
	SPELLCHECK.transformReply = transformReply;
	return SPELLCHECK;
}

var SUGADD = {};

var hasRequiredSUGADD;

function requireSUGADD () {
	if (hasRequiredSUGADD) return SUGADD;
	hasRequiredSUGADD = 1;
	Object.defineProperty(SUGADD, "__esModule", { value: true });
	SUGADD.transformArguments = void 0;
	function transformArguments(key, string, score, options) {
	    const args = ['FT.SUGADD', key, string, score.toString()];
	    if (options?.INCR) {
	        args.push('INCR');
	    }
	    if (options?.PAYLOAD) {
	        args.push('PAYLOAD', options.PAYLOAD);
	    }
	    return args;
	}
	SUGADD.transformArguments = transformArguments;
	return SUGADD;
}

var SUGDEL = {};

var hasRequiredSUGDEL;

function requireSUGDEL () {
	if (hasRequiredSUGDEL) return SUGDEL;
	hasRequiredSUGDEL = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = void 0;
		function transformArguments(key, string) {
		    return ['FT.SUGDEL', key, string];
		}
		exports.transformArguments = transformArguments;
		var generic_transformers_1 = requireGenericTransformers();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformBooleanReply; } }); 
	} (SUGDEL));
	return SUGDEL;
}

var SUGGET_WITHPAYLOADS = {};

var SUGGET = {};

var hasRequiredSUGGET;

function requireSUGGET () {
	if (hasRequiredSUGGET) return SUGGET;
	hasRequiredSUGGET = 1;
	Object.defineProperty(SUGGET, "__esModule", { value: true });
	SUGGET.transformArguments = SUGGET.IS_READ_ONLY = void 0;
	SUGGET.IS_READ_ONLY = true;
	function transformArguments(key, prefix, options) {
	    const args = ['FT.SUGGET', key, prefix];
	    if (options?.FUZZY) {
	        args.push('FUZZY');
	    }
	    if (options?.MAX) {
	        args.push('MAX', options.MAX.toString());
	    }
	    return args;
	}
	SUGGET.transformArguments = transformArguments;
	return SUGGET;
}

var hasRequiredSUGGET_WITHPAYLOADS;

function requireSUGGET_WITHPAYLOADS () {
	if (hasRequiredSUGGET_WITHPAYLOADS) return SUGGET_WITHPAYLOADS;
	hasRequiredSUGGET_WITHPAYLOADS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const SUGGET_1 = requireSUGGET();
		var SUGGET_2 = requireSUGGET();
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return SUGGET_2.IS_READ_ONLY; } });
		function transformArguments(key, prefix, options) {
		    return [
		        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
		        'WITHPAYLOADS'
		    ];
		}
		exports.transformArguments = transformArguments;
		function transformReply(rawReply) {
		    if (rawReply === null)
		        return null;
		    const transformedReply = [];
		    for (let i = 0; i < rawReply.length; i += 2) {
		        transformedReply.push({
		            suggestion: rawReply[i],
		            payload: rawReply[i + 1]
		        });
		    }
		    return transformedReply;
		}
		exports.transformReply = transformReply; 
	} (SUGGET_WITHPAYLOADS));
	return SUGGET_WITHPAYLOADS;
}

var SUGGET_WITHSCORES_WITHPAYLOADS = {};

var hasRequiredSUGGET_WITHSCORES_WITHPAYLOADS;

function requireSUGGET_WITHSCORES_WITHPAYLOADS () {
	if (hasRequiredSUGGET_WITHSCORES_WITHPAYLOADS) return SUGGET_WITHSCORES_WITHPAYLOADS;
	hasRequiredSUGGET_WITHSCORES_WITHPAYLOADS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const SUGGET_1 = requireSUGGET();
		var SUGGET_2 = requireSUGGET();
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return SUGGET_2.IS_READ_ONLY; } });
		function transformArguments(key, prefix, options) {
		    return [
		        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
		        'WITHSCORES',
		        'WITHPAYLOADS'
		    ];
		}
		exports.transformArguments = transformArguments;
		function transformReply(rawReply) {
		    if (rawReply === null)
		        return null;
		    const transformedReply = [];
		    for (let i = 0; i < rawReply.length; i += 3) {
		        transformedReply.push({
		            suggestion: rawReply[i],
		            score: Number(rawReply[i + 1]),
		            payload: rawReply[i + 2]
		        });
		    }
		    return transformedReply;
		}
		exports.transformReply = transformReply; 
	} (SUGGET_WITHSCORES_WITHPAYLOADS));
	return SUGGET_WITHSCORES_WITHPAYLOADS;
}

var SUGGET_WITHSCORES = {};

var hasRequiredSUGGET_WITHSCORES;

function requireSUGGET_WITHSCORES () {
	if (hasRequiredSUGGET_WITHSCORES) return SUGGET_WITHSCORES;
	hasRequiredSUGGET_WITHSCORES = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const SUGGET_1 = requireSUGGET();
		var SUGGET_2 = requireSUGGET();
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return SUGGET_2.IS_READ_ONLY; } });
		function transformArguments(key, prefix, options) {
		    return [
		        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
		        'WITHSCORES'
		    ];
		}
		exports.transformArguments = transformArguments;
		function transformReply(rawReply) {
		    if (rawReply === null)
		        return null;
		    const transformedReply = [];
		    for (let i = 0; i < rawReply.length; i += 2) {
		        transformedReply.push({
		            suggestion: rawReply[i],
		            score: Number(rawReply[i + 1])
		        });
		    }
		    return transformedReply;
		}
		exports.transformReply = transformReply; 
	} (SUGGET_WITHSCORES));
	return SUGGET_WITHSCORES;
}

var SUGLEN = {};

var hasRequiredSUGLEN;

function requireSUGLEN () {
	if (hasRequiredSUGLEN) return SUGLEN;
	hasRequiredSUGLEN = 1;
	Object.defineProperty(SUGLEN, "__esModule", { value: true });
	SUGLEN.transformArguments = SUGLEN.IS_READ_ONLY = void 0;
	SUGLEN.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['FT.SUGLEN', key];
	}
	SUGLEN.transformArguments = transformArguments;
	return SUGLEN;
}

var SYNDUMP = {};

var hasRequiredSYNDUMP;

function requireSYNDUMP () {
	if (hasRequiredSYNDUMP) return SYNDUMP;
	hasRequiredSYNDUMP = 1;
	Object.defineProperty(SYNDUMP, "__esModule", { value: true });
	SYNDUMP.transformArguments = void 0;
	function transformArguments(index) {
	    return ['FT.SYNDUMP', index];
	}
	SYNDUMP.transformArguments = transformArguments;
	return SYNDUMP;
}

var SYNUPDATE = {};

var hasRequiredSYNUPDATE;

function requireSYNUPDATE () {
	if (hasRequiredSYNUPDATE) return SYNUPDATE;
	hasRequiredSYNUPDATE = 1;
	Object.defineProperty(SYNUPDATE, "__esModule", { value: true });
	SYNUPDATE.transformArguments = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	function transformArguments(index, groupId, terms, options) {
	    const args = ['FT.SYNUPDATE', index, groupId];
	    if (options?.SKIPINITIALSCAN) {
	        args.push('SKIPINITIALSCAN');
	    }
	    return (0, generic_transformers_1.pushVerdictArguments)(args, terms);
	}
	SYNUPDATE.transformArguments = transformArguments;
	return SYNUPDATE;
}

var TAGVALS = {};

var hasRequiredTAGVALS;

function requireTAGVALS () {
	if (hasRequiredTAGVALS) return TAGVALS;
	hasRequiredTAGVALS = 1;
	Object.defineProperty(TAGVALS, "__esModule", { value: true });
	TAGVALS.transformArguments = void 0;
	function transformArguments(index, fieldName) {
	    return ['FT.TAGVALS', index, fieldName];
	}
	TAGVALS.transformArguments = transformArguments;
	return TAGVALS;
}

var hasRequiredCommands$1;

function requireCommands$1 () {
	if (hasRequiredCommands$1) return commands$1;
	hasRequiredCommands$1 = 1;
	Object.defineProperty(commands$1, "__esModule", { value: true });
	commands$1.transformProfile = commands$1.pushSearchOptions = commands$1.pushParamsArgs = commands$1.pushSchema = commands$1.VectorAlgorithms = commands$1.SchemaTextFieldPhonetics = commands$1.SchemaFieldTypes = commands$1.pushArgumentsWithLength = commands$1.pushSortByArguments = commands$1.pushSortByProperty = commands$1.RedisSearchLanguages = void 0;
	const _LIST = require_LIST();
	const ALTER = requireALTER$1();
	const AGGREGATE_WITHCURSOR = requireAGGREGATE_WITHCURSOR();
	const AGGREGATE = requireAGGREGATE();
	const ALIASADD = requireALIASADD();
	const ALIASDEL = requireALIASDEL();
	const ALIASUPDATE = requireALIASUPDATE();
	const CONFIG_GET = requireCONFIG_GET();
	const CONFIG_SET = requireCONFIG_SET();
	const CREATE = requireCREATE$1();
	const CURSOR_DEL = requireCURSOR_DEL();
	const CURSOR_READ = requireCURSOR_READ();
	const DICTADD = requireDICTADD();
	const DICTDEL = requireDICTDEL();
	const DICTDUMP = requireDICTDUMP();
	const DROPINDEX = requireDROPINDEX();
	const EXPLAIN = requireEXPLAIN();
	const EXPLAINCLI = requireEXPLAINCLI();
	const INFO = requireINFO$1();
	const PROFILESEARCH = requirePROFILE_SEARCH();
	const PROFILEAGGREGATE = requirePROFILE_AGGREGATE();
	const SEARCH = requireSEARCH();
	const SEARCH_NOCONTENT = requireSEARCH_NOCONTENT();
	const SPELLCHECK = requireSPELLCHECK();
	const SUGADD = requireSUGADD();
	const SUGDEL = requireSUGDEL();
	const SUGGET_WITHPAYLOADS = requireSUGGET_WITHPAYLOADS();
	const SUGGET_WITHSCORES_WITHPAYLOADS = requireSUGGET_WITHSCORES_WITHPAYLOADS();
	const SUGGET_WITHSCORES = requireSUGGET_WITHSCORES();
	const SUGGET = requireSUGGET();
	const SUGLEN = requireSUGLEN();
	const SYNDUMP = requireSYNDUMP();
	const SYNUPDATE = requireSYNUPDATE();
	const TAGVALS = requireTAGVALS();
	const generic_transformers_1 = requireGenericTransformers();
	commands$1.default = {
	    _LIST,
	    _list: _LIST,
	    ALTER,
	    alter: ALTER,
	    AGGREGATE_WITHCURSOR,
	    aggregateWithCursor: AGGREGATE_WITHCURSOR,
	    AGGREGATE,
	    aggregate: AGGREGATE,
	    ALIASADD,
	    aliasAdd: ALIASADD,
	    ALIASDEL,
	    aliasDel: ALIASDEL,
	    ALIASUPDATE,
	    aliasUpdate: ALIASUPDATE,
	    CONFIG_GET,
	    configGet: CONFIG_GET,
	    CONFIG_SET,
	    configSet: CONFIG_SET,
	    CREATE,
	    create: CREATE,
	    CURSOR_DEL,
	    cursorDel: CURSOR_DEL,
	    CURSOR_READ,
	    cursorRead: CURSOR_READ,
	    DICTADD,
	    dictAdd: DICTADD,
	    DICTDEL,
	    dictDel: DICTDEL,
	    DICTDUMP,
	    dictDump: DICTDUMP,
	    DROPINDEX,
	    dropIndex: DROPINDEX,
	    EXPLAIN,
	    explain: EXPLAIN,
	    EXPLAINCLI,
	    explainCli: EXPLAINCLI,
	    INFO,
	    info: INFO,
	    PROFILESEARCH,
	    profileSearch: PROFILESEARCH,
	    PROFILEAGGREGATE,
	    profileAggregate: PROFILEAGGREGATE,
	    SEARCH,
	    search: SEARCH,
	    SEARCH_NOCONTENT,
	    searchNoContent: SEARCH_NOCONTENT,
	    SPELLCHECK,
	    spellCheck: SPELLCHECK,
	    SUGADD,
	    sugAdd: SUGADD,
	    SUGDEL,
	    sugDel: SUGDEL,
	    SUGGET_WITHPAYLOADS,
	    sugGetWithPayloads: SUGGET_WITHPAYLOADS,
	    SUGGET_WITHSCORES_WITHPAYLOADS,
	    sugGetWithScoresWithPayloads: SUGGET_WITHSCORES_WITHPAYLOADS,
	    SUGGET_WITHSCORES,
	    sugGetWithScores: SUGGET_WITHSCORES,
	    SUGGET,
	    sugGet: SUGGET,
	    SUGLEN,
	    sugLen: SUGLEN,
	    SYNDUMP,
	    synDump: SYNDUMP,
	    SYNUPDATE,
	    synUpdate: SYNUPDATE,
	    TAGVALS,
	    tagVals: TAGVALS
	};
	var RedisSearchLanguages;
	(function (RedisSearchLanguages) {
	    RedisSearchLanguages["ARABIC"] = "Arabic";
	    RedisSearchLanguages["BASQUE"] = "Basque";
	    RedisSearchLanguages["CATALANA"] = "Catalan";
	    RedisSearchLanguages["DANISH"] = "Danish";
	    RedisSearchLanguages["DUTCH"] = "Dutch";
	    RedisSearchLanguages["ENGLISH"] = "English";
	    RedisSearchLanguages["FINNISH"] = "Finnish";
	    RedisSearchLanguages["FRENCH"] = "French";
	    RedisSearchLanguages["GERMAN"] = "German";
	    RedisSearchLanguages["GREEK"] = "Greek";
	    RedisSearchLanguages["HUNGARIAN"] = "Hungarian";
	    RedisSearchLanguages["INDONESAIN"] = "Indonesian";
	    RedisSearchLanguages["IRISH"] = "Irish";
	    RedisSearchLanguages["ITALIAN"] = "Italian";
	    RedisSearchLanguages["LITHUANIAN"] = "Lithuanian";
	    RedisSearchLanguages["NEPALI"] = "Nepali";
	    RedisSearchLanguages["NORWEIGAN"] = "Norwegian";
	    RedisSearchLanguages["PORTUGUESE"] = "Portuguese";
	    RedisSearchLanguages["ROMANIAN"] = "Romanian";
	    RedisSearchLanguages["RUSSIAN"] = "Russian";
	    RedisSearchLanguages["SPANISH"] = "Spanish";
	    RedisSearchLanguages["SWEDISH"] = "Swedish";
	    RedisSearchLanguages["TAMIL"] = "Tamil";
	    RedisSearchLanguages["TURKISH"] = "Turkish";
	    RedisSearchLanguages["CHINESE"] = "Chinese";
	})(RedisSearchLanguages || (commands$1.RedisSearchLanguages = RedisSearchLanguages = {}));
	function pushSortByProperty(args, sortBy) {
	    if (typeof sortBy === 'string') {
	        args.push(sortBy);
	    }
	    else {
	        args.push(sortBy.BY);
	        if (sortBy.DIRECTION) {
	            args.push(sortBy.DIRECTION);
	        }
	    }
	}
	commands$1.pushSortByProperty = pushSortByProperty;
	function pushSortByArguments(args, name, sortBy) {
	    const lengthBefore = args.push(name, '' // will be overwritten
	    );
	    if (Array.isArray(sortBy)) {
	        for (const field of sortBy) {
	            pushSortByProperty(args, field);
	        }
	    }
	    else {
	        pushSortByProperty(args, sortBy);
	    }
	    args[lengthBefore - 1] = (args.length - lengthBefore).toString();
	    return args;
	}
	commands$1.pushSortByArguments = pushSortByArguments;
	function pushArgumentsWithLength(args, fn) {
	    const lengthIndex = args.push('') - 1;
	    fn(args);
	    args[lengthIndex] = (args.length - lengthIndex - 1).toString();
	    return args;
	}
	commands$1.pushArgumentsWithLength = pushArgumentsWithLength;
	var SchemaFieldTypes;
	(function (SchemaFieldTypes) {
	    SchemaFieldTypes["TEXT"] = "TEXT";
	    SchemaFieldTypes["NUMERIC"] = "NUMERIC";
	    SchemaFieldTypes["GEO"] = "GEO";
	    SchemaFieldTypes["TAG"] = "TAG";
	    SchemaFieldTypes["VECTOR"] = "VECTOR";
	})(SchemaFieldTypes || (commands$1.SchemaFieldTypes = SchemaFieldTypes = {}));
	var SchemaTextFieldPhonetics;
	(function (SchemaTextFieldPhonetics) {
	    SchemaTextFieldPhonetics["DM_EN"] = "dm:en";
	    SchemaTextFieldPhonetics["DM_FR"] = "dm:fr";
	    SchemaTextFieldPhonetics["FM_PT"] = "dm:pt";
	    SchemaTextFieldPhonetics["DM_ES"] = "dm:es";
	})(SchemaTextFieldPhonetics || (commands$1.SchemaTextFieldPhonetics = SchemaTextFieldPhonetics = {}));
	var VectorAlgorithms;
	(function (VectorAlgorithms) {
	    VectorAlgorithms["FLAT"] = "FLAT";
	    VectorAlgorithms["HNSW"] = "HNSW";
	})(VectorAlgorithms || (commands$1.VectorAlgorithms = VectorAlgorithms = {}));
	function pushSchema(args, schema) {
	    for (const [field, fieldOptions] of Object.entries(schema)) {
	        args.push(field);
	        if (typeof fieldOptions === 'string') {
	            args.push(fieldOptions);
	            continue;
	        }
	        if (fieldOptions.AS) {
	            args.push('AS', fieldOptions.AS);
	        }
	        args.push(fieldOptions.type);
	        switch (fieldOptions.type) {
	            case SchemaFieldTypes.TEXT:
	                if (fieldOptions.NOSTEM) {
	                    args.push('NOSTEM');
	                }
	                if (fieldOptions.WEIGHT) {
	                    args.push('WEIGHT', fieldOptions.WEIGHT.toString());
	                }
	                if (fieldOptions.PHONETIC) {
	                    args.push('PHONETIC', fieldOptions.PHONETIC);
	                }
	                if (fieldOptions.WITHSUFFIXTRIE) {
	                    args.push('WITHSUFFIXTRIE');
	                }
	                break;
	            // case SchemaFieldTypes.NUMERIC:
	            // case SchemaFieldTypes.GEO:
	            //     break;
	            case SchemaFieldTypes.TAG:
	                if (fieldOptions.SEPARATOR) {
	                    args.push('SEPARATOR', fieldOptions.SEPARATOR);
	                }
	                if (fieldOptions.CASESENSITIVE) {
	                    args.push('CASESENSITIVE');
	                }
	                if (fieldOptions.WITHSUFFIXTRIE) {
	                    args.push('WITHSUFFIXTRIE');
	                }
	                break;
	            case SchemaFieldTypes.VECTOR:
	                args.push(fieldOptions.ALGORITHM);
	                pushArgumentsWithLength(args, () => {
	                    args.push('TYPE', fieldOptions.TYPE, 'DIM', fieldOptions.DIM.toString(), 'DISTANCE_METRIC', fieldOptions.DISTANCE_METRIC);
	                    if (fieldOptions.INITIAL_CAP) {
	                        args.push('INITIAL_CAP', fieldOptions.INITIAL_CAP.toString());
	                    }
	                    switch (fieldOptions.ALGORITHM) {
	                        case VectorAlgorithms.FLAT:
	                            if (fieldOptions.BLOCK_SIZE) {
	                                args.push('BLOCK_SIZE', fieldOptions.BLOCK_SIZE.toString());
	                            }
	                            break;
	                        case VectorAlgorithms.HNSW:
	                            if (fieldOptions.M) {
	                                args.push('M', fieldOptions.M.toString());
	                            }
	                            if (fieldOptions.EF_CONSTRUCTION) {
	                                args.push('EF_CONSTRUCTION', fieldOptions.EF_CONSTRUCTION.toString());
	                            }
	                            if (fieldOptions.EF_RUNTIME) {
	                                args.push('EF_RUNTIME', fieldOptions.EF_RUNTIME.toString());
	                            }
	                            break;
	                    }
	                });
	                continue; // vector fields do not contain SORTABLE and NOINDEX options
	        }
	        if (fieldOptions.SORTABLE) {
	            args.push('SORTABLE');
	            if (fieldOptions.SORTABLE === 'UNF') {
	                args.push('UNF');
	            }
	        }
	        if (fieldOptions.NOINDEX) {
	            args.push('NOINDEX');
	        }
	    }
	}
	commands$1.pushSchema = pushSchema;
	function pushParamsArgs(args, params) {
	    if (params) {
	        const enrties = Object.entries(params);
	        args.push('PARAMS', (enrties.length * 2).toString());
	        for (const [key, value] of enrties) {
	            args.push(key, typeof value === 'number' ? value.toString() : value);
	        }
	    }
	    return args;
	}
	commands$1.pushParamsArgs = pushParamsArgs;
	function pushSearchOptions(args, options) {
	    if (options?.VERBATIM) {
	        args.push('VERBATIM');
	    }
	    if (options?.NOSTOPWORDS) {
	        args.push('NOSTOPWORDS');
	    }
	    // if (options?.WITHSCORES) {
	    //     args.push('WITHSCORES');
	    // }
	    // if (options?.WITHPAYLOADS) {
	    //     args.push('WITHPAYLOADS');
	    // }
	    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INKEYS', options?.INKEYS);
	    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INFIELDS', options?.INFIELDS);
	    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'RETURN', options?.RETURN);
	    if (options?.SUMMARIZE) {
	        args.push('SUMMARIZE');
	        if (typeof options.SUMMARIZE === 'object') {
	            if (options.SUMMARIZE.FIELDS) {
	                args.push('FIELDS');
	                (0, generic_transformers_1.pushVerdictArgument)(args, options.SUMMARIZE.FIELDS);
	            }
	            if (options.SUMMARIZE.FRAGS) {
	                args.push('FRAGS', options.SUMMARIZE.FRAGS.toString());
	            }
	            if (options.SUMMARIZE.LEN) {
	                args.push('LEN', options.SUMMARIZE.LEN.toString());
	            }
	            if (options.SUMMARIZE.SEPARATOR) {
	                args.push('SEPARATOR', options.SUMMARIZE.SEPARATOR);
	            }
	        }
	    }
	    if (options?.HIGHLIGHT) {
	        args.push('HIGHLIGHT');
	        if (typeof options.HIGHLIGHT === 'object') {
	            if (options.HIGHLIGHT.FIELDS) {
	                args.push('FIELDS');
	                (0, generic_transformers_1.pushVerdictArgument)(args, options.HIGHLIGHT.FIELDS);
	            }
	            if (options.HIGHLIGHT.TAGS) {
	                args.push('TAGS', options.HIGHLIGHT.TAGS.open, options.HIGHLIGHT.TAGS.close);
	            }
	        }
	    }
	    if (options?.SLOP) {
	        args.push('SLOP', options.SLOP.toString());
	    }
	    if (options?.INORDER) {
	        args.push('INORDER');
	    }
	    if (options?.LANGUAGE) {
	        args.push('LANGUAGE', options.LANGUAGE);
	    }
	    if (options?.EXPANDER) {
	        args.push('EXPANDER', options.EXPANDER);
	    }
	    if (options?.SCORER) {
	        args.push('SCORER', options.SCORER);
	    }
	    // if (options?.EXPLAINSCORE) {
	    //     args.push('EXPLAINSCORE');
	    // }
	    // if (options?.PAYLOAD) {
	    //     args.push('PAYLOAD', options.PAYLOAD);
	    // }
	    if (options?.SORTBY) {
	        args.push('SORTBY');
	        pushSortByProperty(args, options.SORTBY);
	    }
	    // if (options?.MSORTBY) {
	    //     pushSortByArguments(args, 'MSORTBY', options.MSORTBY);
	    // }
	    if (options?.LIMIT) {
	        args.push('LIMIT', options.LIMIT.from.toString(), options.LIMIT.size.toString());
	    }
	    if (options?.PARAMS) {
	        pushParamsArgs(args, options.PARAMS);
	    }
	    if (options?.DIALECT) {
	        args.push('DIALECT', options.DIALECT.toString());
	    }
	    if (options?.RETURN?.length === 0) {
	        args.preserve = true;
	    }
	    if (options?.TIMEOUT !== undefined) {
	        args.push('TIMEOUT', options.TIMEOUT.toString());
	    }
	    return args;
	}
	commands$1.pushSearchOptions = pushSearchOptions;
	function transformProfile(reply) {
	    return {
	        totalProfileTime: reply[0][1],
	        parsingTime: reply[1][1],
	        pipelineCreationTime: reply[2][1],
	        iteratorsProfile: transformIterators(reply[3][1])
	    };
	}
	commands$1.transformProfile = transformProfile;
	function transformIterators(IteratorsProfile) {
	    var res = {};
	    for (let i = 0; i < IteratorsProfile.length; i += 2) {
	        const value = IteratorsProfile[i + 1];
	        switch (IteratorsProfile[i]) {
	            case 'Type':
	                res.type = value;
	                break;
	            case 'Counter':
	                res.counter = value;
	                break;
	            case 'Time':
	                res.time = value;
	                break;
	            case 'Query type':
	                res.queryType = value;
	                break;
	            case 'Child iterators':
	                res.childIterators = value.map(transformChildIterators);
	                break;
	        }
	    }
	    return res;
	}
	function transformChildIterators(IteratorsProfile) {
	    var res = {};
	    for (let i = 1; i < IteratorsProfile.length; i += 2) {
	        const value = IteratorsProfile[i + 1];
	        switch (IteratorsProfile[i]) {
	            case 'Type':
	                res.type = value;
	                break;
	            case 'Counter':
	                res.counter = value;
	                break;
	            case 'Time':
	                res.time = value;
	                break;
	            case 'Size':
	                res.size = value;
	                break;
	            case 'Term':
	                res.term = value;
	                break;
	            case 'Child iterators':
	                res.childIterators = value.map(transformChildIterators);
	                break;
	        }
	    }
	    return res;
	}
	return commands$1;
}

var hasRequiredDist$2;

function requireDist$2 () {
	if (hasRequiredDist$2) return dist$1;
	hasRequiredDist$2 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.AggregateSteps = exports.AggregateGroupByReducers = exports.VectorAlgorithms = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = exports.RedisSearchLanguages = exports.default = void 0;
		var commands_1 = requireCommands$1();
		Object.defineProperty(exports, "default", { enumerable: true, get: function () { return commands_1.default; } });
		var commands_2 = requireCommands$1();
		Object.defineProperty(exports, "RedisSearchLanguages", { enumerable: true, get: function () { return commands_2.RedisSearchLanguages; } });
		Object.defineProperty(exports, "SchemaFieldTypes", { enumerable: true, get: function () { return commands_2.SchemaFieldTypes; } });
		Object.defineProperty(exports, "SchemaTextFieldPhonetics", { enumerable: true, get: function () { return commands_2.SchemaTextFieldPhonetics; } });
		Object.defineProperty(exports, "VectorAlgorithms", { enumerable: true, get: function () { return commands_2.VectorAlgorithms; } });
		var AGGREGATE_1 = requireAGGREGATE();
		Object.defineProperty(exports, "AggregateGroupByReducers", { enumerable: true, get: function () { return AGGREGATE_1.AggregateGroupByReducers; } });
		Object.defineProperty(exports, "AggregateSteps", { enumerable: true, get: function () { return AGGREGATE_1.AggregateSteps; } }); 
	} (dist$1));
	return dist$1;
}

var dist = {};

var commands = {};

var ADD = {};

var hasRequiredADD;

function requireADD () {
	if (hasRequiredADD) return ADD;
	hasRequiredADD = 1;
	Object.defineProperty(ADD, "__esModule", { value: true });
	ADD.transformArguments = ADD.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	ADD.FIRST_KEY_INDEX = 1;
	function transformArguments(key, timestamp, value, options) {
	    const args = [
	        'TS.ADD',
	        key,
	        (0, _1.transformTimestampArgument)(timestamp),
	        value.toString()
	    ];
	    (0, _1.pushRetentionArgument)(args, options?.RETENTION);
	    (0, _1.pushEncodingArgument)(args, options?.ENCODING);
	    (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
	    if (options?.ON_DUPLICATE) {
	        args.push('ON_DUPLICATE', options.ON_DUPLICATE);
	    }
	    (0, _1.pushLabelsArgument)(args, options?.LABELS);
	    return args;
	}
	ADD.transformArguments = transformArguments;
	return ADD;
}

var ALTER = {};

var hasRequiredALTER;

function requireALTER () {
	if (hasRequiredALTER) return ALTER;
	hasRequiredALTER = 1;
	Object.defineProperty(ALTER, "__esModule", { value: true });
	ALTER.transformArguments = ALTER.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	ALTER.FIRST_KEY_INDEX = 1;
	function transformArguments(key, options) {
	    const args = ['TS.ALTER', key];
	    (0, _1.pushRetentionArgument)(args, options?.RETENTION);
	    (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
	    (0, _1.pushDuplicatePolicy)(args, options?.DUPLICATE_POLICY);
	    (0, _1.pushLabelsArgument)(args, options?.LABELS);
	    return args;
	}
	ALTER.transformArguments = transformArguments;
	return ALTER;
}

var CREATE = {};

var hasRequiredCREATE;

function requireCREATE () {
	if (hasRequiredCREATE) return CREATE;
	hasRequiredCREATE = 1;
	Object.defineProperty(CREATE, "__esModule", { value: true });
	CREATE.transformArguments = CREATE.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	CREATE.FIRST_KEY_INDEX = 1;
	function transformArguments(key, options) {
	    const args = ['TS.CREATE', key];
	    (0, _1.pushRetentionArgument)(args, options?.RETENTION);
	    (0, _1.pushEncodingArgument)(args, options?.ENCODING);
	    (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
	    (0, _1.pushDuplicatePolicy)(args, options?.DUPLICATE_POLICY);
	    (0, _1.pushLabelsArgument)(args, options?.LABELS);
	    return args;
	}
	CREATE.transformArguments = transformArguments;
	return CREATE;
}

var CREATERULE = {};

var hasRequiredCREATERULE;

function requireCREATERULE () {
	if (hasRequiredCREATERULE) return CREATERULE;
	hasRequiredCREATERULE = 1;
	Object.defineProperty(CREATERULE, "__esModule", { value: true });
	CREATERULE.transformArguments = CREATERULE.FIRST_KEY_INDEX = void 0;
	CREATERULE.FIRST_KEY_INDEX = 1;
	function transformArguments(sourceKey, destinationKey, aggregationType, bucketDuration, alignTimestamp) {
	    const args = [
	        'TS.CREATERULE',
	        sourceKey,
	        destinationKey,
	        'AGGREGATION',
	        aggregationType,
	        bucketDuration.toString()
	    ];
	    if (alignTimestamp) {
	        args.push(alignTimestamp.toString());
	    }
	    return args;
	}
	CREATERULE.transformArguments = transformArguments;
	return CREATERULE;
}

var DECRBY = {};

var hasRequiredDECRBY;

function requireDECRBY () {
	if (hasRequiredDECRBY) return DECRBY;
	hasRequiredDECRBY = 1;
	Object.defineProperty(DECRBY, "__esModule", { value: true });
	DECRBY.transformArguments = DECRBY.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	DECRBY.FIRST_KEY_INDEX = 1;
	function transformArguments(key, value, options) {
	    return (0, _1.transformIncrDecrArguments)('TS.DECRBY', key, value, options);
	}
	DECRBY.transformArguments = transformArguments;
	return DECRBY;
}

var DEL = {};

var hasRequiredDEL;

function requireDEL () {
	if (hasRequiredDEL) return DEL;
	hasRequiredDEL = 1;
	Object.defineProperty(DEL, "__esModule", { value: true });
	DEL.transformArguments = DEL.FIRTS_KEY_INDEX = void 0;
	const _1 = requireCommands();
	DEL.FIRTS_KEY_INDEX = 1;
	function transformArguments(key, fromTimestamp, toTimestamp) {
	    return [
	        'TS.DEL',
	        key,
	        (0, _1.transformTimestampArgument)(fromTimestamp),
	        (0, _1.transformTimestampArgument)(toTimestamp)
	    ];
	}
	DEL.transformArguments = transformArguments;
	return DEL;
}

var DELETERULE = {};

var hasRequiredDELETERULE;

function requireDELETERULE () {
	if (hasRequiredDELETERULE) return DELETERULE;
	hasRequiredDELETERULE = 1;
	Object.defineProperty(DELETERULE, "__esModule", { value: true });
	DELETERULE.transformArguments = DELETERULE.FIRST_KEY_INDEX = void 0;
	DELETERULE.FIRST_KEY_INDEX = 1;
	function transformArguments(sourceKey, destinationKey) {
	    return [
	        'TS.DELETERULE',
	        sourceKey,
	        destinationKey
	    ];
	}
	DELETERULE.transformArguments = transformArguments;
	return DELETERULE;
}

var GET = {};

var hasRequiredGET;

function requireGET () {
	if (hasRequiredGET) return GET;
	hasRequiredGET = 1;
	Object.defineProperty(GET, "__esModule", { value: true });
	GET.transformReply = GET.transformArguments = GET.IS_READ_ONLY = GET.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	GET.FIRST_KEY_INDEX = 1;
	GET.IS_READ_ONLY = true;
	function transformArguments(key, options) {
	    return (0, _1.pushLatestArgument)(['TS.GET', key], options?.LATEST);
	}
	GET.transformArguments = transformArguments;
	function transformReply(reply) {
	    if (reply.length === 0)
	        return null;
	    return (0, _1.transformSampleReply)(reply);
	}
	GET.transformReply = transformReply;
	return GET;
}

var INCRBY = {};

var hasRequiredINCRBY;

function requireINCRBY () {
	if (hasRequiredINCRBY) return INCRBY;
	hasRequiredINCRBY = 1;
	Object.defineProperty(INCRBY, "__esModule", { value: true });
	INCRBY.transformArguments = INCRBY.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	INCRBY.FIRST_KEY_INDEX = 1;
	function transformArguments(key, value, options) {
	    return (0, _1.transformIncrDecrArguments)('TS.INCRBY', key, value, options);
	}
	INCRBY.transformArguments = transformArguments;
	return INCRBY;
}

var INFO_DEBUG = {};

var INFO = {};

var hasRequiredINFO;

function requireINFO () {
	if (hasRequiredINFO) return INFO;
	hasRequiredINFO = 1;
	Object.defineProperty(INFO, "__esModule", { value: true });
	INFO.transformReply = INFO.transformArguments = INFO.IS_READ_ONLY = INFO.FIRST_KEY_INDEX = void 0;
	INFO.FIRST_KEY_INDEX = 1;
	INFO.IS_READ_ONLY = true;
	function transformArguments(key) {
	    return ['TS.INFO', key];
	}
	INFO.transformArguments = transformArguments;
	function transformReply(reply) {
	    return {
	        totalSamples: reply[1],
	        memoryUsage: reply[3],
	        firstTimestamp: reply[5],
	        lastTimestamp: reply[7],
	        retentionTime: reply[9],
	        chunkCount: reply[11],
	        chunkSize: reply[13],
	        chunkType: reply[15],
	        duplicatePolicy: reply[17],
	        labels: reply[19].map(([name, value]) => ({
	            name,
	            value
	        })),
	        sourceKey: reply[21],
	        rules: reply[23].map(([key, timeBucket, aggregationType]) => ({
	            key,
	            timeBucket,
	            aggregationType
	        }))
	    };
	}
	INFO.transformReply = transformReply;
	return INFO;
}

var hasRequiredINFO_DEBUG;

function requireINFO_DEBUG () {
	if (hasRequiredINFO_DEBUG) return INFO_DEBUG;
	hasRequiredINFO_DEBUG = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = exports.IS_READ_ONLY = void 0;
		const INFO_1 = requireINFO();
		var INFO_2 = requireINFO();
		Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return INFO_2.IS_READ_ONLY; } });
		Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return INFO_2.FIRST_KEY_INDEX; } });
		function transformArguments(key) {
		    const args = (0, INFO_1.transformArguments)(key);
		    args.push('DEBUG');
		    return args;
		}
		exports.transformArguments = transformArguments;
		function transformReply(rawReply) {
		    const reply = (0, INFO_1.transformReply)(rawReply);
		    reply.keySelfName = rawReply[25];
		    reply.chunks = rawReply[27].map(chunk => ({
		        startTimestamp: chunk[1],
		        endTimestamp: chunk[3],
		        samples: chunk[5],
		        size: chunk[7],
		        bytesPerSample: chunk[9]
		    }));
		    return reply;
		}
		exports.transformReply = transformReply; 
	} (INFO_DEBUG));
	return INFO_DEBUG;
}

var MADD = {};

var hasRequiredMADD;

function requireMADD () {
	if (hasRequiredMADD) return MADD;
	hasRequiredMADD = 1;
	Object.defineProperty(MADD, "__esModule", { value: true });
	MADD.transformArguments = MADD.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	MADD.FIRST_KEY_INDEX = 1;
	function transformArguments(toAdd) {
	    const args = ['TS.MADD'];
	    for (const { key, timestamp, value } of toAdd) {
	        args.push(key, (0, _1.transformTimestampArgument)(timestamp), value.toString());
	    }
	    return args;
	}
	MADD.transformArguments = transformArguments;
	return MADD;
}

var MGET = {};

var hasRequiredMGET;

function requireMGET () {
	if (hasRequiredMGET) return MGET;
	hasRequiredMGET = 1;
	Object.defineProperty(MGET, "__esModule", { value: true });
	MGET.transformReply = MGET.transformArguments = MGET.IS_READ_ONLY = void 0;
	const _1 = requireCommands();
	MGET.IS_READ_ONLY = true;
	function transformArguments(filter, options) {
	    const args = (0, _1.pushLatestArgument)(['TS.MGET'], options?.LATEST);
	    return (0, _1.pushFilterArgument)(args, filter);
	}
	MGET.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(([key, _, sample]) => ({
	        key,
	        sample: (0, _1.transformSampleReply)(sample)
	    }));
	}
	MGET.transformReply = transformReply;
	return MGET;
}

var MGET_WITHLABELS = {};

var hasRequiredMGET_WITHLABELS;

function requireMGET_WITHLABELS () {
	if (hasRequiredMGET_WITHLABELS) return MGET_WITHLABELS;
	hasRequiredMGET_WITHLABELS = 1;
	Object.defineProperty(MGET_WITHLABELS, "__esModule", { value: true });
	MGET_WITHLABELS.transformReply = MGET_WITHLABELS.transformArguments = MGET_WITHLABELS.IS_READ_ONLY = void 0;
	const _1 = requireCommands();
	MGET_WITHLABELS.IS_READ_ONLY = true;
	function transformArguments(filter, options) {
	    const args = (0, _1.pushWithLabelsArgument)(['TS.MGET'], options?.SELECTED_LABELS);
	    return (0, _1.pushFilterArgument)(args, filter);
	}
	MGET_WITHLABELS.transformArguments = transformArguments;
	function transformReply(reply) {
	    return reply.map(([key, labels, sample]) => ({
	        key,
	        labels: (0, _1.transformLablesReply)(labels),
	        sample: (0, _1.transformSampleReply)(sample)
	    }));
	}
	MGET_WITHLABELS.transformReply = transformReply;
	return MGET_WITHLABELS;
}

var QUERYINDEX = {};

var hasRequiredQUERYINDEX;

function requireQUERYINDEX () {
	if (hasRequiredQUERYINDEX) return QUERYINDEX;
	hasRequiredQUERYINDEX = 1;
	Object.defineProperty(QUERYINDEX, "__esModule", { value: true });
	QUERYINDEX.transformArguments = QUERYINDEX.IS_READ_ONLY = void 0;
	const generic_transformers_1 = requireGenericTransformers();
	QUERYINDEX.IS_READ_ONLY = true;
	function transformArguments(filter) {
	    return (0, generic_transformers_1.pushVerdictArguments)(['TS.QUERYINDEX'], filter);
	}
	QUERYINDEX.transformArguments = transformArguments;
	return QUERYINDEX;
}

var RANGE = {};

var hasRequiredRANGE;

function requireRANGE () {
	if (hasRequiredRANGE) return RANGE;
	hasRequiredRANGE = 1;
	Object.defineProperty(RANGE, "__esModule", { value: true });
	RANGE.transformReply = RANGE.transformArguments = RANGE.IS_READ_ONLY = RANGE.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	RANGE.FIRST_KEY_INDEX = 1;
	RANGE.IS_READ_ONLY = true;
	function transformArguments(key, fromTimestamp, toTimestamp, options) {
	    return (0, _1.pushRangeArguments)(['TS.RANGE', key], fromTimestamp, toTimestamp, options);
	}
	RANGE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return (0, _1.transformRangeReply)(reply);
	}
	RANGE.transformReply = transformReply;
	return RANGE;
}

var REVRANGE = {};

var hasRequiredREVRANGE;

function requireREVRANGE () {
	if (hasRequiredREVRANGE) return REVRANGE;
	hasRequiredREVRANGE = 1;
	Object.defineProperty(REVRANGE, "__esModule", { value: true });
	REVRANGE.transformReply = REVRANGE.transformArguments = REVRANGE.IS_READ_ONLY = REVRANGE.FIRST_KEY_INDEX = void 0;
	const _1 = requireCommands();
	REVRANGE.FIRST_KEY_INDEX = 1;
	REVRANGE.IS_READ_ONLY = true;
	function transformArguments(key, fromTimestamp, toTimestamp, options) {
	    return (0, _1.pushRangeArguments)(['TS.REVRANGE', key], fromTimestamp, toTimestamp, options);
	}
	REVRANGE.transformArguments = transformArguments;
	function transformReply(reply) {
	    return (0, _1.transformRangeReply)(reply);
	}
	REVRANGE.transformReply = transformReply;
	return REVRANGE;
}

var MRANGE = {};

var hasRequiredMRANGE;

function requireMRANGE () {
	if (hasRequiredMRANGE) return MRANGE;
	hasRequiredMRANGE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const _1 = requireCommands();
		exports.IS_READ_ONLY = true;
		function transformArguments(fromTimestamp, toTimestamp, filters, options) {
		    return (0, _1.pushMRangeArguments)(['TS.MRANGE'], fromTimestamp, toTimestamp, filters, options);
		}
		exports.transformArguments = transformArguments;
		var _2 = requireCommands();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _2.transformMRangeReply; } }); 
	} (MRANGE));
	return MRANGE;
}

var MRANGE_WITHLABELS = {};

var hasRequiredMRANGE_WITHLABELS;

function requireMRANGE_WITHLABELS () {
	if (hasRequiredMRANGE_WITHLABELS) return MRANGE_WITHLABELS;
	hasRequiredMRANGE_WITHLABELS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const _1 = requireCommands();
		exports.IS_READ_ONLY = true;
		function transformArguments(fromTimestamp, toTimestamp, filters, options) {
		    return (0, _1.pushMRangeWithLabelsArguments)(['TS.MRANGE'], fromTimestamp, toTimestamp, filters, options);
		}
		exports.transformArguments = transformArguments;
		var _2 = requireCommands();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _2.transformMRangeWithLabelsReply; } }); 
	} (MRANGE_WITHLABELS));
	return MRANGE_WITHLABELS;
}

var MREVRANGE = {};

var hasRequiredMREVRANGE;

function requireMREVRANGE () {
	if (hasRequiredMREVRANGE) return MREVRANGE;
	hasRequiredMREVRANGE = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const _1 = requireCommands();
		exports.IS_READ_ONLY = true;
		function transformArguments(fromTimestamp, toTimestamp, filters, options) {
		    return (0, _1.pushMRangeArguments)(['TS.MREVRANGE'], fromTimestamp, toTimestamp, filters, options);
		}
		exports.transformArguments = transformArguments;
		var _2 = requireCommands();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _2.transformMRangeReply; } }); 
	} (MREVRANGE));
	return MREVRANGE;
}

var MREVRANGE_WITHLABELS = {};

var hasRequiredMREVRANGE_WITHLABELS;

function requireMREVRANGE_WITHLABELS () {
	if (hasRequiredMREVRANGE_WITHLABELS) return MREVRANGE_WITHLABELS;
	hasRequiredMREVRANGE_WITHLABELS = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
		const _1 = requireCommands();
		exports.IS_READ_ONLY = true;
		function transformArguments(fromTimestamp, toTimestamp, filters, options) {
		    return (0, _1.pushMRangeWithLabelsArguments)(['TS.MREVRANGE'], fromTimestamp, toTimestamp, filters, options);
		}
		exports.transformArguments = transformArguments;
		var _2 = requireCommands();
		Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _2.transformMRangeWithLabelsReply; } }); 
	} (MREVRANGE_WITHLABELS));
	return MREVRANGE_WITHLABELS;
}

var hasRequiredCommands;

function requireCommands () {
	if (hasRequiredCommands) return commands;
	hasRequiredCommands = 1;
	Object.defineProperty(commands, "__esModule", { value: true });
	commands.pushLatestArgument = commands.transformMRangeWithLabelsReply = commands.transformMRangeReply = commands.transformRangeReply = commands.pushMRangeWithLabelsArguments = commands.pushWithLabelsArgument = commands.pushMRangeArguments = commands.pushFilterArgument = commands.pushMRangeGroupByArguments = commands.pushRangeArguments = commands.TimeSeriesBucketTimestamp = commands.transformSampleReply = commands.transformIncrDecrArguments = commands.pushLabelsArgument = commands.transformLablesReply = commands.pushDuplicatePolicy = commands.pushChunkSizeArgument = commands.pushEncodingArgument = commands.TimeSeriesEncoding = commands.pushRetentionArgument = commands.transformTimestampArgument = commands.TimeSeriesReducers = commands.TimeSeriesDuplicatePolicies = commands.TimeSeriesAggregationType = void 0;
	const ADD = requireADD();
	const ALTER = requireALTER();
	const CREATE = requireCREATE();
	const CREATERULE = requireCREATERULE();
	const DECRBY = requireDECRBY();
	const DEL = requireDEL();
	const DELETERULE = requireDELETERULE();
	const GET = requireGET();
	const INCRBY = requireINCRBY();
	const INFO_DEBUG = requireINFO_DEBUG();
	const INFO = requireINFO();
	const MADD = requireMADD();
	const MGET = requireMGET();
	const MGET_WITHLABELS = requireMGET_WITHLABELS();
	const QUERYINDEX = requireQUERYINDEX();
	const RANGE = requireRANGE();
	const REVRANGE = requireREVRANGE();
	const MRANGE = requireMRANGE();
	const MRANGE_WITHLABELS = requireMRANGE_WITHLABELS();
	const MREVRANGE = requireMREVRANGE();
	const MREVRANGE_WITHLABELS = requireMREVRANGE_WITHLABELS();
	const generic_transformers_1 = requireGenericTransformers();
	commands.default = {
	    ADD,
	    add: ADD,
	    ALTER,
	    alter: ALTER,
	    CREATE,
	    create: CREATE,
	    CREATERULE,
	    createRule: CREATERULE,
	    DECRBY,
	    decrBy: DECRBY,
	    DEL,
	    del: DEL,
	    DELETERULE,
	    deleteRule: DELETERULE,
	    GET,
	    get: GET,
	    INCRBY,
	    incrBy: INCRBY,
	    INFO_DEBUG,
	    infoDebug: INFO_DEBUG,
	    INFO,
	    info: INFO,
	    MADD,
	    mAdd: MADD,
	    MGET,
	    mGet: MGET,
	    MGET_WITHLABELS,
	    mGetWithLabels: MGET_WITHLABELS,
	    QUERYINDEX,
	    queryIndex: QUERYINDEX,
	    RANGE,
	    range: RANGE,
	    REVRANGE,
	    revRange: REVRANGE,
	    MRANGE,
	    mRange: MRANGE,
	    MRANGE_WITHLABELS,
	    mRangeWithLabels: MRANGE_WITHLABELS,
	    MREVRANGE,
	    mRevRange: MREVRANGE,
	    MREVRANGE_WITHLABELS,
	    mRevRangeWithLabels: MREVRANGE_WITHLABELS
	};
	var TimeSeriesAggregationType;
	(function (TimeSeriesAggregationType) {
	    TimeSeriesAggregationType["AVG"] = "AVG";
	    // @deprecated
	    TimeSeriesAggregationType["AVERAGE"] = "AVG";
	    TimeSeriesAggregationType["FIRST"] = "FIRST";
	    TimeSeriesAggregationType["LAST"] = "LAST";
	    TimeSeriesAggregationType["MIN"] = "MIN";
	    // @deprecated
	    TimeSeriesAggregationType["MINIMUM"] = "MIN";
	    TimeSeriesAggregationType["MAX"] = "MAX";
	    // @deprecated
	    TimeSeriesAggregationType["MAXIMUM"] = "MAX";
	    TimeSeriesAggregationType["SUM"] = "SUM";
	    TimeSeriesAggregationType["RANGE"] = "RANGE";
	    TimeSeriesAggregationType["COUNT"] = "COUNT";
	    TimeSeriesAggregationType["STD_P"] = "STD.P";
	    TimeSeriesAggregationType["STD_S"] = "STD.S";
	    TimeSeriesAggregationType["VAR_P"] = "VAR.P";
	    TimeSeriesAggregationType["VAR_S"] = "VAR.S";
	    TimeSeriesAggregationType["TWA"] = "TWA";
	})(TimeSeriesAggregationType || (commands.TimeSeriesAggregationType = TimeSeriesAggregationType = {}));
	var TimeSeriesDuplicatePolicies;
	(function (TimeSeriesDuplicatePolicies) {
	    TimeSeriesDuplicatePolicies["BLOCK"] = "BLOCK";
	    TimeSeriesDuplicatePolicies["FIRST"] = "FIRST";
	    TimeSeriesDuplicatePolicies["LAST"] = "LAST";
	    TimeSeriesDuplicatePolicies["MIN"] = "MIN";
	    TimeSeriesDuplicatePolicies["MAX"] = "MAX";
	    TimeSeriesDuplicatePolicies["SUM"] = "SUM";
	})(TimeSeriesDuplicatePolicies || (commands.TimeSeriesDuplicatePolicies = TimeSeriesDuplicatePolicies = {}));
	var TimeSeriesReducers;
	(function (TimeSeriesReducers) {
	    TimeSeriesReducers["AVG"] = "AVG";
	    TimeSeriesReducers["SUM"] = "SUM";
	    TimeSeriesReducers["MIN"] = "MIN";
	    // @deprecated
	    TimeSeriesReducers["MINIMUM"] = "MIN";
	    TimeSeriesReducers["MAX"] = "MAX";
	    // @deprecated
	    TimeSeriesReducers["MAXIMUM"] = "MAX";
	    TimeSeriesReducers["RANGE"] = "range";
	    TimeSeriesReducers["COUNT"] = "COUNT";
	    TimeSeriesReducers["STD_P"] = "STD.P";
	    TimeSeriesReducers["STD_S"] = "STD.S";
	    TimeSeriesReducers["VAR_P"] = "VAR.P";
	    TimeSeriesReducers["VAR_S"] = "VAR.S";
	})(TimeSeriesReducers || (commands.TimeSeriesReducers = TimeSeriesReducers = {}));
	function transformTimestampArgument(timestamp) {
	    if (typeof timestamp === 'string')
	        return timestamp;
	    return (typeof timestamp === 'number' ?
	        timestamp :
	        timestamp.getTime()).toString();
	}
	commands.transformTimestampArgument = transformTimestampArgument;
	function pushRetentionArgument(args, retention) {
	    if (retention !== undefined) {
	        args.push('RETENTION', retention.toString());
	    }
	    return args;
	}
	commands.pushRetentionArgument = pushRetentionArgument;
	var TimeSeriesEncoding;
	(function (TimeSeriesEncoding) {
	    TimeSeriesEncoding["COMPRESSED"] = "COMPRESSED";
	    TimeSeriesEncoding["UNCOMPRESSED"] = "UNCOMPRESSED";
	})(TimeSeriesEncoding || (commands.TimeSeriesEncoding = TimeSeriesEncoding = {}));
	function pushEncodingArgument(args, encoding) {
	    if (encoding !== undefined) {
	        args.push('ENCODING', encoding);
	    }
	    return args;
	}
	commands.pushEncodingArgument = pushEncodingArgument;
	function pushChunkSizeArgument(args, chunkSize) {
	    if (chunkSize !== undefined) {
	        args.push('CHUNK_SIZE', chunkSize.toString());
	    }
	    return args;
	}
	commands.pushChunkSizeArgument = pushChunkSizeArgument;
	function pushDuplicatePolicy(args, duplicatePolicy) {
	    if (duplicatePolicy !== undefined) {
	        args.push('DUPLICATE_POLICY', duplicatePolicy);
	    }
	    return args;
	}
	commands.pushDuplicatePolicy = pushDuplicatePolicy;
	function transformLablesReply(reply) {
	    const labels = {};
	    for (const [key, value] of reply) {
	        labels[key] = value;
	    }
	    return labels;
	}
	commands.transformLablesReply = transformLablesReply;
	function pushLabelsArgument(args, labels) {
	    if (labels) {
	        args.push('LABELS');
	        for (const [label, value] of Object.entries(labels)) {
	            args.push(label, value);
	        }
	    }
	    return args;
	}
	commands.pushLabelsArgument = pushLabelsArgument;
	function transformIncrDecrArguments(command, key, value, options) {
	    const args = [
	        command,
	        key,
	        value.toString()
	    ];
	    if (options?.TIMESTAMP !== undefined && options?.TIMESTAMP !== null) {
	        args.push('TIMESTAMP', transformTimestampArgument(options.TIMESTAMP));
	    }
	    pushRetentionArgument(args, options?.RETENTION);
	    if (options?.UNCOMPRESSED) {
	        args.push('UNCOMPRESSED');
	    }
	    pushChunkSizeArgument(args, options?.CHUNK_SIZE);
	    pushLabelsArgument(args, options?.LABELS);
	    return args;
	}
	commands.transformIncrDecrArguments = transformIncrDecrArguments;
	function transformSampleReply(reply) {
	    return {
	        timestamp: reply[0],
	        value: Number(reply[1])
	    };
	}
	commands.transformSampleReply = transformSampleReply;
	var TimeSeriesBucketTimestamp;
	(function (TimeSeriesBucketTimestamp) {
	    TimeSeriesBucketTimestamp["LOW"] = "-";
	    TimeSeriesBucketTimestamp["HIGH"] = "+";
	    TimeSeriesBucketTimestamp["MID"] = "~";
	})(TimeSeriesBucketTimestamp || (commands.TimeSeriesBucketTimestamp = TimeSeriesBucketTimestamp = {}));
	function pushRangeArguments(args, fromTimestamp, toTimestamp, options) {
	    args.push(transformTimestampArgument(fromTimestamp), transformTimestampArgument(toTimestamp));
	    pushLatestArgument(args, options?.LATEST);
	    if (options?.FILTER_BY_TS) {
	        args.push('FILTER_BY_TS');
	        for (const ts of options.FILTER_BY_TS) {
	            args.push(transformTimestampArgument(ts));
	        }
	    }
	    if (options?.FILTER_BY_VALUE) {
	        args.push('FILTER_BY_VALUE', options.FILTER_BY_VALUE.min.toString(), options.FILTER_BY_VALUE.max.toString());
	    }
	    if (options?.COUNT) {
	        args.push('COUNT', options.COUNT.toString());
	    }
	    if (options?.ALIGN) {
	        args.push('ALIGN', transformTimestampArgument(options.ALIGN));
	    }
	    if (options?.AGGREGATION) {
	        args.push('AGGREGATION', options.AGGREGATION.type, transformTimestampArgument(options.AGGREGATION.timeBucket));
	        if (options.AGGREGATION.BUCKETTIMESTAMP) {
	            args.push('BUCKETTIMESTAMP', options.AGGREGATION.BUCKETTIMESTAMP);
	        }
	        if (options.AGGREGATION.EMPTY) {
	            args.push('EMPTY');
	        }
	    }
	    return args;
	}
	commands.pushRangeArguments = pushRangeArguments;
	function pushMRangeGroupByArguments(args, groupBy) {
	    if (groupBy) {
	        args.push('GROUPBY', groupBy.label, 'REDUCE', groupBy.reducer);
	    }
	    return args;
	}
	commands.pushMRangeGroupByArguments = pushMRangeGroupByArguments;
	function pushFilterArgument(args, filter) {
	    args.push('FILTER');
	    return (0, generic_transformers_1.pushVerdictArguments)(args, filter);
	}
	commands.pushFilterArgument = pushFilterArgument;
	function pushMRangeArguments(args, fromTimestamp, toTimestamp, filter, options) {
	    args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
	    args = pushFilterArgument(args, filter);
	    return pushMRangeGroupByArguments(args, options?.GROUPBY);
	}
	commands.pushMRangeArguments = pushMRangeArguments;
	function pushWithLabelsArgument(args, selectedLabels) {
	    if (!selectedLabels) {
	        args.push('WITHLABELS');
	    }
	    else {
	        args.push('SELECTED_LABELS');
	        args = (0, generic_transformers_1.pushVerdictArguments)(args, selectedLabels);
	    }
	    return args;
	}
	commands.pushWithLabelsArgument = pushWithLabelsArgument;
	function pushMRangeWithLabelsArguments(args, fromTimestamp, toTimestamp, filter, options) {
	    args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
	    args = pushWithLabelsArgument(args, options?.SELECTED_LABELS);
	    args = pushFilterArgument(args, filter);
	    return pushMRangeGroupByArguments(args, options?.GROUPBY);
	}
	commands.pushMRangeWithLabelsArguments = pushMRangeWithLabelsArguments;
	function transformRangeReply(reply) {
	    return reply.map(transformSampleReply);
	}
	commands.transformRangeReply = transformRangeReply;
	function transformMRangeReply(reply) {
	    const args = [];
	    for (const [key, _, sample] of reply) {
	        args.push({
	            key,
	            samples: sample.map(transformSampleReply)
	        });
	    }
	    return args;
	}
	commands.transformMRangeReply = transformMRangeReply;
	function transformMRangeWithLabelsReply(reply) {
	    const args = [];
	    for (const [key, labels, samples] of reply) {
	        args.push({
	            key,
	            labels: transformLablesReply(labels),
	            samples: samples.map(transformSampleReply)
	        });
	    }
	    return args;
	}
	commands.transformMRangeWithLabelsReply = transformMRangeWithLabelsReply;
	function pushLatestArgument(args, latest) {
	    if (latest) {
	        args.push('LATEST');
	    }
	    return args;
	}
	commands.pushLatestArgument = pushLatestArgument;
	return commands;
}

var hasRequiredDist$1;

function requireDist$1 () {
	if (hasRequiredDist$1) return dist;
	hasRequiredDist$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.TimeSeriesBucketTimestamp = exports.TimeSeriesReducers = exports.TimeSeriesAggregationType = exports.TimeSeriesEncoding = exports.TimeSeriesDuplicatePolicies = exports.default = void 0;
		var commands_1 = requireCommands();
		Object.defineProperty(exports, "default", { enumerable: true, get: function () { return commands_1.default; } });
		var commands_2 = requireCommands();
		Object.defineProperty(exports, "TimeSeriesDuplicatePolicies", { enumerable: true, get: function () { return commands_2.TimeSeriesDuplicatePolicies; } });
		Object.defineProperty(exports, "TimeSeriesEncoding", { enumerable: true, get: function () { return commands_2.TimeSeriesEncoding; } });
		Object.defineProperty(exports, "TimeSeriesAggregationType", { enumerable: true, get: function () { return commands_2.TimeSeriesAggregationType; } });
		Object.defineProperty(exports, "TimeSeriesReducers", { enumerable: true, get: function () { return commands_2.TimeSeriesReducers; } });
		Object.defineProperty(exports, "TimeSeriesBucketTimestamp", { enumerable: true, get: function () { return commands_2.TimeSeriesBucketTimestamp; } }); 
	} (dist));
	return dist;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist$6;
	hasRequiredDist = 1;
	(function (exports) {
		var __createBinding = (dist$6 && dist$6.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (dist$6 && dist$6.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createCluster = exports.createClient = void 0;
		const client_1 = requireDist$6();
		const bloom_1 = requireDist$5();
		const graph_1 = requireDist$4();
		const json_1 = requireDist$3();
		const search_1 = requireDist$2();
		const time_series_1 = requireDist$1();
		__exportStar(requireDist$6(), exports);
		__exportStar(requireDist$5(), exports);
		__exportStar(requireDist$4(), exports);
		__exportStar(requireDist$3(), exports);
		__exportStar(requireDist$2(), exports);
		__exportStar(requireDist$1(), exports);
		const modules = {
		    ...bloom_1.default,
		    graph: graph_1.default,
		    json: json_1.default,
		    ft: search_1.default,
		    ts: time_series_1.default
		};
		function createClient(options) {
		    return (0, client_1.createClient)({
		        ...options,
		        modules: {
		            ...modules,
		            ...options?.modules
		        }
		    });
		}
		exports.createClient = createClient;
		function createCluster(options) {
		    return (0, client_1.createCluster)({
		        ...options,
		        modules: {
		            ...modules,
		            ...options?.modules
		        }
		    });
		}
		exports.createCluster = createCluster; 
	} (dist$6));
	return dist$6;
}

var distExports = requireDist();

const REDIS_PORT = "6378";
const WEBHOOK = "ce66bc9a-da34-11ef-9d15-93fa09a0faac";
const TELEGRAM_BOT_TOKEN = "6314329755:AAEZa1t9gRdLRmXdfovK_cXY3FoEB_FAvtA";
const TELEGRAM_CHANNEL = "@izvestia_1917";
const client = distExports.createClient({ url: `redis://localhost:${REDIS_PORT}` });
let isConnected = false;
const prependZeroes = (id) => `${+id + 1e7}`.replace(/^1/, "");
const byDate = async (date) => {
  const search = `?date=${date}`;
  if (/^\d{4}$/.test(date)) return `/${date}/1/1${search}`;
  const arr = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date) || [];
  const [_, year, month, day] = arr;
  if (!(year && month && day)) throw "date is not parsed";
  const verbMonth = new Date(date).toLocaleString("ru-RU", { month: "short" }).replace(".", "");
  const client2 = await getConnection();
  const keys = (await client2.keys(`izvestia:${year}:*`)).filter((key2) => /^izvestia:\d{4}:\d{3}$/.test(key2));
  const verbDates = await Promise.all(keys.map((key2) => client2.hGet(key2, "date")));
  const i = verbDates.findIndex((vd) => {
    if (typeof vd !== "string") throw "date not found";
    const arr2 = vd.split(" ");
    if (arr2.length !== 3) throw "bad date";
    const [d, m, y] = arr2;
    return +d === +day && +y === +year && m.startsWith(verbMonth);
  });
  const key = keys[i];
  if (!key) throw "key not found";
  const [__, num] = /.*\:(\d{3})$/.exec(key) || [];
  const numNum = +num;
  if (isNaN(numNum)) throw "key is nan";
  return `/view/${year}/${numNum}/1${search}`;
};
const getConnection = async () => {
  if (isConnected) return client;
  await client.connect();
  isConnected = true;
  return client;
};
const getIssueKey = (year, num) => {
  const prefix = `izvestia:${year}`;
  const numNum = +num;
  if (numNum < 10) return `${prefix}:00${num}`;
  if (numNum < 100) return `${prefix}:0${num}`;
  return `${prefix}:${num}`;
};
const getPage = async (year, issue, page) => {
  const client2 = await getConnection();
  const issueKey = getIssueKey(year, issue);
  const dateId = await client2.hGetAll(issueKey);
  if (!dateId) throw "issue not found";
  const { date, id } = dateId;
  const pageKey = `${issueKey}:page:${page}`;
  const content = await client2.hGetAll(pageKey);
  if (!content) throw "page not found";
  const count = (await client2.keys(`${issueKey}:page:*`)).length;
  return { content, year, issue, page, date, id, count };
};

export { TELEGRAM_CHANNEL as T, WEBHOOK as W, getIssueKey as a, getPage as b, byDate as c, TELEGRAM_BOT_TOKEN as d, getConnection as g, prependZeroes as p };
//# sourceMappingURL=connection-wWuHO8tR.js.map
