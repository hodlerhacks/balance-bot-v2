function _0x31f0(_0xf9a8b1,_0x50d1b2){const _0x69fc22=_0x24d1();return _0x31f0=function(_0x41aed9,_0x16244f){_0x41aed9=_0x41aed9-0xe6;let _0x24d165=_0x69fc22[_0x41aed9];return _0x24d165;},_0x31f0(_0xf9a8b1,_0x50d1b2);}const _0x4f196d=_0x31f0;(function(_0x3b065e,_0x177b3a){const _0x1606c7=_0x31f0,_0x226199=_0x3b065e();while(!![]){try{const _0xef3ced=-parseInt(_0x1606c7(0xfb))/0x1*(-parseInt(_0x1606c7(0xe6))/0x2)+-parseInt(_0x1606c7(0xf4))/0x3+parseInt(_0x1606c7(0xee))/0x4*(parseInt(_0x1606c7(0xfd))/0x5)+-parseInt(_0x1606c7(0xec))/0x6+-parseInt(_0x1606c7(0xf0))/0x7*(parseInt(_0x1606c7(0xed))/0x8)+-parseInt(_0x1606c7(0xf3))/0x9+-parseInt(_0x1606c7(0xf9))/0xa*(-parseInt(_0x1606c7(0xf1))/0xb);if(_0xef3ced===_0x177b3a)break;else _0x226199['push'](_0x226199['shift']());}catch(_0x26bc34){_0x226199['push'](_0x226199['shift']());}}}(_0x24d1,0x634a0));const _0x16244f=function(){let _0x37c8f9=!![];return function(_0x244093,_0x4702f2){const _0xfc0a0=_0x37c8f9?function(){if(_0x4702f2){const _0x4835a9=_0x4702f2['apply'](_0x244093,arguments);return _0x4702f2=null,_0x4835a9;}}:function(){};return _0x37c8f9=![],_0xfc0a0;};}(),_0x41aed9=_0x16244f(this,function(){const _0x3c04b0=_0x31f0;return _0x41aed9[_0x3c04b0(0xf7)]()[_0x3c04b0(0xfc)](_0x3c04b0(0xfe))[_0x3c04b0(0xf7)]()[_0x3c04b0(0xf8)](_0x41aed9)[_0x3c04b0(0xfc)](_0x3c04b0(0xfe));});_0x41aed9();function _0x24d1(){const _0x8b2826=['forEach','22309TjGfTe','13893lhSdEu','uuid','1213551ufSmKn','949047YAzPTW','disconnected','push','toString','constructor','7600QgACDv','find','21990hcAyms','search','4435jYXLMq','(((.+)+)+)+$','findIndex','18HejWhB','exports','starting','filter','server','bot','1922700AGcLPQ','632oSsxGf','1228InkrBh'];_0x24d1=function(){return _0x8b2826;};return _0x24d1();}const clients=[],addClient=(_0x388ddb,_0x52981d,_0x17036d)=>{const _0x5b674c=_0x31f0;let _0x493ec0;const _0x5cf719=existsClient(_0x52981d,_0x17036d);return _0x5cf719?_0x493ec0=updateClient(_0x5cf719['id'],{'id':_0x388ddb,'server':'connected'}):(_0x493ec0={'id':_0x388ddb,'uuid':_0x52981d,'bot':_0x17036d,'server':_0x5b674c(0xe8)},clients[_0x5b674c(0xf6)](_0x493ec0)),_0x493ec0;},updateClient=(_0x51224f,_0x59c44c)=>{const _0x2efdaf=_0x31f0;let _0x3cb79a=clients[_0x2efdaf(0xff)](_0x4b1339=>_0x4b1339['id']==_0x51224f);return _0x3cb79a!=-0x1&&(clients[_0x3cb79a]={...clients[_0x3cb79a],..._0x59c44c}),clients[_0x3cb79a];},existsClient=(_0x514754,_0x5b0ee0)=>{const _0x40858b=_0x31f0;let _0x1d85a2=![];return clients[_0x40858b(0xef)](_0x2672d5=>{const _0x5c5b2c=_0x40858b;_0x2672d5[_0x5c5b2c(0xf2)]===_0x514754&&_0x2672d5[_0x5c5b2c(0xeb)]===_0x5b0ee0&&(_0x1d85a2=_0x2672d5);}),_0x1d85a2;},removeClient=_0x1dff08=>{const _0x2b5b7d=_0x31f0;let _0x40456d=clients[_0x2b5b7d(0xfa)](_0x2a0291=>_0x2a0291['id']===_0x1dff08);if(_0x40456d)return _0x40456d[_0x2b5b7d(0xea)]='disconnected',clients;},getClient=_0x1c2e67=>{const _0x256a10=_0x31f0;return clients['find'](_0x5df710=>_0x5df710['id']===_0x1c2e67&&_0x5df710[_0x256a10(0xea)]!=='disconnected');},getAllClients=(_0xc00abc=![])=>{const _0x29facc=_0x31f0;if(_0xc00abc)return clients;else return clients[_0x29facc(0xe9)](_0x1e056f=>_0x1e056f[_0x29facc(0xea)]!=='disconnected');},getClientsWithBotID=_0x3cd7de=>{const _0x25b002=_0x31f0;return clients[_0x25b002(0xe9)](_0x5c0134=>_0x5c0134['bot']===_0x3cd7de&&_0x5c0134[_0x25b002(0xea)]!==_0x25b002(0xf5));},getClientsWithUuid=_0x5c04e6=>{const _0xd4141=_0x31f0;return clients['filter'](_0x2eb166=>_0x2eb166[_0xd4141(0xf2)]===_0x5c04e6&&_0x2eb166[_0xd4141(0xea)]!==_0xd4141(0xf5));};module[_0x4f196d(0xe7)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};