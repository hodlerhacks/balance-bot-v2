function _0x36cb(_0x77de90,_0xf311d5){const _0xe4dbb5=_0x2653();return _0x36cb=function(_0x36c037,_0x419ae2){_0x36c037=_0x36c037-0xf4;let _0x2653dc=_0xe4dbb5[_0x36c037];return _0x2653dc;},_0x36cb(_0x77de90,_0xf311d5);}function _0x2653(){const _0x5d6cc8=['filter','2043162AykMqi','server','starting','5687994ihTMpv','1855606wtKNke','8PeqFhL','bot','1mAjzgb','5190120fofItz','(((.+)+)+)+$','5302248ubuBai','constructor','toString','uuid','disconnected','find','findIndex','search','forEach','10VWejuL','exports','apply','2340086bUszZy','15198012JcxmzR'];_0x2653=function(){return _0x5d6cc8;};return _0x2653();}const _0x3b0871=_0x36cb;(function(_0x50170d,_0x32a13b){const _0xb6b9ee=_0x36cb,_0x3d8138=_0x50170d();while(!![]){try{const _0x1d3a69=-parseInt(_0xb6b9ee(0xf8))/0x1*(-parseInt(_0xb6b9ee(0xf5))/0x2)+parseInt(_0xb6b9ee(0x10a))/0x3+parseInt(_0xb6b9ee(0xfb))/0x4+-parseInt(_0xb6b9ee(0xf9))/0x5+parseInt(_0xb6b9ee(0xf4))/0x6+-parseInt(_0xb6b9ee(0x107))/0x7*(parseInt(_0xb6b9ee(0xf6))/0x8)+parseInt(_0xb6b9ee(0x108))/0x9*(-parseInt(_0xb6b9ee(0x104))/0xa);if(_0x1d3a69===_0x32a13b)break;else _0x3d8138['push'](_0x3d8138['shift']());}catch(_0x28d0f9){_0x3d8138['push'](_0x3d8138['shift']());}}}(_0x2653,0xc88b4));const _0x419ae2=function(){let _0x19b298=!![];return function(_0x260823,_0x49f89f){const _0x37fa8c=_0x19b298?function(){const _0x12e79d=_0x36cb;if(_0x49f89f){const _0xd4ea81=_0x49f89f[_0x12e79d(0x106)](_0x260823,arguments);return _0x49f89f=null,_0xd4ea81;}}:function(){};return _0x19b298=![],_0x37fa8c;};}(),_0x36c037=_0x419ae2(this,function(){const _0x5c8a82=_0x36cb;return _0x36c037[_0x5c8a82(0xfd)]()[_0x5c8a82(0x102)]('(((.+)+)+)+$')[_0x5c8a82(0xfd)]()[_0x5c8a82(0xfc)](_0x36c037)[_0x5c8a82(0x102)](_0x5c8a82(0xfa));});_0x36c037();const clients=[],addClient=(_0x1254e5,_0x4681c6,_0x24aaf6)=>{const _0x2ff2ca=_0x36cb;let _0x7ca00c;const _0x3d37d7=existsClient(_0x4681c6,_0x24aaf6);return _0x3d37d7?_0x7ca00c=updateClient(_0x3d37d7['id'],{'id':_0x1254e5,'server':'connected'}):(_0x7ca00c={'id':_0x1254e5,'uuid':_0x4681c6,'bot':_0x24aaf6,'server':_0x2ff2ca(0x10c)},clients['push'](_0x7ca00c)),_0x7ca00c;},updateClient=(_0x2ebd34,_0xeca87f)=>{const _0x21f141=_0x36cb;let _0x423998=clients[_0x21f141(0x101)](_0xc15598=>_0xc15598['id']==_0x2ebd34);return _0x423998!=-0x1&&(clients[_0x423998]={...clients[_0x423998],..._0xeca87f}),clients[_0x423998];},existsClient=(_0x45fe38,_0x511860)=>{const _0x33b183=_0x36cb;let _0xa59d5c=![];return clients[_0x33b183(0x103)](_0x24d2ce=>{const _0x22765b=_0x33b183;_0x24d2ce[_0x22765b(0xfe)]===_0x45fe38&&_0x24d2ce[_0x22765b(0xf7)]===_0x511860&&(_0xa59d5c=_0x24d2ce);}),_0xa59d5c;},removeClient=_0x2493f9=>{const _0x1ae510=_0x36cb;let _0x443a02=clients[_0x1ae510(0x100)](_0x433bf2=>_0x433bf2['id']===_0x2493f9);if(_0x443a02)return _0x443a02['server']='disconnected',clients;},getClient=_0x3c271f=>{const _0x151641=_0x36cb;return clients[_0x151641(0x100)](_0x47d1db=>_0x47d1db['id']===_0x3c271f&&_0x47d1db[_0x151641(0x10b)]!==_0x151641(0xff));},getAllClients=(_0x41e348=![])=>{const _0x501a4c=_0x36cb;if(_0x41e348)return clients;else return clients['filter'](_0x4a372b=>_0x4a372b[_0x501a4c(0x10b)]!==_0x501a4c(0xff));},getClientsWithBotID=_0x21d950=>{const _0x850412=_0x36cb;return clients[_0x850412(0x109)](_0x1c4608=>_0x1c4608[_0x850412(0xf7)]===_0x21d950&&_0x1c4608[_0x850412(0x10b)]!==_0x850412(0xff));},getClientsWithUuid=_0x1ca73d=>{const _0x10f676=_0x36cb;return clients[_0x10f676(0x109)](_0x4213df=>_0x4213df[_0x10f676(0xfe)]===_0x1ca73d&&_0x4213df[_0x10f676(0x10b)]!==_0x10f676(0xff));};module[_0x3b0871(0x105)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};