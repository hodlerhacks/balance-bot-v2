const _0x190397=_0x394b;(function(_0x3c4b7c,_0x47f6fc){const _0x5a68c1=_0x394b,_0x18c1cf=_0x3c4b7c();while(!![]){try{const _0x4cf8d5=-parseInt(_0x5a68c1(0x14f))/0x1+-parseInt(_0x5a68c1(0x13f))/0x2*(-parseInt(_0x5a68c1(0x150))/0x3)+-parseInt(_0x5a68c1(0x13d))/0x4*(-parseInt(_0x5a68c1(0x14d))/0x5)+parseInt(_0x5a68c1(0x153))/0x6+parseInt(_0x5a68c1(0x152))/0x7+-parseInt(_0x5a68c1(0x14a))/0x8*(-parseInt(_0x5a68c1(0x13c))/0x9)+-parseInt(_0x5a68c1(0x13e))/0xa*(parseInt(_0x5a68c1(0x144))/0xb);if(_0x4cf8d5===_0x47f6fc)break;else _0x18c1cf['push'](_0x18c1cf['shift']());}catch(_0x478072){_0x18c1cf['push'](_0x18c1cf['shift']());}}}(_0x204f,0x60550));function _0x204f(){const _0x56aea8=['784792kVvZOw','3483050lmSPth','722578uioXnC','search','starting','uuid','connected','22oVdCQM','apply','filter','toString','disconnected','forEach','8PEoFdM','findIndex','server','5tiMCwm','bot','225888eZTsMU','3slyIav','exports','131901EOThVX','2904558hsXfWZ','(((.+)+)+)+$','find','push','2309859RJKEGi'];_0x204f=function(){return _0x56aea8;};return _0x204f();}const _0xc40af9=function(){let _0xb4d52a=!![];return function(_0x8cc7f8,_0x39eadd){const _0x10b6f7=_0xb4d52a?function(){const _0x4e9ccc=_0x394b;if(_0x39eadd){const _0xe8b0fa=_0x39eadd[_0x4e9ccc(0x145)](_0x8cc7f8,arguments);return _0x39eadd=null,_0xe8b0fa;}}:function(){};return _0xb4d52a=![],_0x10b6f7;};}(),_0x2579c4=_0xc40af9(this,function(){const _0x52d467=_0x394b;return _0x2579c4[_0x52d467(0x147)]()['search'](_0x52d467(0x154))['toString']()['constructor'](_0x2579c4)[_0x52d467(0x140)](_0x52d467(0x154));});_0x2579c4();const clients=[],addClient=(_0x56e837,_0x3851b6,_0x45a502)=>{const _0x553f16=_0x394b;let _0x2c16d1;const _0x548a83=existsClient(_0x3851b6,_0x45a502);return _0x548a83?_0x2c16d1=updateClient(_0x548a83['id'],{'id':_0x56e837,'server':_0x553f16(0x143)}):(_0x2c16d1={'id':_0x56e837,'uuid':_0x3851b6,'bot':_0x45a502,'server':_0x553f16(0x141)},clients[_0x553f16(0x13b)](_0x2c16d1)),_0x2c16d1;},updateClient=(_0x40b750,_0x2d048d)=>{const _0x2f767f=_0x394b;let _0x5147af=clients[_0x2f767f(0x14b)](_0x412d0b=>_0x412d0b['id']==_0x40b750);return _0x5147af!=-0x1&&(clients[_0x5147af]={...clients[_0x5147af],..._0x2d048d}),clients[_0x5147af];},existsClient=(_0x30e44e,_0x4ae840)=>{const _0xbd10ba=_0x394b;let _0x39a0f3=![];return clients[_0xbd10ba(0x149)](_0x263b43=>{const _0xc5bea6=_0xbd10ba;_0x263b43['uuid']===_0x30e44e&&_0x263b43[_0xc5bea6(0x14e)]===_0x4ae840&&(_0x39a0f3=_0x263b43);}),_0x39a0f3;},removeClient=_0x3c6e42=>{const _0x208464=_0x394b;let _0x3d840=clients['find'](_0x5d6d29=>_0x5d6d29['id']===_0x3c6e42);if(_0x3d840)return _0x3d840[_0x208464(0x14c)]=_0x208464(0x148),clients;},getClient=_0x312327=>{const _0x485411=_0x394b;return clients[_0x485411(0x13a)](_0x51ddcd=>_0x51ddcd['id']===_0x312327&&_0x51ddcd[_0x485411(0x14c)]!==_0x485411(0x148));},getAllClients=(_0x3ed225=![])=>{const _0x516f05=_0x394b;if(_0x3ed225)return clients;else return clients[_0x516f05(0x146)](_0x20964a=>_0x20964a['server']!=='disconnected');},getClientsWithBotID=_0xc3d754=>{const _0x33a109=_0x394b;return clients[_0x33a109(0x146)](_0x8b9c3=>_0x8b9c3['bot']===_0xc3d754&&_0x8b9c3[_0x33a109(0x14c)]!=='disconnected');},getClientsWithUuid=_0x3c2010=>{const _0x17653e=_0x394b;return clients[_0x17653e(0x146)](_0x4e57ce=>_0x4e57ce[_0x17653e(0x142)]===_0x3c2010&&_0x4e57ce[_0x17653e(0x14c)]!=='disconnected');};function _0x394b(_0x18db11,_0x46dc8c){const _0x1d7e01=_0x204f();return _0x394b=function(_0x2579c4,_0xc40af9){_0x2579c4=_0x2579c4-0x13a;let _0x204f7a=_0x1d7e01[_0x2579c4];return _0x204f7a;},_0x394b(_0x18db11,_0x46dc8c);}module[_0x190397(0x151)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};