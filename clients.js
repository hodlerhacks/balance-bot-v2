const _0x223292=_0x3d18;(function(_0x3bf2af,_0x4e7cfa){const _0x25cff7=_0x3d18,_0x2f526b=_0x3bf2af();while(!![]){try{const _0x5113af=parseInt(_0x25cff7(0x97))/0x1*(parseInt(_0x25cff7(0x9d))/0x2)+parseInt(_0x25cff7(0x9e))/0x3+parseInt(_0x25cff7(0xa0))/0x4*(-parseInt(_0x25cff7(0x9f))/0x5)+-parseInt(_0x25cff7(0xa3))/0x6+-parseInt(_0x25cff7(0xa6))/0x7+-parseInt(_0x25cff7(0xaa))/0x8+parseInt(_0x25cff7(0x9c))/0x9;if(_0x5113af===_0x4e7cfa)break;else _0x2f526b['push'](_0x2f526b['shift']());}catch(_0x472ee0){_0x2f526b['push'](_0x2f526b['shift']());}}}(_0x3394,0x26fb5));function _0x3d18(_0x39dc53,_0x1f5a04){const _0x1b27f8=_0x3394();return _0x3d18=function(_0x4c5912,_0x22ffab){_0x4c5912=_0x4c5912-0x97;let _0x339467=_0x1b27f8[_0x4c5912];return _0x339467;},_0x3d18(_0x39dc53,_0x1f5a04);}const _0x22ffab=function(){let _0x13c68c=!![];return function(_0x907ef9,_0x4338a8){const _0x179378=_0x13c68c?function(){if(_0x4338a8){const _0x29d7a7=_0x4338a8['apply'](_0x907ef9,arguments);return _0x4338a8=null,_0x29d7a7;}}:function(){};return _0x13c68c=![],_0x179378;};}(),_0x4c5912=_0x22ffab(this,function(){const _0x54b141=_0x3d18;return _0x4c5912[_0x54b141(0xa8)]()['search'](_0x54b141(0xa5))['toString']()['constructor'](_0x4c5912)['search'](_0x54b141(0xa5));});function _0x3394(){const _0x48967d=['2095765OotStt','bot','toString','starting','63512Aqwzcd','find','46993lEKtMW','exports','server','uuid','connected','3694617NOfgKQ','10bIoMzg','341151uTRvww','5zZPnFC','133060VwAEcx','disconnected','filter','1553562iWSxji','push','(((.+)+)+)+$'];_0x3394=function(){return _0x48967d;};return _0x3394();}_0x4c5912();const clients=[],addClient=(_0x580599,_0x1ac9bb,_0x4138db)=>{const _0x26c611=_0x3d18;let _0x4de37d;const _0x2a5f51=existsClient(_0x1ac9bb,_0x4138db);return _0x2a5f51?_0x4de37d=updateClient(_0x2a5f51['id'],{'id':_0x580599,'server':_0x26c611(0x9b)}):(_0x4de37d={'id':_0x580599,'uuid':_0x1ac9bb,'bot':_0x4138db,'server':_0x26c611(0xa9)},clients[_0x26c611(0xa4)](_0x4de37d)),_0x4de37d;},updateClient=(_0x3e81dc,_0x39e759)=>{let _0x4b48db=clients['findIndex'](_0x94d6=>_0x94d6['id']==_0x3e81dc);return _0x4b48db!=-0x1&&(clients[_0x4b48db]={...clients[_0x4b48db],..._0x39e759}),clients[_0x4b48db];},existsClient=(_0x19ede3,_0x1cf46c)=>{let _0xd94bdf=![];return clients['forEach'](_0x44dc8a=>{const _0x95f67d=_0x3d18;_0x44dc8a['uuid']===_0x19ede3&&_0x44dc8a[_0x95f67d(0xa7)]===_0x1cf46c&&(_0xd94bdf=_0x44dc8a);}),_0xd94bdf;},removeClient=_0x3106ab=>{const _0x2a642c=_0x3d18;let _0x3f1674=clients[_0x2a642c(0xab)](_0xd5745a=>_0xd5745a['id']===_0x3106ab);if(_0x3f1674)return _0x3f1674['server']=_0x2a642c(0xa1),clients;},getClient=_0x24cd44=>{const _0x985c1e=_0x3d18;return clients[_0x985c1e(0xab)](_0x11dc61=>_0x11dc61['id']===_0x24cd44&&_0x11dc61[_0x985c1e(0x99)]!==_0x985c1e(0xa1));},getAllClients=(_0x5b7f83=![])=>{const _0x573c96=_0x3d18;if(_0x5b7f83)return clients;else return clients[_0x573c96(0xa2)](_0x216898=>_0x216898[_0x573c96(0x99)]!==_0x573c96(0xa1));},getClientsWithBotID=_0x61d90f=>{const _0x258c3d=_0x3d18;return clients[_0x258c3d(0xa2)](_0x2ad091=>_0x2ad091[_0x258c3d(0xa7)]===_0x61d90f&&_0x2ad091[_0x258c3d(0x99)]!=='disconnected');},getClientsWithUuid=_0x10a347=>{const _0x241bbb=_0x3d18;return clients[_0x241bbb(0xa2)](_0xa4db53=>_0xa4db53[_0x241bbb(0x9a)]===_0x10a347&&_0xa4db53[_0x241bbb(0x99)]!==_0x241bbb(0xa1));};module[_0x223292(0x98)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};