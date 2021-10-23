'use strict';
const _0x23c8f5 = _0x3aa5;
(function (_0x14d1ff, _0x5e49d4) {
    const _0x31e410 = _0x3aa5, _0xbcdff7 = _0x14d1ff();
    while (!![]) {
        try {
            const _0x342077 = parseInt(_0x31e410(0x104)) / 0x1 + parseInt(_0x31e410(0x123)) / 0x2 * (parseInt(_0x31e410(0x151)) / 0x3) + -parseInt(_0x31e410(0x142)) / 0x4 + parseInt(_0x31e410(0xce)) / 0x5 + parseInt(_0x31e410(0xc7)) / 0x6 + -parseInt(_0x31e410(0xd9)) / 0x7 * (parseInt(_0x31e410(0x13f)) / 0x8) + parseInt(_0x31e410(0x121)) / 0x9 * (parseInt(_0x31e410(0x154)) / 0xa);
            if (_0x342077 === _0x5e49d4)
                break;
            else
                _0xbcdff7['push'](_0xbcdff7['shift']());
        } catch (_0x95fa25) {
            _0xbcdff7['push'](_0xbcdff7['shift']());
        }
    }
}(_0x19ba, 0x5f6f5));
const ccxt = require(_0x23c8f5(0xa8)), low = require(_0x23c8f5(0x160)), FileSync = require(_0x23c8f5(0xee)), fs = require('fs'), fns = require(_0x23c8f5(0x165)), {WebsocketClient, DefaultLogger} = require(_0x23c8f5(0xfb)), Crypt = require(_0x23c8f5(0xae))[_0x23c8f5(0x12e)];
let exchange, wsClient;
global['ticker'] = {};
let ws1 = [], ws2 = null, config, markets, allSymbols, currentCoins = [], previousCoins = [], lastBalances, mybalances, lastPerformanceEmitted, lastPerformanceStored, lockOrders = ![], lastOrders, cooldownTracker = [], coolingDown = ![];
const resetInterval = 0xe10 * 0x3e8, cooldownPeriod = 0xe10 * 0x3e8, cooldownInterval = 0x5 * 0x3c, getBalancesInterval = 0xa * 0x3e8, pauseBotInterval = 0x5 * 0x3c * 0x3e8, validateOrderInterval = 0xa * 0x3e8, validateOrderTimeout = 0x3c;
let initialPerformanceStored;
const logPageSize = 0x14;
let wsinitialized = ![], pidBalances, pidOrders, botPaused = ![];
const serverversion = require(_0x23c8f5(0x17d))[_0x23c8f5(0xa5)], botID = process[_0x23c8f5(0xb0)][0x2] || _0x23c8f5(0x94), pattern = /^[0-9]{3}$/;
if (!pattern[_0x23c8f5(0x16e)](botID))
    return console['log']('Error:\x20Invalid\x20argument\x20' + botID + _0x23c8f5(0x8e)), process[_0x23c8f5(0xa4)](0x1);
const configpath = _0x23c8f5(0x171);
!fs[_0x23c8f5(0xe4)](configpath) && fs[_0x23c8f5(0x14e)](configpath);
const configfile = configpath + 'bot-' + botID + '-config.json', logfile = configpath + _0x23c8f5(0x95) + botID + _0x23c8f5(0x116), performancefile = configpath + 'bot-' + botID + _0x23c8f5(0xc8), coinresultsfile = configpath + _0x23c8f5(0x95) + botID + _0x23c8f5(0x10f), settingsfile = configpath + 'bb-settings.json', securefile = configpath + 'bb-secure.json', adapter = new FileSync(logfile), dbLogs = low(adapter);
dbLogs['defaults']({ 'logs': [] })[_0x23c8f5(0xcd)]();
const adapter2 = new FileSync(performancefile), dbPerformance = low(adapter2);
dbPerformance[_0x23c8f5(0x10d)]({ 'data': [] })['write']();
const adapter3 = new FileSync(configfile), dbConfig = low(adapter3);
dbConfig['defaults']({ 'bot': [] })[_0x23c8f5(0xcd)]();
const adapter4 = new FileSync(coinresultsfile), dbCoinResults = low(adapter4);
dbCoinResults[_0x23c8f5(0x10d)]({ 'coins': [] })[_0x23c8f5(0xcd)]();
const adapter5 = new FileSync(settingsfile), dbSettings = low(adapter5), adapter6 = new FileSync(securefile), dbSecure = low(adapter6);
function _0x3aa5(_0x24bd86, _0x12444e) {
    const _0x19bae9 = _0x19ba();
    return _0x3aa5 = function (_0x3aa50e, _0x2b504d) {
        _0x3aa50e = _0x3aa50e - 0x89;
        let _0x1004bc = _0x19bae9[_0x3aa50e];
        return _0x1004bc;
    }, _0x3aa5(_0x24bd86, _0x12444e);
}
let stablecoins = {
        'eur': {
            'coin': _0x23c8f5(0xcb),
            'symbol': 'BTC/EUR'
        },
        'usd': {
            'coin': 'BTCUSDT',
            'symbol': _0x23c8f5(0x16d)
        }
    }, lastErrorShown, lastBotPause, consecutivePauses = 0x0;
const logger = {
        ...DefaultLogger,
        'silly': (..._0x503ccb) => {
        },
        'debug': (..._0x4e9f4f) => {
        },
        'notice': (..._0x2557df) => {
        },
        'info': (..._0x181bff) => {
        },
        'warning': (..._0x2519ba) => {
        },
        'error': async function (..._0x51a966) {
            const _0x3a1b75 = _0x23c8f5, _0x4c5911 = new Date()[_0x3a1b75(0x13d)]();
            if (!lastErrorShown || _0x4c5911 - lastErrorShown >= pauseBotInterval) {
                lastErrorShown = new Date()['getTime'](), logHistory(_0x3a1b75(0xba), _0x3a1b75(0xad) + consecutivePauses + _0x3a1b75(0x10a));
                let _0x29b243 = '';
                if (_0x51a966[0x0])
                    _0x29b243 += _0x51a966[0x0];
                if (_0x51a966[0x1]?.['error']?.['message'])
                    _0x29b243 += _0x3a1b75(0x120) + _0x51a966[0x1]['error'][_0x3a1b75(0x12f)];
                logging(_0x3a1b75(0xad) + consecutivePauses + _0x3a1b75(0xec), '' + _0x29b243), await pauseBot(pauseBotInterval);
            }
        }
    }, crypt = new Crypt({
        'md': _0x23c8f5(0x149),
        'rsaStandard': 'RSA-OAEP'
    });
