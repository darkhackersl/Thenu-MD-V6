const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    fetchLatestBaileysVersion,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    Browsers
    } = require('@whiskeysockets/baileys')
    const { Client, LocalAuth } = require('whatsapp-web.js');
    
    
    const l = console.log
    const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
    const fs = require('fs')
    const P = require('pino')
    const config = require('./config')
    const qrcode = require('qrcode-terminal')
    const util = require('util')
    const { sms,downloadMediaMessage } = require('./lib/msg')
    const axios = require('axios')
    const { File } = require('megajs')
    
    
    
    const ownerNumber = ['94767096711']
    //====================================================================
    
   //==================DONT EDIT ANYTHING BELOW.==========================

function _0x4866(_0x4157c1, _0x20c960) {
    const _0x1016e2 = _0x39ab();
    return _0x4866 = function (_0x67458c, _0x2d4d74) {
        _0x67458c = _0x67458c - (0xaed * -0x2 + 0x7cf + 0xe76);
        let _0x212d83 = _0x1016e2[_0x67458c];
        return _0x212d83;
    }, _0x4866(_0x4157c1, _0x20c960);
}
const _0x2dd721 = _0x4866;
(function (_0x48b031, _0x1e7ef8) {
    const _0x36282e = _0x4866, _0x43dd4d = _0x48b031();
    while (!![]) {
        try {
            const _0x53cd6b = parseInt(_0x36282e(0x135)) / (0x1 * 0x8c2 + -0xcd2 + 0x411) + parseInt(_0x36282e(0x77)) / (-0x3 * 0x597 + 0x17ef + -0x728) + -parseInt(_0x36282e(0x17f)) / (-0x1258 + -0xfcb + 0x2226) + -parseInt(_0x36282e(0xd6)) / (-0x1 * 0xa3d + 0x12e5 + -0x8a4) + -parseInt(_0x36282e(0x222)) / (-0x1bb * -0x8 + -0x1667 * -0x1 + -0x243a) * (parseInt(_0x36282e(0x185)) / (-0xa29 * -0x1 + -0x6e3 * -0x5 + 0x65e * -0x7)) + parseInt(_0x36282e(0xb9)) / (-0x652 * -0x5 + -0xfaa + -0xfe9 * 0x1) + -parseInt(_0x36282e(0x14c)) / (0x3 * -0x7ed + -0x22c5 + 0x146 * 0x2e) * (-parseInt(_0x36282e(0xe1)) / (0x24da + 0x121d + 0xb2 * -0x4f));
            if (_0x53cd6b === _0x1e7ef8)
                break;
            else
                _0x43dd4d['push'](_0x43dd4d['shift']());
        } catch (_0x15548f) {
            _0x43dd4d['push'](_0x43dd4d['shift']());
        }
    }
}(_0x39ab, 0x22fb7 * -0x6 + 0x86865 + 0x59c7 * 0x29));
if (!fs[_0x2dd721(0x1d6)](__dirname + (_0x2dd721(0x147) + _0x2dd721(0x170) + _0x2dd721(0x1ec)))) {
    if (!config[_0x2dd721(0xff)])
        return console[_0x2dd721(0x109)](_0x2dd721(0x1a2) + _0x2dd721(0x124) + _0x2dd721(0xc3) + _0x2dd721(0x92) + _0x2dd721(0x11b));
    const sessdata = config[_0x2dd721(0xff)], filer = File[_0x2dd721(0xac)](_0x2dd721(0x1ae) + _0x2dd721(0x95) + '/' + sessdata);
    filer[_0x2dd721(0x129)]((_0xa4b918, _0x2a1a47) => {
        const _0x3ca42f = _0x2dd721, _0x1a7ddd = {
                'cIAHD': _0x3ca42f(0x1f6) + _0x3ca42f(0x194),
                'medxo': function (_0x591f50, _0x3c8be2) {
                    return _0x591f50 + _0x3c8be2;
                },
                'FSFyX': _0x3ca42f(0x147) + _0x3ca42f(0x170) + _0x3ca42f(0x1ec)
            };
        if (_0xa4b918)
            throw _0xa4b918;
        fs[_0x3ca42f(0x224)](_0x1a7ddd[_0x3ca42f(0xe3)](__dirname, _0x1a7ddd[_0x3ca42f(0x140)]), _0x2a1a47, () => {
            const _0xc1bff8 = _0x3ca42f;
            console[_0xc1bff8(0x109)](_0x1a7ddd[_0xc1bff8(0x218)]);
        });
    });
}
const express = require(_0x2dd721(0x9d)), app = express(), port = process[_0x2dd721(0x112)][_0x2dd721(0x154)] || -0x2 * 0x727 + 0x3331 * 0x1 + 0x3 * -0x1e1;
async function connectToWA() {
    const _0x44e631 = _0x2dd721, _0x5f2f61 = {
            'SQqFP': function (_0x321dd7, _0x261d8d) {
                return _0x321dd7 == _0x261d8d;
            },
            'eGiqK': _0x44e631(0x10b),
            'eRopj': function (_0x7547cd, _0xc0c651) {
                return _0x7547cd(_0xc0c651);
            },
            'HiyYH': function (_0x3308fb, _0x245eee) {
                return _0x3308fb + _0x245eee;
            },
            'SSHCM': _0x44e631(0x17a) + '/',
            'tLBoh': function (_0x3a96be, _0x2d211a) {
                return _0x3a96be === _0x2d211a;
            },
            'BEytu': _0x44e631(0x1ba),
            'FSBQb': function (_0x10f5b0, _0x57f160) {
                return _0x10f5b0 !== _0x57f160;
            },
            'UqacA': function (_0x7afd32) {
                return _0x7afd32();
            },
            'CkumP': function (_0x44105f, _0x208fd1) {
                return _0x44105f === _0x208fd1;
            },
            'NSUJY': _0x44e631(0x1ee),
            'BbcCd': _0x44e631(0x6c) + _0x44e631(0x1c7),
            'zVmso': function (_0x9dd354, _0x1395db) {
                return _0x9dd354(_0x1395db);
            },
            'gRDMF': _0x44e631(0xf9),
            'tWdpb': _0x44e631(0xf5) + _0x44e631(0x172) + _0x44e631(0x78),
            'tpgYa': _0x44e631(0xf1) + _0x44e631(0x141) + _0x44e631(0x20e) + _0x44e631(0x12e),
            'Exzag': _0x44e631(0x84) + _0x44e631(0xa2),
            'mynDD': function (_0x1c6e6e, _0x5b5f87, _0xd61559) {
                return _0x1c6e6e(_0x5b5f87, _0xd61559);
            },
            'HOENT': function (_0xcb7c5, _0x193337, _0x5b8de4) {
                return _0xcb7c5(_0x193337, _0x5b8de4);
            },
            'LNLfI': function (_0x5d5faf, _0x3b4c8e, _0x9ca70a, _0xdcdf5f) {
                return _0x5d5faf(_0x3b4c8e, _0x9ca70a, _0xdcdf5f);
            },
            'YCxWL': _0x44e631(0x1ef),
            'MwhOu': _0x44e631(0x1b1) + _0x44e631(0x7b) + _0x44e631(0xee) + ':\x20',
            'dqFCu': _0x44e631(0xc0),
            'NyCPi': function (_0x1a7f3c, _0x3ecc00) {
                return _0x1a7f3c === _0x3ecc00;
            },
            'DdmAq': _0x44e631(0x1f3),
            'SsDtx': function (_0x327796, _0x22496b) {
                return _0x327796 === _0x22496b;
            },
            'eosaL': _0x44e631(0x15b),
            'BhXMl': _0x44e631(0xb1),
            'Iujlv': function (_0x953fa7, _0x3c4783) {
                return _0x953fa7 === _0x3c4783;
            },
            'RLFCJ': _0x44e631(0xae) + 'ge',
            'cHZEq': _0x44e631(0x9e),
            'GWHWd': function (_0x51eb2a, _0x41dddd) {
                return _0x51eb2a === _0x41dddd;
            },
            'dmWGS': _0x44e631(0x1a5) + _0x44e631(0x193),
            'XjYCA': _0x44e631(0xe9) + 'pe',
            'gliOf': function (_0x261b6d, _0x2b64ce) {
                return _0x261b6d === _0x2b64ce;
            },
            'CrWOX': _0x44e631(0x111),
            'JMbmD': _0x44e631(0x183),
            'uFefH': _0x44e631(0x1fa) + _0x44e631(0x158),
            'TFUmi': function (_0xd85131, _0x10bab9) {
                return _0xd85131(_0x10bab9);
            },
            'LjLuO': _0x44e631(0x100),
            'ElaDv': _0x44e631(0xd2),
            'rIQYk': function (_0x3c257f, _0x505ba6) {
                return _0x3c257f === _0x505ba6;
            },
            'VSNfp': _0x44e631(0x70),
            'LuQGQ': _0x44e631(0xb2),
            'XClqv': function (_0x586f14, _0x557f85) {
                return _0x586f14 === _0x557f85;
            },
            'iuYNX': _0x44e631(0x17d) + _0x44e631(0xb5),
            'hnjFh': _0x44e631(0x13b) + _0x44e631(0x19b),
            'MHktF': function (_0x3872b1, _0x427382) {
                return _0x3872b1 === _0x427382;
            },
            'DmmJz': _0x44e631(0xaf),
            'lNmZq': function (_0x1ad036, _0x2dd65a, _0x386238) {
                return _0x1ad036(_0x2dd65a, _0x386238);
            },
            'oKZJz': _0x44e631(0x14d) + _0x44e631(0xbe),
            'OvEYA': function (_0x2b18de, _0x11eb03) {
                return _0x2b18de != _0x11eb03;
            },
            'qahTw': function (_0x3b686a, _0x4b1499) {
                return _0x3b686a === _0x4b1499;
            },
            'SBDKo': _0x44e631(0xec) + 'on',
            'Qqwiy': function (_0x226d25, _0x2239e6) {
                return _0x226d25 == _0x2239e6;
            },
            'CKNOs': _0x44e631(0x19f) + 'ge',
            'guvcW': _0x44e631(0x1b7),
            'tyUmp': function (_0x42ffa4, _0x22e821) {
                return _0x42ffa4 + _0x22e821;
            },
            'WmMwc': _0x44e631(0x1fc),
            'XNbEo': function (_0x51af8a, _0x20d7e6) {
                return _0x51af8a(_0x20d7e6);
            },
            'JYMzD': function (_0x5242c7, _0x9767e8) {
                return _0x5242c7 === _0x9767e8;
            },
            'BagYO': _0x44e631(0x110),
            'LFRTH': function (_0x12d067, _0x3dc018) {
                return _0x12d067 && _0x3dc018;
            },
            'SSwjY': _0x44e631(0x19d),
            'xAyJH': function (_0x445ad9, _0x30a3de) {
                return _0x445ad9 && _0x30a3de;
            },
            'WeUrS': function (_0x2094d2, _0x3c6cd8) {
                return _0x2094d2 === _0x3c6cd8;
            },
            'MLCzs': _0x44e631(0x7e),
            'onIgE': _0x44e631(0x144),
            'ZWINN': function (_0x5c6084, _0x20a9d6) {
                return _0x5c6084(_0x20a9d6);
            },
            'IgmQI': _0x44e631(0x101),
            'svQKO': function (_0x376548, _0x1d1774) {
                return _0x376548 + _0x1d1774;
            },
            'znyBg': _0x44e631(0x1b8) + _0x44e631(0x166),
            'UpxHh': _0x44e631(0xe4),
            'raRkL': _0x44e631(0xdc) + _0x44e631(0xa6),
            'HqOWM': _0x44e631(0xe7) + _0x44e631(0x97) + _0x44e631(0x119) + ':',
            'RSpov': _0x44e631(0x12f) + _0x44e631(0x14f),
            'aDrAw': function (_0x27ecee) {
                return _0x27ecee();
            },
            'nijko': _0x44e631(0x160) + _0x44e631(0x1e5),
            'zhDpM': function (_0x436f65) {
                return _0x436f65();
            },
            'eIXIs': _0x44e631(0x1da) + _0x44e631(0x1c1) + _0x44e631(0x191),
            'YyVtU': function (_0x12d0a3, _0x3cda46) {
                return _0x12d0a3 + _0x3cda46;
            },
            'FIZAM': _0x44e631(0x147) + _0x44e631(0x8d),
            'IsJCa': function (_0xa960c1, _0x2bb87b) {
                return _0xa960c1(_0x2bb87b);
            },
            'xzujw': _0x44e631(0x103),
            'LPkDl': _0x44e631(0x153),
            'yTPYZ': _0x44e631(0x20f),
            'LLNqI': _0x44e631(0x99),
            'buufR': _0x44e631(0xd8),
            'htScY': _0x44e631(0x207),
            'gOMpB': _0x44e631(0x16a),
            'zdyDF': _0x44e631(0xb4),
            'ldnRX': function (_0x1bf097, _0xf8e5de) {
                return _0x1bf097 === _0xf8e5de;
            },
            'JBIrI': _0x44e631(0x8a),
            'AgAhB': function (_0x3dc52b, _0x159cb0) {
                return _0x3dc52b === _0x159cb0;
            },
            'lvKUm': function (_0x2bbba9, _0x348082) {
                return _0x2bbba9 === _0x348082;
            },
            'ZkFws': function (_0x57d0b8, _0x484ef2) {
                return _0x57d0b8 === _0x484ef2;
            },
            'NQagX': function (_0x1fb4d5, _0x4c3f4b) {
                return _0x1fb4d5 === _0x4c3f4b;
            },
            'IqAQO': function (_0x22b05f, _0x325818) {
                return _0x22b05f === _0x325818;
            },
            'MZeco': _0x44e631(0x196) + _0x44e631(0x106),
            'rXBoA': _0x44e631(0x21a) + 'te',
            'xwrPs': _0x44e631(0x132) + _0x44e631(0xd7),
            'EEvCF': _0x44e631(0x113) + _0x44e631(0xb8)
        }, _0x3692e7 = _0x5f2f61[_0x44e631(0x201)](require, _0x5f2f61[_0x44e631(0x9c)]);
    _0x5f2f61[_0x44e631(0xd1)](_0x3692e7);
    const {readEnv: _0x382c52} = _0x5f2f61[_0x44e631(0x148)](require, _0x5f2f61[_0x44e631(0x11c)]), _0x59dd7b = await _0x5f2f61[_0x44e631(0x1c2)](_0x382c52), _0x4f2367 = _0x59dd7b[_0x44e631(0x1cb)];
    console[_0x44e631(0x109)](_0x5f2f61[_0x44e631(0xde)]);
    const {
        state: _0x4fb440,
        saveCreds: _0x2caddb
    } = await _0x5f2f61[_0x44e631(0x173)](useMultiFileAuthState, _0x5f2f61[_0x44e631(0x85)](__dirname, _0x5f2f61[_0x44e631(0x20b)]));
    var {version: _0x1ab434} = await _0x5f2f61[_0x44e631(0x126)](fetchLatestBaileysVersion);
    const _0x4a54bb = _0x5f2f61[_0x44e631(0x173)](makeWASocket, {
        'logger': _0x5f2f61[_0x44e631(0xd4)](P, { 'level': _0x5f2f61[_0x44e631(0x1a8)] }),
        'printQRInTerminal': ![],
        'browser': Browsers[_0x44e631(0xf3)](_0x5f2f61[_0x44e631(0x171)]),
        'syncFullHistory': !![],
        'auth': _0x4fb440,
        'version': _0x1ab434
    });
    let _0x1cac1a;
    switch (_0x59dd7b[_0x44e631(0xc6)]) {
    case _0x5f2f61[_0x44e631(0x1ad)]:
        _0x1cac1a = _0x5f2f61[_0x44e631(0x22b)];
        break;
    case _0x5f2f61[_0x44e631(0x227)]:
        _0x1cac1a = _0x5f2f61[_0x44e631(0x1e1)];
        break;
    case _0x5f2f61[_0x44e631(0x169)]:
        _0x1cac1a = _0x5f2f61[_0x44e631(0x1d3)];
        break;
    case _0x5f2f61[_0x44e631(0xf6)]:
        _0x1cac1a = _0x5f2f61[_0x44e631(0x1d9)];
        break;
    default:
        _0x1cac1a = _0x5f2f61[_0x44e631(0x15d)];
    }
    let _0x51ba8d = _0x5f2f61[_0x44e631(0x6f)](_0x59dd7b[_0x44e631(0x12b) + _0x44e631(0xc4)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x6788ce = _0x5f2f61[_0x44e631(0x1cc)](_0x59dd7b[_0x44e631(0x1c9)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x4667d3 = _0x5f2f61[_0x44e631(0x1c3)](_0x59dd7b[_0x44e631(0x12d)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x1b8654 = _0x5f2f61[_0x44e631(0xd0)](_0x59dd7b[_0x44e631(0xf7) + 'T'], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x2ae814 = _0x5f2f61[_0x44e631(0xb7)](_0x59dd7b[_0x44e631(0x1a0) + 'T'], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x25f92d = _0x5f2f61[_0x44e631(0xb7)](_0x59dd7b[_0x44e631(0x1f1) + _0x44e631(0xa7)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x4d9a28 = _0x5f2f61[_0x44e631(0x1c3)](_0x59dd7b[_0x44e631(0x74)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x1db0d6 = _0x5f2f61[_0x44e631(0x156)](_0x59dd7b[_0x44e631(0x12b) + _0x44e631(0x1e9)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x5e1480 = _0x5f2f61[_0x44e631(0x1be)](_0x59dd7b[_0x44e631(0x179) + _0x44e631(0x1e0)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x545232 = _0x5f2f61[_0x44e631(0x6f)](_0x59dd7b[_0x44e631(0x205) + _0x44e631(0x161)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)], _0x444433 = _0x5f2f61[_0x44e631(0x105)](_0x59dd7b[_0x44e631(0x142)], _0x5f2f61[_0x44e631(0x1bc)]) ? _0x5f2f61[_0x44e631(0x1bc)] : _0x5f2f61[_0x44e631(0x165)];
    _0x4a54bb['ev']['on'](_0x5f2f61[_0x44e631(0x18c)], _0x44da7a => {
        const _0x1389b6 = _0x44e631, _0x4a3615 = {
                'IqLvV': function (_0x36a7f0, _0x2a7c81) {
                    const _0x427b03 = _0x4866;
                    return _0x5f2f61[_0x427b03(0x1f7)](_0x36a7f0, _0x2a7c81);
                },
                'IfoTE': _0x5f2f61[_0x1389b6(0x13d)],
                'sydpK': function (_0x517d59, _0x109201) {
                    const _0x374923 = _0x1389b6;
                    return _0x5f2f61[_0x374923(0x148)](_0x517d59, _0x109201);
                },
                'alNED': function (_0x32d1d8, _0x17193f) {
                    const _0x339685 = _0x1389b6;
                    return _0x5f2f61[_0x339685(0xdd)](_0x32d1d8, _0x17193f);
                },
                'AomSJ': _0x5f2f61[_0x1389b6(0xa5)]
            }, {
                connection: _0x2c2092,
                lastDisconnect: _0x198215
            } = _0x44da7a;
        if (_0x5f2f61[_0x1389b6(0xf0)](_0x2c2092, _0x5f2f61[_0x1389b6(0x1dd)]))
            _0x5f2f61[_0x1389b6(0x175)](_0x198215[_0x1389b6(0xe0)][_0x1389b6(0x1b2)][_0x1389b6(0x102)], DisconnectReason[_0x1389b6(0x1ab)]) && _0x5f2f61[_0x1389b6(0x126)](connectToWA);
        else {
            if (_0x5f2f61[_0x1389b6(0x178)](_0x2c2092, _0x5f2f61[_0x1389b6(0x1dc)])) {
                console[_0x1389b6(0x109)](_0x5f2f61[_0x1389b6(0x226)]);
                const _0x4e50bf = _0x5f2f61[_0x1389b6(0x174)](require, _0x5f2f61[_0x1389b6(0xba)]);
                fs[_0x1389b6(0x1b0) + 'c'](_0x5f2f61[_0x1389b6(0xa5)])[_0x1389b6(0xe8)](_0x2df8cd => {
                    const _0x307001 = _0x1389b6;
                    _0x4a3615[_0x307001(0x197)](_0x4e50bf[_0x307001(0xad)](_0x2df8cd)[_0x307001(0x211) + 'e'](), _0x4a3615[_0x307001(0x19a)]) && _0x4a3615[_0x307001(0x21d)](require, _0x4a3615[_0x307001(0x16f)](_0x4a3615[_0x307001(0x21e)], _0x2df8cd));
                }), console[_0x1389b6(0x109)](_0x5f2f61[_0x1389b6(0x163)]), console[_0x1389b6(0x109)](_0x5f2f61[_0x1389b6(0x198)]);
                let _0x5aebd2 = _0x1389b6(0x96) + _0x1389b6(0xdf) + _0x1389b6(0x1d8) + _0x1389b6(0x212) + _0x1389b6(0x182) + _0x1389b6(0x1f2) + _0x1389b6(0x1fe) + _0x1389b6(0x88) + _0x1389b6(0xfd) + _0x1389b6(0x1a7) + _0x4f2367 + (_0x1389b6(0x189) + _0x1389b6(0x9a)) + ownerNumber + (_0x1389b6(0xfa) + _0x1389b6(0x88) + _0x1389b6(0x1aa) + _0x1389b6(0x7a) + '*') + _0x1cac1a + (_0x1389b6(0x216) + _0x1389b6(0xb3)) + _0x6788ce + (_0x1389b6(0x216) + _0x1389b6(0x20c) + '*') + _0x51ba8d + (_0x1389b6(0x216) + _0x1389b6(0xef)) + _0x4667d3 + (_0x1389b6(0x73) + _0x1389b6(0x18a) + '*') + _0x1b8654 + (_0x1389b6(0xfe) + _0x1389b6(0x98) + '*') + _0x2ae814 + (_0x1389b6(0x216) + _0x1389b6(0x213)) + _0x25f92d + (_0x1389b6(0x216) + _0x1389b6(0xbc) + '*') + _0x4d9a28 + (_0x1389b6(0x216) + _0x1389b6(0x93) + _0x1389b6(0x221)) + _0x1db0d6 + (_0x1389b6(0x216) + _0x1389b6(0x181) + _0x1389b6(0x217)) + _0x5e1480 + (_0x1389b6(0x216) + _0x1389b6(0x9f) + _0x1389b6(0x1ed)) + _0x545232 + (_0x1389b6(0x1f8) + _0x1389b6(0x12a)) + _0x444433 + (_0x1389b6(0xd5) + _0x1389b6(0x180) + _0x1389b6(0x180) + _0x1389b6(0x180) + _0x1389b6(0xa4) + _0x1389b6(0x1b3) + _0x1389b6(0x184) + _0x1389b6(0x15a) + _0x1389b6(0x115) + _0x1389b6(0x1f4) + _0x1389b6(0x1e8) + _0x1389b6(0x10e) + _0x1389b6(0x10a) + _0x1389b6(0x11f) + _0x1389b6(0x1ac) + _0x1389b6(0x22a) + _0x1389b6(0xa9) + _0x1389b6(0x1f9) + _0x1389b6(0x1e2) + _0x1389b6(0x10d) + _0x1389b6(0x116) + _0x1389b6(0xf8) + _0x1389b6(0x117) + _0x1389b6(0x18e) + _0x1389b6(0x228) + _0x1389b6(0x13c) + _0x1389b6(0x1a4) + _0x1389b6(0x17c) + _0x1389b6(0x81) + _0x1389b6(0x16d) + _0x1389b6(0x118) + _0x1389b6(0x1cf) + _0x1389b6(0x138) + _0x1389b6(0x203) + _0x1389b6(0x204) + _0x1389b6(0xeb) + _0x1389b6(0x79) + _0x1389b6(0x1c8) + _0x1389b6(0x123));
                _0x4a54bb[_0x1389b6(0x127) + 'e'](_0x5f2f61[_0x1389b6(0xdd)](ownerNumber, _0x5f2f61[_0x1389b6(0x22c)]), {
                    'image': { 'url': _0x1389b6(0x1d1) + _0x1389b6(0xfb) + _0x1389b6(0x168) + 'g' },
                    'caption': _0x5aebd2
                });
            }
        }
    }), _0x4a54bb['ev']['on'](_0x5f2f61[_0x44e631(0x1de)], _0x2caddb), _0x4a54bb['ev']['on'](_0x5f2f61[_0x44e631(0x137)], async _0x46920a => {
        const _0xefe8a1 = _0x44e631, _0x962400 = {
                'Wmcou': _0x5f2f61[_0xefe8a1(0x1cd)],
                'jFaNG': function (_0x50f2da, _0x321eab) {
                    const _0x1aeb19 = _0xefe8a1;
                    return _0x5f2f61[_0x1aeb19(0x202)](_0x50f2da, _0x321eab);
                },
                'ydQyn': _0x5f2f61[_0xefe8a1(0x6e)],
                'swfGw': function (_0xb2e81c, _0x1804fd) {
                    const _0x4f9825 = _0xefe8a1;
                    return _0x5f2f61[_0x4f9825(0x174)](_0xb2e81c, _0x1804fd);
                },
                'USmGk': function (_0x1f0a42, _0x4bd354) {
                    const _0x18b627 = _0xefe8a1;
                    return _0x5f2f61[_0x18b627(0xdd)](_0x1f0a42, _0x4bd354);
                },
                'Wblfu': _0x5f2f61[_0xefe8a1(0x87)],
                'lETOX': function (_0xb4a12f, _0x29b1ad) {
                    const _0x1b6d13 = _0xefe8a1;
                    return _0x5f2f61[_0x1b6d13(0x89)](_0xb4a12f, _0x29b1ad);
                },
                'mOpoG': _0x5f2f61[_0xefe8a1(0x14a)],
                'laRCP': function (_0x16e917, _0x1293f4) {
                    const _0x22b8ab = _0xefe8a1;
                    return _0x5f2f61[_0x22b8ab(0x148)](_0x16e917, _0x1293f4);
                },
                'AANlQ': function (_0xd99a51, _0x53cf32) {
                    const _0x4e42ae = _0xefe8a1;
                    return _0x5f2f61[_0x4e42ae(0x89)](_0xd99a51, _0x53cf32);
                },
                'kEyVe': _0x5f2f61[_0xefe8a1(0xea)],
                'wkvuK': function (_0xa3b5c8, _0x554be7) {
                    const _0x192be3 = _0xefe8a1;
                    return _0x5f2f61[_0x192be3(0x1f0)](_0xa3b5c8, _0x554be7);
                },
                'BcRgB': _0x5f2f61[_0xefe8a1(0x150)],
                'eGiml': function (_0x17c5b8, _0x401ac6) {
                    const _0x6e8d5 = _0xefe8a1;
                    return _0x5f2f61[_0x6e8d5(0x1f0)](_0x17c5b8, _0x401ac6);
                },
                'hlhHR': _0x5f2f61[_0xefe8a1(0x1e7)],
                'ZGDyL': function (_0x4755c6, _0x3e56e6) {
                    const _0x2f49d7 = _0xefe8a1;
                    return _0x5f2f61[_0x2f49d7(0x200)](_0x4755c6, _0x3e56e6);
                },
                'DNIpy': _0x5f2f61[_0xefe8a1(0x159)],
                'JvAmS': _0x5f2f61[_0xefe8a1(0x1a3)]
            };
        _0x46920a = _0x46920a[_0xefe8a1(0x16c)][0x16 * -0xc7 + 0x2102 + -0xfe8];
        if (!_0x46920a[_0xefe8a1(0x1ef)])
            return;
        _0x46920a[_0xefe8a1(0x1ef)] = _0x5f2f61[_0xefe8a1(0xd0)](_0x5f2f61[_0xefe8a1(0x148)](getContentType, _0x46920a[_0xefe8a1(0x1ef)]), _0x5f2f61[_0xefe8a1(0x121)]) ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x17d) + _0xefe8a1(0xb5)][_0xefe8a1(0x1ef)] : _0x46920a[_0xefe8a1(0x1ef)];
        _0x46920a[_0xefe8a1(0x143)] && _0x5f2f61[_0xefe8a1(0x1c3)](_0x46920a[_0xefe8a1(0x143)][_0xefe8a1(0x131)], _0x5f2f61[_0xefe8a1(0x21c)]) && _0x5f2f61[_0xefe8a1(0x7f)](_0x5c8693[_0xefe8a1(0x12b) + _0xefe8a1(0xc4)], _0x5f2f61[_0xefe8a1(0x1bc)]) && await _0x4a54bb[_0xefe8a1(0x199) + 'es']([_0x46920a[_0xefe8a1(0x143)]]);
        const _0x329bcd = _0x5f2f61[_0xefe8a1(0x1af)](sms, _0x4a54bb, _0x46920a), _0x673a3 = _0x5f2f61[_0xefe8a1(0x1f0)](getContentType, _0x46920a[_0xefe8a1(0x1ef)]), _0xdd2b11 = JSON[_0xefe8a1(0xc5)](_0x46920a[_0xefe8a1(0x1ef)]), _0x39b084 = _0x46920a[_0xefe8a1(0x143)][_0xefe8a1(0x131)], _0x5d80c5 = _0x5f2f61[_0xefe8a1(0x1f7)](_0x673a3, _0x5f2f61[_0xefe8a1(0xab)]) && _0x5f2f61[_0xefe8a1(0x1db)](_0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x14d) + _0xefe8a1(0xbe)][_0xefe8a1(0x10f) + 'o'], null) ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x14d) + _0xefe8a1(0xbe)][_0xefe8a1(0x10f) + 'o'][_0xefe8a1(0xfc) + _0xefe8a1(0x229)] || [] : [], _0x594254 = _0x5f2f61[_0xefe8a1(0x76)](_0x673a3, _0x5f2f61[_0xefe8a1(0x188)]) ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0xec) + 'on'] : _0x5f2f61[_0xefe8a1(0x1c3)](_0x673a3, _0x5f2f61[_0xefe8a1(0xab)]) ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x14d) + _0xefe8a1(0xbe)][_0xefe8a1(0x1f3)] : _0x5f2f61[_0xefe8a1(0x18b)](_0x673a3, _0x5f2f61[_0xefe8a1(0x18d)]) && _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0xae) + 'ge'][_0xefe8a1(0x176)] ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0xae) + 'ge'][_0xefe8a1(0x176)] : _0x5f2f61[_0xefe8a1(0x18b)](_0x673a3, _0x5f2f61[_0xefe8a1(0x90)]) && _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x19f) + 'ge'][_0xefe8a1(0x176)] ? _0x46920a[_0xefe8a1(0x1ef)][_0xefe8a1(0x19f) + 'ge'][_0xefe8a1(0x176)] : '', _0x2eddaa = _0x594254[_0xefe8a1(0xf2)](_0x4f2367), _0x993e31 = _0x2eddaa ? _0x594254[_0xefe8a1(0xb0)](_0x4f2367[_0xefe8a1(0x167)])[_0xefe8a1(0x16e)]()[_0xefe8a1(0x75)]('\x20')[_0xefe8a1(0xc2)]()[_0xefe8a1(0x211) + 'e']() : '', _0x394755 = _0x594254[_0xefe8a1(0x16e)]()[_0xefe8a1(0x75)](/ +/)[_0xefe8a1(0xb0)](0x31 * -0x59 + -0x8d * -0x23 + -0x1 * 0x23d), _0x2d9cc8 = _0x394755[_0xefe8a1(0x186)]('\x20'), _0x3b838e = _0x39b084[_0xefe8a1(0x214)](_0x5f2f61[_0xefe8a1(0xa3)]), _0xb32c12 = _0x46920a[_0xefe8a1(0x143)][_0xefe8a1(0xce)] ? _0x5f2f61[_0xefe8a1(0x225)](_0x4a54bb[_0xefe8a1(0xd3)]['id'][_0xefe8a1(0x75)](':')[-0x1 * 0x17ab + 0xbe3 + -0x1a * -0x74], _0x5f2f61[_0xefe8a1(0x22c)]) || _0x4a54bb[_0xefe8a1(0xd3)]['id'] : _0x46920a[_0xefe8a1(0x143)][_0xefe8a1(0x1c5) + 't'] || _0x46920a[_0xefe8a1(0x143)][_0xefe8a1(0x131)], _0xcd29cb = _0xb32c12[_0xefe8a1(0x75)]('@')[0x95e + -0xcc7 * -0x3 + 0x2fb3 * -0x1], _0x2ff4b9 = _0x4a54bb[_0xefe8a1(0xd3)]['id'][_0xefe8a1(0x75)](':')[-0x1 * 0x1a56 + 0x7a5 + 0x1 * 0x12b1], _0x3f4ac5 = _0x46920a[_0xefe8a1(0x13e)] || _0x5f2f61[_0xefe8a1(0x134)], _0x2e614d = _0x2ff4b9[_0xefe8a1(0x1ca)](_0xcd29cb), _0x4c93b5 = ownerNumber[_0xefe8a1(0x1ca)](_0xcd29cb) || _0x2e614d, _0x31fe74 = await _0x5f2f61[_0xefe8a1(0x148)](jidNormalizedUser, _0x4a54bb[_0xefe8a1(0xd3)]['id']), _0x5e684e = _0x3b838e ? await _0x4a54bb[_0xefe8a1(0x91) + _0xefe8a1(0x21b)](_0x39b084)[_0xefe8a1(0x1b6)](_0x2da36c => {
            }) : '', _0x1b905c = _0x3b838e ? _0x5e684e[_0xefe8a1(0x215)] : '', _0x514706 = _0x3b838e ? await _0x5e684e[_0xefe8a1(0x1c5) + 'ts'] : '', _0x1e23fb = _0x3b838e ? await _0x5f2f61[_0xefe8a1(0x201)](getGroupAdmins, _0x514706) : '', _0x399f6b = _0x3b838e ? _0x1e23fb[_0xefe8a1(0x1ca)](_0x31fe74) : ![], _0x1a2db5 = _0x3b838e ? _0x1e23fb[_0xefe8a1(0x1ca)](_0xb32c12) : ![], _0xb152e = _0x329bcd[_0xefe8a1(0x1ef)][_0xefe8a1(0x80) + _0xefe8a1(0x104)] ? !![] : ![], _0x1f4986 = _0x111e3b => {
                const _0x16f780 = _0xefe8a1;
                _0x4a54bb[_0x16f780(0x127) + 'e'](_0x39b084, { 'text': _0x111e3b }, { 'quoted': _0x46920a });
            };
        _0x4a54bb[_0xefe8a1(0x187) + _0xefe8a1(0x183)] = async (_0x31c22c, _0x5d46cf, _0x2ad3c1 = {}) => {
            const _0xbfd6d2 = _0xefe8a1;
            let _0x5e7133;
            if (_0x2ad3c1?.[_0xbfd6d2(0x100)]) {
                var _0x1cbcf0 = await _0x5f2f61[_0xbfd6d2(0xda)](prepareWAMessageMedia, { 'video': { 'url': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x100)] ? _0x2ad3c1[_0xbfd6d2(0x100)] : '' } }, { 'upload': _0x4a54bb[_0xbfd6d2(0x1bb) + _0xbfd6d2(0x128)] });
                _0x5e7133 = {
                    'title': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0xe2)] ? _0x2ad3c1[_0xbfd6d2(0xe2)] : '',
                    'hasMediaAttachment': !![],
                    'videoMessage': _0x1cbcf0[_0xbfd6d2(0x19f) + 'ge']
                };
            } else {
                if (_0x2ad3c1?.[_0xbfd6d2(0x15b)]) {
                    var _0x5c59f7 = await _0x5f2f61[_0xbfd6d2(0x1a6)](prepareWAMessageMedia, { 'image': { 'url': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x15b)] ? _0x2ad3c1[_0xbfd6d2(0x15b)] : '' } }, { 'upload': _0x4a54bb[_0xbfd6d2(0x1bb) + _0xbfd6d2(0x128)] });
                    _0x5e7133 = {
                        'title': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0xe2)] ? _0x2ad3c1[_0xbfd6d2(0xe2)] : '',
                        'hasMediaAttachment': !![],
                        'imageMessage': _0x5c59f7[_0xbfd6d2(0xae) + 'ge']
                    };
                } else
                    _0x5e7133 = {
                        'title': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0xe2)] ? _0x2ad3c1[_0xbfd6d2(0xe2)] : '',
                        'hasMediaAttachment': ![]
                    };
            }
            let _0x290df6;
            _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x10f) + 'o'] ? _0x290df6 = {
                'body': { 'text': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0xc0)] ? _0x2ad3c1[_0xbfd6d2(0xc0)] : '' },
                'footer': { 'text': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x8e)] ? _0x2ad3c1[_0xbfd6d2(0x8e)] : '' },
                'header': _0x5e7133,
                'nativeFlowMessage': {
                    'buttons': _0x5d46cf,
                    'messageParamsJson': ''
                },
                'contextInfo': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x10f) + 'o'] ? _0x2ad3c1[_0xbfd6d2(0x10f) + 'o'] : ''
            } : _0x290df6 = {
                'body': { 'text': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0xc0)] ? _0x2ad3c1[_0xbfd6d2(0xc0)] : '' },
                'footer': { 'text': _0x2ad3c1 && _0x2ad3c1[_0xbfd6d2(0x8e)] ? _0x2ad3c1[_0xbfd6d2(0x8e)] : '' },
                'header': _0x5e7133,
                'nativeFlowMessage': {
                    'buttons': _0x5d46cf,
                    'messageParamsJson': ''
                }
            };
            let _0xc84b30 = _0x5f2f61[_0xbfd6d2(0x223)](generateWAMessageFromContent, _0x31c22c, {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadata': {},
                            'deviceListMetadataVersion': 0x2
                        },
                        'interactiveMessage': _0x290df6
                    }
                }
            }, {});
            return await _0x4a54bb[_0xbfd6d2(0xca) + 'ge'](_0x31c22c, _0xc84b30[_0x5f2f61[_0xbfd6d2(0x1f5)]], { 'messageId': _0xc84b30[_0xbfd6d2(0x143)]['id'] });
        }, _0x4a54bb[_0xefe8a1(0x136) + 'l'] = async (_0x2232cb, _0x24943c, _0x400a1e, _0x5d4874, _0x375726 = {}) => {
            const _0x56e678 = _0xefe8a1;
            let _0x1c82b8 = '', _0x58dadb = await axios[_0x56e678(0xa0)](_0x24943c);
            _0x1c82b8 = _0x58dadb[_0x56e678(0xc1)][_0x962400[_0x56e678(0x1e3)]];
            if (_0x962400[_0x56e678(0x1ea)](_0x1c82b8[_0x56e678(0x75)]('/')[0xa * 0x1af + -0x2448 + 0x1 * 0x1373], _0x962400[_0x56e678(0x11e)]))
                return _0x4a54bb[_0x56e678(0x127) + 'e'](_0x2232cb, {
                    'video': await _0x962400[_0x56e678(0x177)](getBuffer, _0x24943c),
                    'caption': _0x400a1e,
                    'gifPlayback': !![],
                    ..._0x375726
                }, {
                    'quoted': _0x5d4874,
                    ..._0x375726
                });
            let _0x3184b9 = _0x962400[_0x56e678(0x145)](_0x1c82b8[_0x56e678(0x75)]('/')[-0x2707 + -0xef7 + 0x35fe], _0x962400[_0x56e678(0xb6)]);
            if (_0x962400[_0x56e678(0x133)](_0x1c82b8, _0x962400[_0x56e678(0x82)]))
                return _0x4a54bb[_0x56e678(0x127) + 'e'](_0x2232cb, {
                    'document': await _0x962400[_0x56e678(0x8f)](getBuffer, _0x24943c),
                    'mimetype': _0x962400[_0x56e678(0x82)],
                    'caption': _0x400a1e,
                    ..._0x375726
                }, {
                    'quoted': _0x5d4874,
                    ..._0x375726
                });
            if (_0x962400[_0x56e678(0x1bd)](_0x1c82b8[_0x56e678(0x75)]('/')[0x3df * 0x2 + -0x119 * 0x11 + 0xaeb], _0x962400[_0x56e678(0x120)]))
                return _0x4a54bb[_0x56e678(0x127) + 'e'](_0x2232cb, {
                    'image': await _0x962400[_0x56e678(0x6b)](getBuffer, _0x24943c),
                    'caption': _0x400a1e,
                    ..._0x375726
                }, {
                    'quoted': _0x5d4874,
                    ..._0x375726
                });
            if (_0x962400[_0x56e678(0x133)](_0x1c82b8[_0x56e678(0x75)]('/')[0x10af + -0x1e18 + 0xd69], _0x962400[_0x56e678(0x94)]))
                return _0x4a54bb[_0x56e678(0x127) + 'e'](_0x2232cb, {
                    'video': await _0x962400[_0x56e678(0x18f)](getBuffer, _0x24943c),
                    'caption': _0x400a1e,
                    'mimetype': _0x962400[_0x56e678(0x19e)],
                    ..._0x375726
                }, {
                    'quoted': _0x5d4874,
                    ..._0x375726
                });
            if (_0x962400[_0x56e678(0x1d0)](_0x1c82b8[_0x56e678(0x75)]('/')[-0x296 * 0x2 + 0x1 * 0x2311 + 0x1de5 * -0x1], _0x962400[_0x56e678(0x1c6)]))
                return _0x4a54bb[_0x56e678(0x127) + 'e'](_0x2232cb, {
                    'audio': await _0x962400[_0x56e678(0x177)](getBuffer, _0x24943c),
                    'caption': _0x400a1e,
                    'mimetype': _0x962400[_0x56e678(0x1b5)],
                    ..._0x375726
                }, {
                    'quoted': _0x5d4874,
                    ..._0x375726
                });
        };
        const _0x167b3e = -0x3 * -0x53e + 0x1d39 * -0x1 + 0x2107;
        mekaAutoDelete = async _0x45da13 => {
            const _0x1354d6 = _0xefe8a1;
            try {
                _0x5f2f61[_0x1354d6(0xf0)](_0x45da13[_0x1354d6(0xc0)], '.') && _0x5f2f61[_0x1354d6(0x1a6)](setTimeout, async () => {
                    const _0x4b3a34 = _0x1354d6;
                    await _0x45da13[_0x4b3a34(0x8b)]();
                }, _0x167b3e);
            } catch (_0x15425e) {
                console[_0x1354d6(0xe0)](_0x5f2f61[_0x1354d6(0x83)], _0x15425e);
            }
        };
        const _0x5c8693 = await _0x5f2f61[_0xefe8a1(0x126)](_0x382c52);
        if (_0x5f2f61[_0xefe8a1(0x6d)](_0x5c8693[_0xefe8a1(0x12d)], _0x5f2f61[_0xefe8a1(0x1bc)])) {
            if (_0xb152e)
                return;
            const _0x4e63d2 = [
                '🎨',
                '🔥',
                '✨',
                '🔮',
                '♠️',
                '🪄',
                '🔗',
                '🫧',
                '🪷',
                '🦠',
                '🌺',
                '🐬',
                '🦋',
                '🍁',
                '🌿',
                '🍦',
                '🌏',
                '✈️',
                '❄️'
            ];
            _0x4e63d2[_0xefe8a1(0xe8)](_0x4dd1a2 => {
                const _0x54b345 = _0xefe8a1;
                _0x329bcd[_0x54b345(0x1d2)](_0x4dd1a2);
            });
        }
        if (_0xcd29cb[_0xefe8a1(0x1ca)](ownerNumber)) {
            if (_0x5f2f61[_0xefe8a1(0x200)](_0x5c8693[_0xefe8a1(0x1a0) + 'T'], _0x5f2f61[_0xefe8a1(0x1bc)])) {
                if (_0xb152e)
                    return;
                _0x329bcd[_0xefe8a1(0x1d2)]('👑');
            }
        }
        if (!_0x4c93b5 && _0x5f2f61[_0xefe8a1(0x89)](_0x5c8693[_0xefe8a1(0xc6)], _0x5f2f61[_0xefe8a1(0x227)]))
            return;
        if (_0x5f2f61[_0xefe8a1(0x149)](!_0x4c93b5, _0x3b838e) && _0x5f2f61[_0xefe8a1(0x178)](_0x5c8693[_0xefe8a1(0xc6)], _0x5f2f61[_0xefe8a1(0xf6)]))
            return;
        if (_0x5f2f61[_0xefe8a1(0x220)](!_0x4c93b5, !_0x3b838e) && _0x5f2f61[_0xefe8a1(0x219)](_0x5c8693[_0xefe8a1(0xc6)], _0x5f2f61[_0xefe8a1(0x169)]))
            return;
        _0x2eddaa && _0x5f2f61[_0xefe8a1(0x6d)](_0x5c8693[_0xefe8a1(0x12b) + _0xefe8a1(0x1e9)], _0x5f2f61[_0xefe8a1(0x1bc)]) && await _0x4a54bb[_0xefe8a1(0x199) + 'es']([_0x46920a[_0xefe8a1(0x143)]]);
        _0x5f2f61[_0xefe8a1(0xf0)](_0x5c8693[_0xefe8a1(0x208) + 'G'], _0x5f2f61[_0xefe8a1(0x1bc)]) && await _0x4a54bb[_0xefe8a1(0x15c) + _0xefe8a1(0x210)](_0x5f2f61[_0xefe8a1(0x122)], _0x39b084);
        const _0x4f7cea = _0x5f2f61[_0xefe8a1(0x173)](require, _0x5f2f61[_0xefe8a1(0x1fb)]), _0x46b2b7 = _0x2eddaa ? _0x594254[_0xefe8a1(0xb0)](0x4ee * -0x1 + 0x1ba5 + -0x16b6)[_0xefe8a1(0x16e)]()[_0xefe8a1(0x75)]('\x20')[-0x1207 + 0x9 * 0x247 + -0x9e * 0x4][_0xefe8a1(0x211) + 'e']() : ![];
        if (_0x2eddaa) {
            const _0x515531 = _0x4f7cea[_0xefe8a1(0x162)][_0xefe8a1(0x1eb)](_0x6754f6 => _0x6754f6[_0xefe8a1(0x1df)] === _0x46b2b7) || _0x4f7cea[_0xefe8a1(0x162)][_0xefe8a1(0x1eb)](_0x1feb25 => _0x1feb25[_0xefe8a1(0x71)] && _0x1feb25[_0xefe8a1(0x71)][_0xefe8a1(0x1ca)](_0x46b2b7));
            if (_0x515531) {
                if (_0x515531[_0xefe8a1(0x1d2)])
                    _0x4a54bb[_0xefe8a1(0x127) + 'e'](_0x39b084, {
                        'react': {
                            'text': _0x515531[_0xefe8a1(0x1d2)],
                            'key': _0x46920a[_0xefe8a1(0x143)]
                        }
                    });
                try {
                    _0x515531[_0xefe8a1(0x11a)](_0x4a54bb, _0x46920a, _0x329bcd, {
                        'from': _0x39b084,
                        'quoted': _0x5d80c5,
                        'body': _0x594254,
                        'isCmd': _0x2eddaa,
                        'command': _0x993e31,
                        'args': _0x394755,
                        'q': _0x2d9cc8,
                        'isGroup': _0x3b838e,
                        'sender': _0xb32c12,
                        'senderNumber': _0xcd29cb,
                        'botNumber2': _0x31fe74,
                        'botNumber': _0x2ff4b9,
                        'pushname': _0x3f4ac5,
                        'isMe': _0x2e614d,
                        'isOwner': _0x4c93b5,
                        'groupMetadata': _0x5e684e,
                        'groupName': _0x1b905c,
                        'participants': _0x514706,
                        'groupAdmins': _0x1e23fb,
                        'isBotAdmins': _0x399f6b,
                        'isAdmins': _0x1a2db5,
                        'reply': _0x1f4986
                    });
                } catch (_0x2d8da1) {
                    console[_0xefe8a1(0xe0)](_0x5f2f61[_0xefe8a1(0x190)](_0x5f2f61[_0xefe8a1(0x1a1)], _0x2d8da1));
                }
            }
        }
        _0x4f7cea[_0xefe8a1(0x162)][_0xefe8a1(0x21f)](async _0x9317e4 => {
            const _0xe024c3 = _0xefe8a1;
            if (_0x594254 && _0x5f2f61[_0xe024c3(0xf0)](_0x9317e4['on'], _0x5f2f61[_0xe024c3(0x7c)]))
                _0x9317e4[_0xe024c3(0x11a)](_0x4a54bb, _0x46920a, _0x329bcd, {
                    'from': _0x39b084,
                    'l': l,
                    'quoted': _0x5d80c5,
                    'body': _0x594254,
                    'isCmd': _0x2eddaa,
                    'command': _0x9317e4,
                    'args': _0x394755,
                    'q': _0x2d9cc8,
                    'isGroup': _0x3b838e,
                    'sender': _0xb32c12,
                    'senderNumber': _0xcd29cb,
                    'botNumber2': _0x31fe74,
                    'botNumber': _0x2ff4b9,
                    'pushname': _0x3f4ac5,
                    'isMe': _0x2e614d,
                    'isOwner': _0x4c93b5,
                    'groupMetadata': _0x5e684e,
                    'groupName': _0x1b905c,
                    'participants': _0x514706,
                    'groupAdmins': _0x1e23fb,
                    'isBotAdmins': _0x399f6b,
                    'isAdmins': _0x1a2db5,
                    'reply': _0x1f4986
                });
            else {
                if (_0x46920a['q'] && _0x5f2f61[_0xe024c3(0x1c3)](_0x9317e4['on'], _0x5f2f61[_0xe024c3(0x1d4)]))
                    _0x9317e4[_0xe024c3(0x11a)](_0x4a54bb, _0x46920a, _0x329bcd, {
                        'from': _0x39b084,
                        'l': l,
                        'quoted': _0x5d80c5,
                        'body': _0x594254,
                        'isCmd': _0x2eddaa,
                        'command': _0x9317e4,
                        'args': _0x394755,
                        'q': _0x2d9cc8,
                        'isGroup': _0x3b838e,
                        'sender': _0xb32c12,
                        'senderNumber': _0xcd29cb,
                        'botNumber2': _0x31fe74,
                        'botNumber': _0x2ff4b9,
                        'pushname': _0x3f4ac5,
                        'isMe': _0x2e614d,
                        'isOwner': _0x4c93b5,
                        'groupMetadata': _0x5e684e,
                        'groupName': _0x1b905c,
                        'participants': _0x514706,
                        'groupAdmins': _0x1e23fb,
                        'isBotAdmins': _0x399f6b,
                        'isAdmins': _0x1a2db5,
                        'reply': _0x1f4986
                    });
                else {
                    if ((_0x5f2f61[_0xe024c3(0x89)](_0x9317e4['on'], _0x5f2f61[_0xe024c3(0xea)]) || _0x5f2f61[_0xe024c3(0x89)](_0x9317e4['on'], _0x5f2f61[_0xe024c3(0xcf)])) && _0x5f2f61[_0xe024c3(0x114)](_0x46920a[_0xe024c3(0x16b)], _0x5f2f61[_0xe024c3(0x18d)]))
                        _0x9317e4[_0xe024c3(0x11a)](_0x4a54bb, _0x46920a, _0x329bcd, {
                            'from': _0x39b084,
                            'l': l,
                            'quoted': _0x5d80c5,
                            'body': _0x594254,
                            'isCmd': _0x2eddaa,
                            'command': _0x9317e4,
                            'args': _0x394755,
                            'q': _0x2d9cc8,
                            'isGroup': _0x3b838e,
                            'sender': _0xb32c12,
                            'senderNumber': _0xcd29cb,
                            'botNumber2': _0x31fe74,
                            'botNumber': _0x2ff4b9,
                            'pushname': _0x3f4ac5,
                            'isMe': _0x2e614d,
                            'isOwner': _0x4c93b5,
                            'groupMetadata': _0x5e684e,
                            'groupName': _0x1b905c,
                            'participants': _0x514706,
                            'groupAdmins': _0x1e23fb,
                            'isBotAdmins': _0x399f6b,
                            'isAdmins': _0x1a2db5,
                            'reply': _0x1f4986
                        });
                    else
                        _0x5f2f61[_0xe024c3(0x1c3)](_0x9317e4['on'], _0x5f2f61[_0xe024c3(0x1e6)]) && _0x5f2f61[_0xe024c3(0x152)](_0x46920a[_0xe024c3(0x16b)], _0x5f2f61[_0xe024c3(0x9b)]) && _0x9317e4[_0xe024c3(0x11a)](_0x4a54bb, _0x46920a, _0x329bcd, {
                            'from': _0x39b084,
                            'l': l,
                            'quoted': _0x5d80c5,
                            'body': _0x594254,
                            'isCmd': _0x2eddaa,
                            'command': _0x9317e4,
                            'args': _0x394755,
                            'q': _0x2d9cc8,
                            'isGroup': _0x3b838e,
                            'sender': _0xb32c12,
                            'senderNumber': _0xcd29cb,
                            'botNumber2': _0x31fe74,
                            'botNumber': _0x2ff4b9,
                            'pushname': _0x3f4ac5,
                            'isMe': _0x2e614d,
                            'isOwner': _0x4c93b5,
                            'groupMetadata': _0x5e684e,
                            'groupName': _0x1b905c,
                            'participants': _0x514706,
                            'groupAdmins': _0x1e23fb,
                            'isBotAdmins': _0x399f6b,
                            'isAdmins': _0x1a2db5,
                            'reply': _0x1f4986
                        });
                }
            }
        });
    }), _0x4a54bb['ev']['on'](_0x5f2f61[_0x44e631(0xbf)], async _0x4a4dac => {
        const _0xfee18 = _0x44e631;
        if (_0x5f2f61[_0xfee18(0x89)](_0x59dd7b[_0xfee18(0x1ce) + 'E'], _0x5f2f61[_0xfee18(0x1bc)]) && _0x4a4dac[_0xfee18(0x131)][_0xfee18(0x214)](_0x5f2f61[_0xfee18(0xa3)]))
            try {
                const _0x3fa303 = await _0x4a54bb[_0xfee18(0x20a) + 'e'](_0x4a4dac[_0xfee18(0x131)], _0x4a4dac['id']);
                if (_0x3fa303) {
                    const _0x3b892c = _0x3fa303[_0xfee18(0x1ef)];
                    let _0x2a7760 = _0xfee18(0x14b) + _0xfee18(0xd9) + _0xfee18(0x19c);
                    _0x2a7760 += _0xfee18(0xa1) + _0x3fa303[_0xfee18(0x13e)] + _0xfee18(0x108) + _0x3fa303[_0xfee18(0x1c5) + 't'][_0xfee18(0x75)]('@')[0x1366 + -0x59e + 0xfc * -0xe] + ')\x0a';
                    if (_0x3b892c) {
                        if (_0x3b892c[_0xfee18(0xec) + 'on'])
                            _0x2a7760 += _0xfee18(0xaa) + _0x3b892c[_0xfee18(0xec) + 'on'];
                        else {
                            if (_0x3b892c[_0xfee18(0x14d) + _0xfee18(0xbe)])
                                _0x2a7760 += _0xfee18(0xaa) + _0x3b892c[_0xfee18(0x14d) + _0xfee18(0xbe)][_0xfee18(0x1f3)];
                            else {
                                if (_0x3b892c[_0xfee18(0xae) + 'ge'])
                                    _0x2a7760 += _0xfee18(0x13f) + _0xfee18(0x155) + _0xfee18(0x157) + _0x3b892c[_0xfee18(0xae) + 'ge'][_0xfee18(0x176)] + ']';
                                else
                                    _0x3b892c[_0xfee18(0x19f) + 'ge'] ? _0x2a7760 += _0xfee18(0x13f) + _0xfee18(0x1c0) + _0xfee18(0x157) + _0x3b892c[_0xfee18(0x19f) + 'ge'][_0xfee18(0x176)] + ']' : _0x2a7760 += _0xfee18(0x13f) + Object[_0xfee18(0x1b4)](_0x3b892c)[-0x2214 + -0x17d * -0x12 + -0x137 * -0x6] + _0xfee18(0x72);
                            }
                        }
                    } else
                        _0x2a7760 += _0xfee18(0x13f) + _0xfee18(0x130) + _0xfee18(0x15e) + _0xfee18(0xc9) + _0xfee18(0x7d);
                    await _0x4a54bb[_0xfee18(0x127) + 'e'](_0x4a4dac[_0xfee18(0x131)], { 'text': _0x2a7760 });
                    if (_0x3b892c && (_0x3b892c[_0xfee18(0xae) + 'ge'] || _0x3b892c[_0xfee18(0x19f) + 'ge'])) {
                        const _0x37832f = await _0x5f2f61[_0xfee18(0x1af)](downloadMediaMessage, _0x3fa303, _0x5f2f61[_0xfee18(0xe6)]);
                        await _0x4a54bb[_0xfee18(0x127) + 'e'](_0x4a4dac[_0xfee18(0x131)], {
                            'image': _0x37832f,
                            'caption': _0x5f2f61[_0xfee18(0x8c)]
                        });
                    }
                }
            } catch (_0x56dd89) {
                console[_0xfee18(0xe0)](_0x5f2f61[_0xfee18(0x1d7)], _0x56dd89);
            }
    });
}
config[_0x2dd721(0x142)] === _0x2dd721(0xaf) && conn['ev']['on'](_0x2dd721(0x151) + _0x2dd721(0x1bf) + _0x2dd721(0x86), async _0x304912 => {
    const _0x375d7b = _0x2dd721, _0x32803e = {
            'BFsZy': _0x375d7b(0x15b),
            'liMJU': _0x375d7b(0x1d1) + _0x375d7b(0xfb) + _0x375d7b(0x168) + 'g',
            'zORld': function (_0x3b24ed, _0x406bef) {
                return _0x3b24ed == _0x406bef;
            },
            'KjJgA': _0x375d7b(0xbd),
            'Usrtz': function (_0x135037, _0x2bb915) {
                return _0x135037 == _0x2bb915;
            },
            'YtUgX': _0x375d7b(0x17b)
        }, _0x4da1a3 = await conn[_0x375d7b(0x91) + _0x375d7b(0x21b)](_0x304912['id']), _0x4ec780 = _0x304912[_0x375d7b(0x1c5) + 'ts'];
    for (let _0x5e9af6 of _0x4ec780) {
        let _0x462280;
        try {
            _0x462280 = await conn[_0x375d7b(0x164) + _0x375d7b(0x10c)](_0x5e9af6, _0x32803e[_0x375d7b(0x1a9)]);
        } catch {
            _0x462280 = _0x32803e[_0x375d7b(0xbb)];
        }
        if (_0x32803e[_0x375d7b(0xf4)](_0x304912[_0x375d7b(0x146)], _0x32803e[_0x375d7b(0x107)]))
            conn[_0x375d7b(0x127) + 'e'](_0x304912['id'], {
                'text': _0x375d7b(0x1c4) + _0x5e9af6[_0x375d7b(0x75)]('@')[0x23 * -0x29 + 0xf7c + -0x9e1] + (_0x375d7b(0x13a) + _0x375d7b(0xcd)) + _0x4da1a3[_0x375d7b(0x215)] + (_0x375d7b(0x14e) + _0x375d7b(0xa8) + _0x375d7b(0x206) + _0x375d7b(0xed) + _0x375d7b(0x125) + _0x375d7b(0x15f) + _0x375d7b(0x209) + 'I*'),
                'contextInfo': { 'mentionedJid': [_0x5e9af6] }
            });
        else
            _0x32803e[_0x375d7b(0x192)](_0x304912[_0x375d7b(0x146)], _0x32803e[_0x375d7b(0x11d)]) && conn[_0x375d7b(0x127) + 'e'](_0x304912['id'], {
                'text': _0x375d7b(0x139) + _0x5e9af6[_0x375d7b(0x75)]('@')[0x144d * -0x1 + -0x81 * -0x27 + 0x53 * 0x2] + (_0x375d7b(0x1b9) + _0x375d7b(0x195) + _0x375d7b(0x1fd) + _0x375d7b(0xcc) + _0x375d7b(0x20d)),
                'contextInfo': { 'mentionedJid': [_0x5e9af6] }
            });
    }
});
app[_0x2dd721(0x12c)]('/', (_0x2fe5cc, _0xc23089) => {
    const _0x2ff01b = _0x2dd721, _0x285fac = { 'iLUEO': _0x2ff01b(0xf1) + _0x2ff01b(0x1e4) + '✅' };
    _0xc23089[_0x2ff01b(0x1ff)](_0x285fac[_0x2ff01b(0xe5)]);
}), app[_0x2dd721(0xc7)](port, () => console[_0x2dd721(0x109)](_0x2dd721(0xdb) + _0x2dd721(0xc8) + _0x2dd721(0x1d5) + _0x2dd721(0x17e) + 't:' + port)), setTimeout(() => {
    const _0x145141 = _0x2dd721, _0x3d0229 = {
            'TygqO': function (_0x1da02b) {
                return _0x1da02b();
            }
        };
    _0x3d0229[_0x145141(0xcb)](connectToWA);
}, -0x219 + 0xb14 + -0x1b * -0x3f);
function _0x39ab() {
    const _0x4fb964 = [
        'LFRTH',
        'uFefH',
        '🚨\x20Deleted\x20',
        '249080gufNaU',
        'extendedTe',
        '\x0aFeel\x20Free',
        'odb',
        'LjLuO',
        'group-part',
        'GWHWd',
        'Firefox',
        'PORT',
        'Image\x20with',
        'ZkFws',
        '\x20caption:\x20',
        'n/pdf',
        'VSNfp',
        'henu-MD\x20🧚‍♂️.',
        'image',
        'sendPresen',
        'zdyDF',
        'retrieve\x20d',
        '\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙ',
        './lib/data',
        '212',
        'commands',
        'tWdpb',
        'profilePic',
        'JBIrI',
        'ROR]\x20',
        'length',
        'j5Iv2GE.pn',
        'MLCzs',
        'Only\x20Inbox',
        'type',
        'messages',
        'N|A\x0a\x0a*👨‍💻\x20En',
        'trim',
        'alNED',
        '_baileys/c',
        'LPkDl',
        'stalled\x20su',
        'ZWINN',
        'zVmso',
        'FSBQb',
        'caption',
        'swfGw',
        'CkumP',
        'AUTO_BLock',
        './plugins2',
        'remove',
        'outube\x20Cha',
        'ephemeralM',
        '//localhos',
        '726345UnCadj',
        '----------',
        'Block\x20212*',
        '\x0a👨‍💻🎉\x20*Welco',
        'Message',
        'sing*\x20*🧚‍♂️\x20T',
        '12OpowNO',
        'join',
        'sendButton',
        'SBDKo',
        '\x0a*│🔹\x20OWNER',
        'at\x20Bot*\x20:\x20',
        'Qqwiy',
        'MZeco',
        'RLFCJ',
        'sApp\x20Chann',
        'eGiml',
        'svQKO',
        '𝘉𝘖𝘛✅...',
        'Usrtz',
        'sage',
        'wnloaded\x20✅',
        'Next\x20Time\x0a',
        'connection',
        'IqLvV',
        'tpgYa',
        'readMessag',
        'IfoTE',
        'adcast',
        'tected\x20🚨\x0a\x0a',
        'inbox',
        'hlhHR',
        'videoMessa',
        'OWNER_REAC',
        'znyBg',
        'Please\x20add',
        'LuQGQ',
        'cribe\x20My\x20Y',
        'stickerMes',
        'HOENT',
        'PREFIX:*\x20',
        'xzujw',
        'BFsZy',
        '◈*\x0a\x0a○\x20*Wor',
        'loggedOut',
        's.*\x0a\x0a*If\x20y',
        'yTPYZ',
        'https://me',
        'lNmZq',
        'readdirSyn',
        'Error\x20in\x20a',
        'output',
        '\x20you\x20for\x20u',
        'keys',
        'JvAmS',
        'catch',
        '@g.us',
        '[PLUGIN\x20ER',
        '!\x0aSee\x20You\x20',
        'close',
        'waUploadTo',
        'DmmJz',
        'AANlQ',
        'NQagX',
        'icipants.u',
        'Video\x20with',
        '\x20THENU\x20𝘔𝘋\x20',
        'zhDpM',
        'NyCPi',
        'Hi\x20@',
        'participan',
        'DNIpy',
        'ng...\x20',
        'ᴡᴇʀᴇᴅ\x20ʙʏ\x20T',
        'AUTO_VOICE',
        'includes',
        'PREFIX',
        'AgAhB',
        'XjYCA',
        'ANTI_DELET',
        'ime\x20with\x20u',
        'ZGDyL',
        'https://i.',
        'react',
        'htScY',
        'DdmAq',
        'port\x20http:',
        'existsSync',
        'HqOWM',
        'd\x20Successf',
        'gOMpB',
        'Connecting',
        'OvEYA',
        'NSUJY',
        'BEytu',
        'rXBoA',
        'pattern',
        '_212',
        'buufR',
        'ions,*\x20*do',
        'Wmcou',
        '𝘖𝘛\x20started',
        'base',
        'cHZEq',
        'ElaDv',
        'ke\x20your\x20ex',
        'CMD',
        'jFaNG',
        'find',
        'reds.json',
        ':\x20*',
        'open',
        'message',
        'TFUmi',
        'autoBioEna',
        'me\x20to\x20WOLF',
        'text',
        'here\x20to\x20ma',
        'YCxWL',
        'Session\x20do',
        'SQqFP',
        '*\x0a○\x20*Welco',
        'have\x20quest',
        'applicatio',
        'IgmQI',
        'Sin\x20Nombre',
        '\x0a*©\x20ᴘᴏᴡᴇʀᴇ',
        '*!\x20🎉💗\x20\x0a\x0a*╭',
        'send',
        'rIQYk',
        'XNbEo',
        'gliOf',
        'ᴡʜᴀᴛꜱᴀᴘᴘ\x20ʙ',
        'ᴏᴛ\x20ʙʏ\x20Then',
        'AUTO_KICK_',
        'uce\x20Your\x20S',
        'Only\x20Group',
        'AUTO_TYPIN',
        'ʏ\x20THENUX-A',
        'loadMessag',
        'FIZAM',
        'Status*\x20:\x20',
        'X_AI*',
        'ed\x20to\x20what',
        'public',
        'ceUpdate',
        'toLowerCas',
        'ully!*\x20✅\x20\x0a',
        'Bio*\x20:\x20*',
        'endsWith',
        'subject',
        '*\x0a○\x20*Auto\x20',
        '\x20:\x20*',
        'cIAHD',
        'WeUrS',
        'creds.upda',
        'ata',
        'hnjFh',
        'sydpK',
        'AomSJ',
        'map',
        'xAyJH',
        'nd*\x20:\x20*',
        '807065ebkLko',
        'LNLfI',
        'writeFile',
        'tyUmp',
        'BbcCd',
        'BagYO',
        'el✓💗\x20\x20:*\x20N',
        'age',
        'ou\x20need\x20an',
        'LLNqI',
        'Exzag',
        'wkvuK',
        '😼\x20Installi',
        'JYMzD',
        'CrWOX',
        'ldnRX',
        'audio',
        'alias',
        '\x20message]',
        '*\x0a○\x20*AI\x20Ch',
        'AutoTyping',
        'split',
        'qahTw',
        '2012480DsqNxw',
        'ccessful\x20✅',
        '-MD)\x0a>\x20©ᴘᴏ',
        'k\x20Mode*\x20:\x20',
        'uto-deleti',
        'dqFCu',
        'tent]',
        'groups',
        'MHktF',
        'reactionMe',
        'nnel✓💗\x20:*\x20',
        'mOpoG',
        'MwhOu',
        '@s.whatsap',
        'YyVtU',
        'pdate',
        'JMbmD',
        '──────────',
        'SsDtx',
        'false',
        'delete',
        'raRkL',
        '_baileys/',
        'footer',
        'laRCP',
        'CKNOs',
        'groupMetad',
        'SION_ID\x20en',
        'Read\x20Comma',
        'BcRgB',
        'ga.nz/file',
        '🚀\x20*Thenu-M',
        'ling\x20delet',
        '\x20React*\x20:\x20',
        'Public',
        ':*\x20',
        'dmWGS',
        'RSpov',
        'express',
        'sticker',
        'Kick\x20212*\x20',
        'head',
        'From:\x20',
        'p.net',
        'guvcW',
        '--\x0a\x0a*Thank',
        'SSHCM',
        'dia',
        'bled',
        '\x20To\x20Introd',
        'y\x20help\x20or\x20',
        'Message:\x20',
        'oKZJz',
        'fromURL',
        'extname',
        'imageMessa',
        'true',
        'slice',
        'photo',
        'audio/mpeg',
        'Voice*\x20:\x20*',
        'Unkown',
        'essage',
        'Wblfu',
        'lvKUm',
        'elete',
        '2452058XTEbCd',
        'gRDMF',
        'liMJU',
        'Typing*\x20:\x20',
        'add',
        'xtMessage',
        'EEvCF',
        'body',
        'headers',
        'shift',
        'ion\x20to\x20SES',
        'STATUS',
        'stringify',
        'MODE',
        'listen',
        'tening\x20on\x20',
        'eleted\x20con',
        'relayMessa',
        'TygqO',
        'ᴅ\x20ʙʏ\x20THENU',
        'to\x20',
        'fromMe',
        'BhXMl',
        'XClqv',
        'aDrAw',
        'video/mp4',
        'user',
        'IsJCa',
        '*\x0a\x0a-------',
        '2982668ebawRq',
        'psert',
        'Private',
        'Message\x20De',
        'mynDD',
        'Server\x20lis',
        'Deleted\x20me',
        'HiyYH',
        'eIXIs',
        'D\x20Connecte',
        'error',
        '153NbpLvu',
        'header',
        'medxo',
        'buffer',
        'iLUEO',
        'UpxHh',
        'Error\x20hand',
        'forEach',
        'content-ty',
        'eosaL',
        'u-MD\x20(WOLF',
        'conversati',
        'elf\x20To\x20The',
        'ng\x20message',
        'React*\x20:\x20*',
        'tLBoh',
        'THENU\x20𝘔𝘋\x20𝘉',
        'startsWith',
        'macOS',
        'zORld',
        'Plugins\x20in',
        'SSwjY',
        'AI_CHAT_BO',
        '\x20🌝💗*\x0a\x0a*🖇️Jo',
        'path',
        '\x0a*╰───────',
        'imgur.com/',
        'quotedMess',
        '───◈*\x0a*│🔹\x20',
        '*\x0a○\x20*Owner',
        'SESSION_ID',
        'video',
        './command',
        'statusCode',
        'silent',
        'ssage',
        'IqAQO',
        '.update',
        'KjJgA',
        '\x20(@',
        'log',
        'njoyable\x20a',
        '.js',
        'tureUrl',
        'n\x27t\x20hesita',
        'perience\x20e',
        'contextInf',
        'private',
        'gif',
        'env',
        'messages.d',
        'Iujlv',
        '*\x0a\x0a*We\x27re\x20',
        'te\x20to\x20ask.',
        'in\x20My\x20What',
        'joy\x20your\x20t',
        'ed\x20message',
        'function',
        'v\x20!!',
        'nijko',
        'YtUgX',
        'ydQyn',
        'nd\x20seamles',
        'kEyVe',
        'iuYNX',
        'onIgE',
        'henux-AI',
        '\x20your\x20sess',
        '\x20Group\x0a\x0a*©',
        'UqacA',
        'sendMessag',
        'Server',
        'download',
        'me*\x20:\x20*',
        'AUTO_READ_',
        'get',
        'AUTO_REACT',
        'sapp\x20✅',
        './lib/mong',
        'Unable\x20to\x20',
        'remoteJid',
        'messages.u',
        'lETOX',
        'WmMwc',
        '58373LxoBfq',
        'sendFileUr',
        'xwrPs',
        's!\x20😊*\x0a\x0a>\x20©',
        'Goodbye\x20@',
        ',\x20Welcome\x20',
        'status@bro',
        '|A\x0a\x0a*🖇️Subs',
        'eGiqK',
        'pushName',
        'Message:\x20[',
        'FSFyX',
        '𝘖𝘛\x20connect',
        'WELCOME',
        'key',
        'composing',
        'USmGk',
        'action',
        '/auth_info',
        'eRopj'
    ];
    _0x39ab = function () {
        return _0x4fb964;
    };
    return _0x39ab();
}
