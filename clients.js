const _0x3ae274=_0x464e;function _0x464e(_0x23f4ae,_0x3318ed){const _0xe34b91=_0x1c37();return _0x464e=function(_0x2cca72,_0x1593ac){_0x2cca72=_0x2cca72-0xf1;let _0x1c37f5=_0xe34b91[_0x2cca72];return _0x1c37f5;},_0x464e(_0x23f4ae,_0x3318ed);}(function(_0x1d81e4,_0x20a989){const _0x4eadfb=_0x464e,_0x588016=_0x1d81e4();while(!![]){try{const _0x537077=-parseInt(_0x4eadfb(0xfc))/0x1+-parseInt(_0x4eadfb(0xf5))/0x2*(parseInt(_0x4eadfb(0xf8))/0x3)+-parseInt(_0x4eadfb(0xfe))/0x4*(-parseInt(_0x4eadfb(0x108))/0x5)+-parseInt(_0x4eadfb(0x101))/0x6*(-parseInt(_0x4eadfb(0x104))/0x7)+-parseInt(_0x4eadfb(0x10b))/0x8+parseInt(_0x4eadfb(0x107))/0x9*(-parseInt(_0x4eadfb(0xfa))/0xa)+parseInt(_0x4eadfb(0xf7))/0xb;if(_0x537077===_0x20a989)break;else _0x588016['push'](_0x588016['shift']());}catch(_0x7dd282){_0x588016['push'](_0x588016['shift']());}}}(_0x1c37,0x98b90));function _0x1c37(){const _0xabccb4=['apply','search','6qhHSND','filter','forEach','5687521neDbXc','findIndex','server','9vVLpYF','2191420hCTzpD','(((.+)+)+)+$','exports','115496keJXez','starting','uuid','find','toString','388emLOpX','disconnected','16347518uKYxwt','17805lHBIIq','constructor','9680210uxNiRk','bot','415809jXfeMc','connected','8STnOhw'];_0x1c37=function(){return _0xabccb4;};return _0x1c37();}const _0x1593ac=function(){let _0x421373=!![];return function(_0x5b4053,_0x1a0241){const _0x3580f0=_0x421373?function(){const _0x33b2f1=_0x464e;if(_0x1a0241){const _0x37da8e=_0x1a0241[_0x33b2f1(0xff)](_0x5b4053,arguments);return _0x1a0241=null,_0x37da8e;}}:function(){};return _0x421373=![],_0x3580f0;};}(),_0x2cca72=_0x1593ac(this,function(){const _0x461533=_0x464e;return _0x2cca72[_0x461533(0xf4)]()[_0x461533(0x100)](_0x461533(0x109))[_0x461533(0xf4)]()[_0x461533(0xf9)](_0x2cca72)[_0x461533(0x100)](_0x461533(0x109));});_0x2cca72();const clients=[],addClient=(_0x38a375,_0x4a485a,_0x4614c7)=>{const _0xa901=_0x464e;let _0x3af26d;const _0x4ce4ef=existsClient(_0x4a485a,_0x4614c7);return _0x4ce4ef?_0x3af26d=updateClient(_0x4ce4ef['id'],{'id':_0x38a375,'server':_0xa901(0xfd)}):(_0x3af26d={'id':_0x38a375,'uuid':_0x4a485a,'bot':_0x4614c7,'server':_0xa901(0xf1)},clients['push'](_0x3af26d)),_0x3af26d;},updateClient=(_0x4d3c36,_0x5e8dc3)=>{const _0x127c81=_0x464e;let _0x2aa6a7=clients[_0x127c81(0x105)](_0x421bcd=>_0x421bcd['id']==_0x4d3c36);return _0x2aa6a7!=-0x1&&(clients[_0x2aa6a7]={...clients[_0x2aa6a7],..._0x5e8dc3}),clients[_0x2aa6a7];},existsClient=(_0xb4d104,_0x1fcb5e)=>{const _0x407a76=_0x464e;let _0x5890cb=![];return clients[_0x407a76(0x103)](_0x13d7d9=>{const _0x25a271=_0x407a76;_0x13d7d9[_0x25a271(0xf2)]===_0xb4d104&&_0x13d7d9[_0x25a271(0xfb)]===_0x1fcb5e&&(_0x5890cb=_0x13d7d9);}),_0x5890cb;},removeClient=_0x492a47=>{const _0x4350cc=_0x464e;let _0x54baa9=clients['find'](_0x181415=>_0x181415['id']===_0x492a47);if(_0x54baa9)return _0x54baa9[_0x4350cc(0x106)]='disconnected',clients;},getClient=_0x4102ba=>{const _0x464bfa=_0x464e;return clients[_0x464bfa(0xf3)](_0x5dfd3b=>_0x5dfd3b['id']===_0x4102ba&&_0x5dfd3b[_0x464bfa(0x106)]!==_0x464bfa(0xf6));},getAllClients=(_0x863dd9=![])=>{const _0x22cd82=_0x464e;if(_0x863dd9)return clients;else return clients['filter'](_0x3285a9=>_0x3285a9[_0x22cd82(0x106)]!==_0x22cd82(0xf6));},getClientsWithBotID=_0x3f1fd8=>{const _0x49d086=_0x464e;return clients['filter'](_0x1160fb=>_0x1160fb[_0x49d086(0xfb)]===_0x3f1fd8&&_0x1160fb[_0x49d086(0x106)]!==_0x49d086(0xf6));},getClientsWithUuid=_0x514c82=>{const _0x1e6a0c=_0x464e;return clients[_0x1e6a0c(0x102)](_0x5d4a95=>_0x5d4a95[_0x1e6a0c(0xf2)]===_0x514c82&&_0x5d4a95[_0x1e6a0c(0x106)]!==_0x1e6a0c(0xf6));};module[_0x3ae274(0x10a)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};