let settings = getSettings(), secure = getSecure();
config = getConfiguration(botID);
settings[_0x23c8f5(0x184)] != config[_0x23c8f5(0x184)] && updateTimeshift(settings[_0x23c8f5(0x184)]);
process[_0x23c8f5(0x108)]({ 'started': _0x23c8f5(0xfd) }), initializeProcessListeners();
function proxyEmit(_0x35b628, _0x319a9b = null) {
    const _0x409c94 = _0x23c8f5;
    process[_0x409c94(0x108)]({
        'function': _0x35b628,
        'args': _0x319a9b
    });
}
function initializeProcessListeners() {
    const _0x5f808e = _0x23c8f5;
    process['on'](_0x5f808e(0x12f), _0x42e145 => {
        const _0x2ffe9c = _0x5f808e;
        switch (Object[_0x2ffe9c(0xbb)](_0x42e145)[0x0]) {
        case 'timeshift':
            _0x42e145[_0x2ffe9c(0x184)] != undefined && (settings[_0x2ffe9c(0x184)] = _0x42e145['timeshift'], updateTimeshift(settings[_0x2ffe9c(0x184)]));
            break;
        case 'function':
            switch (_0x42e145[_0x2ffe9c(0x105)]) {
            case 'initclient':
                initclient();
                break;
            case 'emitHistory':
                emitHistory(_0x42e145[_0x2ffe9c(0x15c)]);
                break;
            case _0x2ffe9c(0xb6):
                getPortfolio(_0x42e145[_0x2ffe9c(0x15c)]);
                break;
            case _0x2ffe9c(0xd0):
                storeConfiguration(_0x42e145['args']);
                break;
            case _0x2ffe9c(0x161):
                storeHeadless(_0x42e145[_0x2ffe9c(0x15c)]);
                break;
            case _0x2ffe9c(0xf7):
                getStartingBalances();
                break;
            case _0x2ffe9c(0x168):
                placeOrder(_0x42e145[_0x2ffe9c(0x15c)]);
                break;
            }
        }
    });
}
headlessStart();
async function headlessStart() {
    reset();
}
async function reset() {
    if (pidBalances)
        clearTimeout(pidBalances);
    if (config['apiKey'] != '') {
        await initExchange(config['apiKey'], config['apiSecret']);
        let _0x58b1c5 = await loadSymbols();
        _0x58b1c5 && (currentCoins = await getCoins(), await initws(), initbot());
    }
}
async function initExchange(_0x183482, _0x367f49) {
    const _0x2c4e9b = _0x23c8f5, _0x4e6073 = ccxt[config[_0x2c4e9b(0x11f)]];
    let _0x59f00f;
    switch (config[_0x2c4e9b(0x11f)]) {
    case _0x2c4e9b(0xfb):
        _0x59f00f = _0x2c4e9b(0x15e);
        break;
    case _0x2c4e9b(0x8a):
        _0x59f00f = _0x2c4e9b(0x172);
        break;
    default:
        _0x59f00f = _0x2c4e9b(0x15e);
    }
    exchange = new _0x4e6073({
        'apiKey': _0x183482,
        'secret': _0x367f49,
        'timeout': 0x7530,
        'enableRateLimit': !![]
    }), wsClient = new WebsocketClient({
        'api_key': _0x183482,
        'api_secret': _0x367f49,
        'beautify': !![],
        'wsUrl': _0x59f00f
    }, logger), config[_0x2c4e9b(0x11f)] == 'binanceus' && (stablecoins = {
        'eur': {
            'coin': _0x2c4e9b(0xd8),
            'symbol': _0x2c4e9b(0xde)
        },
        'usd': {
            'coin': 'BTCUSDT',
            'symbol': _0x2c4e9b(0x16d)
        }
    });
}
async function loadSymbols() {
    const _0x3fb40e = _0x23c8f5;
    let _0x357b48;
    try {
        markets = await exchange['loadMarkets'](), allSymbols = exchange[_0x3fb40e(0x15a)][_0x3fb40e(0xbc)](_0x3a05ff => {
            const _0x1c15f0 = _0x3fb40e;
            return _0x3a05ff[_0x1c15f0(0xda)](_0x1c15f0(0x164)) && !_0x3a05ff[_0x1c15f0(0xda)]('DAI/');
        }), _0x357b48 = !![];
    } catch (_0x2979a7) {
        await handleError(_0x2979a7, _0x3fb40e(0x89)), _0x357b48 = ![];
    }
    return _0x357b48;
}
async function initbot() {
    const _0x539dcd = _0x23c8f5;
    while (!wsinitialized) {
        await sleep(0xc8);
    }
    initialPerformanceStored = ![], await getBalances();
    let _0x244665 = dbCoinResults['get'](_0x539dcd(0x12c))[_0x539dcd(0x17e)]();
    if (_0x244665['length'] == 0x0)
        await resetCoinResults();
}
async function initclient() {
    const _0x3ed9bc = _0x23c8f5;
    proxyEmit(_0x3ed9bc(0x127), emittedConfiguration());
    while (!wsinitialized) {
        await sleep(0xc8);
    }
    if (lastBalances)
        proxyEmit(_0x3ed9bc(0x90), {
            'serverversion': serverversion,
            'balances': lastBalances
        });
    emitPerformance(), emitHistory(), await getStartingBalances();
}
function cleanws() {
    const _0x2a5e46 = _0x23c8f5;
    wsinitialized = ![];
    ws1 && (ws1[_0x2a5e46(0x17f)](_0x5d833c => {
        try {
            wsClient['closeWs'](_0x5d833c);
        } catch (_0x5e1948) {
        }
    }), ws1 = []);
    if (ws2) {
        try {
            wsClient[_0x2a5e46(0x159)](ws2);
        } catch (_0x39da4e) {
        }
        ws2 = null;
    }
}
async function initws() {
    const _0x3a5598 = _0x23c8f5;
    cleanws();
    let _0x42c029 = [];
    currentCoins[_0x3a5598(0x17f)](_0x1bdc76 => {
        const _0x275e4a = _0x3a5598;
        if (_0x1bdc76['coin'] != 'BTC')
            _0x42c029['push'](noslash(_0x1bdc76[_0x275e4a(0xcf)]));
    });
    if (!_0x42c029['includes'](stablecoins['eur'][_0x3a5598(0xe1)]))
        _0x42c029[_0x3a5598(0x16b)](stablecoins[_0x3a5598(0x8d)][_0x3a5598(0xe1)]);
    if (!_0x42c029[_0x3a5598(0xda)](stablecoins[_0x3a5598(0xc1)][_0x3a5598(0xe1)]))
        _0x42c029[_0x3a5598(0x16b)](stablecoins[_0x3a5598(0xc1)][_0x3a5598(0xe1)]);
    if (!_0x42c029[_0x3a5598(0xda)]('BNBBTC'))
        _0x42c029[_0x3a5598(0x16b)](_0x3a5598(0xa7));
    try {
        _0x42c029[_0x3a5598(0x17f)]((_0x130819, _0x14e83c) => {
            const _0x5b4574 = _0x3a5598;
            ws1[_0x14e83c] = wsClient[_0x5b4574(0x174)](_0x130819, '1m');
        }), ws2 = wsClient['subscribeSpotUserDataStream'](), wsClient['on'](_0x3a5598(0x11b), _0x274006 => {
            const _0x2e7979 = _0x3a5598;
            if (!Array['isArray'](_0x274006) && !_0x274006['wsKey'][_0x2e7979(0xda)](_0x2e7979(0x96))) {
                if (_0x274006[_0x2e7979(0x175)] === _0x2e7979(0x182)) {
                    global[_0x2e7979(0x12d)][_0x274006[_0x2e7979(0x182)][_0x2e7979(0xcf)]] = _0x274006['kline'][_0x2e7979(0x12b)];
                    return;
                }
            } else {
                if (!Array[_0x2e7979(0x163)](_0x274006) && _0x274006[_0x2e7979(0x9b)][_0x2e7979(0xda)]('userData')) {
                    if (_0x274006[_0x2e7979(0xc2)][_0x2e7979(0xda)](_0x2e7979(0x129))) {
                        updateNumberCoins(_0x274006);
                        return;
                    }
                }
            }
        }), wsClient['on'](_0x3a5598(0x110), async _0x37f9f4 => {
            currentCoins = await getCoins();
        });
    } catch (_0x3be619) {
        await handleError(_0x3be619, _0x3a5598(0xc0));
    }
    let _0x347821;
    while (_0x347821 != currentCoins['length'] - 0x1) {
        _0x347821 = 0x0, currentCoins[_0x3a5598(0x17f)](_0xa2f838 => {
            const _0x40f41f = _0x3a5598;
            if (_0xa2f838[_0x40f41f(0xe1)] != _0x40f41f(0x164) && global['ticker'][noslash(_0xa2f838['symbol'])])
                _0x347821++;
        });
        let _0x2763c5 = Math['round'](_0x347821 / (currentCoins[_0x3a5598(0x183)] - 0x1) * 0x64);
        proxyEmit(_0x3a5598(0xe9), _0x2763c5), await sleep(0xc8);
    }
    wsinitialized = !![];
}
async function getFiat() {
    const _0x1ba283 = _0x23c8f5;
    let _0xbf9337 = 0x0, _0x42f4e2 = 0x0;
    try {
        _0xbf9337 = global[_0x1ba283(0x12d)][stablecoins['eur'][_0x1ba283(0xe1)]], _0x42f4e2 = global[_0x1ba283(0x12d)][stablecoins[_0x1ba283(0xc1)][_0x1ba283(0xe1)]];
    } catch (_0x3e122d) {
        await handleError(_0x3e122d, _0x1ba283(0xaa));
    }
    return {
        'eur': Number(_0xbf9337),
        'usd': Number(_0x42f4e2)
    };
}
async function setStartDatePerformance(_0x15dcdc) {
    const _0x342a41 = _0x23c8f5, _0xf65720 = fns['format'](new Date(_0x15dcdc[_0x342a41(0x136)]), 'yyyy/MM/dd');
    let _0x5aa982 = [];
    _0x5aa982[stablecoins[_0x342a41(0x8d)][_0x342a41(0xe1)]] = await getCloses(stablecoins[_0x342a41(0x8d)][_0x342a41(0xcf)], new Date(_0x15dcdc[_0x342a41(0x136)]), 0x1), _0x5aa982[stablecoins[_0x342a41(0xc1)]['coin']] = await getCloses(stablecoins['usd'][_0x342a41(0xcf)], new Date(_0x15dcdc[_0x342a41(0x136)]), 0x1);
    let _0x17a2d5, _0x497af3 = [];
    _0x15dcdc[_0x342a41(0x97)]['forEach'](_0x21e7d2 => {
        const _0x34f78a = _0x342a41;
        !_0x21e7d2[_0x34f78a(0xf8)] && _0x497af3[_0x34f78a(0x16b)]({
            'coin': _0x21e7d2[_0x34f78a(0xe1)],
            'number': _0x21e7d2[_0x34f78a(0x181)],
            'price': _0x21e7d2[_0x34f78a(0x102)]
        });
    }), _0x17a2d5 = {
        'date': _0xf65720,
        'eur': _0x5aa982[stablecoins['eur'][_0x342a41(0xe1)]][0x0],
        'usd': _0x5aa982[stablecoins['usd'][_0x342a41(0xe1)]][0x0],
        'coins': _0x497af3
    };
    let _0x551563 = dbPerformance[_0x342a41(0xac)]('data')[_0x342a41(0x145)]({ 'date': _0xf65720 })['value']();
    _0x551563 ? dbPerformance[_0x342a41(0xac)](_0x342a41(0xf3))['find']({ 'date': _0xf65720 })['assign'](_0x17a2d5)[_0x342a41(0xcd)]() : dbPerformance['get'](_0x342a41(0xf3))['push'](_0x17a2d5)[_0x342a41(0xcd)](), _0x551563 = dbPerformance[_0x342a41(0xac)](_0x342a41(0xf3))[_0x342a41(0x141)]('date')[_0x342a41(0x17e)](), _0x551563[_0x342a41(0x17f)](_0x28d396 => {
        const _0x2ada8a = _0x342a41;
        _0x28d396['date'] < _0xf65720 && dbPerformance['get']('data')[_0x2ada8a(0xf4)]({ 'date': _0x28d396[_0x2ada8a(0xd2)] })[_0x2ada8a(0xcd)]();
    }), await storePerformance(), emitPerformance();
}
function _0x19ba() {
    const _0x5b62c9 = [
        'get',
        'WebSockets(',
        'hybrid-crypto-js',
        'toLowerCase',
        'argv',
        'BNB',
        'replace',
        'getMonth',
        'MIN_NOTIONAL',
        '\x20|\x20Insufficient\x20funds\x20to\x20execute\x20order',
        'getPortfolio',
        'configuration-stored',
        'Bot\x20was\x20stopped\x20-\x20resolve\x20the\x20issue\x20and\x20restart\x20bot',
        'yyyy/MM/dd\x20HH:mm:ss',
        'error',
        'keys',
        'filter',
        'limit-high',
        'indexOf',
        'Performance\x20recreation\x20completed\x20successfully',
        'initws()',
        'usd',
        'wsMarket',
        'buys',
        'abs',
        'threshold',
        'target',
        '1107972coSQYw',
        '-performance.json',
        'performance',
        '\x20|\x20Binance\x20exchange\x20is\x20not\x20available\x20-\x20pausing\x20bot\x20for\x205\x20minutes',
        'BTCEUR',
        'differenceInCalendarDays',
        'write',
        '311525MXLeRB',
        'symbol',
        'storeConfiguration',
        'event',
        'date',
        'LIMIT',
        'toString',
        'secure',
        '\x20order:\x20',
        'settings',
        'BTCBUSD',
        '14hioclp',
        'includes',
        '\x20hour',
        'apiKey',
        'entries',
        'BTC/BUSD',
        'cancelOrder',
        'sells',
        'coin',
        'executionReport',
        'apiSecret',
        'existsSync',
        'realized',
        '\x20>\x20',
        'bot',
        'Invalid\x20quantity',
        'coin-loading-progress',
        'limits',
        'ask',
        ')\x20|\x20Error\x20details:\x20',
        'Waiting\x20for\x20order(s)\x20to\x20be\x20filled\x20-\x20balancing\x20paused',
        'lowdb/adapters/FileSync',
        'total',
        'parse',
        'botname',
        '\x20|\x20Binance\x20API\x20key\x20or\x20API\x20secret\x20are\x20invalid\x20-\x20make\x20sure\x20your\x20computer\x27s\x20/\x20server\x27s\x20IP\x20address\x20is\x20whitelisted\x20for\x20this\x20API\x20key\x20in\x20Binance',
        'data',
        'remove',
        'asset',
        'last',
        'getStartingBalances',
        'excluded',
        'amount',
        'API-key\x20format\x20invalid',
        'binance',
        ':\x20Bot\x20',
        'running',
        'Order\x20filled:\x20',
        'reduce',
        '\x20orders\x20in\x20less\x20than\x20',
        'number',
        'startprice',
        '\x20|\x20Binance\x20API\x20key\x20is\x20invalid',
        '285766IFRUsp',
        'function',
        'page',
        'order',
        'send',
        'bid',
        ')\x20|\x20Binance\x20exchange\x20is\x20not\x20available\x20-\x20pausing\x20bot\x20for\x205\x20minutes',
        'getCloses()',
        'Order\x20amount\x20is\x20too\x20small\x20to\x20trade:\x20',
        'defaults',
        'assign',
        '-results.json',
        'reconnected',
        'placeOrder()',
        '\x20|\x20Error\x20details:\x20',
        'orderId',
        'fetchOHLCV',
        'Executed\x20',
        '-events.json',
        'log',
        'orderStatus',
        'cost',
        'side',
        'formattedMessage',
        'OrderNotFound',
        '\x20|\x20Binance\x20API\x20secret\x20is\x20invalid',
        'Ordering\x20not\x20possible\x20while\x20waiting\x20for\x20previous\x20order(s)\x20to\x20be\x20filled',
        'exchange',
        '\x20-\x20',
        '9ttopyC',
        'event-history',
        '2kOkprC',
        'Bot\x20',
        'Unfilled\x20order(s)\x20canceled\x20after\x20',
        'market',
        'configuration',
        'FILLED',
        'spot',
        'getDate',
        'close',
        'coins',
        'ticker',
        'Crypt',
        'message',
        'Waiting\x20for\x20order(s)\x20to\x20be\x20validated\x20-\x20balancing\x20paused',
        'botID',
        '\x20|\x20Your\x20computer\x27s\x20internal\x20clock\x20is\x20out\x20of\x20sync\x20-\x20please\x20sync\x20clock',
        'Signature\x20for\x20this\x20request\x20is\x20not\x20valid',
        'trade',
        'type',
        'startdate',
        'ExchangeNotAvailable',
        'Timestamp\x20for\x20this\x20request\x20was\x201000ms\x20ahead',
        '\x20|\x20Binance\x20exchange\x20is\x20not\x20responding\x20-\x20pausing\x20bot\x20for\x205\x20minutes',
        'yyyy-MM-dd\x27T\x27HH:mm:ss',
        'Limit\x20(high-margin)',
        'sell',
        'getTime',
        'add',
        '2089184DXFWlT',
        'Market',
        'sortBy',
        '2907216hAlWHs',
        'splice',
        'timestamp',
        'find',
        'padStart',
        'datetime',
        'getHours',
        'sha256',
        'InsufficientFunds',
        'headless',
        'accumulatedQuantity',
        'min',
        'mkdirSync',
        'cancelOrder()',
        'currency',
        '968337JshKPC',
        'getSeconds',
        'Limit\x20(low-margin)',
        '7844890iVhVHn',
        'getPortfolio()',
        'limit',
        'sort',
        'logs',
        'closeWs',
        'symbols',
        'enabled',
        'args',
        'valid',
        'wss://stream.binance.com:9443',
        '************',
        'lowdb',
        'storeHeadless',
        '/BTC',
        'isArray',
        'BTC',
        'date-fns',
        '\x20minutes\x20-\x20balancing\x20resumed',
        'Order\x20amount\x20is\x20invalid:\x20',
        'placeOrder',
        'Binance\x20API\x20secret\x20is\x20invalid',
        'round',
        'push',
        'Delta\x20:\x20',
        'BTC/USDT',
        'test',
        'success',
        'differenceInSeconds',
        './config/',
        'wss://stream.binance.us:9443',
        'coinamount',
        'subscribeSpotKline',
        'eventType',
        'distribution',
        'toFixed',
        'time',
        '\x20|\x20Binance\x20API\x20blocked\x20-\x20check\x20Binance\x20API\x20key\x20settings\x20(enable\x20spot\x20trading\x20&\x20IP\x20whitelist)\x20-\x20pausing\x20bot\x20for\x205\x20minutes',
        'BTC/',
        'AuthenticationError',
        'getFullYear',
        './version.json',
        'value',
        'forEach',
        'privateKey',
        'startnumber',
        'kline',
        'length',
        'timeshift',
        'createOrder',
        'yyyy/MM/dd',
        'RequestTimeout',
        'timeout',
        'fetchTickers',
        'loadSymbols()',
        'binanceus',
        'getMinutes',
        'limit-low',
        'eur',
        ',\x20must\x20be\x20a\x203\x20digit\x20number',
        'decrypt',
        'balances',
        'outboundAccountPosition',
        'recreate',
        'parseISO',
        '001',
        'bot-',
        'userData',
        'portfolio',
        'buy',
        'shift',
        'split',
        'wsKey',
        'cooldown',
        'breakeven',
        'reverse',
        'price',
        'orderType',
        'fee',
        'ordertype',
        'filled',
        'exit',
        'version',
        'fetchBalance',
        'BNBBTC',
        'ccxt',
        'delta',
        'getFiat()',
        'stringify'
    ];
    _0x19ba = function () {
        return _0x5b62c9;
    };
    return _0x19ba();
}
async function recreateHistory(_0x4469bc) {
    const _0x473d84 = _0x23c8f5;
    let _0xa606b9, _0x1fa705 = [];
    logHistory(_0x473d84(0x16f), 'Performance\x20recreation\x20process\x20started\x20-\x20this\x20may\x20take\x20several\x20minutes'), _0x4469bc[_0x473d84(0x97)][_0x473d84(0x17f)](_0xae691c => {
        const _0x162159 = _0x473d84;
        if (_0xae691c[_0x162159(0xe1)] != _0x162159(0x164) && !_0xae691c[_0x162159(0xf8)])
            _0x1fa705[_0x162159(0x16b)]({
                'coin': _0xae691c[_0x162159(0xe1)],
                'symbol': _0xae691c['symbol']
            });
    });
    let _0x3513e2 = [];
    try {
        const _0x57b318 = fns['format'](fns[_0x473d84(0x93)](_0x4469bc[_0x473d84(0x136)][_0x473d84(0xb2)](/\//g, '-')), _0x473d84(0x13a));
        for (const _0x28466d of _0x1fa705) {
            if (_0x28466d['coin'] != _0x473d84(0x164))
                _0xa606b9 = await exchange['fetchOrders'](_0x28466d[_0x473d84(0xcf)], Date[_0x473d84(0xf0)](_0x57b318));
            _0xa606b9[_0x473d84(0x17f)](_0x38d8fe => {
                const _0x313468 = _0x473d84, _0x2e7427 = _0x28466d[_0x313468(0xcf)]['includes'](_0x313468(0x17a)), _0x3ea03f = fns['format'](fns[_0x313468(0x93)](_0x38d8fe[_0x313468(0x147)]), _0x313468(0xb9)), _0x497fcb = fns['format'](fns['parseISO'](_0x38d8fe[_0x313468(0x147)]), 'yyyy/MM/dd');
                let _0x461a3c;
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x98) && _0x2e7427 == ![])
                    _0x461a3c = _0x38d8fe[_0x313468(0xf9)];
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x98) && _0x2e7427 == !![])
                    _0x461a3c = -_0x38d8fe[_0x313468(0xf9)] * _0x38d8fe[_0x313468(0x9f)];
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x13c) && _0x2e7427 == ![])
                    _0x461a3c = -_0x38d8fe['amount'];
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x13c) && _0x2e7427 == !![])
                    _0x461a3c = _0x38d8fe[_0x313468(0xf9)] * _0x38d8fe[_0x313468(0x9f)];
                _0x3513e2[_0x313468(0x16b)]({
                    'timestamp': _0x3ea03f,
                    'date': _0x497fcb,
                    'coin': _0x28466d[_0x313468(0xe1)],
                    'symbol': _0x28466d[_0x313468(0xcf)],
                    'type': _0x38d8fe[_0x313468(0x135)],
                    'side': _0x38d8fe[_0x313468(0x11a)],
                    'reverse': _0x2e7427,
                    'amount': formatResult(_0x38d8fe[_0x313468(0xa3)], 0x8),
                    'filled': formatResult(_0x38d8fe[_0x313468(0xa3)], 0x8),
                    'coinamount': formatResult(_0x461a3c, 0x8),
                    'price': formatResult(_0x38d8fe[_0x313468(0x9f)], 0x8)
                });
                let _0x42b14b;
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x98) && _0x2e7427 == ![])
                    _0x42b14b = -_0x38d8fe[_0x313468(0xf9)] * _0x38d8fe[_0x313468(0x9f)];
                if (_0x38d8fe['side'] == _0x313468(0x98) && _0x2e7427 == !![])
                    _0x42b14b = _0x38d8fe[_0x313468(0xf9)];
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x13c) && _0x2e7427 == ![])
                    _0x42b14b = _0x38d8fe[_0x313468(0xf9)] * _0x38d8fe['price'];
                if (_0x38d8fe[_0x313468(0x11a)] == _0x313468(0x13c) && _0x2e7427 == !![])
                    _0x42b14b = -_0x38d8fe[_0x313468(0xf9)];
                _0x3513e2[_0x313468(0x16b)]({
                    'date': _0x497fcb,
                    'coin': 'BTC',
                    'coinamount': formatResult(_0x42b14b, 0x8)
                });
            });
        }
        _0x3513e2[_0x473d84(0x157)]((_0x23a62c, _0x22df5d) => _0x23a62c[_0x473d84(0x144)] > _0x22df5d[_0x473d84(0x144)] ? 0x1 : _0x22df5d['timestamp'] > _0x23a62c['timestamp'] ? -0x1 : 0x0), dbLogs['get'](_0x473d84(0x158))['remove']()[_0x473d84(0xcd)](), _0x3513e2[_0x473d84(0x17f)](_0x570e44 => {
            const _0x2c535a = _0x473d84;
            let _0x4a130b;
            _0x570e44[_0x2c535a(0xe1)] != _0x2c535a(0x164) && (_0x4a130b = {
                'time': _0x570e44[_0x2c535a(0x144)],
                'type': _0x2c535a(0x107),
                'event': 'Order:\x20' + _0x570e44[_0x2c535a(0xcf)] + '\x20' + _0x570e44[_0x2c535a(0x11a)] + '\x20#' + _0x570e44[_0x2c535a(0xf9)] + '\x20@' + _0x570e44[_0x2c535a(0x9f)]
            }, dbLogs['get'](_0x2c535a(0x158))['push'](_0x4a130b)['write']());
        });
        const _0x3103ef = fns['eachDayOfInterval']({
            'start': new Date(_0x4469bc[_0x473d84(0x136)]),
            'end': new Date()
        })['map'](_0x45fb9a => fns['format'](_0x45fb9a, _0x473d84(0x186)));
        let _0x12ebf3 = [];
        _0x4469bc[_0x473d84(0x97)][_0x473d84(0x17f)](_0x3076b4 => {
            const _0x537498 = _0x473d84;
            if (!_0x3076b4[_0x537498(0xf8)]) {
                _0x12ebf3[_0x3076b4[_0x537498(0xe1)]] = [];
                let _0x2cc2cf = _0x3076b4[_0x537498(0x181)];
                _0x3103ef['forEach']((_0x2c7f96, _0x2818b4) => {
                    const _0x18b9d1 = _0x537498;
                    let _0xbc7445 = _0x3513e2[_0x18b9d1(0xbc)](_0x5ec7b4 => _0x5ec7b4[_0x18b9d1(0xe1)] == _0x3076b4['coin'] && _0x5ec7b4[_0x18b9d1(0xd2)] == _0x2c7f96);
                    if (_0xbc7445[_0x18b9d1(0x183)] != 0x0) {
                        let _0x1da5ea = _0xbc7445[_0x18b9d1(0xff)]((_0x5af836, _0x531eff) => {
                            const _0x4bfb53 = _0x18b9d1;
                            return _0x5af836 += _0x531eff[_0x4bfb53(0x173)], _0x5af836;
                        }, 0x0);
                        _0x2cc2cf += _0x1da5ea;
                    }
                    _0x12ebf3[_0x3076b4[_0x18b9d1(0xe1)]][_0x2c7f96] = _0x2cc2cf;
                });
            }
        });
        const _0x599a37 = [..._0x1fa705];
        _0x599a37[_0x473d84(0x16b)]({
            'coin': stablecoins[_0x473d84(0x8d)][_0x473d84(0xe1)],
            'symbol': stablecoins[_0x473d84(0x8d)][_0x473d84(0xcf)]
        }), _0x599a37[_0x473d84(0x16b)]({
            'coin': stablecoins[_0x473d84(0xc1)][_0x473d84(0xe1)],
            'symbol': stablecoins[_0x473d84(0xc1)][_0x473d84(0xcf)]
        });
        let _0x465a4b = [];
        for (const _0x3af89b of _0x599a37) {
            _0x465a4b[_0x3af89b[_0x473d84(0xe1)]] = await getCloses(_0x3af89b[_0x473d84(0xcf)], new Date(_0x4469bc[_0x473d84(0x136)]));
        }
        dbPerformance[_0x473d84(0xac)](_0x473d84(0xf3))[_0x473d84(0xf4)]()[_0x473d84(0xcd)](), _0x3103ef['forEach']((_0x22becd, _0xc3e2d) => {
            const _0x4ad917 = _0x473d84;
            let _0x1374d8, _0x1103a3 = [];
            _0xc3e2d == 0x0 ? (_0x4469bc['portfolio']['forEach'](_0x3da155 => {
                const _0x49c0aa = _0x3aa5;
                !_0x3da155[_0x49c0aa(0xf8)] && _0x1103a3[_0x49c0aa(0x16b)]({
                    'coin': _0x3da155[_0x49c0aa(0xe1)],
                    'number': _0x3da155[_0x49c0aa(0x181)],
                    'price': _0x3da155[_0x49c0aa(0x102)]
                });
            }), _0x1374d8 = {
                'date': _0x22becd,
                'eur': _0x465a4b[stablecoins['eur'][_0x4ad917(0xe1)]][_0xc3e2d],
                'usd': _0x465a4b[stablecoins[_0x4ad917(0xc1)]['coin']][_0xc3e2d],
                'coins': _0x1103a3
            }) : (_0x4469bc[_0x4ad917(0x97)][_0x4ad917(0x17f)](_0x522272 => {
                const _0x4cceb3 = _0x4ad917;
                !_0x522272[_0x4cceb3(0xf8)] && _0x1103a3[_0x4cceb3(0x16b)]({
                    'coin': _0x522272[_0x4cceb3(0xe1)],
                    'number': _0x12ebf3[_0x522272[_0x4cceb3(0xe1)]][_0x22becd],
                    'price': _0x522272[_0x4cceb3(0xe1)] == 'BTC' ? 0x1 : _0x465a4b[_0x522272[_0x4cceb3(0xe1)]][_0xc3e2d]
                });
            }), _0x1374d8 = {
                'date': _0x22becd,
                'eur': _0x465a4b[stablecoins[_0x4ad917(0x8d)]['coin']][_0xc3e2d],
                'usd': _0x465a4b[stablecoins[_0x4ad917(0xc1)][_0x4ad917(0xe1)]][_0xc3e2d],
                'coins': _0x1103a3
            }), dbPerformance[_0x4ad917(0xac)](_0x4ad917(0xf3))['push'](_0x1374d8)[_0x4ad917(0xcd)]();
        }), emitPerformance(), await resetCoinResults();
        for (let _0x2637cb of _0x3513e2) {
            _0x2637cb[_0x473d84(0xe1)] != _0x473d84(0x164) && await updateCoinResults(_0x2637cb);
        }
        logHistory(_0x473d84(0x16f), _0x473d84(0xbf));
    } catch (_0x526b4d) {
        await handleError(_0x526b4d, 'recreateHistory()');
    }
}
async function getCloses(_0x111db9, _0xa111b, _0x3ebac7 = undefined) {
    const _0x193d14 = _0x23c8f5, _0x5b6152 = '1d';
    let _0x417229, _0x4daee5;
    const _0x2b0c23 = fns[_0x193d14(0xcc)](new Date(), _0xa111b) + 0x1;
    try {
        const _0x2bf4a1 = exchange['milliseconds']() - _0x2b0c23 * 0x18 * 0xe10 * 0x3e8;
        _0x417229 = await exchange[_0x193d14(0x114)](_0x111db9, _0x5b6152, _0x2bf4a1, _0x3ebac7), _0x4daee5 = await exchange[_0x193d14(0x189)](_0x111db9);
    } catch (_0x12c5e5) {
        await handleError(_0x12c5e5, _0x193d14(0x10b));
    }
    let _0x518b33 = ohlcvToCloses(_0x417229);
    return _0x518b33[_0x193d14(0x16b)](_0x4daee5[_0x111db9][_0x193d14(0xf6)]), _0x518b33;
}
function ohlcvToCloses(_0x15d83a) {
    const _0xb9129 = _0x23c8f5;
    let _0x5f009c = [];
    return _0x15d83a[_0xb9129(0x17f)](function (_0x59a27e) {
        const _0x1d5b57 = _0xb9129;
        _0x5f009c[_0x1d5b57(0x16b)](_0x59a27e[0x4]);
    }), _0x5f009c;
}
function getConfiguration(_0x33302a) {
    const _0x1c793a = _0x23c8f5;
    let _0x1d9d84 = dbConfig[_0x1c793a(0xac)](_0x1c793a(0xe7))[_0x1c793a(0x145)]({ 'botID': _0x33302a })[_0x1c793a(0x17e)]();
    if (_0x1d9d84) {
        let _0x110f11 = ![];
        !_0x1d9d84['exchange'] && (_0x1d9d84 = {
            ..._0x1d9d84,
            'exchange': 'binance'
        }, _0x110f11 = !![]), !_0x1d9d84['ordertype'] && (_0x1d9d84 = {
            ..._0x1d9d84,
            'ordertype': 'market'
        }, _0x110f11 = !![]), !_0x1d9d84[_0x1c793a(0x188)] && (_0x1d9d84 = {
            ..._0x1d9d84,
            'timeout': 0x14
        }, _0x110f11 = !![]), _0x110f11 && (_0x1d9d84 = {
            'botID': _0x1d9d84[_0x1c793a(0x131)],
            'exchange': _0x1d9d84[_0x1c793a(0x11f)],
            'apiKey': _0x1d9d84[_0x1c793a(0xdc)],
            'apiSecret': _0x1d9d84[_0x1c793a(0xe3)],
            'botname': _0x1d9d84[_0x1c793a(0xf1)],
            'threshold': _0x1d9d84[_0x1c793a(0xc5)],
            'ordertype': _0x1d9d84[_0x1c793a(0xa2)],
            'timeout': _0x1d9d84['timeout'],
            'startdate': _0x1d9d84['startdate'],
            'recreate': _0x1d9d84[_0x1c793a(0x92)],
            'timeshift': _0x1d9d84[_0x1c793a(0x184)],
            'headless': _0x1d9d84[_0x1c793a(0x14b)],
            'cooldown': _0x1d9d84[_0x1c793a(0x9c)],
            'portfolio': _0x1d9d84[_0x1c793a(0x97)]
        }, dbConfig['get'](_0x1c793a(0xe7))[_0x1c793a(0xf4)]()[_0x1c793a(0xcd)](), dbConfig[_0x1c793a(0xac)](_0x1c793a(0xe7))[_0x1c793a(0x16b)](_0x1d9d84)[_0x1c793a(0xcd)]());
    } else
        _0x1d9d84 = {
            'botID': _0x33302a,
            'exchange': _0x1c793a(0xfb),
            'apiKey': '',
            'apiSecret': '',
            'botname': _0x1c793a(0x124) + _0x33302a,
            'threshold': '3',
            'ordertype': _0x1c793a(0x126),
            'timeout': 0x14,
            'startdate': getDate(),
            'recreate': ![],
            'timeshift': settings['timeshift'],
            'headless': ![],
            'cooldown': 0xa,
            'portfolio': []
        };
    return _0x1d9d84;
}
function emittedConfiguration() {
    const _0x3e4a58 = _0x23c8f5;
    let _0x57b93b;
    return config[_0x3e4a58(0xdc)] == '' ? _0x57b93b = config : _0x57b93b = {
        ...config,
        'apiKey': '************',
        'apiSecret': _0x3e4a58(0x15f)
    }, _0x57b93b;
}
function getSettings() {
    const _0x5b9f8b = _0x23c8f5;
    return dbSettings[_0x5b9f8b(0xac)](_0x5b9f8b(0xd7))[_0x5b9f8b(0x17e)]();
}
function getSecure() {
    const _0x5e21d5 = _0x23c8f5;
    return dbSecure[_0x5e21d5(0xac)](_0x5e21d5(0xd5))['value']() || {};
}
function updateTimeshift(_0x353aa9) {
    const _0x281c36 = _0x23c8f5;
    let _0x4db69c = dbConfig[_0x281c36(0xac)](_0x281c36(0xe7))['find']({ 'botID': botID })[_0x281c36(0x17e)]();
    _0x4db69c && dbConfig['get'](_0x281c36(0xe7))[_0x281c36(0x145)]({ 'botID': botID })['assign']({ 'timeshift': _0x353aa9 })[_0x281c36(0xcd)](), config[_0x281c36(0x184)] = _0x353aa9, proxyEmit(_0x281c36(0x127), emittedConfiguration());
}
async function storeConfiguration(_0x18d976) {
    const _0xc38f5 = _0x23c8f5;
    let _0x43b13c = dbConfig['get'](_0xc38f5(0xe7))[_0xc38f5(0x145)]({ 'botID': botID })['value']();
    _0x18d976 = {
        ..._0x18d976,
        'apiKey': crypt[_0xc38f5(0x8f)](secure[_0xc38f5(0x180)], _0x18d976[_0xc38f5(0xdc)])[_0xc38f5(0x12f)],
        'apiSecret': crypt[_0xc38f5(0x8f)](secure[_0xc38f5(0x180)], _0x18d976[_0xc38f5(0xe3)])[_0xc38f5(0x12f)]
    };
    if (_0x43b13c) {
        if (_0x18d976['apiKey'] == '************')
            _0x18d976[_0xc38f5(0xdc)] = config[_0xc38f5(0xdc)];
        if (_0x18d976[_0xc38f5(0xe3)] == _0xc38f5(0x15f))
            _0x18d976['apiSecret'] = config[_0xc38f5(0xe3)];
        dbConfig[_0xc38f5(0xac)](_0xc38f5(0xe7))[_0xc38f5(0x145)]({ 'botID': botID })['assign'](_0x18d976)[_0xc38f5(0xcd)]();
    } else
        dbConfig[_0xc38f5(0xac)](_0xc38f5(0xe7))[_0xc38f5(0x16b)](_0x18d976)['write'](), process[_0xc38f5(0x108)]({
            'status': _0xc38f5(0x15b),
            'live': _0xc38f5(0xfd)
        });
    config = { ..._0x18d976 };
    if (config[_0xc38f5(0x92)])
        await recreateHistory(config);
    else
        await setStartDatePerformance(config);
    process[_0xc38f5(0x108)]({ 'botname': _0x18d976['botname'] }), proxyEmit(_0xc38f5(0xb7)), reset();
}
async function storeHeadless(_0x47e9f9) {
    const _0x56da89 = _0x23c8f5, _0x552a88 = {
            ...config,
            'headless': _0x47e9f9[_0x56da89(0x14b)]
        };
    let _0x356fed = dbConfig[_0x56da89(0xac)](_0x56da89(0xe7))['find']({ 'botID': botID })['value']();
    _0x356fed && dbConfig[_0x56da89(0xac)](_0x56da89(0xe7))['find']({ 'botID': botID })[_0x56da89(0x10e)](_0x552a88)[_0x56da89(0xcd)](), config = { ..._0x552a88 }, proxyEmit('configuration', emittedConfiguration());
}
function noslash(_0x23127a) {
    const _0x275daa = _0x23c8f5;
    return _0x23127a[_0x275daa(0xb2)]('/', '');
}
function updateNumberCoins(_0x322e9e) {
    const _0x239d1f = _0x23c8f5;
    _0x322e9e[_0x239d1f(0x175)] && _0x322e9e['eventType'] == _0x239d1f(0x91) && _0x322e9e[_0x239d1f(0x90)][_0x239d1f(0x17f)](_0x5b502d => {
        const _0x1bb404 = _0x239d1f;
        let _0x2623bc = currentCoins[_0x1bb404(0x145)](_0x165479 => _0x165479[_0x1bb404(0xe1)] == _0x5b502d[_0x1bb404(0xf5)]);
        if (_0x2623bc)
            _0x2623bc[_0x1bb404(0x101)] = Number(_0x5b502d['availableBalance']);
    }), _0x322e9e[_0x239d1f(0x175)] && _0x322e9e[_0x239d1f(0x175)] == _0x239d1f(0xe2) && (_0x322e9e[_0x239d1f(0xa0)] == _0x239d1f(0xd3) && _0x322e9e[_0x239d1f(0x118)] == _0x239d1f(0x128) && lastOrders[_0x239d1f(0x17f)](_0x1ba4bc => {
        const _0x3ca9de = _0x239d1f;
        if (_0x1ba4bc[_0x3ca9de(0x113)] == _0x322e9e[_0x3ca9de(0x113)]) {
            if (_0x1ba4bc['reverse'])
                _0x1ba4bc[_0x3ca9de(0xa3)] = _0x322e9e['accumulatedQuantity'] * _0x1ba4bc['price'];
            else
                _0x1ba4bc[_0x3ca9de(0xa3)] = _0x322e9e[_0x3ca9de(0x14c)];
        }
    }));
}
async function getCoins(_0x2a1f0c = !![]) {
    const _0x11753b = _0x23c8f5;
    let _0x312a02, _0x13bda1 = [], _0x140da1 = [], _0x3fb3fa = [];
    try {
        _0x312a02 = await exchange[_0x11753b(0xa6)](), mybalances = _0x312a02[_0x11753b(0xef)];
        if (!_0x2a1f0c)
            for (const [_0x5837b2, _0x2356ed] of Object[_0x11753b(0xdd)](mybalances)) {
                _0x3fb3fa[_0x11753b(0x16b)](_0x5837b2);
            }
        else
            config[_0x11753b(0x97)][_0x11753b(0x17f)](_0x3e1ba1 => {
                const _0x1fe82a = _0x11753b;
                if (!_0x3e1ba1['excluded'])
                    _0x3fb3fa['push'](_0x3e1ba1[_0x1fe82a(0xe1)]);
            });
        for (const [_0x2a949e, _0x60627] of Object['entries'](mybalances)) {
            if (_0x3fb3fa[_0x11753b(0xda)](_0x2a949e)) {
                if ((_0x60627['toString']() != 0x0 || config[_0x11753b(0x97)][_0x11753b(0x145)](_0x1a2d26 => _0x1a2d26[_0x11753b(0xe1)] == _0x2a949e)) && (allSymbols[_0x11753b(0xda)](_0x2a949e + _0x11753b(0x162)) || _0x2a949e == _0x11753b(0x164)))
                    _0x140da1[_0x11753b(0x16b)]({
                        'coin': _0x2a949e,
                        'symbol': _0x2a949e + _0x11753b(0x162),
                        'reverse': ![],
                        'number': _0x60627
                    }), _0x2a949e != 'BTC' && _0x13bda1[_0x11753b(0x16b)](_0x2a949e + _0x11753b(0x162));
                else
                    (_0x60627[_0x11753b(0xd4)]() != 0x0 || config[_0x11753b(0x97)][_0x11753b(0x145)](_0x340d0e => _0x340d0e[_0x11753b(0xe1)] == _0x2a949e)) && allSymbols[_0x11753b(0xda)](_0x11753b(0x17a) + _0x2a949e) && (_0x140da1[_0x11753b(0x16b)]({
                        'coin': _0x2a949e,
                        'symbol': _0x11753b(0x17a) + _0x2a949e,
                        'reverse': !![],
                        'number': _0x60627
                    }), _0x2a949e != _0x11753b(0x164) && _0x13bda1[_0x11753b(0x16b)]('BTC/' + _0x2a949e));
            }
        }
    } catch (_0x5d987c) {
        if (!_0x2a1f0c) {
            if (_0x5d987c[_0x11753b(0xd4)]()[_0x11753b(0xda)](_0x11753b(0xfa)))
                return logHistory(_0x11753b(0xba), 'Binance\x20API\x20key\x20is\x20invalid'), ![];
            else {
                if (_0x5d987c[_0x11753b(0xd4)]()[_0x11753b(0xda)](_0x11753b(0x17b)))
                    return logHistory(_0x11753b(0xba), 'Binance\x20API\x20key\x20or\x20API\x20secret\x20are\x20invalid\x20-\x20make\x20sure\x20your\x20IP\x20address\x20is\x20whitelisted\x20for\x20this\x20API\x20key\x20in\x20Binance'), ![];
                else {
                    if (_0x5d987c[_0x11753b(0xd4)]()[_0x11753b(0xda)](_0x11753b(0x133)))
                        return logHistory(_0x11753b(0xba), _0x11753b(0x169)), ![];
                    else
                        await handleError(_0x5d987c, 'getCoins()');
                }
            }
        } else
            await handleError(_0x5d987c, 'getCoins()');
    }
    return _0x140da1;
}
async function getPortfolio(_0x17508a) {
    const _0x7cf6bf = _0x23c8f5;
    let _0x2a1109 = [], _0x4542c0 = [], _0x2c52c8, _0x334774 = [], _0x1b014d, _0x4fe25e;
    _0x17508a[_0x7cf6bf(0xdc)] === '************' || _0x17508a[_0x7cf6bf(0xe3)] === _0x7cf6bf(0x15f) ? (_0x1b014d = config[_0x7cf6bf(0xdc)], _0x4fe25e = config['apiSecret']) : (_0x1b014d = _0x17508a[_0x7cf6bf(0xdc)], _0x4fe25e = _0x17508a[_0x7cf6bf(0xe3)]);
    await initExchange(_0x1b014d, _0x4fe25e);
    let _0x25ce34 = await loadSymbols();
    if (_0x25ce34) {
        _0x334774 = await getCoins(![]);
        if (_0x334774 === ![])
            proxyEmit(_0x7cf6bf(0x97), ![]);
        else {
            _0x334774[_0x7cf6bf(0x17f)](_0x58ec07 => {
                const _0x27dda0 = _0x7cf6bf;
                _0x2a1109[_0x27dda0(0x16b)](_0x58ec07[_0x27dda0(0xcf)]);
            });
            try {
                _0x4542c0 = await exchange['fetchTickers'](_0x2a1109);
            } catch (_0x1ef3ef) {
                await handleError(_0x1ef3ef, _0x7cf6bf(0x155));
            }
            _0x334774[_0x7cf6bf(0x17f)](_0x4b3e9f => {
                const _0x20a4fb = _0x7cf6bf;
                _0x4b3e9f[_0x20a4fb(0xe1)] != _0x20a4fb(0x164) ? _0x2c52c8 = _0x4b3e9f[_0x20a4fb(0x9e)] ? 0x1 / _0x4542c0[_0x4b3e9f[_0x20a4fb(0xcf)]]['last'] : _0x4542c0[_0x4b3e9f[_0x20a4fb(0xcf)]][_0x20a4fb(0xf6)] : _0x2c52c8 = 0x1, _0x4b3e9f[_0x20a4fb(0x9f)] = formatResult(_0x2c52c8, 0x8);
            }), proxyEmit('portfolio', _0x334774);
        }
    } else
        proxyEmit(_0x7cf6bf(0x97), ![]);
}
function checkMinimums(_0x55dabd) {
    const _0x24abd4 = _0x23c8f5;
    let _0x55e5db = !![];
    const _0x2e5419 = !_0x55dabd[_0x24abd4(0x9e)] ? markets[_0x55dabd[_0x24abd4(0xcf)]][_0x24abd4(0xea)][_0x24abd4(0xf9)][_0x24abd4(0x14d)] : markets[_0x55dabd[_0x24abd4(0xcf)]]['limits'][_0x24abd4(0x119)][_0x24abd4(0x14d)], _0x529eff = !_0x55dabd['reverse'] ? markets[_0x55dabd[_0x24abd4(0xcf)]][_0x24abd4(0xea)][_0x24abd4(0x119)][_0x24abd4(0x14d)] : markets[_0x55dabd[_0x24abd4(0xcf)]][_0x24abd4(0xea)]['amount'][_0x24abd4(0x14d)];
    if (Math['abs'](_0x55dabd[_0x24abd4(0x134)]) < _0x2e5419)
        _0x55e5db = ![];
    if (Math[_0x24abd4(0xc4)](_0x55dabd[_0x24abd4(0x134)]) * _0x55dabd[_0x24abd4(0xf6)] < _0x529eff)
        _0x55e5db = ![];
    return _0x55e5db;
}
async function getBalances() {
    const _0xbd8f2e = _0x23c8f5;
    let _0x2b4771 = 0x0, _0xf66df3;
    const _0x14a32c = config[_0xbd8f2e(0xc5)];
    currentCoins['forEach'](_0x2737b2 => {
        const _0x1abd80 = _0xbd8f2e;
        if (_0x2737b2[_0x1abd80(0xe1)] != _0x1abd80(0x164)) {
            let _0x38f190 = global[_0x1abd80(0x12d)][noslash(_0x2737b2['symbol'])];
            _0xf66df3 = _0x2737b2['reverse'] ? 0x1 / _0x38f190 : _0x38f190;
        } else
            _0xf66df3 = 0x1;
        let _0x287e3c = _0x2737b2['number'] * _0xf66df3;
        _0x2b4771 += _0x287e3c, _0x2737b2[_0x1abd80(0xf6)] = formatResult(Number(_0xf66df3), 0x8), _0x2737b2['value'] = _0x287e3c;
    }), currentCoins[_0xbd8f2e(0x17f)](_0x17e487 => {
        const _0x10f490 = _0xbd8f2e;
        let _0x23f956 = config['portfolio']['find'](_0x3f4580 => _0x3f4580[_0x10f490(0xe1)] == _0x17e487[_0x10f490(0xe1)]), _0x139561 = Number(_0x23f956['distribution']), _0x593bbb = _0x17e487[_0x10f490(0x17e)] / _0x2b4771 * 0x64, _0x23a7c0 = _0x139561 * _0x2b4771 / 0x64 / _0x17e487[_0x10f490(0xf6)] - _0x17e487[_0x10f490(0x101)];
        _0x17e487[_0x10f490(0x176)] = formatResult(_0x593bbb, 0x3), _0x17e487[_0x10f490(0xc6)] = formatResult(_0x139561, 0x3), _0x17e487[_0x10f490(0x134)] = formatResult(_0x23a7c0, 0x8), _0x17e487[_0x10f490(0x11a)] = '', _0x17e487['valid'] = '';
        if (_0x17e487[_0x10f490(0xe1)] != _0x10f490(0x164)) {
            if (_0x17e487[_0x10f490(0x176)] > _0x139561)
                _0x17e487[_0x10f490(0x11a)] = _0x10f490(0x13c), _0x17e487['valid'] = checkMinimums(_0x17e487);
            else
                _0x17e487[_0x10f490(0x176)] < _0x139561 && (_0x17e487[_0x10f490(0x11a)] = _0x10f490(0x98), _0x17e487[_0x10f490(0x15d)] = checkMinimums(_0x17e487));
        }
        _0x17e487[_0x10f490(0xa9)] = _0x17e487['distribution'] / _0x17e487['target'] - 0x1;
    }), currentCoins[_0xbd8f2e(0x157)]((_0x1df10e, _0x4038f2) => _0x1df10e['delta'] < _0x4038f2['delta'] ? 0x1 : _0x4038f2[_0xbd8f2e(0xa9)] < _0x1df10e[_0xbd8f2e(0xa9)] ? -0x1 : 0x0);
    const _0x1bf011 = await getFiat();
    lastBalances = {
        'servertime': getServerTime(),
        'time': getTimeStamp(),
        'eur': _0x1bf011[_0xbd8f2e(0x8d)],
        'usd': _0x1bf011['usd'],
        'portfolio': JSON[_0xbd8f2e(0xab)](currentCoins),
        'threshold': _0x14a32c
    }, proxyEmit(_0xbd8f2e(0x90), {
        'serverversion': serverversion,
        'balances': lastBalances
    });
    if (config[_0xbd8f2e(0x14b)])
        headlessMode({
            'portfolio': currentCoins,
            'threshold': _0x14a32c
        });
    !initialPerformanceStored && (initialPerformanceStored = !![], await storePerformance(), emitPerformance());
    lastPerformanceStored !== getHour() && (await storePerformance(), lastPerformanceEmitted !== getDate() && emitPerformance());
    if (pidBalances)
        clearTimeout(pidBalances);
    pidBalances = setTimeout(getBalances, getBalancesInterval);
}
async function storePerformance() {
    const _0x1b39d6 = _0x23c8f5;
    if (!lastBalances)
        return;
    let _0x4712dc = await getStartingBalances(![]), _0x5bbb16 = [], _0x52d301 = [], _0x53893a;
    JSON[_0x1b39d6(0xf0)](lastBalances[_0x1b39d6(0x97)])['forEach'](_0x28b085 => {
        const _0x37ec3b = _0x1b39d6;
        let _0x49a7d1 = {
            'coin': _0x28b085[_0x37ec3b(0xe1)],
            'number': _0x28b085['number'],
            'price': _0x28b085[_0x37ec3b(0xf6)]
        };
        _0x5bbb16[_0x37ec3b(0x16b)](_0x49a7d1);
        if (!_0x4712dc['coins'] || !_0x4712dc[_0x37ec3b(0x12c)][_0x37ec3b(0x145)](_0x13b759 => _0x13b759[_0x37ec3b(0xe1)] == _0x28b085[_0x37ec3b(0xe1)] && _0x13b759[_0x37ec3b(0x101)] != 0x0))
            _0x52d301[_0x37ec3b(0x16b)](_0x49a7d1);
    });
    const _0x2b12f1 = await getFiat();
    _0x53893a = {
        'date': lastBalances[_0x1b39d6(0x178)][_0x1b39d6(0x9a)]('\x20')[0x0],
        'eur': _0x2b12f1[_0x1b39d6(0x8d)],
        'usd': _0x2b12f1[_0x1b39d6(0xc1)],
        'coins': _0x5bbb16
    };
    let _0x500901 = dbPerformance[_0x1b39d6(0xac)](_0x1b39d6(0xf3))['find']({ 'date': _0x53893a['date'] })[_0x1b39d6(0x17e)]();
    _0x500901 ? dbPerformance['get'](_0x1b39d6(0xf3))[_0x1b39d6(0x145)]({ 'date': _0x53893a[_0x1b39d6(0xd2)] })[_0x1b39d6(0x10e)](_0x53893a)['write']() : dbPerformance[_0x1b39d6(0xac)](_0x1b39d6(0xf3))['push'](_0x53893a)[_0x1b39d6(0xcd)](), lastPerformanceStored = getHour();
}
function emitPerformance() {
    const _0x40db9d = _0x23c8f5;
    if (dbPerformance['has']('data')[_0x40db9d(0x17e)]()) {
        let _0x12bb50 = dbPerformance[_0x40db9d(0xac)](_0x40db9d(0xf3))[_0x40db9d(0x141)](_0x40db9d(0xd2))[_0x40db9d(0x17e)]();
        proxyEmit(_0x40db9d(0xc9), _0x12bb50), lastPerformanceEmitted = getDate();
    } else
        proxyEmit('performance', []);
}
async function getStartingBalances(_0x228557 = !![]) {
    const _0x49d3c7 = _0x23c8f5;
    let _0x27bccf = dbPerformance[_0x49d3c7(0xac)](_0x49d3c7(0xf3))[_0x49d3c7(0x145)]({ 'date': config[_0x49d3c7(0x136)] })[_0x49d3c7(0x17e)]();
    config['apiKey'] != '' && !_0x27bccf && (await setStartDatePerformance(config), _0x27bccf = dbPerformance[_0x49d3c7(0xac)]('data')['find']({ 'date': config[_0x49d3c7(0x136)] })[_0x49d3c7(0x17e)]());
    if (config['apiKey'] == '' || !_0x27bccf)
        return {};
    let _0x29bfae = 0x0, _0x745486 = 0x0, _0xe82195 = 0x0, _0x2b39b1 = [], _0x1beb8f = 0x0;
    config[_0x49d3c7(0x97)][_0x49d3c7(0x17f)](_0x45e2e5 => {
        const _0x5785a1 = _0x49d3c7;
        !_0x45e2e5[_0x5785a1(0xf8)] && (_0x2b39b1[_0x1beb8f] = {
            'coin': _0x45e2e5['coin'],
            'symbol': _0x45e2e5[_0x5785a1(0xcf)],
            'number': _0x45e2e5['startnumber'],
            'price': _0x45e2e5[_0x5785a1(0x102)]
        }, _0x29bfae += _0x45e2e5['startprice'] * _0x45e2e5['startnumber'], _0x745486 += _0x45e2e5['startprice'] * _0x45e2e5['startnumber'] * _0x27bccf['eur'], _0xe82195 += _0x45e2e5['startprice'] * _0x45e2e5[_0x5785a1(0x181)] * _0x27bccf[_0x5785a1(0xc1)], _0x1beb8f++);
    });
    let _0x4704d6 = {
        'btc': _0x29bfae,
        'eur': _0x745486,
        'usd': _0xe82195,
        'coins': _0x2b39b1
    };
    if (_0x228557)
        proxyEmit('starting-balances', _0x4704d6);
    return _0x4704d6;
}
function headlessMode(_0x99d18e) {
    const _0x304736 = _0x23c8f5;
    let _0x1f7e6c = _0x99d18e[_0x304736(0x97)], _0x4d2ad8 = _0x99d18e[_0x304736(0xc5)], _0x8add0c = [];
    for (let _0x3242de of _0x1f7e6c) {
        if (_0x3242de['coin'] != _0x304736(0x164)) {
            if (_0x3242de[_0x304736(0x176)] / _0x3242de['target'] - 0x1 >= _0x4d2ad8 / 0x64) {
                if (_0x3242de[_0x304736(0x15d)])
                    _0x8add0c[_0x304736(0x16b)](_0x3242de);
            } else {
                if (_0x3242de['distribution'] / _0x3242de[_0x304736(0xc6)] - 0x1 <= -_0x4d2ad8 / 0x64) {
                    if (_0x3242de[_0x304736(0x15d)])
                        _0x8add0c[_0x304736(0x16b)](_0x3242de);
                }
            }
        }
    }
    _0x8add0c['length'] > 0x0 && placeOrder(_0x8add0c);
}
function symbolToCoin(_0x530bc2) {
    const _0x514a18 = _0x23c8f5;
    let _0x22702b;
    if (_0x530bc2[_0x514a18(0xda)](_0x514a18(0x162)))
        _0x22702b = _0x530bc2[_0x514a18(0xb2)](_0x514a18(0x162), '');
    if (_0x530bc2[_0x514a18(0xda)](_0x514a18(0x17a)))
        _0x22702b = _0x530bc2['replace'](_0x514a18(0x17a), '');
    return _0x22702b;
}
async function validateOrders(_0x2a92b6 = 0x0) {
    const _0x255588 = _0x23c8f5;
    let _0x54d59b = [], _0x3bd97f = config[_0x255588(0xa2)] == _0x255588(0x126) ? validateOrderTimeout * 0x3c * 0x3e8 / validateOrderInterval : config['timeout'] * 0x3c * 0x3e8 / validateOrderInterval;
    lastOrders[_0x255588(0x17f)](_0xb4e363 => {
        const _0x45ed2b = _0x255588;
        let _0x220ec9 = previousCoins[_0x45ed2b(0x145)](_0x3af44e => _0x3af44e[_0x45ed2b(0xe1)] == symbolToCoin(_0xb4e363[_0x45ed2b(0xcf)])), _0x36df0d = currentCoins['find'](_0x13e21b => _0x13e21b[_0x45ed2b(0xe1)] == symbolToCoin(_0xb4e363[_0x45ed2b(0xcf)])), _0x394710, _0x13ff39;
        _0xb4e363[_0x45ed2b(0x11a)] == _0x45ed2b(0x98) && !_0xb4e363[_0x45ed2b(0x9e)] || _0xb4e363[_0x45ed2b(0x11a)] == 'sell' && _0xb4e363[_0x45ed2b(0x9e)] ? (_0x394710 = _0x220ec9[_0x45ed2b(0x101)] + 0.9 * _0xb4e363[_0x45ed2b(0xa3)], _0x13ff39 = _0x220ec9[_0x45ed2b(0x101)] + 1.1 * _0xb4e363[_0x45ed2b(0xa3)]) : (_0x394710 = _0x220ec9['number'] - 1.1 * _0xb4e363[_0x45ed2b(0xa3)], _0x13ff39 = _0x220ec9[_0x45ed2b(0x101)] - 0.9 * _0xb4e363[_0x45ed2b(0xa3)]);
        const _0x92c3f6 = _0xb4e363[_0x45ed2b(0xa3)] != 0x0 && _0x36df0d[_0x45ed2b(0x101)] >= _0x394710 && _0x36df0d[_0x45ed2b(0x101)] <= _0x13ff39;
        _0x54d59b['push'](_0x92c3f6);
        if (_0x92c3f6 && config[_0x45ed2b(0xa2)] != _0x45ed2b(0x126)) {
            if (_0xb4e363['reverse'])
                logHistory('order', _0x45ed2b(0xfe) + _0xb4e363['symbol'] + '\x20' + _0xb4e363[_0x45ed2b(0x11a)] + '\x20#' + formatResult(_0xb4e363[_0x45ed2b(0xa3)] / _0xb4e363['price'], 0x8) + '\x20@' + formatResult(_0xb4e363['price'], 0x8));
            else
                logHistory(_0x45ed2b(0x107), _0x45ed2b(0xfe) + _0xb4e363[_0x45ed2b(0xcf)] + '\x20' + _0xb4e363[_0x45ed2b(0x11a)] + '\x20#' + formatResult(_0xb4e363[_0x45ed2b(0xa3)], 0x8) + '\x20@' + formatResult(_0xb4e363[_0x45ed2b(0x9f)], 0x8));
        }
    }), _0x54d59b[_0x255588(0x17f)]((_0x3b38fe, _0x501d50) => {
        const _0x2e28d7 = _0x255588;
        if (_0x3b38fe)
            lastOrders[_0x2e28d7(0x143)](_0x501d50, 0x1);
    });
    if (_0x2a92b6 < _0x3bd97f && _0x54d59b[_0x255588(0xda)](![])) {
        if (_0x2a92b6 == 0x0) {
            config[_0x255588(0xa2)] == _0x255588(0x126) ? logHistory('error', _0x255588(0x130)) : logHistory(_0x255588(0xba), _0x255588(0xed));
            if (pidOrders)
                clearTimeout(pidOrders);
            pidOrders = setTimeout(function () {
                validateOrders(++_0x2a92b6);
            }, 0xa * 0x3e8);
        } else {
            (_0x2a92b6 == 0x1 || _0x2a92b6 == Math[_0x255588(0x16a)](_0x3bd97f / 0x2) || _0x2a92b6 == _0x3bd97f - 0x1) && (currentCoins = await getCoins());
            if (pidOrders)
                clearTimeout(pidOrders);
            pidOrders = setTimeout(function () {
                validateOrders(++_0x2a92b6);
            }, validateOrderInterval);
        }
    } else {
        lockOrders = ![];
        if (_0x2a92b6 > 0x0 && !_0x54d59b['includes'](![]))
            config[_0x255588(0xa2)] == _0x255588(0x126) ? logHistory('success', 'Order(s)\x20validated\x20-\x20balancing\x20resumed') : logHistory(_0x255588(0x16f), 'Order(s)\x20filled\x20-\x20balancing\x20resumed');
        else
            _0x2a92b6 > 0x0 && _0x54d59b[_0x255588(0xda)](![]) && (config[_0x255588(0xa2)] == _0x255588(0x126) ? logHistory(_0x255588(0x16f), 'Order(s)\x20not\x20validated\x20after\x20' + Math[_0x255588(0x16a)](_0x3bd97f * validateOrderInterval / 0xea60) + _0x255588(0x166)) : (lastOrders['forEach'](async _0x18e6db => {
                const _0xc308bd = _0x255588;
                try {
                    const _0x11a740 = await exchange[_0xc308bd(0xdf)](_0x18e6db['orderId'], _0x18e6db['symbol']);
                } catch (_0x48a321) {
                    if (_0x48a321[_0xc308bd(0xd4)]()[_0xc308bd(0xda)](_0xc308bd(0x11c))) {
                    } else
                        await handleError(_0x48a321, _0xc308bd(0x14f));
                }
            }), logHistory(_0x255588(0x16f), _0x255588(0x125) + Math[_0x255588(0x16a)](_0x3bd97f * validateOrderInterval / 0xea60) + _0x255588(0x166))));
    }
}
async function resetCoinResults() {
    const _0x15ee95 = _0x23c8f5;
    dbCoinResults[_0x15ee95(0xac)](_0x15ee95(0x12c))[_0x15ee95(0xf4)]()['write']();
    let _0x5da102 = await getStartingBalances(![]);
    _0x5da102[_0x15ee95(0x12c)]['forEach'](_0xbbd030 => {
        const _0xf430d3 = _0x15ee95, _0x3fb18d = _0xbbd030[_0xf430d3(0xcf)]['includes'](_0xf430d3(0x17a));
        if (_0xbbd030[_0xf430d3(0xe1)] != _0xf430d3(0x164)) {
            let _0x1a550e = {
                'coin': _0xbbd030[_0xf430d3(0xe1)],
                'number': _0xbbd030[_0xf430d3(0x101)],
                'breakeven': _0xbbd030[_0xf430d3(0x9f)],
                'realized': 0x0,
                'unrealized': 0x0,
                'fees': 0x0,
                'sells': 0x0,
                'buys': 0x0
            };
            dbCoinResults[_0xf430d3(0xac)](_0xf430d3(0x12c))[_0xf430d3(0x16b)](_0x1a550e)[_0xf430d3(0xcd)]();
        }
    });
}
async function updateCoinResults(_0x291aa3) {
    const _0x397576 = _0x23c8f5;
    let _0x1838ac, _0x555cba, _0xedd306, _0x6eb98c, _0x1d1537, _0x3374b3, _0x2d564d = dbCoinResults[_0x397576(0xac)](_0x397576(0x12c))[_0x397576(0x145)]({ 'coin': _0x291aa3['coin'] })[_0x397576(0x17e)]();
    if (!_0x2d564d)
        return;
    if (_0x291aa3[_0x397576(0xa1)] && _0x291aa3[_0x397576(0xa1)][_0x397576(0x150)] == _0x397576(0x164))
        _0x1838ac = _0x291aa3[_0x397576(0xa1)][_0x397576(0x119)];
    else {
        if (_0x291aa3[_0x397576(0xa1)] && _0x291aa3[_0x397576(0xa1)][_0x397576(0x150)] == _0x397576(0xb1))
            _0x1838ac = _0x291aa3[_0x397576(0xa1)][_0x397576(0x119)] * global['ticker'][_0x397576(0xa7)];
        else
            _0x1838ac = 0.001 * _0x291aa3['filled'];
    }
    const _0x21a189 = _0x291aa3[_0x397576(0xcf)][_0x397576(0xda)](_0x397576(0x17a));
    _0x21a189 && (_0x3374b3 = {
        'coin': _0x291aa3[_0x397576(0xe1)],
        'symbol': _0x291aa3['symbol'],
        'filled': _0x291aa3[_0x397576(0xa3)] * _0x291aa3[_0x397576(0x9f)],
        'side': _0x291aa3['side'] == _0x397576(0x13c) ? _0x397576(0x98) : _0x397576(0x13c),
        'price': 0x1 / _0x291aa3[_0x397576(0x9f)]
    }, _0x291aa3 = { ..._0x3374b3 });
    _0x291aa3[_0x397576(0x11a)] == _0x397576(0x98) ? _0xedd306 = (_0x2d564d['breakeven'] * _0x2d564d[_0x397576(0x101)] + _0x291aa3['price'] * _0x291aa3[_0x397576(0xa3)]) / (_0x2d564d[_0x397576(0x101)] + _0x291aa3['filled']) : _0xedd306 = (_0x2d564d[_0x397576(0x9d)] * _0x2d564d[_0x397576(0x101)] - _0x291aa3['price'] * _0x291aa3[_0x397576(0xa3)]) / (_0x2d564d[_0x397576(0x101)] - _0x291aa3[_0x397576(0xa3)]);
    _0x291aa3[_0x397576(0x11a)] == _0x397576(0x98) ? _0x6eb98c = _0x2d564d[_0x397576(0xe5)] : _0x6eb98c = _0x2d564d[_0x397576(0xe5)] + (_0x291aa3[_0x397576(0x9f)] - _0x2d564d[_0x397576(0x9d)]) * _0x291aa3[_0x397576(0xa3)];
    _0x555cba = _0x291aa3[_0x397576(0x11a)] == 'sell' ? _0x2d564d[_0x397576(0x101)] - _0x291aa3[_0x397576(0xa3)] : _0x2d564d[_0x397576(0x101)] + _0x291aa3['filled'], _0x1d1537 = (_0x291aa3[_0x397576(0x9f)] - _0xedd306) * _0x555cba;
    let _0x38a04c = {
        'coin': _0x291aa3[_0x397576(0xe1)],
        'number': _0x555cba,
        'breakeven': formatResult(_0xedd306, 0x8),
        'realized': formatResult(_0x6eb98c, 0x8),
        'unrealized': formatResult(_0x1d1537, 0x8),
        'fees': formatResult(_0x2d564d['fees'] + _0x1838ac, 0x8),
        'sells': _0x291aa3['side'] == 'sell' ? _0x2d564d[_0x397576(0xe0)] + 0x1 : _0x2d564d[_0x397576(0xe0)],
        'buys': _0x291aa3['side'] == _0x397576(0x98) ? _0x2d564d['buys'] + 0x1 : _0x2d564d[_0x397576(0xc3)]
    };
    dbCoinResults[_0x397576(0xac)](_0x397576(0x12c))['find']({ 'coin': _0x291aa3[_0x397576(0xe1)] })[_0x397576(0x10e)](_0x38a04c)[_0x397576(0xcd)]();
}
async function placeOrder(_0x12a007) {
    const _0x8e8950 = _0x23c8f5, _0x57200c = config[_0x8e8950(0xa2)] == 'market' ? 'market' : _0x8e8950(0x156);
    if (!lockOrders && !coolingDown) {
        lastOrders = [], previousCoins = JSON[_0x8e8950(0xf0)](JSON[_0x8e8950(0xab)](currentCoins));
        for (const _0x45acb5 of _0x12a007) {
            let _0x42121a, _0x5a4005, _0x3db86e, _0x146c50, _0x1e3bd0, _0x6c3f84 = _0x45acb5[_0x8e8950(0xcf)];
            try {
                const _0x3d4cd4 = await exchange[_0x8e8950(0x189)](_0x6c3f84), _0x13d5f6 = _0x3d4cd4[_0x6c3f84];
                _0x42121a = _0x13d5f6[_0x8e8950(0xf6)], _0x5a4005 = _0x13d5f6[_0x8e8950(0x109)], _0x3db86e = _0x13d5f6[_0x8e8950(0xeb)];
                _0x45acb5[_0x8e8950(0x9e)] ? (_0x146c50 = _0x45acb5[_0x8e8950(0x11a)] == _0x8e8950(0x98) ? _0x8e8950(0x13c) : 'buy', _0x1e3bd0 = Math[_0x8e8950(0xc4)](_0x45acb5[_0x8e8950(0x134)]) / _0x42121a) : (_0x146c50 = _0x45acb5['side'], _0x1e3bd0 = Math['abs'](_0x45acb5[_0x8e8950(0x134)]));
                _0x57200c == _0x8e8950(0x156) && (config[_0x8e8950(0xa2)] == _0x8e8950(0xbd) && (_0x42121a = _0x146c50 == _0x8e8950(0x98) ? _0x5a4005 : _0x3db86e), config[_0x8e8950(0xa2)] == _0x8e8950(0x8c) && (_0x42121a = _0x146c50 == 'buy' ? _0x3db86e : _0x5a4005));
                _0x1e3bd0 = formatResult(_0x1e3bd0, 0x8), _0x42121a = formatResult(_0x42121a, 0x8);
                const _0x1ad59a = await exchange[_0x8e8950(0x185)](_0x6c3f84, _0x57200c, _0x146c50, _0x1e3bd0, _0x42121a);
                lastOrders[_0x8e8950(0x16b)]({
                    'orderId': _0x1ad59a['id'],
                    'symbol': _0x6c3f84,
                    'side': _0x146c50,
                    'reverse': _0x45acb5[_0x8e8950(0x9e)],
                    'amount': _0x45acb5[_0x8e8950(0x9e)] ? _0x1ad59a['amount'] * _0x1ad59a[_0x8e8950(0x9f)] : _0x1ad59a[_0x8e8950(0xf9)],
                    'filled': _0x45acb5['reverse'] ? _0x1ad59a[_0x8e8950(0xa3)] * _0x1ad59a[_0x8e8950(0x9f)] : _0x1ad59a[_0x8e8950(0xa3)],
                    'price': _0x1ad59a['price']
                });
                const _0x51bd53 = _0x57200c == _0x8e8950(0x126) ? _0x8e8950(0x140) : config[_0x8e8950(0xa2)] == 'limit-high' ? _0x8e8950(0x13b) : _0x8e8950(0x153);
                if (_0x57200c == _0x8e8950(0x126))
                    logHistory('order', _0x51bd53 + _0x8e8950(0xd6) + _0x6c3f84 + '\x20' + _0x146c50 + '\x20#' + formatResult(_0x1ad59a[_0x8e8950(0xa3)], 0x8) + '\x20@' + formatResult(_0x1ad59a[_0x8e8950(0x9f)], 0x8));
                else
                    logHistory(_0x8e8950(0x107), _0x51bd53 + _0x8e8950(0xd6) + _0x6c3f84 + '\x20' + _0x146c50 + '\x20#' + formatResult(_0x1ad59a[_0x8e8950(0xf9)], 0x8) + '\x20@' + formatResult(_0x1ad59a[_0x8e8950(0x9f)], 0x8));
                _0x1ad59a['coin'] = _0x45acb5[_0x8e8950(0xe1)], await updateCoinResults(_0x1ad59a);
                if (config[_0x8e8950(0x9c)] != 0x0) {
                    let _0x5a418a = null;
                    if (cooldownTracker[_0x8e8950(0x183)] == config[_0x8e8950(0x9c)] - 0x1)
                        _0x5a418a = cooldownTracker[_0x8e8950(0x99)]();
                    const _0x39eda0 = getTimeStamp();
                    cooldownTracker[_0x8e8950(0x16b)](_0x39eda0);
                    if (_0x5a418a) {
                        const _0xf700de = fns[_0x8e8950(0x170)](new Date(_0x39eda0), new Date(_0x5a418a));
                        _0xf700de < cooldownInterval && (logHistory(_0x8e8950(0xba), _0x8e8950(0x115) + config[_0x8e8950(0x9c)] + _0x8e8950(0x100) + cooldownInterval / 0x3c + '\x20minutes\x20-\x20starting\x20cooldown\x20period\x20of\x20' + cooldownPeriod / (0xe10 * 0x3e8) + _0x8e8950(0xdb)), coolingDown = !![], await sleep(cooldownPeriod), coolingDown = ![]);
                    }
                }
            } catch (_0x4c3241) {
                if (_0x4c3241[_0x8e8950(0xd4)]()[_0x8e8950(0xda)](_0x8e8950(0xb4)))
                    logHistory(_0x8e8950(0xba), _0x8e8950(0x10c) + _0x6c3f84);
                else {
                    if (_0x4c3241[_0x8e8950(0xd4)]()[_0x8e8950(0xda)](_0x8e8950(0xe8)))
                        logHistory(_0x8e8950(0xba), _0x8e8950(0x167) + _0x6c3f84);
                    else
                        await handleError(_0x4c3241, _0x8e8950(0x111));
                }
            }
        }
        if (lastOrders[_0x8e8950(0x183)] != 0x0) {
            lockOrders = !![];
            if (pidOrders)
                clearTimeout(pidOrders);
            pidOrders = setTimeout(validateOrders, 0xa * 0x3e8);
        }
    } else {
        if (lockOrders)
            !config['headless'] && (config['ordertype'] == 'market' ? logHistory(_0x8e8950(0xba), 'Ordering\x20not\x20possible\x20while\x20waiting\x20for\x20previous\x20order(s)\x20to\x20be\x20validated') : logHistory(_0x8e8950(0xba), _0x8e8950(0x11e)));
        else
            coolingDown && (!config[_0x8e8950(0x14b)] && logHistory(_0x8e8950(0xba), 'Ordering\x20not\x20possible\x20while\x20in\x20cooldown\x20mode'));
    }
}
function logHistory(_0x3bc1ce, _0x139278, _0x33b3ae = '') {
    const _0x4e7b56 = _0x23c8f5;
    let _0x4d084f = {
        'time': getTimeStamp(),
        'type': _0x3bc1ce,
        'event': _0x139278
    };
    dbLogs[_0x4e7b56(0xac)](_0x4e7b56(0x158))['push'](_0x4d084f)['write']();
    if (_0x33b3ae == '')
        _0x33b3ae = _0x139278;
    proxyEmit(_0x4e7b56(0xd1), {
        'log': _0x4d084f,
        'summary': _0x33b3ae
    }), process[_0x4e7b56(0x108)]({ 'telegram': _0x4d084f }), logging('' + _0x4d084f['event']);
}
function emitHistory(_0x44ca6d = {}) {
    const _0x471940 = _0x23c8f5;
    Object[_0x471940(0xbb)](_0x44ca6d)['length'] == 0x0 && (_0x44ca6d = {
        'type': [
            'order',
            _0x471940(0xd1)
        ],
        'event': '',
        'page': 0x1
    });
    if (_0x44ca6d[_0x471940(0x135)][_0x471940(0xda)](_0x471940(0xd1)))
        _0x44ca6d['type'][_0x471940(0x143)](_0x44ca6d[_0x471940(0x135)][_0x471940(0xbe)](_0x471940(0xd1)), 0x1, 'error', _0x471940(0x16f));
    if (dbLogs['has'](_0x471940(0x158))[_0x471940(0x17e)]()) {
        let _0x36b34f = dbLogs['get']('logs')['filter'](_0x49b829 => {
                const _0x5c3845 = _0x471940;
                if (_0x44ca6d['type'][_0x5c3845(0x183)] == 0x0)
                    return ![];
                else
                    return _0x44ca6d['type'][_0x5c3845(0xda)](_0x49b829[_0x5c3845(0x135)]);
            })['filter'](_0x3da85b => {
                const _0xdd8988 = _0x471940;
                if (_0x44ca6d['event'] == '')
                    return !![];
                else
                    return _0x3da85b[_0xdd8988(0xd1)][_0xdd8988(0xaf)]()['includes'](_0x44ca6d[_0xdd8988(0xd1)][_0xdd8988(0xaf)]());
            })['sortBy'](_0x471940(0x178)), _0x38ca6e = _0x36b34f[_0x471940(0x17e)]()[_0x471940(0x183)];
        _0x36b34f = _0x36b34f[_0x471940(0x9e)]()['slice']((_0x44ca6d[_0x471940(0x106)] - 0x1) * logPageSize, _0x44ca6d[_0x471940(0x106)] * logPageSize - 0x1)[_0x471940(0x9e)]()['value'](), proxyEmit('event-history', {
            'logs': _0x36b34f,
            'total': _0x38ca6e
        });
    } else
        proxyEmit(_0x471940(0x122), {
            'logs': [],
            'total': 0x0
        });
}
async function pauseBot(_0x3cb7a6) {
    const _0x1f0966 = _0x23c8f5, _0x552353 = new Date()[_0x1f0966(0x13d)]();
    console[_0x1f0966(0x117)]('Now\x20\x20\x20:\x20', _0x552353), console[_0x1f0966(0x117)](_0x1f0966(0x16c), _0x552353 - lastBotPause), console[_0x1f0966(0x117)]('Pauses:\x20', consecutivePauses);
    if (!lastBotPause)
        lastBotPause = new Date()[_0x1f0966(0x13d)](), consecutivePauses = 0x1;
    else {
        if (_0x552353 - lastBotPause - pauseBotInterval < 0x3c * 0x3e8) {
            consecutivePauses++;
            if (consecutivePauses > 0x3)
                process['exit'](0x1);
        } else
            consecutivePauses = 0x1;
        lastBotPause = new Date()['getTime']();
    }
    if (!botPaused) {
        botPaused = !![];
        if (pidBalances)
            clearTimeout(pidBalances);
        cleanws(), await sleep(_0x3cb7a6), botPaused = ![], reset();
    }
}
async function handleError(_0x2cfcd2, _0x17c3f3, _0x48d63c = '') {
    const _0x21a3bf = _0x23c8f5;
    if (_0x2cfcd2[_0x21a3bf(0xd4)]()['includes']('DDoSProtection'))
        logHistory('error', _0x17c3f3 + _0x21a3bf(0x179)), await pauseBot(pauseBotInterval);
    else {
        if (_0x2cfcd2['toString']()[_0x21a3bf(0xda)](_0x21a3bf(0x137)))
            logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0xca)), await pauseBot(pauseBotInterval);
        else {
            if (_0x2cfcd2['toString']()['includes'](_0x21a3bf(0x187)))
                logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0x139)), await pauseBot(pauseBotInterval);
            else {
                if (_0x2cfcd2[_0x21a3bf(0xd4)]()[_0x21a3bf(0xda)](_0x21a3bf(0xfa)))
                    logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0x103)), logHistory('error', _0x21a3bf(0xb8)), process[_0x21a3bf(0xa4)](0x4d);
                else {
                    if (_0x2cfcd2[_0x21a3bf(0xd4)]()[_0x21a3bf(0xda)](_0x21a3bf(0x17b)))
                        logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0xf2)), logHistory(_0x21a3bf(0xba), _0x21a3bf(0xb8)), process[_0x21a3bf(0xa4)](0x4d);
                    else {
                        if (_0x2cfcd2[_0x21a3bf(0xd4)]()[_0x21a3bf(0xda)](_0x21a3bf(0x133)))
                            logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0x11d)), logHistory('error', _0x21a3bf(0xb8)), process['exit'](0x4d);
                        else {
                            if (_0x2cfcd2['toString']()['includes'](_0x21a3bf(0x138)))
                                logHistory('error', _0x17c3f3 + _0x21a3bf(0x132)), logHistory(_0x21a3bf(0xba), 'Bot\x20was\x20stopped\x20-\x20resolve\x20the\x20issue\x20and\x20restart\x20bot'), process[_0x21a3bf(0xa4)](0x4d);
                            else {
                                if (_0x2cfcd2[_0x21a3bf(0xd4)]()[_0x21a3bf(0xda)]('InvalidNonce'))
                                    logHistory(_0x21a3bf(0xba), _0x17c3f3 + _0x21a3bf(0x132)), logHistory(_0x21a3bf(0xba), _0x21a3bf(0xb8)), process[_0x21a3bf(0xa4)](0x4d);
                                else
                                    _0x2cfcd2['toString']()['includes'](_0x21a3bf(0x14a)) ? logHistory('error', _0x17c3f3 + _0x21a3bf(0xb5)) : (logHistory(_0x21a3bf(0xba), _0x17c3f3 + '\x20|\x20Error\x20occured\x20-\x20pausing\x20bot\x20for\x205\x20minutes'), logging(_0x17c3f3 + _0x21a3bf(0x112), _0x2cfcd2), await pauseBot(pauseBotInterval));
                            }
                        }
                    }
                }
            }
        }
    }
}
function formatResult(_0x426518, _0x5ea751) {
    const _0x191d08 = _0x23c8f5;
    return parseFloat(_0x426518[_0x191d08(0x177)](_0x5ea751));
}
function logging(_0x2b8d91, _0x470425 = '') {
    const _0x580512 = _0x23c8f5;
    console['log'](getTimeStamp() + _0x580512(0xfc) + botID + _0x580512(0xe6) + _0x2b8d91, _0x470425);
}
function getServerTime() {
    const _0x11446c = _0x23c8f5, _0x379b4c = new Date();
    return _0x379b4c[_0x11446c(0x17c)]() + '/' + (_0x379b4c[_0x11446c(0xb3)]() + 0x1)['toString']()['padStart'](0x2, '0') + '/' + _0x379b4c[_0x11446c(0x12a)]()[_0x11446c(0xd4)]()[_0x11446c(0x146)](0x2, '0') + '\x20' + _0x379b4c[_0x11446c(0x148)]()['toString']()[_0x11446c(0x146)](0x2, '0') + ':' + _0x379b4c[_0x11446c(0x8b)]()['toString']()['padStart'](0x2, '0') + ':' + _0x379b4c['getSeconds']()[_0x11446c(0xd4)]()[_0x11446c(0x146)](0x2, '0');
}
function getTimeStamp() {
    const _0x53c932 = _0x23c8f5, _0x1b4f09 = shiftedTime();
    return _0x1b4f09['getFullYear']() + '/' + (_0x1b4f09[_0x53c932(0xb3)]() + 0x1)['toString']()[_0x53c932(0x146)](0x2, '0') + '/' + _0x1b4f09['getDate']()[_0x53c932(0xd4)]()[_0x53c932(0x146)](0x2, '0') + '\x20' + _0x1b4f09['getHours']()['toString']()[_0x53c932(0x146)](0x2, '0') + ':' + _0x1b4f09[_0x53c932(0x8b)]()[_0x53c932(0xd4)]()[_0x53c932(0x146)](0x2, '0') + ':' + _0x1b4f09[_0x53c932(0x152)]()[_0x53c932(0xd4)]()[_0x53c932(0x146)](0x2, '0');
}
function getDate() {
    const _0x17b1db = _0x23c8f5, _0x313b83 = shiftedTime();
    return _0x313b83[_0x17b1db(0x17c)]() + '/' + (_0x313b83[_0x17b1db(0xb3)]() + 0x1)[_0x17b1db(0xd4)]()[_0x17b1db(0x146)](0x2, '0') + '/' + _0x313b83['getDate']()[_0x17b1db(0xd4)]()['padStart'](0x2, '0');
}
function getHour() {
    const _0x30f177 = _0x23c8f5, _0x1f27b5 = shiftedTime();
    return _0x1f27b5[_0x30f177(0x148)]()['toString']()['padStart'](0x2, '0');
}
function sleep(_0x3df267) {
    return new Promise(_0x2a9fb4 => setTimeout(_0x2a9fb4, _0x3df267));
}
function shiftedTime() {
    const _0x3ff7fb = _0x23c8f5, _0x895f90 = new Date();
    let _0x3aa2d2 = _0x895f90;
    if (config && config[_0x3ff7fb(0x184)] !== 0x0)
        _0x3aa2d2 = fns[_0x3ff7fb(0x13e)](_0x895f90, { 'hours': config[_0x3ff7fb(0x184)] });
    return _0x3aa2d2;
}