const _0x328b87=_0x2b0e;(function(_0x428dee,_0x5e5921){const _0x481b27=_0x2b0e,_0x149bec=_0x428dee();while(!![]){try{const _0x36c903=parseInt(_0x481b27(0x1f4))/0x1*(-parseInt(_0x481b27(0x1fa))/0x2)+-parseInt(_0x481b27(0x1f6))/0x3*(parseInt(_0x481b27(0x1f7))/0x4)+parseInt(_0x481b27(0x1ee))/0x5+parseInt(_0x481b27(0x203))/0x6*(parseInt(_0x481b27(0x1ed))/0x7)+-parseInt(_0x481b27(0x206))/0x8*(-parseInt(_0x481b27(0x1f9))/0x9)+parseInt(_0x481b27(0x1ef))/0xa*(parseInt(_0x481b27(0x207))/0xb)+-parseInt(_0x481b27(0x208))/0xc;if(_0x36c903===_0x5e5921)break;else _0x149bec['push'](_0x149bec['shift']());}catch(_0x45961c){_0x149bec['push'](_0x149bec['shift']());}}}(_0x5c57,0xcbac3));function _0x2b0e(_0x14adc6,_0xadb59e){const _0xfe7388=_0x5c57();return _0x2b0e=function(_0x3e9bc0,_0x510355){_0x3e9bc0=_0x3e9bc0-0x1ed;let _0x5c57ca=_0xfe7388[_0x3e9bc0];return _0x5c57ca;},_0x2b0e(_0x14adc6,_0xadb59e);}const _0x510355=function(){let _0x56fe21=!![];return function(_0x31ebf1,_0x377f7d){const _0x4ea454=_0x56fe21?function(){const _0x5dc842=_0x2b0e;if(_0x377f7d){const _0xdf52de=_0x377f7d[_0x5dc842(0x205)](_0x31ebf1,arguments);return _0x377f7d=null,_0xdf52de;}}:function(){};return _0x56fe21=![],_0x4ea454;};}(),_0x3e9bc0=_0x510355(this,function(){const _0x45316e=_0x2b0e;return _0x3e9bc0['toString']()[_0x45316e(0x200)](_0x45316e(0x201))[_0x45316e(0x204)]()[_0x45316e(0x1f8)](_0x3e9bc0)[_0x45316e(0x200)](_0x45316e(0x201));});_0x3e9bc0();function _0x5c57(){const _0x117bdd=['exports','disconnected','connected','search','(((.+)+)+)+$','forEach','6lxGpoa','toString','apply','16frqlKQ','10351DSfevF','3894240FnqVpY','5960514eOaEBC','5533505kBlQLQ','7550AHiTSB','starting','find','bot','server','38mVQhCt','push','57093EkudpE','148nwTLWX','constructor','3443103AhzvRq','82678zBgsEP','uuid','filter'];_0x5c57=function(){return _0x117bdd;};return _0x5c57();}const clients=[],addClient=(_0x2de48d,_0x42f123,_0x2afc9a)=>{const _0x1de455=_0x2b0e;let _0x2757dc;const _0x338775=existsClient(_0x42f123,_0x2afc9a);return _0x338775?_0x2757dc=updateClient(_0x338775['id'],{'id':_0x2de48d,'server':_0x1de455(0x1ff)}):(_0x2757dc={'id':_0x2de48d,'uuid':_0x42f123,'bot':_0x2afc9a,'server':_0x1de455(0x1f0)},clients[_0x1de455(0x1f5)](_0x2757dc)),_0x2757dc;},updateClient=(_0x412b79,_0x375e61)=>{let _0x2cdb3d=clients['findIndex'](_0x20df4d=>_0x20df4d['id']==_0x412b79);return _0x2cdb3d!=-0x1&&(clients[_0x2cdb3d]={...clients[_0x2cdb3d],..._0x375e61}),clients[_0x2cdb3d];},existsClient=(_0x30f575,_0x258392)=>{const _0x4c870b=_0x2b0e;let _0x24e9f2=![];return clients[_0x4c870b(0x202)](_0x45f486=>{const _0xbf8c0d=_0x4c870b;_0x45f486[_0xbf8c0d(0x1fb)]===_0x30f575&&_0x45f486[_0xbf8c0d(0x1f2)]===_0x258392&&(_0x24e9f2=_0x45f486);}),_0x24e9f2;},removeClient=_0x11c97f=>{const _0x3c7274=_0x2b0e;let _0x18cc49=clients[_0x3c7274(0x1f1)](_0x11b6bc=>_0x11b6bc['id']===_0x11c97f);if(_0x18cc49)return _0x18cc49[_0x3c7274(0x1f3)]=_0x3c7274(0x1fe),clients;},getClient=_0x3b2a2d=>{const _0xe4d805=_0x2b0e;return clients[_0xe4d805(0x1f1)](_0x59e917=>_0x59e917['id']===_0x3b2a2d&&_0x59e917[_0xe4d805(0x1f3)]!=='disconnected');},getAllClients=(_0x4362b1=![])=>{const _0x2556c1=_0x2b0e;if(_0x4362b1)return clients;else return clients[_0x2556c1(0x1fc)](_0x150c02=>_0x150c02[_0x2556c1(0x1f3)]!==_0x2556c1(0x1fe));},getClientsWithBotID=_0x38c5a1=>{const _0x1f0c3f=_0x2b0e;return clients[_0x1f0c3f(0x1fc)](_0x1a5b73=>_0x1a5b73['bot']===_0x38c5a1&&_0x1a5b73[_0x1f0c3f(0x1f3)]!==_0x1f0c3f(0x1fe));},getClientsWithUuid=_0x37fa7c=>{const _0x2dc0c7=_0x2b0e;return clients[_0x2dc0c7(0x1fc)](_0x384b46=>_0x384b46[_0x2dc0c7(0x1fb)]===_0x37fa7c&&_0x384b46['server']!==_0x2dc0c7(0x1fe));};module[_0x328b87(0x1fd)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};