const _0x51dbfd=_0x7882;function _0x7882(_0x7c926c,_0x47db0a){const _0x449ae1=_0x2e7d();return _0x7882=function(_0x5dee2b,_0x538759){_0x5dee2b=_0x5dee2b-0x10f;let _0x2e7d73=_0x449ae1[_0x5dee2b];return _0x2e7d73;},_0x7882(_0x7c926c,_0x47db0a);}(function(_0x31fdf2,_0x56042a){const _0x60ad2=_0x7882,_0x3b15c8=_0x31fdf2();while(!![]){try{const _0x23b96c=parseInt(_0x60ad2(0x116))/0x1*(-parseInt(_0x60ad2(0x120))/0x2)+-parseInt(_0x60ad2(0x126))/0x3*(-parseInt(_0x60ad2(0x112))/0x4)+parseInt(_0x60ad2(0x10f))/0x5*(parseInt(_0x60ad2(0x11e))/0x6)+-parseInt(_0x60ad2(0x111))/0x7*(-parseInt(_0x60ad2(0x124))/0x8)+-parseInt(_0x60ad2(0x11d))/0x9*(-parseInt(_0x60ad2(0x110))/0xa)+parseInt(_0x60ad2(0x11b))/0xb+-parseInt(_0x60ad2(0x127))/0xc*(parseInt(_0x60ad2(0x125))/0xd);if(_0x23b96c===_0x56042a)break;else _0x3b15c8['push'](_0x3b15c8['shift']());}catch(_0x20b80c){_0x3b15c8['push'](_0x3b15c8['shift']());}}}(_0x2e7d,0x24165));const _0x538759=function(){let _0x940f1e=!![];return function(_0x50a4e7,_0x1eeadc){const _0x4cdcd7=_0x940f1e?function(){if(_0x1eeadc){const _0x414652=_0x1eeadc['apply'](_0x50a4e7,arguments);return _0x1eeadc=null,_0x414652;}}:function(){};return _0x940f1e=![],_0x4cdcd7;};}(),_0x5dee2b=_0x538759(this,function(){const _0x11ee28=_0x7882;return _0x5dee2b[_0x11ee28(0x121)]()[_0x11ee28(0x118)](_0x11ee28(0x11a))['toString']()[_0x11ee28(0x117)](_0x5dee2b)[_0x11ee28(0x118)](_0x11ee28(0x11a));});function _0x2e7d(){const _0x2680dd=['25234BNpCWb','findIndex','9pzTuaD','1198662QDqajx','uuid','235646JsgUdX','toString','filter','server','8pmQWST','117ngKzCc','6072IUSnps','669684vUCTNL','starting','connected','5FaHOrx','1133970eKYPhE','1282673ISSLeZ','532xaOuKw','find','bot','exports','1vOnYZq','constructor','search','disconnected','(((.+)+)+)+$'];_0x2e7d=function(){return _0x2680dd;};return _0x2e7d();}_0x5dee2b();const clients=[],addClient=(_0x5396d2,_0x321206,_0xd4b800)=>{const _0x1d2e39=_0x7882;let _0x489481;const _0x407482=existsClient(_0x321206,_0xd4b800);return _0x407482?_0x489481=updateClient(_0x407482['id'],{'id':_0x5396d2,'server':_0x1d2e39(0x129)}):(_0x489481={'id':_0x5396d2,'uuid':_0x321206,'bot':_0xd4b800,'server':_0x1d2e39(0x128)},clients['push'](_0x489481)),_0x489481;},updateClient=(_0x570a18,_0x5dabe5)=>{const _0x5e6ef8=_0x7882;let _0x395c57=clients[_0x5e6ef8(0x11c)](_0x50745c=>_0x50745c['id']==_0x570a18);return _0x395c57!=-0x1&&(clients[_0x395c57]={...clients[_0x395c57],..._0x5dabe5}),clients[_0x395c57];},existsClient=(_0x18051c,_0x521046)=>{let _0x5295b7=![];return clients['forEach'](_0x4cbf6d=>{const _0x1b3386=_0x7882;_0x4cbf6d[_0x1b3386(0x11f)]===_0x18051c&&_0x4cbf6d[_0x1b3386(0x114)]===_0x521046&&(_0x5295b7=_0x4cbf6d);}),_0x5295b7;},removeClient=_0xc96eba=>{const _0x28fcf6=_0x7882;let _0xbb034d=clients[_0x28fcf6(0x113)](_0x3d8575=>_0x3d8575['id']===_0xc96eba);if(_0xbb034d)return _0xbb034d['server']=_0x28fcf6(0x119),clients;},getClient=_0xcf156b=>{const _0x488f4d=_0x7882;return clients[_0x488f4d(0x113)](_0x3235be=>_0x3235be['id']===_0xcf156b&&_0x3235be[_0x488f4d(0x123)]!==_0x488f4d(0x119));},getAllClients=(_0x291964=![])=>{const _0x4739da=_0x7882;if(_0x291964)return clients;else return clients['filter'](_0x118dea=>_0x118dea[_0x4739da(0x123)]!==_0x4739da(0x119));},getClientsWithBotID=_0x2135a0=>{const _0x5dc575=_0x7882;return clients[_0x5dc575(0x122)](_0x2d1dd6=>_0x2d1dd6[_0x5dc575(0x114)]===_0x2135a0&&_0x2d1dd6[_0x5dc575(0x123)]!==_0x5dc575(0x119));},getClientsWithUuid=_0x9bedd6=>{const _0x5405f5=_0x7882;return clients['filter'](_0x55c6d8=>_0x55c6d8[_0x5405f5(0x11f)]===_0x9bedd6&&_0x55c6d8[_0x5405f5(0x123)]!==_0x5405f5(0x119));};module[_0x51dbfd(0x115)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};