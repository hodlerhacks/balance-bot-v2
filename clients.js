const _0x57534a=_0x230d;function _0x230d(_0x597468,_0xc90446){const _0x52a87c=_0x238b();return _0x230d=function(_0x2aed4f,_0x2d0966){_0x2aed4f=_0x2aed4f-0x1cf;let _0x238ba8=_0x52a87c[_0x2aed4f];return _0x238ba8;},_0x230d(_0x597468,_0xc90446);}(function(_0x51d3e7,_0xe9fbf4){const _0x1c29f6=_0x230d,_0x546f12=_0x51d3e7();while(!![]){try{const _0xaad01b=parseInt(_0x1c29f6(0x1d2))/0x1+-parseInt(_0x1c29f6(0x1d1))/0x2+-parseInt(_0x1c29f6(0x1e4))/0x3*(-parseInt(_0x1c29f6(0x1dc))/0x4)+parseInt(_0x1c29f6(0x1d8))/0x5+parseInt(_0x1c29f6(0x1e3))/0x6+parseInt(_0x1c29f6(0x1d5))/0x7+-parseInt(_0x1c29f6(0x1d4))/0x8;if(_0xaad01b===_0xe9fbf4)break;else _0x546f12['push'](_0x546f12['shift']());}catch(_0x175ee8){_0x546f12['push'](_0x546f12['shift']());}}}(_0x238b,0xf0772));const _0x2d0966=function(){let _0x471d11=!![];return function(_0x59e8d9,_0x117aed){const _0x527ea1=_0x471d11?function(){const _0x32c06d=_0x230d;if(_0x117aed){const _0x5a9919=_0x117aed[_0x32c06d(0x1da)](_0x59e8d9,arguments);return _0x117aed=null,_0x5a9919;}}:function(){};return _0x471d11=![],_0x527ea1;};}(),_0x2aed4f=_0x2d0966(this,function(){const _0xb9edb3=_0x230d;return _0x2aed4f[_0xb9edb3(0x1d7)]()[_0xb9edb3(0x1dd)]('(((.+)+)+)+$')[_0xb9edb3(0x1d7)]()[_0xb9edb3(0x1d9)](_0x2aed4f)[_0xb9edb3(0x1dd)](_0xb9edb3(0x1e0));});_0x2aed4f();const clients=[],addClient=(_0x346fc9,_0x29866e,_0x292c24)=>{const _0x43e1b9=_0x230d;let _0x24f2c0;const _0x2fd49b=existsClient(_0x29866e,_0x292c24);return _0x2fd49b?_0x24f2c0=updateClient(_0x2fd49b['id'],{'id':_0x346fc9,'server':_0x43e1b9(0x1d3)}):(_0x24f2c0={'id':_0x346fc9,'uuid':_0x29866e,'bot':_0x292c24,'server':'starting'},clients[_0x43e1b9(0x1e5)](_0x24f2c0)),_0x24f2c0;},updateClient=(_0x42e5d9,_0x263434)=>{const _0x583d0b=_0x230d;let _0x480455=clients[_0x583d0b(0x1e1)](_0x503f8f=>_0x503f8f['id']==_0x42e5d9);return _0x480455!=-0x1&&(clients[_0x480455]={...clients[_0x480455],..._0x263434}),clients[_0x480455];},existsClient=(_0x48c042,_0xe91620)=>{const _0xe544a7=_0x230d;let _0x340280=![];return clients[_0xe544a7(0x1de)](_0x1c2d5b=>{const _0x39f536=_0xe544a7;_0x1c2d5b['uuid']===_0x48c042&&_0x1c2d5b[_0x39f536(0x1d0)]===_0xe91620&&(_0x340280=_0x1c2d5b);}),_0x340280;},removeClient=_0x453137=>{const _0x56acca=_0x230d;let _0x41087e=clients[_0x56acca(0x1db)](_0x3dc50a=>_0x3dc50a['id']===_0x453137);if(_0x41087e)return _0x41087e['server']=_0x56acca(0x1e2),clients;},getClient=_0x2061fa=>{const _0x559ba1=_0x230d;return clients[_0x559ba1(0x1db)](_0x4acb4f=>_0x4acb4f['id']===_0x2061fa&&_0x4acb4f[_0x559ba1(0x1df)]!=='disconnected');},getAllClients=(_0x595a69=![])=>{const _0x3ee87f=_0x230d;if(_0x595a69)return clients;else return clients[_0x3ee87f(0x1d6)](_0x2e4b09=>_0x2e4b09[_0x3ee87f(0x1df)]!=='disconnected');},getClientsWithBotID=_0x45fde4=>{const _0x5575bb=_0x230d;return clients[_0x5575bb(0x1d6)](_0x45df0c=>_0x45df0c[_0x5575bb(0x1d0)]===_0x45fde4&&_0x45df0c[_0x5575bb(0x1df)]!==_0x5575bb(0x1e2));},getClientsWithUuid=_0x21fed0=>{const _0x3ba312=_0x230d;return clients[_0x3ba312(0x1d6)](_0xafc1c5=>_0xafc1c5['uuid']===_0x21fed0&&_0xafc1c5[_0x3ba312(0x1df)]!=='disconnected');};function _0x238b(){const _0x233932=['find','117292HHFwgE','search','forEach','server','(((.+)+)+)+$','findIndex','disconnected','8563404LtnABj','147AdKRvW','push','exports','bot','2365872GhOenf','263957MRkktY','connected','21344664TnyTXr','3487351xLEHZC','filter','toString','6048770juGkuC','constructor','apply'];_0x238b=function(){return _0x233932;};return _0x238b();}module[_0x57534a(0x1cf)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};