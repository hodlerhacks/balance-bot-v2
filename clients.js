const _0x40e7f2=_0x2ca1;(function(_0x3fd201,_0x394956){const _0x1472e6=_0x2ca1,_0x1288fb=_0x3fd201();while(!![]){try{const _0x2301e3=-parseInt(_0x1472e6(0x1c1))/0x1*(-parseInt(_0x1472e6(0x1b6))/0x2)+-parseInt(_0x1472e6(0x1c3))/0x3*(-parseInt(_0x1472e6(0x1b8))/0x4)+parseInt(_0x1472e6(0x1b9))/0x5+parseInt(_0x1472e6(0x1ba))/0x6*(-parseInt(_0x1472e6(0x1c6))/0x7)+-parseInt(_0x1472e6(0x1c5))/0x8*(parseInt(_0x1472e6(0x1bc))/0x9)+parseInt(_0x1472e6(0x1c2))/0xa*(-parseInt(_0x1472e6(0x1bd))/0xb)+-parseInt(_0x1472e6(0x1bf))/0xc;if(_0x2301e3===_0x394956)break;else _0x1288fb['push'](_0x1288fb['shift']());}catch(_0x378416){_0x1288fb['push'](_0x1288fb['shift']());}}}(_0x471b,0x4b832));const _0x5c123f=function(){let _0x49cdd9=!![];return function(_0x3ae817,_0x17f4c4){const _0x2889ee=_0x49cdd9?function(){const _0x558fb6=_0x2ca1;if(_0x17f4c4){const _0x30ca4e=_0x17f4c4[_0x558fb6(0x1ca)](_0x3ae817,arguments);return _0x17f4c4=null,_0x30ca4e;}}:function(){};return _0x49cdd9=![],_0x2889ee;};}(),_0x248fc8=_0x5c123f(this,function(){const _0x47fb96=_0x2ca1;return _0x248fc8[_0x47fb96(0x1be)]()[_0x47fb96(0x1c7)]('(((.+)+)+)+$')[_0x47fb96(0x1be)]()[_0x47fb96(0x1c9)](_0x248fc8)[_0x47fb96(0x1c7)]('(((.+)+)+)+$');});_0x248fc8();function _0x471b(){const _0x433da2=['push','69239intxUb','958570OGwpuo','1592544QxobYA','find','1016552knAmPJ','42eRsOOC','search','uuid','constructor','apply','findIndex','exports','server','disconnected','14ENvUOO','filter','4wzOuaA','1972005iwRUtm','246612vXFQXl','starting','9YyGbBV','44THSkDl','toString','4122180sSfCkw'];_0x471b=function(){return _0x433da2;};return _0x471b();}function _0x2ca1(_0x1f0155,_0x39c32e){const _0x3cdda1=_0x471b();return _0x2ca1=function(_0x248fc8,_0x5c123f){_0x248fc8=_0x248fc8-0x1b6;let _0x471bf9=_0x3cdda1[_0x248fc8];return _0x471bf9;},_0x2ca1(_0x1f0155,_0x39c32e);}const clients=[],addClient=(_0x1ebc76,_0x12e4e7,_0x351ac3)=>{const _0x48d8cb=_0x2ca1;let _0x16952f;const _0x585f74=existsClient(_0x12e4e7,_0x351ac3);return _0x585f74?_0x16952f=updateClient(_0x585f74['id'],{'id':_0x1ebc76,'server':'connected'}):(_0x16952f={'id':_0x1ebc76,'uuid':_0x12e4e7,'bot':_0x351ac3,'server':_0x48d8cb(0x1bb)},clients[_0x48d8cb(0x1c0)](_0x16952f)),_0x16952f;},updateClient=(_0x503161,_0x38995e)=>{const _0x59d4ba=_0x2ca1;let _0x1442d6=clients[_0x59d4ba(0x1cb)](_0x5c8e7a=>_0x5c8e7a['id']==_0x503161);return _0x1442d6!=-0x1&&(clients[_0x1442d6]={...clients[_0x1442d6],..._0x38995e}),clients[_0x1442d6];},existsClient=(_0xb8f74b,_0x5994b6)=>{let _0x155771=![];return clients['forEach'](_0x45e20c=>{const _0x4bef16=_0x2ca1;_0x45e20c[_0x4bef16(0x1c8)]===_0xb8f74b&&_0x45e20c['bot']===_0x5994b6&&(_0x155771=_0x45e20c);}),_0x155771;},removeClient=_0x55788e=>{const _0xb06472=_0x2ca1;let _0x498ab2=clients['find'](_0xbb19fa=>_0xbb19fa['id']===_0x55788e);if(_0x498ab2)return _0x498ab2[_0xb06472(0x1cd)]=_0xb06472(0x1ce),clients;},getClient=_0xac2e63=>{const _0xbbf8a9=_0x2ca1;return clients[_0xbbf8a9(0x1c4)](_0x100aaa=>_0x100aaa['id']===_0xac2e63&&_0x100aaa['server']!==_0xbbf8a9(0x1ce));},getAllClients=(_0xcd290a=![])=>{const _0xe93f79=_0x2ca1;if(_0xcd290a)return clients;else return clients[_0xe93f79(0x1b7)](_0x3406a8=>_0x3406a8[_0xe93f79(0x1cd)]!==_0xe93f79(0x1ce));},getClientsWithBotID=_0x50ec64=>{const _0x2bc172=_0x2ca1;return clients[_0x2bc172(0x1b7)](_0x30d089=>_0x30d089['bot']===_0x50ec64&&_0x30d089[_0x2bc172(0x1cd)]!==_0x2bc172(0x1ce));},getClientsWithUuid=_0x4c2a68=>{const _0x5968cb=_0x2ca1;return clients['filter'](_0x5eb271=>_0x5eb271[_0x5968cb(0x1c8)]===_0x4c2a68&&_0x5eb271[_0x5968cb(0x1cd)]!==_0x5968cb(0x1ce));};module[_0x40e7f2(0x1cc)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};