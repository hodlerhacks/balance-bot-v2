function _0x54c2(_0x17c1d1,_0x2fc9d2){const _0x9c51fe=_0x1a90();return _0x54c2=function(_0x113e9a,_0x36de98){_0x113e9a=_0x113e9a-0xec;let _0x1a90d8=_0x9c51fe[_0x113e9a];return _0x1a90d8;},_0x54c2(_0x17c1d1,_0x2fc9d2);}const _0x4fe6f7=_0x54c2;(function(_0x37a6fd,_0x94b5b){const _0x2aa245=_0x54c2,_0x4ee863=_0x37a6fd();while(!![]){try{const _0x5b3ff2=parseInt(_0x2aa245(0xfb))/0x1*(parseInt(_0x2aa245(0x101))/0x2)+parseInt(_0x2aa245(0x103))/0x3*(parseInt(_0x2aa245(0xf4))/0x4)+-parseInt(_0x2aa245(0xf3))/0x5*(parseInt(_0x2aa245(0xfe))/0x6)+-parseInt(_0x2aa245(0x104))/0x7+-parseInt(_0x2aa245(0xf5))/0x8*(parseInt(_0x2aa245(0xfd))/0x9)+parseInt(_0x2aa245(0x100))/0xa+-parseInt(_0x2aa245(0xed))/0xb*(-parseInt(_0x2aa245(0xf9))/0xc);if(_0x5b3ff2===_0x94b5b)break;else _0x4ee863['push'](_0x4ee863['shift']());}catch(_0x44e795){_0x4ee863['push'](_0x4ee863['shift']());}}}(_0x1a90,0x30a43));const _0x36de98=function(){let _0xd38fe3=!![];return function(_0x24c50a,_0x475a6c){const _0x12b7b7=_0xd38fe3?function(){const _0x4c25bc=_0x54c2;if(_0x475a6c){const _0xa3dee2=_0x475a6c[_0x4c25bc(0xf7)](_0x24c50a,arguments);return _0x475a6c=null,_0xa3dee2;}}:function(){};return _0xd38fe3=![],_0x12b7b7;};}(),_0x113e9a=_0x36de98(this,function(){const _0x242557=_0x54c2;return _0x113e9a[_0x242557(0xf2)]()[_0x242557(0xec)](_0x242557(0x105))[_0x242557(0xf2)]()[_0x242557(0xf0)](_0x113e9a)['search']('(((.+)+)+)+$');});_0x113e9a();const clients=[],addClient=(_0x4c3d65,_0x400bd7,_0x1b4def)=>{const _0x44008a=_0x54c2;let _0x26cbca;const _0x544fd7=existsClient(_0x400bd7,_0x1b4def);return _0x544fd7?_0x26cbca=updateClient(_0x544fd7['id'],{'id':_0x4c3d65,'server':'connected'}):(_0x26cbca={'id':_0x4c3d65,'uuid':_0x400bd7,'bot':_0x1b4def,'server':'starting'},clients[_0x44008a(0xf1)](_0x26cbca)),_0x26cbca;},updateClient=(_0x200e0c,_0x3c0d89)=>{const _0x29c24b=_0x54c2;let _0x580e1d=clients[_0x29c24b(0xff)](_0x260ad6=>_0x260ad6['id']==_0x200e0c);return _0x580e1d!=-0x1&&(clients[_0x580e1d]={...clients[_0x580e1d],..._0x3c0d89}),clients[_0x580e1d];},existsClient=(_0x5263db,_0x682f34)=>{let _0x4ce4eb=![];return clients['forEach'](_0x376b4d=>{const _0x365612=_0x54c2;_0x376b4d['uuid']===_0x5263db&&_0x376b4d[_0x365612(0xef)]===_0x682f34&&(_0x4ce4eb=_0x376b4d);}),_0x4ce4eb;},removeClient=_0x3b30f7=>{const _0x4cdd0c=_0x54c2;let _0x2409dd=clients[_0x4cdd0c(0xfc)](_0x4e1475=>_0x4e1475['id']===_0x3b30f7);if(_0x2409dd)return _0x2409dd[_0x4cdd0c(0xfa)]=_0x4cdd0c(0xf6),clients;},getClient=_0x5b8694=>{const _0x5664c1=_0x54c2;return clients[_0x5664c1(0xfc)](_0x39018d=>_0x39018d['id']===_0x5b8694&&_0x39018d['server']!==_0x5664c1(0xf6));},getAllClients=(_0x56552c=![])=>{const _0x471c09=_0x54c2;if(_0x56552c)return clients;else return clients['filter'](_0x106392=>_0x106392[_0x471c09(0xfa)]!==_0x471c09(0xf6));},getClientsWithBotID=_0x210c72=>{const _0x2f2283=_0x54c2;return clients[_0x2f2283(0xee)](_0x4f0bf5=>_0x4f0bf5[_0x2f2283(0xef)]===_0x210c72&&_0x4f0bf5['server']!==_0x2f2283(0xf6));},getClientsWithUuid=_0x4a5057=>{const _0x4ed7ce=_0x54c2;return clients['filter'](_0x420eb7=>_0x420eb7[_0x4ed7ce(0xf8)]===_0x4a5057&&_0x420eb7[_0x4ed7ce(0xfa)]!=='disconnected');};module[_0x4fe6f7(0x102)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};function _0x1a90(){const _0x958fc5=['348JkMOby','server','139372nfBEmm','find','468nBLLQZ','6PrulPp','findIndex','275340EAYjKG','2aqZogo','exports','3MNNmln','1916915hRUUfr','(((.+)+)+)+$','search','185427pltHNC','filter','bot','constructor','push','toString','1683130KrWNLS','1007036iSoLDE','15048uvyhHZ','disconnected','apply','uuid'];_0x1a90=function(){return _0x958fc5;};return _0x1a90();}