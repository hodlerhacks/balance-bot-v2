function _0x2405(_0x3967d8,_0x3ea93f){const _0x36f25f=_0xc3d5();return _0x2405=function(_0x1f1c18,_0x7944bf){_0x1f1c18=_0x1f1c18-0x19d;let _0xc3d50a=_0x36f25f[_0x1f1c18];return _0xc3d50a;},_0x2405(_0x3967d8,_0x3ea93f);}(function(_0x5e351c,_0x569653){const _0x47d32d=_0x2405,_0x36a33e=_0x5e351c();while(!![]){try{const _0x3389c5=parseInt(_0x47d32d(0x19d))/0x1*(-parseInt(_0x47d32d(0x1a8))/0x2)+-parseInt(_0x47d32d(0x1ac))/0x3*(-parseInt(_0x47d32d(0x1a5))/0x4)+parseInt(_0x47d32d(0x1ae))/0x5+parseInt(_0x47d32d(0x1a3))/0x6*(parseInt(_0x47d32d(0x1ab))/0x7)+-parseInt(_0x47d32d(0x1b5))/0x8+-parseInt(_0x47d32d(0x1b1))/0x9+-parseInt(_0x47d32d(0x1a0))/0xa*(-parseInt(_0x47d32d(0x1b0))/0xb);if(_0x3389c5===_0x569653)break;else _0x36a33e['push'](_0x36a33e['shift']());}catch(_0x15ba3d){_0x36a33e['push'](_0x36a33e['shift']());}}}(_0xc3d5,0xe0935));const _0x7944bf=function(){let _0x1ef905=!![];return function(_0x2654bf,_0x3f5dd1){const _0x23d2f8=_0x1ef905?function(){const _0x57726a=_0x2405;if(_0x3f5dd1){const _0x5a6983=_0x3f5dd1[_0x57726a(0x1a1)](_0x2654bf,arguments);return _0x3f5dd1=null,_0x5a6983;}}:function(){};return _0x1ef905=![],_0x23d2f8;};}(),_0x1f1c18=_0x7944bf(this,function(){const _0x5ca7da=_0x2405;return _0x1f1c18[_0x5ca7da(0x1aa)]()[_0x5ca7da(0x1a4)](_0x5ca7da(0x1b4))[_0x5ca7da(0x1aa)]()[_0x5ca7da(0x19f)](_0x1f1c18)[_0x5ca7da(0x1a4)](_0x5ca7da(0x1b4));});function _0xc3d5(){const _0x59b31c=['constructor','10DSGUWE','apply','findIndex','180mdGEns','search','1253012iiHqnP','connected','find','4iWRMjo','filter','toString','385021SQDBct','3Tzuubw','uuid','2723295vmQFSk','push','15633783krxAcR','10737666dBlolq','server','bot','(((.+)+)+)+$','12603664RlyLlt','120431PyLkxF','disconnected'];_0xc3d5=function(){return _0x59b31c;};return _0xc3d5();}_0x1f1c18();const clients=[],addClient=(_0x579a8a,_0x134bd6,_0x35d9fa)=>{const _0x24e1d4=_0x2405;let _0x138244;const _0x5514f5=existsClient(_0x134bd6,_0x35d9fa);return _0x5514f5?_0x138244=updateClient(_0x5514f5['id'],{'id':_0x579a8a,'server':_0x24e1d4(0x1a6)}):(_0x138244={'id':_0x579a8a,'uuid':_0x134bd6,'bot':_0x35d9fa,'server':'starting'},clients[_0x24e1d4(0x1af)](_0x138244)),_0x138244;},updateClient=(_0x102b1e,_0x372b67)=>{const _0x185e86=_0x2405;let _0x4555e2=clients[_0x185e86(0x1a2)](_0x16fad1=>_0x16fad1['id']==_0x102b1e);return _0x4555e2!=-0x1&&(clients[_0x4555e2]={...clients[_0x4555e2],..._0x372b67}),clients[_0x4555e2];},existsClient=(_0x14a3ff,_0x2b0d9a)=>{let _0x125cea=![];return clients['forEach'](_0x15f40a=>{const _0x536add=_0x2405;_0x15f40a[_0x536add(0x1ad)]===_0x14a3ff&&_0x15f40a[_0x536add(0x1b3)]===_0x2b0d9a&&(_0x125cea=_0x15f40a);}),_0x125cea;},removeClient=_0x188a8b=>{const _0x799a8e=_0x2405;let _0x4dd09a=clients['find'](_0xc27ed2=>_0xc27ed2['id']===_0x188a8b);if(_0x4dd09a)return _0x4dd09a[_0x799a8e(0x1b2)]=_0x799a8e(0x19e),clients;},getClient=_0x15e2d1=>{const _0xd05078=_0x2405;return clients[_0xd05078(0x1a7)](_0x3f5b79=>_0x3f5b79['id']===_0x15e2d1&&_0x3f5b79[_0xd05078(0x1b2)]!==_0xd05078(0x19e));},getAllClients=(_0x9f00ad=![])=>{const _0x3bea13=_0x2405;if(_0x9f00ad)return clients;else return clients[_0x3bea13(0x1a9)](_0x49fe90=>_0x49fe90[_0x3bea13(0x1b2)]!==_0x3bea13(0x19e));},getClientsWithBotID=_0x4825b5=>{const _0x306893=_0x2405;return clients[_0x306893(0x1a9)](_0x558a9a=>_0x558a9a[_0x306893(0x1b3)]===_0x4825b5&&_0x558a9a[_0x306893(0x1b2)]!=='disconnected');},getClientsWithUuid=_0x10dbff=>{const _0x30eb9a=_0x2405;return clients[_0x30eb9a(0x1a9)](_0x5bc7da=>_0x5bc7da[_0x30eb9a(0x1ad)]===_0x10dbff&&_0x5bc7da[_0x30eb9a(0x1b2)]!==_0x30eb9a(0x19e));};module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};