const _0x40dd7a=_0x4715;(function(_0x287cf8,_0x12a9b4){const _0x142e93=_0x4715,_0x32607=_0x287cf8();while(!![]){try{const _0x328079=-parseInt(_0x142e93(0x196))/0x1*(-parseInt(_0x142e93(0x1b4))/0x2)+-parseInt(_0x142e93(0x1c2))/0x3+-parseInt(_0x142e93(0x1a6))/0x4+parseInt(_0x142e93(0x1b0))/0x5*(parseInt(_0x142e93(0x1a7))/0x6)+parseInt(_0x142e93(0x1a0))/0x7*(parseInt(_0x142e93(0x1bb))/0x8)+-parseInt(_0x142e93(0x1af))/0x9+parseInt(_0x142e93(0x199))/0xa*(parseInt(_0x142e93(0x195))/0xb);if(_0x328079===_0x12a9b4)break;else _0x32607['push'](_0x32607['shift']());}catch(_0x539fe3){_0x32607['push'](_0x32607['shift']());}}}(_0x2e8d,0x9590b));function _0x4715(_0x5745ee,_0x5cddfa){const _0x3809bd=_0x2e8d();return _0x4715=function(_0x25a7a9,_0x45be70){_0x25a7a9=_0x25a7a9-0x195;let _0x2e8d2d=_0x3809bd[_0x25a7a9];return _0x2e8d2d;},_0x4715(_0x5745ee,_0x5cddfa);}const fs=require('fs'),argv=require('yargs/yargs')(process[_0x40dd7a(0x1c4)][_0x40dd7a(0x1b2)](0x2))[_0x40dd7a(0x1c4)],childProcess=require('child_process'),nodeversion=process[_0x40dd7a(0x1a8)]['node'],minversion=0x10;nodeversion[_0x40dd7a(0x1a4)]('.')[0x0]<minversion&&(console['log'](),console[_0x40dd7a(0x1b9)](_0x40dd7a(0x1c7)),console[_0x40dd7a(0x1b9)](_0x40dd7a(0x1c0)+nodeversion+',\x20but\x20version\x20'+minversion+_0x40dd7a(0x1aa)),console['log'](_0x40dd7a(0x197)),console['log'](_0x40dd7a(0x1c7)),console[_0x40dd7a(0x1b9)](),process[_0x40dd7a(0x1c5)](0x1));function _0x2e8d(){const _0x3f5b35=['staging','update','reinstall','fork','log','apply','9328MrtBoY','push','bb/','search','--user','The\x20installed\x20Node.js\x20version\x20is\x20','--host','1430070xrVKFG','toString','argv','exit','message','-----------------------------------------------------------------------------------','46783tAFwpH','1441XxdgoW','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','constructor','2030iWApiZ','bm.js','Error\x20while\x20updating\x20Balance\x20Bot:','host','--port','restore','error','2639RZPqhH','Error:\x20Invalid\x20argument\x20','ipc','inherit','split','Balance\x20Bot\x20>\x20','736532yHAOrG','3862158FIoCoY','versions','(((.+)+)+)+$','\x20or\x20above\x20is\x20required','Unexpected\x20error:','port','keys','kill','6927651CTUolW','5XBnYuV','user','slice','install.js','134HwJLXN'];_0x2e8d=function(){return _0x3f5b35;};return _0x2e8d();}if(argv[_0x40dd7a(0x1ac)]){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x40dd7a(0x1ac)])&&(console[_0x40dd7a(0x1b9)](_0x40dd7a(0x1a1)+argv['port']+',\x20must\x20be\x20a\x204\x20digit\x20number'),process[_0x40dd7a(0x1c5)](0x1));}let args=[];argv[_0x40dd7a(0x1ac)]&&(args['push'](_0x40dd7a(0x19d)),args[_0x40dd7a(0x1bc)](argv[_0x40dd7a(0x1ac)]));argv[_0x40dd7a(0x19c)]&&(args[_0x40dd7a(0x1bc)](_0x40dd7a(0x1c1)),args[_0x40dd7a(0x1bc)](argv[_0x40dd7a(0x19c)]));argv['user']&&(args[_0x40dd7a(0x1bc)](_0x40dd7a(0x1bf)),args[_0x40dd7a(0x1bc)](argv[_0x40dd7a(0x1b1)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args['push']('-d');let bmpath=_0x40dd7a(0x1bd);const bmfile=_0x40dd7a(0x19a),updatefile=_0x40dd7a(0x1b3);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x4100ad=_0x40dd7a,_0x113a0c=function(){let _0x155335=!![];return function(_0x13c09c,_0x2f9e96){const _0x306631=_0x155335?function(){const _0x31969b=_0x4715;if(_0x2f9e96){const _0x1e1fc9=_0x2f9e96[_0x31969b(0x1ba)](_0x13c09c,arguments);return _0x2f9e96=null,_0x1e1fc9;}}:function(){};return _0x155335=![],_0x306631;};}(),_0x26f11c=_0x113a0c(this,function(){const _0x109b76=_0x4715;return _0x26f11c[_0x109b76(0x1c3)]()[_0x109b76(0x1be)](_0x109b76(0x1a9))[_0x109b76(0x1c3)]()[_0x109b76(0x198)](_0x26f11c)['search'](_0x109b76(0x1a9));});_0x26f11c();let _0x3749aa=![];const _0x2d3997={'cwd':'','stdio':[_0x4100ad(0x1a3),_0x4100ad(0x1a3),_0x4100ad(0x1a3),_0x4100ad(0x1a2)]};pid1=childProcess[_0x4100ad(0x1b8)](bmpath+bmfile,args,_0x2d3997),pid1['on'](_0x4100ad(0x1c6),_0x1ada30=>{const _0x4b761a=_0x4100ad,_0x2c5393=Object['values'](_0x1ada30)[0x1]==_0x4b761a(0x1b5);switch(Object[_0x4b761a(0x1ad)](_0x1ada30)[0x0]){case _0x4b761a(0x1b6):if(_0x2c5393)startUpdate('2s');else startUpdate('2');break;case _0x4b761a(0x1b7):if(_0x2c5393)startUpdate('3s');else startUpdate('3');break;case _0x4b761a(0x19e):handleRestore();break;}}),pid1['on'](_0x4100ad(0x19f),function(_0x44b63f){const _0x2ff0d9=_0x4100ad;if(_0x3749aa)return;_0x3749aa=!![],logging(_0x2ff0d9(0x1ab),_0x44b63f);}),pid1['on'](_0x4100ad(0x1c5),function(_0x2597c7){if(_0x3749aa)return;_0x3749aa=!![];if(!updating)startBM();});}function startUpdate(_0x41eb45){const _0x51d498=_0x40dd7a;updating=!![];if(pid1)pid1[_0x51d498(0x1ae)]();let _0x49282c=![];const _0x1397ae={'cwd':'','stdio':[_0x51d498(0x1a3),_0x51d498(0x1a3),_0x51d498(0x1a3),_0x51d498(0x1a2)]};let _0xb3c319=[];if(staging)_0xb3c319[_0x51d498(0x1bc)](_0x41eb45+'s');else _0xb3c319['push'](_0x41eb45);pid2=childProcess[_0x51d498(0x1b8)](updatefile,_0xb3c319,_0x1397ae),pid2['on'](_0x51d498(0x19f),function(_0x381695){const _0x10c1cd=_0x51d498;updating=![];if(_0x49282c)return;_0x49282c=!![],logging(_0x10c1cd(0x19b),_0x381695);}),pid2['on'](_0x51d498(0x1c5),function(_0x2a0379){updating=![];if(_0x49282c)return;_0x49282c=!![],startBM();});}function handleRestore(){const _0x11b9e3=_0x40dd7a;if(pid1)pid1[_0x11b9e3(0x1ae)]();}function logging(_0x341c23){const _0x5bd2ba=_0x40dd7a;console[_0x5bd2ba(0x1b9)](_0x5bd2ba(0x1a5)+_0x341c23);}