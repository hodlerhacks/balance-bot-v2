function _0x3955(_0x3236f1,_0x262a90){const _0x3e16ac=_0x51fc();return _0x3955=function(_0x11c7c5,_0x4c6e2d){_0x11c7c5=_0x11c7c5-0x78;let _0x51fcae=_0x3e16ac[_0x11c7c5];return _0x51fcae;},_0x3955(_0x3236f1,_0x262a90);}const _0x5b692d=_0x3955;(function(_0x338acd,_0x3886a7){const _0x3485ee=_0x3955,_0x4ea969=_0x338acd();while(!![]){try{const _0x284c9e=-parseInt(_0x3485ee(0x7d))/0x1*(-parseInt(_0x3485ee(0x8c))/0x2)+-parseInt(_0x3485ee(0x90))/0x3*(parseInt(_0x3485ee(0x91))/0x4)+-parseInt(_0x3485ee(0x7f))/0x5+parseInt(_0x3485ee(0x82))/0x6*(parseInt(_0x3485ee(0x83))/0x7)+parseInt(_0x3485ee(0x7a))/0x8+-parseInt(_0x3485ee(0x80))/0x9*(-parseInt(_0x3485ee(0x7c))/0xa)+-parseInt(_0x3485ee(0x8d))/0xb;if(_0x284c9e===_0x3886a7)break;else _0x4ea969['push'](_0x4ea969['shift']());}catch(_0x363f71){_0x4ea969['push'](_0x4ea969['shift']());}}}(_0x51fc,0xa53fc));const _0x4c6e2d=function(){let _0x3542f4=!![];return function(_0x547ec8,_0x58a9e1){const _0x147bbd=_0x3542f4?function(){if(_0x58a9e1){const _0x2fda67=_0x58a9e1['apply'](_0x547ec8,arguments);return _0x58a9e1=null,_0x2fda67;}}:function(){};return _0x3542f4=![],_0x147bbd;};}(),_0x11c7c5=_0x4c6e2d(this,function(){const _0x45a422=_0x3955;return _0x11c7c5[_0x45a422(0x81)]()['search'](_0x45a422(0x8f))[_0x45a422(0x81)]()[_0x45a422(0x78)](_0x11c7c5)[_0x45a422(0x85)](_0x45a422(0x8f));});_0x11c7c5();function _0x51fc(){const _0x57bb4b=['push','4372872AfOGKU','exports','20VAiWYq','258379pefcct','find','3812745zNxEqt','2155185lNGerV','toString','4458CspkYL','2373sfdHVF','forEach','search','server','filter','connected','findIndex','uuid','disconnected','10nUHoXZ','12103740fhdkGb','bot','(((.+)+)+)+$','9zMNCsg','39416uVSwjq','constructor'];_0x51fc=function(){return _0x57bb4b;};return _0x51fc();}const clients=[],addClient=(_0x176a44,_0x234729,_0x4e1c40)=>{const _0x5aa04e=_0x3955;let _0x3c3fa5;const _0x31fb1d=existsClient(_0x234729,_0x4e1c40);return _0x31fb1d?_0x3c3fa5=updateClient(_0x31fb1d['id'],{'id':_0x176a44,'server':_0x5aa04e(0x88)}):(_0x3c3fa5={'id':_0x176a44,'uuid':_0x234729,'bot':_0x4e1c40,'server':'starting'},clients[_0x5aa04e(0x79)](_0x3c3fa5)),_0x3c3fa5;},updateClient=(_0x18c7e0,_0x21adb4)=>{const _0x42a0e8=_0x3955;let _0x518c9f=clients[_0x42a0e8(0x89)](_0x2e55bc=>_0x2e55bc['id']==_0x18c7e0);return _0x518c9f!=-0x1&&(clients[_0x518c9f]={...clients[_0x518c9f],..._0x21adb4}),clients[_0x518c9f];},existsClient=(_0x40b39d,_0x355fdc)=>{const _0x538983=_0x3955;let _0x3507ed=![];return clients[_0x538983(0x84)](_0x3f12bc=>{const _0x11276b=_0x538983;_0x3f12bc[_0x11276b(0x8a)]===_0x40b39d&&_0x3f12bc['bot']===_0x355fdc&&(_0x3507ed=_0x3f12bc);}),_0x3507ed;},removeClient=_0x349fd4=>{const _0x336093=_0x3955;let _0x3b98bd=clients[_0x336093(0x7e)](_0x278e16=>_0x278e16['id']===_0x349fd4);if(_0x3b98bd)return _0x3b98bd[_0x336093(0x86)]=_0x336093(0x8b),clients;},getClient=_0x3b5674=>{const _0x5af785=_0x3955;return clients[_0x5af785(0x7e)](_0x16e7f0=>_0x16e7f0['id']===_0x3b5674&&_0x16e7f0[_0x5af785(0x86)]!==_0x5af785(0x8b));},getAllClients=(_0x3a3a94=![])=>{const _0x35cd63=_0x3955;if(_0x3a3a94)return clients;else return clients[_0x35cd63(0x87)](_0x51099d=>_0x51099d['server']!==_0x35cd63(0x8b));},getClientsWithBotID=_0x23f863=>{const _0x402f90=_0x3955;return clients[_0x402f90(0x87)](_0x462240=>_0x462240[_0x402f90(0x8e)]===_0x23f863&&_0x462240[_0x402f90(0x86)]!==_0x402f90(0x8b));},getClientsWithUuid=_0x55db21=>{const _0x289f89=_0x3955;return clients[_0x289f89(0x87)](_0x3e8ea1=>_0x3e8ea1[_0x289f89(0x8a)]===_0x55db21&&_0x3e8ea1[_0x289f89(0x86)]!==_0x289f89(0x8b));};module[_0x5b692d(0x7b)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};