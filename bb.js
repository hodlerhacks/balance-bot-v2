const _0x42472c=_0x2998;(function(_0x65006d,_0x54fa2a){const _0x3efd5c=_0x2998,_0xb02665=_0x65006d();while(!![]){try{const _0x51da03=parseInt(_0x3efd5c(0x125))/0x1*(-parseInt(_0x3efd5c(0x10c))/0x2)+-parseInt(_0x3efd5c(0x119))/0x3+-parseInt(_0x3efd5c(0x121))/0x4*(parseInt(_0x3efd5c(0x11b))/0x5)+parseInt(_0x3efd5c(0x120))/0x6+-parseInt(_0x3efd5c(0x12a))/0x7*(-parseInt(_0x3efd5c(0x105))/0x8)+parseInt(_0x3efd5c(0x10b))/0x9+parseInt(_0x3efd5c(0x113))/0xa;if(_0x51da03===_0x54fa2a)break;else _0xb02665['push'](_0xb02665['shift']());}catch(_0xbc77ec){_0xb02665['push'](_0xb02665['shift']());}}}(_0x349e,0x31ee5));const fs=require('fs'),argv=require(_0x42472c(0x104))(process[_0x42472c(0x106)][_0x42472c(0x11f)](0x2))[_0x42472c(0x106)],childProcess=require(_0x42472c(0x109)),nodeversion=process[_0x42472c(0x10a)][_0x42472c(0x11d)],minversion=0x10;nodeversion[_0x42472c(0x11a)]('.')[0x0]<minversion&&(console[_0x42472c(0x112)](),console['log']('-----------------------------------------------------------------------------------'),console[_0x42472c(0x112)](_0x42472c(0x116)+nodeversion+_0x42472c(0x123)+minversion+_0x42472c(0x129)),console['log'](_0x42472c(0x108)),console['log'](_0x42472c(0x12e)),console[_0x42472c(0x112)](),process[_0x42472c(0x114)](0x1));if(argv[_0x42472c(0x103)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x42472c(0x102)](argv['port'])&&(console[_0x42472c(0x112)](_0x42472c(0x124)+argv[_0x42472c(0x103)]+_0x42472c(0x12c)),process[_0x42472c(0x114)](0x1));}let args=[];argv['port']&&(args['push'](_0x42472c(0x111)),args[_0x42472c(0x131)](argv['port']));argv[_0x42472c(0x134)]&&(args['push'](_0x42472c(0x12d)),args[_0x42472c(0x131)](argv[_0x42472c(0x134)]));argv[_0x42472c(0x138)]&&(args[_0x42472c(0x131)](_0x42472c(0x11e)),args[_0x42472c(0x131)](argv[_0x42472c(0x138)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x42472c(0x131)]('-d');let bmpath=_0x42472c(0x107);const bmfile=_0x42472c(0x132),updatefile=_0x42472c(0x126);!fs[_0x42472c(0x135)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x32099f=_0x42472c,_0x41128d=function(){let _0x22b5f7=!![];return function(_0x2a2753,_0x1aa140){const _0x5dbba1=_0x22b5f7?function(){const _0x1cb680=_0x2998;if(_0x1aa140){const _0x510dfa=_0x1aa140[_0x1cb680(0x10d)](_0x2a2753,arguments);return _0x1aa140=null,_0x510dfa;}}:function(){};return _0x22b5f7=![],_0x5dbba1;};}(),_0x506278=_0x41128d(this,function(){const _0x38b17a=_0x2998;return _0x506278['toString']()['search'](_0x38b17a(0x110))[_0x38b17a(0x122)]()['constructor'](_0x506278)['search'](_0x38b17a(0x110));});_0x506278();let _0x33b192=![];const _0x459f19={'cwd':'','stdio':[_0x32099f(0x11c),'inherit','inherit',_0x32099f(0x12f)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x459f19),pid1['on'](_0x32099f(0x118),_0x1519cd=>{const _0x2a01c5=_0x32099f,_0xd862a2=Object[_0x2a01c5(0x128)](_0x1519cd)[0x1]==_0x2a01c5(0x133);switch(Object['keys'](_0x1519cd)[0x0]){case _0x2a01c5(0x117):if(_0xd862a2)startUpdate('2s');else startUpdate('2');break;case _0x2a01c5(0x10e):if(_0xd862a2)startUpdate('3s');else startUpdate('3');break;case _0x2a01c5(0x136):handleRestore();break;}}),pid1['on'](_0x32099f(0x137),function(_0x469b79){const _0x570140=_0x32099f;if(_0x33b192)return;_0x33b192=!![],logging(_0x570140(0x10f),_0x469b79);}),pid1['on']('exit',function(_0x57caf8){if(_0x33b192)return;_0x33b192=!![];if(!updating)startBM();});}function _0x349e(){const _0x2150b1=['versions','1404828SPMHrO','14xtvtwb','apply','reinstall','Unexpected\x20error:','(((.+)+)+)+$','--port','log','3744490oHugwq','exit','fork','The\x20installed\x20Node.js\x20version\x20is\x20','update','message','1039830NXQzbx','split','5XNnIEn','inherit','node','--user','slice','1713048ZLPefB','1462908AcAXHr','toString',',\x20but\x20version\x20','Error:\x20Invalid\x20argument\x20','15343nXAuzH','install.js','Balance\x20Bot\x20>\x20','values','\x20or\x20above\x20is\x20required','903NkmfxN','Error\x20while\x20updating\x20Balance\x20Bot:',',\x20must\x20be\x20a\x204\x20digit\x20number','--host','-----------------------------------------------------------------------------------','ipc','kill','push','bm.js','staging','host','existsSync','restore','error','user','test','port','yargs/yargs','12912HTBCgW','argv','bb/','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','child_process'];_0x349e=function(){return _0x2150b1;};return _0x349e();}function startUpdate(_0x198673){const _0x20db72=_0x42472c;updating=!![];if(pid1)pid1[_0x20db72(0x130)]();let _0x4b5a77=![];const _0xe2a2d6={'cwd':'','stdio':[_0x20db72(0x11c),'inherit',_0x20db72(0x11c),_0x20db72(0x12f)]};let _0x5d2501=[];if(staging)_0x5d2501[_0x20db72(0x131)](_0x198673+'s');else _0x5d2501[_0x20db72(0x131)](_0x198673);pid2=childProcess[_0x20db72(0x115)](updatefile,_0x5d2501,_0xe2a2d6),pid2['on']('error',function(_0x545c35){const _0x125387=_0x20db72;updating=![];if(_0x4b5a77)return;_0x4b5a77=!![],logging(_0x125387(0x12b),_0x545c35);}),pid2['on']('exit',function(_0x401cb5){updating=![];if(_0x4b5a77)return;_0x4b5a77=!![],startBM();});}function handleRestore(){const _0x50b4ef=_0x42472c;if(pid1)pid1[_0x50b4ef(0x130)]();}function _0x2998(_0x1333a3,_0x47a4de){const _0x373a33=_0x349e();return _0x2998=function(_0x355c60,_0x1097a6){_0x355c60=_0x355c60-0x102;let _0x349e28=_0x373a33[_0x355c60];return _0x349e28;},_0x2998(_0x1333a3,_0x47a4de);}function logging(_0x178e78){const _0x1e2e8d=_0x42472c;console[_0x1e2e8d(0x112)](_0x1e2e8d(0x127)+_0x178e78);}